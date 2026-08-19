// Ontario FMZ 10 quick reference - values AS THEY APPLY TO LAKE KAGAWONG
// (Manitoulin Island inland-waters exception already applied).
// Generated from the official ontario.ca regulations summary, retrieved 2026-08-19.
// ALWAYS verify at ontario.ca before keeping fish - rules change.
export const REGS = {
  "zone": 10,
  "sourceUrl": "https://www.ontario.ca/document/ontario-fishing-regulations-summary/fisheries-management-zone-10",
  "retrievedOn": "2026-08-19",
  "seasonYear": "2026 (page updated 2026-08-04)",
  "kagawongExceptions": "Manitoulin Island inland-waters rules apply here and differ from the rest of Zone 10: pike and perch are CLOSED Apr 1 until the 3rd Sat of May, rainbow trout opens the 4th Sat of April, lake trout runs to Sep 30. Kagawong River sanctuary: NO fishing Sep 25 - Oct 31 (Hwy 540 bridge to Henry St bridge). All trout + salmon share one aggregate limit: Sport 5 / Conservation 2.",
  "species": [
    {
      "id": "walleye",
      "names": "Walleye & Sauger (combined limit)",
      "season": "January 1 to 3rd Sunday in March, and 3rd Saturday in May to December 31",
      "sport": "4",
      "conservation": "2",
      "sizeLimits": "None greater than 46 cm",
      "notes": "Combined walleye+sauger limit. Present in Lake Kagawong; supplemented by Gore Bay Fish and Game Club community-hatchery stocking (8,377 advanced fingerlings in Aug 2025).",
      "presentInLake": true
    },
    {
      "id": "yellow-perch",
      "names": "Yellow Perch",
      "season": "January 1 to March 31, and 3rd Saturday in May to December 31",
      "sport": "25 daily (possession 50)",
      "conservation": "12 daily (possession 25)",
      "sizeLimits": "None",
      "notes": "Manitoulin Island inland-waters exception applies to Lake Kagawong. Zone-wide rule elsewhere: open all year, S-50/C-25.",
      "zoneWideSeason": "Open all year",
      "zoneWideSport": "50",
      "zoneWideConservation": "25",
      "presentInLake": true
    },
    {
      "id": "northern-pike",
      "names": "Northern Pike",
      "season": "January 1 to March 31, and 3rd Saturday in May to December 31",
      "sport": "6",
      "conservation": "2",
      "sizeLimits": "Sport: not more than 1 greater than 61 cm, none greater than 86 cm. Conservation: none greater than 61 cm.",
      "notes": "Manitoulin Island inland-waters exception applies to the season on Lake Kagawong (zone-wide season is open all year). Limits/size rules are the zone-wide ones.",
      "zoneWideSeason": "Open all year",
      "presentInLake": true
    },
    {
      "id": "muskellunge",
      "names": "Muskellunge",
      "season": "3rd Saturday in June to December 15",
      "sport": "1",
      "conservation": "0",
      "sizeLimits": "Must be greater than 122 cm",
      "notes": "No credible record of muskellunge in Lake Kagawong; zone rule included for completeness.",
      "presentInLake": false
    },
    {
      "id": "smallmouth-bass",
      "names": "Largemouth & Smallmouth Bass (combined limit)",
      "season": "3rd Saturday in June to November 30",
      "sport": "6",
      "conservation": "3",
      "sizeLimits": "None",
      "notes": "The zone's 'open year-round north of Hwy 17' bass rule does NOT apply to Manitoulin Island. Smallmouth is one of Lake Kagawong's signature fisheries.",
      "presentInLake": true
    },
    {
      "id": "largemouth-bass",
      "names": "Largemouth & Smallmouth Bass (combined limit)",
      "season": "3rd Saturday in June to November 30",
      "sport": "6",
      "conservation": "3",
      "sizeLimits": "None",
      "notes": "Combined limit with smallmouth bass. Largemouth not commonly reported in Lake Kagawong itself.",
      "presentInLake": false
    },
    {
      "id": "black-crappie",
      "names": "Crappie",
      "season": "Open all year",
      "sport": "30",
      "conservation": "10",
      "sizeLimits": "None",
      "notes": "No credible record of crappie in Lake Kagawong.",
      "presentInLake": false
    },
    {
      "id": "bluegill",
      "names": "Sunfish (combined limit)",
      "season": "Open all year",
      "sport": "50",
      "conservation": "25",
      "sizeLimits": "None",
      "notes": "Ontario 'Sunfish' limit covers bluegill, pumpkinseed, green sunfish and longear sunfish combined.",
      "presentInLake": false
    },
    {
      "id": "pumpkinseed",
      "names": "Sunfish (combined limit)",
      "season": "Open all year",
      "sport": "50",
      "conservation": "25",
      "sizeLimits": "None",
      "notes": "Ontario 'Sunfish' limit covers bluegill, pumpkinseed, green sunfish and longear sunfish combined. Pumpkinseed reported present in Lake Kagawong.",
      "presentInLake": true
    },
    {
      "id": "rock-bass",
      "names": "Rock Bass",
      "season": "Open all year (unlisted species)",
      "sport": "No limit listed",
      "conservation": "No limit listed",
      "sizeLimits": "None",
      "notes": "Rock bass is NOT in the FMZ 10 seasons-and-limits table and is not part of the Ontario 'Sunfish' aggregate; the regulations summary sets no season or catch limit for it. Reported present in Lake Kagawong.",
      "presentInLake": true
    },
    {
      "id": "lake-trout",
      "names": "Lake Trout",
      "season": "January 1 to September 30",
      "sport": "2",
      "conservation": "1",
      "sizeLimits": "No size limit (Manitoulin Island inland waters)",
      "notes": "Manitoulin Island inland-waters exception applies to Lake Kagawong. Zone-wide rule elsewhere: Jan 1 to Labour Day, Sport not more than 1 greater than 40 cm. Counts toward the trout/salmon aggregate (S-5/C-2). No record of lake trout actually inhabiting Lake Kagawong.",
      "zoneWideSeason": "January 1 to Labour Day",
      "zoneWideSizeLimits": "Sport: not more than 1 greater than 40 cm",
      "presentInLake": false
    },
    {
      "id": "brook-trout",
      "names": "Brook Trout",
      "season": "January 1 to September 30",
      "sport": "5",
      "conservation": "2",
      "sizeLimits": "None",
      "notes": "Counts toward the trout/salmon aggregate (S-5/C-2). Not a Lake Kagawong species (some Manitoulin streams hold them).",
      "presentInLake": false
    },
    {
      "id": "rainbow-trout",
      "names": "Rainbow Trout",
      "season": "4th Saturday in April to December 31",
      "sport": "2",
      "conservation": "1",
      "sizeLimits": "None",
      "notes": "Manitoulin Island inland-waters exception applies (zone-wide season is open all year). Counts toward the trout/salmon aggregate (S-5/C-2). Rainbows run the Kagawong River from Lake Huron; note the river's fish sanctuary Sep 25 to Oct 31.",
      "zoneWideSeason": "Open all year",
      "presentInLake": false
    },
    {
      "id": "brown-trout",
      "names": "Brown Trout",
      "season": "Open all year",
      "sport": "5",
      "conservation": "2",
      "sizeLimits": "None",
      "notes": "Counts toward the trout/salmon aggregate (S-5/C-2). Not a Lake Kagawong species.",
      "presentInLake": false
    },
    {
      "id": "chinook-salmon",
      "names": "Pacific Salmon (combined limit)",
      "season": "Open all year",
      "sport": "5",
      "conservation": "2",
      "sizeLimits": "None",
      "notes": "Ontario groups chinook/coho/pink as 'Pacific salmon'. Counts toward the trout/salmon aggregate (S-5/C-2). Salmon enter the lower Kagawong River from Lake Huron, not the lake.",
      "presentInLake": false
    },
    {
      "id": "lake-whitefish",
      "names": "Lake Whitefish",
      "season": "Open all year",
      "sport": "12",
      "conservation": "6",
      "sizeLimits": "None",
      "notes": "Historically reported in Lake Kagawong (Wikipedia); current status uncertain.",
      "presentInLake": false
    },
    {
      "id": "channel-catfish",
      "names": "Channel Catfish",
      "season": "Open all year",
      "sport": "12",
      "conservation": "6",
      "sizeLimits": "None",
      "notes": "The 'catfish' anglers report in Lake Kagawong are almost certainly bullheads, not channel catfish.",
      "presentInLake": false
    },
    {
      "id": "burbot",
      "names": "Burbot",
      "season": "Open all year (unlisted species)",
      "sport": "No limit listed",
      "conservation": "No limit listed",
      "sizeLimits": "None",
      "notes": "Burbot is NOT in the FMZ 10 seasons-and-limits table; the regulations summary sets no season or catch limit for it. Presence in Lake Kagawong unconfirmed.",
      "presentInLake": false
    },
    {
      "id": "brown-bullhead",
      "names": "Brown Bullhead",
      "season": "Open all year (unlisted species)",
      "sport": "No limit listed",
      "conservation": "No limit listed",
      "sizeLimits": "None",
      "notes": "Bullheads are NOT in the FMZ 10 seasons-and-limits table (the listed 'Channel catfish' entry is a different species); no season or catch limit is set. 'Catfish' are reported in Lake Kagawong, most plausibly brown bullhead.",
      "presentInLake": true
    }
  ]
};

export function regsFor(speciesId) {
  return REGS.species.find(s => s.id === speciesId) || null;
}
