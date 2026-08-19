// TightLines app shell: router, theme, PWA install, service worker.
import today from './screens/today.js';
import fish from './screens/fish.js';
import learn from './screens/learn.js';
import map from './screens/map.js';
import log from './screens/log.js';

const screens = { today, fish, map, log, learn };

function route() {
  const parts = location.hash.replace(/^#\/?/, '').split('/').filter(Boolean);
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
