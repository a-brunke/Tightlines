// Learn hub: gear curriculum, knots (step player), rigs, lure workshop, filleting.
import { h, svgEl, levelBadge, backBtn, sheet, toast } from '../ui.js';
import { store } from '../store.js';
import { KNOTS, RIGS } from '../data/knots.js';
import { GEAR } from '../data/gear.js';
import { DIY } from '../data/diy.js';
import { FILLET } from '../data/fillet.js';

let levelFilter = 0; // 0 = all

// ---- parts shopping list (LureMaking.com is phone/mail order, so a
// consolidated list to read off is exactly what you need) ----
const SUPPLIER = 'LureMaking.com (Real Pro’s SportFishing, Owen Sound ON) · 1-800-203-8427 · CAD prices, $40 minimum order, phone lines Mon-Thu 10-3 ET';

function addToShopList(d) {
  const list = store.get('shoplist', []);
  for (const m of d.materials) list.push({ item: m.item, qty: m.qty, project: d.name });
  store.set('shoplist', list);
  toast(`🛒 ${d.materials.length} parts added to your shopping list`);
}

function shopListText() {
  const list = store.get('shoplist', []);
  const byProject = {};
  for (const e of list) (byProject[e.project] ??= []).push(e);
  let out = 'TIGHTLINES PARTS LIST\n';
  for (const [proj, items] of Object.entries(byProject)) {
    out += `\n-- ${proj} --\n`;
    for (const e of items) out += `[ ] ${e.item} (${e.qty})\n`;
  }
  out += `\nSupplier: ${SUPPLIER}`;
  return out;
}

function openShopList(onchange) {
  const body = h('div');
  const s = sheet(body);
  const draw = () => {
    const list = store.get('shoplist', []);
    body.innerHTML = '';
    body.appendChild(h('h2', {}, `🛒 Parts shopping list (${list.length})`));
    if (!list.length) {
      body.appendChild(h('p', { class: 'muted' }, 'Empty. Open any Lure Workshop project and tap “Add parts to shopping list”.'));
      return;
    }
    const byProject = {};
    list.forEach((e, i) => (byProject[e.project] ??= []).push([e, i]));
    for (const [proj, items] of Object.entries(byProject)) {
      body.appendChild(h('h3', {}, proj));
      for (const [e, i] of items) {
        body.appendChild(h('div', { class: 'row', style: 'cursor:default' },
          h('div', { class: 'row-main' },
            h('div', { class: 'row-sub', style: 'white-space:normal;font-size:13.5px;color:var(--text)' }, e.item),
            h('div', { class: 'row-sub' }, e.qty)),
          h('button', {
            class: 'icon-btn', style: 'width:30px;height:30px;font-size:13px', onclick: () => {
              const l = store.get('shoplist', []); l.splice(i, 1); store.set('shoplist', l); draw(); onchange && onchange();
            },
          }, '✕')));
      }
    }
    body.appendChild(h('p', { class: 'faint', style: 'margin-top:10px' }, SUPPLIER));
    body.appendChild(h('div', { class: 'spread', style: 'margin-top:10px;gap:8px' },
      h('button', {
        class: 'btn secondary small', onclick: () => {
          store.set('shoplist', []); draw(); onchange && onchange(); toast('List cleared');
        },
      }, 'Clear all'),
      h('button', {
        class: 'btn small', onclick: async () => {
          const text = shopListText();
          if (navigator.share) { try { await navigator.share({ text, title: 'TightLines parts list' }); return; } catch { /* fall through */ } }
          try { await navigator.clipboard.writeText(text); toast('📋 Copied — paste it anywhere'); }
          catch { toast('Could not copy on this browser'); }
        },
      }, '⬆ Share / copy')));
  };
  draw();
  return s;
}

function sectionRows(items, kind, root, sub = x => '') {
  return items
    .filter(x => !levelFilter || x.level === levelFilter)
    .map(x => h('div', { class: 'row', onclick: () => { location.hash = `#/learn/${kind}/${x.id}`; } },
      h('div', { class: 'row-main' },
        h('div', { class: 'row-title' }, x.name || x.title, ' ', levelBadge(x.level)),
        h('div', { class: 'row-sub' }, sub(x))),
      h('div', { class: 'row-arrow' }, '›')));
}

function hub(root) {
  const chips = h('div', { class: 'chips' },
    [[0, 'All levels'], [1, 'Beginner'], [2, 'Intermediate'], [3, 'Expert']].map(([v, label]) =>
      h('div', { class: 'chip' + (levelFilter === v ? ' active' : ''), onclick: () => { levelFilter = v; root.innerHTML = ''; hub(root); } }, label)));

  root.append(
    chips,
    h('div', { class: 'section-title' }, '🧭 Getting started → expert'),
    h('div', { class: 'card' }, sectionRows(GEAR, 'gear', root, x => `${x.minutes} min · ${x.summary}`)),
    h('div', { class: 'section-title' }, '🪢 Knots'),
    h('div', { class: 'card' }, sectionRows(KNOTS, 'knots', root, x => `${x.strength} strength · ${x.usedFor}`)),
    h('div', { class: 'section-title' }, '🧷 Rigs'),
    h('div', { class: 'card' }, sectionRows(RIGS, 'rigs', root, x => x.targets)),
    h('div', { class: 'section-title' }, '🛠️ Lure workshop'),
    h('div', { class: 'card' },
      h('div', { class: 'row', onclick: () => openShopList(() => { root.innerHTML = ''; hub(root); }) },
        h('div', { style: 'font-size:20px' }, '🛒'),
        h('div', { class: 'row-main' },
          h('div', { class: 'row-title' }, `Parts shopping list (${store.get('shoplist', []).length})`),
          h('div', { class: 'row-sub' }, 'Build it from any project below, then share or read it off when ordering')),
        h('div', { class: 'row-arrow' }, '›')),
      sectionRows(DIY, 'diy', root, x => `${x.time} · ${x.cost} · ${x.targets}`),
      h('p', { class: 'faint', style: 'margin:10px 4px 2px' },
        'Parts source: LureMaking.com (Real Pro’s SportFishing, Owen Sound ON) — Canada’s largest lure-component catalogue. CAD prices, $40 minimum, phone orders 1-800-203-8427 Mon-Thu 10-3 ET. Order well ahead of a trip.')),
    h('div', { class: 'section-title' }, '🔪 Fillet & shore lunch'),
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
      h('button', { class: 'btn secondary small', style: 'margin-top:8px', onclick: () => addToShopList(d) }, '🛒 Add parts to shopping list'),
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
    if (kind === 'care') return careView(root);
    if (kind === 'recipe') { const r = (FILLET.recipes || []).find(x => x.id === id); if (r) return recipeView(root, r); }
    hub(root);
  },
};
