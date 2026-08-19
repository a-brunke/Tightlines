// Tiny DOM + UI helpers shared by all screens.

export function esc(s) {
  return String(s ?? '').replace(/[&<>"']/g, c => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[c]));
}

// h('div', {class:'card', onclick: fn}, child1, 'text', ...)
export function h(tag, attrs = {}, ...children) {
  const el = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs || {})) {
    if (v == null || v === false) continue;
    if (k.startsWith('on') && typeof v === 'function') el.addEventListener(k.slice(2), v);
    else if (k === 'html') el.innerHTML = v;
    else el.setAttribute(k, v === true ? '' : v);
  }
  for (const c of children.flat(Infinity)) {
    if (c == null || c === false) continue;
    el.appendChild(c instanceof Node ? c : document.createTextNode(c));
  }
  return el;
}

export function svgEl(inner, viewBox = '0 0 320 200', cls = '') {
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('viewBox', viewBox);
  if (cls) svg.setAttribute('class', cls);
  svg.innerHTML = inner;
  return svg;
}

export function toast(msg, ms = 2400) {
  const host = document.getElementById('toast-host');
  const t = h('div', { class: 'toast' }, msg);
  host.appendChild(t);
  setTimeout(() => { t.style.opacity = '0'; t.style.transition = 'opacity 0.3s'; }, ms - 300);
  setTimeout(() => t.remove(), ms);
}

// Bottom sheet modal. Returns { close } — also closes on backdrop tap.
export function sheet(...content) {
  const host = document.getElementById('sheet-host');
  const body = h('div', { class: 'sheet' }, h('div', { class: 'sheet-grip' }), ...content);
  const back = h('div', { class: 'sheet-back' }, body);
  back.addEventListener('click', e => { if (e.target === back) close(); });
  body.addEventListener('click', e => e.stopPropagation());
  host.appendChild(back);
  function close() { back.remove(); }
  return { close, body };
}

export function levelBadge(level) {
  const names = { 1: 'Beginner', 2: 'Intermediate', 3: 'Expert' };
  return h('span', { class: `badge l${level}` }, names[level] || '');
}

export function fmtTime(d) {
  return new Date(d).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
}
export function fmtDate(d) {
  return new Date(d).toLocaleDateString([], { weekday: 'short', month: 'short', day: 'numeric' });
}

export function backBtn(hash, label = 'Back') {
  return h('a', { href: hash, class: 'btn secondary small', style: 'margin-bottom:10px' }, '‹ ' + label);
}
