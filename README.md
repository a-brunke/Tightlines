# 🎣 TightLines — Ontario Fishing Companion

An offline-first Progressive Web App built for a family fishing trip to **Lake Kagawong, Manitoulin Island** — covering all Ontario freshwater fishing from perch to muskie.

## Features

- **Today** — solunar best-fishing-times timeline (moon overhead/underfoot majors, moonrise/set minors), moon phase, day rating, sunrise/sunset, and late-August species intel.
- **Fish** — 19-species Ontario encyclopedia: ID features, seasonal depth patterns, top presentations, pro tips, table quality, and current Zone 10 regulations (with the Manitoulin Island exceptions applied).
- **Map** — Lake Kagawong with **real MNRF depth contours** (20/40/60/80 ft + the 110 ft basin), a **live depth finder** that estimates the depth under the crosshair by interpolating between survey contours, GPS waypoints that work with zero cell signal, catch pins, and one-tap offline map download.
- **Log** — catch log with photos, auto GPS, auto weight estimate — feeding the **Kagawong Cup** family derby leaderboard (biggest fish, most fish, most species). **Boat-to-boat sync**: Share exports the whole trip (photos embedded) as a file you can send over Android Quick Share with no signal; Merge combines it into the receiving phone with no duplicates.
- **Learn** — gear curriculum (beginner → muskie program), step-by-step animated knot diagrams, rig guides, a DIY lure workshop (spinners, bucktails, wire leaders, even carving crankbaits), filleting guides (including the pike Y-bone method), and shore-lunch recipes.
- **Tools** — length→weight estimator (species-specific formulas), "what should I throw?" wizard.

## Running locally

```bash
node dev-server.mjs
```

Then open http://localhost:8123.

## Deploying

Static files only — host the folder (minus `node_modules/`, `research/`, `dev-server.mjs`) on any HTTPS static host (GitHub Pages, Netlify, Cloudflare Pages). HTTPS is required for PWA install + offline mode.

**Important:** bump the `VERSION` constant in `sw.js` whenever content changes, or installed clients will keep the old precache.

## Artwork

Species illustrations and the app icon were AI-generated (OpenAI gpt-image-1.5) from species-accurate prompts, then reviewed and downscaled. Knot and rig diagrams are hand-authored SVG.

## Data sources

- Bathymetry: Ontario Ministry of Natural Resources, LIO Open Data (Bathymetry Line layer)
- Shoreline: © OpenStreetMap contributors (ODbL)
- Regulations: ontario.ca Ontario Fishing Regulations Summary, FMZ 10 (retrieved 2026-08-19) — **always verify before keeping fish**
- Map tiles: © OpenStreetMap

Research notes and raw data: `research/`.
