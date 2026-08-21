// Fullscreen image viewer: pinch-zoom, pan, double-tap zoom, wheel zoom.
import { h } from './ui.js';

export function openLightbox(src, alt = '') {
  const img = h('img', { src, alt, draggable: 'false' });
  const closeBtn = h('button', { class: 'lb-close', 'aria-label': 'Close' }, '✕');
  const wrap = h('div', { class: 'lightbox' }, img, closeBtn);
  document.body.appendChild(wrap);

  let scale = 1, tx = 0, ty = 0;
  const ptrs = new Map();
  let start = null, lastTap = 0;

  const apply = () => { img.style.transform = `translate(${tx}px, ${ty}px) scale(${scale})`; };
  function clampView() {
    scale = Math.min(6, Math.max(1, scale));
    if (scale === 1) { tx = 0; ty = 0; return; }
    const mx = (scale - 1) * img.clientWidth / 2 + 60;
    const my = (scale - 1) * img.clientHeight / 2 + 60;
    tx = Math.max(-mx, Math.min(mx, tx));
    ty = Math.max(-my, Math.min(my, ty));
  }

  wrap.addEventListener('pointerdown', e => {
    wrap.setPointerCapture(e.pointerId);
    ptrs.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (ptrs.size === 2) {
      const [a, b] = [...ptrs.values()];
      start = { scale, tx, ty, d: Math.hypot(a.x - b.x, a.y - b.y), mx: (a.x + b.x) / 2, my: (a.y + b.y) / 2 };
    } else if (ptrs.size === 1) {
      start = { scale, tx, ty, x: e.clientX, y: e.clientY };
    }
  });
  wrap.addEventListener('pointermove', e => {
    if (!ptrs.has(e.pointerId)) return;
    ptrs.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (ptrs.size === 2 && start && start.d) {
      const [a, b] = [...ptrs.values()];
      scale = start.scale * (Math.hypot(a.x - b.x, a.y - b.y) / start.d);
      tx = start.tx + ((a.x + b.x) / 2 - start.mx);
      ty = start.ty + ((a.y + b.y) / 2 - start.my);
      clampView(); apply();
    } else if (ptrs.size === 1 && start && scale > 1) {
      tx = start.tx + (e.clientX - start.x);
      ty = start.ty + (e.clientY - start.y);
      clampView(); apply();
    }
  });
  function lift(e) {
    ptrs.delete(e.pointerId);
    start = null;
    if (ptrs.size === 1) {
      const p = [...ptrs.values()][0];
      start = { scale, tx, ty, x: p.x, y: p.y };
    }
  }
  wrap.addEventListener('pointerup', e => {
    const s0 = start;
    if (ptrs.size === 1 && s0 && s0.x != null && Math.hypot(e.clientX - s0.x, e.clientY - s0.y) < 8) {
      const now = Date.now();
      if (now - lastTap < 320) { // double tap: toggle zoom
        if (scale > 1) { scale = 1; } else {
          scale = 2.5;
          tx = (img.clientWidth / 2 + img.getBoundingClientRect().left - e.clientX) * (scale - 1);
          ty = (img.clientHeight / 2 + img.getBoundingClientRect().top - e.clientY) * (scale - 1);
        }
        clampView(); apply();
        lastTap = 0;
      } else lastTap = now;
    }
    lift(e);
  });
  wrap.addEventListener('pointercancel', lift);

  wrap.addEventListener('wheel', e => {
    e.preventDefault();
    scale *= e.deltaY < 0 ? 1.15 : 0.87;
    clampView(); apply();
  }, { passive: false });

  const close = () => wrap.remove();
  closeBtn.addEventListener('click', e => { e.stopPropagation(); close(); });
  wrap.addEventListener('click', e => { if (e.target === wrap && scale === 1) close(); });
  apply();
  return { close };
}
