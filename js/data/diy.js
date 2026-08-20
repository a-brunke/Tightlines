// Lure Workshop: DIY lure and tackle building projects.
// Ordered easy to hard. All costs are approximate CAD component costs
// when buying materials in small bulk (25 to 100 packs).

export const DIY = [
  {
    id: 'snelled-hook',
    name: 'Snelled Hooks in Bulk',
    level: 1,
    time: '20 min for a dozen',
    cost: '$0.30 per snell',
    targets: 'Walleye, perch, panfish, catfish (any bait rig)',
    why: 'A snell pulls in a straight line off the hook shank, so hooksets drive the point home instead of rolling the eye. Pre-tied packs cost $1 to $2 per hook; you can tie a winter\'s supply for pennies each and pick the exact hook and leader you trust.',
    materials: [
      { item: 'Octopus hooks, size #4 (perch) to #2 (walleye), offset eye, e.g. Gamakatsu or VMC, 25 pack', qty: '12 hooks' },
      { item: 'Monofilament leader material, 10 lb test (8 lb for perch, 14 lb for catfish)', qty: '18 in per snell' },
      { item: 'Small foam snell holder or a strip of pipe insulation to store finished rigs', qty: '1' },
    ],
    tools: ['Line nippers or sharp scissors', 'Optional: snell knot tool (a bare 3 in finish nail works)'],
    steps: [
      {
        title: 'Cut and thread the leader',
        body: 'Cut an 18 in length of 10 lb mono. Pass 4 in of the tag end through the hook eye from the point side of the hook, so the line exits along the shank. Pinch the tag against the shank pointing toward the bend, leaving a small loop of line hanging below the eye.',
      },
      {
        title: 'Wrap the shank',
        body: 'Hold the tag and shank together with your left thumb and forefinger just below the eye. With your right hand, take the hanging loop and wrap it around both the shank and the trapped tag end, working from the eye toward the bend. Make 6 to 8 tight, touching wraps. Keep each wrap snug against the last; gaps weaken the snell.',
      },
      {
        title: 'Close the knot',
        body: 'Still pinching the wraps so they cannot unwind, pull the standing (long) end slowly until the loop disappears under the wraps. Moisten the wraps with saliva, then pull the standing line and the tag end in opposite directions to seat the knot hard. The wraps should form a neat spiral collar on the shank.',
      },
      {
        title: 'Test and trim',
        body: 'Bury the hook point in a scrap of wood or cork and pull firmly on the standing line; a good snell will not slip. Trim the tag to 1/8 in. Check that the line leaves the eye on the point side of the hook, which gives the snell its self-setting geometry.',
      },
      {
        title: 'Finish the rig end',
        body: 'Tie a perfection loop or double overhand loop in the far end of the leader for quick loop-to-loop attachment, sized about 1 in. Wind each finished snell around a foam holder, hook the point into the foam, and label the holder with hook size and line test.',
      },
    ],
    variations: [
      'Perch and crappie: size #6 octopus hook on 6 to 8 lb mono, 12 in snell.',
      'Crawler harness: snell two #2 hooks on the same 40 in leader, spaced 2.5 to 3 in apart, then add a #3 Colorado blade on a clevis and five 4 mm beads above the front hook.',
      'Catfish and carp: 2/0 octopus or circle hook on 20 lb abrasion-resistant mono. Do not snell circle hooks with the wrap over the eye reversed; the line must still exit on the point side.',
    ],
  },

  {
    id: 'fluoro-leader',
    name: 'Fluorocarbon Leaders with Swivel and Snap',
    level: 1,
    time: '10 min per leader',
    cost: '$0.90 per leader',
    targets: 'Walleye, bass, trout (clear water, line-shy fish)',
    why: 'A tied fluorocarbon leader with a quality ball bearing swivel and snap outperforms the packaged wire-and-crimp store leaders that spook clear-water fish. Building your own lets you match leader test and length to the species instead of settling for one generic size.',
    materials: [
      { item: 'Fluorocarbon leader material: 6 lb (trout), 8 to 10 lb (walleye), 12 to 15 lb (bass)', qty: '24 to 36 in per leader' },
      { item: 'Ball bearing swivel, size #10 (trout/walleye) or #7 (bass), roughly 25 to 40 lb rated', qty: '1' },
      { item: 'Duo-lock or cross-lock snap, size 0 (trout) to size 1 (walleye/bass)', qty: '1' },
    ],
    tools: ['Line nippers', 'Optional: knot-pulling tool or a dowel to protect fingers when seating knots'],
    steps: [
      {
        title: 'Cut the blank to length',
        body: 'Cut fluorocarbon to the working length plus 8 in for knots: 30 in blank for a 24 in trout leader, 44 in blank for a 36 in walleye leader. Fluorocarbon has memory, so pull the blank once between thumb and a soft cloth to straighten it.',
      },
      {
        title: 'Tie the swivel end',
        body: 'Attach the ball bearing swivel with an improved clinch knot: pass the tag through the swivel eye, make 5 wraps around the standing line (4 wraps for 15 lb), pass the tag through the small loop at the eye, then back through the big loop just created. Moisten thoroughly and seat slowly; fluorocarbon burns if pulled dry. Trim to 1/16 in.',
      },
      {
        title: 'Tie the snap end with a loop knot',
        body: 'For lures that need free action (jerkbaits, jigs), tie the snap on with a non-slip loop knot: make an overhand knot 4 in from the tag end, pass the tag through the snap eye and back through the overhand knot the same side it exited, wrap the tag 4 times around the standing line, then bring it back through the overhand knot once more. Seat wet. Aim for a finished loop of 1/4 to 3/8 in.',
      },
      {
        title: 'Inspect and proof-test',
        body: 'Run the finished leader through your fingers; any rough spot or curl at a knot means heat damage, so retie. Hook the snap on a fixed object and pull to roughly half the line test. A leader that survives that pull will not fail on a fish.',
      },
      {
        title: 'Store flat and dark',
        body: 'Coil leaders in 4 in loops and store in labelled zip bags or a leader wallet, out of sunlight. UV slowly weakens fluorocarbon. Mark each bag with test, length, and date tied; retire leaders older than two seasons.',
      },
    ],
    variations: [
      'Trout trolling: 6 lb fluoro, 40 to 60 in, size #12 swivel, no snap; tie direct to the lure with the loop knot instead.',
      'Walleye jigging: 8 lb fluoro, 36 in, swivel only at the top, loop knot direct to the jig for maximum action.',
      'Bass around rock and wood: 15 lb fluoro, 24 in, size #7 swivel and size 1 snap for quick lure changes.',
    ],
  },

  {
    id: 'wire-leader',
    name: 'Pike and Muskie Wire Leaders',
    level: 1,
    time: '10 min per leader',
    cost: '$1.25 per leader',
    targets: 'Northern pike, muskie',
    why: 'Store wire leaders use bargain snaps and swivels that fail exactly when a 40 in fish is boatside. Building your own costs less than half as much and lets you use ball bearing swivels and welded-quality components rated far above the wire.',
    materials: [
      { item: '7-strand stainless steel wire, 30 lb test, nylon coated or bare (pike); 60 to 90 lb (muskie)', qty: '12 to 18 in per leader' },
      { item: 'Crimp sleeves matched to wire: size #1 double-barrel aluminum or copper, 0.8 mm ID for 30 lb wire; 1.0 to 1.3 mm ID for 60 to 90 lb', qty: '2 per leader' },
      { item: 'Ball bearing swivel, size #4, 75 lb rated (pike); size #1, 150 lb (muskie)', qty: '1' },
      { item: 'Stay-lok or cross-lock snap, size 3.5, 75 lb (pike); size 5, 150 lb (muskie)', qty: '1' },
      { item: 'Alternative for the twist method: single-strand stainless wire, #9 gauge (0.022 in dia, about 105 lb) for muskie', qty: '14 in per leader' },
    ],
    tools: ['Hand crimping tool with sized cavities (not flat pliers)', 'Wire cutters rated for stainless', 'Round-nose pliers (twist method)'],
    steps: [
      {
        title: 'Choose your method by wire type',
        body: 'Crimping is the correct connection for 7-strand cable; a haywire twist is the correct connection for single-strand wire. Do not haywire-twist 7-strand (the strands loosen) and do not crimp single-strand (it slips). Both methods below produce a leader with a swivel at the line end and a snap at the lure end.',
      },
      {
        title: 'Crimp method: cut and thread',
        body: 'Cut a 14 in length of 30 lb 7-strand for a finished 12 in pike leader. Slide one crimp sleeve on, thread the tag through the swivel eye, then pass the tag back through the sleeve leaving a loop about 1/4 in long. For extra security, pass the tag through the sleeve a third time (a double-pass crimp).',
      },
      {
        title: 'Crimp method: set the crimps',
        body: 'Position the sleeve 1/16 in from the swivel eye so the loop can articulate. Crimp twice along the sleeve using the crimper cavity matched to the sleeve size, leaving a bare 1/32 in at each end of the sleeve uncrimped so the wire is not nicked at the exit points. Trim the tag flush. Repeat at the other end with the snap.',
      },
      {
        title: 'Haywire twist method: form the loop',
        body: 'With single-strand wire, pass 4 in of tag through the swivel eye and bend it back to cross the standing wire at roughly 90 degrees. Holding the loop with round-nose pliers, twist the tag and standing wire around each other in an open X pattern for 3.5 twists. Both wires must wrap around each other equally; if the tag just spirals around a straight standing wire, the twist will pull out.',
      },
      {
        title: 'Haywire twist method: barrel wraps and break-off',
        body: 'After the 3.5 haywire twists, bend the tag to 90 degrees and make 4 to 5 tight barrel wraps around the standing wire, each wrap touching the last. Do not cut the tag; bend the last 1/2 in into a small crank handle, then rock it back and forth until the wire fatigues and snaps off flush. A cut tag leaves a burr that slices hands and nets; a broken tag is smooth.',
      },
      {
        title: 'Finish and test',
        body: 'Repeat the connection at the lure end with the snap. Finished length: 8 to 12 in for pike casting, 12 to 14 in for muskie baits. Pull-test each leader against a spring scale or a solid pull to at least 20 lb before it goes in the box.',
      },
    ],
    variations: [
      'Casting spoons for pike: 9 in leader, 30 lb 7-strand, size #4 ball bearing swivel to stop line twist from the spoon wobble.',
      'Muskie bucktails: 14 in single-strand #9 wire with haywire twists, 150 lb snap; single-strand tracks straighter at high retrieve speeds.',
      'Fluoro-shy option: 130 lb fluorocarbon bite leader, 12 in, crimped with 1.3 mm sleeves, for ultra-clear water where even thin wire cuts the strike rate.',
    ],
    safety: 'Cut wire ends are needle sharp; wear safety glasses when cutting and breaking off tags, and sweep up every clipping. Keep fingers clear of the crimper jaws.',
  },

  {
    id: 'walleye-harness',
    name: 'Walleye Spinner Harness (Crawler Harness)',
    level: 1,
    time: '8 min per harness',
    cost: '$1.20 per harness',
    targets: 'Walleye (the Lake Kagawong staple), also perch and pike',
    why: 'The spinner harness behind a bottom bouncer is the number one summer walleye presentation in Ontario, and store harnesses run $4 to $6 each while snagging bottom all day. Tie a dozen of your own in an evening, in exactly the blade and bead colours the lake is asking for.',
    materials: [
      { item: '15 lb fluorocarbon or mono leader material', qty: '48 in per harness' },
      { item: 'Octopus (beak) hooks, size #2, short shank needle point (L1B style)', qty: '2' },
      { item: 'Round or faceted beads, 4 to 5 mm: chartreuse, gold, orange, glow, pearlescent', qty: '5 or 6' },
      { item: 'Quick-change clevis (swap blades without retying) or folded clevis size #1', qty: '1' },
      { item: 'Colorado spinner blade #3 or #4: gold, copper, chartreuse, firetiger; hammered gold is the Ontario classic', qty: '1' },
      { item: 'Optional: pill-style rig float to lift the bait off snaggy bottom', qty: '1' },
      { item: 'Optional: size #7 barrel swivel for the rod end loop', qty: '1' },
    ],
    tools: ['Line clippers', 'Snell tyer (optional but makes step 1 fast)', 'Foam board or Tackle Buddy spools for storage'],
    steps: [
      {
        title: 'Snell the trailing hook',
        body: 'Cut 48 in of leader. Snell the first #2 octopus hook to the very end of the line (the snell knot is in the Knots section, and a $5 snell tyer makes it a 20 second job). The snell pulls the hook point up and in line for solid hooksets on light walleye bites.',
      },
      {
        title: 'Snell the front hook',
        body: 'Slide the second hook on and snell it 2.5 to 3 in above the first. That spacing fits a whole nightcrawler: front hook through the nose, back hook near the collar. For leech or minnow harnesses, skip this step and run a single hook.',
      },
      {
        title: 'Thread the beads',
        body: 'Slide on 5 or 6 beads above the front hook. Colour rules of thumb: chartreuse and gold in stained water, orange and copper on cloudy days, pearl and glow over deep fish. A single larger bead in the middle of the stack gives the classic look and protects the knot from the spinning clevis.',
      },
      {
        title: 'Mount the blade on the clevis',
        body: 'Put the blade on the clevis with the cupped (concave) face toward the hooks, so the blade rides convex-side-forward and spins on the slightest pull. Slide the clevis on above the beads. A quick-change clevis lets you swap from Colorado to Indiana to willowleaf on the water without retying, which is worth the extra 20 cents.',
      },
      {
        title: 'Tie the top loop',
        body: 'Measure 40 to 44 in from the trailing hook and tie a perfection loop or double-overhand loop (or a #7 barrel swivel) for the bottom bouncer snap. Trim the tag.',
      },
      {
        title: 'Wrap and label',
        body: 'Wind each finished harness around a foam board or harness spool and note the blade size and colour. A dozen harnesses in a zip bag weighs nothing and covers every colour situation the week can throw at you.',
      },
    ],
    variations: [
      'Slow death rig: a single Mustad 33862 slow death hook with half a crawler threaded on corkscrews seductively at 0.8 to 1.2 mph, deadly when fish swat at standard harnesses.',
      'Willowleaf blade version runs with less lift and thump for clear water and faster trolling; deep cup Colorado maximizes vibration for stained water.',
      'Glow bead and glow blade version for the 20 to 35 ft late-August fish and the last hour of light.',
    ],
  },

  {
    id: 'inline-spinner',
    name: 'Inline Spinner',
    level: 1,
    time: '15 min',
    cost: '$1.50 per lure',
    targets: 'Pike, bass, trout, walleye',
    why: 'An inline spinner is the classic first lure build: five components on a wire shaft, and yours will fish exactly like the $6 to $9 name-brand versions. Once you can form a wrapped loop you can also repair every bent spinner in your box.',
    materials: [
      { item: 'Stainless spinner shaft wire, .026 in dia, 6 in straight lengths (or pre-formed shafts with a wrapped eye)', qty: '1' },
      { item: 'French blade, #3, nickel or brass (the classic inline blade; save Colorados for worm harnesses)', qty: '1' },
      { item: 'Stirrup clevis, size 2, stainless', qty: '1' },
      { item: 'Hollow brass beads, 3 mm', qty: '2' },
      { item: 'Solid brass spinner body, 3/16 oz, or three 4 mm beads plus a 1/4 in brass bullet body', qty: '1' },
      { item: 'Treble hook, size #6, round bend', qty: '1' },
    ],
    tools: ['Round-nose pliers', 'Flush wire cutters', 'Optional: wire former (makes wrapped loops faster and neater)'],
    steps: [
      {
        title: 'Form the bottom loop and capture the treble',
        body: 'Grip the wire 1.5 in from one end with round-nose pliers and bend it back 180 degrees around one plier jaw to form a loop about 1/8 in inside diameter. Slip the #6 treble onto the open loop before closing it. Hold the loop flat with the pliers and wrap the tag end around the standing wire 2 to 3 tight turns, then cut the tag flush. This wrapped loop is the strength of the whole lure.',
      },
      {
        title: 'Stack the body',
        body: 'Slide components down the shaft to the bottom loop in this order: one 3 mm brass bead (a bearing between hook loop and body), the 3/16 oz brass body with its tapered end downward, then the second 3 mm bead. The top bead is the bearing the clevis spins against, so it must sit above the body.',
      },
      {
        title: 'Mount the blade on the clevis',
        body: 'Hang the #3 French blade on the size 2 clevis with the blade\'s concave (cupped) face toward the shaft and the narrow end of the blade at the clevis. Slide both clevis legs onto the shaft. Give it a test flick: the blade must swing freely around the shaft without binding on the bead below it. French blades run at about 45 degrees with a strong mid-speed thump, which is exactly what an inline wants.',
      },
      {
        title: 'Form the top loop',
        body: 'Measure 3/16 in of free shaft above the clevis for blade clearance, then grip the shaft there with round-nose pliers. Bend the wire 90 degrees, then wrap it around a plier jaw to form the line-tie loop. Wrap the tag 2 to 3 turns around the standing wire below the loop, keeping wraps tight and touching, and cut flush. Total finished lure: about 2 1/4 in.',
      },
      {
        title: 'Tune and test',
        body: 'Pull the spinner through a sink or bathtub. The blade should start spinning instantly at slow speed. If it sticks, open the clevis legs slightly, check the top bead spins freely, and confirm the blade hangs cup-in. If the lure spins as a whole and twists line, the blade is too big for the body weight; drop to a #2 blade or a heavier body.',
      },
    ],
    variations: [
      'Brook trout size: #2 French blade, 1/8 oz body, #8 treble, silver blade with a red bead.',
      'Pike size: #4 or #5 French blade, 3/8 oz body, #2 treble dressed with white bucktail (see the bucktail jig project for tying method).',
      'Extra thump for stained water: swap to an Indiana blade, gold, with chartreuse body beads and a #6 single siwash hook for easier releases.',
    ],
  },

  {
    id: 'bucktail-jig',
    name: 'Bucktail Jig',
    level: 2,
    time: '20 min per jig, faster in batches',
    cost: '$1.20 per jig',
    targets: 'Walleye, smallmouth bass, lake trout, pike',
    why: 'Hand-tied bucktails breathe in the water in a way soft plastics cannot, and store-bought ones run $4 to $7 each. Tying your own also lets you match hair density to the water: sparse for finesse, full for cold water and current.',
    materials: [
      { item: 'Round or ball jig heads with barbed collar, 1/4 oz and 3/8 oz, 2/0 hook, painted or plain', qty: '1 per jig' },
      { item: 'Bucktail (natural white plus one dyed tail: chartreuse or black)', qty: '3 bundles per jig' },
      { item: 'Flat waxed nylon thread, 210 denier, white or red', qty: '1 spool' },
      { item: 'Head cement or clear hard nail polish', qty: '2 coats' },
      { item: 'Optional: 6 to 8 strands of Krystal Flash per jig', qty: 'optional' },
    ],
    tools: ['Fly-tying vise (or locking forceps clamped in a bench vise)', 'Bobbin holder', 'Sharp scissors', 'Fine comb for removing underfur'],
    steps: [
      {
        title: 'Lay a thread base',
        body: 'Clamp the jig hook in the vise, head to the left. Start the thread on the collar with 5 overlapping wraps trapping the tag, then wrap a smooth single-layer base covering the whole collar, about 10 to 12 wraps. Thread tension should be firm enough to flex the bobbin; bucktail is hollow and needs pressure to lock in.',
      },
      {
        title: 'Cut and clean the first bundle',
        body: 'Cut a bundle of hair from the middle of the tail about half a pencil in thickness. Hold the tips and comb out the fuzzy underfur from the butts. Even up the tips by hand-stacking: pull out the longest hairs and lay them back with their tips level with the rest. Do not aim for perfectly even tips; a slight stagger gives a fuller action.',
      },
      {
        title: 'Measure and tie in',
        body: 'Measure the bundle so the tips extend past the hook bend by about the length of the hook gap, giving a finished skirt roughly 2 to 2.5 times the collar length. Trim the butts square. Hold the bundle at a 45 degree angle on top of the collar and make 2 loose gathering wraps, then 8 to 10 tight wraps straight down onto the same band. Do not let the wraps spiral rearward or they will splay the hair.',
      },
      {
        title: 'Work around the collar',
        body: 'Rotate the jig (or reposition the bundle) and tie in a second and third bundle the same way until hair covers the full 360 degrees of the collar with no bald stripes. Keep every bundle the same length. If adding Krystal Flash, tie 3 to 4 strands on each side under the final bundle, trimmed 1/4 in longer than the hair.',
      },
      {
        title: 'Build the head band and whip finish',
        body: 'Wrap a neat thread band over all the butts, front edge tight against the back of the jig head, about 15 to 20 wraps into a smooth cone. Whip finish with 4 to 5 turns (by tool or by hand) and cut the thread close.',
      },
      {
        title: 'Cement the wraps',
        body: 'Apply a thin coat of head cement over the entire thread band, letting it soak into the wraps. Let dry 15 minutes and apply a second coat. Cure overnight before fishing; uncured cement clouds in water and the wraps loosen.',
      },
    ],
    variations: [
      'Walleye river jig: 3/8 oz head, sparse white over chartreuse, red thread hot spot at the collar.',
      'Smallmouth finesse: 1/4 oz head, sparse all-brown or black hair, no flash, tipped with a 3 in twister tail.',
      'Lake trout: 1 oz head, full white bucktail with 8 strands of pearl flash, tied long (3 in past the bend).',
    ],
    safety: 'Head cement solvents are flammable and the fumes are harmful; use in a ventilated space, cap the bottle between coats, and keep it away from food areas and open flame.',
  },

  {
    id: 'spinnerbait',
    name: 'Spinnerbait from Pre-Bent Frames',
    level: 2,
    time: '25 min',
    cost: '$3.50 per lure',
    targets: 'Bass, pike, walleye',
    why: 'Assembling from cast-head frames gets you a $10 to $14 class spinnerbait for a third of the price, with your choice of blade combinations. Because you built it, retuning a frame a pike has mangled takes two minutes instead of a trip to the store.',
    materials: [
      { item: 'Pre-bent R-bend spinnerbait frame with cast 3/8 oz painted head, .035 in wire, 4/0 hook', qty: '1' },
      { item: 'Willowleaf blade, #4.5, nickel (rear blade)', qty: '1' },
      { item: 'Colorado blade, #3, gold (front blade)', qty: '1' },
      { item: 'Folded clevis, size 3', qty: '1' },
      { item: 'Ball bearing swivel, size #4, with split ring or welded ring', qty: '1' },
      { item: 'Hollow brass beads, 5 mm', qty: '3' },
      { item: 'Silicone skirt, 40 to 50 strand, with rubber skirt collar', qty: '1' },
      { item: 'Trailer hook, 3/0 open-eye or standard with 1/4 in surgical tubing', qty: '1' },
    ],
    tools: ['Round-nose pliers', 'Flush wire cutters', 'Split ring pliers'],
    steps: [
      {
        title: 'Rig the upper arm',
        body: 'Slide onto the upper wire arm in this order: one 5 mm bead, the size 3 folded clevis carrying the #3 Colorado blade (cupped face toward the wire), then two more 5 mm beads. The beads below the clevis are the bearing surface; the blade must spin freely with a flick of the finger.',
      },
      {
        title: 'Form the end loop and hang the willow',
        body: 'Grip the upper arm 3/4 in from its end with round-nose pliers. Bend the wire back 180 degrees into a loop, capture the ball bearing swivel in the loop, then wrap the tag around the standing wire 2 tight turns and trim flush. Attach the #4.5 willowleaf to the swivel with a split ring. The willow should hang just past the hook bend; if it hangs farther back, shorten the arm before forming the loop.',
      },
      {
        title: 'Skirt the head',
        body: 'Slide the silicone skirt collar over the hook point and up the shank onto the skirt keeper barb behind the head, strands facing forward over the head. Fold the strands back so they flare around the hook. Trim the skirt so strands end about 1/4 in past the hook bend; a skirt trimmed to two staggered lengths (half at the bend, half 1/4 in past) pulses better.',
      },
      {
        title: 'Add the trailer hook',
        body: 'Cut a 1/4 in piece of surgical tubing and push it over the eye of the 3/0 trailer hook. Pass the main hook point through the tubing-covered eye so the trailer rides point-up in line with the main hook. The tubing keeps the trailer from swinging and fouling. For open-eye trailers, crimp the eye closed around the main hook bend with pliers instead.',
      },
      {
        title: 'Tune the frame',
        body: 'Hold the line tie and confirm the upper arm sits directly above the hook shank, blade arm and hook in one vertical plane. Retrieve it through water: if the lure rolls to one side, bend the upper arm a few degrees toward the opposite side. The correct running attitude is head slightly down, skirt pulsing, both blades turning at the slowest retrieve.',
      },
    ],
    variations: [
      'Night or muddy water: single #6 Colorado on the swivel, no front blade, black skirt, for maximum thump.',
      'Clear water smallmouth: double willow (#3.5 and #4.5), white and silver skirt, 1/2 oz head, burned fast over boulders.',
      'Pike upgrade: replace the swivel split ring with a heavier #5 ring, add a 4 in white grub trailer, and fish it over weed edges.',
    ],
  },

  {
    id: 'bottom-bouncer',
    name: 'Bottom Bouncers',
    level: 2,
    time: '10 min each (plus pouring session)',
    cost: '$0.90 per bouncer',
    targets: 'Walleye (pairs with the spinner harness project)',
    why: 'A bottom bouncer walks your harness along rock and gravel where Kagawong walleye live, and you will donate a few to the lake every week. Bought bouncers are $3 to $5; bent and poured at home they cost under a dollar.',
    materials: [
      { item: 'Bottom bouncer wire forms, 0.051 in stainless, pre-bent (or straight wire to bend your own)', qty: '1 per bouncer' },
      { item: 'Lead for the weight: pour with a bottom bouncer mold in 1, 1.5 and 2 oz, or buy slip-on bouncer weights to skip pouring', qty: '1 to 2 oz per bouncer' },
      { item: 'Size #7 barrel swivel or snap swivel for the harness attachment arm', qty: '1' },
      { item: 'Powder paint, chartreuse or orange (optional, helps you track the rig and adds a target)', qty: 'a pinch' },
    ],
    tools: ['Round-nose pliers', 'Bottom bouncer mold + lead pot (only if pouring)', 'Side cutters'],
    steps: [
      {
        title: 'Understand the shape',
        body: 'A bottom bouncer is an L of wire: the long leg (10 to 12 in) carries the weight cylinder partway down and ticks bottom, the short arm (4 to 5 in) holds the harness. The line ties at the corner. The wire leg telegraphs bottom while keeping the harness riding clean above the rocks.',
      },
      {
        title: 'Form the corner and arm',
        body: 'With pre-bent forms this is done for you. Bending your own: make a 90 degree corner leaving the long leg below, then twist a small line-tie loop right at the corner with round-nose pliers, and finish the short arm with a wrapped loop holding the barrel swivel or snap for the harness.',
      },
      {
        title: 'Add the weight',
        body: 'Pouring: clamp the wire leg in the bottom bouncer mold and pour 1, 1.5 and 2 oz versions (rule of thumb: 1 oz per 10 ft of depth you plan to fish). Not pouring: pinch a slip-on bouncer weight onto the leg at about one third of the way down and crimp it firm.',
      },
      {
        title: 'Optional paint and rig up',
        body: 'A dab of powder paint on the weight, heated with a lighter, makes the rig easy to see boatside and adds a strike target. Clip your line to the corner loop, harness on the arm swivel, drop to bottom, and troll 1.0 to 1.4 mph with the wire just ticking.',
      },
    ],
    variations: [
      'Pour a few 3 oz versions if you ever fish the 35 ft plus basin edges or heavy wind drifts.',
      'Slow death bouncers: a shorter 8 in leg with 3/4 oz for finesse dragging at crawl speeds.',
    ],
    safety: 'Molten lead: work outdoors or with strong ventilation, wear safety glasses and gloves, never let moisture near the pot (steam explosion risk), keep a dedicated pouring area away from food, and wash hands after handling lead. Skip pouring entirely by buying slip-on weights.',
  },

  {
    id: 'spoon-build',
    name: 'Casting Spoons from Blanks',
    level: 2,
    time: '30 min plus paint drying',
    cost: '$2.00 per spoon',
    targets: 'Pike, lake trout, walleye, salmon',
    why: 'Spoon blanks cost about a dollar and take paint and tape patterns that the factories never offer. You can copy the five-of-diamonds and fire tiger classics, then invent the pattern your lake actually wants.',
    materials: [
      { item: 'Stamped spoon blanks, brass or nickel-plated, 2 3/4 in, about 1/2 oz (Dardevle-style profile)', qty: '1 per spoon' },
      { item: 'Split rings, #5 stainless', qty: '2' },
      { item: 'Treble hook, size #2, round bend', qty: '1' },
      { item: 'Adhesive lure tape (holographic, red, chartreuse) and/or enamel spray paint plus white primer', qty: 'as needed' },
      { item: 'Clear topcoat: 1-part lure clear coat or 2-part epoxy', qty: '1 coat' },
      { item: 'Isopropyl alcohol and 400 grit wet-dry sandpaper', qty: 'prep' },
    ],
    tools: ['Split ring pliers', 'Fine metal file', 'Scissors or hobby knife for tape', 'Wire to hang spoons for drying'],
    steps: [
      {
        title: 'Deburr and prep the blank',
        body: 'Run a fine file around both holes and the blank edges to knock off stamping burrs that would cut line. Scuff the paint side with 400 grit, then wipe the whole blank with isopropyl alcohol. Skin oils are the number one cause of paint peeling off metal.',
      },
      {
        title: 'Prime and paint the convex face',
        body: 'Hang the blank on a wire hook. Spray one light coat of white primer on the convex (back) face, dry 30 minutes, then two light colour coats 15 minutes apart. Classic five-of-diamonds: paint the face yellow, then when dry add five red diamonds down the centerline with a paint pen, each about 3/8 in tall. Leave the concave face bare metal for flash.',
      },
      {
        title: 'Or tape it instead',
        body: 'For a no-dry-time finish, cut holographic tape to cover the convex face, lay it from the center outward pressing out air bubbles, and trim the overhang flush with a hobby knife. A 1/4 in red tape stripe along one edge imitates a bleeding baitfish and often out-fishes full patterns.',
      },
      {
        title: 'Clear coat',
        body: 'Apply one coat of clear over paint or tape, keeping it out of the two holes, and hang to cure per the product directions (24 hours for most 1-part clears). Tape edges especially need sealing or they lift after a few pike.',
      },
      {
        title: 'Hang the hardware',
        body: 'Fit a #5 split ring in each hole. The treble goes on the wide, deeply cupped end; the line-tie ring goes on the narrow end. Add the #2 treble to the wide-end ring. If trolling, add a ball bearing swivel to the line-tie ring to stop line twist.',
      },
      {
        title: 'Tune the wobble',
        body: 'Test alongside the dock or in a tank: a correct spoon swims with a wide side-to-side wobble and never fully spins. If it spins at normal retrieve speed, the bend is too deep for its weight; press the spoon slightly flatter over your knee. If it runs lifeless and straight, increase the curve slightly by bending the tail third. Adjust in tiny increments and retest.',
      },
    ],
    variations: [
      'Perch pattern for pike: yellow base, black paint-pen bars, red gill slash at the wide end.',
      'Lake trout depths: use a 3/8 oz narrower blank in silver-blue tape and troll it 1.5 to 2.5 mph.',
      'Weedless pike version: replace the treble with a single siwash and a wire weed guard soldered or epoxied at the hook hole.',
    ],
    safety: 'Spray paint and clear coats release solvent fumes: work outdoors or with strong ventilation, wear a respirator rated for organic vapours for anything more than a quick coat, and keep all coatings away from food prep areas and flame.',
  },

  {
    id: 'crankbait-wood',
    name: 'Carved Cedar Crankbait',
    level: 3,
    time: '4 to 6 hours of work across 3 to 4 days (sealing and epoxy cures)',
    cost: '$4.00 per lure',
    targets: 'Bass, walleye, pike',
    why: 'This is the graduate project of lure making: a hand-carved cedar crankbait with buoyancy, action, and dive angle you chose on purpose. Cedar floats higher and kicks harder than any injected plastic, which is why collectible handmade cranks sell for $25 and up.',
    materials: [
      { item: 'Western red cedar (or basswood) block, 3 in x 1 in x 3/4 in, straight grain, no knots', qty: '1' },
      { item: 'Polycarbonate (Lexan) sheet, 1/16 in (0.060 in) thick, for the diving lip', qty: '1 piece, 3/4 in x 1 in' },
      { item: 'Stainless open-eye screw eyes, 0.072 in wire x 3/4 in shank (#217 size)', qty: '3' },
      { item: 'Alternative: .041 in stainless wire for a full through-wire harness (recommended for pike)', qty: '10 in' },
      { item: 'Ballast: 1/4 in dia lead wire or lead shot, about 1/8 oz (or non-lead tungsten putty)', qty: '1/8 to 3/16 oz' },
      { item: 'Treble hooks #6, split rings #3', qty: '2 each' },
      { item: 'Sealer: 30 min epoxy thinned 50/50 with denatured alcohol, or solvent-based lure sealer', qty: '2 coats' },
      { item: '30 min 2-part epoxy (e.g. Devcon 2-Ton) for lip, eyes, and topcoat', qty: '2 topcoats' },
      { item: 'Paint: acrylic craft paint or rattle cans, plus 3D or painted eyes', qty: 'as needed' },
    ],
    tools: ['Coping saw or band saw', 'Sharp carving knife', 'Sandpaper: 80, 150, 220 grit', 'Fine-kerf razor saw (for the lip slot)', 'Drill with 1/16 in and 1/4 in bits', 'Small clamps', 'Mixing sticks and a lure-turning wheel (or patience to hand-turn)'],
    steps: [
      {
        title: 'Template and rough cut',
        body: 'Draw a 2 1/2 in shad profile on card, trace it onto the 3/4 in face of the cedar block with the grain running nose to tail, and mark the centerline all the way around the block with a pencil; every later cut references that line. Cut the side profile with a coping saw, staying 1/16 in outside the line.',
      },
      {
        title: 'Cut the lip slot first',
        body: 'While the body still has flat, square surfaces, cut the lip slot with the razor saw: a 1/16 in wide slot, 3/8 in deep, across the nose at 45 degrees to the body centerline. Cutting the slot before shaping is the difference between a straight-running bait and firewood: a crooked slot cannot be fixed later. Test that the Lexan slides in snugly.',
      },
      {
        title: 'Carve and sand to shape',
        body: 'Knife-carve the corners off to an octagonal cross-section, then round to final shape, always cutting away from yourself and keeping the two sides symmetrical about the pencil centerline. Check symmetry by eye from nose and tail every few minutes. Sand through 80, 150, and 220 grit. Target a body 2 1/2 in long, 5/8 in tall, 9/16 in wide at the shoulder, tapering to the tail.',
      },
      {
        title: 'Drill for hardware and ballast',
        body: 'On the centerline, drill 1/16 in pilot holes: line tie at the nose just above the lip slot, belly hook hanger at 40 percent of body length from the nose, tail hook hanger centered in the tail. Drill the 1/4 in ballast hole in the belly, 1/8 in ahead of the belly hanger, 3/8 in deep. For the through-wire option, saw the body in half lengthwise instead, groove one half for a single .041 in wire bent with loops at nose, belly, and tail, and epoxy the halves back together around it.',
      },
      {
        title: 'Ballast and float test',
        body: 'Tape the hooks, split rings, and lip in place, press 1/8 oz of lead into the ballast hole, and float the bait in a bucket. Correct attitude is horizontal to slightly nose-down, sitting with the back just breaking the surface. Adjust lead until it sits right, then epoxy the ballast in and fair over the hole. Record the final weight for the next build.',
      },
      {
        title: 'Seal the wood',
        body: 'Seal the whole body, including inside every hole, with two coats of 50/50 thinned epoxy 12 hours apart, or dip twice in lure sealer. Unsealed cedar drinks water through the first hook rash and the bait slowly loses its action. After sealing, reopen the pilot holes and slot with a drill bit and the razor saw.',
      },
      {
        title: 'Fit the lip and screw eyes',
        body: 'Cut the Lexan lip 3/4 in wide by 7/8 in long with rounded front corners, scuff the glued half with sandpaper, and epoxy it into the slot, checking it is square to the body from above before the epoxy sets. Coat the screw eye threads in epoxy and drive them into the pilot holes until only the eye shows. Cure 24 hours.',
      },
      {
        title: 'Paint, topcoat, and tank-tune',
        body: 'Paint your pattern in thin coats and add eyes. Then brush on a 30 min epoxy topcoat and turn the lure continuously until the epoxy gels (about 30 to 40 minutes on a wheel at 5 to 10 rpm, or by hand every 3 to 4 minutes) so it cures level without drips; apply a second coat the same way. When cured, hang hooks on the split rings and test-swim: a bait that veers left gets the line tie bent slightly right, and vice versa, in 5 degree increments with pliers until it runs dead straight and hunts with a tight X-shaped wiggle.',
      },
    ],
    variations: [
      'Deep diver: lengthen the lip to 1 1/4 in and flatten the slot angle to about 30 degrees off the body centerline; add 1/16 oz more ballast.',
      'Topwater wakebait: shorten the lip to 1/2 in and steepen the slot to 60 degrees, no added ballast, and fish it slow so it V-wakes on the surface.',
      'Pike-proof build: use the through-wire harness, #4 trebles, and a double epoxy topcoat; cedar bodies survive teeth that crack hollow plastics.',
    ],
    safety: 'Carving: cut away from your body and keep the off hand behind the blade. Lead ballast: wash hands after handling, never melt or sand lead for this build, keep lead out of food areas, and consider tungsten putty instead. Epoxy and sealers: wear nitrile gloves and work with ventilation; solvent-thinned epoxy and lure sealers are flammable. Uncured epoxy is a skin sensitizer, so clean drips immediately.',
  },
];
