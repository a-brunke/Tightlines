// Ontario Freshwater Fish Encyclopedia
// The reference core of the app. All-Ontario, all-season coverage with a
// late-August, Lake Kagawong (Manitoulin Island) lens in augustNotes.
// Depths in feet, temps in Fahrenheit, weights in pounds, line in lb test.

export const FISH = [
  {
    id: 'walleye',
    name: 'Walleye',
    aka: ['Pickerel (the Ontario name)', 'Eyes'],
    sci: 'Sander vitreus',
    family: 'Perch family (Percidae)',
    bodyType: 'predator',
    accent: '#c9a54a',
    tagline: 'Ontario’s favourite dinner guest',
    status: 'Common across Ontario, the most sought-after fish in the province',
    size: { avgIn: [14, 20], trophyIn: 27, ontRecordLb: 22.25 },
    tempF: [64, 70],
    idFeatures: [
      'Large, cloudy, reflective eye built for low light, it glows when a headlamp hits it',
      'White tip on the lower lobe of the tail, the fastest way to separate a walleye from a sauger (sauger has no white tip and has spotted dorsal fins)',
      'Olive-gold flanks fading to a white belly, with brassy mottled saddles',
      'Spiny front dorsal fin with a dark blotch at the rear base',
      'Sharp canine teeth but no duckbill snout, so never confused with pike'
    ],
    habitat: 'Walleye thrive in stained, wind-swept lakes and rivers where their light-gathering eyes give them an edge. On Canadian Shield lakes they relate to rock, sand and gravel structure, points, humps, saddles and neck-down current areas, while in weedier southern Ontario waters they use cabbage edges and mud-flat drop-offs. They avoid bright light, so the clearer the water, the deeper and more nocturnal they become.',
    depth: {
      spring: 'Right after the mid-May opener, fish 4 to 12 ft near spawning rivers, gravel shoals and wind-blown shorelines. Evening and after dark they slide up onto 2 to 6 ft flats to feed.',
      summer: 'Classic structure fishing at 15 to 30 ft, on the deep edges of humps, points and weedlines. In clear lakes expect 25 to 40 ft by day with a shallow push at dusk.',
      fall: 'Turnover scatters them briefly, then they bunch on steep main-lake structure at 20 to 40 ft. Big females feed hard on the largest available baitfish through October and November.',
      winter: 'Through the ice, work 18 to 35 ft mud-to-rock transitions and hump edges. Prime bites are the half hour either side of sunset, often in less than 20 minutes of fast action.'
    },
    feeding: 'Yellow perch, ciscoes, shiners, mayfly nymphs and crayfish carry the load, with perch the staple almost everywhere in Ontario. Walleye feed hardest in low light, at dawn, dusk, after dark, and all day under a walleye chop or cloud cover. Flat calm and bluebird skies push them deep and tight-lipped.',
    presentations: [
      { name: 'Jig and minnow (or half crawler)', detail: 'A 1/4 oz jig at 15 to 25 ft, 3/8 oz deeper or in wind, tipped with a 3 to 4 in minnow. Drag and hop it along bottom on 6 to 8 lb line, and set on anything that feels like weight. Gold, chartreuse and orange in stained water, natural perch in clear.' },
      { name: 'Bottom bouncer and worm harness', detail: 'A 1.5 to 2 oz bouncer with a two-hook harness and a #4 or #5 Colorado blade, trolled at 1.2 to 1.5 mph so the bouncer just ticks bottom. The best way to cover 15 to 30 ft flats and long structure in summer. Gold, copper and firetiger blades are Ontario staples.' },
      { name: 'Trolling crankbaits', detail: 'Deep-diving stickbaits (Rapala Deep Husky Jerk 12, Reef Runner, Flicker Minnow) at 1.8 to 2.5 mph on leadcore or with in-line weights to reach 20 to 35 ft. After dark in late summer, longline a shallow stick over 6 to 10 ft flats.' },
      { name: 'Slip bobber and leech', detail: 'Deadly on humps and rock piles when fish are tight to a spot. Set the float so a 1/16 oz jig or plain #4 hook with a big leech hangs 1 to 2 ft off bottom, and let the wind drift it across the structure.' },
      { name: 'Jigging raps and blade baits', detail: 'A #7 or #9 Jigging Rap or 1/2 oz blade bait snapped along 20 to 35 ft structure triggers neutral fish, and it is the number one ice presentation. Rip it 1 to 2 ft, then let it settle on a semi-slack line; hits come on the fall.' }
    ],
    liveBait: 'The walleye trinity: minnows in cold water (spring, fall, ice), leeches in early summer, nightcrawlers from midsummer on. Where live minnows are restricted, salted shiners or 3 in soft plastics on the same jig work nearly as well.',
    technique: 'Think structure, depth and light, in that order. Find the sharpest break adjacent to the biggest flat, idle it with sonar until you mark bait or arcs, and only then fish. Start with a jig and bait worked at the depth you marked fish, and if they are scattered, switch to a bottom bouncer or crankbait to cover water. Time your best spot for the last hour of light, because a spot that is dead at 2 pm can load up at 8 pm. When you catch one, work that exact depth contour hard, walleye school by size and depth more than by location.',
    augustNotes: 'Late August walleye are pinned to the summer thermocline, typically 20 to 35 ft on Shield and Manitoulin lakes, hugging deep weedline corners, main-lake humps and the deep edges of points. The lake is stuffed with 2 to 3 in young-of-year perch, so downsize to smaller harnesses and 3 in plastics, and expect short daytime windows with the real bite starting an hour before dark. Night trolling shallow stickbaits over 6 to 12 ft flats and shoal tops is a sleeper pattern this week as fish slide up after sunset. Watch for the first cool nights, they start the gradual push toward fall structure by early September.',
    proTips: [
      'On a windy day, fish the shoreline the wind has been hitting for hours, the walleye chop pushes plankton, then baitfish, then walleye onto that bank, even in 4 ft of water.',
      'When marks on sonar hug bottom so tight they look like rocks, slow to a crawl and drag a jig, tight-to-bottom fish are catchable, high suspended fish over deep water usually are not.',
      'Snap your jig up sharply and count the falls, 90 percent of hits come as the jig drops, so any tick, weight or line jump on the fall means set immediately.'
    ],
    table: 'The gold standard of Ontario shore lunch, white, flaky and mild. The best eating fish are 15 to 18 in; release the big females over 22 in, they are the spawning engine of the lake.',
    handling: 'Mind the spiny dorsal and razor-edged gill plates, hold the fish across the back pinning the spines down. Fish pulled from deeper than 30 ft may need a slow, gentle release, so avoid deep schools if you plan to release everything.'
  },

  {
    id: 'yellow-perch',
    name: 'Yellow Perch',
    aka: ['Perch', 'Jumbo (a big one)', 'Lake perch'],
    sci: 'Perca flavescens',
    family: 'Perch family (Percidae)',
    bodyType: 'panfish',
    accent: '#b0a53f',
    tagline: 'Small fish, giant fan club',
    status: 'Abundant in nearly every Ontario lake and river',
    size: { avgIn: [7, 10], trophyIn: 12, ontRecordLb: 2.42 },
    tempF: [63, 72],
    idFeatures: [
      'Six to eight bold dark vertical bars over brassy yellow flanks, the tiger stripes no other Ontario fish shares at this size',
      'Two separate dorsal fins, the front one spiny, unlike sunfish which have one joined fin',
      'Orange to red lower fins, brightest on big males in spring',
      'A young walleye has the white tail tip and canine teeth that perch lack',
      'Rough scales and a slightly humped back on jumbo fish over 11 in'
    ],
    habitat: 'Perch are schooling bottom-oriented fish of weedbeds, sand flats and gravel bars in nearly every lake type in Ontario, from the Great Lakes to backcountry Shield ponds. They use cabbage and sand-grass edges in summer and roam huge soft-bottom flats the rest of the year. Schools sort by size, so where you catch one 5-incher there are two hundred more, and the jumbos live somewhere else, usually deeper.',
    depth: {
      spring: 'Spawning happens just after ice-out in 3 to 10 ft over weeds and brush. Through May and June, schools hold on 6 to 12 ft flats near new weed growth.',
      summer: 'Bigger perch slide out to 12 to 25 ft, working the deep weedline and open sand or mud flats. Small fish stay shallow in the weeds all summer.',
      fall: 'Schools gang up on 15 to 35 ft main-lake flats, feeding heavily on minnows and invertebrates. Some of the best jumbo fishing of the year is October on 20 ft mud.',
      winter: 'A staple of Ontario ice fishing at 15 to 35 ft on mud flats and weed edges. Midday bites are common, unlike walleye, perch feed on banker’s hours.'
    },
    feeding: 'Perch eat minnows, insect larvae, mayfly wigglers, snails, crayfish and freshwater shrimp, grazing along bottom in loose schools. They are daytime feeders with peak activity mid-morning and mid-afternoon, and they shut down at night. A slow-moving school vacuums a flat like a plow, so if the bite dies, the school moved, not quit.',
    presentations: [
      { name: 'Small jig and bait', detail: 'A 1/16 to 1/8 oz jig tipped with a small minnow, worm chunk or 1 to 2 in plastic, hopped slowly on bottom at the school’s depth. Chartreuse, white and pink lead the colour parade.' },
      { name: 'Drop-shot with a worm piece', detail: 'A #6 hook 8 to 14 in above a 1/4 oz weight keeps bait in the zone while you stay in contact. Ideal for picking jumbos off 15 to 25 ft flats without snagging.' },
      { name: 'Two-hook spreader rig', detail: 'The classic perch rig: two #6 snells above a 1/2 to 1 oz sinker, baited with minnows, fished vertically under the boat. Doubles are common when you park on a school.' },
      { name: 'Small jigging spoons (ice or open water)', detail: 'A 1/16 to 1/8 oz spoon (Swedish Pimple, Hali) tipped with a minnow head, jigged with short lifts then dead-sticked. The flash calls the school in from surprising distances.' }
    ],
    liveBait: 'Small minnows and pieces of worm out-fish everything, and a perch eye or strip of perch belly (where legal as bait from your own catch) is a killer old-school tip.',
    technique: 'Perch fishing is a search game: keep moving until you contact a school, then anchor or spot-lock right on top of it. Fish vertically, stay tight to bottom, and re-bait constantly because fresh scent keeps the school competitive. The moment bites slow, do not wait, pull up and move 50 to 100 yards along the same contour to reconnect with the school. Sort your catch as you go, and if you are only catching 5 to 7 in fish, make a big move deeper, jumbos school separately.',
    augustNotes: 'By late August the quality perch have left the shallow weeds and grouped on 15 to 25 ft flats and deep weed edges, often shadowed by walleye and pike using them as a grocery store. The lake is full of their own young-of-year, so fish tight to bottom with worm or minnow tips to separate your bait from the clouds of tiny naturals. On Manitoulin lakes like Kagawong, drift the open sand and rock flats off major points until the rod loads up, then anchor. Mid-morning through mid-afternoon is prime, this is the rare fish that bites best while you eat lunch.',
    proTips: [
      'A school of jumbos shows on sonar as a low ragged band hugging bottom, not pretty arcs, learn that smudge and you will out-fish the graph purists.',
      'Drop the first fish you hook straight back down on a second rod’s bait, a hooked perch excites the school and the flurry that follows is when the biggest fish make mistakes.',
      'In lakes with smelt or ciscoes, the biggest jumbos suspend, check 5 to 10 ft off bottom over 30 ft before writing off deep water.'
    ],
    table: 'Arguably the best-eating fish in freshwater, sweet, firm and white, this is what Friday fish fries are made of. Keep a feed of 8 to 11 in fish and let the 12 in plus breeders go.',
    handling: 'Smooth down the spiny dorsal with your palm as you grip, and watch the gill covers, their edges are sharp enough to slice a thumb during a fast-paced school bite.'
  },

  {
    id: 'northern-pike',
    name: 'Northern Pike',
    aka: ['Pike', 'Jack or jackfish', 'Snot rocket', 'Gator'],
    sci: 'Esox lucius',
    family: 'Pike family (Esocidae)',
    bodyType: 'predator',
    accent: '#6e8b5e',
    tagline: 'The lake’s freshwater crocodile',
    status: 'Common to abundant across Ontario, from farm ponds to Hudson Bay rivers',
    size: { avgIn: [22, 32], trophyIn: 40, ontRecordLb: 42.12 },
    tempF: [55, 65],
    idFeatures: [
      'Light bean-shaped spots on a dark green background, the reverse of a muskie, which has dark markings on a light background',
      'Duckbill snout full of needle teeth, with dorsal and anal fins set far back near the tail',
      'Rounded tail lobes (muskie tail lobes are pointed)',
      'Five or fewer sensory pores per side under the lower jaw (muskie has six or more)',
      'Fully scaled cheeks with only the upper half of the gill cover scaled'
    ],
    habitat: 'Pike are ambush predators of weedbeds, bays and river backwaters, and they live almost everywhere in Ontario. Small and mid-size pike stay in shallow cabbage, coontail and bulrush cover all year, while trophy fish in Shield and Manitoulin lakes behave more like lake trout, following ciscoes and whitefish into cool deep water all summer. The biggest pike waters combine shallow weedy spawning bays with a deep, cool, baitfish-rich main basin.',
    depth: {
      spring: 'Ice-out finds them in 1 to 6 ft at the back of dark-bottom bays, and they linger in 4 to 10 ft new weed growth into June. Some of the biggest fish of the year are caught in embarrassingly shallow water in May.',
      summer: 'Hammer handles stay in 4 to 12 ft weeds, but big fish drop to 15 to 35 ft, holding on deep weedlines, rock points near the thermocline, and suspended near cisco schools.',
      fall: 'As water cools through the 60s into the 50s, big pike flood back to remaining green weeds and rock points in 8 to 20 ft. October is trophy time with big live-bait rigs and oversized lures.',
      winter: 'Ice pike cruise 5 to 15 ft weed flats and the first break, all day long. Set tip-ups with large dead baits along a weedline and be ready for flags at high noon.'
    },
    feeding: 'Pike eat whatever fits, perch, suckers, ciscoes, whitefish, other pike, and the odd duckling, favouring one large meal over many small ones. They are sight-feeding daytime hunters, most active mid-morning and late afternoon, and a cold front slows big fish but rarely stops the small ones. In summer heat, trophy fish feed in short windows where cool water and baitfish overlap.',
    presentations: [
      { name: 'Spinnerbait over weeds', detail: 'A 1/2 to 1 oz white or chartreuse spinnerbait with a big Colorado blade, slow-rolled over 4 to 10 ft cabbage. It comes through weeds cleanly and the thump calls fish out of thick cover.' },
      { name: 'Spoons', detail: 'The 5 of Diamonds and red-and-white Daredevle in 3/4 to 1 oz are Ontario icons for a reason. Cast along weed edges, flutter it on the drop, and hang on, most hits come as it falls.' },
      { name: 'Jerkbaits and big soft swimbaits', detail: 'A 5 to 6 in suspending jerkbait (Husky Jerk 14) or 6 to 8 in paddletail worked along the deep weed edge with pauses. The pause is the trigger, big pike eat it standing still.' },
      { name: 'Trolling deep cranks for giants', detail: 'In late summer, troll 6 to 8 in deep-divers at 2.5 to 3.5 mph along 15 to 30 ft breaks and over open-basin bait schools. This is how the true 40 in class fish get caught in August.' },
      { name: 'Quick-strike rigged dead bait', detail: 'A large dead cisco, sucker or smelt on a quick-strike rig under a float, drifted along weed edges in spring and fall, or set on tip-ups through the ice. Set the moment the float moves, do not let the fish swallow.' }
    ],
    liveBait: 'Large sucker minnows (6 to 10 in) under a float are deadly in cold water; dead oily baits like cisco and smelt often out-fish live ones through the ice. Always use a quick-strike rig so fish are hooked in the jaw, not the gut.',
    technique: 'Never fish pike without a leader, 12 in of 30 lb fluorocarbon or a titanium wire leader saves lures and fish alike. Cover water fast along weed edges, fan-casting and moving until an active fish shows itself, and always finish every retrieve boat-side, pike follow constantly and eat at the last second, so an L-turn at the rod tip converts followers. When you see a follower that will not commit, note the spot and return an hour later with a different lure. In summer, split your day: shallow weeds early for numbers, then deep structure and open-water trolling midday for the one big bite.',
    augustNotes: 'Late August splits the pike population in two: numbers fish are in the thickest 6 to 12 ft cabbage of the year, but the heavyweights are deep, holding 20 to 35 ft where the thermocline touches rock points and deep weed corners, or suspended under cisco schools. On Kagawong and similar Manitoulin lakes, troll big cranks or drag oversized swimbaits along the deep edge midday, then flip to spinnerbaits over the weed tops in the evening cool. The first string of cool nights in late August starts pulling big fish back shallow, so a cold snap this week is your friend. Handle deep-caught fish quickly, warm surface water is hard on big pike.',
    proTips: [
      'The biggest pike in a Shield lake spend summer with the lake trout, if you catch a pike while trout trolling at 30 ft, that is a pattern, not an accident.',
      'Sharpen the trailing hook point of every spoon, pike swipe from the side and the trailing point does most of the hooking.',
      'A pike that follows twice but will not eat will often smash a lure half the size or double the speed, change the question, not just the colour.'
    ],
    table: 'Underrated eating, firm and white, if you learn the five-cut fillet method that removes the Y-bones. Fish in the 24 to 30 in range eat best; big old fish are better released and are often the lake’s primary trophy asset.',
    handling: 'Use long pliers or a jaw spreader and slide fingers under the gill plate (never into the red gill rakers) for a vertical-jaw hold, supporting the belly for photos. The slime coat is their infection barrier, wet hands, no towels, no grass. Bleeding from nicked gills looks alarming but stops fast, get the fish back in the water quickly.'
  },

  {
    id: 'muskellunge',
    name: 'Muskellunge',
    aka: ['Muskie', 'Musky', 'Lunge', 'The fish of 10,000 casts'],
    sci: 'Esox masquinongy',
    family: 'Pike family (Esocidae)',
    bodyType: 'predator',
    accent: '#8fa382',
    tagline: 'Ten thousand casts, one heartbeat',
    status: 'Local but legendary: Georgian Bay, Lake St. Clair, Kawarthas, Ottawa River, Lake of the Woods',
    size: { avgIn: [34, 44], trophyIn: 50, ontRecordLb: 65 },
    tempF: [60, 72],
    idFeatures: [
      'Dark bars or spots on a light silver-green background, the reverse of pike, and some fish are nearly markless (clear phase)',
      'Pointed tail lobes, versus the pike’s rounded tail',
      'Six or more sensory pores per side under the lower jaw (pike has five or fewer)',
      'Cheeks and gill covers scaled only on the upper half',
      'Tiger muskie (pike x muskie hybrid) shows bold irregular vertical bars and turns up rarely where both parents overlap'
    ],
    habitat: 'Muskie are low-density apex predators of large, structurally rich waters: Georgian Bay and the North Channel, Lake St. Clair, the Kawartha Lakes, the Ottawa and St. Lawrence rivers, and Lake of the Woods. They hold on weed edges, rock shoals, current seams and open-basin bait schools, and individual fish keep home ranges and favourite ambush spots that produce year after year. Ontario is the best trophy muskie destination on earth, the 65 lb world-class record came from Georgian Bay in 1988.',
    depth: {
      spring: 'Post-spawn fish (season opens in June) hold near shallow spawning bays, on 5 to 12 ft weed flats and adjacent points. Smaller lures and slower retrieves match the cool water.',
      summer: 'Fish use 8 to 20 ft weed edges and rock shoals early and late, and suspend 10 to 25 ft down over 30 to 60 ft basins near ciscoes and suckers midday. Warm stable weather makes for reliable feeding windows at dawn, dusk and moonrise.',
      fall: 'The trophy window: big females feed heavily on 10 to 25 ft rock structure and remaining green weeds from late September to ice-up. Oversized lures and big live suckers rule as water drops through the 50s.',
      winter: 'Season closed across Ontario, muskie get the winter off to protect spawners. Plan next season and build leaders.'
    },
    feeding: 'Muskie prefer one big meal, a 12 in sucker, cisco, walleye or bullhead, and may feed only once every few days, which is why they follow so often and eat so seldom. Feeding windows cluster around dawn, dusk, moonrise and moonset, and weather changes ahead of a front. They are famous followers, tracking a lure to the boat before deciding, so the end of the retrieve matters as much as the middle.',
    presentations: [
      { name: 'Bucktails (double 10 blades)', detail: 'The confidence lure: a double-10 bucktail burned steadily over 8 to 15 ft weed and rock, fast enough that the blades barely stay under. Covers the most water and triggers the most fish from June through September.' },
      { name: 'Big rubber', detail: 'A 9 to 12 in soft bait (Bull Dawg style) pulled with long rips and pauses along deep edges and over suspended bait. It gets the followers that ignore fast blades, and it shines midday.' },
      { name: 'Topwater at dusk', detail: 'Walk-the-dog or tail-prop baits over calm evening flats from late July into fall. Do not strike at the explosion, keep the lure moving until you feel the fish, half the blowups miss.' },
      { name: 'Jerkbaits and glide baits', detail: 'A 7 to 10 in glider worked side to side along cooling weed edges, deadly in fall or after cold fronts when fish will not chase. Long pauses, most eats come on the hang.' },
      { name: 'Trolling big cranks', detail: 'Ten to 12 in crankbaits at 3 to 5 mph along breaklines and over open-water bait, 5 to 15 ft down. On big water like Georgian Bay and St. Clair this puts the largest fish of the year in the net.' }
    ],
    liveBait: 'A lively 10 to 14 in sucker on a quick-strike rig, drifted or fished under a big float in fall, is the classic trophy method. Never gut-hook rigs, quick-strike only, and set immediately.',
    technique: 'The figure-8 is not optional, it is the technique: at the end of every single cast, drive the rod tip 2 ft into the water and pull the lure through wide, deep oval turns, because a following muskie eats on the turn or not at all. Fish 80 lb braid, a 130 lb fluoro or wire leader, and a rod that can drive big hooks home with a full-body hookset. Work a milk run of proven spots at high speed, resting each, and log every follower with time, spot, moon and weather, that fish is catchable later, often on the same moon window. Keep a big net, long pliers, hook cutters and a jaw spreader rigged before the first cast, a 50-incher boat-side is not the time to dig through a tackle bag.',
    augustNotes: 'Late August muskie split between the maturing 10 to 18 ft weed edges (dawn, dusk and topwater at night) and suspended fish riding the thermocline over 30 to 60 ft basins near ciscoes. Water is at or past its warmest, so watch surface temps: above 80 F, ethical anglers stand down because released fish die, but most Shield and Georgian Bay waters sit safely in the low 70s by now. Speed still rules this week, burned double-10 bucktails over weeds and trolled cranks over open bait are the two best cards. Feeding windows are short and moon-driven, be on your best spot at moonrise, not at the dock.',
    proTips: [
      'Log every follow like a catch: spot, lure, speed, moon phase and time, muskie repeat behaviour, and most trophies are caught on a return visit to a known fish.',
      'When a fish follows and turns off, immediately throw a completely different profile (blade to rubber, fast to slow), the second lure within 30 seconds converts a surprising number.',
      'A rising or setting moon overlapping dusk is the single best 30 minutes of the muskie day, plan your run so you are on the milk-run A-spot then.'
    ],
    table: 'Not a food fish in practice. Muskie are too rare and too valuable to harvest, and Ontario anglers release them essentially without exception; most waters have a 54 in minimum that makes harvest moot.',
    handling: 'Everything about muskie care is preparation: an oversized coated net (the fish stays in the water in the net bag while you unhook), long-nose pliers, hook cutters that can cut 5/0 hooks, and wet hands. Support the fish horizontally, one hand under the gill plate and one under the belly, keep air exposure under 15 seconds per lift, and hold the fish upright boat-side until it kicks away hard. In water over 80 F, do not target them at all.'
  },

  {
    id: 'smallmouth-bass',
    name: 'Smallmouth Bass',
    aka: ['Smallie', 'Bronzeback', 'Brown bass'],
    sci: 'Micropterus dolomieu',
    family: 'Sunfish family (Centrarchidae)',
    bodyType: 'bass',
    accent: '#7d6231',
    tagline: 'Bronze muscle with a bad attitude',
    status: 'Abundant across southern and central Ontario, the marquee fish of Manitoulin Island waters',
    size: { avgIn: [12, 17], trophyIn: 20, ontRecordLb: 9.84 },
    tempF: [65, 72],
    idFeatures: [
      'Bronze to brown body with dark vertical bars that come and go with mood',
      'Jaw ends below the eye, a largemouth’s jaw extends well past the eye',
      'Red-tinted eye and faint war-paint stripes radiating across the cheek',
      'Shallow notch between spiny and soft dorsal fins (largemouth has a deep notch)',
      'Young fish show a tri-colour tail: orange at the base, black band, white edge'
    ],
    habitat: 'Smallmouth are fish of rock, current and clear water: boulder shoals, gravel points, rock-rubble flats and windswept islands on Shield and Manitoulin lakes, and current seams in rivers like the Grand, Ottawa and French. They relate to hard bottom almost exclusively and follow crayfish and baitfish movements through the season. In the Great Lakes and big clear waters, round gobies have made bottom-hugging presentations dominant and grown the average fish dramatically.',
    depth: {
      spring: 'The late-June opener finds most fish post-spawn, guarding or just off 3 to 10 ft gravel and boulder flats. They feed aggressively shallow through early July.',
      summer: 'Fish slide to 12 to 25 ft boulder points, humps and flats, with dawn and dusk pushes shallow. Clear-water giants can sit 25 to 35 ft by midsummer.',
      fall: 'Schools gang up hard on 20 to 40 ft main-lake structure as water drops through the 60s and 50s, feeding in wolfpacks. Some of the year’s best big-fish action, but you must find them, 90 percent of the lake is empty.',
      winter: 'Mostly dormant under ice, ganged in deep basins and rarely targeted (check local season rules). They burn almost no energy until spring.'
    },
    feeding: 'Crayfish are the backbone of the diet, joined by perch, shiners, gobies (Great Lakes), smelt and insects. Smallmouth feed by sight in daylight, with the first two hours of morning the most reliable window all season, and wind on a rocky point turns the feed on. They are notorious for short feeding sprees, a dead flat can erupt for 20 minutes and die again.',
    presentations: [
      { name: 'Drop-shot', detail: 'A 3 to 4 in finesse minnow (goby or perch tones) on a #1 hook, 12 to 18 in above a 3/8 oz weight, on 8 lb fluoro leader. Shake it in place over 15 to 30 ft structure, this is the number one big-smallmouth tool in Ontario.' },
      { name: 'Ned rig', detail: 'A 2.75 in stickbait chunk on a 1/8 to 1/4 oz mushroom head, dragged and dead-sticked on 10 to 25 ft rock. Green pumpkin and brown, when nothing else gets bit, the Ned does.' },
      { name: 'Tube jig', detail: 'A 3.5 to 4 in tube on a 1/4 to 3/8 oz insider head, hopped along boulder flats to imitate a fleeing crayfish. The classic Shield-lake smallmouth bait for 40 years.' },
      { name: 'Topwater early and late', detail: 'Walking baits and poppers over 4 to 12 ft shoals at first light, especially in calm bays. Explosive strikes; pause after the blowup and hit when you feel weight.' },
      { name: 'Jerkbaits and swimbaits', detail: 'A suspending jerkbait ripped over 8 to 15 ft rock in spring and fall, or a 3.5 in paddletail on a 3/8 oz head counted down to suspended fish. Deadly around wind-blown points.' }
    ],
    liveBait: 'Crayfish, leeches and minnows all excel where live bait is your style, a lively crayfish hooked through the tail on a 1/8 oz jig is nearly cheating. Plastics have largely matched live bait for smallmouth, so most specialists go artificial.',
    technique: 'Find rock, add wind, and start shallow at dawn then slide deeper as the sun climbs, following the fish down the structure. Watch your electronics constantly, modern smallmouth fishing is about riding the front of the boat, spotting fish or bait on sonar, and dropping a drop-shot or Ned rig on their heads. When you hook one, keep the bait wet, smallmouth run in packs and competitors follow hooked fish to the boat, so a second rod ready to pitch can double your catch. Long casts and light fluorocarbon matter in clear water, these are the sharpest-eyed fish in the lake.',
    augustNotes: 'Late August is deep-structure season: the best fish on Kagawong and other clear Manitoulin and Shield lakes are on 15 to 30 ft boulder humps, deep points and flats, gorging on crayfish and young-of-year perch. Drop-shot and Ned rig the deep stuff midday, but be on a shallow shoal at first light because the topwater window over 6 to 12 ft rock is still alive for another couple of weeks. Fish begin loosely grouping this week, the start of the fall schooling, so when you catch one, work the area hard. Calm, hot afternoons, look for suspended fish 10 to 20 ft down off deep points chasing pelagic bait.',
    proTips: [
      'On clear lakes, the biggest smallmouth in August often suspend off structure rather than sit on it, count a swimbait down to the level of the bait clouds on sonar and swim it back level.',
      'A marble-sized crayfish pattern out-fishes a big one, match the 1 to 2 in crayfish that dominate late summer, not the giant in your minnow trap.',
      'After a missed topwater strike, cast straight back with a tube and let it sit on bottom, the same fish eats the follow-up more often than not.'
    ],
    table: 'Firm, white and clean-tasting from cold clear water, though most Ontario smallmouth anglers release them, big bass are old bass (a 20 in fish can be 15 years old on the Shield). If keeping, a couple of 12 to 14 in fish eat best.',
    handling: 'A vertical lip grip is fine for smaller fish, but support the belly of anything over 3 lb, never lever a big bass horizontally by the jaw alone. They fight to exhaustion, so give tired fish a moment of support at boat-side before release.'
  },

  {
    id: 'largemouth-bass',
    name: 'Largemouth Bass',
    aka: ['Bucketmouth', 'Green bass', 'Largie'],
    sci: 'Micropterus salmoides',
    family: 'Sunfish family (Centrarchidae)',
    bodyType: 'bass',
    accent: '#5f7d3f',
    tagline: 'The bucketmouth that owns the slop',
    status: 'Common in southern Ontario, the Kawarthas and warm weedy bays north to Lake Nipissing',
    size: { avgIn: [12, 17], trophyIn: 21, ontRecordLb: 10.43 },
    tempF: [70, 80],
    idFeatures: [
      'Huge mouth, the jaw hinge extends well behind the eye (smallmouth jaw stops below the eye)',
      'Green back and flanks with a broken dark horizontal band from gill to tail',
      'Deep notch nearly separating the spiny and soft dorsal fins',
      'White to cream belly, no vertical barring like a smallmouth',
      'In dark tannic water, fish can be nearly black; the lateral band still shows'
    ],
    habitat: 'Largemouth own the warm, weedy, soft-bottomed water that smallmouth avoid: milfoil beds, lily pads, bulrushes, docks, fallen timber and marina slips. Prime Ontario range is the Kawarthas, Rideau system, Lake Scugog, Lake St. Clair bays and thousands of southern lakes and ponds, thinning out on the cold Shield where weedy bays are scarce. They are object-oriented ambushers, always beside or under something.',
    depth: {
      spring: 'At the late-June opener most fish are post-spawn in 2 to 8 ft, around pads, rush edges and docks. Shallow cover fishing is at its simplest.',
      summer: 'Fish live in 2 to 12 ft of the thickest cover in the lake, matted milfoil, pad fields, dock shade, with a quality contingent on 10 to 15 ft deep weedlines. Heat does not push largemouth deep the way it does other species, it pushes them under.',
      fall: 'As weeds die, fish concentrate on remaining green weeds and steeper cover edges in 8 to 15 ft, feeding hard through October. The last green weedbed in the bay is a gold mine.',
      winter: 'Largely dormant under ice, holding in 10 to 20 ft basins near collapsed weedbeds; a niche ice fishery at midday thaw periods where seasons allow.'
    },
    feeding: 'Largemouth eat bluegills, perch, shiners, crayfish, frogs and dragonflies, anything that blunders into ambush range. They feed opportunistically all day in and under cover, with dawn, dusk and cloudy, humid, pre-storm conditions the best broad-daylight windows. Warm water is their engine, they feed most aggressively at temperatures that shut other Ontario fish down.',
    presentations: [
      { name: 'Texas-rigged soft plastics', detail: 'A creature bait or 5 in stickworm behind a 1/4 to 3/8 oz bullet weight, pitched into weed pockets and dock shade on 15 to 20 lb fluoro. Let it fall on slack line, most bites come on the initial drop.' },
      { name: 'Hollow-body frog', detail: 'Walked over matted milfoil and pad fields in summer, black or leopard patterns. Wait until you feel the fish before setting, then hit hard on 50 to 65 lb braid and pull them out before they bury.' },
      { name: 'Jig and craw trailer', detail: 'A 3/8 to 1/2 oz flipping jig in black-blue or green pumpkin with a craw trailer, flipped to docks, timber and holes in the weeds. The big-fish bait in Ontario largemouth water, day in, day out.' },
      { name: 'Wacky-rigged stickworm', detail: 'A 5 in stickworm on a #1 octopus hook, skipped under docks and along rush edges and allowed to shimmy down on slack line. The best beginner big-bass presentation ever devised.' },
      { name: 'Spinnerbait and chatterbait', detail: 'A 3/8 oz white or bluegill-pattern bladed bait slow-rolled along weed edges and over submerged grass, especially in wind and low light. Covers water when fish are scattered.' }
    ],
    liveBait: 'A lively 4 to 6 in shiner under a float beside a weed edge is deadly, and a big dew worm on a weedless hook takes fish in the pads. Most Ontario largemouth anglers fish plastics instead, the fish are aggressive enough not to need live bait.',
    technique: 'Fish the thickest, shadiest cover you can find and put your bait where the light is not: under the dock, in the pad shadow, in the hole in the mat. Accuracy beats distance, learn to pitch and skip so the bait enters quietly within a foot of the target, and fish slow, largemouth make you wait out the fall and the soak. Use heavier line than feels natural (15 to 20 lb fluoro, 50 lb braid in slop), because the fight happens in the salad and you have to win the first three seconds. If cover fishing dies midday, swing to the deep weedline and slow-drag a jig, the better fish often stage there.',
    augustNotes: 'Late August is peak slop: milfoil mats and pad fields are at their thickest of the year, and frogs and punching baits are at their best from mid-morning onward as fish tuck under the canopy. Bluegill and young-of-year perch are the forage, so bluegill-pattern chatterbaits and green-pumpkin plastics match the hatch. On deep weedlines (10 to 14 ft), a jig bite develops midday for the quality fish that skip the shallow circus. Nights are cooling, the water is easing off its peak, and the fish are feeding a little longer each morning, the quiet start of the fall feed.',
    proTips: [
      'In matted weeds, the bass are under the thickest, oldest part of the mat where the shade is darkest, punch there with a 1 to 1.5 oz weight, not at the pretty edges.',
      'On pressured lakes, dock fish see wacky worms all day, skip a Ned rig or a small jig instead and the same fish bite.',
      'A bluegill spawning colony in July and August is a largemouth buffet, find the beds, then fish the nearest weed clump or dock, not the beds themselves.'
    ],
    table: 'Edible but rarely kept in Ontario, warm-water fish can taste weedy and the fishery is worth more as catch-and-release. If harvesting, smaller fish from cool clear water are the ones to keep.',
    handling: 'Lip-land them, the jaw grip calms largemouth, but keep big fish vertical or fully supported, never angled by the jaw. Watch the abrasive jaw pads during a long day, bass thumb is real.'
  },

  {
    id: 'black-crappie',
    name: 'Black Crappie',
    aka: ['Crappie', 'Speck', 'Papermouth', 'Calico bass'],
    sci: 'Pomoxis nigromaculatus',
    family: 'Sunfish family (Centrarchidae)',
    bodyType: 'panfish',
    accent: '#78808c',
    tagline: 'Papermouth with champagne taste',
    status: 'Common in southern and central Ontario, expanding north; strong in the Kawarthas and Rideau',
    size: { avgIn: [8, 11], trophyIn: 13, ontRecordLb: 3.78 },
    tempF: [65, 75],
    idFeatures: [
      'Deep, laterally flattened silver body with irregular black speckles scattered like paint flecks',
      'Seven or eight dorsal spines (white crappie, rare in Ontario, has five or six and barred sides)',
      'Huge upturned papery mouth for its size',
      'Dorsal and anal fins nearly mirror-image large and rounded',
      'Bigger mouth and speckled (not barred) pattern separates it from any sunfish'
    ],
    habitat: 'Crappie favour quiet, fertile water: weedy bays, flooded timber, marinas, river backwaters and soft-bottom lakes across southern and central Ontario. They are the most suspension-prone panfish, spending most of the year hanging in loose schools off weed edges and over basins rather than on the bottom. Cover plus adjacent deep water is the recipe, a brush pile or deep dock near a 15 to 25 ft hole holds them all season.',
    depth: {
      spring: 'The famous shallow window: pre-spawn and spawning fish flood 2 to 8 ft dark-bottom bays, canals and brush in May and early June. It is the easiest crappie fishing of the year.',
      summer: 'Schools suspend 8 to 15 ft down over 15 to 25 ft water, off deep weedlines and basin edges. Evening and after dark they rise toward the surface to feed on minnows and insects.',
      fall: 'Fish group tighter and deeper, 15 to 30 ft, near basin structure and remaining green weeds, feeding on minnows. Locating the school is everything; catching them is easy.',
      winter: 'A premier ice target: suspended 15 to 30 ft over soft basins, often 5 to 10 ft off bottom, and they bite at dusk and after dark better than any other panfish.'
    },
    feeding: 'Crappie eat small minnows first, plus insect larvae, zooplankton and freshwater shrimp, feeding by sight upward, they take bait above them far better than below. Dawn, dusk and after dark are prime, crappie are the most nocturnal of Ontario panfish. They strike softly, the float just stops or the line goes light.',
    presentations: [
      { name: 'Small jig under a float', detail: 'A 1/16 or 1/32 oz jig with a 1.5 to 2 in tube or curly tail, set 3 to 8 ft under a fixed or slip float and twitched slowly along weed edges. White, chartreuse and pink; let the wind do the work.' },
      { name: 'Vertical jigging the school', detail: 'Find suspended marks on sonar, hover, and lower a 1/16 oz jig or small spoon to just above the school, above, never below. Slow lifts and hangs; crappie rise to eat.' },
      { name: 'Slow-trolling or drifting jigs', detail: 'Two rods with 1/16 oz jigs at staggered depths, pulled at 0.5 to 0.8 mph along the deep weedline until the school announces itself. Then spot-lock and pick them off.' },
      { name: 'Small minnow on a plain hook', detail: 'A crappie minnow on a #4 light-wire hook, small split shot, under a float at dusk. The traditional method, and still the best when the bite gets fussy.' }
    ],
    liveBait: 'Small crappie minnows are the gold standard, hooked through the back under a float; waxworms and small plastics carry the winter fishery. Bait the jig when the water is cold, plain plastics are enough when it is warm.',
    technique: 'The searching is the fishing: crappie schools are compact and mobile, so troll or drift until you contact fish, then stop and stay quiet, a school spooks off a noisy boat. Fish above the marks, a crappie will rise 3 ft to eat but rarely drops 6 in, and use light line (4 to 6 lb) with a soft rod because their paper mouths tear on hard hooksets, sweep, do not snap. When the bite fades, do not leave, the school usually slid 20 yards along the edge or changed depth by a few feet, adjust and reconnect. Dusk turns schools on like a switch, save your best spot for the last hour.',
    augustNotes: 'Late August crappie are in classic summer suspension, hanging 8 to 15 ft down over 18 to 25 ft basins just off the deepest weed edges, and they are keyed on the year’s bumper crop of young-of-year minnows and perch. Drift small jigs on the basin side of the weedline until sonar lights up, then hover. The evening rise is strong now, schools push up and shallower in the last hour of light and will hit floats set only 4 to 6 ft down. Cooling nights ahead will slowly pull them toward tighter fall schools, so a spot that holds a few fish this week will hold more each visit into September.',
    proTips: [
      'When you catch one crappie 10 ft down over 20 ft, set every line at 10 ft, the school rides a level like a spirit level, and depth discipline out-fishes spot-hopping.',
      'A slow, steady fall triggers crappie better than any jigging stroke, use lighter jigs than seem sensible and count them down through the school’s level.',
      'After dark in summer, hang a light over the side (where legal), it stacks plankton, then minnows, then a crappie school under the boat within the hour.'
    ],
    table: 'Superb, sweet, delicate white fillets that many rank beside perch and walleye. Keep a reasonable feed of 9 to 11 in fish and release the 13 in slabs, big crappie are old and slow to replace.',
    handling: 'Their mouths really do tear like wet paper, land fish with a net or a smooth lift and never swing them aboard by the line. Support the belly for photos of big slabs.'
  },

  {
    id: 'bluegill',
    name: 'Bluegill',
    aka: ['Gill', 'Bream', 'Sunfish (loosely)'],
    sci: 'Lepomis macrochirus',
    family: 'Sunfish family (Centrarchidae)',
    bodyType: 'panfish',
    accent: '#5b7fa6',
    tagline: 'Small hands, big smiles, bent rods',
    status: 'Common in southern and central Ontario, scarce on the northern Shield',
    size: { avgIn: [6, 8], trophyIn: 9.5, ontRecordLb: 1.5 },
    tempF: [69, 80],
    idFeatures: [
      'Solid black ear flap with no red or orange margin (pumpkinseed has a red-tipped flap)',
      'Dark smudge at the rear base of the soft dorsal fin, the giveaway field mark',
      'Small mouth, even on big fish, a bluegill can barely eat your thumb-tip',
      'Purplish-blue gill cover sheen with faint vertical bars on olive flanks',
      'Big males (bulls) develop copper-orange breasts and a humped forehead'
    ],
    habitat: 'Bluegill live in warm, weedy, fertile water: pad bays, dock rows, marina basins and soft-bottom lakes throughout southern Ontario, mixing freely with pumpkinseeds. They spawn in colonies of saucer-shaped beds on sand and gravel in early summer, and the adults spend the rest of the season around weed edges with quick access to deeper water. Big bulls are far warier than the dock-nibbling small fry, they live deeper and act more like bass.',
    depth: {
      spring: 'Pre-spawn fish stage in 3 to 8 ft warming bays in late May, then colonize 1 to 5 ft spawning flats in June and early July. Beds are visible from a drifting boat, polarized glasses turn them into a map.',
      summer: 'Small fish hold under docks and in 2 to 8 ft weeds; quality bulls slide to the 8 to 15 ft deep weedline and pockets in the milfoil. Early morning finds even big fish shallow.',
      fall: 'Fish group on 10 to 18 ft weed edges and adjacent basin flats as weeds die back, feeding on invertebrates. Schools tighten and the average size in a school improves.',
      winter: 'A staple ice panfish at 10 to 20 ft over green weeds and soft basins, taking tiny jigs midday. Light bites, a spring bobber earns its keep.'
    },
    feeding: 'Bluegill graze all day on insect larvae, zooplankton, snails, leeches and the odd tiny minnow, feeding most actively morning and evening in warm months. They inspect food closely before committing, a bluegill will stare down a bait a pumpkinseed would have eaten twice. Warm stable weather makes for the easiest fishing in the calendar.',
    presentations: [
      { name: 'Worm piece under a small float', detail: 'A half worm on a #8 hook, small split shot, 2 to 4 ft under a pencil float. The universal kids’ rig, keep the bait small so they take the hook, not the tail.' },
      { name: 'Cricket-sized jigs', detail: 'A 1/32 to 1/64 oz jig with a 1 in plastic or waxworm, twitched beside weed pockets and dock posts on 4 lb line. This catches the bigger, warier fish the float rig misses.' },
      { name: 'Slow-falling flies and ice jigs', detail: 'A small wet fly, foam spider or tungsten ice jig fished on ultralight spinning gear or a fly rod along evening weed edges. The slow fall is irresistible in calm summer water.' },
      { name: 'Drop-shot for deep bulls', detail: 'A #8 hook with a waxworm or micro plastic, 12 in above a 1/8 oz weight, worked on the 10 to 15 ft weedline. The way to reach the hand-sized fish that never come shallow.' }
    ],
    liveBait: 'Worms, waxworms and crickets do it all, thread a piece rather than a whole dangling worm and your hookup rate doubles. Tiny plastics work once you find the school.',
    technique: 'For fun and food, fish small: a long ultralight rod, 4 lb line, a #8 hook and only enough float to see the bite, bluegills mouth a bait and spit anything with drag. For genuine bull bluegill, ignore the dock swarms and hunt the deep weedline with a tiny jig or drop-shot, moving until you hit fish over 8 in, because size runs in schools. Set the hook on any sideways float movement, a big gill rarely pulls the float under, it just walks away with it. If small fish pick you apart, go deeper or move, the bulls do not share a spot with the babies.',
    augustNotes: 'Spawning is done, colonies have broken up, and by late August the quality bluegill are on 8 to 15 ft weed edges and pockets, while docks and shallow weeds hum with small fish for the kids. Insect hatches are winding down, so protein baits (worm pieces, waxworms) out-fish flashy plastics this week. Evenings are noticeably earlier and calm, fish the last two hours around weed edges when big gills tip up to sip emergers, an ultralight or fly rod shines. On mixed Manitoulin lakes the bluegill and pumpkinseed schools mingle, so keep sorting until you dial in the bigger fish.',
    proTips: [
      'The biggest bluegill in the lake bite within 18 in of bottom on the deep weedline, not under the dock, fish the depth band, not the easy targets.',
      'Hook pieces of worm through the very end so they hang straight, bluegill nip the trailing bend of a folded worm and never touch steel.',
      'Big bulls patrol just off spawning colonies in reopened cruising lanes, cast beyond the beds and drag the bait through the lane instead of dropping it on the saucers.'
    ],
    table: 'Excellent, sweet, firm little fillets, a pile of 7 to 9 in bluegills makes a family fry to rival perch. Release the true 10 in bulls, they take a decade to grow and anchor the colony genetics.',
    handling: 'Smooth the spiny dorsal down as you grip, bluegill spines are a toddler’s first fishing lesson. Wet hands for the little ones going back.'
  },

  {
    id: 'pumpkinseed',
    name: 'Pumpkinseed',
    aka: ['Sunfish', 'Punkie', 'Common sunfish', 'Kivver'],
    sci: 'Lepomis gibbosus',
    family: 'Sunfish family (Centrarchidae)',
    bodyType: 'panfish',
    accent: '#c07a45',
    tagline: 'The lake’s hand-painted jewel',
    status: 'Abundant everywhere in Ontario, the province’s most widespread sunfish',
    size: { avgIn: [5, 7], trophyIn: 9, ontRecordLb: 1.26 },
    tempF: [68, 78],
    idFeatures: [
      'Black ear flap with a bright red or orange crescent on the tip, the single best field mark (bluegill’s flap is all black)',
      'Wavy iridescent blue lines across an orange-and-teal cheek, like painted enamel',
      'Orange belly and orange-spotted flanks',
      'Small mouth, even smaller than a bluegill’s',
      'No dark blotch on the soft dorsal fin (bluegill has one)'
    ],
    habitat: 'The pumpkinseed is Ontario’s everywhere-fish, thriving in weedy shallows of lakes, ponds, rivers and canals from Windsor to the mid-north, including cool Shield waters too stern for bluegill. It hugs cover tighter and tolerates colder water than bluegill, living among pads, rushes, dock cribs and boulder-weed edges. If a waterbody in Ontario holds any fish at all, it likely holds pumpkinseeds.',
    depth: {
      spring: 'Fish warm 2 to 6 ft bays by mid-May and spawn on 1 to 4 ft sand and gravel saucers in June. The males guarding beds hit anything that enters the nest.',
      summer: 'Home is 2 to 10 ft weeds, docks and boulder edges all summer; the better fish edge toward 8 to 12 ft weedlines. They rarely go truly deep.',
      fall: 'Fish slide to 8 to 15 ft green weeds and mixed rock, schooling more tightly as the shallows cool. Bites remain reliable on calm afternoons.',
      winter: 'Caught through the ice at 8 to 15 ft over weeds, usually mixed with bluegill and perch, midday, small jigs, light line.'
    },
    feeding: 'Pumpkinseeds specialize in snails (their throat teeth crush shells) plus insect larvae, small leeches and scuds, feeding by sight through the day. They are bolder and less inspection-prone than bluegill, which is why kids catch so many. Sunny calm afternoons in the weeds are their happy place.',
    presentations: [
      { name: 'Worm under a float', detail: 'A #8 hook, small worm piece, split shot, and a small float set 18 to 36 in deep, dropped beside weeds or dock posts. The first rig most Ontario anglers ever fished, because it always works.' },
      { name: 'Micro jigs', detail: 'A 1/32 oz jig with a 1 in grub, swum slowly along weed pockets on 4 lb line. Slightly bigger fish than the float rig pulls.' },
      { name: 'Small spinners', detail: 'A #0 or #00 inline spinner reeled slowly along cover edges catches the most aggressive seeds and doubles as a kid-friendly casting lesson.' },
      { name: 'Foam spider on a fly rod', detail: 'Twitched over calm evening shallows, a pumpkinseed rising to a spider is small-water dry-fly fishing at its purest.' }
    ],
    liveBait: 'Garden worms rule; waxworms, small leeches and crickets all work. Keep baits pea-sized, their mouths are tiny.',
    technique: 'This is the species for teaching: rig light (4 lb line, #8 hook, tiny float), find visible cover in 2 to 6 ft, and let the fish provide the entertainment. Set the hook with a gentle lift the instant the float dances, and re-bait small, a whole dangling worm feeds ten fish without hooking one. For bigger seeds, fish the deepest weed edge you can find with a slow-falling micro jig and skip past the first dozen tiny ones. Move ten feet at a time along cover, pumpkinseeds are territorial and each dock post or weed pocket holds its own committee.',
    augustNotes: 'Late August pumpkinseeds are exactly where a kid wants them: stacked around docks, weed pockets and boulder edges in 3 to 8 ft, feeding on snails and late-season nymphs through the warm afternoons. The better fish have slid to the 8 to 12 ft weedline alongside bluegill, so a slow micro jig there upgrades your average. Calm, warm evenings still bring rises to spiders and small poppers along the pads. This is the week to hand someone their first rod on Kagawong, the dock bite is essentially guaranteed.',
    proTips: [
      'The red flash of the ear flap in shallow water gives away cruising fish before your bait lands, sight-fish them like tiny bonefish with polarized glasses.',
      'Seeds crush snails all day, a bait dragged slowly on bottom near weeds out-produces one hanging mid-water when fish get picky.',
      'The biggest pumpkinseeds share bull-bluegill habitat, if you want a true 9-incher, fish the deep weedline at dawn, not the dock at noon.'
    ],
    table: 'Very good, the same sweet white meat as bluegill in a slightly smaller package. A dozen 7-inchers is a meal; filleting goes fast with a sharp thin blade.',
    handling: 'Spiny little dorsal, smooth it back with your palm. Their small size makes them easy for kids to squeeze too hard, coach wet, gentle hands and quick releases.'
  },

  {
    id: 'rock-bass',
    name: 'Rock Bass',
    aka: ['Rocky', 'Redeye', 'Rock sunfish', 'Goggle-eye'],
    sci: 'Ambloplites rupestris',
    family: 'Sunfish family (Centrarchidae)',
    bodyType: 'panfish',
    accent: '#9b5d43',
    tagline: 'Red eyes, zero self-control',
    status: 'Abundant across Ontario wherever there is rock, including every Manitoulin lake',
    size: { avgIn: [6, 9], trophyIn: 11, ontRecordLb: 3.0 },
    tempF: [65, 75],
    idFeatures: [
      'Bright red eye, unmistakable at any size',
      'Rows of dark spots along brassy flanks forming broken horizontal stripes',
      'Six anal-fin spines (other sunfish have three), the technical clincher',
      'Big mouth for a panfish, closer to a bass mouth than a bluegill mouth',
      'Ability to change shade in seconds, fish come up dark blotchy or pale to match bottom'
    ],
    habitat: 'The name is the habitat: rock bass live on boulder shorelines, rubble points, rock cribs, break walls and gravel flats in lakes and rivers across the province. On Shield and Manitoulin waters they carpet the same rocky structure smallmouth use, usually a few feet shallower, and they hold tight to shadow, under boulders, dock cribs and ledges. They are homebodies, the same crib holds rock bass every day of the summer.',
    depth: {
      spring: 'Spawning happens in 2 to 6 ft gravel and rubble in late spring, males guarding nests near boulders. Fish are shallow and fearless from May onward.',
      summer: 'Most fish hold 4 to 15 ft on rock and mixed rock-weed edges, tucked into shade pockets by day. Evening brings them up onto shoal tops.',
      fall: 'They slide down the same structure to 10 to 20 ft, schooling more tightly among boulders. The bite stays steady until the water drops through the low 50s.',
      winter: 'Semi-dormant in deep rock, an occasional bonus through the ice near rocky points, but not a targeted winter fish.'
    },
    feeding: 'Rock bass eat crayfish first and always, plus minnows, insect larvae and anything that lands near their boulder. They feed all day with zero caution, striking baits nearly their own size, and they hit hardest in the low light of evening. If rock bass stop biting, the spot is empty, they do not sulk.',
    presentations: [
      { name: 'Small jig and worm or plastic', detail: 'A 1/16 to 1/8 oz jig with a worm piece or 2 in grub, hopped along boulder edges. They race each other to it.' },
      { name: 'Small crankbaits and spinners', detail: 'A #1 or #2 inline spinner or a tiny crayfish crank ticked along rocks catches the biggest rock bass in the school and plenty of bonus smallmouth.' },
      { name: 'Drop-shot scraps', detail: 'Whatever half-chewed plastic is left on your smallmouth drop-shot will fill an afternoon on rock bass, fish it the same way, 8 to 15 ft on rock.' },
      { name: 'Float and worm off the dock', detail: 'Set 3 to 5 ft deep beside a crib or boulder pile. The most reliable child-powered fishery in Ontario.' }
    ],
    liveBait: 'Worms, small crayfish and minnows are all inhaled without ceremony. This is the fish that keeps bait shops honest.',
    technique: 'Find clean rock in 4 to 15 ft, get a small bait near bottom, and manage expectations upward, that is the whole manual. They punch far above their weight for the first five seconds, so let new anglers believe it is a smallmouth for a moment. To upgrade size, fish deeper boulders at dusk with a slightly larger bait, big rock bass (10 in and up) hold below and behind the eager small ones. On Kagawong-type lakes, a drifting boat along a boulder shoreline with two float rigs out will produce fish nearly continuously.',
    augustNotes: 'Late August rock bass are stacked on 6 to 15 ft boulder edges and cribs, gorging on the summer’s crop of small crayfish, and they will save any slow day on Kagawong. Evenings pull them up onto shoal tops where they smack spinners and small topwaters meant for smallmouth. For a family boat, anchor off any rocky point with worms and you have two hours of guaranteed action. The fish are as fat as they get all year right now, thick, sassy and shaped like a bar of soap.',
    proTips: [
      'A rock bass strike on your drop-shot tells you the bottom is right for smallmouth, treat them as sonar with fins and fish the spot harder, not less.',
      'The biggest redeyes are night-active, the last 30 minutes of light on a boulder flat produces the true 11 in class fish.',
      'Shadow is the pattern within the pattern, cast to the dark side of every boulder and crib, not the sunny side.'
    ],
    table: 'Fair to good, firm white flesh from clean cool water is better than its reputation, though softer than perch in warm shallow lakes. Fish from cold Shield water in spring and early summer eat surprisingly well.',
    handling: 'Standard sunfish spines, smooth them down. They swallow baits fast, so pinch barbs or carry a long disgorger when the kids are catching them nonstop.'
  },

  {
    id: 'lake-trout',
    name: 'Lake Trout',
    aka: ['Laker', 'Grey trout', 'Togue', 'Salmon trout (old Ontario)'],
    sci: 'Salvelinus namaycush',
    family: 'Salmon family (Salmonidae)',
    bodyType: 'trout',
    accent: '#6b7f8a',
    tagline: 'The deep, cold heart of the Shield',
    status: 'Iconic on Canadian Shield lakes, Great Lakes and stocked waters; slow-growing and precious',
    size: { avgIn: [18, 28], trophyIn: 36, ontRecordLb: 63.12 },
    tempF: [48, 52],
    idFeatures: [
      'Light cream spots on a dark grey-green background (all char have light spots on dark; true trout are the reverse)',
      'Deeply forked tail, the strongest fork of any Ontario salmonid',
      'White leading edges on lower fins, without the brook trout’s black trim line',
      'No pink or red spotting like a brook trout, and no worm-track backs',
      'Big head and mouth on lean fish; deep-bodied siscowet-style fish occur in Lake Superior'
    ],
    habitat: 'Lake trout demand cold, clean, oxygen-rich water, so their homes are deep clear Shield lakes, the Great Lakes and a handful of deep southern lakes, plus stocked put-grow-and-take waters. They are open-water nomads oriented to points, humps and steep walls that intersect their cold comfort layer, following ciscoes, smelt and whitefish. A lake trout lake is a cold-water bank account, fish can take 10 years to reach 5 lb, so every big one released matters.',
    depth: {
      spring: 'Ice-out through May is the shallow gift: lakers cruise 5 to 25 ft over shoals and along shorelines, catchable on light casting gear. It lasts until surface temps pass the high 50s.',
      summer: 'Fish drop below the thermocline to 50 to 120 ft, holding near bottom structure or suspending under bait. Precise depth control (downriggers, leadcore, heavy jigs) becomes the fishery.',
      fall: 'They rise with the cooling water and spawn over 10 to 30 ft boulder shoals around October (many lakes close in early September, check your zone). Pre-close fishing on deep humps can be superb.',
      winter: 'A premier Ontario ice fishery: 30 to 80 ft over points and basin humps, chasing spoons and tubes, often rocketing 20 ft upward to hit. Season typically January 1 in many zones.'
    },
    feeding: 'Ciscoes and smelt are the main course on most lakes, with sculpins, perch and burbot filling in, and on bait-poor lakes lakers eat plankton and grow slowly. They feed all day in their cold layer, with wind and overcast improving shallow-water windows in spring. Lakers chase, a fleeing bait triggers them, which is why speed rarely hurts.',
    presentations: [
      { name: 'White tube jig', detail: 'A 4 to 6 in white tube on a 3/4 to 1.5 oz head, dropped to bottom in 40 to 100 ft and jigged with big lifts, or reeled fast when fish chase on sonar. The modern laker classic, summer and winter.' },
      { name: 'Trolling spoons on downriggers', detail: 'Light flutter spoons (silver, white, orange) 50 to 90 ft down at 2 to 2.8 mph along structure edges. Watch the graph and adjust balls to run just above marks, lakers rise to eat, rarely descend.' },
      { name: 'Three-way rig or leadcore with spoon or stick', detail: 'The no-downrigger answer: 8 to 12 oz on a three-way or 8 to 10 colours of leadcore reaching 40 to 60 ft. Slow S-turns speed and slow the lure and trigger followers.' },
      { name: 'Heavy bucktail or swim jigs', detail: 'A 1 to 2 oz white bucktail jig or paddletail swimbait yo-yoed off deep points. Excellent when fish hug bottom tight to structure.' },
      { name: 'Casting spoons at ice-out', detail: 'A 3/4 oz spoon or 4 in swimbait cast from shore or boat over 5 to 20 ft shoals in May. The most fun a laker offers all year, light line, long runs.' }
    ],
    liveBait: 'Where legal, a lively or dead cisco or sucker on a slow-drifted bottom rig takes big fish, but check bait rules carefully, many lake trout lakes have bait restrictions or bans to protect them. Most of the fishery is artificial.',
    technique: 'Fish the layer, not the spot: find the depth where 48 to 52 F water meets structure or bait, and stay glued to it with electronics. In summer that means watching sonar constantly, dropping tubes or running riggers just above the marks, and paying attention when a fish streaks up at your lure, speed up, do not stop, a laker commits to a bait that flees. Fight deep fish slowly and steadily, and if you plan to release, avoid hauling fish rapidly from 60-plus ft, work them up gradually and release immediately. On unfamiliar lakes, start on the steepest points and humps that plunge into the basin, lakers use the same handful of structures for decades.',
    augustNotes: 'Late August is peak deep season: lakers are at their tightest depth band of the year, typically 50 to 100 ft on Shield lakes, pinned under a hard thermocline and shadowing cisco schools that are themselves at their annual deepest. Vertical jigging white tubes over deep humps and basin edges is the play, watch sonar for bait balls with arcs beneath. Note the calendar, many Ontario zones close lake trout after Labour Day or September 30, so this week is often the last big push. If you release fish, fish barbless and keep them out of 80 F surface water for only seconds.',
    proTips: [
      'When a laker follows your tube up without eating, reel faster, then stop dead only at the very end, the flee-then-falter sequence converts followers better than any jig stroke.',
      'On sonar, a laker inspecting your lure shows as a rising line converging on your bait, start speeding up the moment the lines converge, not after.',
      'Ciscoes rise toward the surface at dusk even in August, the last hour of light can put lakers 20 to 40 ft down over 100 ft, far above their daytime band.'
    ],
    table: 'Rich, orange-fleshed and excellent smoked or grilled, leaner fish from cold oligotrophic lakes taste cleanest. Keep the 2 to 4 lb eaters and release the old giants, a 20 lb Shield laker may be 40 years old and irreplaceable.',
    handling: 'Barotrauma is the concern: fish from deep water need a slow retrieve and a fast release, and repeatedly catch-and-releasing from 80 ft kills quietly. In summer, unhook them in the water where possible, their cold-adapted bodies suffer in warm surface layers.'
  },

  {
    id: 'brook-trout',
    name: 'Brook Trout',
    aka: ['Speckled trout', 'Speck', 'Brookie', 'Squaretail'],
    sci: 'Salvelinus fontinalis',
    family: 'Salmon family (Salmonidae)',
    bodyType: 'trout',
    accent: '#3f6f5f',
    tagline: 'Jewelled ghost of cold water',
    status: 'Native jewel: Shield streams and lakes, Lake Superior coasters, Nipigon country, plus southern stocked waters',
    size: { avgIn: [8, 14], trophyIn: 20, ontRecordLb: 14.5 },
    tempF: [52, 60],
    idFeatures: [
      'Worm-like pale squiggles (vermiculations) across the back, no other Ontario fish has them',
      'Red spots with blue halos scattered on olive flanks',
      'White then black edging on orange lower fins, like painted trim',
      'Square, barely forked tail (hence squaretail)',
      'Spawning males blaze orange-red below with a hooked jaw'
    ],
    habitat: 'Brook trout are the sentinels of cold, clean water: spring-fed creeks, beaver ponds, Shield lakes with cold depths, and the famous big-water fish of the Nipigon system and Lake Superior’s coaster shorelines. They need water that rarely exceeds the mid-60s and gravel-spring upwellings to spawn, which is why they vanish when land is cleared or water warms. In lakes they cruise shorelines and shoals in cold months and hold near springs and thermocline depths in summer.',
    depth: {
      spring: 'The season opener (late April in the south) through June is prime: stream fish feed in pools and undercut runs, lake fish cruise 3 to 15 ft shorelines and shoal edges. Surface temps in the 50s mean fish can be anywhere shallow.',
      summer: 'Stream brookies pack into spring holes, deep shaded pools and tributary mouths; lake fish drop to 15 to 35 ft near the thermocline or hover over spring seeps. Dawn is the only reliable shallow window.',
      fall: 'Fish colour up and move toward gravel spawning water in September and October (many waters close September 30, check your zone). Pre-close fishing near river mouths and shoals can be the year’s best for size.',
      winter: 'Where seasons allow, ice fishing on stocked and natural lakes finds brookies 5 to 20 ft, often cruising just under the ice along shorelines, small spoons and worms.'
    },
    feeding: 'Brook trout eat whatever cold water offers: aquatic insects, terrestrials (ants, grasshoppers), minnows, leeches and scuds, with big Nipigon-class fish keying on sculpins and smelt. They feed opportunistically all day in cool water but compress to dawn and dusk in summer heat. A brookie rarely inspects, it eats or it is not there.',
    presentations: [
      { name: 'Small inline spinners', detail: 'A #1 or #2 spinner (silver, gold, brook trout pattern) worked through pools, pockets and lake shoals on 4 to 6 lb line. The most productive brook trout lure in Ontario, full stop.' },
      { name: 'Worm drifted naturally', detail: 'A small worm on a #8 hook with one split shot, drifted along undercut banks and through pool heads. The old camp method, fish it with the current, not against it.' },
      { name: 'Small spoons', detail: 'A 1/8 to 1/4 oz spoon (EGB, Little Cleo) cast and fluttered along lake drop-offs and river mouths, deadly on bigger lake fish and coasters.' },
      { name: 'Flies: dries and streamers', detail: 'Elk hair caddis or a foam ant on top in summer, and a small Muddler or black woolly bugger swung deep for the biggest fish in the pool. Fly gear matches the intimacy of most brookie water.' },
      { name: 'Tiny jigs under a float', detail: 'A 1/16 oz jig tipped with worm below a small float, drifted along beaver-pond edges and lake shorelines, subtle, and lethal on pressured fish.' }
    ],
    liveBait: 'Worms are traditional and effective everywhere they are legal; check regulations, several brook trout waters are artificials-only or have bait bans. Minnow use is heavily restricted in many trout waters.',
    technique: 'Approach is everything: brook trout live in small clear water and a heavy footfall or a shadow across the pool ends the fishing before it starts. Move upstream, stay low, cast ahead of yourself, and put the first cast in the sweet spot because the best fish eats first or spooks first. On lakes, troll or cast small spinners and spoons along the shoreline drops at dawn, then find the spring holes or thermocline depth once the sun climbs. Keep moving, brookie fishing is a coverage game, ten pools beat one pool fished ten times.',
    augustNotes: 'Late August is the tender month for brookies: streams are at their warmest and lowest, and stream fish are packed into spring holes and shaded pools, so many anglers rest them until the September cool-down rather than stress fish in 68 F water. On Shield lakes fish hold 15 to 30 ft near springs and the thermocline and still bite small spoons and worms fished at depth. Fish dawn, when temperatures bottom out, and carry a thermometer, above the mid-60s, let them be. Cooler nights this week begin re-oxygenating the shallows, and the first fall movement toward spawning gravel is only weeks away.',
    proTips: [
      'A cheap stream thermometer is the best brookie lure you own, find water 58 to 62 F in August and you have found every trout in the system.',
      'In beaver ponds, the biggest brook trout holds against the dam itself or the deepest channel seam, not the pretty open middle.',
      'Tributary mouths after a summer rain concentrate lake brookies within hours, fish the cool inflow plume while it lasts.'
    ],
    table: 'Beautiful eating, delicate pink flesh, best pan-fried at a campfire the same day. Keep a couple of stocked or abundant small-lake fish and release wild stream fish, wild brookie populations are small and slow to recover.',
    handling: 'Handle like the fragile natives they are: wet hands, no squeezing, seconds of air, and skip the fishing entirely in warm water. Barbless hooks make stream releases nearly touch-free.'
  },

  {
    id: 'rainbow-trout',
    name: 'Rainbow Trout',
    aka: ['Steelhead (migratory Great Lakes form)', 'Bow', 'Chromer'],
    sci: 'Oncorhynchus mykiss',
    family: 'Salmon family (Salmonidae)',
    bodyType: 'trout',
    accent: '#b06f85',
    tagline: 'Chrome lightning with a pink stripe',
    status: 'Naturalized Great Lakes steelhead runs plus stocked inland lakes across Ontario',
    size: { avgIn: [16, 26], trophyIn: 32, ontRecordLb: 40.75 },
    tempF: [52, 64],
    idFeatures: [
      'Pink to red lateral stripe from cheek to tail (faint chrome on fresh lake-run steelhead)',
      'Small black spots peppered over the back, dorsal fin and the entire tail (salmon tails are less uniformly spotted)',
      'White mouth and gums (chinook has a black mouth with black gums)',
      'Adipose fin present; many stocked fish have a clipped fin, a clue worth checking',
      'No red slash under the jaw (that is a cutthroat, absent from Ontario)'
    ],
    habitat: 'Ontario rainbows live two lives: as steelhead in the Great Lakes, roaming open water and running tributaries (the Ganaraska, Credit, Saugeen, Nottawasaga, and Superior’s north-shore rivers) in spring and fall, and as stocked residents in inland lakes and ponds across the province. In lakes they are open-water cruisers of the cool upper-middle layers; in rivers they hold in pools, runs and pocket water. They tolerate warmer water than brook trout but still seek the 50s and low 60s.',
    depth: {
      spring: 'River steelhead run and spawn March through early May, holding in pools and gravel runs. Lake and pond rainbows cruise the top 10 ft after ice-out, smashing spinners and flies.',
      summer: 'Great Lakes fish suspend offshore over the thermocline, 30 to 70 ft down over deep water; inland stocked fish hold 15 to 30 ft near the thermocline, rising early and late. River fishing for resident bows means cold pockets and dawn.',
      fall: 'A fall run of steelhead enters many tributaries from late September through November behind the salmon, feeding on loose eggs. Lake fish move back into the top 20 ft as it cools.',
      winter: 'Steelhead winter over in deep river pools and bite subtly all winter (open sections); stocked lakes fish well through the ice 5 to 20 ft down with small jigs and worms.'
    },
    feeding: 'Steelhead in the lakes chase smelt, alewife and emerald shiners plus insects at the surface film; in rivers they eat eggs, nymphs and minnows. Stocked lake fish take insects, minnows and whatever the hatchery taught them to expect. Rainbows feed actively in daylight, with low light and a light chop the best combination on open water.',
    presentations: [
      { name: 'Float and roe bag (rivers)', detail: 'A centrepin or long spinning rod drifting a pea-sized roe bag or bead under a 4 to 6 gram float, dead-drifted at current speed along the pool seam on a 6 lb fluoro leader. The definitive Ontario steelhead method.' },
      { name: 'Trolling spoons and small plugs (lakes)', detail: 'Orange, pink and silver spoons 30 to 60 ft down off riggers or 3 to 5 colours of leadcore at 2.2 to 2.8 mph over deep water. Summer steelhead often hit the highest lines in the spread.' },
      { name: 'Small spinners and spoons (stocked lakes and rivers)', detail: 'A #2 or #3 silver spinner or 1/4 oz spoon cast and retrieved just above the fish’s depth. Simple and effective everywhere rainbows swim.' },
      { name: 'Fly fishing: nymphs, eggs and streamers', detail: 'Indicator-nymphing stonefly and egg patterns through steelhead pools, or stripping leech and minnow streamers on stocked lakes. A 7 or 8 wt for steelhead, 5 wt for ponds.' },
      { name: 'Worm and marshmallow or PowerBait (stocked ponds)', detail: 'Floated 18 in off bottom on a slip-sinker rig where stocked fish cruise. Unfashionable, and it fills fry pans across Ontario.' }
    ],
    liveBait: 'Roe (natural or cured) is the river staple; worms take fish everywhere. Check tributary regulations closely, many have bait, hook and seasonal sanctuaries.',
    technique: 'In rivers, the drift is the skill: set your float so the bait travels at the speed of the bottom current, slightly slower than the surface, and cover every seam methodically, steelhead hold in narrow lanes and will not move far in cold water. Strike at any hesitation of the float. On the big lakes, find the thermocline with your graph and run baits just above it, rainbows look up. Fight them with the drag set light and the rod high, no fish in Ontario jumps more, cartwheels boat-side lose more steelhead than anything else, so drop the rod to the water when they leap.',
    augustNotes: 'Late August Great Lakes steelhead are ganged offshore over the thermocline, often 35 to 65 ft down over 100-plus ft of water, mixed with salmon staging for the fall run, and they light up high spoons in the trolling spread. Inland stocked lakes fish deep and early: get a small spoon or worm to 15 to 25 ft at dawn before surface temps climb. River fishing waits, the first fall-run steelhead nose into Superior and Huron tributaries with September rains, only weeks away. Tie roe bags and check your float gear now, the fall river season starts fast.',
    proTips: [
      'On a trolling spread, summer steelhead hit the shallowest, farthest-back lines, run one bright spoon 20 ft down and 150 ft back and it will out-fish the deep riggers for bows.',
      'In gin-clear late-summer rivers, a single dead-drifted bead or small nymph on 4 lb fluoro beats a roe bag ten to one for resident rainbows.',
      'When a steelhead jumps, drop the rod tip to the surface and give slack for a heartbeat, tension against an airborne fish is how hooks come back bent and empty.'
    ],
    table: 'Very good, pink and versatile, stocked and lake fish especially. Many anglers release wild river steelhead and harvest from stocked and open-lake fisheries instead.',
    handling: 'Keep river fish in the water for photos, and revive drift-caught fish facing the current until they surge. Wild steelhead stocks are precious, handle chrome like glass.'
  },

  {
    id: 'brown-trout',
    name: 'Brown Trout',
    aka: ['Brownie', 'German brown', 'Lake-run brown'],
    sci: 'Salmo trutta',
    family: 'Salmon family (Salmonidae)',
    bodyType: 'trout',
    accent: '#8c6d4a',
    tagline: 'The professor of trout streams',
    status: 'Naturalized in southern Ontario streams and Great Lakes nearshore waters; stocked widely',
    size: { avgIn: [16, 26], trophyIn: 32, ontRecordLb: 34.38 },
    tempF: [56, 65],
    idFeatures: [
      'Butter-gold flanks with black spots and scattered red-orange spots, many haloed in pale blue',
      'Few or no spots on the tail (rainbow tails are fully spotted)',
      'Adipose fin often tinged orange',
      'Pale halos around dark spots, no other Ontario trout shows them so clearly',
      'Great Lakes fish run silvery, but the squarish tail and unspotted tail field still separate them from rainbows'
    ],
    habitat: 'Browns are the wariest trout, thriving in southern Ontario limestone and spring creeks (the Grand River tailwater, Credit headwaters, Beaver River), and as a nearshore Great Lakes fishery, especially Lake Ontario and Georgian Bay harbours and river mouths. Stream fish claim the best cover in the pool, undercut banks, log jams, deep slots, and grow big by feeding at night. Lake fish patrol shorelines, harbours and river plumes in cold months, sliding deeper in summer.',
    depth: {
      spring: 'The best nearshore window: Great Lakes browns cruise 5 to 20 ft along warming shorelines and river mouths in April and May, taken flatlining small sticks. Stream fish feed steadily in pools as hatches build.',
      summer: 'Lake fish drop to the thermocline band, 30 to 70 ft, hugging bottom structure where cold water touches it. Stream browns go nocturnal, holding under cover by day and hunting shallow riffles and pool tails at night.',
      fall: 'Fish stage off river mouths in October and run to spawn in late fall (respect closed sections and redds). Some of the biggest stream fish of the year are caught on streamers in September and October.',
      winter: 'Great Lakes browns return nearshore, harbours, warm-water discharges, 5 to 25 ft, and bite all winter for casting and trolling anglers between ice. Stream fish hold deep and feed in midday warmth (where open).'
    },
    feeding: 'Browns are ambush feeders on minnows, sculpins, crayfish and large nymphs, and big fish are confirmed night hunters, the 6 lb stream brown eats mice and 6 in chubs at 1 am. Lake fish chase alewife, smelt and gobies. Overcast, drizzle and dirty water turn daytime browns on; bright sun sends them under the banks.',
    presentations: [
      { name: 'Flatlined stickbaits (Great Lakes, spring)', detail: 'Small minnow plugs (F11 to F13 size) on long lines and planer boards in 5 to 20 ft along shore, 2.0 to 2.5 mph. Browns spook from the boat, boards and 100-plus ft leads make the fishery.' },
      { name: 'Streamers and big nymphs (streams)', detail: 'A sculpin or woolly bugger swung tight to wood and undercut banks, or a stonefly nymph dead-drifted through the slots. Cover water and hit every piece of cover once.' },
      { name: 'Spinners and small spoons', detail: 'A #2 to #3 spinner worked across pool heads and along banks takes stream browns everywhere, dusk especially. Gold blades in stained water.' },
      { name: 'Night fishing with mouse patterns or wake baits', detail: 'Summer big-fish specialty: swing a mouse fly or slow-wake a surface plug across pool tails on a warm night. Set on weight, not sound.' },
      { name: 'Trolling spoons on riggers (summer lakes)', detail: 'When browns are 40 to 70 ft down near bottom, run spoons tight to structure off the riggers at 2.2 mph, they hold tighter to bottom than salmon or rainbows.' }
    ],
    liveBait: 'A drifted worm after a rain, or a small minnow worked through a deep pool, catches stream browns where bait is legal; roe takes lake-run fish in fall. Many prime brown waters are artificials-only, read the exceptions.',
    technique: 'Fish for browns like you are hunting: long leaders, low profile, first cast counts, and always show the fish your fly or lure before it sees your line or your shadow. Target the nastiest cover in the pool, browns take the prime lie, and be willing to sacrifice lures to log jams because that is where the fish worth catching lives. On the Great Lakes in spring, go long and shallow with boards at first light before boat traffic pushes fish out. And if you are serious about a trophy stream brown, learn one pool intimately and fish it on warm summer nights, big browns are a different species after dark.',
    augustNotes: 'Late August stream browns are in full summer mode: nocturnal, tucked under wood and banks by day, and vulnerable to a mouse or wake bait fished through pool tails on warm nights, this is the trophy window for night owls. Daytime, fish early with terrestrials, hoppers and ants along grassy banks are at their August peak. Great Lakes browns are deep, 40 to 70 ft, glued to bottom where the thermocline hits structure, a precise downrigger fishery. Cooling nights ahead will start sliding lake fish toward river mouths, the fall staging begins in September.',
    proTips: [
      'August hopper banks are a daytime cheat code, browns that ignore everything will move 3 ft for a foam hopper slapped hard against a grassy edge.',
      'The biggest brown in any pool eats after dark within 10 ft of where a rat or mouse could fall in, fish the grassy undercut, not the pretty mid-pool seam.',
      'On the Great Lakes, browns hug bottom so tightly that a rigger ball bumping bottom occasionally means you are finally deep enough.'
    ],
    table: 'Good, firm and flavourful, though large old browns from the Great Lakes carry higher contaminant loads, check Ontario’s fish consumption guide for your water. Stream fish are better released on most southern waters.',
    handling: 'Standard trout care, wet hands and quick photos, and note the strong teeth on big males, especially fall kypes. Night-caught fish revive slowly, hold them in current until they bolt.'
  },

  {
    id: 'chinook-salmon',
    name: 'Chinook Salmon',
    aka: ['King salmon', 'King', 'Spring salmon'],
    sci: 'Oncorhynchus tshawytscha',
    family: 'Salmon family (Salmonidae)',
    bodyType: 'trout',
    accent: '#4f6b7d',
    tagline: 'The freight train of the Great Lakes',
    status: 'The backbone of the Lake Ontario and Lake Huron open-water fishery; runs most major tributaries',
    size: { avgIn: [30, 40], trophyIn: 42, ontRecordLb: 46.38 },
    tempF: [50, 57],
    idFeatures: [
      'Black mouth with black gums at the base of the teeth (coho has a black mouth with white gums)',
      'Spots over the back and across both lobes of the tail',
      'Large size, adult kings dwarf every other Ontario salmonid but lake trout',
      'Anal fin long with 15 to 17 rays (trout have fewer, shorter anal fins)',
      'Spawning fish darken to olive-black with a heavy kype'
    ],
    habitat: 'Chinook are pelagic wolves of the Great Lakes, roaming open water in the cold layer wherever alewife and smelt concentrate, with Lake Ontario the flagship fishery and Huron and Georgian Bay strong. They live three to four years, then stage off natal rivers in late summer and run in September to spawn and die, the Ganaraska, Credit, Bronte, Saugeen, Nottawasaga and dozens more. In open water they are structure-free, temperature and bait are the only geography that matters.',
    depth: {
      spring: 'April and May kings feed high and nearshore, 10 to 40 ft down over 50 to 150 ft, often within sight of shore in the warm plumes. Flatlines and high riggers rule early.',
      summer: 'Fish follow the thermocline down, 50 to 100 ft over 100 to 400 ft of water by July and August, in the 48 to 54 F band. Downriggers, dipsy divers and copper line define the fishery.',
      fall: 'Staging fish pile off river mouths in 20 to 80 ft in late August and September, then run the rivers with the rains. River fish stop feeding but strike out of aggression, roe, flies and plugs.',
      winter: 'Immature kings winter scattered and deep offshore and are rarely targeted; the trolling fleet turns to browns and lakers nearshore.'
    },
    feeding: 'Alewife are the engine of the king fishery, with smelt secondary, and a chinook eats a third of its body weight weekly in peak summer growth. Feeding peaks in low light, first light is famously the bite, and again at dusk, with deep fish nibbling all day. Staging and river fish do not feed, they strike from irritation, which changes the game to provocation.',
    presentations: [
      { name: 'Flasher and fly on downriggers', detail: 'An 8 or 10 in rotating flasher (white, green, chrome) with an aqua or green fly 20 to 30 in behind, 50 to 90 ft down at 2.3 to 3.0 mph. The definitive king rig on Lake Ontario, run it on your deepest lines.' },
      { name: 'Magnum spoons', detail: 'Glow-green, black-and-purple and NBK-pattern magnum spoons on riggers and dipsies through the same depth band. Spoons take the most fish on high lines at first light.' },
      { name: 'Dipsy divers and copper line', detail: 'Directional divers on wire (settings 1 to 3, 150 to 250 ft out) and 300 to 450 ft copper setups spread lures away from the boat and cover the mid-depths riggers miss.' },
      { name: 'Cut bait rigs', detail: 'A whole or strip alewife in a rotating meat head behind a flasher, slow-trolled 60 to 100 ft down for the biggest staging kings of late August. Scent plus slow roll equals giant fish.' },
      { name: 'Roe bags and plugs (rivers)', detail: 'Once fish enter the tributaries: roe under floats through deep pools at dawn, or back-drifted plugs that hover in a king’s face until aggression wins. Heavy leaders, 12 to 15 lb minimum.' }
    ],
    liveBait: 'Open-water kings are caught on hardware and cut bait rather than live bait; in rivers, cured roe is king. Check tributary rules, hook and bait restrictions are common.',
    technique: 'Finding the temperature is finding the fish: use a probe or trust the graph and set your deepest baits in 48 to 54 F water, then build a spread that covers 20 ft above it, kings rise through the spread at first light. Be on the water in the dark, the first 90 minutes produce more kings than the next eight hours, and troll with S-turns so lures speed up and drop back, outside-turn rods fire constantly. When a rigger pops, drop the boat into a straight line and keep the speed up, other rods often go while the first fish is on. Let the reel do the work on the first run, a mature August king will take 150 ft of line against a locked drag and break off anything you try to stop.',
    augustNotes: 'This is the show: late August is staging season, and mature 3 and 4 year old kings, the biggest of the year, are stacking off river mouths from the Ganaraska to the Credit to the Saugeen in 40 to 100 ft, hitting flasher-fly and cut bait at dawn before the September run. Bites are early and violent, be trolling in the dark, and by 9 am it is often over. Off-mouth fish are moody and boat-shy, longer leads and slower speeds (2.0 to 2.3 mph) with glow patterns before sunrise out-produce the summer program. The first cool rains of early September will pull them into the rivers, this week and next are the peak of the trophy year.',
    proTips: [
      'Glow finishes recharged with a camera flash or UV light before every set are the difference-maker in the pre-dawn staging bite.',
      'Speed at the ball, not at the GPS, matters: currents down 70 ft can double or kill your lure action, use a probe or watch rigger cable angle and adjust until the rods talk.',
      'When staging kings snub everything, drop to a meat rig and slow to 1.8 mph, scent and a lazy roll provoke fish that have stopped feeding.'
    ],
    table: 'Rich and excellent from open water, silver summer kings grill and smoke beautifully, though check consumption guidelines for large Great Lakes fish. Dark river-run fish are poor eating, let them finish their journey.',
    handling: 'Open-water kings come aboard hot, keep hands clear of trebles until the fish calms in a big net. River fish on their spawning run deserve quick releases, and never pull fish off active redds.'
  },

  {
    id: 'lake-whitefish',
    name: 'Lake Whitefish',
    aka: ['Whitefish', 'Whitie', 'Attikamek (Cree)'],
    sci: 'Coregonus clupeaformis',
    family: 'Salmon family (Salmonidae)',
    bodyType: 'trout',
    accent: '#9aa8b5',
    tagline: 'The Shield’s silver understatement',
    status: 'Widespread in deep, cold Ontario lakes; a historic Manitoulin and Georgian Bay staple',
    size: { avgIn: [16, 22], trophyIn: 25, ontRecordLb: 14.77 },
    tempF: [46, 54],
    idFeatures: [
      'Small, downturned, almost sucker-like mouth under a blunt overhanging snout, built for bottom feeding',
      'Large smooth silver scales with a faint olive-bronze back, no spots at all',
      'Deeply forked tail and an adipose fin (the adipose separates it from suckers instantly)',
      'Deeper body than a cisco, and the cisco’s lower jaw juts out beyond its snout, the whitefish snout overhangs',
      'Fine, delicate mouth tissue, hooks pull easily'
    ],
    habitat: 'Whitefish live in the cold bottom layer of deep, clean lakes across Ontario: the Great Lakes, Georgian Bay, Lake Simcoe, Manitoulin’s deep lakes and countless Shield waters, historically the backbone of the commercial fishery. They cruise deep basins, flats and drop-off bases in loose schools, grazing the bottom for invertebrates. Cold is home: they follow the 46 to 54 F band, shallow in winter and spring, deep beneath the summer thermocline.',
    depth: {
      spring: 'Right after ice-out they feed surprisingly shallow, 10 to 30 ft flats and shoal edges, sometimes taking flies and small spoons near the surface. The window lasts while the whole water column is cold.',
      summer: 'Fish drop below the thermocline to 40 to 90 ft basin flats and the base of structure, tight to bottom. Deep vertical presentations or bottom-bouncing rigs are the only reliable way to reach them.',
      fall: 'They rise with the cooling water and spawn in November over 5 to 25 ft rock and gravel shoals. Late-fall fish stack on spawning shoals and adjacent drops, aggressive and shallow.',
      winter: 'The famous fishery: Lake Simcoe and thousands of northern lakes at 30 to 80 ft, jigging spoons and jigs off bottom. Whitefish are a premier Ontario ice target, midday bites included.'
    },
    feeding: 'Whitefish graze bottom invertebrates, bloodworms, scuds, mayfly nymphs, snails, zebra mussels, and increasingly eat small minnows like round gobies and young smelt, which has made them more lure-friendly than their grandfathers. They feed in slow-cruising schools, mouthing food off bottom, and bite most confidently midday in deep water. A pod moves through, everyone hooks up, then it goes quiet until the next pod.',
    presentations: [
      { name: 'Small jigging spoons tipped with bait', detail: 'A 1/4 to 3/8 oz spoon (Swedish Pimple, Hali with dropper chain) tipped with waxworms or a minnow head, pounded gently on bottom then hung 6 to 12 in up. The pounding puffs silt and calls fish, the hang gets the bite.' },
      { name: 'Drop-chain and dropper rigs', detail: 'A flashy spoon with a short chain dropper to a tiny hook, or a heavier jig with a dropper fly 12 in above. Whitefish rush the flash and eat the small trailer, a Simcoe standard.' },
      { name: 'Small white tubes and jigs', detail: 'A 2 to 3 in white or smelt-coloured tube on a 1/4 to 1/2 oz head, hopped on 40 to 80 ft flats. Also takes bonus lakers and is the top open-water summer approach.' },
      { name: 'Flies and tiny spoons at ice-out', detail: 'In the spring shallow window, whitefish sip nymphs and chase 1/8 oz spoons on 15 to 25 ft shoals, light-line sport that feels nothing like winter jigging.' }
    ],
    liveBait: 'Waxworms, maggots and small minnows tip the hardware; a plain small hook and worm on a dropper takes fussy fish. Light 4 to 6 lb fluoro leaders matter in the clear deep water they call home.',
    technique: 'Fish the bottom foot of the lake: whitefish feed down, so pound your lure on bottom to stir a silt cloud, then raise it just above the cloud and hold still, the strike is often just weight. Watch electronics, fish arrive in pods, and when marks appear, shrink your movements, big lifts spook them where a slow 2 in shimmy seals it. Their mouths are soft and small, so use light hooksets, a soft-tipped rod and steady pressure, half the fish lost are torn off by enthusiasm. In summer, commit to deep water: anchor or spot-lock on a 50 to 80 ft flat near structure and grind it out, the school will come through.',
    augustNotes: 'Late August whitefish are at their deepest, schooled on 50 to 90 ft basin flats below the thermocline on Manitoulin, Georgian Bay and Shield waters, tight to bottom among the bloodworm and scud beds. Vertical jigging a tipped spoon or small white tube at midday is the play, watch for pods sliding through on sonar and shrink the jig stroke when they appear. It is a patience fishery this week, but the fish are thick-backed and full-flavoured from a summer of feeding. Come November they will be on 10 ft shoals, but for now, think of them as the lake’s deepest citizens.',
    proTips: [
      'The silt-puff is the secret: two or three bottom thumps, then a dead hang 8 in up, whitefish charge the cloud and inhale whatever hovers above it.',
      'When a whitefish mark rises to your lure and stalls, drop the lure 6 in instead of lifting, they commit downward far more readily than upward.',
      'A second tiny dropper hook 10 in above your spoon catches the shadowing fish, often the bigger one of the pod.'
    ],
    table: 'Outstanding, sweet, snow-white flesh that made this the most valuable commercial fish in Canadian history, superb fried, baked or smoked. Manitoulin smoked whitefish is a regional treasure worth seeking out.',
    handling: 'Soft mouths tear, so net every decent fish rather than lifting it. Deep-summer fish suffer barotrauma from 60-plus ft, keep what you catch deep rather than releasing bloated fish.'
  },

  {
    id: 'channel-catfish',
    name: 'Channel Catfish',
    aka: ['Channel cat', 'Fiddler (small one)', 'Fork-tail cat'],
    sci: 'Ictalurus punctatus',
    family: 'North American catfish family (Ictaluridae)',
    bodyType: 'catfish',
    accent: '#5c6b73',
    tagline: 'Whiskered bulldog of warm rivers',
    status: 'Southern Ontario rivers and lakes: Grand, Thames, Ottawa and St. Lawrence rivers, Lake St. Clair and Erie',
    size: { avgIn: [18, 28], trophyIn: 34, ontRecordLb: 33.6 },
    tempF: [70, 82],
    idFeatures: [
      'Deeply forked tail, the instant separator from the round-tailed bullheads',
      'Scattered dark spots on silver-grey flanks (spots fade on big old fish)',
      'Eight barbels (whiskers), the longest at the mouth corners',
      'Slender, athletic build compared to a bullhead’s tadpole shape',
      'Curved anal fin with 24 to 29 rays; scaleless slate-blue to olive skin'
    ],
    habitat: 'Channel cats are fish of warm, fertile, flowing water: the Grand and Thames rivers, the Ottawa and St. Lawrence, Rideau system, Lake St. Clair and western Lake Erie, thinning to absent on the cold Shield and Manitoulin. They hold in river holes, outside bends, log jams and dam tailraces by day, spreading onto flats and shallow riffles to feed after dark. Current plus depth plus cover is the eternal formula.',
    depth: {
      spring: 'As rivers warm past 60 F in May and June, cats feed heavily ahead of their early-summer spawn, ganging in 6 to 15 ft holes below dams and rapids. High, dirty water concentrates them behind current breaks.',
      summer: 'Daytime fish hold in the deepest hole of each river stretch, 8 to 20 ft; at night they roam 2 to 8 ft flats, seams and riffle tails to feed. Peak season, they feed nightly like clockwork.',
      fall: 'Fish drift back to the deepest wintering holes as water drops through the 50s, feeding on warm afternoons into October. Find 15 to 25 ft river holes and you have found the population.',
      winter: 'Nearly dormant in deep holes and rarely targeted; the fishery sleeps until the spring thaw swells the rivers.'
    },
    feeding: 'Channel cats hunt by smell and taste with a body covered in taste buds, eating baitfish (alive or dead), crayfish, frogs, mussels and insect larvae. Feeding peaks from dusk through the first hours of darkness, and a warm summer rain that colours the water triggers daytime feeding too. Scent trumps sight, still or slow-moving baits that leak flavour out-fish everything.',
    presentations: [
      { name: 'Cut bait on a slip-sinker rig', detail: 'A fresh-cut sucker, shiner or chub chunk on a 4/0 to 6/0 circle hook, 1 to 3 oz no-roll or egg sinker sliding above a swivel and 12 to 18 in leader. Cast to the seam, put it in a rod holder, and let the circle hook do the setting.' },
      { name: 'Whole live or dead baitfish', detail: 'A 4 to 6 in live creek chub or dead shiner fished on bottom at the head of a hole for the biggest fish. Big cats prefer a real meal over paste baits.' },
      { name: 'Dip and stink baits', detail: 'Commercial dip bait on a rubber worm or sponge hook, drifted along the bottom of warm summer flats, deadly on eating-size fish from June through August.' },
      { name: 'Float-drifted worms', detail: 'A gob of nightcrawlers under a float, drifted down current seams in early summer, a fun, active alternative when fish are spread over shallow water.' }
    ],
    liveBait: 'Nightcrawler gobs, live chubs and fresh-cut bait are the core arsenal, fresh matters, cut bait from the same river caught that day out-fishes anything frozen. Frogs where legal are a big-fish sleeper.',
    technique: 'Read the river before you cast: find the deepest hole on the stretch, note where current funnels food into it, and set baits on the seams at the head and tail of the hole, not the dead middle. Fish rod holders with circle hooks and resist striking, let the rod load up and simply lift into the fish. Time your sessions from the last hour of light through midnight, and be willing to move after 30 biteless minutes, cats tell you quickly whether they are home. Heavier gear than you think, 20 to 30 lb line, because a 15 lb channel cat in current is one of Ontario’s hardest-pulling fish.',
    augustNotes: 'Late August is prime channel cat time in southern Ontario: rivers are warm and low, fish are concentrated in the remaining deep holes by day and spilling onto flats each evening to feed hard. Fresh cut bait fished from dusk to midnight on the Grand, Thames or Ottawa is as close to a sure thing as Ontario fishing offers this week. A late-August thunderstorm that bumps and colours the flow is a feeding bell, be on the water the evening after. Nothing here for Manitoulin anglers, this is a road-trip species, and worth the drive.',
    proTips: [
      'Fresh bait beats magic bait, catch suckers or chubs from the same water that day, and re-cut a fresh, bleeding chunk every 30 minutes as scent washes out.',
      'The tail-out of a hole feeds fish first each evening, set one bait there at sunset and move it to the head of the hole after full dark as fish push up.',
      'Circle hooks plus rod holders out-hook J-hooks and hand-held rods by a wide margin, and nearly every fish comes jaw-hooked for easy release.'
    ],
    table: 'Very good from clean waters, firm, mild fillets, especially fish under 10 lb, though check consumption guidelines on urban and industrial rivers. Skin the fillets, the skin carries the muddy taste.',
    handling: 'The dorsal and pectoral spines are serrated and mildly venomous, a puncture aches for hours, so grip from the front, palm over the pectorals on small fish, and lip-grip or cradle big ones. They have no scales but a tough hide, firm handling does no harm.'
  },

  {
    id: 'burbot',
    name: 'Burbot',
    aka: ['Ling', 'Lawyer', 'Eelpout', 'Freshwater cod', 'Loche'],
    sci: 'Lota lota',
    family: 'Cod family (Lotidae)',
    bodyType: 'catfish',
    accent: '#6d5f4b',
    tagline: 'The lake’s midnight-shift cod',
    status: 'Widespread in deep, cold lakes and northern rivers across Ontario; wildly underrated',
    size: { avgIn: [18, 26], trophyIn: 32, ontRecordLb: 17.5 },
    tempF: [34, 50],
    idFeatures: [
      'A single chin barbel, one whisker, dead centre, no other Ontario fish has it',
      'Eel-like body with a very long second dorsal and anal fin running to the tail',
      'Mottled yellow-brown camouflage over smooth, slimy skin with tiny embedded scales',
      'Rounded tail and small tubed nostrils',
      'Often confused with nothing, once seen, never forgotten'
    ],
    habitat: 'Burbot are Ontario’s only freshwater cod, living in the same deep, cold lakes as lake trout and whitefish, plus big northern rivers. They are extreme cold specialists that do their living in winter, spawning under the ice in February over sand and gravel shoals, and spending summer nearly dormant in the deepest, coldest basins. Night is their day: burbot hunt after dark across rock and sand flats, hoovering up anything slower than they are.',
    depth: {
      spring: 'Just after ice-out they linger on 20 to 50 ft structure, feeding at night. As surface water warms they slide steadily deeper.',
      summer: 'Fish sulk in 60 to 120 ft basins in the coldest water available, feeding little. They are rarely caught in summer except accidentally by deep lake trout anglers.',
      fall: 'Cooling water wakes them up: by late fall they feed at night on 20 to 50 ft flats and shoal edges, fattening toward the winter spawn.',
      winter: 'Prime time. Under the ice they roam 15 to 50 ft sand-gravel flats and hump tops at night, peaking around the February spawn. The dusk-to-midnight bite on a glow spoon is the fishery.'
    },
    feeding: 'Adult burbot are full-time fish eaters, sculpins, perch, ciscoes, smelt and crayfish, hunting by smell and lateral line in full darkness along the bottom. Feeding is intensely nocturnal and peaks in the coldest months, the exact opposite of everything else in the lake. They pin prey to the bottom with a cod’s appetite, subtlety is not in their nature.',
    presentations: [
      { name: 'Glow jigging spoon tipped with bait (ice)', detail: 'A 3/8 to 3/4 oz glow spoon tipped with a minnow head or chunk, pounded hard on bottom to raise silt and noise, then hung still 6 in up. Recharge the glow every 15 minutes; fish dusk to midnight.' },
      { name: 'Dropper rig with dead bait', detail: 'A heavy jig or bell sinker on bottom with a #2 hook dropper holding a whole dead minnow. Set it, pound it occasionally, and let scent do the work while you jig the other line.' },
      { name: 'Big soft plastics on jigs', detail: 'A 3 to 4 in white or glow paddletail on a 1/2 oz head, slow-hopped along the bottom at night in late fall from shore or boat, burbot smash it.' },
      { name: 'Set-lines with cut bait (open water, fall nights)', detail: 'A slip-sinker rig with cut sucker fished on a 20 to 40 ft flat after dark, catfishing tactics, cold-water schedule.' }
    ],
    liveBait: 'Dead bait works as well as live, whole or cut minnows, smelt and sucker chunks, because scent and vibration find burbot in the dark. Bulk minnow heads tip spoons all winter.',
    technique: 'Fish where hard-bottom flats and humps meet deep water, arrive at dusk, and make noise: pound the spoon on bottom, rattle it, puff the silt, burbot home in on commotion like the cod they are. Then pause everything 6 in off bottom, the strike is a heavy flattening of the rod, and set hard, their mouths are tough. In February, fish the tops of 15 to 30 ft shoals adjacent to basins where spawning groups gather, the night bite can be fish after fish. Bring a headlamp, a bucket, and an open mind, this is Ontario’s strangest and most rewarding ice fishery.',
    augustNotes: 'Honesty first: late August is the burbot’s deepest sleep, they are lying in 60 to 120 ft basins in the coldest water the lake owns, metabolisms idling, and the only ones caught this week are accidental guests on lake trout tubes and whitefish spoons. If one comes up from the deep on Kagawong or a Shield lake, appreciate the strangest fish in the boat, they rarely survive August capture from extreme depths, so consider keeping legal fish for the table. Mark the deep basin waypoints now, the same areas produce burbot through the ice in February. Their season is coming, it is just the mirror image of yours.',
    proTips: [
      'Burbot spawn under the ice in mid-winter, so February nights on 15 to 30 ft gravel shoals next to deep basins are the single best window of the entire year.',
      'Noise is bait: a spoon with a rattle, banged on bottom ten times before every pause, out-fishes a quiet lure two to one after dark.',
      'A second dead-stick with a whole dead minnow set 3 in off bottom converts the fish that circle your jigging commotion but will not commit.'
    ],
    table: 'Genuinely excellent, firm white cod-family flesh, poor man’s lobster when chunked, boiled in salted water and dipped in garlic butter. The huge liver is a northern-Europe delicacy; the fish freezes poorly, so eat it fresh.',
    handling: 'Burbot wrap around your arm like a slimy boa constrictor, it is harmless, just undignified. A firm grip behind the head or a landing net saves the deck, and their sandpaper tooth pads will not hurt you.'
  },

  {
    id: 'brown-bullhead',
    name: 'Brown Bullhead',
    aka: ['Bullhead', 'Mudcat', 'Mud pout', 'Barbotte (Franco-Ontarian)'],
    sci: 'Ameiurus nebulosus',
    family: 'North American catfish family (Ictaluridae)',
    bodyType: 'catfish',
    accent: '#5e503f',
    tagline: 'The pond’s whiskered night porter',
    status: 'Abundant in warm, soft-bottomed lakes, ponds and rivers across southern and central Ontario',
    size: { avgIn: [8, 12], trophyIn: 14, ontRecordLb: 3.56 },
    tempF: [70, 82],
    idFeatures: [
      'Rounded, square-ish tail, never forked (a forked tail means channel cat)',
      'Mottled brown to olive body with no spots, yellow-white belly',
      'Eight dark barbels, chin whiskers included',
      'Strongly serrated pectoral spines, the sting kids remember',
      'Chunky tadpole build, rarely over 14 in in Ontario'
    ],
    habitat: 'Bullheads thrive in the warm, weedy, mud-bottomed water most game fish merely tolerate: shallow bays, ponds, slow rivers, canals and marsh edges across southern and central Ontario, north through cottage country. They tolerate low oxygen and warm water better than nearly any native fish, burrowing into mud through droughts and winters. Day is for idling in weeds and holes; night is for vacuuming the flats.',
    depth: {
      spring: 'The classic bullhead run: as bays hit the high 50s in May, fish flood 2 to 6 ft mud flats and creek mouths, biting all evening. Shore fishing is at its best of the year.',
      summer: 'Fish spend days in 6 to 12 ft weedy holes and channels, sliding onto 2 to 6 ft flats at dusk to root for food all night.',
      fall: 'Feeding continues on warm evenings into October in 4 to 10 ft, then fish bury into deep mud for winter as temps drop through the 40s.',
      winter: 'Dormant in the mud, an occasional oddball through the ice, but effectively a closed shop until spring.'
    },
    feeding: 'Bullheads feed by smell and touch after dark, sweeping their barbels over the bottom for worms, insect larvae, snails, crayfish, dead fish and fish eggs. They feed most actively from sunset through late evening in warm, calm weather. Nothing about the presentation needs to be pretty, scent on the bottom is the entire game.',
    presentations: [
      { name: 'Worms on bottom', detail: 'A gob of garden worms on a #4 hook, one split shot or a small egg sinker, cast onto a mud flat at dusk and left alone. The definitive rig, rod in a forked stick and all.' },
      { name: 'Cut bait pieces', detail: 'A thumbnail chunk of minnow or sucker on the same bottom rig sorts out the bigger bullheads after full dark.' },
      { name: 'Float and worm at dusk', detail: 'Where weeds foul a bottom rig, hang the worm 6 in off bottom under a float. Watch it slide away sideways, that is the bite.' },
      { name: 'Dough and stink baits', detail: 'Commercial catfish paste on a treble takes fish where they are abundant, though worms honestly do it better in Ontario.' }
    ],
    liveBait: 'Worms, worms, and also worms; leftover minnows and any fresh cut bait fill in. This is the species that turned a can of dew worms into a national institution.',
    technique: 'Pick a calm evening in May or June (or any warm August night), find a mud-bottom bay or river mouth, and get baits on the bottom as the light fails, then let the fish come to you. Give a taking fish a two-count before lifting, bullheads mouth the bait as they move off, and a swallowed hook is the main hazard, so consider pinching barbs or carrying a disgorger. A lantern, lawn chairs and a bucket complete the technique, this is Ontario’s most sociable fishery and the perfect first night-fishing trip for kids. Handle each fish deliberately (see handling) and the evening stays cheerful.',
    augustNotes: 'Warm late-August nights keep bullheads on their summer schedule: days in the weedy holes, evenings rooting across 3 to 8 ft mud flats, and a worm on bottom after sunset will find them within the hour on most soft-bottomed bays. The night bite starts noticeably earlier now as sunsets shorten, be set up by 8 pm. Young-of-year fish swarm in black clouds along marsh edges this month, a sign the adults are close by. A perfect fallback plan on any warm, still evening when the fancier fish will not cooperate.',
    proTips: [
      'A dead-calm, muggy evening before a storm is the best bullhead weather of the summer, they feed like the flat is closing down.',
      'Fish two rods, one tight to the weed edge and one on open mud, bullheads patrol the boundary, and the edge rod usually wins.',
      'Flatten your barbs, bullheads swallow deep, and a barbless hook backs out in seconds instead of surgery.'
    ],
    table: 'Better than its reputation: sweet, firm pinkish fillets from clean, cool water, especially spring fish. Skin them (pliers help), and avoid harvesting from stagnant summer ponds where the muddy taste is earned.',
    handling: 'The pectoral and dorsal spines lock upright and puncture deeply, grip from the belly with your palm behind the pectoral spines, fingers safely in front of the dorsal. A sting is not dangerous, but it throbs; warm water eases it. Their skin is slippery, a dry rag for gripping (then wet hands for released fish) keeps things civil.'
  }
];
