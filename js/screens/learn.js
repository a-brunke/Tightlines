// Learn hub: gear curriculum, knots (step player), rigs, lure workshop,
// soft plastics, filleting.
import { h, svgEl, levelBadge, backBtn } from '../ui.js';
import { KNOTS, RIGS } from '../data/knots.js';
import { GEAR } from '../data/gear.js';
import { DIY } from '../data/diy.js';
import { FILLET } from '../data/fillet.js';
import { SOFT_WEEK } from '../data/softweek.js';

let levelFilter = 0; // 0 = all

function sectionRows(items, kind, root, sub = x => '') {
  return items
    .filter(x => !levelFilter || x.level === levelFilter)
    .map(x => h('div', { class: 'row', onclick: () => { location.hash = `#/learn/${kind}/${x.id}`; } },
      h('div', { class: 'row-main' },
        h('div', { class: 'row-title' }, x.name || x.title, ' ', levelBadge(x.level)),
        h('div', { class: 'row-sub' }, sub(x))),
      h('div', { class: 'row-arrow' }, '›')));
}

const SECTIONS = [
  ['sec-gear', '🧭 Basics'],
  ['sec-knots', '🪢 Knots'],
  ['sec-rigs', '🧷 Rigs'],
  ['sec-diy', '🛠️ Workshop'],
  ['sec-soft', '🧪 Soft plastics'],
  ['sec-fillet', '🔪 Fillet'],
];

function hub(root) {
  const nav = h('div', { class: 'learn-nav' },
    SECTIONS.map(([id, label]) => h('div', {
      class: 'chip',
      onclick: () => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' }),
    }, label)));

  const chips = h('div', { class: 'chips' },
    [[0, 'All levels'], [1, 'Beginner'], [2, 'Intermediate'], [3, 'Expert']].map(([v, label]) =>
      h('div', { class: 'chip' + (levelFilter === v ? ' active' : ''), onclick: () => { levelFilter = v; root.innerHTML = ''; hub(root); } }, label)));

  root.append(
    nav,
    chips,
    h('div', { class: 'section-title', id: 'sec-gear' }, '🧭 Getting started → expert'),
    h('div', { class: 'card' }, sectionRows(GEAR, 'gear', root, x => `${x.minutes} min · ${x.summary}`)),
    h('div', { class: 'section-title', id: 'sec-knots' }, '🪢 Knots'),
    h('div', { class: 'card' }, sectionRows(KNOTS, 'knots', root, x => `${x.strength} strength · ${x.usedFor}`)),
    h('div', { class: 'section-title', id: 'sec-rigs' }, '🧷 Rigs'),
    h('div', { class: 'card' }, sectionRows(RIGS, 'rigs', root, x => x.targets)),
    h('div', { class: 'section-title', id: 'sec-diy' }, '🛠️ Lure workshop'),
    h('div', { class: 'card' },
      sectionRows(DIY.filter(d => d.id !== 'soft-plastics'), 'diy', root, x => `${x.time} · ${x.cost} · ${x.targets}`),
      h('p', { class: 'faint', style: 'margin:10px 4px 2px' },
        'Parts source: LureMaking.com (Real Pro’s SportFishing, Owen Sound ON) — Canada’s largest lure-component catalogue. CAD prices, $40 minimum, phone orders 1-800-203-8427 Mon-Thu 10-3 ET. Order well ahead of a trip.')),
    h('div', { class: 'section-title', id: 'sec-soft' }, '🧪 Soft plastics'),
    h('div', { class: 'card' },
      h('div', { class: 'row', onclick: () => { location.hash = '#/learn/softweek/main'; } },
        h('div', { style: 'font-size:20px' }, '🔥'),
        h('div', { class: 'row-main' },
          h('div', { class: 'row-title' }, 'This week’s softbait playbook'),
          h('div', { class: 'row-sub' }, `${SOFT_WEEK.season} · ${SOFT_WEEK.picks.length} baits, rigged exactly for this lake`)),
        h('div', { class: 'row-arrow' }, '›')),
      (() => {
        const pour = DIY.find(d => d.id === 'soft-plastics');
        return pour && (!levelFilter || pour.level === levelFilter)
          ? h('div', { class: 'row', onclick: () => { location.hash = '#/learn/diy/soft-plastics'; } },
              h('div', { class: 'row-main' },
                h('div', { class: 'row-title' }, pour.name, ' ', levelBadge(pour.level)),
                h('div', { class: 'row-sub' }, `${pour.time} · ${pour.cost}`)),
              h('div', { class: 'row-arrow' }, '›'))
          : null;
      })()),
    h('div', { class: 'section-title', id: 'sec-fillet' }, '🔪 Fillet & shore lunch'),
    h('div', { class: 'card' },
      h('div', { class: 'row', onclick: () => { location.hash = '#/learn/care/main'; } },
        h('div', { class: 'row-main' },
          h('div', { class: 'row-title' }, FILLET.care?.title || 'From Net to Table'),
          h('div', { class: 'row-sub' }, 'Dispatch, ice, transport rules')),
        h('div', { class: 'row-arrow' }, '›')),
      sectionRows(FILLET.guides || [], 'fillet', root, x => x.yield),
      (FILLET.recipes || []).map(r => h('div', { class: 'row', onclick: () => { location.hash = `#/learn/recipe/${r.id}`; } },
        h('div', { class: 'row-main' },
          h('div', { class: 'row-title' }, '🍳 ' + r.name),
          h('div', { class: 'row-sub' }, `Serves ${r.serves}`)),
        h('div', { class: 'row-arrow' }, '›')))),
  );
}

function knotView(root, k) {
  let step = 0;
  const stage = h('div', { class: 'knot-stage' });
  const caption = h('div', { class: 'knot-caption' });
  const dots = h('div', { class: 'step-dots' });
  const prev = h('button', { class: 'btn secondary small' }, '‹ Prev');
  const next = h('button', { class: 'btn small' }, 'Next ›');

  const draw = () => {
    stage.innerHTML = ''; dots.innerHTML = '';
    stage.appendChild(svgEl(k.steps[step].svg, '0 0 320 200'));
    caption.textContent = `${step + 1}. ${k.steps[step].caption}`;
    k.steps.forEach((_, i) => dots.appendChild(h('span', { class: i === step ? 'on' : '' })));
    prev.disabled = step === 0;
    next.textContent = step === k.steps.length - 1 ? '✓ Done' : 'Next ›';
  };
  prev.onclick = () => { if (step > 0) { step--; draw(); } };
  next.onclick = () => { if (step < k.steps.length - 1) { step++; draw(); } else { location.hash = '#/learn'; } };
  draw();

  root.append(
    backBtn('#/learn', 'Learn'),
    h('div', { class: 'card' },
      h('h2', {}, `🪢 ${k.name} `, levelBadge(k.level)),
      h('p', { class: 'muted mt0' }, `${k.usedFor} · ~${k.strength} knot strength`),
      h('p', { class: 'muted' }, k.whenToUse),
      stage,
      h('div', { class: 'knot-nav' }, prev, dots, next),
      caption,
      h('h3', {}, 'Tips'),
      h('ul', { class: 'ticks' }, (k.tips || []).map(t => h('li', {}, t)))),
  );
}

function rigView(root, r) {
  root.append(
    backBtn('#/learn', 'Learn'),
    h('div', { class: 'card' },
      h('h2', {}, `🧷 ${r.name} `, levelBadge(r.level)),
      h('p', { class: 'muted mt0' }, 'For: ' + r.targets),
      h('p', {}, r.overview),
      h('div', { class: 'knot-stage' }, svgEl(r.svg, '0 0 320 200')),
      h('h3', {}, 'Build it (top to bottom)'),
      h('ul', { class: 'ticks' }, r.components.map(c => h('li', {}, c))),
      h('h3', {}, 'Fish it'),
      h('p', {}, r.howToFish)));
}

function gearView(root, g) {
  root.append(
    backBtn('#/learn', 'Learn'),
    h('div', { class: 'card' },
      h('h2', {}, `🧭 ${g.title} `, levelBadge(g.level)),
      h('p', { class: 'muted mt0' }, g.summary),
      g.sections.map(s => [h('h3', {}, s.h), h('p', {}, s.body)]),
      h('h3', {}, 'Key takeaways'),
      h('ul', { class: 'ticks' }, g.keyTakeaways.map(t => h('li', {}, t)))));
}

function diyView(root, d) {
  root.append(
    backBtn('#/learn', 'Learn'),
    h('div', { class: 'card' },
      h('h2', {}, `🛠️ ${d.name} `, levelBadge(d.level)),
      h('p', { class: 'muted mt0' }, `${d.time} · ${d.cost} · targets ${d.targets}`),
      h('p', {}, d.why),
      d.safety ? h('div', { class: 'now-flag' }, h('b', {}, '⚠️ Safety: '), d.safety) : null,
      h('h3', {}, 'Materials'),
      h('table', { class: 'lb' }, d.materials.map(m => h('tr', {}, h('td', {}, m.item), h('td', { style: 'white-space:nowrap;text-align:right' }, m.qty)))),
      h('h3', {}, 'Tools'),
      h('div', { class: 'chips' }, d.tools.map(t => h('span', { class: 'chip', style: 'cursor:default' }, t))),
      h('h3', {}, 'Build steps'),
      d.steps.map((s, i) => h('div', { class: 'row', style: 'cursor:default' },
        h('div', { style: 'font-weight:800;color:var(--accent);width:22px;flex:none' }, String(i + 1)),
        h('div', { class: 'row-main' },
          h('div', { class: 'row-title' }, s.title),
          h('div', { class: 'row-sub', style: 'white-space:normal' }, s.body)))),
      h('h3', {}, 'Variations'),
      h('ul', { class: 'ticks' }, (d.variations || []).map(v => h('li', {}, v)))));
}

function filletView(root, g) {
  root.append(
    backBtn('#/learn', 'Learn'),
    h('div', { class: 'card' },
      h('h2', {}, `🔪 ${g.name} `, levelBadge(g.level)),
      h('p', { class: 'muted mt0' }, g.yield),
      g.steps.map((s, i) => h('div', { class: 'row', style: 'cursor:default' },
        h('div', { style: 'font-weight:800;color:var(--accent);width:22px;flex:none' }, String(i + 1)),
        h('div', { class: 'row-main' },
          h('div', { class: 'row-title' }, s.title),
          h('div', { class: 'row-sub', style: 'white-space:normal' }, s.body)))),
      h('h3', {}, 'Tips'),
      h('ul', { class: 'ticks' }, (g.tips || []).map(t => h('li', {}, t)))));
}

function softWeekView(root) {
  root.append(
    backBtn('#/learn', 'Learn'),
    h('div', { class: 'card' },
      h('h2', {}, '🔥 This week’s softbait playbook'),
      h('p', { class: 'muted mt0' }, SOFT_WEEK.season + ' · Lake Kagawong'),
      h('p', {}, SOFT_WEEK.intro)),
    ...SOFT_WEEK.picks.map(p => h('div', { class: 'card' },
      h('h2', {}, `${p.emoji} ${p.name}`),
      h('p', { class: 'muted mt0' }, p.target),
      h('p', {}, p.why),
      h('div', { class: 'now-flag' }, h('b', {}, '🎣 Rig it: '), p.rig),
      h('h3', {}, 'Colours'), h('p', { class: 'muted' }, p.colors),
      h('h3', {}, 'Where on this lake'), h('p', { class: 'muted' }, p.where))),
    h('div', { class: 'card' },
      h('p', { class: 'faint mb0' }, SOFT_WEEK.note)));
}

function careView(root) {
  root.append(
    backBtn('#/learn', 'Learn'),
    h('div', { class: 'card' },
      h('h2', {}, `🧊 ${FILLET.care.title}`),
      FILLET.care.sections.map(s => [h('h3', {}, s.h), h('p', {}, s.body)])));
}

function recipeView(root, r) {
  root.append(
    backBtn('#/learn', 'Learn'),
    h('div', { class: 'card' },
      h('h2', {}, `🍳 ${r.name}`),
      h('p', { class: 'muted mt0' }, `Serves ${r.serves}`),
      h('h3', {}, 'Ingredients'),
      h('ul', { class: 'ticks' }, r.ingredients.map(i => h('li', {}, i))),
      h('h3', {}, 'Method'),
      r.steps.map((s, i) => h('div', { class: 'row', style: 'cursor:default' },
        h('div', { style: 'font-weight:800;color:var(--accent);width:22px;flex:none' }, String(i + 1)),
        h('div', { class: 'row-main' }, h('div', { class: 'row-sub', style: 'white-space:normal;font-size:14px' }, s))))));
}

export default {
  id: 'learn',
  render(root, params) {
    const [kind, id] = params;
    if (kind === 'knots') { const k = KNOTS.find(x => x.id === id); if (k) return knotView(root, k); }
    if (kind === 'rigs') { const r = RIGS.find(x => x.id === id); if (r) return rigView(root, r); }
    if (kind === 'gear') { const g = GEAR.find(x => x.id === id); if (g) return gearView(root, g); }
    if (kind === 'diy') { const d = DIY.find(x => x.id === id); if (d) return diyView(root, d); }
    if (kind === 'fillet') { const g = (FILLET.guides || []).find(x => x.id === id); if (g) return filletView(root, g); }
    if (kind === 'softweek') return softWeekView(root);
    if (kind === 'care') return careView(root);
    if (kind === 'recipe') { const r = (FILLET.recipes || []).find(x => x.id === id); if (r) return recipeView(root, r); }
    hub(root);
  },
};
