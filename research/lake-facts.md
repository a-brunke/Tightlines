# Lake Kagawong (Kagawong Lake) — Manitoulin Island, Ontario

Researched 2026-08-19 for the offline-first fishing PWA.

## Identity and location

- Also called **Kagawong Lake**; Ojibwe name meaning roughly "where mists rise from the falling waters".
- Second-largest lake on Manitoulin Island (after Lake Manitou), Billings / Central Manitoulin / Gordon-Barrie Island townships area.
- OSM relation **1703182** (wikidata Q6425513). Shoreline bounding box: **45.7733 to 45.8922 N, -82.3978 to -82.2369 W**. Geometric centroid is near **45.83 N, -82.31 W** (the task's approximate center 45.86/-82.25 falls in the lake's northeast arm, not the true center).
- The **village of Kagawong** sits at the lake's north end; the **Kagawong River** exits there, flowing north over **Bridal Veil Falls** into Mudge Bay of Lake Huron's North Channel. Confirmed by OSM geometry (lake's north tip is at the village) and all fishing sources.
- Surface elevation ~213 m (699 ft) (Wikipedia).

## Size and depth

| Fact | Value | Source |
|---|---|---|
| Surface area | 5,555 ha / 13,728 acres / ~55.6 km2 (Adventure Fishing, Wikipedia); Angler's Atlas says 5,758 ha; area computed from the OSM polygon = **56.3 km2** | see links |
| Perimeter | ~61 km (37.9 mi) | Adventure Fishing |
| Max depth | **110 ft / 33.5 m** (Adventure Fishing) — matches the deepest LIO bathymetry contour exactly (-33.5 m). Wikipedia claims 45 m (148 ft) but no LIO contour or fishing-map source supports that; treat 33.5 m as the working figure. | Adventure Fishing, LIO data |
| Mean depth | ~36 ft / 11 m | Adventure Fishing |
| Water clarity | ~5–6 m vertical visibility (Wikipedia); moderately fertile, warm-water fishery | Wikipedia, Adventure Fishing |
| Ice cover | Typically frozen December to early May | Wikipedia |

## Fish species

**Confirmed present (multiple sources):**
- **Walleye** — naturally present and actively stocked: the Gore Bay Fish and Game Club community hatchery (supported by MNRF Sudbury) stocked **8,377 advanced walleye fingerlings in late August 2025** (Manitoulin Expositor, 2025-09-10); the club has run ongoing stocking on the lake.
- **Smallmouth bass** — the lake is especially noted for bass; "known for its bass and perch fishing" (Adventure Fishing).
- **Yellow perch** — abundant; the other signature species.
- **Northern pike** — listed as a major lake species.
- **Pumpkinseed**, **rock bass**, **white sucker** (Angler's Atlas catch records, Wikipedia).
- "Catfish" reported (Wikipedia) — almost certainly **brown bullhead** (channel catfish are not documented here).

**Historic / uncertain:** lake whitefish (historic per Wikipedia). No credible records of muskellunge, crappie, lake trout or stream trout in the lake itself. Rainbow trout and Pacific salmon run the **lower Kagawong River** from Lake Huron (below the falls), not the lake.

## Structure and fishing knowledge

- Great variety of structure: **submerged islands, shoals, rock shelves, points, weedbeds and shallow bays** (Wikipedia navigation warnings; Dawson Resort). Named islands: Kakawaie, Gull, Little, Bass islands, plus an unnamed submerged island and the "eastern submerged extension of Twin Harbours" (Wikipedia).
- The OSM polygon carries **5 island holes**; LIO contours show the deep basin (31–33.5 m) in the lake's central-west portion.
- Local walleye wisdom (Dawson Resort, on-lake operator): daytime walleye hold in holes and on rock shelves/submerged islands and points in the **15–25 ft band**, with perch and small pike ambushing in 8–15 ft; windy/overcast days push fish shallower; weed edges good late spring and early summer; classic presentations are jig + minnow/crawler/leech, bottom bouncers, stickbaits.
- One frequently-named community spot: **out in front of Fred's Camp on the west side of the lake** (Dawson Resort).
- Angler's Atlas user warning marker: shallow water hazard; boat launch described as "gravel and some pavement, slightly shallow".

## Access / boat launches

- **North end**: public launch backing into the Kagawong River at the village of Kagawong (Adventure Fishing).
- **South end**: public launch off **Perivale Road** backing into Spring Bay (Adventure Fishing).
- MNRF Fish ON-Line's Fishing Access Points layer has **no mapped points on Lake Kagawong** (only 2 points on all of Manitoulin, both at Little Current) — the layer is sparse here, so the two launches above come from the fishing-map source.
- Dawson Resort (west side) is a long-running fishing resort on the lake.

## Regulations context (details in zone10.json)

- Fisheries Management Zone **10**; lake-relevant twist: the **"Manitoulin Island - inland waters" waterbody exception** changes lake trout, northern pike, rainbow trout and yellow perch rules vs zone-wide.
- **Kagawong River fish sanctuary**: no fishing Sep 25 – Oct 31 from the Hwy 540 bridge downstream to the Henry St bridge in the village.
- Manitoulin Island is **excluded from the Northeast Bait Management Zone**.

## Sources

- Ontario FMZ 10 regulations summary: https://www.ontario.ca/document/ontario-fishing-regulations-summary/fisheries-management-zone-10
- Wikipedia — Lake Kagawong: https://en.wikipedia.org/wiki/Lake_Kagawong
- Adventure Fishing map page (lake facts, depths, launches): https://adventurefishing.ca/shop/fishing-map/northern-ontario-fishing-maps/lake-kagawong-fishing-map-northern-ontario/
- Angler's Atlas — Kagawong Lake: https://www.anglersatlas.com/place/102281/kagawong-lake
- Manitoulin Expositor — walleye stocking (2025-09-10): https://www.manitoulin.com/gore-bay-fish-and-game-stock-over-8000-walleye-in-lake-kagawong/
- Dawson Resort walleye tips (local knowledge): http://www.dawsonresort.ca/walleye.html
- LIO Bathymetry Line layer: https://ws.lioservices.lrc.gov.on.ca/arcgis2/rest/services/LIO_OPEN_DATA/LIO_Open01/MapServer/30
- Fish ON-Line map service (access points, bathymetry): https://ws.lioservices.lrc.gov.on.ca/arcgis4/rest/services/FishONLine/Fish_Online_Map/MapServer
- OpenStreetMap relation 1703182 via Overpass API (shoreline polygon), (c) OpenStreetMap contributors, ODbL.
