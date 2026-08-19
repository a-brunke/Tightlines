// "What should I throw?" decision data.

export const WIZ_QUESTIONS = [
  {
    id: 'target', q: 'What are you after?',
    opts: [
      { v: 'walleye', ico: '🐟', label: 'Walleye', sub: 'and perch cousins' },
      { v: 'bass', ico: '💪', label: 'Bass', sub: 'smallmouth or largemouth' },
      { v: 'pike', ico: '🐊', label: 'Pike / Muskie', sub: 'toothy critters' },
      { v: 'panfish', ico: '🎈', label: 'Panfish', sub: 'perch, crappie, sunfish' },
      { v: 'trout', ico: '🌈', label: 'Trout / Salmon', sub: 'cold water' },
      { v: 'any', ico: '🎲', label: 'Anything biting', sub: 'just bend the rod' },
    ],
  },
  {
    id: 'depth', q: 'How deep are you fishing?',
    opts: [
      { v: 'shallow', ico: '🌿', label: 'Shallow', sub: 'under 8 ft, weeds & shore' },
      { v: 'mid', ico: '📉', label: 'Mid-depth', sub: '8-20 ft, weedlines & points' },
      { v: 'deep', ico: '⚓', label: 'Deep', sub: '20 ft plus, basins & humps' },
    ],
  },
  {
    id: 'clarity', q: 'How clear is the water?',
    opts: [
      { v: 'clear', ico: '💎', label: 'Clear', sub: 'see bottom 6 ft plus' },
      { v: 'stained', ico: '🍺', label: 'Stained', sub: 'tea-coloured, 2-6 ft' },
      { v: 'murky', ico: '🥤', label: 'Murky', sub: 'under 2 ft visibility' },
    ],
  },
  {
    id: 'sky', q: 'What is the weather doing?',
    opts: [
      { v: 'bright', ico: '☀️', label: 'Bright & calm', sub: 'high sun, flat water' },
      { v: 'overcast', ico: '☁️', label: 'Overcast / breeze', sub: 'cloud, light chop' },
      { v: 'windy', ico: '🌊', label: 'Windy & rough', sub: 'whitecaps, big waves' },
    ],
  },
];

// Primary lure pick by target x depth.
export const WIZ_PICKS = {
  walleye: {
    shallow: { lure: '1/8 oz jig + minnow or 3 in twister tail', how: 'Pitch to weed edges and rock shorelines, slow hop back. Dawn, dusk and after dark walleye slide surprisingly shallow.' },
    mid: { lure: '1/4 oz jig, Lindy rig, or a 10-14 ft diving crankbait', how: 'Work the deep weedline and points. Drift or slow-troll the rig with a leech or crawler; cast cranks parallel to the weed edge.' },
    deep: { lure: 'Bottom bouncer + spinner harness (1-2 oz) or jigging rap', how: 'Troll 1.0-1.4 mph along the basin edge and humps, bait ticking bottom. Vertical-jig marked fish.' },
  },
  bass: {
    shallow: { lure: 'Wacky-rigged 5 in stick worm, or topwater early', how: 'Skip under docks and into pockets, let it sink on slack line. Popper or walking bait at first and last light.' },
    mid: { lure: 'Ned rig or 3.5 in tube on 1/8-1/4 oz head', how: 'Drag and deadstick along weedlines, rock transitions and points. Smallmouth crush it on the drop.' },
    deep: { lure: 'Drop shot with 3-4 in finesse minnow', how: 'Hover it over deep rock piles and humps. A football jig dragged on bottom is the power alternative.' },
  },
  pike: {
    shallow: { lure: '#4-5 inline spinner or 1/2 oz spoon', how: 'Burn over weed tops and along cabbage edges. Always a wire or heavy fluoro leader. Follow-up figure-8 at the boat.' },
    mid: { lure: 'Bucktail, jerkbait, or 6-8 in swimbait', how: 'Fan-cast the deep weedline and rock points. Rip-pause jerkbaits; keep bucktails just over the weed tips.' },
    deep: { lure: 'Big rubber (Bulldawg style) or trolled 10 in crankbait', how: 'Big fish suspend off structure near bait schools. Troll 3-4 mph over 20-40 ft, or slow-pull rubber along the breaks.' },
  },
  panfish: {
    shallow: { lure: '1/32-1/16 oz jig + waxworm or 1 in plastic under a float', how: 'Fish it 2-4 ft down along docks, reeds, and weed pockets. Tiny twitches, then let it sit.' },
    mid: { lure: 'Slip bobber + small jig, or 1/16 oz tube', how: 'Set the stop to hold the bait just above the weeds or schooled fish. Crappie hang at mid-depth off weed edges at dawn and dusk.' },
    deep: { lure: 'Tiny jigging spoon or drop shot with micro plastics', how: 'Perch school on deep flats. Vertical fish over the school; when one comes up, count the depth and repeat.' },
  },
  trout: {
    shallow: { lure: '#2-3 inline spinner or small casting spoon', how: 'Cast along drop-offs, inflows and shaded banks; steady retrieve with occasional pauses. Best in spring and fall, or at dawn.' },
    mid: { lure: 'Trolled spoon or small crankbait, 15-25 ft down', how: 'Long-line or add weight to reach the thermocline band. S-turns change lure speed and trigger strikes.' },
    deep: { lure: 'Downrigger/lead-core spoon, or 3/4 oz jigging spoon', how: 'Lakers hold 40-80 ft near bottom structure in summer. Vertical-jig white tubes or spoons over marked fish.' },
  },
  any: {
    shallow: { lure: '#3 inline spinner (the everything bait)', how: 'Cover water along weed edges and shorelines. Pike, bass, walleye and big perch all eat it.' },
    mid: { lure: '1/4 oz jig + 3 in soft plastic minnow', how: 'The universal search bait. Swim it, hop it, drag it along weedlines and points until something tells you what is home.' },
    deep: { lure: 'Slip bobber + minnow over structure', how: 'Park over a hump or deep weed edge and let live bait do the talking. Whatever lives there will find it.' },
  },
};

export const WIZ_COLORS = {
  clear: 'Natural and subtle: silver, white, smelt/perch patterns, translucent plastics. Light line, longer casts.',
  stained: 'Gold, chartreuse, orange, firetiger. Gold blades beat silver in tea-stained water.',
  murky: 'Max visibility and vibration: bright chartreuse or orange, or solid black for silhouette. Pick baits with thump or rattle.',
};

export const WIZ_SKY = {
  bright: 'High sun pushes fish tight to cover and deeper edges. Downsize, slow down, and fish shade lines or go one depth-zone deeper.',
  overcast: 'Cloud scatters fish off cover and gets them roaming: speed up, cover water, fish the wind-blown side.',
  windy: 'Wind stacks warm water and bait on the blown shoreline, and the chop cuts light. Fish the waves with bulkier, louder baits.',
};
