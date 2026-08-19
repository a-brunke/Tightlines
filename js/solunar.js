// Solunar + sun/moon engine. All astronomy from vendored SunCalc (ES module).
import * as SunCalc from '../vendor/suncalc.js';

export const KAGAWONG = { lat: 45.83, lng: -82.31, name: 'Lake Kagawong' };

const PHASE_NAMES = [
  [0.0325, 'New Moon'], [0.2175, 'Waxing Crescent'], [0.2825, 'First Quarter'],
  [0.4675, 'Waxing Gibbous'], [0.5325, 'Full Moon'], [0.7175, 'Waning Gibbous'],
  [0.7825, 'Last Quarter'], [0.9675, 'Waning Crescent'], [1.01, 'New Moon'],
];
export function moonPhaseName(phase) {
  for (const [limit, name] of PHASE_NAMES) if (phase < limit) return name;
  return 'New Moon';
}

// Find lunar transits (altitude maxima = overhead, minima = underfoot) by sampling.
function moonTransits(dayStart, lat, lng) {
  const step = 4 * 60 * 1000; // 4 min sampling
  const alts = [];
  for (let t = dayStart.getTime() - step; t <= dayStart.getTime() + 24 * 3600 * 1000 + step; t += step) {
    alts.push({ t, alt: SunCalc.getMoonPosition(new Date(t), lat, lng).altitude });
  }
  const transits = [];
  for (let i = 1; i < alts.length - 1; i++) {
    const a = alts[i - 1].alt, b = alts[i].alt, c = alts[i + 1].alt;
    if (b > a && b >= c) transits.push({ t: alts[i].t, kind: 'over' });
    else if (b < a && b <= c) transits.push({ t: alts[i].t, kind: 'under' });
  }
  const dayEnd = dayStart.getTime() + 24 * 3600 * 1000;
  return transits.filter(x => x.t >= dayStart.getTime() && x.t < dayEnd);
}

// Full solunar picture for one calendar day at a location.
export function solunarDay(date, lat = KAGAWONG.lat, lng = KAGAWONG.lng) {
  const dayStart = new Date(date); dayStart.setHours(0, 0, 0, 0);
  const noon = new Date(dayStart.getTime() + 12 * 3600 * 1000);

  const sun = SunCalc.getTimes(noon, lat, lng);
  const ill = SunCalc.getMoonIllumination(noon);
  const mt = SunCalc.getMoonTimes(dayStart, lat, lng);

  const HR = 3600 * 1000;
  const majors = moonTransits(dayStart, lat, lng).map(x => ({
    peak: x.t, start: x.t - HR, end: x.t + HR,
    label: x.kind === 'over' ? 'Moon overhead' : 'Moon underfoot',
  }));
  const minors = [];
  if (mt.rise) minors.push({ peak: +mt.rise, start: +mt.rise - HR / 2, end: +mt.rise + HR / 2, label: 'Moonrise' });
  if (mt.set) minors.push({ peak: +mt.set, start: +mt.set - HR / 2, end: +mt.set + HR / 2, label: 'Moonset' });

  // Day rating 0-4: moon phase strength + solunar windows landing on dawn/dusk.
  const phaseDist = Math.min(
    Math.abs(ill.phase - 0), Math.abs(ill.phase - 0.5), Math.abs(ill.phase - 1)
  ); // 0 at new/full, max 0.25 at quarters
  let rating = phaseDist < 0.04 ? 2 : phaseDist < 0.10 ? 1 : 0;
  const overlaps = (win, t) => t && Math.abs(win.peak - +t) < 1.5 * HR;
  for (const w of majors.concat(minors)) {
    if (overlaps(w, sun.sunrise) || overlaps(w, sun.sunset)) { rating++; }
  }
  rating = Math.min(4, rating);

  return {
    sun,
    moon: {
      phase: ill.phase, fraction: ill.fraction, name: moonPhaseName(ill.phase),
      rise: mt.rise || null, set: mt.set || null, alwaysUp: !!mt.alwaysUp, alwaysDown: !!mt.alwaysDown,
    },
    majors, minors, rating,
    ratingLabel: ['Slow', 'Fair', 'Good', 'Great', 'Epic'][rating],
  };
}

// SVG (inner markup) of the moon disc at a given phase 0..1.
export function moonSVG(phase, size = 64) {
  const r = size / 2 - 3, cx = size / 2, cy = size / 2;
  const e = Math.cos(2 * Math.PI * phase);
  const rx = Math.abs(e) * r;
  const waxing = phase <= 0.5;
  const outerSweep = waxing ? 1 : 0;
  const innerSweep = waxing ? (e > 0 ? 0 : 1) : (e > 0 ? 1 : 0);
  const lit = `M ${cx} ${cy - r} A ${r} ${r} 0 0 ${outerSweep} ${cx} ${cy + r} A ${rx} ${r} 0 0 ${innerSweep} ${cx} ${cy - r} Z`;
  return `<circle cx="${cx}" cy="${cy}" r="${r}" fill="var(--bg2)" stroke="var(--line)"/>` +
         `<path d="${lit}" fill="var(--gold)" opacity="0.9"/>`;
}
