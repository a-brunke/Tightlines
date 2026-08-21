// Catch log + family derby leaderboard.
import { h, sheet, toast, fmtTime, fmtDate } from '../ui.js';
import { store, uid, savePhoto, getPhoto, delPhoto, shrinkImage, blobToDataURL, dataURLToBlob } from '../store.js';
import { FISH } from '../data/fish.js';
import { estimateWeight, fmtWeight } from '../tools.js';
import { openMeasure } from '../measure.js';
import { openLightbox } from '../lightbox.js';
import { TRIP_INBOX_URL } from '../config.js';

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
  // camera-first photo flow: hidden inputs, one tap opens the camera directly
  const photoIn = h('input', { type: 'file', accept: 'image/*', capture: 'environment', class: 'hidden' });
  const galleryIn = h('input', { type: 'file', accept: 'image/*', class: 'hidden' });
  let photoFile = null;
  const photoPreview = h('div', { class: 'photo-preview hidden' });
  const camBtn = h('button', { type: 'button', class: 'btn', style: 'flex:1' }, '📸 Take photo');
  const galBtn = h('button', { type: 'button', class: 'btn secondary', style: 'flex:none' }, '🖼');
  camBtn.onclick = () => photoIn.click();
  galBtn.onclick = () => galleryIn.click();
  function setPhoto(file) {
    if (!file) return;
    photoFile = file;
    photoPreview.classList.remove('hidden');
    photoPreview.innerHTML = '';
    photoPreview.append(
      h('img', { src: URL.createObjectURL(file), alt: '' }),
      h('span', { class: 'faint' }, '✓ attached — tap 📸 to retake'));
    camBtn.textContent = '📸 Retake';
  }
  const wOut = h('div', { class: 'muted center', style: 'padding:4px 0 8px' }, '');
  const updW = () => {
    const est = estimateWeight(specSel.value, parseFloat(lenIn.value), parseFloat(girIn.value) || 0);
    wOut.textContent = est ? `≈ ${fmtWeight(est.lb)} (${est.kg.toFixed(1)} kg)` : '';
  };
  [specSel, lenIn, girIn].forEach(el => el.addEventListener('input', updW));

  // photo-measure: snap the fish beside a ruler, tap 4 points, length fills itself
  let pendingMeasure = false;
  const doMeasure = () => openMeasure(photoFile, specSel.value, len => {
    lenIn.value = len.toFixed(1);
    lenIn.dispatchEvent(new Event('input'));
    toast(`📏 ${len.toFixed(1)}" measured — photo attached to the catch`);
  });
  const measureBtn = h('button', {
    class: 'btn secondary small', type: 'button', style: 'margin:-4px 0 10px', onclick: () => {
      if (photoFile) doMeasure();
      else { pendingMeasure = true; photoIn.click(); }
    },
  }, '📏 Photo measure (fish beside a ruler)');
  for (const input of [photoIn, galleryIn]) {
    input.addEventListener('change', () => {
      if (!input.files[0]) return;
      setPhoto(input.files[0]);
      if (pendingMeasure) { pendingMeasure = false; doMeasure(); }
    });
  }

  const saveBtn = h('button', { class: 'btn block' }, '🐟 Save catch');
  const s = sheet(
    h('h2', {}, '🐟 Log a catch'),
    h('div', { class: 'spread' }, h('span'), gpsStatus),
    h('div', { class: 'field' }, h('label', {}, 'Angler'), anglerSel, newAngler),
    h('div', { class: 'field' }, h('label', {}, 'Species'), specSel),
    h('div', { class: 'field-row' },
      h('div', { class: 'field' }, h('label', {}, 'Length (in)'), lenIn),
      h('div', { class: 'field' }, h('label', {}, 'Girth (in)'), girIn)),
    measureBtn,
    wOut,
    h('div', { class: 'field' }, h('label', {}, 'Caught on'), lureIn),
    h('div', { class: 'field' }, h('label', {}, 'Photo'),
      h('div', { style: 'display:flex;gap:8px' }, camBtn, galBtn),
      photoPreview, photoIn, galleryIn),
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
      if (photoFile) {
        c.photoId = 'ph_' + c.id;
        await savePhoto(c.photoId, await shrinkImage(photoFile));
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
      (() => {
        const b = photoBox(c);
        b.style.width = '100%'; b.style.height = '220px'; b.style.fontSize = '60px';
        b.style.cursor = 'zoom-in';
        b.addEventListener('click', () => {
          const im = b.querySelector('img');
          if (im) openLightbox(im.src, c.speciesName);
        });
        return b;
      })()),
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
    h('b', {}, '🚤 Getting everyone on one leaderboard: '),
    'boat-to-boat, ⬆ Share the file over Quick Share and ⬇ Merge on the other phone (no signal needed). Or send your ⬆ Share file to the trip commissioner — the app pulls the published trip feed automatically whenever it’s online, photos and all.'));

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
    if (!c || !c.id) continue;
    if (cIds.has(c.id)) {
      // known catch (e.g. merged earlier via QR): attach its photo if we lack one
      const existing = catches.find(x => x.id === c.id);
      if (c.photo && existing && !existing.photoId) {
        existing.photoId = 'ph_' + existing.id;
        try { await savePhoto(existing.photoId, await dataURLToBlob(c.photo)); } catch { existing.photoId = null; }
      }
      continue;
    }
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

// Share trip data: upload straight to the commissioner's Drive inbox when
// configured and online, otherwise hand the file to the share sheet.
async function exportTrip() {
  toast('Packing trip file…');
  const data = await packTrip();
  const json = JSON.stringify(data);

  if (TRIP_INBOX_URL && navigator.onLine) {
    try {
      toast('⬆ Uploading to trip HQ…');
      const res = await fetch(TRIP_INBOX_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: json,
      });
      const out = await res.json();
      if (out && out.ok) {
        toast('✅ Uploaded! It joins everyone’s leaderboard at the next trip sync.');
        return;
      }
      throw new Error(out && out.error);
    } catch {
      toast('Upload didn’t go through — sharing the file instead');
    }
  }

  const blob = new Blob([json], { type: 'application/json' });
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

// ---- QR catch sharing ----
// A QR holds ~3 KB, so photos can't travel this way; catches pack as compact
// tuples, deflate-compressed into the app URL's hash fragment.
const B64URL = {
  enc(bytes) {
    let s = '';
    bytes.forEach(b => { s += String.fromCharCode(b); });
    return btoa(s).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
  },
  dec(str) {
    const s = atob(str.replace(/-/g, '+').replace(/_/g, '/'));
    return Uint8Array.from(s, c => c.charCodeAt(0));
  },
};
async function deflate(text) {
  const cs = new CompressionStream('deflate-raw');
  const ab = await new Response(new Blob([new TextEncoder().encode(text)]).stream().pipeThrough(cs)).arrayBuffer();
  return new Uint8Array(ab);
}
async function inflate(bytes) {
  const ds = new DecompressionStream('deflate-raw');
  const ab = await new Response(new Blob([bytes]).stream().pipeThrough(ds)).arrayBuffer();
  return new TextDecoder().decode(ab);
}

// Catch tuple: [id, ts, anglerIdx, speciesId, len, girth, lb, lure, lat, lng]
export async function packQRUrl() {
  const all = store.get('catches', []);
  if (!all.length) return null;
  const base = `${location.origin}${location.pathname}#/merge/`;
  for (let n = all.length; n >= 1; n--) {
    const subset = all.slice(0, n); // newest first
    const anglers = [...new Set(subset.map(c => c.angler))];
    const tuples = subset.map(c => [
      c.id, c.ts, anglers.indexOf(c.angler), c.speciesId, c.len, c.girth, c.lb,
      (c.lure || '').slice(0, 40),
      c.lat != null ? +(+c.lat).toFixed(5) : null,
      c.lng != null ? +(+c.lng).toFixed(5) : null,
    ]);
    const json = JSON.stringify({ v: 1, from: anglers[0] || '', a: anglers, c: tuples });
    const b64 = B64URL.enc(await deflate(json));
    if (b64.length <= 2200) return { url: base + b64, count: n, skipped: all.length - n };
  }
  return null;
}

export async function openQRSheet() {
  if (!('CompressionStream' in window)) { toast('QR sharing needs a newer browser'); return; }
  const packed = await packQRUrl();
  if (!packed) { toast('No catches to share yet'); return; }
  const qr = qrcode(0, 'L');
  qr.addData(packed.url, 'Byte');
  qr.make();
  const svg = qr.createSvgTag({ cellSize: 4, margin: 0, scalable: true });
  sheet(
    h('h2', {}, '🔳 Scan to grab my catches'),
    h('p', { class: 'muted mt0' },
      `${packed.count} catches packed in${packed.skipped ? ` (newest first, ${packed.skipped} older didn't fit — use ⬆ Share for the full history)` : ''}.`),
    h('div', { style: 'background:#fff;border-radius:14px;padding:16px;max-width:330px;margin:0 auto', html: svg }),
    h('p', { class: 'faint center', style: 'margin-top:10px' },
      'Other phone: open the camera, point, tap the link — the app asks before merging. No signal needed if they have the app installed. Photos travel via ⬆ Share instead.'));
}

// Opened via a scanned #/merge/<data> link: decode, confirm, merge.
export async function handleMergeLink(b64) {
  let payload;
  try { payload = JSON.parse(await inflate(B64URL.dec(b64))); } catch { toast('Could not read that QR code'); return; }
  if (payload.v !== 1 || !Array.isArray(payload.c)) { toast('Not a TightLines QR'); return; }
  const catches = payload.c.map(t => {
    const [id, ts, ai, speciesId, len, girth, lb, lure, lat, lng] = t;
    return {
      id, ts, angler: payload.a[ai] || 'angler', speciesId,
      speciesName: speciesName(speciesId), len, girth, lb,
      lbTxt: lb != null ? fmtWeight(lb) : '', lure: lure || '', notes: '',
      lat, lng, photoId: null,
    };
  });
  const s = sheet(
    h('h2', {}, '🤝 Merge scanned catches?'),
    h('p', { class: 'muted mt0' },
      `${catches.length} catches${payload.from ? ` from ${payload.from}’s phone` : ''}. Only new ones are added. Photos don’t travel by QR — grab those with ⬆ Share / ⬇ Merge.`),
    h('button', {
      class: 'btn block', onclick: async () => {
        const res = await mergeTrip({ app: 'TightLines', version: 2, from: payload.from, anglers: payload.a, catches, waypoints: [] });
        s.close();
        toast(res && res.newC ? `🤝 Added ${res.newC} new catches to the derby` : 'Nothing new — already merged');
        location.hash = '#/log';
        window.dispatchEvent(new HashChangeEvent('hashchange'));
      },
    }, 'Merge into my leaderboard'),
    h('div', { style: 'height:8px' }),
    h('button', { class: 'btn secondary block', onclick: () => s.close() }, 'Cancel'));
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
    if (params[0] === 'derby') {
      tab = 'derby';
      history.replaceState(null, '', '#/log');
    }

    const chips = h('div', { class: 'chips' },
      h('div', { class: 'chip' + (tab === 'catches' ? ' active' : ''), onclick: () => { tab = 'catches'; redraw(); } }, '🐟 Catches'),
      h('div', { class: 'chip' + (tab === 'derby' ? ' active' : ''), onclick: () => { tab = 'derby'; redraw(); } }, '🏆 Derby'),
      store.get('catches', []).length ? h('div', { class: 'chip', onclick: exportTrip }, '⬆ Share') : null,
      store.get('catches', []).length ? h('div', { class: 'chip', onclick: openQRSheet }, '🔳 QR') : null,
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
