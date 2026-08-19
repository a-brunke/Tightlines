// Filleting and Shore Lunch: fish care, filleting guides, and camp recipes
// for Ontario freshwater species.

export const FILLET = {
  care: {
    title: 'From Net to Table',
    sections: [
      {
        h: 'Dispatch quickly, bleed immediately',
        body: 'Decide at the net whether a fish is coming home; a fish that swims in the livewell for hours in July water makes soft, muddy-tasting fillets. Dispatch with one firm rap from a fish bonker (a short club or heavy stick) on the top of the skull just behind the eyes, then bleed it right away: lift the gill plate and cut through two or three gill arches with the knife tip, or make a single cut across the throat latch between the gills. Let the fish bleed out in the water or a bucket for two to three minutes. A bled fillet is whiter, firmer, and keeps noticeably longer.',
      },
      {
        h: 'Keep the cold chain on the boat',
        body: 'Warm fish spoil in hours, and a hot livewell is not cold storage. The gold standard is an ice slurry: a cooler with roughly equal parts ice and water, which pulls body heat out far faster than ice alone and chills the fish to near 0 C within 20 to 30 minutes. Get dispatched, bled fish into the slurry immediately and keep the cooler shut and out of the sun. If you are filleting the same day, keep whole fish on ice rather than gutting on the boat; once home, fillets go on ice in a sealed bag so they never soak in meltwater.',
      },
      {
        h: 'Ontario transport rules: keep fillets countable and identifiable',
        body: 'Ontario law requires that fish being transported can be identified by species and counted against your limit. In practice: leave a patch of skin at least 2.5 cm by 2.5 cm attached to every fillet, do not freeze fillets together into a single block or grind, chop, or wrap them so they cannot be counted, and where a size limit applies keep the fish whole or in a state where length can still be measured. Remember that possession limits count everything: fish in the cooler, the freezer at home, and the pan at camp all count toward your sport (S) or conservation (C) licence limit. Check the current Ontario Fishing Regulations Summary for your zone before the trip.',
      },
      {
        h: 'A sharp knife is a safe knife',
        body: 'Most filleting cuts happen when a dull blade skates off skin or bone instead of biting, so hone your knife on a fine steel or ceramic rod every few fish and sharpen it properly each season. Use a flexible 6 to 7.5 in fillet blade for walleye and pike and a 4 to 6 in blade for perch and panfish. Cut on a stable board with a wet cloth or clamp under it, keep the off hand behind the spine of the blade or flat on top of the fish (never in front of the edge), and consider a cut-resistant glove on the holding hand, especially in a rocking boat or when your hands are cold and wet.',
      },
    ],
  },

  guides: [
    {
      id: 'walleye',
      name: 'Filleting a Walleye',
      level: 2,
      yield: 'Two boneless skinless fillets plus two cheeks, about 40% of body weight',
      steps: [
        {
          title: 'Position the fish and make the head cut',
          body: 'Lay the walleye on its side, back toward you, head to your knife hand. Lift the pectoral fin and make an angled cut from the top of the head, behind the gill plate and pectoral fin, down to the backbone, following the line of the gill plate. Stop when the blade touches the spine; do not cut through it.',
        },
        {
          title: 'Run the blade along the backbone',
          body: 'Turn the blade flat so the edge faces the tail, riding on top of the backbone. Slice toward the tail in smooth strokes, letting the spine guide the blade; you will feel it ticking over the bones of the back. When the blade reaches the rib cage, keep the edge angled a few degrees upward and ride over the ribs rather than chopping through them, then continue past the vent and out at the tail.',
        },
        {
          title: 'Free the fillet from the ribs',
          body: 'Fold the fillet open like a book, still attached along the belly. Slip the knife tip under the rib cage where it meets the spine and shave the ribs free with short strokes, angling the blade slightly into the bones so meat stays on the fillet. Cut the fillet free at the belly edge and set it skin-down.',
        },
        {
          title: 'Repeat on the other side',
          body: 'Flip the fish and repeat the head cut, backbone run, and rib removal. The second side is harder because the fish sits flatter; steady the head with your off hand placed on top, fingers away from the blade path.',
        },
        {
          title: 'Skin each fillet',
          body: 'Lay the fillet skin-down, tail end toward you. Cut down through the meat to the skin 1/2 in from the tail end, then turn the blade nearly flat, about 20 to 30 degrees to the board. Grip the tail tab of skin firmly (pliers or a fork help) and work the blade toward the far end with a slight sawing motion, pulling the skin side to side against the blade rather than pushing the knife. Leave the required patch of skin on if you are transporting fillets.',
        },
        {
          title: 'Take the cheeks',
          body: 'On each side of the head is a scallop-sized disc of meat below and behind the eye. Cut around the circular patch with the knife tip, then peel the meat out of the skin with your thumb. On a 2 lb walleye each cheek is bite-sized; on bigger fish they are the best two bites on the fish.',
        },
        {
          title: 'Trim and chill',
          body: 'Trim off any belly fat, the thin gray line of red muscle if you plan to freeze, and any stray rib tips your fingertips find. Pat fillets dry, do not rinse them in lake water, and get them into a sealed bag on ice.',
        },
      ],
      tips: [
        'Walleye have needle-sharp gill plate edges and dorsal spines; fold the dorsal fin flat and handle from the belly side.',
        'Run your fingertips along every fillet from head end to tail; missed bones feel like a dotted ridge and pull out with pliers, against the direction they point.',
        'A flexible 7 in blade follows the rib curve far better than a stiff hunting knife.',
      ],
    },

    {
      id: 'northern-pike',
      name: 'Filleting a Northern Pike (5-Fillet Y-Bone Method)',
      level: 3,
      yield: 'Five boneless pieces, about 35% of body weight, no Y-bones',
      steps: [
        {
          title: 'Know the map before you cut',
          body: 'Pike have one extra row of bones that walleye do not: the Y-bones, a row of forked bones angling up and forward from the spine into the flesh of the back, sitting just above the lateral line from the head back to about the vent. The whole method is built around them: two back straps come off above the Y-bones, two belly fillets come off below them, and the tail section behind the vent has no Y-bones at all, which makes five boneless pieces and one skeleton with the Y-bones still in it. Wipe the slime off with paper towel and lay the pike belly-down on the board.',
        },
        {
          title: 'Make the head cut',
          body: 'With the pike belly-down, cut straight down behind the head and gill plates until the blade touches the spine, then stop. This cut is the starting wall for both back straps. Run a fingertip along the back on either side of the dorsal ridge; about 1/2 to 3/4 in down you can feel the tips of the Y-bones as a faint dotted line. That line is your depth limit.',
        },
        {
          title: 'Remove back strap number one',
          body: 'Insert the knife at the head cut just to one side of the dorsal ridge, blade angled slightly outward, and slice rearward toward the tail, cutting about 3/4 in deep until you feel the edge ticking along the tops of the Y-bones. Follow that ticking feeling in long strokes all the way back to the front of the dorsal fin, keeping the blade riding on the bone tips the whole way. Then come back and make a second cut from the outside of the back angled inward to meet the first at the Y-bone line, and lift the strap free. You now have a long boneless loin off the top of the back, above the lateral line.',
        },
        {
          title: 'Remove back strap number two',
          body: 'Repeat the same two cuts on the other side of the dorsal ridge: the deep cut riding the Y-bone tips, then the angled cut to meet it. When both straps are off, the tops of the Y-bones are exposed in a neat row along the back and you can see exactly what you are avoiding. That is the second of the five pieces.',
        },
        {
          title: 'Take the two belly fillets from below the Y-bones',
          body: 'Lay the pike on its side. Feel again for the Y-bone tips, now visible along the cut edge just above the lateral line. Enter the blade just below that line behind the pectoral fin and slice back toward the vent, angling the blade slightly downward so it passes under the bottoms of the Y-bones; you will feel light ticking if you are riding them correctly. At the rib cage, keep the blade over the ribs and shave them out as with a walleye, then cut the fillet free at the belly and at the head end. Flip the fish and repeat on the other side. Pieces three and four are off, and every Y-bone is still attached to the skeleton.',
        },
        {
          title: 'Take the tail section',
          body: 'Everything behind the vent is free of Y-bones, so the tail fillets are cut exactly like a walleye. Cut down to the spine just behind the vent, turn the blade flat toward the tail, and run it along the backbone to the tail on each side. This tail meat is the fifth piece (two small fillets that count as one section). Some anglers simply cut the whole tail off behind the vent first and fillet it on its own; either way works.',
        },
        {
          title: 'Skin everything and do the fingertip check',
          body: 'Skin all five pieces with the fillet skin-down, blade at 20 to 30 degrees, gripping the tail tab; pike skin is strong and peels cleanly but carries a strong flavour, so do not leave it on for cooking (keep the small identification patch for transport only). Then run your fingertips slowly along every piece in both directions. A properly executed job finds nothing; if you feel a dotted ridge in a back strap or belly fillet, you cut too deep or too shallow at the Y-bone line, and the bones pull out with needle-nose pliers.',
        },
      ],
      tips: [
        'Learn on a pike of 3 to 5 lb (about 24 to 28 in). The Y-bones in small hammer-handles are too fine to feel, and giant pike are better released anyway.',
        'The knife does the finding: keep the edge lightly ticking on bone through the whole cut. Silence means you have drifted into meat and are either wasting fillet or about to bury bones in it.',
        'Expect to leave meat on the skeleton the first few times; a 65% yield of guaranteed boneless pike beats a 90% yield full of Y-bones.',
        'Pike slime is heavy; wipe the fish and your knife handle down before starting, and rinse the board between fish.',
      ],
    },

    {
      id: 'yellow-perch',
      name: 'Filleting a Yellow Perch',
      level: 1,
      yield: 'Two boneless skinless fillets, about 35 to 38% of body weight',
      steps: [
        {
          title: 'Use the right blade and hold',
          body: 'A 4 to 6 in flexible blade suits a 10 in perch; a big knife wastes half the fish. Lay the perch on its side, fold the spiny dorsal fin down flat with your palm, and hold the head with thumb on the gill plate, fingers clear of the cutting line.',
        },
        {
          title: 'Head cut to the spine',
          body: 'Cut behind the gill plate and pectoral fin at a slight angle toward the head, down to the backbone. On a perch this is barely an inch of cut; stop the instant you feel the spine.',
        },
        {
          title: 'Run the backbone to the tail, but stop at the skin',
          body: 'Turn the blade toward the tail and slice along the backbone, riding over the rib cage with the blade angled a hair upward, past the vent to the tail. At the tail, stop just before the fillet comes free, leaving it attached by a 1/2 in hinge of skin.',
        },
        {
          title: 'Flip and skin in one move',
          body: 'Fold the fillet over the tail hinge so it lies skin-down on the board, meat up. Slip the blade into the corner between meat and skin at the hinge, flatten it to 20 degrees, and slice away from you along the board; the skin stays on the fish and the fillet comes free skinless. This flip-and-skin trick is the whole reason to leave the hinge.',
        },
        {
          title: 'Shave out the ribs and repeat',
          body: 'Lift the thin rib cage at its top edge with the knife tip and shave it out in one shallow scoop, taking as little meat as possible. Flip the fish and repeat the whole sequence on the second side. With practice a perch takes under a minute.',
        },
      ],
      tips: [
        'Perch dorsal and gill spines draw blood; fold fins flat before gripping and keep a towel handy.',
        'Cold, firm perch fillet far easier than warm ones; fillet straight out of the ice slurry.',
        'For big batches an electric fillet knife with an 8 in blade speeds things up, but learn the manual cuts first so you know where the bones are.',
      ],
    },

    {
      id: 'panfish',
      name: 'Filleting Panfish (Bluegill, Sunfish, Crappie)',
      level: 1,
      yield: 'Two boneless skinless fillets, about 30 to 35% of body weight',
      steps: [
        {
          title: 'Sort your fish first',
          body: 'Fillet the biggest fish first while everything is cold, and keep only fish that give a fillet worth the effort: bluegill and sunfish 8 in and up, crappie 10 in and up. Smaller fish are better released to grow.',
        },
        {
          title: 'Angle the head cut behind the gill',
          body: 'Lay the fish on its side and make the entry cut behind the gill plate, angled toward the head to save the shoulder meat, down to the backbone. On deep-bodied bluegill the cut curves with the gill plate like a letter C.',
        },
        {
          title: 'Ride the spine, over the ribs, to the tail',
          body: 'Turn the blade toward the tail and slice along the backbone, letting the blade tick over the bones. Crappie flesh is soft, so use long light strokes rather than pressure or you will shred the fillet. Ride over the rib cage rather than through it, continue past the vent, and either cut the fillet fully free or leave a tail hinge for the flip-and-skin move described in the perch guide.',
        },
        {
          title: 'Skin the fillet',
          body: 'Skin-down, grip the tail end, blade flat at about 20 degrees, and saw gently toward the far end while pulling the skin against the edge. Leave the 2.5 cm skin patch on if the fillets are travelling. Crappie skin is thin; if the blade keeps cutting through it, drop the angle flatter and slow down.',
        },
        {
          title: 'Remove the ribs and check your work',
          body: 'Shave out the small rib cage with the knife tip, taking the thin belly flap with it if it is fatty. Run a fingertip along the fillet; panfish rarely hide bones once the ribs are out, so anything you feel is a rib tip you missed. Repeat everything on the other side, then straight into a bag on ice.',
        },
      ],
      tips: [
        'A batch of panfish is where knife maintenance shows: hone every 8 to 10 fish and the last fillet cuts like the first.',
        'Keep fillets from different species in separate labelled bags; limits and identification rules apply per species while you are in possession.',
        'Crappie fillets are thin and cook in half the time of walleye; sort them separately for the pan.',
      ],
    },
  ],

  recipes: [
    {
      id: 'classic-shore-lunch',
      name: 'Classic Cast Iron Shore Lunch',
      serves: '4',
      ingredients: [
        '2 lb fresh walleye or perch fillets (about 8 fillets), patted dry, cut into palm-sized pieces',
        '1 cup all-purpose flour',
        '1/2 cup fine cornmeal',
        '1 tsp salt, plus more to finish',
        '1/2 tsp black pepper',
        '1 tsp paprika',
        'Pinch of cayenne (optional)',
        'Canola oil or lard, enough for 1/2 in depth in the pan (about 2 cups)',
        '4 medium potatoes, sliced 1/4 in thick',
        '1 large onion, sliced',
        '1 lemon, cut in wedges',
        '12 in cast iron skillet (two pans if you have them: one for potatoes, one for fish)',
      ],
      steps: [
        'Build the fire early and let it burn down to a strong bed of coals with low flame; you want steady heat, not a bonfire licking the pan. Set the skillet on a grate or flat rocks over the coals and add oil to 1/2 in deep.',
        'Start the potatoes and onions first in the second pan (or first, in the single pan) with a few spoonfuls of oil, a good pinch of salt, and a lid or foil cover. Stir every few minutes; they take 20 to 25 minutes and the fish takes 6, so the fish always goes last.',
        'Mix flour, cornmeal, salt, pepper, paprika, and cayenne in a large zip bag or a pie plate. Keep the fillets cold and dry until the moment they hit the dredge; wet fillets make gummy crust.',
        'Heat check without a thermometer: flick a pinch of dredge into the oil, and it should sizzle instantly and dance. Dip the handle end of a wooden spoon in; a steady stream of small bubbles means ready (about 175 C / 350 F). A bread cube should turn golden in about 60 seconds. If the oil smokes, it is too hot; pull the pan off the coals for a minute.',
        'Drop 3 or 4 fillet pieces in the bag, shake to coat, shake off the excess, and lay them into the oil away from you. Do not crowd the pan; crowding drops the oil temperature and the crust goes pale and greasy. Fry in batches.',
        'Fry 2 to 3 minutes per side, turning once, until the crust is deep golden and the fish flakes when pressed with a fork. Thin perch pieces may need only 90 seconds per side.',
        'Drain on a rack, split log, or paper over a plate; never stack hot fried fish or the crust steams soft. Salt immediately while glistening.',
        'Serve fish on top of the potatoes and onions with a hard squeeze of lemon. Let the oil cool completely, then strain it into a container and pack it out; never pour oil on the ground or in the lake.',
      ],
    },
    {
      id: 'foil-packet',
      name: 'Foil Packet Fish and Potatoes',
      serves: '2',
      ingredients: [
        '1 lb fresh fillets (walleye, pike, or perch)',
        '2 medium potatoes, sliced 1/4 in thick',
        '1 small onion, sliced into rings',
        '4 tbsp butter, cut in pats',
        '1 lemon, half in thin slices, half in wedges',
        '1 tsp salt, 1/2 tsp black pepper',
        '1 tsp dried dill or a handful of fresh',
        'Heavy-duty aluminum foil, four 18 in sheets',
      ],
      steps: [
        'Let the fire burn down to coals; foil packets want coals, not flame, or the bottom layer chars before the fish cooks.',
        'For each packet, stack two sheets of foil (double-wrapping prevents leaks and burn-through). Butter the center of the top sheet.',
        'Layer in order: potato slices in a single overlapping bed, onion rings, a pinch of salt and pepper, then the fillets on top so they steam gently above the potatoes. Season the fish, add the dill, lay lemon slices over, and dot everything with the butter pats.',
        'Fold the long foil edges together over the food and roll down in three tight folds, then roll up the ends, leaving a little air space inside for steam. A sealed packet puffs as it cooks; that steam does the work.',
        'Set packets on the coals at the edge of the fire, not the center. Cook 12 to 15 minutes total, rotating each packet a half-turn with tongs at the halfway mark. Do not flip potato-side up.',
        'Pull one packet and open it carefully away from your face; escaping steam scalds. The potatoes should give to a fork and the fish should be opaque and flake apart. If not, reseal and give it 4 more minutes.',
        'Eat straight out of the foil with the lemon wedges. Packets pack out clean and there is no pan to wash.',
      ],
    },
  ],
};
