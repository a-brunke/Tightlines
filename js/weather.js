// Weather: Open-Meteo forecast (keyless, CORS-friendly) with offline cache,
// plus helpers for wind, WMO codes and barometric trend.
import { store } from './store.js';

const WMO = {
  0: ['☀️', 'Clear'], 1: ['🌤️', 'Mainly clear'], 2: ['⛅', 'Partly cloudy'], 3: ['☁️', 'Overcast'],
  45: ['🌫️', 'Fog'], 48: ['🌫️', 'Icy fog'],
  51: ['🌦️', 'Light drizzle'], 53: ['🌦️', 'Drizzle'], 55: ['🌧️', 'Heavy drizzle'],
  56: ['🌧️', 'Freezing drizzle'], 57: ['🌧️', 'Freezing drizzle'],
  61: ['🌦️', 'Light rain'], 63: ['🌧️', 'Rain'], 65: ['🌧️', 'Heavy rain'],
  66: ['🌧️', 'Freezing rain'], 67: ['🌧️', 'Freezing rain'],
  71: ['🌨️', 'Light snow'], 73: ['🌨️', 'Snow'], 75: ['❄️', 'Heavy snow'], 77: ['🌨️', 'Snow grains'],
  80: ['🌦️', 'Light showers'], 81: ['🌧️', 'Showers'], 82: ['⛈️', 'Heavy showers'],
  85: ['🌨️', 'Snow showers'], 86: ['🌨️', 'Snow showers'],
  95: ['⛈️', 'Thunderstorm'], 96: ['⛈️', 'Storm with hail'], 99: ['⛈️', 'Storm with hail'],
};
export function wmo(code) { return WMO[code] || ['🌡️', '—']; }

export function windDir(deg) {
  const dirs = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
  return dirs[Math.round(((deg % 360) / 22.5)) % 16];
}

// Fetch forecast; falls back to the cached copy when offline. Returns
// { data, cachedAt, stale } — stale true means it came from cache.
export async function getWeather(lat, lng) {
  const cached = store.get('wx');
  const fresh = cached && Date.now() - cached.at < 30 * 60e3 &&
    Math.abs(cached.lat - lat) < 0.2 && Math.abs(cached.lng - lng) < 0.2;
  if (fresh) return { data: cached.data, cachedAt: cached.at, stale: false };
  try {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat.toFixed(3)}&longitude=${lng.toFixed(3)}`
      + '&current=temperature_2m,apparent_temperature,weather_code,wind_speed_10m,wind_direction_10m,wind_gusts_10m,cloud_cover,precipitation'
      + '&hourly=temperature_2m,weather_code,wind_speed_10m,wind_gusts_10m,precipitation_probability,pressure_msl'
      + '&daily=weather_code,temperature_2m_max,temperature_2m_min,wind_speed_10m_max,wind_gusts_10m_max,precipitation_probability_max'
      + '&timezone=auto&past_hours=12&forecast_days=7';
    const res = await fetch(url);
    if (!res.ok) throw new Error('weather http ' + res.status);
    const data = await res.json();
    store.set('wx', { at: Date.now(), lat, lng, data });
    return { data, cachedAt: Date.now(), stale: false };
  } catch (err) {
    if (cached) return { data: cached.data, cachedAt: cached.at, stale: true };
    throw err;
  }
}

// Index of the current hour in the hourly arrays (they start past_hours ago).
export function nowIndex(data) {
  const now = Date.now();
  const times = data.hourly.time;
  for (let i = 0; i < times.length; i++) {
    if (new Date(times[i]).getTime() > now) return Math.max(0, i - 1);
  }
  return times.length - 1;
}

// Barometric trend over the last ~6 h: anglers' favourite tell.
export function pressureTrend(data) {
  const i = nowIndex(data);
  const p = data.hourly.pressure_msl;
  const then = p[Math.max(0, i - 6)], now = p[i];
  if (then == null || now == null) return null;
  const delta = now - then;
  if (delta <= -1.5) return { arrow: '⬇', label: 'falling', delta, hint: 'Falling barometer: fish often feed hard ahead of the front. Get out there.' };
  if (delta >= 1.5) return { arrow: '⬆', label: 'rising', delta, hint: 'Rising barometer after a front: expect a tougher, tight-to-cover bite. Slow down and downsize.' };
  return { arrow: '➡', label: 'steady', delta, hint: 'Steady pressure: a normal bite. Fish the solunar windows and the wind-blown side.' };
}
