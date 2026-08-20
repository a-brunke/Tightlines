// Fish encyclopedia: grid + rich detail pages.
import { h, svgEl, backBtn } from '../ui.js';
import { FISH } from '../data/fish.js';
import { silhouette } from '../data/silhouettes.js';
import { regsFor, REGS } from '../data/regs.js';
import { openEstimator } from '../tools.js';

let query = '';

// Species art: generated illustration with silhouette fallback.
function fishArt(f, cls) {
  const wrap = h('div', { class: cls });
  const img = h('img', { src: `data/fish-img/${f.id}.jpg`, alt: f.name, loading: 'lazy' });
  img.addEventListener('error', () => {
    wrap.innerHTML = '';
    const sil = svgEl(silhouette(f.bodyType), '0 0 200 80');
    sil.style.color = f.accent;
    wrap.appendChild(sil);
  });
  wrap.appendChild(img);
  return wrap;
}

function fishCard(f) {
  return h('div', { class: 'fish-card', onclick: () => { location.hash = `#/fish/${f.id}`; } },
    h('div', { class: 'fc-accent', style: `background:${f.accent}` }),
    fishArt(f, 'fc-art'),
    h('div', { class: 'fc-name' }, f.name),
    h('div', { class: 'fc-tag' }, f.tagline || ''));
}

function listView(root) {
  const grid = h('div', { class: 'fish-grid' });
  const draw = () => {
    grid.innerHTML = '';
    const q = query.toLowerCase();
    FISH.filter(f => !q || f.name.toLowerCase().includes(q) || (f.aka || []).join(' ').toLowerCase().includes(q))
      .forEach(f => grid.appendChild(fishCard(f)));
    if (!grid.children.length) grid.appendChild(h('p', { class: 'muted' }, FISH.length ? 'No match.' : 'Species guide loading…'));
  };
  const search = h('input', {
    type: 'search', placeholder: '🔍 Search 19 Ontario species…', value: query,
    style: 'width:100%;padding:11px 14px;border-radius:12px;border:1px solid var(--line);background:var(--panel);color:var(--text);font-size:15px;margin-bottom:12px',
    oninput: e => { query = e.target.value; draw(); },
  });
  draw();
  root.append(search, grid);
}

function seasonBlock(f) {
  const seasons = ['spring', 'summer', 'fall', 'winter'];
  const icons = { spring: '🌱', summer: '☀️', fall: '🍁', winter: '❄️' };
  let current = 'summer'; // late August default
  const body = h('p', { style: 'font-size:14.5px' });
  const tabs = h('div', { class: 'season-tabs' });
  const draw = () => {
    tabs.innerHTML = '';
    seasons.forEach(s => tabs.appendChild(h('div', {
      class: 'chip' + (s === current ? ' active' : ''),
      onclick: () => { current = s; draw(); },
    }, `${icons[s]} ${s[0].toUpperCase() + s.slice(1)}`)));
    body.textContent = (f.depth && f.depth[current]) || '';
  };
  draw();
  return h('div', { class: 'card' }, h('h2', {}, '📍 Where they sit'), tabs, body);
}

function detailView(root, f) {
  const reg = regsFor(f.id);

  root.append(
    backBtn('#/fish', 'All species'),
    h('div', { class: 'fish-hero', style: `background:linear-gradient(170deg, color-mix(in srgb, ${f.accent} 14%, var(--panel)), var(--panel))` },
      fishArt(f, 'hero-art'),
      h('h1', {}, f.name),
      h('div', { class: 'sci' }, f.sci),
      h('div', { class: 'tagline' },
        (f.aka && f.aka.length ? `aka ${f.aka.join(', ')} · ` : '') + (f.tagline || '')),
      h('div', { class: 'statgrid' },
        h('div', { class: 'stat' }, h('div', { class: 'stat-v' }, `${f.size.avgIn[0]}–${f.size.avgIn[1]}"`), h('div', { class: 'stat-k' }, 'Typical')),
        h('div', { class: 'stat' }, h('div', { class: 'stat-v' }, `${f.size.trophyIn}"+`), h('div', { class: 'stat-k' }, 'Trophy')),
        h('div', { class: 'stat' }, h('div', { class: 'stat-v' }, `${f.size.ontRecordLb} lb`), h('div', { class: 'stat-k' }, 'ON record')),
      ),
      h('div', { class: 'center faint', style: 'padding-bottom:8px' },
        `Prefers ${f.tempF[0]}–${f.tempF[1]} °F water · ${f.family}`)),

    f.augustNotes ? h('div', { class: 'card' },
      h('h2', {}, '🔥 Right now (late August)'),
      h('div', { class: 'now-flag' }, f.augustNotes)) : null,

    seasonBlock(f),

    h('div', { class: 'card' },
      h('h2', {}, '🔎 How to spot one'),
      h('ul', { class: 'ticks' }, (f.idFeatures || []).map(x => h('li', {}, x))),
      h('h3', {}, 'Habitat'), h('p', {}, f.habitat),
      h('h3', {}, 'Feeding'), h('p', {}, f.feeding)),

    h('div', { class: 'card' },
      h('h2', {}, '🎣 How to catch them'),
      h('p', {}, f.technique),
      h('h3', {}, 'Top presentations'),
      (f.presentations || []).map((p, i) => h('div', { class: 'row', style: 'cursor:default' },
        h('div', { style: 'font-weight:800;color:var(--accent);width:20px' }, String(i + 1)),
        h('div', { class: 'row-main' },
          h('div', { class: 'row-title' }, p.name),
          h('div', { class: 'row-sub', style: 'white-space:normal' }, p.detail)))),
      h('h3', {}, 'Live bait'), h('p', { class: 'muted' }, f.liveBait)),

    h('div', { class: 'card' },
      h('h2', {}, '💡 Pro tips'),
      h('ul', { class: 'ticks' }, (f.proTips || []).map(x => h('li', {}, x))),
      f.handling ? [h('h3', {}, 'Handling'), h('p', { class: 'muted' }, f.handling)] : null,
      h('h3', {}, 'On the table'), h('p', { class: 'muted' }, f.table)),

    h('div', { class: 'card' },
      h('h2', {}, '📜 Zone 10 rules'),
      reg ? h('div', {},
        h('div', { class: 'statgrid', style: 'grid-template-columns:1fr 1fr' },
          h('div', { class: 'stat' }, h('div', { class: 'stat-v' }, reg.sport ?? '—'), h('div', { class: 'stat-k' }, 'Sport limit')),
          h('div', { class: 'stat' }, h('div', { class: 'stat-v' }, reg.conservation ?? '—'), h('div', { class: 'stat-k' }, 'Cons. limit'))),
        h('p', { style: 'font-size:14px' }, h('b', {}, '📅 Season: '), reg.season || '—'),
        reg.sizeLimits && reg.sizeLimits !== 'None' ? h('p', { class: 'muted' }, `📏 Size limits: ${reg.sizeLimits}`) : null,
        reg.notes ? h('p', { class: 'muted' }, reg.notes) : null,
      ) : h('p', { class: 'muted' }, 'No data loaded for this species.'),
      h('p', { class: 'reg-note' }, 'Verify at ', h('a', { href: REGS.sourceUrl, target: '_blank' }, 'ontario.ca/fishing'), ' before keeping fish.')),

    h('button', { class: 'btn block', onclick: () => openEstimator(FISH, f.id) }, `⚖️ Estimate a ${f.name.toLowerCase()}'s weight`),
  );
}

export default {
  id: 'fish',
  render(root, params) {
    const f = params[0] && FISH.find(x => x.id === params[0]);
    if (f) detailView(root, f);
    else listView(root);
  },
};
