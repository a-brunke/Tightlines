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

// ---------- depth finder ----------
// Estimates depth at a point by finding which contour rings contain it and
// interpolating between that contour and the next deeper one by distance.
let bathyRings = null;   // [{ level (m, positive), coords: [[lng,lat],...] }]
let lakeRings = null;    // { outer: [...], holes: [[...], ...] }

function toXY(lng, lat, lat0) {
  return [lng * 111320 * Math.cos(lat0 * Math.PI / 180), lat * 110540];
}
function pointInRing(p, ring) {
  let inside = false;
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    const [xi, yi] = ring[i], [xj, yj] = ring[j];
    if (((yi > p[1]) !== (yj > p[1])) && (p[0] < (xj - xi) * (p[1] - yi) / (yj - yi) + xi)) inside = !inside;
  }
  return inside;
}
function distToRing(p, ring, lat0) {
  const [px, py] = toXY(p[0], p[1], lat0);
  let best = Infinity;
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    const [ax, ay] = toXY(ring[j][0], ring[j][1], lat0);
    const [bx, by] = toXY(ring[i][0], ring[i][1], lat0);
    const dx = bx - ax, dy = by - ay;
    const len2 = dx * dx + dy * dy;
    const t = len2 ? Math.max(0, Math.min(1, ((px - ax) * dx + (py - ay) * dy) / len2)) : 0;
    const ex = ax + t * dx - px, ey = ay + t * dy - py;
    best = Math.min(best, ex * ex + ey * ey);
  }
  return Math.sqrt(best);
}

export function estimateDepth(lat, lng) {
  if (!lakeRings) return null;
  const p = [lng, lat];
  if (!pointInRing(p, lakeRings.outer) || lakeRings.holes.some(hh => pointInRing(p, hh))) {
    return { land: true };
  }
  if (!bathyRings || !bathyRings.length) return null;
  const levels = [...new Set(bathyRings.map(r => r.level))].sort((a, b) => a - b);
  let L = 0;
  for (const r of bathyRings) {
    if (r.level > L && pointInRing(p, r.coords)) L = r.level;
  }
  const deeper = levels.filter(v => v > L);
  const ft = m => m * 3.28084;
  if (!deeper.length) return { ft: Math.round(ft(L)), plus: true };
  const U = deeper[0];
  const nearL = L === 0
    ? Math.min(distToRing(p, lakeRings.outer, lat), ...lakeRings.holes.map(hh => distToRing(p, hh, lat)))
    : Math.min(...bathyRings.filter(r => r.level === L).map(r => distToRing(p, r.coords, lat)));
  const nearU = Math.min(...bathyRings.filter(r => r.level === U).map(r => distToRing(p, r.coords, lat)));
  const est = L + (U - L) * (nearL / (nearL + nearU || 1));
  return { ft: Math.round(ft(est)), lo: Math.round(ft(L)), hi: Math.round(ft(U)) };
}

export default {
  id: 'map',
  render(root) {
    const mapDiv = h('div', { id: 'lmap' });
    const fabLocate = h('button', { class: 'fab', title: 'My location' }, '📍');
    const fabPin = h('button', { class: 'fab', title: 'Drop waypoint at crosshair' }, '📌');
    const fabSave = h('button', { class: 'fab', title: 'Save map offline' }, '💾');
    const depthChip = h('div', {
      class: 'depth-chip',
      onclick: () => toast('Estimated from MNRF survey contours at the crosshair. Fish by it, don’t navigate by it!'),
    }, '📏 …');
    const wrap = h('div', { class: 'map-wrap' },
      mapDiv,
      h('div', { class: 'map-crosshair' }, '✛'),
      depthChip,
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

    const start = store.get('mapView') || { lat: KAGAWONG.lat, lng: KAGAWONG.lng, z: 12 };
    const map = L.map(mapDiv, { zoomControl: false }).setView([start.lat, start.lng], start.z || 12);
    L.tileLayer(TILE_URL, {
      className: 'basetiles', maxZoom: 18,
      attribution: '© OpenStreetMap',
    }).addTo(map);
    map.on('moveend', () => {
      const c = map.getCenter();
      store.set('mapView', { lat: c.lat, lng: c.lng, z: map.getZoom() });
    });

    // live depth-under-crosshair readout
    let depthPending = false;
    function updateDepthChip() {
      const c = map.getCenter();
      const d = estimateDepth(c.lat, c.lng);
      if (!d) { depthChip.textContent = '📏 …'; return; }
      if (d.land) depthChip.textContent = '🏝 land';
      else if (d.plus) depthChip.textContent = `📏 ${d.ft}+ ft`;
      else depthChip.textContent = `📏 ~${d.ft} ft`;
    }
    map.on('move', () => {
      if (depthPending) return;
      depthPending = true;
      requestAnimationFrame(() => { depthPending = false; updateDepthChip(); });
    });
    updateDepthChip();

    // --- depth-shaded fishing chart (filled bathymetry) ---
    // Band colors, shallow → deep. Filled in painter's order so deeper covers shallower.
    const BAND = ['#9fd3ee', '#79bde4', '#54a3d6', '#3a86bf', '#2a689f', '#1f5185', '#1a4674', '#153a63'];
    const labelLayer = L.layerGroup();
    fetch('data/kagawong-lake.geojson').then(r => r.ok ? r.json() : null).then(gj => {
      if (!gj) return;
      const poly = (gj.features ? gj.features[0] : gj).geometry;
      const rings = poly.type === 'Polygon' ? poly.coordinates : poly.coordinates[0];
      lakeRings = { outer: rings[0], holes: rings.slice(1) };
      updateDepthChip();
      // 0-20 ft band = the whole lake, islands cut out automatically
      L.geoJSON(gj, {
        style: { color: '#2b7fb8', weight: 1.6, opacity: 0.9, fill: true, fillColor: BAND[0], fillOpacity: 0.55 },
      }).addTo(map);
      drawContours();
    }).catch(() => {});

    let bathyGJ = null;
    fetch('data/kagawong-bathymetry.geojson').then(r => r.ok ? r.json() : null).then(gj => {
      if (!gj) return;
      bathyGJ = gj;
      bathyRings = [];
      for (const f of gj.features) {
        const level = Math.abs(f.properties.DEPTH ?? f.properties.depth ?? 0);
        const lines = f.geometry.type === 'LineString' ? [f.geometry.coordinates] : f.geometry.coordinates;
        for (const coords of lines) bathyRings.push({ level, coords });
      }
      updateDepthChip();
      drawContours();
    }).catch(() => {});

    // Draw once both the lake fill (paints first) and contours are loaded.
    let contoursDrawn = false;
    function drawContours() {
      if (contoursDrawn || !bathyGJ || !lakeRings) return;
      contoursDrawn = true;
      const levels = [...new Set(bathyRings.map(r => r.level))].sort((a, b) => a - b);
      const sorted = [...bathyRings].sort((a, b) => a.level - b.level);
      for (const r of sorted) {
        const ft = Math.round(r.level * 3.28084);
        const band = BAND[Math.min(levels.indexOf(r.level) + 1, BAND.length - 1)];
        // punch out any island that sits inside this contour, or the fill paints over it
        const latlngs = [r.coords.map(c => [c[1], c[0]])];
        for (const hole of lakeRings.holes) {
          if (pointInRing(hole[0], r.coords)) latlngs.push(hole.map(c => [c[1], c[0]]));
        }
        L.polygon(latlngs, {
          color: '#1b4d77', weight: 1, opacity: 0.8,
          fillColor: band, fillOpacity: 0.6, interactive: true,
        }).bindTooltip(`deeper than ${ft} ft`, { sticky: true, className: 'depth-label', direction: 'top' })
          .addTo(map);
        // permanent label on the contour edge (skip the tiny deep-basin rings except the deepest)
        if (r.coords.length >= 17) {
          const v = r.coords[Math.floor(r.coords.length * 0.3)];
          L.marker([v[1], v[0]], {
            icon: L.divIcon({ className: 'depth-lab', html: String(ft), iconSize: [30, 14], iconAnchor: [15, 7] }),
            interactive: false, keyboard: false,
          }).addTo(labelLayer);
        }
      }
      syncLabels();
    }
    const syncLabels = () => {
      if (map.getZoom() >= 12) { if (!map.hasLayer(labelLayer)) labelLayer.addTo(map); }
      else if (map.hasLayer(labelLayer)) map.removeLayer(labelLayer);
    };
    map.on('zoomend', syncLabels);

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
