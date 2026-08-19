// Skills Academy: fishing knots and rigs.
// SVG fragments render inside <svg viewBox="0 0 320 200">.
// Classes: rope (main line), rope-tag (tag end), rope-b (second line),
// hardware (hook/swivel/spool/lure), arrow (motion), note (labels).

export const KNOTS = [
  {
    id: 'arbor-knot',
    name: 'Arbor Knot',
    level: 1,
    strength: '60%',
    usedFor: 'Tying line to the reel spool (the arbor) before spooling up',
    whenToUse: 'Use it every time you put fresh line on a reel. It is not a fighting knot, it simply jams against the arbor so the spool can pull line tight while you fill it.',
    steps: [
      {
        svg: '<g><circle class="hardware" cx="90" cy="100" r="52"/><circle class="hardware" cx="90" cy="100" r="15"/><path class="rope" d="M304 84 L170 84 C136 84 116 86 104 90"/><path class="rope-tag" d="M104 90 C80 82 62 96 68 112 C74 128 98 128 108 114 C124 118 160 120 200 120 C232 120 260 118 282 116"/><path class="arrow" d="M170 60 C150 56 132 58 118 66 M118 66 l10 -1 M118 66 l4 -9"/><text class="note" x="252" y="136" font-size="12">tag end</text><text class="note" x="240" y="72" font-size="12">to rod</text></g>',
        caption: 'Pass the line around the spool arbor and bring the tag end back out alongside the standing line.',
      },
      {
        svg: '<g><circle class="hardware" cx="90" cy="100" r="52"/><circle class="hardware" cx="90" cy="100" r="15"/><path class="rope" d="M304 84 L170 84 C136 84 116 86 104 90 C80 82 62 96 68 112 C74 128 98 128 108 114"/><path class="rope-tag" d="M108 114 C140 120 170 120 192 118 C206 116 212 106 204 100 C196 94 184 98 186 108 C188 116 200 120 216 118 C240 116 262 114 282 112"/><path class="arrow" d="M226 88 C216 82 206 82 198 88 M198 88 l9 -2 M198 88 l3 -8"/><text class="note" x="150" y="150" font-size="12">overhand around standing line</text></g>',
        caption: 'Tie an overhand knot with the tag end around the standing line.',
      },
      {
        svg: '<g><circle class="hardware" cx="90" cy="100" r="52"/><circle class="hardware" cx="90" cy="100" r="15"/><path class="rope" d="M304 84 L170 84 C136 84 116 86 104 90 C80 82 62 96 68 112 C74 128 98 128 108 114"/><path class="rope-tag" d="M108 114 C140 120 170 120 192 118 C206 116 212 106 204 100 C196 94 184 98 186 108 C188 116 200 120 216 118 C232 116 244 112 252 116 C246 106 256 98 264 104 C272 110 266 122 254 118"/><text class="note" x="176" y="150" font-size="12">first knot</text><text class="note" x="246" y="140" font-size="12">stopper</text></g>',
        caption: 'Tie a second overhand knot in the tag end alone, close to the first, to act as a stopper.',
      },
      {
        svg: '<g><circle class="hardware" cx="90" cy="100" r="52"/><circle class="hardware" cx="90" cy="100" r="15"/><path class="rope" d="M304 92 L180 92 C140 92 118 94 108 98 C94 88 78 94 78 106 C78 118 94 122 106 114"/><path class="rope-tag" d="M112 112 C118 106 122 112 116 116 M124 110 C130 104 134 110 128 114"/><path class="arrow" d="M200 70 L260 70 M260 70 l-9 -4 M260 70 l-9 4"/><text class="note" x="200" y="60" font-size="12">pull standing line</text><text class="note" x="140" y="150" font-size="12">knots jam on arbor</text></g>',
        caption: 'Pull the standing line so both knots slide down and jam tight against the arbor, then trim the tag.',
      },
    ],
    tips: [
      'The stopper knot is what keeps the first knot from slipping off, do not skip it.',
      'On a braid-only spool, put a few wraps of mono backing or tape on the arbor first, otherwise braid spins on the smooth metal.',
      'Snug it hard enough that the line does not rotate freely around the arbor when you turn the spool by hand.',
    ],
  },
  {
    id: 'improved-clinch',
    name: 'Improved Clinch Knot',
    level: 1,
    strength: '95%',
    usedFor: 'Tying hooks, lures and swivels to mono or fluorocarbon',
    whenToUse: 'The classic all-purpose hook knot for mono and fluoro up to about 20 lb test. Choose the Palomar or Uni instead when tying braid, which can slip through a clinch.',
    steps: [
      {
        svg: '<g><circle class="hardware" cx="70" cy="100" r="9"/><path class="hardware" d="M70 109 C70 144 56 160 40 160 C24 160 20 144 27 134 L34 140"/><path class="rope" d="M304 104 C220 104 140 102 79 100"/><path class="rope-tag" d="M78 95 C110 76 160 70 210 76"/><text class="note" x="214" y="70" font-size="12">tag end, 15 cm</text><text class="note" x="250" y="120" font-size="12">standing line</text></g>',
        caption: 'Thread the tag end through the hook eye and pull about 15 cm of line through.',
      },
      {
        svg: '<g><circle class="hardware" cx="70" cy="100" r="9"/><path class="hardware" d="M70 109 C70 144 56 160 40 160 C24 160 20 144 27 134 L34 140"/><path class="rope" d="M304 100 L79 100"/><path class="rope-tag" d="M78 95 C86 86 96 84 102 88"/><ellipse class="rope-tag" cx="116" cy="100" rx="8" ry="16"/><ellipse class="rope-tag" cx="144" cy="100" rx="8" ry="16"/><ellipse class="rope-tag" cx="172" cy="100" rx="8" ry="16"/><ellipse class="rope-tag" cx="200" cy="100" rx="8" ry="16"/><ellipse class="rope-tag" cx="228" cy="100" rx="8" ry="16"/><path class="rope-tag" d="M236 90 C246 82 256 82 262 88"/><path class="arrow" d="M120 134 C150 142 190 142 220 134 M220 134 l-10 0 M220 134 l-6 8"/><text class="note" x="140" y="164" font-size="12">5 wraps, away from eye</text></g>',
        caption: 'Wrap the tag end around the standing line 5 times, working away from the hook eye.',
      },
      {
        svg: '<g><circle class="hardware" cx="70" cy="100" r="9"/><path class="hardware" d="M70 109 C70 144 56 160 40 160 C24 160 20 144 27 134 L34 140"/><path class="rope" d="M304 100 L79 100"/><ellipse class="rope-tag" cx="116" cy="100" rx="8" ry="16"/><ellipse class="rope-tag" cx="144" cy="100" rx="8" ry="16"/><ellipse class="rope-tag" cx="172" cy="100" rx="8" ry="16"/><ellipse class="rope-tag" cx="200" cy="100" rx="8" ry="16"/><ellipse class="rope-tag" cx="228" cy="100" rx="8" ry="16"/><path class="rope-tag" d="M236 90 C220 54 130 48 96 80 L92 94"/><path class="arrow" d="M110 62 C102 68 96 76 94 86 M94 86 l1 -9 M94 86 l8 -4"/><text class="note" x="120" y="36" font-size="12">back through the small loop at the eye</text></g>',
        caption: 'Bring the tag end back toward the hook and pass it through the small loop right behind the eye.',
      },
      {
        svg: '<g><circle class="hardware" cx="70" cy="100" r="9"/><path class="hardware" d="M70 109 C70 144 56 160 40 160 C24 160 20 144 27 134 L34 140"/><path class="rope" d="M304 100 L79 100"/><ellipse class="rope-tag" cx="116" cy="100" rx="8" ry="16"/><ellipse class="rope-tag" cx="144" cy="100" rx="8" ry="16"/><ellipse class="rope-tag" cx="172" cy="100" rx="8" ry="16"/><ellipse class="rope-tag" cx="200" cy="100" rx="8" ry="16"/><ellipse class="rope-tag" cx="228" cy="100" rx="8" ry="16"/><path class="rope-tag" d="M236 90 C220 54 130 48 96 80 L92 94 C96 104 108 102 118 92 C134 76 156 66 180 62"/><path class="arrow" d="M148 84 C160 76 172 70 186 66 M186 66 l-10 1 M186 66 l-5 8"/><text class="note" x="150" y="34" font-size="12">then through the big loop</text></g>',
        caption: 'Pass the tag end back through the big loop you just created, this tuck is the improved part.',
      },
      {
        svg: '<g><circle class="hardware" cx="70" cy="100" r="9"/><path class="hardware" d="M70 109 C70 144 56 160 40 160 C24 160 20 144 27 134 L34 140"/><path class="rope" d="M304 100 L79 100"/><ellipse class="rope-tag" cx="88" cy="100" rx="5" ry="12"/><ellipse class="rope-tag" cx="98" cy="100" rx="5" ry="12"/><ellipse class="rope-tag" cx="108" cy="100" rx="5" ry="12"/><ellipse class="rope-tag" cx="118" cy="100" rx="5" ry="12"/><ellipse class="rope-tag" cx="128" cy="100" rx="5" ry="12"/><path class="rope-tag" d="M134 92 C140 86 146 84 152 86"/><path class="arrow" d="M200 76 L260 76 M260 76 l-9 -4 M260 76 l-9 4"/><text class="note" x="196" y="66" font-size="12">wet, then pull</text><text class="note" x="140" y="130" font-size="12">trim to 3 mm</text></g>',
        caption: 'Wet the knot, pull the standing line to seat the coils neatly against the eye, and trim the tag.',
      },
    ],
    tips: [
      'Always wet the knot before seating it, dry friction burns mono and can cost you half the knot strength.',
      'Five wraps suits 8-12 lb line. Use 7 wraps below 8 lb and only 4 wraps above 15 lb, or the knot will not seat.',
      'If the coils bunch over each other instead of stacking like a spring, cut it off and retie.',
    ],
  },
  {
    id: 'palomar',
    name: 'Palomar Knot',
    level: 1,
    strength: '95%',
    usedFor: 'Tying hooks, jigs and swivels to any line, including braid',
    whenToUse: 'The strongest simple hook knot and the best choice for braided line, which slips out of clinch-style knots. Pick it whenever the lure is small enough to pass through the loop.',
    steps: [
      {
        svg: '<g><circle class="hardware" cx="228" cy="100" r="9"/><path class="hardware" d="M228 109 C228 146 242 164 262 164 C282 164 288 146 280 134 L273 141"/><path class="rope" d="M14 92 L120 92 C165 92 196 94 219 97 L237 97 C270 90 300 92 300 101"/><path class="rope-tag" d="M300 101 C300 110 270 112 237 103 L219 103 C196 106 165 108 120 108 L14 108"/><path class="arrow" d="M150 70 C185 62 210 66 228 76 M228 76 l-10 -1 M228 76 l-4 -9"/><text class="note" x="240" y="72" font-size="12">doubled loop</text><text class="note" x="16" y="128" font-size="12">tag end</text></g>',
        caption: 'Double 15 cm of line and push the folded loop through the hook eye.',
      },
      {
        svg: '<g><circle class="hardware" cx="166" cy="136" r="8"/><path class="hardware" d="M166 144 C166 168 178 180 192 180 C206 180 210 166 204 158 L198 164"/><path class="rope" d="M14 78 C70 78 118 80 148 92 C172 102 184 122 172 132 C160 140 142 132 144 116 C146 100 168 92 196 92 C218 92 234 98 242 106"/><path class="rope-tag" d="M242 106 C268 114 298 108 298 90 C298 72 268 66 242 74 C230 78 220 84 216 90"/><text class="note" x="30" y="46" font-size="12">tie a loose overhand in the doubled line</text><text class="note" x="196" y="196" font-size="12">hook hangs in the middle</text></g>',
        caption: 'Tie a loose overhand knot with the doubled line, letting the hook dangle from the middle of it.',
      },
      {
        svg: '<g><circle class="hardware" cx="156" cy="122" r="8"/><path class="hardware" d="M156 130 C156 158 170 172 186 172 C202 172 206 158 200 150 L194 156"/><path class="rope" d="M14 72 C64 72 108 74 138 84 C162 92 172 108 162 118 C152 126 136 120 138 106 C140 92 160 86 184 86 C204 86 218 90 226 96"/><path class="rope-tag" d="M226 96 C258 104 266 130 244 152 C220 174 168 182 140 164 C120 150 128 128 148 124"/><path class="arrow" d="M266 106 C272 122 268 140 254 154 M254 154 l3 -9 M254 154 l9 -3"/><text class="note" x="36" y="196" font-size="12">pass the loop over the whole hook</text></g>',
        caption: 'Open the folded loop and pass it completely over the hook, so the hook hangs through it.',
      },
      {
        svg: '<g><circle class="hardware" cx="200" cy="100" r="9"/><path class="hardware" d="M200 109 C200 144 214 160 232 160 C250 160 256 144 248 134 L241 140"/><path class="rope" d="M14 96 L162 96 C170 96 176 98 180 100"/><ellipse class="rope" cx="178" cy="100" rx="6" ry="12"/><ellipse class="rope-tag" cx="188" cy="100" rx="6" ry="12"/><path class="rope-tag" d="M186 111 C176 118 166 120 158 118"/><path class="arrow" d="M110 76 L64 76 M64 76 l9 -4 M64 76 l9 4"/><text class="note" x="60" y="62" font-size="12">wet, pull both lines</text><text class="note" x="120" y="140" font-size="12">trim to 3 mm</text></g>',
        caption: 'Wet the knot and pull the standing line and tag end together to seat it snug against the eye, then trim.',
      },
    ],
    tips: [
      'Keep the two strands of the doubled line parallel while you tighten, if they cross the knot loses strength.',
      'Pull standing line and tag end at the same time to seat it, then give the standing line alone a final firm pull.',
      'With treble hooks or big lures the loop pass is awkward, switch to a Uni or clinch instead of forcing it.',
    ],
  },
  {
    id: 'uni-knot',
    name: 'Uni Knot',
    level: 1,
    strength: '90%',
    usedFor: 'Hooks, swivels and lures on any line, and the base of many other knots',
    whenToUse: 'The most versatile knot in fishing, it works in mono, fluoro and braid and also joins lines as the Double Uni. Learn it once and you can rig almost anything.',
    steps: [
      {
        svg: '<g><circle class="hardware" cx="60" cy="100" r="9"/><path class="hardware" d="M60 109 C60 142 46 158 31 158 C17 158 13 142 20 132 L27 138"/><path class="rope" d="M304 96 C220 96 130 96 69 98"/><path class="rope-tag" d="M69 92 C130 88 200 88 250 92 C282 96 282 128 250 132 C210 138 150 134 116 122"/><path class="arrow" d="M160 154 C186 160 216 158 240 148 M240 148 l-10 1 M240 148 l-6 8"/><text class="note" x="120" y="176" font-size="12">lay the tag back to form an open loop</text></g>',
        caption: 'Thread the tag through the eye, pull 20 cm through, then fold it back to form an open loop under the doubled line.',
      },
      {
        svg: '<g><circle class="hardware" cx="60" cy="100" r="9"/><path class="hardware" d="M60 109 C60 142 46 158 31 158 C17 158 13 142 20 132 L27 138"/><path class="rope" d="M304 96 C220 96 130 96 69 98"/><path class="rope-tag" d="M69 92 C90 90 104 90 116 90"/><ellipse class="rope-tag" cx="126" cy="98" rx="7" ry="15"/><ellipse class="rope-tag" cx="146" cy="98" rx="7" ry="15"/><ellipse class="rope-tag" cx="166" cy="98" rx="7" ry="15"/><ellipse class="rope-tag" cx="186" cy="98" rx="7" ry="15"/><ellipse class="rope-tag" cx="206" cy="98" rx="7" ry="15"/><ellipse class="rope-tag" cx="226" cy="98" rx="7" ry="15"/><path class="rope-tag" d="M234 106 C244 116 244 130 234 138 C210 150 160 148 128 134"/><path class="arrow" d="M150 66 C176 58 204 58 228 66 M228 66 l-10 -1 M228 66 l-4 -9"/><text class="note" x="96" y="180" font-size="12">6 wraps through the loop, around both lines</text></g>',
        caption: 'Make 6 wraps with the tag end, passing it through the loop and around both lines each time.',
      },
      {
        svg: '<g><circle class="hardware" cx="60" cy="100" r="9"/><path class="hardware" d="M60 109 C60 142 46 158 31 158 C17 158 13 142 20 132 L27 138"/><path class="rope" d="M304 98 C220 98 130 98 69 98"/><ellipse class="rope-tag" cx="180" cy="98" rx="5" ry="12"/><ellipse class="rope-tag" cx="190" cy="98" rx="5" ry="12"/><ellipse class="rope-tag" cx="200" cy="98" rx="5" ry="12"/><ellipse class="rope-tag" cx="210" cy="98" rx="5" ry="12"/><ellipse class="rope-tag" cx="220" cy="98" rx="5" ry="12"/><ellipse class="rope-tag" cx="230" cy="98" rx="5" ry="12"/><path class="rope-tag" d="M236 106 C246 114 254 118 264 118"/><path class="arrow" d="M258 132 L288 140 M288 140 l-9 -5 M288 140 l-10 1"/><text class="note" x="150" y="150" font-size="12">wet, pull the tag to snug the coils</text></g>',
        caption: 'Moisten the knot and pull the tag end so the wraps snug down into a neat barrel.',
      },
      {
        svg: '<g><circle class="hardware" cx="60" cy="100" r="9"/><path class="hardware" d="M60 109 C60 142 46 158 31 158 C17 158 13 142 20 132 L27 138"/><path class="rope" d="M304 98 C220 98 130 98 69 98"/><ellipse class="rope-tag" cx="76" cy="98" rx="5" ry="12"/><ellipse class="rope-tag" cx="86" cy="98" rx="5" ry="12"/><ellipse class="rope-tag" cx="96" cy="98" rx="5" ry="12"/><ellipse class="rope-tag" cx="106" cy="98" rx="5" ry="12"/><ellipse class="rope-tag" cx="116" cy="98" rx="5" ry="12"/><ellipse class="rope-tag" cx="126" cy="98" rx="5" ry="12"/><path class="rope-tag" d="M132 106 C138 112 144 114 150 112"/><path class="arrow" d="M190 74 L250 74 M250 74 l-9 -4 M250 74 l-9 4"/><text class="note" x="180" y="62" font-size="12">pull to slide knot to the eye</text><text class="note" x="140" y="140" font-size="12">trim</text></g>',
        caption: 'Pull the standing line to slide the barrel down against the eye, then trim the tag.',
      },
    ],
    tips: [
      'Six wraps is right for mono and fluoro, use 8 wraps with slick braid so it cannot slip.',
      'Snug the coils with the tag first, then slide the knot home, sliding an unseated knot ruins the wraps.',
      'Leave the knot a few millimetres up the line and it becomes a small loop knot for jigs, pull hard and it locks tight on the hookset.',
    ],
  },
  {
    id: 'double-uni',
    name: 'Double Uni Knot',
    level: 2,
    strength: '90%',
    usedFor: 'Joining two lines, especially braid main line to a mono or fluoro leader',
    whenToUse: 'The easiest reliable line-to-line knot and the standard way to add a leader on the water. Choose the FG knot instead when the connection must be slimmer or you are casting all day.',
    steps: [
      {
        svg: '<g><path class="rope" d="M16 90 L244 90"/><path class="rope-b" d="M304 110 L76 110"/><text class="note" x="20" y="74" font-size="12">braid main line</text><text class="note" x="210" y="134" font-size="12">leader</text><path class="arrow" d="M244 90 L268 90 M268 90 l-9 -4 M268 90 l-9 4"/><path class="arrow" d="M76 110 L52 110 M52 110 l9 -4 M52 110 l9 4"/></g>',
        caption: 'Overlap the two lines by about 25 cm with the tag ends pointing in opposite directions.',
      },
      {
        svg: '<g><path class="rope" d="M16 90 L244 90"/><path class="rope-b" d="M304 110 L76 110"/><ellipse class="rope" cx="112" cy="100" rx="7" ry="16"/><ellipse class="rope" cx="130" cy="100" rx="7" ry="16"/><ellipse class="rope" cx="148" cy="100" rx="7" ry="16"/><ellipse class="rope" cx="166" cy="100" rx="7" ry="16"/><path class="rope" d="M172 108 C182 118 182 132 170 138 C150 146 118 142 100 130"/><text class="note" x="84" y="168" font-size="12">uni with line A, 4 wraps around both</text></g>',
        caption: 'Tie a Uni knot with the first tag end, wrapping it 4 times through its loop and around both lines.',
      },
      {
        svg: '<g><path class="rope" d="M16 90 L244 90"/><path class="rope-b" d="M304 110 L76 110"/><ellipse class="rope" cx="100" cy="100" rx="5" ry="13"/><ellipse class="rope" cx="110" cy="100" rx="5" ry="13"/><ellipse class="rope" cx="120" cy="100" rx="5" ry="13"/><ellipse class="rope" cx="130" cy="100" rx="5" ry="13"/><ellipse class="rope-b" cx="196" cy="100" rx="7" ry="16"/><ellipse class="rope-b" cx="214" cy="100" rx="7" ry="16"/><ellipse class="rope-b" cx="232" cy="100" rx="7" ry="16"/><ellipse class="rope-b" cx="250" cy="100" rx="7" ry="16"/><path class="rope-b" d="M244 108 C234 118 234 132 246 138 C266 146 294 142 308 130"/><text class="note" x="170" y="168" font-size="12">second uni with line B</text></g>',
        caption: 'Tie a matching Uni knot with the other tag end, wrapping it 4 times around both lines in the other direction.',
      },
      {
        svg: '<g><path class="rope" d="M16 100 L146 100"/><path class="rope-b" d="M304 100 L174 100"/><ellipse class="rope" cx="142" cy="100" rx="5" ry="13"/><ellipse class="rope" cx="152" cy="100" rx="5" ry="13"/><ellipse class="rope-b" cx="164" cy="100" rx="5" ry="13"/><ellipse class="rope-b" cx="174" cy="100" rx="5" ry="13"/><path class="arrow" d="M90 74 L46 74 M46 74 l9 -4 M46 74 l9 4"/><path class="arrow" d="M230 74 L274 74 M274 74 l-9 -4 M274 74 l-9 4"/><text class="note" x="96" y="144" font-size="12">knots slide together and jam</text><text class="note" x="120" y="60" font-size="12">pull both</text></g>',
        caption: 'Wet the knots and pull both standing lines so the two barrels slide together and jam, then trim both tags.',
      },
    ],
    tips: [
      'When joining braid to mono or fluoro, use 8 wraps on the braid side and 4 to 5 on the leader side.',
      'Seat each Uni individually before pulling them together, loose coils will cross and weaken the joint.',
      'Trim the tags flush once jammed, the knot must tick through the rod guides without catching.',
    ],
  },
  {
    id: 'non-slip-loop',
    name: 'Non-Slip Loop Knot',
    level: 2,
    strength: '90%',
    usedFor: 'Tying a fixed loop to jigs, jerkbaits and crankbaits for maximum action',
    whenToUse: 'Use it whenever a snug knot would deaden the lure, the fixed loop lets a jig or minnowbait swing freely. Ideal on fluoro leaders for walleye jigs and jerkbaits.',
    steps: [
      {
        svg: '<g><circle class="hardware" cx="240" cy="150" r="9"/><path class="hardware" d="M240 159 C240 184 252 194 266 194 C280 194 284 182 278 174 L272 180"/><path class="rope" d="M14 60 C60 60 96 60 122 66 C148 72 156 90 142 100 C130 108 112 100 116 86 C120 72 142 66 168 70"/><path class="rope-tag" d="M168 70 C200 76 226 104 234 142"/><text class="note" x="30" y="36" font-size="12">loose overhand, 25 cm from the end</text><text class="note" x="120" y="180" font-size="12">tag through the eye</text></g>',
        caption: 'Tie a loose overhand knot 25 cm from the end, then thread the tag end down through the hook eye.',
      },
      {
        svg: '<g><circle class="hardware" cx="240" cy="150" r="9"/><path class="hardware" d="M240 159 C240 184 252 194 266 194 C280 194 284 182 278 174 L272 180"/><path class="rope" d="M14 60 C60 60 96 60 122 66 C148 72 156 90 142 100 C130 108 112 100 116 86 C120 72 142 66 168 70"/><path class="rope-tag" d="M168 70 C200 76 226 104 234 142 M246 142 C244 110 224 84 196 74 C170 64 140 74 130 88"/><path class="arrow" d="M156 66 C146 72 138 80 134 88 M134 88 l2 -9 M134 88 l9 -3"/><text class="note" x="30" y="130" font-size="12">back through the overhand,</text><text class="note" x="30" y="146" font-size="12">same side it exited</text></g>',
        caption: 'Bring the tag end back up and pass it through the overhand knot, entering the same side it exited.',
      },
      {
        svg: '<g><circle class="hardware" cx="240" cy="150" r="9"/><path class="hardware" d="M240 159 C240 184 252 194 266 194 C280 194 284 182 278 174 L272 180"/><path class="rope" d="M14 60 C56 60 88 60 112 66 C136 72 144 88 132 98 C120 106 104 98 108 84 C112 72 132 66 154 68"/><path class="rope-tag" d="M154 68 C190 74 220 104 232 142 M244 142 C242 112 226 88 202 76 C190 70 176 64 164 62"/><ellipse class="rope-tag" cx="76" cy="60" rx="6" ry="13"/><ellipse class="rope-tag" cx="60" cy="60" rx="6" ry="13"/><ellipse class="rope-tag" cx="44" cy="60" rx="6" ry="13"/><ellipse class="rope-tag" cx="28" cy="60" rx="6" ry="13"/><path class="rope-tag" d="M164 62 C136 52 108 50 86 52"/><text class="note" x="20" y="96" font-size="12">4 wraps around standing line</text></g>',
        caption: 'Wrap the tag end around the standing line 4 times, working away from the overhand knot.',
      },
      {
        svg: '<g><circle class="hardware" cx="240" cy="150" r="9"/><path class="hardware" d="M240 159 C240 184 252 194 266 194 C280 194 284 182 278 174 L272 180"/><path class="rope" d="M14 60 C56 60 88 60 112 66 C136 72 144 88 132 98 C120 106 104 98 108 84 C112 72 132 66 154 68"/><path class="rope-tag" d="M154 68 C190 74 220 104 232 142 M244 142 C242 112 226 88 202 76 C190 70 176 64 164 62"/><ellipse class="rope-tag" cx="76" cy="60" rx="6" ry="13"/><ellipse class="rope-tag" cx="60" cy="60" rx="6" ry="13"/><ellipse class="rope-tag" cx="44" cy="60" rx="6" ry="13"/><ellipse class="rope-tag" cx="28" cy="60" rx="6" ry="13"/><path class="rope-tag" d="M164 62 C136 48 100 44 70 46 C90 44 110 48 124 60 C130 66 128 76 120 80"/><path class="arrow" d="M100 30 C110 40 116 50 118 62 M118 62 l0 -10 M118 62 l8 -6"/><text class="note" x="140" y="30" font-size="12">final pass, same opening</text></g>',
        caption: 'Bring the tag end back and pass it through the overhand knot one last time, through the same opening.',
      },
      {
        svg: '<g><circle class="hardware" cx="240" cy="150" r="9"/><path class="hardware" d="M240 159 C240 184 252 194 266 194 C280 194 284 182 278 174 L272 180"/><path class="rope" d="M14 76 L150 76"/><ellipse class="rope" cx="160" cy="76" rx="6" ry="12"/><ellipse class="rope-tag" cx="172" cy="76" rx="6" ry="12"/><ellipse class="rope-tag" cx="184" cy="76" rx="6" ry="12"/><path class="rope" d="M192 76 C222 82 236 108 238 140 M238 160 C220 130 204 100 190 84"/><path class="rope-tag" d="M180 64 C186 58 192 56 198 58"/><path class="arrow" d="M80 56 L44 56 M44 56 l9 -4 M44 56 l9 4"/><text class="note" x="90" y="40" font-size="12">wet and seat</text><text class="note" x="80" y="150" font-size="12">loop stays open, lure swings free</text></g>',
        caption: 'Wet the knot, pull the tag to snug the wraps, then pull the standing line and hook apart to seat the fixed loop.',
      },
    ],
    tips: [
      'Size the finished loop about 1 cm, big enough for free action but small enough to stay out of the hook.',
      'The tag must re-enter the overhand through the same opening every time, entering the wrong side makes a slip loop.',
      'Use 4 wraps for lines up to 12 lb, drop to 3 wraps on 15-20 lb leaders so the knot seats cleanly.',
    ],
  },
  {
    id: 'blood-knot',
    name: 'Blood Knot',
    level: 3,
    strength: '85%',
    usedFor: 'Joining two lines of similar diameter, classic for mono to mono',
    whenToUse: 'The slimmest way to join two monos within about 20 percent of each other in diameter, which is why fly anglers build leaders with it. For braid to fluoro or very unequal lines, use the Double Uni or FG instead.',
    steps: [
      {
        svg: '<g><path class="rope" d="M16 92 L240 92"/><path class="rope-b" d="M304 108 L80 108"/><text class="note" x="20" y="76" font-size="12">line A</text><text class="note" x="272" y="130" font-size="12">line B</text><text class="note" x="110" y="150" font-size="12">overlap 15 cm, tags opposite ways</text></g>',
        caption: 'Overlap the ends of the two lines by about 15 cm, tag ends pointing in opposite directions.',
      },
      {
        svg: '<g><path class="rope" d="M16 96 L150 96"/><path class="rope-b" d="M304 104 L80 104"/><ellipse class="rope" cx="164" cy="104" rx="7" ry="14"/><ellipse class="rope" cx="184" cy="104" rx="7" ry="14"/><ellipse class="rope" cx="204" cy="104" rx="7" ry="14"/><ellipse class="rope" cx="224" cy="104" rx="7" ry="14"/><ellipse class="rope" cx="244" cy="104" rx="7" ry="14"/><path class="rope" d="M250 96 C240 70 190 62 158 78 L154 92"/><path class="arrow" d="M200 60 C186 62 172 68 160 78 M160 78 l4 -9 M160 78 l10 -2"/><text class="note" x="60" y="170" font-size="12">wrap A around B 5 times,</text><text class="note" x="60" y="186" font-size="12">tuck the tag back between the lines</text></g>',
        caption: 'Wrap line A around line B 5 times, then bring its tag back and tuck it between the two lines at your starting point.',
      },
      {
        svg: '<g><path class="rope" d="M16 96 L128 96"/><path class="rope-b" d="M304 104 L192 104"/><ellipse class="rope" cx="196" cy="104" rx="6" ry="13"/><ellipse class="rope" cx="212" cy="104" rx="6" ry="13"/><ellipse class="rope" cx="228" cy="104" rx="6" ry="13"/><ellipse class="rope" cx="244" cy="104" rx="6" ry="13"/><ellipse class="rope" cx="260" cy="104" rx="6" ry="13"/><path class="rope" d="M264 96 C256 74 210 66 180 78 L164 96"/><ellipse class="rope-b" cx="124" cy="96" rx="6" ry="13"/><ellipse class="rope-b" cx="108" cy="96" rx="6" ry="13"/><ellipse class="rope-b" cx="92" cy="96" rx="6" ry="13"/><ellipse class="rope-b" cx="76" cy="96" rx="6" ry="13"/><ellipse class="rope-b" cx="60" cy="96" rx="6" ry="13"/><path class="rope-b" d="M56 104 C64 128 110 136 140 124 L156 106"/><path class="arrow" d="M120 148 C134 144 148 136 158 126 M158 126 l-4 9 M158 126 l-10 2"/><text class="note" x="40" y="176" font-size="12">wrap B around A 5 times, tuck its tag</text><text class="note" x="40" y="192" font-size="12">through the same gap, opposite way</text></g>',
        caption: 'Wrap line B around line A 5 times in the opposite direction and tuck its tag through the same centre gap, the opposite way.',
      },
      {
        svg: '<g><path class="rope" d="M16 100 L138 100"/><path class="rope-b" d="M304 100 L182 100"/><ellipse class="rope" cx="140" cy="100" rx="4" ry="11"/><ellipse class="rope" cx="148" cy="100" rx="4" ry="11"/><ellipse class="rope" cx="156" cy="100" rx="4" ry="11"/><ellipse class="rope-b" cx="164" cy="100" rx="4" ry="11"/><ellipse class="rope-b" cx="172" cy="100" rx="4" ry="11"/><ellipse class="rope-b" cx="180" cy="100" rx="4" ry="11"/><path class="rope" d="M158 88 L158 74"/><path class="rope-b" d="M162 112 L162 126"/><path class="arrow" d="M90 70 L46 70 M46 70 l9 -4 M46 70 l9 4"/><path class="arrow" d="M230 70 L274 70 M274 70 l-9 -4 M274 70 l-9 4"/><text class="note" x="120" y="56" font-size="12">pull both</text><text class="note" x="90" y="160" font-size="12">coils gather, trim tags close</text></g>',
        caption: 'Wet the knot and pull both standing lines steadily so the coils gather into a tight barrel, then trim both tags close.',
      },
    ],
    tips: [
      'Pinch the centre tucks between finger and thumb while you tighten or the tags will pop back out.',
      'Five wraps each side suits 8-12 lb mono, use 6 or 7 wraps on lighter line and 4 on 20 lb plus.',
      'Both tags must exit the centre in opposite directions, if they leave the same way the knot is tied wrong and will slip.',
    ],
  },
  {
    id: 'snell-knot',
    name: 'Snell Knot (Uni Snell)',
    level: 2,
    strength: '100%',
    usedFor: 'Tying a hook by the shank for a straight, in-line pull',
    whenToUse: 'Snelling aligns the pull with the hook shank, so octopus and circle hooks rotate and set in the corner of the jaw. It is the standard for walleye crawler harnesses and live bait rigs.',
    steps: [
      {
        svg: '<g><circle class="hardware" cx="84" cy="86" r="9"/><path class="hardware" d="M92 88 L218 96 C244 98 256 112 252 128 C248 144 230 148 218 138 L226 130"/><path class="rope" d="M14 60 C40 66 62 76 78 84"/><path class="rope-tag" d="M90 92 C130 100 180 104 224 106"/><text class="note" x="180" y="72" font-size="12">tag along the shank</text><text class="note" x="20" y="130" font-size="12">in through the eye,</text><text class="note" x="20" y="146" font-size="12">toward the point</text></g>',
        caption: 'Thread 15 cm of line through the eye toward the hook point and lay the tag end along the shank.',
      },
      {
        svg: '<g><circle class="hardware" cx="84" cy="86" r="9"/><path class="hardware" d="M92 88 L218 96 C244 98 256 112 252 128 C248 144 230 148 218 138 L226 130"/><path class="rope" d="M14 60 C40 66 62 76 78 84"/><path class="rope-tag" d="M90 92 C130 100 168 104 196 104 C220 104 226 124 208 136 C186 150 140 148 116 130 C104 120 106 106 118 100"/><text class="note" x="110" y="176" font-size="12">form an open loop under the shank</text></g>',
        caption: 'Fold the tag end back to form an open loop hanging under the hook shank.',
      },
      {
        svg: '<g><circle class="hardware" cx="84" cy="86" r="9"/><path class="hardware" d="M92 88 L218 96 C244 98 256 112 252 128 C248 144 230 148 218 138 L226 130"/><path class="rope" d="M14 60 C40 66 62 76 78 84"/><ellipse class="rope-tag" cx="106" cy="92" rx="6" ry="14"/><ellipse class="rope-tag" cx="122" cy="93" rx="6" ry="14"/><ellipse class="rope-tag" cx="138" cy="94" rx="6" ry="14"/><ellipse class="rope-tag" cx="154" cy="95" rx="6" ry="14"/><ellipse class="rope-tag" cx="170" cy="96" rx="6" ry="14"/><ellipse class="rope-tag" cx="186" cy="97" rx="6" ry="14"/><path class="rope-tag" d="M192 104 C204 116 200 132 184 138 C160 146 130 142 114 130"/><path class="arrow" d="M120 56 C140 48 164 48 184 56 M184 56 l-10 -1 M184 56 l-4 -9"/><text class="note" x="60" y="176" font-size="12">6 wraps around shank and line,</text><text class="note" x="60" y="192" font-size="12">passing through the loop</text></g>',
        caption: 'Wrap the tag end 6 times around the shank and the line lying along it, passing through the loop each time.',
      },
      {
        svg: '<g><circle class="hardware" cx="84" cy="86" r="9"/><path class="hardware" d="M92 88 L218 96 C244 98 256 112 252 128 C248 144 230 148 218 138 L226 130"/><path class="rope" d="M14 60 C40 66 62 76 78 84"/><ellipse class="rope-tag" cx="100" cy="91" rx="4" ry="11"/><ellipse class="rope-tag" cx="109" cy="92" rx="4" ry="11"/><ellipse class="rope-tag" cx="118" cy="92" rx="4" ry="11"/><ellipse class="rope-tag" cx="127" cy="93" rx="4" ry="11"/><ellipse class="rope-tag" cx="136" cy="93" rx="4" ry="11"/><ellipse class="rope-tag" cx="145" cy="94" rx="4" ry="11"/><path class="rope-tag" d="M150 102 C156 108 162 110 168 108"/><path class="arrow" d="M50 34 C36 40 26 48 20 56 M20 56 l3 -9 M20 56 l9 -2"/><text class="note" x="60" y="30" font-size="12">pull standing line to snug</text><text class="note" x="150" y="140" font-size="12">wraps seat on the shank, trim</text></g>',
        caption: 'Wet the wraps and pull the standing line so the coils snug down neatly against the shank behind the eye, then trim.',
      },
    ],
    tips: [
      'Feed the line in through the front of the eye, toward the point, or you lose the straight-line pull that makes a snell worth tying.',
      'Keep the wraps butted side by side as you tighten, overlapping coils cut into each other under load.',
      'On a crawler harness, snell two hooks 5-8 cm apart on the same leader for the front and back of the worm.',
    ],
  },
  {
    id: 'fg-knot',
    name: 'FG Knot',
    level: 3,
    strength: '100%',
    usedFor: 'Joining braid main line to a fluorocarbon or mono leader with the slimmest profile',
    whenToUse: 'The best braid-to-leader connection there is, thin enough to cast through the guides all day without a bump. Worth learning once you fish leaders constantly for smallmouth, walleye or pike.',
    steps: [
      {
        svg: '<g><path class="rope" d="M14 100 L306 100"/><path class="rope-b" d="M240 20 L120 150"/><path class="arrow" d="M40 80 L14 80 M14 80 l9 -4 M14 80 l9 4"/><path class="arrow" d="M280 80 L306 80 M306 80 l-9 -4 M306 80 l-9 4"/><text class="note" x="120" y="70" font-size="12">braid held taut</text><text class="note" x="236" y="36" font-size="12">leader</text></g>',
        caption: 'Hold the braid taut between your teeth and the reel, then lay the leader across it at a right angle.',
      },
      {
        svg: '<g><path class="rope" d="M14 100 L306 100"/><path class="rope-b" d="M240 30 C220 50 210 70 206 88 M206 112 C202 94 192 76 176 62 M176 62 C184 84 188 94 190 100 M190 100 C186 108 182 120 178 138 M178 138 C172 116 166 102 158 92 M158 92 C150 100 146 112 144 128"/><ellipse class="rope-b" cx="196" cy="100" rx="5" ry="12"/><ellipse class="rope-b" cx="182" cy="100" rx="5" ry="12"/><ellipse class="rope-b" cx="168" cy="100" rx="5" ry="12"/><ellipse class="rope-b" cx="154" cy="100" rx="5" ry="12"/><path class="arrow" d="M240 140 C220 150 200 154 180 152 M180 152 l9 -5 M180 152 l10 2"/><text class="note" x="34" y="50" font-size="12">wrap leader over, then under,</text><text class="note" x="34" y="66" font-size="12">16-20 alternating wraps</text></g>',
        caption: 'Wrap the leader over the braid, then under it, alternating for 16 to 20 tight wraps that stack along the braid.',
      },
      {
        svg: '<g><path class="rope" d="M14 100 L306 100"/><ellipse class="rope-b" cx="150" cy="100" rx="4" ry="10"/><ellipse class="rope-b" cx="159" cy="100" rx="4" ry="10"/><ellipse class="rope-b" cx="168" cy="100" rx="4" ry="10"/><ellipse class="rope-b" cx="177" cy="100" rx="4" ry="10"/><ellipse class="rope-b" cx="186" cy="100" rx="4" ry="10"/><ellipse class="rope-b" cx="195" cy="100" rx="4" ry="10"/><path class="rope-b" d="M199 92 C210 78 226 66 246 58"/><path class="rope-tag" d="M146 92 C136 78 128 88 138 96 M142 106 C130 116 138 126 146 112"/><path class="arrow" d="M110 60 C122 68 132 78 138 88 M138 88 l-2 -9 M138 88 l-9 -3"/><text class="note" x="20" y="46" font-size="12">2 half hitches with the braid tag</text><text class="note" x="216" y="42" font-size="12">leader tag</text></g>',
        caption: 'Lock the wraps with 2 tight half hitches of the braid tag end around both the leader and the braid.',
      },
      {
        svg: '<g><path class="rope" d="M14 100 L306 100"/><ellipse class="rope-b" cx="150" cy="100" rx="4" ry="10"/><ellipse class="rope-b" cx="159" cy="100" rx="4" ry="10"/><ellipse class="rope-b" cx="168" cy="100" rx="4" ry="10"/><ellipse class="rope-b" cx="177" cy="100" rx="4" ry="10"/><ellipse class="rope-b" cx="186" cy="100" rx="4" ry="10"/><ellipse class="rope-b" cx="195" cy="100" rx="4" ry="10"/><path class="rope-b" d="M199 94 L206 88"/><path class="rope-tag" d="M144 94 C136 82 128 90 138 98 M140 106 C130 114 138 124 146 110 M128 94 C120 82 112 90 122 98 M124 106 C114 114 122 124 130 110 M112 94 C104 82 96 90 106 98"/><path class="arrow" d="M244 66 C230 72 218 80 210 88 M210 88 l3 -9 M210 88 l10 -3"/><text class="note" x="216" y="52" font-size="12">trim leader tag close</text><text class="note" x="20" y="150" font-size="12">4-6 more half hitches over the braid,</text><text class="note" x="20" y="166" font-size="12">finish with a 3-turn locking hitch</text></g>',
        caption: 'Trim the leader tag close, then add 4 to 6 more half hitches over the braid and finish with a 3-turn locking hitch.',
      },
      {
        svg: '<g><path class="rope" d="M14 100 L140 100"/><path class="rope-b" d="M204 100 L306 100"/><ellipse class="rope-b" cx="148" cy="100" rx="3" ry="9"/><ellipse class="rope-b" cx="156" cy="100" rx="3" ry="9"/><ellipse class="rope-b" cx="164" cy="100" rx="3" ry="9"/><ellipse class="rope-b" cx="172" cy="100" rx="3" ry="9"/><ellipse class="rope-b" cx="180" cy="100" rx="3" ry="8"/><ellipse class="rope-b" cx="188" cy="100" rx="3" ry="7"/><ellipse class="rope-b" cx="196" cy="100" rx="3" ry="6"/><path class="arrow" d="M70 74 L30 74 M30 74 l9 -4 M30 74 l9 4"/><path class="arrow" d="M250 74 L290 74 M290 74 l-9 -4 M290 74 l-9 4"/><text class="note" x="118" y="60" font-size="12">test hard</text><text class="note" x="80" y="146" font-size="12">slim taper slides through the guides</text></g>',
        caption: 'Test the finished knot with a hard, steady pull, it should be slim, tapered and immovable on the leader.',
      },
    ],
    tips: [
      'Tension is everything, the braid must stay tight while you weave or the wraps will not bite into the leader.',
      'After the first two half hitches, pull the braid main line hard, the wraps should darken and grip the leader like a Chinese finger trap.',
      'If the wraps slide along the leader when you test it, it will fail on a fish, cut it off and start again.',
    ],
  },
];

export const RIGS = [
  {
    id: 'slip-bobber',
    name: 'Slip Bobber Rig',
    level: 1,
    targets: 'Walleye, perch, crappie, sunfish',
    overview: 'A float that slides freely on the line up to a movable stop knot, so you can fish a bait at exactly 3 m down yet still reel the float to the rod tip for casting. It is the cleanest way to present live bait at a precise depth over weed edges, rock piles and schooling fish.',
    components: [
      'Bobber stop knot, slid to the target depth',
      'Small plastic bead',
      'Slip float',
      'Split shot, 30 cm above the hook',
      '1/16 to 1/8 oz jig, or a #4 octopus hook with a leech, minnow or worm',
    ],
    howToFish: 'Set the stop so the bait rides 30 to 60 cm off bottom, then cast past the spot and let the bait settle as the line feeds through the float. Twitch it back a metre at a time and let it soak, most bites come on the pause as the float tips and slides under. Deadly at dusk on Ontario walleye lakes like Nipissing and the Kawarthas when fish slide up onto shoals.',
    svg: '<g><path class="rope" d="M160 8 L160 188"/><path class="rope-tag" d="M152 22 L168 22 M154 27 L166 27"/><circle class="hardware" cx="160" cy="42" r="5"/><ellipse class="hardware" cx="160" cy="76" rx="12" ry="26"/><path class="hardware" d="M160 50 L160 58 M160 94 L160 102"/><circle class="hardware" cx="160" cy="132" r="6"/><circle class="hardware" cx="160" cy="168" r="9"/><path class="hardware" d="M166 174 C176 182 176 192 166 194 C158 196 152 190 156 184"/><text class="note" x="180" y="26" font-size="12">stop knot, sets depth</text><text class="note" x="180" y="46" font-size="12">bead</text><text class="note" x="184" y="80" font-size="12">slip float</text><text class="note" x="180" y="136" font-size="12">split shot</text><text class="note" x="184" y="172" font-size="12">jig or hook</text><path class="arrow" d="M136 34 L136 14 M136 14 l-4 9 M136 14 l4 9"/></g>',
  },
  {
    id: 'drop-shot',
    name: 'Drop Shot Rig',
    level: 2,
    targets: 'Smallmouth bass, largemouth bass, walleye',
    overview: 'The weight sits on the bottom while the hook stands out from the line above it, suspending a soft plastic right in a fish\'s face. It shakes in place without moving forward, which is why it dominates for deep, pressured smallmouth.',
    components: [
      'Main line, 10-15 lb braid to a 6-8 lb fluorocarbon leader',
      '#1 or #2 drop shot hook, tied with a Palomar so the point rides up',
      '20 to 45 cm of line below the hook',
      '1/8 to 3/8 oz drop shot weight, clipped or tied at the bottom',
    ],
    howToFish: 'Drop it straight down on fish you have found on rock or drop it on a cast and drag it to the spot. Keep the weight planted and shake slack line so the bait quivers without hopping, then let it sit dead for 5 to 10 seconds. On Great Lakes smallmouth water like Georgian Bay, a 3 to 4 inch goby-coloured minnow plastic in 6 to 12 m is the standard.',
    svg: '<g><path class="rope" d="M160 8 L160 176"/><circle class="hardware" cx="168" cy="90" r="7"/><path class="hardware" d="M175 92 C196 94 208 102 206 114 C204 126 190 128 182 120 L188 114"/><ellipse class="rope" cx="160" cy="90" rx="5" ry="10"/><path class="hardware" d="M154 176 L166 176 C172 184 168 194 160 194 C152 194 148 184 154 176"/><text class="note" x="216" y="96" font-size="12">hook point up</text><text class="note" x="180" y="150" font-size="12">20-45 cm to weight</text><text class="note" x="180" y="190" font-size="12">drop shot weight</text><text class="note" x="20" y="20" font-size="12">to rod</text><path class="arrow" d="M120 100 L120 130 M120 130 l-4 -9 M120 130 l4 -9 M120 70 L120 100"/></g>',
  },
  {
    id: 'texas-rig',
    name: 'Texas Rig',
    level: 1,
    targets: 'Largemouth bass, occasionally pike in the slop',
    overview: 'A bullet weight slides on the line ahead of an offset hook whose point is buried back inside a soft plastic, making the whole package weedless. It crawls through milfoil, pads and wood where Ontario largemouth live all summer.',
    components: [
      '1/8 to 1/2 oz bullet weight, nose pointing up the line',
      'Optional bobber stop to peg the weight for thick cover',
      '3/0 or 4/0 extra wide gap offset worm hook',
      'Soft plastic worm, craw or creature bait, rigged with the point skin-hooked back into the body',
    ],
    howToFish: 'Pitch it to holes in the weeds or along dock edges, let it fall on slack line, and watch the line where it enters the water for a tick or a jump. Drag and hop it back with pauses, most bites come on the initial fall. Set the hook hard with a sweep, the point has to drive through the plastic first. Use 1/8 to 1/4 oz in sparse weeds, 3/8 oz or more pegged in matted slop.',
    svg: '<g><path class="rope" d="M160 8 L160 52"/><path class="hardware" d="M150 52 L170 52 L160 84 Z"/><path class="rope" d="M160 84 L160 100"/><circle class="hardware" cx="160" cy="108" r="7"/><path class="hardware" d="M160 115 C160 132 148 140 138 138 C126 136 122 124 130 116 C138 110 148 112 150 120 L144 126"/><path class="hardware" d="M158 116 C186 120 202 134 200 154 C198 174 178 186 158 182 C144 178 138 166 144 154 C134 160 128 172 132 184"/><text class="note" x="184" y="40" font-size="12">bullet weight, point up</text><text class="note" x="184" y="106" font-size="12">3/0 EWG hook</text><text class="note" x="210" y="160" font-size="12">worm, point buried</text><path class="arrow" d="M118 60 L118 88 M118 88 l-4 -9 M118 88 l4 -9"/><text class="note" x="60" y="76" font-size="12">slides</text></g>',
  },
  {
    id: 'lindy-rig',
    name: 'Lindy Rig (Live Bait Rig)',
    level: 2,
    targets: 'Walleye',
    overview: 'A sliding walking sinker on the main line, stopped by a small swivel, with a long light leader and a single hook behind it. A walleye can pick up the bait and swim off without feeling any weight, because the line slips freely through the sinker.',
    components: [
      'Main line, 8-10 lb mono or braid',
      '1/4 to 1/2 oz walking sinker, sliding on the main line',
      'Small barrel swivel as the stop',
      '90 to 180 cm leader of 6-8 lb fluorocarbon',
      '#2 to #6 octopus hook with a minnow, leech or half crawler',
    ],
    howToFish: 'Backtroll or drift at 0.5 to 1 km/h along a breakline, keeping the sinker ticking bottom on a 45 degree line angle. When you feel the tap-tap of a pickup, feed slack or open the bail for a 3 to 5 second count, then reel down and sweep-set. Go to the 180 cm leader in clear water like Lake Simcoe, shorter and heavier around snags.',
    svg: '<g><path class="rope" d="M16 60 L120 96"/><path class="hardware" d="M96 96 C90 82 100 72 110 78 C120 72 130 82 124 96 C120 104 100 104 96 96 Z"/><path class="rope" d="M124 96 L146 100"/><circle class="hardware" cx="154" cy="101" r="6"/><circle class="hardware" cx="168" cy="103" r="6"/><path class="rope-b" d="M174 104 C210 110 250 112 282 112"/><circle class="hardware" cx="288" cy="113" r="7"/><path class="hardware" d="M288 120 C288 138 300 146 308 142"/><text class="note" x="16" y="44" font-size="12">to rod</text><text class="note" x="60" y="130" font-size="12">walking sinker, slides</text><text class="note" x="130" y="80" font-size="12">swivel</text><text class="note" x="196" y="94" font-size="12">90-180 cm leader</text><text class="note" x="240" y="140" font-size="12">octopus hook</text><path class="arrow" d="M60 84 L92 94 M92 94 l-10 -1 M92 94 l-7 -8"/></g>',
  },
  {
    id: 'carolina-rig',
    name: 'Carolina Rig',
    level: 2,
    targets: 'Largemouth and smallmouth bass',
    overview: 'A heavy sliding weight, bead and swivel on the main line with a long leader and a floating soft plastic behind it. The weight drags and stirs bottom while the bait glides naturally above it, covering deep flats and points far faster than a Texas rig.',
    components: [
      '1/2 to 3/4 oz bullet or egg sinker on the main line',
      'Plastic bead to protect the knot from the sinker',
      'Barrel swivel',
      '45 to 90 cm leader, 12-15 lb fluorocarbon',
      '3/0 EWG hook with a lizard, fluke or worm, rigged weedless',
    ],
    howToFish: 'Make a long cast onto a point or flat in 3 to 8 m, let it hit bottom, and drag it sideways with the rod rather than reeling, in 30 to 60 cm pulls with long pauses. Bites feel like mush or a light tick on the leader, reel down until you feel weight and sweep. A staple on rocky mid-lake structure in the Rideau and Kawartha lakes through summer.',
    svg: '<g><path class="rope" d="M16 72 L96 96"/><path class="hardware" d="M94 84 L112 90 L100 112 Z"/><circle class="hardware" cx="118" cy="106" r="5"/><circle class="hardware" cx="134" cy="108" r="6"/><circle class="hardware" cx="148" cy="110" r="6"/><path class="rope-b" d="M154 111 C196 116 232 116 262 112"/><circle class="hardware" cx="268" cy="111" r="7"/><path class="hardware" d="M268 118 C268 134 280 142 290 138 C300 134 300 122 292 118 L288 126"/><path class="hardware" d="M274 108 C296 100 310 104 314 114"/><text class="note" x="16" y="56" font-size="12">to rod</text><text class="note" x="40" y="130" font-size="12">sinker slides</text><text class="note" x="106" y="130" font-size="12">bead</text><text class="note" x="136" y="90" font-size="12">swivel</text><text class="note" x="180" y="96" font-size="12">45-90 cm leader</text><text class="note" x="230" y="160" font-size="12">EWG hook and plastic</text><path class="arrow" d="M40 88 L72 98 M72 98 l-10 -1 M72 98 l-7 -8"/></g>',
  },
  {
    id: 'three-way',
    name: 'Three-Way Rig',
    level: 2,
    targets: 'Walleye, lake trout, channel catfish',
    overview: 'A three-way swivel splits the line into a short dropper holding a heavy sinker and a long leader trailing the bait, keeping it swimming a set distance off bottom in current or on the troll. It shines in rivers like the St. Lawrence and for trolling deep flats where snags eat bottom rigs.',
    components: [
      'Main line, 10-14 lb, to the top ring of a three-way swivel',
      '30 to 60 cm dropper of lighter line (6-8 lb) to a 1 to 3 oz bell sinker',
      '60 to 120 cm leader of 10-12 lb fluorocarbon off the side ring',
      '#2 octopus hook with a minnow, or swap in a small floating crankbait',
    ],
    howToFish: 'Lower it until the sinker touches, then lift a few centimetres and hold, letting current or boat speed swim the bait. Slip downstream in 5 m moves through river seams, or troll at 1.5 to 2.5 km/h along a contour. The light dropper is intentional, when the sinker wedges in rock you break off only the weight and keep the rig.',
    svg: '<g><path class="rope" d="M160 8 L160 78"/><circle class="hardware" cx="160" cy="90" r="10"/><circle class="hardware" cx="160" cy="76" r="4"/><circle class="hardware" cx="150" cy="100" r="4"/><circle class="hardware" cx="172" cy="94" r="4"/><path class="rope-tag" d="M150 104 C144 128 142 152 142 168"/><path class="hardware" d="M136 168 L148 168 C154 176 150 188 142 188 C134 188 130 176 136 168"/><path class="rope-b" d="M176 96 C216 104 252 108 284 108"/><circle class="hardware" cx="290" cy="109" r="6"/><path class="hardware" d="M290 115 C290 130 300 138 309 134"/><text class="note" x="20" y="20" font-size="12">to rod</text><text class="note" x="184" y="70" font-size="12">three-way swivel</text><text class="note" x="34" y="140" font-size="12">30-60 cm dropper,</text><text class="note" x="34" y="156" font-size="12">lighter line</text><text class="note" x="156" y="192" font-size="12">bell sinker</text><text class="note" x="210" y="88" font-size="12">60-120 cm leader</text><text class="note" x="240" y="150" font-size="12">hook and minnow</text></g>',
  },
];
