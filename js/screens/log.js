// Catch log + family derby leaderboard.
import { h, sheet, toast, fmtTime, fmtDate } from '../ui.js';
import { store, uid, savePhoto, getPhoto, delPhoto, shrinkImage, blobToDataURL, dataURLToBlob } from '../store.js';
import { FISH } from '../data/fish.js';
import { estimateWeight, fmtWeight } from '../tools.js';

let tab = 'catches';

function speciesName(id) { return FISH.find(f => f.id === id)?.name || id; }

// ---------- new catch form ----------
export function openCatchForm(onSaved) {
  const anglers = store.get('anglers', []);
  const gps = { lat: null, lng: null };
  const gpsStatus = h('span', { class: 'faint' }, '📡 getting GPS…');
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      p => { gps.lat = p.coords.latitude; gps.lng = p.coords.longitude; gpsStatus.textContent = '📍 location captured'; },
      () => { gpsStatus.textContent = '📡 no GPS (that’s fine)'; },
      { enableHighAccuracy: true, timeout: 10000 });
  } else gpsStatus.textContent = '';

  const anglerSel = h('select', {},
    anglers.map(a => h('option', { value: a }, a)),
    h('option', { value: '__new__' }, '+ New angler…'));
  const newAngler = h('input', { type: 'text', placeholder: 'Name', class: anglers.length ? 'hidden' : '' });
  if (!anglers.length) anglerSel.classList.add('hidden');
  anglerSel.onchange = () => newAngler.classList.toggle('hidden', anglerSel.value !== '__new__');

  const specSel = h('select', {}, FISH.map(f => h('option', { value: f.id }, f.name)));
  const lenIn = h('input', { type: 'number', inputmode: 'decimal', placeholder: 'inches' });
  const girIn = h('input', { type: 'number', inputmode: 'decimal', placeholder: 'optional' });
  const lureIn = h('input', { type: 'text', placeholder: 'e.g. gold #4 spinner' });
  const notesIn = h('textarea', { placeholder: 'depth, structure, the story…' });
  const photoIn = h('input', { type: 'file', accept: 'image/*', capture: 'environment' });
  const wOut = h('div', { class: 'muted center', style: 'padding:4px 0 8px' }, '');
  const updW = () => {
    const est = estimateWeight(specSel.value, parseFloat(lenIn.value), parseFloat(girIn.value) || 0);
    wOut.textContent = est ? `≈ ${fmtWeight(est.lb)} (${est.kg.toFixed(1)} kg)` : '';
  };
  [specSel, lenIn, girIn].forEach(el => el.addEventListener('input', updW));

  const saveBtn = h('button', { class: 'btn block' }, '🐟 Save catch');
  const s = sheet(
    h('h2', {}, '🐟 Log a catch'),
    h('div', { class: 'spread' }, h('span'), gpsStatus),
    h('div', { class: 'field' }, h('label', {}, 'Angler'), anglerSel, newAngler),
    h('div', { class: 'field' }, h('label', {}, 'Species'), specSel),
    h('div', { class: 'field-row' },
      h('div', { class: 'field' }, h('label', {}, 'Length (in)'), lenIn),
      h('div', { class: 'field' }, h('label', {}, 'Girth (in)'), girIn)),
    wOut,
    h('div', { class: 'field' }, h('label', {}, 'Caught on'), lureIn),
    h('div', { class: 'field' }, h('label', {}, 'Photo'), photoIn),
    h('div', { class: 'field' }, h('label', {}, 'Notes'), notesIn),
    saveBtn);

  saveBtn.onclick = async () => {
    let angler = anglerSel.classList.contains('hidden') || anglerSel.value === '__new__'
      ? newAngler.value.trim() : anglerSel.value;
    if (!angler) { toast('Who caught it? Add an angler name'); return; }
    if (!anglers.includes(angler)) store.set('anglers', [...anglers, angler]);

    saveBtn.disabled = true; saveBtn.textContent = 'Saving…';
    const len = parseFloat(lenIn.value) || null;
    const gir = parseFloat(girIn.value) || null;
    const est = len ? estimateWeight(specSel.value, len, gir || 0) : null;
    const c = {
      id: uid(), ts: Date.now(), angler,
      speciesId: specSel.value, speciesName: speciesName(specSel.value),
      len, girth: gir, lb: est ? +est.lb.toFixed(2) : null, lbTxt: est ? fmtWeight(est.lb) : '',
      lure: lureIn.value.trim(), notes: notesIn.value.trim(),
      lat: gps.lat, lng: gps.lng, photoId: null,
    };
    try {
      if (photoIn.files[0]) {
        c.photoId = 'ph_' + c.id;
        await savePhoto(c.photoId, await shrinkImage(photoIn.files[0]));
      }
    } catch { c.photoId = null; toast('Photo could not be saved (catch still logged)'); }
    store.set('catches', [c, ...store.get('catches', [])]);
    s.close();
    toast(`🎉 ${c.speciesName} logged for ${angler}!`);
    onSaved && onSaved();
  };
}

// ---------- catch list ----------
function photoBox(c) {
  const box = h('div', { class: 'catch-photo' }, '🐟');
  if (c.photoId) getPhoto(c.photoId).then(blob => {
    if (blob) { box.innerHTML = ''; box.appendChild(h('img', { src: URL.createObjectURL(blob), alt: '' })); }
  });
  return box;
}

function catchDetail(c, redraw) {
  const del = h('button', { class: 'btn danger' }, 'Delete catch');
  const s = sheet(
    h('div', { style: 'display:flex;justify-content:center' },
      (() => { const b = photoBox(c); b.style.width = '100%'; b.style.height = '220px'; b.style.fontSize = '60px'; return b; })()),
    h('h2', { style: 'margin-top:10px' }, `${c.speciesName}`),
    h('p', { class: 'muted mt0' }, `${c.angler} · ${fmtDate(c.ts)} ${fmtTime(c.ts)}`),
    h('div', { class: 'statgrid' },
      h('div', { class: 'stat' }, h('div', { class: 'stat-v' }, c.len ? `${c.len}"` : '—'), h('div', { class: 'stat-k' }, 'Length')),
      h('div', { class: 'stat' }, h('div', { class: 'stat-v' }, c.lbTxt || '—'), h('div', { class: 'stat-k' }, 'Est. weight')),
      h('div', { class: 'stat' }, h('div', { class: 'stat-v', style: 'font-size:13px' }, c.lure || '—'), h('div', { class: 'stat-k' }, 'Lure'))),
    c.notes ? h('p', {}, c.notes) : null,
    c.lat != null ? h('button', { class: 'btn secondary block', onclick: () => { s.close(); store.set('mapView', { lat: c.lat, lng: c.lng, z: 15 }); location.hash = '#/map'; } }, '🗺️ Show on map') : null,
    h('div', { style: 'height:8px' }),
    del);
  del.onclick = () => {
    if (!confirm('Delete this catch?')) return;
    if (c.photoId) delPhoto(c.photoId);
    store.set('catches', store.get('catches', []).filter(x => x.id !== c.id));
    s.close(); redraw(); toast('Catch deleted');
  };
}

// ---------- derby ----------
function derbyView(host) {
  const catches = store.get('catches', []);
  if (!catches.length) {
    host.appendChild(h('div', { class: 'card center' },
      h('div', { style: 'font-size:44px' }, '🏆'),
      h('h2', {}, 'The Kagawong Cup'),
      h('p', { class: 'muted' }, 'Every logged catch counts. Biggest fish, most fish, most species — three ways to claim glory at the dinner table.')));
    return;
  }
  const byAngler = {};
  for (const c of catches) {
    const a = byAngler[c.angler] ??= { name: c.angler, n: 0, species: new Set(), big: null };
    a.n++;
    a.species.add(c.speciesId);
    const w = c.lb ?? -1, bw = a.big?.lb ?? -1;
    if (!a.big || w > bw || (w === bw && (c.len || 0) > (a.big.len || 0))) a.big = c;
  }
  const anglers = Object.values(byAngler);
  const biggest = [...catches].filter(c => c.lb != null).sort((x, y) => y.lb - x.lb || (y.len || 0) - (x.len || 0)).slice(0, 3);
  const most = [...anglers].sort((x, y) => y.n - x.n)[0];
  const diverse = [...anglers].sort((x, y) => y.species.size - x.species.size)[0];

  host.appendChild(h('div', { class: 'card' },
    h('h2', {}, '🏆 Biggest fish'),
    biggest.length ? h('div', { class: 'podium' },
      [1, 0, 2].map(rank => {
        const c = biggest[rank];
        if (!c) return h('div');
        return h('div', { class: 'pod' + (rank === 0 ? ' first' : '') },
          h('div', { class: 'pod-medal' }, ['🥇', '🥈', '🥉'][rank]),
          h('div', { class: 'pod-name' }, c.angler),
          h('div', { class: 'pod-stat' }, `${c.speciesName}`),
          h('div', { class: 'pod-stat' }, h('b', {}, c.lbTxt), c.len ? ` · ${c.len}"` : ''));
      })) : h('p', { class: 'muted' }, 'Log lengths to compete for biggest fish.')));

  host.appendChild(h('div', { class: 'card' },
    h('h2', {}, '🎖️ Titles'),
    h('div', { class: 'row', style: 'cursor:default' }, h('div', { style: 'font-size:22px' }, '🎣'),
      h('div', { class: 'row-main' }, h('div', { class: 'row-title' }, 'Most fish'), h('div', { class: 'row-sub' }, `${most.name} · ${most.n} catches`))),
    h('div', { class: 'row', style: 'cursor:default' }, h('div', { style: 'font-size:22px' }, '🌈'),
      h('div', { class: 'row-main' }, h('div', { class: 'row-title' }, 'Most species'), h('div', { class: 'row-sub' }, `${diverse.name} · ${diverse.species.size} species`)))));

  host.appendChild(h('div', { class: 'now-flag' },
    h('b', {}, '🚤 Two boats? '),
    'Tap ⬆ Share on one phone, send the file with Quick Share (works with no signal), then ⬇ Merge on the other. Catches and photos combine into one leaderboard, no duplicates.'));

  host.appendChild(h('div', { class: 'card' },
    h('h2', {}, '📊 Standings'),
    h('table', { class: 'lb' },
      h('tr', {}, h('th', {}, 'Angler'), h('th', {}, 'Fish'), h('th', {}, 'Species'), h('th', {}, 'Best')),
      anglers.sort((x, y) => y.n - x.n).map(a => h('tr', {},
        h('td', {}, h('b', {}, a.name)), h('td', {}, String(a.n)), h('td', {}, String(a.species.size)),
        h('td', {}, a.big?.lbTxt ? `${a.big.lbTxt} ${a.big.speciesName}` : '—'))))));
}

// Bundle all trip data (photos embedded as data URLs) for boat-to-boat merging.
export async function packTrip() {
  const catches = [];
  for (const c of store.get('catches', [])) {
    const copy = { ...c };
    if (c.photoId) {
      const blob = await getPhoto(c.photoId);
      if (blob) copy.photo = await blobToDataURL(blob);
    }
    catches.push(copy);
  }
  return {
    app: 'TightLines', version: 2, exported: new Date().toISOString(),
    from: (store.get('anglers', [])[0] || 'angler'),
    anglers: store.get('anglers', []),
    catches,
    waypoints: store.get('waypoints', []),
  };
}

// Merge a trip file's contents into local storage. Returns counts of new items.
export async function mergeTrip(data) {
  if (!data || data.app !== 'TightLines' || !Array.isArray(data.catches)) return null;

  const anglers = new Set(store.get('anglers', []));
  (data.anglers || []).forEach(a => typeof a === 'string' && anglers.add(a));
  store.set('anglers', [...anglers]);

  const wps = store.get('waypoints', []);
  const wpIds = new Set(wps.map(w => w.id));
  let newWp = 0;
  for (const w of data.waypoints || []) {
    if (w && w.id && !wpIds.has(w.id)) { wps.push(w); newWp++; }
  }
  store.set('waypoints', wps);

  const catches = store.get('catches', []);
  const cIds = new Set(catches.map(c => c.id));
  let newC = 0;
  for (const c of data.catches) {
    if (!c || !c.id || cIds.has(c.id)) continue;
    const { photo, ...entry } = c;
    if (photo) {
      entry.photoId = entry.photoId || 'ph_' + entry.id;
      try { await savePhoto(entry.photoId, await dataURLToBlob(photo)); } catch { entry.photoId = null; }
    }
    catches.push(entry); newC++;
  }
  catches.sort((a, b) => b.ts - a.ts);
  store.set('catches', catches);
  return { newC, newWp, from: data.from };
}

// Share all trip data as a JSON file.
async function exportTrip() {
  toast('Packing trip file…');
  const data = await packTrip();
  const blob = new Blob([JSON.stringify(data)], { type: 'application/json' });
  const file = new File([blob], `tightlines-trip-${new Date().toISOString().slice(0, 10)}.json`, { type: 'application/json' });
  if (navigator.canShare && navigator.canShare({ files: [file] })) {
    try { await navigator.share({ files: [file], title: 'TightLines trip data' }); return; } catch { /* fall through */ }
  }
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = file.name;
  a.click();
  toast('Trip file saved');
}

// Import a trip file from another phone and merge it (no duplicates).
function importTrip(redraw) {
  const input = h('input', { type: 'file', accept: '.json,application/json,text/plain' });
  input.onchange = async () => {
    const f = input.files[0];
    if (!f) return;
    let data;
    try { data = JSON.parse(await f.text()); } catch { toast('That file is not readable'); return; }
    const res = await mergeTrip(data);
    if (!res) { toast('Not a TightLines trip file'); return; }
    toast(res.newC || res.newWp ? `🤝 Merged ${res.newC} catches, ${res.newWp} waypoints${res.from ? ` from ${res.from}` : ''}` : 'Nothing new in that file');
    redraw();
  };
  input.click();
}

export default {
  id: 'log',
  render(root, params) {
    const redraw = () => {
      const host = document.getElementById('screen');
      host.innerHTML = '';
      this.render(host, []);
    };
    if (params[0] === 'new') {
      history.replaceState(null, '', '#/log');
      setTimeout(() => openCatchForm(redraw), 50);
    }

    const chips = h('div', { class: 'chips' },
      h('div', { class: 'chip' + (tab === 'catches' ? ' active' : ''), onclick: () => { tab = 'catches'; redraw(); } }, '🐟 Catches'),
      h('div', { class: 'chip' + (tab === 'derby' ? ' active' : ''), onclick: () => { tab = 'derby'; redraw(); } }, '🏆 Derby'),
      store.get('catches', []).length ? h('div', { class: 'chip', onclick: exportTrip }, '⬆ Share') : null,
      h('div', { class: 'chip', onclick: () => importTrip(redraw) }, '⬇ Merge'));
    root.append(
      h('div', { class: 'spread' }, chips,
        h('button', { class: 'btn small', onclick: () => openCatchForm(redraw) }, '+ Log catch')));

    if (tab === 'derby') return derbyView(root);

    const catches = store.get('catches', []);
    if (!catches.length) {
      root.appendChild(h('div', { class: 'card center' },
        h('div', { style: 'font-size:44px' }, '🎣'),
        h('h2', {}, 'No catches yet'),
        h('p', { class: 'muted' }, 'First fish of the trip gets logged forever. Photo, GPS pin, weight estimate — all automatic.')));
      return;
    }
    const list = h('div', { class: 'card' });
    catches.forEach(c => list.appendChild(h('div', { class: 'row', onclick: () => catchDetail(c, redraw) },
      photoBox(c),
      h('div', { class: 'row-main' },
        h('div', { class: 'row-title' }, `${c.speciesName} `, c.lbTxt ? h('span', { class: 'badge l2' }, c.lbTxt) : null),
        h('div', { class: 'row-sub' }, `${c.angler} · ${c.len ? c.len + '" · ' : ''}${fmtDate(c.ts)} ${fmtTime(c.ts)}`),
        c.lure ? h('div', { class: 'row-sub' }, `🎣 ${c.lure}`) : null),
      h('div', { class: 'row-arrow' }, '›'))));
    root.appendChild(list);
  },
};
