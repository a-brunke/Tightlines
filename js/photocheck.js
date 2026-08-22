// The Fish Polygraph: forensic sniff-test for uploaded catch photos.
// Runs on the ORIGINAL file (before re-encoding strips metadata).
//
// verdicts: 'real'   - camera EXIF present, recent, no funny business
//           'sus'    - metadata missing/stripped or edited (no penalty:
//                      messaging apps strip EXIF from honest photos too)
//           'busted' - hard evidence of AI generation (C2PA content
//                      credentials or generator signatures in the bytes)

const AI_BYTE_MARKERS = [
  'c2pa', 'C2PA', 'contentauth', 'TrainedAlgorithmicMedia',
  'Midjourney', 'DALL-E', 'dall-e', 'Stable Diffusion', 'ComfyUI',
  'SDXL', 'NovelAI', 'Adobe Firefly', 'Leonardo.Ai', 'FLUX.1',
];
const AI_SOFTWARE = /midjourney|dall|stable ?diffusion|firefly|imagen|flux|leonardo|comfyui|novelai|gemini|grok/i;
const EDIT_SOFTWARE = /photoshop|lightroom|gimp|snapseed|canva|picsart|facetune/i;

function parseTiff(b, off) {
  try {
    const le = b[off] === 0x49;
    const u16 = o => le ? b[o] | (b[o + 1] << 8) : (b[o] << 8) | b[o + 1];
    const u32 = o => (le
      ? (b[o] | (b[o + 1] << 8) | (b[o + 2] << 16) | (b[o + 3] << 24))
      : ((b[o] << 24) | (b[o + 1] << 16) | (b[o + 2] << 8) | b[o + 3])) >>> 0;
    const out = {};
    function readIfd(p, depth) {
      if (depth > 2 || p < off || p > b.length - 2) return;
      const n = u16(p);
      if (n > 200) return;
      for (let k = 0; k < n; k++) {
        const e = p + 2 + k * 12;
        if (e + 12 > b.length) return;
        const tag = u16(e), type = u16(e + 2), count = u32(e + 4);
        const unit = type === 3 ? 2 : (type === 4 || type === 9) ? 4 : 1;
        const size = unit * count;
        const voff = size > 4 ? off + u32(e + 8) : e + 8;
        if (voff + size > b.length) continue;
        const str = () => {
          let s = '';
          for (let j = 0; j < Math.min(count, 200); j++) {
            const ch = b[voff + j];
            if (!ch) break;
            s += String.fromCharCode(ch);
          }
          return s.trim();
        };
        if (tag === 0x010F) out.make = str();
        else if (tag === 0x0110) out.model = str();
        else if (tag === 0x0131) out.software = str();
        else if (tag === 0x9003 || (tag === 0x0132 && !out.dateTimeOriginal)) out.dateTimeOriginal = str();
        else if (tag === 0x8769) readIfd(off + u32(voff), depth + 1);
      }
    }
    readIfd(off + u32(off + 4), 0);
    return out;
  } catch { return null; }
}

function parseExif(b) {
  if (b[0] !== 0xFF || b[1] !== 0xD8) return null; // JPEG only
  let i = 2;
  while (i + 4 < b.length) {
    if (b[i] !== 0xFF) break;
    const marker = b[i + 1];
    if (marker === 0xDA) break;
    const len = (b[i + 2] << 8) | b[i + 3];
    if (marker === 0xE1 && b[i + 4] === 0x45 && b[i + 5] === 0x78 && b[i + 6] === 0x69 && b[i + 7] === 0x66) {
      return parseTiff(b, i + 10);
    }
    i += 2 + len;
  }
  return null;
}

export async function analyzePhoto(file) {
  try {
    const buf = new Uint8Array(await file.arrayBuffer());
    const text = new TextDecoder('latin1').decode(buf);
    const flags = [];

    // hard evidence: AI generator fingerprints in the raw bytes
    const hits = AI_BYTE_MARKERS.filter(m => text.includes(m));
    // Stable Diffusion PNG parameter chunks
    if (text.includes('Steps:') && /Sampler|CFG scale/.test(text)) hits.push('SD parameters');

    const exif = parseExif(buf) || {};
    if (exif.software && AI_SOFTWARE.test(exif.software)) hits.push(`software tag "${exif.software}"`);

    if (hits.length) {
      return {
        verdict: 'busted',
        flags: [`AI markers found: ${[...new Set(hits)].slice(0, 4).join(', ')}`],
      };
    }

    if (!exif.make && !exif.model) {
      flags.push('no camera metadata (screenshot, download, or re-shared image)');
    } else {
      flags.push(`shot on ${[exif.make, exif.model].filter(Boolean).join(' ')}`);
    }
    if (exif.software && EDIT_SOFTWARE.test(exif.software)) {
      flags.push(`edited in ${exif.software}`);
    }
    if (exif.dateTimeOriginal) {
      const m = exif.dateTimeOriginal.match(/^(\d{4}):(\d{2}):(\d{2}) (\d{2}):(\d{2})/);
      if (m) {
        const taken = new Date(+m[1], +m[2] - 1, +m[3], +m[4], +m[5]).getTime();
        const days = (Date.now() - taken) / 86400e3;
        if (days > 7) flags.push(`photo taken ${Math.round(days)} days before it was logged`);
      }
    }

    const sus = flags.some(f => f.startsWith('no camera') || f.startsWith('edited') || f.includes('days before'));
    return { verdict: sus ? 'sus' : 'real', flags };
  } catch {
    return { verdict: 'sus', flags: ['photo could not be analyzed'] };
  }
}
