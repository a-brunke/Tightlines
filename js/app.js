// TightLines app shell: router, theme, PWA install, service worker.
import today from './screens/today.js';
import fish from './screens/fish.js';
import learn from './screens/learn.js';
import map from './screens/map.js';
import log, { handleMergeLink, mergeTrip } from './screens/log.js';
import { store } from './store.js';
import { toast } from './ui.js';

const screens = { today, fish, map, log, learn };

function route() {
  let parts = location.hash.replace(/^#\/?/, '').split('/').filter(Boolean);
  // scanned QR link: #/merge/<data> — land on the log screen, then confirm the merge
  if (parts[0] === 'merge' && parts[1]) {
    const data = parts[1];
    history.replaceState(null, '', '#/log');
    parts = ['log'];
    setTimeout(() => handleMergeLink(data), 250);
  }
  const id = screens[parts[0]] ? parts[0] : 'today';
  document.querySelectorAll('#tabbar a').forEach(a =>
    a.classList.toggle('active', a.dataset.tab === id));
  const root = document.getElementById('screen');
  root.innerHTML = '';
  try {
    screens[id].render(root, parts.slice(1));
  } catch (err) {
    console.error(err);
    root.innerHTML = `<div class="card"><h2>⚠️ Hmm, that snagged</h2><p class="muted">${err.message}</p></div>`;
  }
  window.scrollTo(0, 0);
}
window.addEventListener('hashchange', route);
if (!location.hash) history.replaceState(null, '', '#/today');
route();

// ---- shared trip feed ----
// The site can host data/shared-trip.json (merged by the trip commissioner).
// Every phone pulls and merges it automatically when online — no scanning.
(async () => {
  try {
    const res = await fetch('data/shared-trip.json', { cache: 'no-cache' });
    if (!res.ok) return;
    const data = await res.json();
    if (!data || data.app !== 'TightLines') return;
    if (store.get('feedStamp') === data.exported) return;
    const r = await mergeTrip(data);
    store.set('feedStamp', data.exported);
    if (r && (r.newC || r.newWp)) {
      toast(`🌐 Trip feed: +${r.newC} catches from the crew`);
      route();
    }
  } catch { /* offline or no feed yet */ }
})();

// ---- theme ----
const themeBtn = document.getElementById('btn-theme');
function applyTheme(t) {
  if (t) document.documentElement.setAttribute('data-theme', t);
  else document.documentElement.removeAttribute('data-theme');
  const dark = t ? t === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
  document.querySelector('meta[name="theme-color"]').setAttribute('content', dark ? '#0b1620' : '#eef3f2');
}
applyTheme(localStorage.getItem('tl:themeRaw') || '');
themeBtn.addEventListener('click', () => {
  const cur = localStorage.getItem('tl:themeRaw');
  const dark = cur ? cur === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
  const next = dark ? 'light' : 'dark';
  localStorage.setItem('tl:themeRaw', next);
  applyTheme(next);
});

// ---- PWA install prompt ----
let installEvt = null;
const installBtn = document.getElementById('btn-install');
window.addEventListener('beforeinstallprompt', e => {
  e.preventDefault();
  installEvt = e;
  installBtn.classList.remove('hidden');
});
installBtn.addEventListener('click', async () => {
  if (!installEvt) return;
  installEvt.prompt();
  await installEvt.userChoice;
  installEvt = null;
  installBtn.classList.add('hidden');
});

// ---- service worker ----
if ('serviceWorker' in navigator) {
  const hadController = !!navigator.serviceWorker.controller;
  window.addEventListener('load', () =>
    navigator.serviceWorker.register('sw.js').then(r => r.update()).catch(() => {}));
  // when an updated worker takes over an already-controlled page, refresh once to pick it up
  navigator.serviceWorker.addEventListener('controllerchange', () => {
    if (hadController) location.reload();
  });
}
