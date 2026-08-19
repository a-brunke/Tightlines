// Weight estimator + "what should I throw" wizard logic.
import { h, sheet, toast } from './ui.js';
import { WIZ_QUESTIONS, WIZ_PICKS, WIZ_COLORS, WIZ_SKY } from './data/wizard.js';

// Length-only shape factors: weight lb = length_in^3 / factor.
// Calibrated to widely used species length-weight tables; girth formula is more accurate.
export const WEIGHT_FACTORS = {
  'walleye': 2700, 'yellow-perch': 2000, 'northern-pike': 3500, 'muskellunge': 3600,
  'smallmouth-bass': 1600, 'largemouth-bass': 1600, 'black-crappie': 1800,
  'bluegill': 1200, 'pumpkinseed': 1200, 'rock-bass': 1300,
  'lake-trout': 2700, 'brook-trout': 2400, 'rainbow-trout': 2500, 'brown-trout': 2500,
  'chinook-salmon': 2330, 'lake-whitefish': 3040, 'channel-catfish': 2450,
  'burbot': 3650, 'brown-bullhead': 1900,
};

export function estimateWeight(speciesId, lengthIn, girthIn = 0) {
  if (!lengthIn || lengthIn <= 0) return null;
  let lb, method;
  if (girthIn > 0) {
    lb = (lengthIn * girthIn * girthIn) / 800;
    method = 'length × girth² ÷ 800';
  } else {
    const f = WEIGHT_FACTORS[speciesId] || 2200;
    lb = Math.pow(lengthIn, 3) / f;
    method = `length³ ÷ ${f} (${speciesId in WEIGHT_FACTORS ? 'species' : 'generic'} factor)`;
  }
  return { lb, kg: lb * 0.4536, method };
}

export function fmtWeight(lb) {
  if (lb < 1) return `${Math.round(lb * 16)} oz`;
  return `${lb.toFixed(lb < 10 ? 1 : 0)} lb`;
}

// ---- Weight estimator sheet ----
export function openEstimator(FISH, presetSpecies = '') {
  const sel = h('select', {},
    FISH.map(f => h('option', { value: f.id, selected: f.id === presetSpecies }, f.name)));
  const len = h('input', { type: 'number', inputmode: 'decimal', placeholder: 'e.g. 24' });
  const gir = h('input', { type: 'number', inputmode: 'decimal', placeholder: 'optional, more accurate' });
  const out = h('div', { class: 'center', style: 'padding:10px 0' },
    h('div', { class: 'muted' }, 'Enter a length to estimate'));

  function update() {
    const est = estimateWeight(sel.value, parseFloat(len.value), parseFloat(gir.value) || 0);
    out.innerHTML = '';
    if (!est) { out.appendChild(h('div', { class: 'muted' }, 'Enter a length to estimate')); return; }
    out.appendChild(h('div', { class: 'big-num' }, fmtWeight(est.lb)));
    out.appendChild(h('div', { class: 'muted' }, `≈ ${est.kg.toFixed(est.kg < 10 ? 2 : 1)} kg`));
    out.appendChild(h('div', { class: 'faint' }, `Formula: ${est.method}. Estimates vary with condition.`));
  }
  [sel, len, gir].forEach(el => el.addEventListener('input', update));

  sheet(
    h('h2', {}, '⚖️ Weight Estimator'),
    h('p', { class: 'muted mt0' }, 'Measure nose to tail tip. Add girth (around the fattest point) for a sharper estimate.'),
    h('div', { class: 'field' }, h('label', {}, 'Species'), sel),
    h('div', { class: 'field-row' },
      h('div', { class: 'field' }, h('label', {}, 'Length (inches)'), len),
      h('div', { class: 'field' }, h('label', {}, 'Girth (inches)'), gir)),
    out,
  );
  update();
}

// ---- What-should-I-throw wizard ----
export function openWizard() {
  const answers = {};
  let step = 0;
  const body = h('div');
  const s = sheet(body);

  function renderStep() {
    body.innerHTML = '';
    if (step < WIZ_QUESTIONS.length) {
      const q = WIZ_QUESTIONS[step];
      body.appendChild(h('h2', {}, `🎯 ${q.q}`));
      body.appendChild(h('div', { class: 'faint' }, `Question ${step + 1} of ${WIZ_QUESTIONS.length}`));
      body.appendChild(h('div', { class: 'wiz-opts' },
        q.opts.map(o => h('div', {
          class: 'wiz-opt',
          onclick: () => { answers[q.id] = o.v; step++; renderStep(); },
        },
          h('div', { class: 'wo-ico' }, o.ico),
          h('div', { class: 'wo-label' }, o.label),
          h('div', { class: 'wo-sub' }, o.sub),
        ))));
    } else {
      const pick = WIZ_PICKS[answers.target][answers.depth];
      body.appendChild(h('h2', {}, '🎣 Tie this on'));
      body.appendChild(h('div', { class: 'wiz-result' },
        h('h2', { class: 'mt0', style: 'font-size:19px' }, pick.lure),
        h('p', {}, pick.how)));
      body.appendChild(h('h3', {}, 'Colour call'));
      body.appendChild(h('p', { class: 'muted' }, WIZ_COLORS[answers.clarity]));
      body.appendChild(h('h3', {}, 'Conditions adjustment'));
      body.appendChild(h('p', { class: 'muted' }, WIZ_SKY[answers.sky]));
      if (answers.target === 'pike') {
        body.appendChild(h('p', { class: 'now-flag' }, h('b', {}, 'Leader up! '), 'Wire or 80-100 lb fluoro leader is mandatory for pike and muskie. See Learn › Lure Workshop for building them.'));
      }
      body.appendChild(h('div', { class: 'spread', style: 'margin-top:14px' },
        h('button', { class: 'btn secondary', onclick: () => { step = 0; renderStep(); } }, '↻ Start over'),
        h('button', { class: 'btn', onclick: () => s.close() }, 'Go fish')));
    }
  }
  renderStep();
}
