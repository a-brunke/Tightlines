// Hands-free trip sync: discover new trip files in the public Drive folder,
// merge them into the shared feed, and push. Safe to run on any schedule -
// it exits quietly when there's nothing new.
//
//   node scripts/auto-sync.mjs
import fs from 'fs';
import os from 'os';
import path from 'path';
import { fileURLToPath } from 'url';
import { execFileSync } from 'child_process';

const FOLDER_ID = '1t3GAb_y5RgFjpsNGNIqx9SBo3HQD928v';
const STATE_FILE = '.sync-state.json';
const ROOT = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
process.chdir(ROOT);

const state = fs.existsSync(STATE_FILE)
  ? JSON.parse(fs.readFileSync(STATE_FILE, 'utf8'))
  : { done: [] };

const html = await (await fetch(`https://drive.google.com/embeddedfolderview?id=${FOLDER_ID}`)).text();
const entries = [...html.matchAll(/entry-([-\w]{20,})[\s\S]{0,600}?flip-entry-title">([^<]+)</g)]
  .map(m => ({ id: m[1], name: m[2] }));

const fresh = entries.filter(e => e.name.endsWith('.json') && !state.done.includes(e.id));
if (!fresh.length) {
  console.log(`auto-sync: folder has ${entries.length} files, nothing new`);
  process.exit(0);
}

const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'tightlines-'));
const files = [];
for (const e of fresh) {
  try {
    const res = await fetch(`https://drive.google.com/uc?export=download&id=${e.id}`);
    const text = await res.text();
    const data = JSON.parse(text);
    if (data.app !== 'TightLines') throw new Error('not a trip file');
    const p = path.join(tmp, e.id + '.json');
    fs.writeFileSync(p, text);
    files.push(p);
    console.log(`auto-sync: fetched ${e.name} (${data.catches?.length ?? 0} catches)`);
  } catch (err) {
    console.warn(`auto-sync: skipping ${e.name}: ${err.message}`);
  }
  state.done.push(e.id);
}

if (files.length) {
  execFileSync('node', ['scripts/merge-trip.mjs', ...files], { stdio: 'inherit' });
}
fs.writeFileSync(STATE_FILE, JSON.stringify(state));

const dirty = execFileSync('git', ['status', '--porcelain', 'data/shared-trip.json']).toString().trim();
if (dirty) {
  execFileSync('git', ['add', 'data/shared-trip.json']);
  execFileSync('git', ['commit', '-q', '-m', 'Trip feed auto-sync']);
  execFileSync('git', ['push', '-q']);
  console.log('auto-sync: feed updated and pushed — phones will pick it up');
} else {
  console.log('auto-sync: no feed changes after merge');
}
