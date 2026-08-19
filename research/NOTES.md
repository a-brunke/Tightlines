# Research notes — Lake Kagawong fishing PWA

Retrieved 2026-08-19. All data obtained via public GET requests; no accounts created, no agreements accepted.

## 1. Bathymetry — REAL DATA OBTAINED (kagawong-bathymetry.geojson)

- **Source**: Ontario MNRF / Land Information Ontario (LIO) Open Data, **Bathymetry Line** layer.
  - REST endpoint: `https://ws.lioservices.lrc.gov.on.ca/arcgis2/rest/services/LIO_OPEN_DATA/LIO_Open01/MapServer/30`
  - Dataset page: https://geohub.lio.gov.on.ca/datasets/mnrf::bathymetry-line
  - License: Open Government Licence – Ontario. Marked "never use for navigation".
  - (Note: the `arcgis1071a` host root works but its `LIO` folder 403s; the open-data instance is `arcgis2`.)
- **What was fetched**: envelope query (-82.41, 45.765, -82.225, 45.90), `spatialRel=esriSpatialRelContains`, `outSR=4326`, `f=geojson`, then filtered so only lines falling inside the OSM Lake Kagawong polygon were kept. A cross-check with `esriSpatialRelIntersects` found the identical 18-feature set (consecutive OGF_IDs 129690526–129690543, i.e. one survey batch) — the set is complete; neighbouring waters' contours (Ice Lake etc.) were excluded.
- **Contents**: 18 LineString contour features, WGS84.
- **Attributes**: `DEPTH` (single float, **metres, negative = depth below surface**), `SURVEY_METHOD` ("Transect"), `CREATION_METHODOLOGY` ("Hand Digitized"), `LOCATION_ACCURACY` ("Within 50 metres" / "Within 10 metres"), `OGF_ID`, dates.
- **Depth values present**: -6.1, -12.2, -18.3, -24.4 m (i.e. a 20/40/60/80-ft-interval survey converted to metres; 4+4+4+3 lines) plus three deep-basin contours **-31.1, -32, -33.5 m**.
- **Quality**: coarse but genuine MNRF habitat-survey contours — 7 depth levels total, hand-digitized transect survey, +/-50 m positional accuracy. Good enough for a fishing app's depth shading; not survey-grade. The deepest contour (-33.5 m = 110 ft) exactly matches the published max depth on the Adventure Fishing map, which corroborates both.
- Fish ON-Line also exposes a bathymetry layer (`.../arcgis4/rest/services/FishONLine/Fish_Online_Map/MapServer` layer 3) — same LIO data.

## 2. Lake outline (kagawong-lake.geojson)

- OpenStreetMap relation **1703182** ("Lake Kagawong", natural=water, water=lake, source NRCan CanVec 7.0), fetched via Overpass API, converted to a GeoJSON Polygon: 1 outer ring (945 pts, RFC7946 winding) + **5 island holes**. WGS84.
- bbox: -82.39781, 45.77332 → -82.23689, 45.89222. Computed area **56.3 km2** — agrees with published 55.6–57.6 km2.
- Attribution required: (c) OpenStreetMap contributors, ODbL 1.0 (embedded in the file's properties).

## 3. Lake facts highlights (details + sources in lake-facts.md)

- 2nd-largest lake on Manitoulin; ~5,555 ha; perimeter ~61 km; elevation ~213 m.
- **Max depth: use 33.5 m / 110 ft** (fishing-map figure, confirmed by the deepest LIO contour). Wikipedia's 45 m claim is unsupported — flagged as a discrepancy.
- Mean depth ~11 m (36 ft); clarity ~5–6 m; moderately fertile warm-water lake; frozen Dec–early May.
- Species: walleye (stocked — 8,377 fingerlings Aug 2025 by Gore Bay Fish & Game Club), smallmouth bass, yellow perch (the lake's claims to fame), northern pike, pumpkinseed, rock bass, white sucker, bullhead; whitefish historic. No muskie/crappie/lake trout records.
- Two public launches: north end at Kagawong village (river mouth), south end off Perivale Road (Spring Bay). Fish ON-Line's access-point layer has nothing on this lake (sparse data).
- Structure: submerged islands/shoals (incl. "eastern submerged extension of Twin Harbours"), rock shelves, points, weed edges; local walleye band 15–25 ft.

## 4. Regulations caveats (zone10.json)

- Source: official ontario.ca FMZ 10 page, 2026 edition (updated 2026-08-04). Table text was extracted from raw page HTML and verified verbatim, not just summarized.
- **No exception names Lake Kagawong directly**, but the **"Manitoulin Island – inland waters" waterbody exception applies to it** and overrides zone-wide rules for **lake trout (Jan 1–Sep 30, no size limit), northern pike (closed Apr 1 to Fri before 3rd Sat in May), rainbow trout (opens 4th Sat in Apr), yellow perch (closed Apr 1 to Fri before 3rd Sat in May; S-25/day poss. 50, C-12/day poss. 25)**. The JSON stores Kagawong-applicable values in the main fields and zone-wide values in `zoneWide*` fields.
- **Kagawong River sanctuary**: no fishing Sep 25–Oct 31 (Hwy 540 bridge to Henry St bridge) — matters for fall river fishing near the village.
- Aggregate trout+salmon limit S-5/C-2 across all trout/salmon species combined.
- Rock bass, burbot, bullheads are **unlisted** species in the FMZ 10 table → no listed season/limit; noted as such rather than invented.
- Manitoulin is excluded from the Northeast Bait Management Zone; the north-of-Hwy-17 year-round bass rule does NOT apply to Manitoulin.
- Regs change annually — re-verify against the source URL each season.

## Dead ends / skipped

- `geohub.lio.gov.on.ca` dataset pages work but the direct REST service was faster; no login needed anywhere.
- Manitoulin Expositor stocking article is paywalled beyond the lede (lede contained the key numbers); did not create an account per safety rules.
- Fish ON-Line's per-lake species query runs through a Geocortex app backend (no simple public REST species-by-lake layer found); species list was assembled from Wikipedia + Angler's Atlas + local sources instead.
- Angler's Atlas offers "free contour map downloads" but behind a member flow — skipped (LIO data is better provenance anyway).
