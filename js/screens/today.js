// Today: weather-first dashboard + the Kagawong Cup leaderboard + quick tools.
import { h, fmtTime, fmtDate, sheet, toast } from '../ui.js';
import { solunarDay, KAGAWONG } from '../solunar.js';
import { openEstimator, openWizard, fmtWeight } from '../tools.js';
import { getWeather, wmo, windDir, pressureTrend, nowIndex } from '../weather.js';
import { FISH } from '../data/fish.js';
import { REGS } from '../data/regs.js';
import { store, getPhoto } from '../store.js';

function openRegs() {
  // de-duplicate species that share a combined-limit entry (bass, sunfish, salmon)
  const seen = new Set();
  const unique = REGS.species.filter(s => {
    const key = `${s.names}|${s.season}|${s.sport}`;
    if (seen.has(key)) return false;
    seen.add(key); return true;
  });
  const rows = unique.length
    ? unique.map(s => h('div', { class: 'row', style: 'cursor:default' },
        h('div', { class: 'row-main' },
          h('div', { class: 'row-title' }, s.names || s.id,
            s.presentInLake ? h('span', { class: 'badge l1', style: 'margin-left:6px' }, 'in this lake') : null),
          h('div', { class: 'row-sub', style: 'white-space:normal' }, `📅 ${s.season || ''}`),
          h('div', { class: 'row-sub' }, `Sport ${s.sport ?? '—'} · Conservation ${s.conservation ?? '—'}`),
          s.sizeLimits && s.sizeLimits !== 'None' ? h('div', { class: 'row-sub', style: 'white-space:normal' }, `📏 ${s.sizeLimits}`) : null)))
    : h('p', { class: 'muted' }, 'Regulation data not loaded yet.');
  sheet(
    h('h2', {}, `📜 Zone ${REGS.zone} Regulations` + (REGS.seasonYear ? ` (${REGS.seasonYear})` : '')),
    REGS.kagawongExceptions ? h('p', { class: 'now-flag' }, h('b', {}, 'Lake Kagawong: '), REGS.kagawongExceptions) : null,
    rows,
    h('p', { class: 'reg-note' }, 'Quick reference only. Always confirm at ',
      h('a', { href: REGS.sourceUrl, target: '_blank' }, 'ontario.ca/fishing'), ' — rules change and lake exceptions apply.'),
  );
}

// ---------- weather ----------
// Animated radar: past hour of real radar (6-min frames) + the next 8 hours
// of HRDPS forecast-model precipitation, both from ECCC GeoMet (keyless).
function openRadar() {
  if (!navigator.onLine) { toast('Radar needs a signal'); return; }
  const home = store.get('home', KAGAWONG);
  const GEOMET = 'https://geo.weather.gc.ca/geomet';

  // build the frame timeline
  const SIX = 6 * 60e3, HOUR = 3600e3;
  const latestRadar = Math.floor((Date.now() - 12 * 60e3) / SIX) * SIX;
  const frames = [];
  for (let i = 9; i >= 0; i--) {
    const t = latestRadar - i * SIX;
    frames.push({ kind: 'radar', t, label: i === 0 ? 'now' : `−${Math.round((latestRadar - t) / 60e3)} min` });
  }
  const nextHour = Math.ceil(Date.now() / HOUR) * HOUR;
  for (let hh = 0; hh < 8; hh++) {
    const t = nextHour + hh * HOUR;
    frames.push({ kind: 'model', t, label: `+${Math.max(1, Math.round((t - Date.now()) / HOUR))} h forecast` });
  }
  const iso = t => new Date(t).toISOString().replace(/\.\d{3}Z$/, 'Z');

  const mapDiv = h('div', { style: 'height:320px;border-radius:12px;overflow:hidden;border:1px solid var(--line)' });
  const label = h('b', { style: 'min-width:110px;display:inline-block' }, '…');
  const slider = h('input', { type: 'range', min: 0, max: frames.length - 1, value: 9, style: 'flex:1' });
  const playBtn = h('button', { class: 'icon-btn', style: 'flex:none' }, '⏸');
  sheet(
    h('h2', {}, '🌧️ Radar + next 8 hours'),
    h('p', { class: 'muted mt0' }, 'Past hour is real radar; the “+ hours” frames are the HRDPS forecast model — the same future-radar weather sites show. Green light → red heavy.'),
    mapDiv,
    h('div', { style: 'display:flex;align-items:center;gap:10px;margin-top:10px' }, playBtn, slider, label),
    h('p', { class: 'faint', style: 'margin-top:8px' }, 'Environment and Climate Change Canada (GeoMet). Live only — no offline radar.'));

  setTimeout(() => {
    const m = L.map(mapDiv, { zoomControl: false }).setView([home.lat, home.lng], 7);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', { className: 'basetiles', attribution: '© OpenStreetMap' }).addTo(m);
    const mk = layers => L.tileLayer.wms(GEOMET, {
      layers, format: 'image/png', transparent: true, opacity: 0, attribution: 'ECCC GeoMet', version: '1.3.0',
    }).addTo(m);
    const radarLayer = mk('RADAR_1KM_RRAI');
    const modelLayer = mk('HRDPS.CONTINENTAL_RT');
    L.circleMarker([home.lat, home.lng], { radius: 6, color: '#fff', weight: 2, fillColor: '#e46e6e', fillOpacity: 1 })
      .bindTooltip('Lake Kagawong').addTo(m);

    function show(i) {
      const f = frames[i];
      const active = f.kind === 'radar' ? radarLayer : modelLayer;
      const idle = f.kind === 'radar' ? modelLayer : radarLayer;
      active.setParams({ time: iso(f.t) });
      active.setOpacity(0.75);
      idle.setOpacity(0);
      label.textContent = `${f.label} · ${fmtTime(f.t)}`;
      slider.value = i;
    }

    let playing = true;
    let idx = 9;
    const timer = setInterval(() => {
      if (!playing) return;
      idx = (idx + 1) % frames.length;
      show(idx);
    }, 900);
    playBtn.onclick = () => { playing = !playing; playBtn.textContent = playing ? '⏸' : '▶'; };
    slider.oninput = () => { playing = false; playBtn.textContent = '▶'; idx = +slider.value; show(idx); };
    mapDiv.closest('.sheet-back')?.addEventListener('click', () => clearInterval(timer));
    show(idx);
  }, 120);
}

function openWeatherSheet(wx, cachedAt, stale) {
  const d = wx;
  const cur = d.current;
  const [ico, desc] = wmo(cur.weather_code);
  const trend = pressureTrend(d);
  const i0 = nowIndex(d);
  const hourly = [];
  for (let i = i0 + 1; i <= i0 + 12 && i < d.hourly.time.length; i += 2) {
    hourly.push(h('div', { class: 'row', style: 'cursor:default;padding:7px 4px' },
      h('div', { style: 'width:56px;font-size:12.5px;color:var(--text-faint)' }, fmtTime(d.hourly.time[i])),
      h('div', { style: 'font-size:18px;width:32px' }, wmo(d.hourly.weather_code[i])[0]),
      h('div', { class: 'row-main' },
        h('div', { class: 'row-sub', style: 'color:var(--text)' },
          `${Math.round(d.hourly.temperature_2m[i])}° · wind ${Math.round(d.hourly.wind_speed_10m[i])} g${Math.round(d.hourly.wind_gusts_10m[i])} km/h`)),
      h('div', { class: 'faint' }, `${d.hourly.precipitation_probability?.[i] ?? 0}%💧`)));
  }
  const daily = (d.daily.time || []).map((t, i) => h('div', { class: 'row', style: 'cursor:default;padding:7px 4px' },
    h('div', { style: 'width:56px;font-weight:700;font-size:13px' }, i === 0 ? 'Today' : new Date(t + 'T12:00').toLocaleDateString([], { weekday: 'short' })),
    h('div', { style: 'font-size:18px;width:32px' }, wmo(d.daily.weather_code[i])[0]),
    h('div', { class: 'row-main' },
      h('div', { class: 'row-sub', style: 'color:var(--text)' },
        `${Math.round(d.daily.temperature_2m_max[i])}° / ${Math.round(d.daily.temperature_2m_min[i])}° · wind ${Math.round(d.daily.wind_speed_10m_max[i])} g${Math.round(d.daily.wind_gusts_10m_max[i])}`)),
    h('div', { class: 'faint' }, `${d.daily.precipitation_probability_max?.[i] ?? 0}%💧`)));

  sheet(
    h('div', { class: 'spread' },
      h('h2', { class: 'mb0' }, `${ico} ${Math.round(cur.temperature_2m)}°C`),
      h('button', { class: 'btn secondary small', onclick: openRadar }, '🌧️ Radar')),
    h('p', { class: 'muted mt0' },
      `${desc} · feels ${Math.round(cur.apparent_temperature)}° · wind ${windDir(cur.wind_direction_10m)} ${Math.round(cur.wind_speed_10m)} gusting ${Math.round(cur.wind_gusts_10m)} km/h · cloud ${cur.cloud_cover}%`),
    stale ? h('p', { class: 'now-flag' }, h('b', {}, '📵 Offline — '), `showing forecast fetched ${fmtTime(cachedAt)}.`) : null,
    trend ? h('div', { class: 'now-flag' },
      h('b', {}, `${trend.arrow} Barometer ${trend.label} (${trend.delta >= 0 ? '+' : ''}${trend.delta.toFixed(1)} hPa/6h). `), trend.hint) : null,
    h('h3', {}, 'Next 24 hours'), ...hourly,
    h('h3', {}, 'The week'), ...daily,
    h('p', { class: 'faint' }, 'Forecast: Open-Meteo · updates every 30 min when online. Wind matters most out here — fish the blown shoreline.'));
}

function weatherStrip() {
  const home = store.get('home', KAGAWONG);
  const strip = h('div', {
    class: 'wx-strip',
    onclick: () => { if (strip._wx) openWeatherSheet(strip._wx.data, strip._wx.cachedAt, strip._wx.stale); },
  }, h('span', { class: 'faint' }, '⏳ fetching weather…'));
  getWeather(home.lat, home.lng).then(res => {
    strip._wx = res;
    const cur = res.data.current;
    const [ico] = wmo(cur.weather_code);
    const trend = pressureTrend(res.data);
    strip.innerHTML = '';
    strip.append(...[
      h('span', { style: 'font-size:20px' }, ico),
      h('b', {}, `${Math.round(cur.temperature_2m)}°C`),
      h('span', { class: 'muted' }, `wind ${windDir(cur.wind_direction_10m)} ${Math.round(cur.wind_speed_10m)} g${Math.round(cur.wind_gusts_10m)}`),
      trend ? h('span', { class: 'muted' }, `${trend.arrow} ${trend.label}`) : null,
      res.stale ? h('span', { class: 'faint' }, `📵 ${fmtTime(res.cachedAt)}`) : null,
      h('span', { class: 'row-arrow', style: 'margin-left:auto' }, '›'),
    ].filter(Boolean));
  }).catch(() => {
    strip.innerHTML = '';
    strip.append(h('span', { class: 'faint' }, '📵 No weather yet — connect once to load the forecast'));
  });
  return strip;
}

// ---------- Kagawong Cup leaderboard ----------
// Sample catches that showcase the Cup until the first real fish is logged.
const DEMO_CATCHES = [
  { demo: true, angler: 'Demo Dave', speciesName: 'Walleye', lb: 5.8, lbTxt: '5.8 lb', len: 25, photoUrl: 'data/fish-img/walleye.jpg', ts: Date.now() - 3 * 3600e3 },
  { demo: true, angler: 'Sample Sam', speciesName: 'Northern Pike', lb: 12.2, lbTxt: '12 lb', len: 35, photoUrl: 'data/fish-img/northern-pike.jpg', ts: Date.now() - 2 * 3600e3 },
  { demo: true, angler: 'Practice Pat', speciesName: 'Smallmouth Bass', lb: 3.9, lbTxt: '3.9 lb', len: 18.5, photoUrl: 'data/fish-img/smallmouth-bass.jpg', ts: Date.now() - 1 * 3600e3 },
];

function catchPhotoEl(c, cls) {
  const box = h('div', { class: cls }, '🐟');
  const setImg = src => { box.innerHTML = ''; box.appendChild(h('img', { src, alt: '' })); };
  if (c.photoUrl) setImg(c.photoUrl);
  else if (c.photoId) getPhoto(c.photoId).then(b => { if (b) setImg(URL.createObjectURL(b)); });
  return box;
}

function derbyCard() {
  let catches = store.get('catches', []);
  const isDemo = !catches.length;
  if (isDemo) catches = DEMO_CATCHES;
  const open = () => { if (!isDemo) location.hash = '#/log/derby'; else location.hash = '#/log'; };

  const byAngler = {};
  for (const c of catches) {
    const a = byAngler[c.angler] ??= { name: c.angler, n: 0, big: null };
    a.n++;
    if (c.lb != null && (!a.big || c.lb > a.big.lb)) a.big = c;
  }
  const biggest = [...catches].filter(c => c.lb != null).sort((x, y) => y.lb - x.lb).slice(0, 3);
  const standings = Object.values(byAngler).sort((x, y) => (y.big?.lb ?? 0) - (x.big?.lb ?? 0));

  // fish of the day: today's biggest
  const dayStart = new Date(); dayStart.setHours(0, 0, 0, 0);
  const fod = catches.filter(c => c.ts >= +dayStart && c.lb != null).sort((x, y) => y.lb - x.lb)[0];

  return h('div', { class: 'card', style: 'cursor:pointer', onclick: open },
    h('div', { class: 'spread' },
      h('h2', { class: 'mb0' }, '🏆 The Kagawong Cup'),
      h('span', { class: 'faint' }, isDemo ? 'sample preview' : `${catches.length} fish · standings ›`)),
    isDemo ? h('p', { class: 'faint', style: 'margin:6px 0 0' },
      'Sample catches so you can see how the Cup works — they disappear the moment the first real fish is logged.') : null,
    fod ? h('div', { class: 'fod', onclick: e => e.stopPropagation() },
      catchPhotoEl(fod, 'fod-photo'),
      h('div', {},
        h('div', { class: 'faint', style: 'font-size:11px;letter-spacing:0.5px' }, '🌟 FISH OF THE DAY'),
        h('div', { style: 'font-weight:800' }, `${fod.angler}’s ${fod.lbTxt || fmtWeight(fod.lb)} ${fod.speciesName}`),
        h('div', { class: 'faint' }, `${fod.len ? fod.len + '" · ' : ''}${fmtTime(fod.ts)}`))) : null,
    biggest.length ? h('div', { class: 'podium', style: 'margin-top:10px' },
      [1, 0, 2].map(rank => {
        const c = biggest[rank];
        if (!c) return h('div');
        return h('div', { class: 'pod' + (rank === 0 ? ' first' : '') },
          catchPhotoEl(c, 'pod-photo'),
          h('div', { class: 'pod-medal' }, ['🥇', '🥈', '🥉'][rank]),
          h('div', { class: 'pod-name' }, c.angler),
          h('div', { class: 'pod-stat' }, c.speciesName),
          h('div', { class: 'pod-stat' }, h('b', {}, c.lbTxt || fmtWeight(c.lb)), c.len ? ` · ${c.len}"` : ''));
      })) : null,
    h('div', { class: 'chips', style: 'margin:10px 0 0' },
      standings.slice(0, 6).map(a => h('span', { class: 'chip', style: 'cursor:default' },
        `${a.name} · ${a.n}🐟${a.big ? ' · best ' + (a.big.lbTxt || fmtWeight(a.big.lb)) : ''}`))));
}

let weekOpen = false;

export default {
  id: 'today',
  render(root) {
    const home = store.get('home', KAGAWONG);
    const sol = solunarDay(new Date(), home.lat, home.lng);

    const hero = h('div', { class: 'hero-today' },
      h('div', { class: 'center' },
        h('div', { style: 'font-weight:800;font-size:18px' }, 'Today on the lake'),
        h('div', { class: 'faint' }, `${home.name} · ${fmtDate(Date.now())}`)),
      weatherStrip(),
      h('div', { class: 'sun-times', style: 'justify-content:center' },
        h('span', {}, `🌅 First light bite: ${sol.sun.sunrise ? fmtTime(sol.sun.sunrise) : '—'}`),
        h('span', {}, `🌇 Evening bite: ${sol.sun.sunset ? fmtTime(sol.sun.sunset) : '—'}`)),
    );

    const tools = h('div', { class: 'card' },
      h('h2', {}, '🧰 Quick tools'),
      h('div', { class: 'wiz-opts' },
        h('div', { class: 'wiz-opt', onclick: () => openWizard() },
          h('div', { class: 'wo-ico' }, '🎯'), h('div', { class: 'wo-label' }, 'What should I throw?'),
          h('div', { class: 'wo-sub' }, '4 questions → a lure')),
        h('div', { class: 'wiz-opt', onclick: () => openEstimator(FISH) },
          h('div', { class: 'wo-ico' }, '⚖️'), h('div', { class: 'wo-label' }, 'Weight estimator'),
          h('div', { class: 'wo-sub' }, 'length → pounds')),
        h('div', { class: 'wiz-opt', onclick: openRegs },
          h('div', { class: 'wo-ico' }, '📜'), h('div', { class: 'wo-label' }, 'Zone 10 rules'),
          h('div', { class: 'wo-sub' }, 'seasons & limits')),
        h('div', { class: 'wiz-opt', onclick: () => { location.hash = '#/log/new'; } },
          h('div', { class: 'wo-ico' }, '🐟'), h('div', { class: 'wo-label' }, 'Log a catch'),
          h('div', { class: 'wo-sub' }, 'photo + GPS pin'))),
    );

    // What's biting this week — collapsed by default, expands on tap
    const featured = ['walleye', 'smallmouth-bass', 'northern-pike', 'yellow-perch']
      .map(id => FISH.find(f => f.id === id)).filter(Boolean);
    const weekBody = h('div', { class: weekOpen ? '' : 'hidden' },
      featured.map(f => h('div', { class: 'now-flag', style: 'cursor:pointer', onclick: () => { location.hash = `#/fish/${f.id}`; } },
        h('b', {}, f.name + ': '), f.augustNotes ? f.augustNotes.split('. ').slice(0, 2).join('. ') + '.' : '')),
      h('p', { class: 'faint' }, 'Late-August patterns for Ontario waters. Tap a species for the full playbook.'));
    const weekCaret = h('span', { class: 'row-arrow', style: 'font-size:15px' }, weekOpen ? '▾' : '▸');
    const biting = h('div', { class: 'card' },
      h('div', { class: 'spread', style: 'cursor:pointer', onclick: () => {
        weekOpen = !weekOpen;
        weekBody.classList.toggle('hidden', !weekOpen);
        weekCaret.textContent = weekOpen ? '▾' : '▸';
      } },
        h('h2', { class: 'mb0' }, '📅 This week on the water'),
        weekCaret),
      weekBody);

    root.append(hero, derbyCard(), tools, biting);
  },
};
