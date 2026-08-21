// Photo measuring: tap a known reference (ruler) then the fish, get length + weight.
// Pure pixel-ratio math — works completely offline.
import { h, sheet, toast } from './ui.js';
import { estimateWeight, fmtWeight } from './tools.js';
import { FISH } from './data/fish.js';

const REF_CHIPS = [6, 12, 18, 24, 36];

export function openMeasure(file, speciesId, onUse) {
  const url = URL.createObjectURL(file);
  const img = new Image();
  img.onerror = () => toast('Could not open that photo');
  img.onload = () => build(img, url, speciesId, onUse);
  img.src = url;
}

function build(img, url, speciesId, onUse) {
  const maxW = Math.min(680, window.innerWidth - 56);
  const maxH = Math.round(window.innerHeight * 0.5);
  const scale = Math.min(maxW / img.width, maxH / img.height);
  const canvas = h('canvas', { class: 'measure-canvas', width: Math.round(img.width * scale), height: Math.round(img.height * scale) });
  const ctx = canvas.getContext('2d');

  // state: phase 'ref' → 'reflen' → 'fish' → 'done'
  let phase = 'ref';
  let refLen = 12;
  const refPts = [], fishPts = [];

  const prompt = h('p', { style: 'font-weight:700;min-height:44px;margin:10px 0 6px' });
  const controls = h('div');
  const undoBtn = h('button', { class: 'btn secondary small' }, '↩ Undo tap');
  const resetBtn = h('button', { class: 'btn secondary small' }, 'Start over');

  const s = sheet(
    h('h2', {}, '📏 Measure from photo'),
    h('p', { class: 'faint mt0' }, 'Works best when the ruler lies right beside the fish and the shot is from straight above.'),
    canvas, prompt, controls,
    h('div', { class: 'spread', style: 'margin-top:10px' }, undoBtn, resetBtn),
  );

  function dot(p, color) {
    ctx.beginPath(); ctx.arc(p.x, p.y, 7, 0, Math.PI * 2);
    ctx.strokeStyle = '#fff'; ctx.lineWidth = 4; ctx.stroke();
    ctx.beginPath(); ctx.arc(p.x, p.y, 7, 0, Math.PI * 2);
    ctx.strokeStyle = color; ctx.lineWidth = 2.5; ctx.stroke();
  }
  function line(a, b, color) {
    ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y);
    ctx.strokeStyle = color; ctx.lineWidth = 2.5; ctx.setLineDash([7, 5]); ctx.stroke(); ctx.setLineDash([]);
  }
  function draw() {
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    if (refPts.length === 2) line(refPts[0], refPts[1], '#3ecfb2');
    refPts.forEach(p => dot(p, '#3ecfb2'));
    if (fishPts.length === 2) line(fishPts[0], fishPts[1], '#f0b64a');
    fishPts.forEach(p => dot(p, '#f0b64a'));
  }
  const dist = (a, b) => Math.hypot(a.x - b.x, a.y - b.y);

  function update() {
    draw();
    controls.innerHTML = '';
    if (phase === 'ref') {
      prompt.textContent = `🟢 Tap BOTH ENDS of the ruler section you'll use (${refPts.length}/2 taps)`;
    } else if (phase === 'reflen') {
      prompt.textContent = '🟢 How long is that section?';
      const custom = h('input', { type: 'number', inputmode: 'decimal', placeholder: 'other (inches)', style: 'width:130px' });
      controls.append(
        h('div', { class: 'chips' },
          REF_CHIPS.map(v => h('div', {
            class: 'chip' + (v === refLen ? ' active' : ''),
            onclick: () => { refLen = v; phase = 'fish'; update(); },
          }, `${v}"`)),
          custom),
        h('button', {
          class: 'btn small', style: 'margin-top:4px', onclick: () => {
            const v = parseFloat(custom.value);
            if (v > 0) { refLen = v; phase = 'fish'; update(); } else toast('Enter the length in inches');
          },
        }, 'Use custom length'));
    } else if (phase === 'fish') {
      prompt.textContent = `🟡 Now tap the fish: NOSE, then TAIL TIP (${fishPts.length}/2 taps)`;
    } else {
      const px = dist(refPts[0], refPts[1]);
      const len = refLen * dist(fishPts[0], fishPts[1]) / px;
      const est = estimateWeight(speciesId, len);
      const name = FISH.find(f => f.id === speciesId)?.name || 'fish';
      prompt.textContent = '';
      controls.append(
        h('div', { class: 'center', style: 'padding:4px 0' },
          h('div', { class: 'big-num' }, `${len.toFixed(1)}"`),
          est ? h('div', { class: 'muted' }, `≈ ${fmtWeight(est.lb)} ${name}`) : null,
          h('div', { class: 'faint' }, 'Estimate only — camera angle and fish curve add slop.')),
        h('button', {
          class: 'btn block', style: 'margin-top:8px', onclick: () => {
            URL.revokeObjectURL(url);
            s.close();
            onUse(len);
          },
        }, '✓ Use this length'));
    }
  }

  canvas.addEventListener('click', e => {
    if (phase !== 'ref' && phase !== 'fish') return;
    const r = canvas.getBoundingClientRect();
    const p = { x: (e.clientX - r.left) * (canvas.width / r.width), y: (e.clientY - r.top) * (canvas.height / r.height) };
    const pts = phase === 'ref' ? refPts : fishPts;
    pts.push(p);
    if (pts.length === 2) {
      if (phase === 'ref') {
        if (dist(refPts[0], refPts[1]) < 12) { refPts.length = 0; toast('Those taps are too close together — zoom your shot or tap farther apart'); }
        else phase = 'reflen';
      } else phase = 'done';
    }
    update();
  });
  undoBtn.onclick = () => {
    if (phase === 'done') { fishPts.pop(); phase = 'fish'; }
    else if (phase === 'fish' && fishPts.length) fishPts.pop();
    else if (phase === 'fish') { phase = 'reflen'; }
    else if (phase === 'reflen') { refPts.pop(); phase = 'ref'; }
    else if (refPts.length) refPts.pop();
    update();
  };
  resetBtn.onclick = () => { refPts.length = 0; fishPts.length = 0; phase = 'ref'; update(); };
  update();
}
