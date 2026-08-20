// TightLines service worker: precache app shell, cache-first with tile runtime cache.
const VERSION = 'v7';
const SHELL = `shell-${VERSION}`;
const TILES = 'tiles-v1';

const ASSETS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './css/app.css',
  './js/app.js',
  './js/ui.js',
  './js/store.js',
  './js/solunar.js',
  './js/tools.js',
  './js/screens/today.js',
  './js/screens/fish.js',
  './js/screens/learn.js',
  './js/screens/map.js',
  './js/screens/log.js',
  './js/data/fish.js',
  './js/data/knots.js',
  './js/data/gear.js',
  './js/data/diy.js',
  './js/data/fillet.js',
  './js/data/regs.js',
  './js/data/silhouettes.js',
  './js/data/wizard.js',
  './vendor/leaflet/leaflet.js',
  './vendor/leaflet/leaflet.css',
  './vendor/suncalc.js',
  './vendor/qrcode.js',
  './data/kagawong-lake.geojson',
  './data/kagawong-bathymetry.geojson',
  ...[
    'walleye', 'yellow-perch', 'northern-pike', 'muskellunge', 'smallmouth-bass',
    'largemouth-bass', 'black-crappie', 'bluegill', 'pumpkinseed', 'rock-bass',
    'lake-trout', 'brook-trout', 'rainbow-trout', 'brown-trout', 'chinook-salmon',
    'lake-whitefish', 'channel-catfish', 'burbot', 'brown-bullhead',
  ].map(id => `./data/fish-img/${id}.jpg`),
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-maskable-512.png',
];

self.addEventListener('install', e => {
  e.waitUntil((async () => {
    const cache = await caches.open(SHELL);
    // best-effort: don't fail install if an optional asset (e.g. geojson) is missing
    await Promise.allSettled(ASSETS.map(a => cache.add(a)));
    self.skipWaiting();
  })());
});

self.addEventListener('activate', e => {
  e.waitUntil((async () => {
    for (const key of await caches.keys()) {
      if (key !== SHELL && key !== TILES) await caches.delete(key);
    }
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  if (e.request.method !== 'GET') return;

  // map tiles: cache-first into the tile cache
  if (url.hostname.endsWith('tile.openstreetmap.org')) {
    e.respondWith((async () => {
      const cache = await caches.open(TILES);
      const hit = await cache.match(e.request.url);
      if (hit) return hit;
      try {
        const res = await fetch(e.request);
        cache.put(e.request.url, res.clone());
        return res;
      } catch {
        return new Response('', { status: 404 });
      }
    })());
    return;
  }

  // same-origin app assets: cache-first, network fallback (and backfill cache)
  if (url.origin === location.origin) {
    e.respondWith((async () => {
      const hit = await caches.match(e.request, { ignoreSearch: true });
      if (hit) return hit;
      try {
        const res = await fetch(e.request);
        if (res.ok) (await caches.open(SHELL)).put(e.request, res.clone());
        return res;
      } catch (err) {
        // SPA fallback
        const shell = await caches.match('./index.html');
        if (shell) return shell;
        throw err;
      }
    })());
  }
});
