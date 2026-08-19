// Lake map: OSM base, real MNRF bathymetry, GPS waypoints, catch pins, offline tiles.
import { h, sheet, toast } from '../ui.js';
import { store, uid } from '../store.js';
import { KAGAWONG } from '../solunar.js';

const WP_TYPES = [
  { v: 'spot', ico: '🎯', label: 'Hot spot' },
  { v: 'weeds', ico: '🌿', label: 'Weed edge' },
  { v: 'rocks', ico: '🪨', label: 'Rock pile' },
  { v: 'launch', ico: '🚤', label: 'Launch' },
  { v: 'camp', ico: '🏕️', label: 'Camp/dock' },
];
const wpIco = v => (WP_TYPES.find(t => t.v === v) || WP_TYPES[0]).ico;

// Lake Kagawong prefetch box (covers whole lake + village)
const BOX = { s: 45.79, w: -82.37, n: 45.95, e: -82.15 };
const TILE_URL = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png';

function tilesForBox(box, z) {
  const t = [];
  const x1 = Math.floor(((box.w + 180) / 360) * 2 ** z);
  const x2 = Math.floor(((box.e + 180) / 360) * 2 ** z);
  const lat2y = lat => Math.floor((1 - Math.log(Math.tan(lat * Math.PI / 180) + 1 / Math.cos(lat * Math.PI / 180)) / Math.PI) / 2 * 2 ** z);
  const y1 = lat2y(box.n), y2 = lat2y(box.s);
  for (let x = x1; x <= x2; x++) for (let y = y1; y <= y2; y++) t.push({ z, x, y });
  return t;
}

async function downloadOffline(btn) {
  const zooms = [9, 10, 11, 12, 13, 14, 15];
  const all = zooms.flatMap(z => tilesForBox(BOX, z));
  const cache = await caches.open('tiles-v1');
  let done = 0, failed = 0;
  btn.textContent = '0%';
  for (let i = 0; i < all.length; i += 6) {
    await Promise.all(all.slice(i, i + 6).map(async ({ z, x, y }) => {
      const url = TILE_URL.replace('{z}', z).replace('{x}', x).replace('{y}', y);
      try {
        if (!(await cache.match(url))) {
          const res = await fetch(url, { mode: 'no-cors' });
          await cache.put(url, res);
        }
      } catch { failed++; }
      done++;
    }));
    btn.textContent = Math.round((done / all.length) * 100) + '%';
  }
  btn.textContent = '💾';
  toast(failed ? `Map saved (${failed} tiles skipped)` : `✓ Lake map saved for offline (${all.length} tiles)`);
  store.set('offlineMap', Date.now());
}

// Depth (m, negative) → styling + label
function depthStyle(dm) {
  const ft = Math.round(Math.abs(dm) * 3.28084);
  const t = Math.min(1, Math.abs(dm) / 34);
  const shade = Math.round(200 - t * 130);
  return { ft, color: `rgb(40, ${shade * 0.75 + 40}, ${shade + 55})`, weight: ft > 90 ? 2.5 : 1.8 };
}

let lastCenter = null;

export default {
  id: 'map',
  render(root) {
    const mapDiv = h('div', { id: 'lmap' });
    const fabLocate = h('button', { class: 'fab', title: 'My location' }, '📍');
    const fabPin = h('button', { class: 'fab', title: 'Drop waypoint at crosshair' }, '📌');
    const fabSave = h('button', { class: 'fab', title: 'Save map offline' }, '💾');
    const wrap = h('div', { class: 'map-wrap' },
      mapDiv,
      h('div', { class: 'map-crosshair' }, '✛'),
      h('div', { class: 'map-fabs' }, fabLocate, fabPin, fabSave));
    const wpList = h('div', { class: 'card' });
    const facts = h('div', { class: 'card' },
      h('h2', {}, '🧠 Know your lake'),
      h('div', { class: 'statgrid' },
        h('div', { class: 'stat' }, h('div', { class: 'stat-v' }, '110 ft'), h('div', { class: 'stat-k' }, 'Max depth')),
        h('div', { class: 'stat' }, h('div', { class: 'stat-v' }, '36 ft'), h('div', { class: 'stat-k' }, 'Avg depth')),
        h('div', { class: 'stat' }, h('div', { class: 'stat-v' }, '13,700 ac'), h('div', { class: 'stat-k' }, 'Surface'))),
      h('p', { style: 'font-size:14px' }, 'Manitoulin’s second-largest lake, famous for smallmouth bass and perch, with naturally reproducing walleye topped up by local stocking (8,377 fingerlings in 2025) plus pike, pumpkinseed and rock bass. Clear water (15-20 ft visibility), loads of structure: submerged islands, shoals, rock shelves and weedy bays.'),
      h('ul', { class: 'ticks' },
        h('li', {}, 'Local wisdom: daytime walleye hold on rock shelves, submerged islands and points in the 15-25 ft band; perch and small pike ambush in 8-15 ft.'),
        h('li', {}, 'Wind and cloud push everything shallower, flat sun pushes it deeper.'),
        h('li', {}, 'Community-known spot: out front of Fred’s Camp on the west side.'),
        h('li', {}, 'Boat launches: village of Kagawong (north end, into the river) and Perivale Rd at Spring Bay (south end). Watch for shoals, this lake eats props.')),
      h('p', { class: 'reg-note' }, 'Kagawong River below the falls is a fish sanctuary Sep 25 - Oct 31 (no fishing, Hwy 540 bridge to Henry St bridge).'),
      h('p', { class: 'faint' }, 'Depth contours: Ontario MNRF open data (20/40/60/80 ft + deep basin). Shoreline © OpenStreetMap.'));
    root.append(
      wrap,
      h('p', { class: 'faint', style: 'margin:8px 2px' },
        '✛ centre the crosshair, then 📌 to mark a spot. 💾 once on Wi-Fi saves the whole lake for offline.'),
      wpList,
      facts);

    const start = lastCenter || store.get('mapView') || { lat: KAGAWONG.lat, lng: KAGAWONG.lng, z: 12 };
    const map = L.map(mapDiv, { zoomControl: false }).setView([start.lat, start.lng], start.z || 12);
    L.tileLayer(TILE_URL, {
      className: 'basetiles', maxZoom: 18,
      attribution: '© OpenStreetMap',
    }).addTo(map);
    map.on('moveend', () => {
      const c = map.getCenter();
      lastCenter = { lat: c.lat, lng: c.lng, z: map.getZoom() };
      store.set('mapView', lastCenter);
    });

    // --- bathymetry + shoreline overlays (best-effort) ---
    fetch('data/kagawong-lake.geojson').then(r => r.ok ? r.json() : null).then(gj => {
      if (!gj) return;
      L.geoJSON(gj, { style: { color: '#3ecfb2', weight: 1.5, fill: false, opacity: 0.7 } }).addTo(map);
    }).catch(() => {});
    fetch('data/kagawong-bathymetry.geojson').then(r => r.ok ? r.json() : null).then(gj => {
      if (!gj) return;
      L.geoJSON(gj, {
        style: f => {
          const s = depthStyle(f.properties.DEPTH ?? f.properties.depth ?? 0);
          return { color: s.color, weight: s.weight, opacity: 0.9 };
        },
        onEachFeature: (f, layer) => {
          const s = depthStyle(f.properties.DEPTH ?? f.properties.depth ?? 0);
          layer.bindTooltip(`${s.ft} ft`, { sticky: true, className: 'depth-label', direction: 'top' });
        },
      }).addTo(map);
    }).catch(() => {});

    // --- waypoints ---
    const markers = {};
    function addMarker(wp) {
      const m = L.marker([wp.lat, wp.lng], {
        icon: L.divIcon({ className: 'wp-emoji', html: wpIco(wp.type), iconSize: [24, 24], iconAnchor: [12, 12] }),
      }).addTo(map);
      const del = h('button', { class: 'btn danger small', style: 'margin-top:6px' }, 'Delete');
      del.onclick = () => {
        store.set('waypoints', store.get('waypoints', []).filter(x => x.id !== wp.id));
        map.removeLayer(m); drawList(); toast('Waypoint deleted');
      };
      m.bindPopup(h('div', {}, h('b', {}, `${wpIco(wp.type)} ${wp.name}`),
        h('div', { class: 'faint' }, `${wp.lat.toFixed(5)}, ${wp.lng.toFixed(5)}`), del));
      markers[wp.id] = m;
      return m;
    }
    function drawList() {
      const wps = store.get('waypoints', []);
      wpList.innerHTML = '';
      wpList.appendChild(h('h2', {}, `📌 My spots (${wps.length})`));
      if (!wps.length) wpList.appendChild(h('p', { class: 'muted' }, 'No waypoints yet. Line up the crosshair on a spot and tap 📌 — works with zero cell signal.'));
      wps.forEach(wp => wpList.appendChild(h('div', { class: 'row', onclick: () => { map.setView([wp.lat, wp.lng], 15); markers[wp.id]?.openPopup(); window.scrollTo(0, 0); } },
        h('div', { style: 'font-size:20px' }, wpIco(wp.type)),
        h('div', { class: 'row-main' },
          h('div', { class: 'row-title' }, wp.name),
          h('div', { class: 'row-sub' }, new Date(wp.ts).toLocaleDateString())),
        h('div', { class: 'row-arrow' }, '›'))));
    }
    store.get('waypoints', []).forEach(addMarker);
    drawList();

    // --- catch pins ---
    for (const c of store.get('catches', [])) {
      if (c.lat == null) continue;
      L.marker([c.lat, c.lng], {
        icon: L.divIcon({ className: 'wp-emoji', html: '🐟', iconSize: [24, 24], iconAnchor: [12, 12] }),
      }).addTo(map).bindPopup(`<b>🐟 ${c.speciesName || ''}</b><br>${c.angler || ''} · ${c.len ? c.len + '"' : ''} ${c.lbTxt || ''}<br><span style="font-size:11px">${new Date(c.ts).toLocaleString()}</span>`);
    }

    // --- FABs ---
    fabPin.onclick = () => {
      const c = map.getCenter();
      let type = 'spot';
      const nameIn = h('input', { type: 'text', placeholder: 'e.g. North weedline gap' });
      const chips = h('div', { class: 'chips' });
      WP_TYPES.forEach(t => chips.appendChild(h('div', {
        class: 'chip' + (t.v === type ? ' active' : ''),
        onclick: e => { type = t.v; chips.querySelectorAll('.chip').forEach(x => x.classList.remove('active')); e.currentTarget.classList.add('active'); },
      }, `${t.ico} ${t.label}`)));
      const s = sheet(
        h('h2', {}, '📌 New waypoint'),
        h('p', { class: 'faint mt0' }, `${c.lat.toFixed(5)}, ${c.lng.toFixed(5)}`),
        h('div', { class: 'field' }, h('label', {}, 'Name'), nameIn),
        chips,
        h('button', {
          class: 'btn block', onclick: () => {
            const wp = { id: uid(), name: nameIn.value.trim() || 'Spot', type, lat: c.lat, lng: c.lng, ts: Date.now() };
            store.set('waypoints', [...store.get('waypoints', []), wp]);
            addMarker(wp); drawList(); s.close(); toast('📌 Waypoint saved');
          },
        }, 'Save waypoint'));
      setTimeout(() => nameIn.focus(), 250);
    };

    let meMarker = null;
    fabLocate.onclick = () => {
      if (!navigator.geolocation) return toast('No GPS available');
      fabLocate.textContent = '⏳';
      navigator.geolocation.getCurrentPosition(pos => {
        fabLocate.textContent = '📍';
        const { latitude: lat, longitude: lng, accuracy } = pos.coords;
        if (meMarker) map.removeLayer(meMarker);
        meMarker = L.circleMarker([lat, lng], { radius: 8, color: '#fff', weight: 2, fillColor: '#2a7fff', fillOpacity: 1 }).addTo(map)
          .bindPopup(`You are here (±${Math.round(accuracy)} m)`);
        map.setView([lat, lng], Math.max(map.getZoom(), 14));
        toast('📍 Locked on');
      }, () => { fabLocate.textContent = '📍'; toast('Could not get GPS fix'); }, { enableHighAccuracy: true, timeout: 12000 });
    };

    fabSave.onclick = () => {
      if (!('caches' in window)) return toast('Offline cache not supported');
      downloadOffline(fabSave);
    };
  },
};
