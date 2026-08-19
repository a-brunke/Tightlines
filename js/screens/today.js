// Today: solunar dashboard + quick tools + what's biting this week.
import { h, svgEl, fmtTime, fmtDate, sheet } from '../ui.js';
import { solunarDay, moonSVG, KAGAWONG } from '../solunar.js';
import { openEstimator, openWizard } from '../tools.js';
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

    root.append(hero, tools, biting);
  },
};
