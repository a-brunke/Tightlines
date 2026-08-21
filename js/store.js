// Persistence: JSON in localStorage, photos in IndexedDB.

const PREFIX = 'tl:';

export const store = {
  get(key, def = null) {
    try {
      const raw = localStorage.getItem(PREFIX + key);
      return raw == null ? def : JSON.parse(raw);
    } catch { return def; }
  },
  set(key, val) {
    localStorage.setItem(PREFIX + key, JSON.stringify(val));
  },
  del(key) { localStorage.removeItem(PREFIX + key); },
};

export function uid() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
}

// ---- IndexedDB photo store ----
let dbPromise = null;
function db() {
  if (!dbPromise) {
    dbPromise = new Promise((resolve, reject) => {
      const req = indexedDB.open('tightlines', 1);
      req.onupgradeneeded = () => req.result.createObjectStore('photos');
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => reject(req.error);
    });
  }
  return dbPromise;
}

export async function savePhoto(id, blob) {
  const d = await db();
  return new Promise((resolve, reject) => {
    const tx = d.transaction('photos', 'readwrite');
    tx.objectStore('photos').put(blob, id);
    tx.oncomplete = resolve;
    tx.onerror = () => reject(tx.error);
  });
}

export async function getPhoto(id) {
  const d = await db();
  return new Promise((resolve) => {
    const req = d.transaction('photos').objectStore('photos').get(id);
    req.onsuccess = () => resolve(req.result || null);
    req.onerror = () => resolve(null);
  });
}

export async function delPhoto(id) {
  const d = await db();
  const tx = d.transaction('photos', 'readwrite');
  tx.objectStore('photos').delete(id);
}

export function blobToDataURL(blob) {
  return new Promise((resolve, reject) => {
    const r = new FileReader();
    r.onload = () => resolve(r.result);
    r.onerror = reject;
    r.readAsDataURL(blob);
  });
}

export async function dataURLToBlob(url) {
  return (await fetch(url)).blob();
}

// Resize an image File to a JPEG blob (max edge px) so storage stays small.
export function shrinkImage(file, maxEdge = 1600, quality = 0.85) {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file);
    const img = new Image();
    img.onload = () => {
      const scale = Math.min(1, maxEdge / Math.max(img.width, img.height));
      const w = Math.round(img.width * scale), ht = Math.round(img.height * scale);
      const canvas = document.createElement('canvas');
      canvas.width = w; canvas.height = ht;
      canvas.getContext('2d').drawImage(img, 0, 0, w, ht);
      URL.revokeObjectURL(url);
      canvas.toBlob(b => b ? resolve(b) : reject(new Error('encode failed')), 'image/jpeg', quality);
    };
    img.onerror = reject;
    img.src = url;
  });
}
