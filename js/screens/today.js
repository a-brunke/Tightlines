// Today: solunar + live weather + the Kagawong Cup leaderboard + quick tools.
import { h, svgEl, fmtTime, fmtDate, sheet, toast } from '../ui.js';
import { solunarDay, moonSVG, KAGAWONG } from '../solunar.js';
import { openEstimator, openWizard, fmtWeight } from '../tools.js';
import { getWeather, wmo, windDir, pressureTrend, nowIndex } from '../weather.js';
import { FISH } from '../data/fish.js';
import { REGS } from '../data/regs.js';
import { store } from '../store.js';

let dayOffset = 0;

function timelineEl(sol, dayStart) {
  const DAY = 24 * 3600 * 1000;
  const pct = t => Math.max(0, Math.min(100, ((t - dayStart) / DAY) * 100));
  const tl = h('div', { class: 'timeline' });
  tl.appendChild(h('div', { class: 'tl-axis' }));
  // night shading before sunrise / after sunset
  if (sol.sun.sunrise) tl.appendChild(h('div', { class: 'tl-night', style: `left:0%;width:${pct(+sol.sun.sunrise)}%` }));
  if (sol.sun.sunset) tl.appendChild(h('div', { class: 'tl-night', style: `left:${pct(+sol.sun.sunset)}%;width:${100 - pct(+sol.sun.sunset)}%` }));
  for (const [wins, cls] of [[sol.majors, 'major'], [sol.minors, 'minor']]) {
    for (const w of wins) {
      const l = pct(w.start), r = pct(w.end);
      tl.appendChild(h('div', { class: `tl-window ${cls}`, style: `left:${l}%;width:${Math.max(1.5, r - l)}%` }));
      tl.appendChild(h('div', { class: `tl-toplabel ${cls}`, style: `left:${(l + r) / 2}%` }, fmtTime(w.peak)));
    }
  }
  for (const hh of [0, 6, 12, 18, 24]) {
    tl.appendChild(h('div', { class: 'tl-label', style: `left:${(hh / 24) * 100}%` },
      hh === 0 || hh === 24 ? '12a' : hh === 12 ? '12p' : hh < 12 ? `${hh}a` : `${hh - 12}p`));
  }
  const now = Date.now();
  if (now >= dayStart && now < dayStart + DAY) {
    tl.appendChild(h('div', { class: 'tl-now', style: `left:${pct(now)}%` }));
  }
  return tl;
}

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
function openRadar() {
  if (!navigator.onLine) { toast('Radar needs a signal'); return; }
  const home = store.get('home', KAGAWONG);
  const mapDiv = h('div', { style: 'height:340px;border-radius:12px;overflow:hidden;border:1px solid var(--line)' });
  sheet(
    h('h2', {}, '🌧️ Precipitation radar'),
    h('p', { class: 'muted mt0' }, 'Latest Environment Canada composite. Green light rain → red heavy.'),
    mapDiv,
    h('p', { class: 'faint', style: 'margin-top:8px' }, 'Radar: Environment and Climate Change Canada (GeoMet). Live only — no offline radar.'));
  setTimeout(() => {
    const m = L.map(mapDiv, { zoomControl: false }).setView([home.lat, home.lng], 7);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', { className: 'basetiles', attribution: '© OpenStreetMap' }).addTo(m);
    L.tileLayer.wms('https://geo.weather.gc.ca/geomet', {
      layers: 'RADAR_1KM_RRAI', format: 'image/png', transparent: true, opacity: 0.75,
      attribution: 'ECCC GeoMet',
    }).addTo(m);
    L.circleMarker([home.lat, home.lng], { radius: 6, color: '#fff', weight: 2, fillColor: '#e46e6e', fillOpacity: 1 })
      .bindTooltip('Lake Kagawong').addTo(m);
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
function derbyCard() {
  const catches = store.get('catches', []);
  const open = () => { location.hash = '#/log/derby'; };
  if (!catches.length) {
    return h('div', { class: 'card', style: 'cursor:pointer', onclick: open },
      h('h2', {}, '🏆 The Kagawong Cup'),
      h('p', { class: 'muted mt0' }, 'The trip leaderboard lives here. Log your catches, scan the crew’s 🔳 QR codes, and watch the standings brawl begin.'));
  }
  const byAngler = {};
  for (const c of catches) {
    const a = byAngler[c.angler] ??= { name: c.angler, n: 0, big: null };
    a.n++;
    if (c.lb != null && (!a.big || c.lb > a.big.lb)) a.big = c;
  }
  const biggest = [...catches].filter(c => c.lb != null).sort((x, y) => y.lb - x.lb).slice(0, 3);
  const standings = Object.values(byAngler).sort((x, y) => (y.big?.lb ?? 0) - (x.big?.lb ?? 0));
  return h('div', { class: 'card', style: 'cursor:pointer', onclick: open },
    h('div', { class: 'spread' },
      h('h2', { class: 'mb0' }, '🏆 The Kagawong Cup'),
      h('span', { class: 'faint' }, `${catches.length} fish · full standings ›`)),
    biggest.length ? h('div', { class: 'podium', style: 'margin-top:10px' },
      [1, 0, 2].map(rank => {
        const c = biggest[rank];
        if (!c) return h('div');
        return h('div', { class: 'pod' + (rank === 0 ? ' first' : '') },
          h('div', { class: 'pod-medal' }, ['🥇', '🥈', '🥉'][rank]),
          h('div', { class: 'pod-name' }, c.angler),
          h('div', { class: 'pod-stat' }, c.speciesName),
          h('div', { class: 'pod-stat' }, h('b', {}, c.lbTxt || fmtWeight(c.lb)), c.len ? ` · ${c.len}"` : ''));
      })) : null,
    h('div', { class: 'chips', style: 'margin:10px 0 0' },
      standings.slice(0, 6).map(a => h('span', { class: 'chip', style: 'cursor:default' },
        `${a.name} · ${a.n}🐟${a.big ? ' · best ' + (a.big.lbTxt || fmtWeight(a.big.lb)) : ''}`))));
}

export default {
  id: 'today',
  render(root) {
    const rerender = () => { root.innerHTML = ''; this.render(root); };
    const home = store.get('home', KAGAWONG);
    const dayStart = new Date(); dayStart.setHours(0, 0, 0, 0);
    dayStart.setDate(dayStart.getDate() + dayOffset);
    const sol = solunarDay(dayStart, home.lat, home.lng);

    const hero = h('div', { class: 'hero-today' },
      h('div', { class: 'spread' },
        h('button', { class: 'icon-btn', onclick: () => { dayOffset--; rerender(); } }, '‹'),
        h('div', { class: 'center' },
          h('div', { style: 'font-weight:800;font-size:17px' }, dayOffset === 0 ? 'Today' : fmtDate(dayStart)),
          h('div', { class: 'faint' }, `${home.name} · ${fmtDate(dayStart)}`)),
        h('button', { class: 'icon-btn', onclick: () => { dayOffset++; rerender(); } }, '›')),
      h('div', { class: 'moon-row', style: 'margin-top:10px' },
        svgEl(moonSVG(sol.moon.phase), '0 0 64 64', 'moon-svg'),
        h('div', {},
          h('div', { style: 'font-weight:800' }, sol.moon.name),
          h('div', { class: 'muted' }, `${Math.round(sol.moon.fraction * 100)}% lit`),
          h('div', { class: 'rating-stars' }, '★'.repeat(sol.rating) + '☆'.repeat(4 - sol.rating),
            h('span', { style: 'font-size:13px;color:var(--text-dim);margin-left:8px' }, `${sol.ratingLabel} day`)))),
      timelineEl(sol, +dayStart),
      h('div', { class: 'legend' },
        h('span', {}, h('i', { style: 'background:var(--gold)' }), 'Major feed (2 h)'),
        h('span', {}, h('i', { style: 'background:var(--accent)' }), 'Minor feed (1 h)'),
        h('span', {}, h('i', { style: 'background:rgba(90,169,230,0.4)' }), 'Night')),
      h('div', { class: 'sun-times' },
        h('span', {}, `🌅 ${sol.sun.sunrise ? fmtTime(sol.sun.sunrise) : '—'}`),
        h('span', {}, `🌇 ${sol.sun.sunset ? fmtTime(sol.sun.sunset) : '—'}`),
        h('span', {}, `🌙 ${sol.moon.rise ? '↑' + fmtTime(sol.moon.rise) : ''} ${sol.moon.set ? '↓' + fmtTime(sol.moon.set) : ''}`)),
      weatherStrip(),
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

    // What's biting this week — featured species august notes
    const featured = ['walleye', 'smallmouth-bass', 'northern-pike', 'yellow-perch']
      .map(id => FISH.find(f => f.id === id)).filter(Boolean);
    const biting = h('div', { class: 'card' },
      h('h2', {}, '📅 This week on the water'),
      featured.length === 0 ? h('p', { class: 'muted' }, 'Species guide loading…') :
        featured.map(f => h('div', { class: 'now-flag', style: 'cursor:pointer', onclick: () => { location.hash = `#/fish/${f.id}`; } },
          h('b', {}, f.name + ': '), f.augustNotes ? f.augustNotes.split('. ').slice(0, 2).join('. ') + '.' : '')),
      h('p', { class: 'faint' }, 'Late-August patterns for Ontario waters. Tap a species for the full playbook.'));

    root.append(hero, derbyCard(), tools, biting);
  },
};
