// Trip commissioner tool: merge TightLines trip files into the shared feed.
//
//   node scripts/merge-trip.mjs sam-trip.json pat-trip.json ...
//
// Reads data/shared-trip.json if it exists, merges every catch/waypoint/angler
// from the given files (deduped by id, photos kept), and writes the feed back.
// Commit + push, and every phone pulls the update automatically.
import fs from 'fs';
import path from 'path';

const FEED = path.join('data', 'shared-trip.json');
const files = process.argv.slice(2);
if (!files.length) {
  console.error('Usage: node scripts/merge-trip.mjs <trip-file.json> [more...]');
  process.exit(1);
}

const feed = fs.existsSync(FEED)
  ? JSON.parse(fs.readFileSync(FEED, 'utf8'))
  : { app: 'TightLines', version: 2, from: 'Trip feed', anglers: [], catches: [], waypoints: [] };

const cById = new Map(feed.catches.map(c => [c.id, c]));
const wById = new Map(feed.waypoints.map(w => [w.id, w]));
const anglers = new Set(feed.anglers);
let added = 0, photos = 0;

for (const f of files) {
  const t = JSON.parse(fs.readFileSync(f, 'utf8'));
  if (t.app !== 'TightLines') { console.warn(`skip ${f}: not a TightLines trip file`); continue; }
  (t.anglers || []).forEach(a => anglers.add(a));
  for (const c of t.catches || []) {
    if (!c?.id) continue;
    const known = cById.get(c.id);
    if (known) {
      if (c.photo && !known.photo) { known.photo = c.photo; photos++; }
      continue;
    }
    cById.set(c.id, c); added++;
    if (c.photo) photos++;
  }
  for (const w of t.waypoints || []) {
    if (w?.id && !wById.has(w.id)) wById.set(w.id, w);
  }
  console.log(`merged ${f}`);
}

if (!added && !photos && fs.existsSync(FEED)) {
  console.log('feed unchanged: nothing new in those files');
  process.exit(0);
}

feed.anglers = [...anglers];
feed.catches = [...cById.values()].sort((a, b) => b.ts - a.ts);
feed.waypoints = [...wById.values()];
feed.exported = new Date().toISOString();

fs.writeFileSync(FEED, JSON.stringify(feed));
const mb = (fs.statSync(FEED).size / 1024 / 1024).toFixed(1);
console.log(`feed: ${feed.catches.length} catches (${added} new, ${photos} photos), ${feed.waypoints.length} waypoints, ${mb} MB`);
console.log('Now: git add data/shared-trip.json && git commit && git push');
