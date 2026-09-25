export type Difficulty = 1 | 2 | 3 | 4 | 5
export type AnimationKind =
  | "pass"
  | "dribble"
  | "turn"
  | "through"
  | "shot"
  | "fake"
  | "cross"
  | "setpiece"

export type Skill = {
  slug: string
  name: string
  difficulty: Difficulty
  summary: string
  situation: string
  timing: string
  matchExample: string
  videoId?: string
  videoTitle?: string
  animation: AnimationKind
  image: string
  imageAlt: string
}

export const difficultyCopy: Record<
  Difficulty,
  { label: string; blurb: string }
> = {
  1: {
    label: "Daily basics",
    blurb: "Normal-level skills you use in almost every training session and match.",
  },
  2: {
    label: "Match ready",
    blurb: "Skills that start winning duels once the game speeds up.",
  },
  3: {
    label: "Game changer",
    blurb: "Moves that open space, split lines, and change the picture.",
  },
  4: {
    label: "Advanced",
    blurb: "High-risk, high-reward skills for players who already have the basics.",
  },
  5: {
    label: "Elite",
    blurb: "The best-of-the-best. Rare, difficult, and used by the very top players.",
  },
}

export const skills: Skill[] = [
  {
    slug: "inside-foot-pass",
    name: "Inside-foot pass",
    difficulty: 1,
    summary:
      "The cleanest way to move the ball. Open the hip, strike through the middle, and keep the pass on the grass.",
    situation:
      "Use it in build-up, sideways circulation, and any time a teammate is showing for the ball within 10–20 metres. This is the pass you use in daily football — from the first kick-in to the last minute.",
    timing:
      "Play it the moment your teammate’s body is open and the passing lane is clear. If a defender is stepping, wait one touch and pass into the space they just left.",
    matchExample:
      "Watch any controlled team from the back: the centre-back opens the body and rolls an inside-foot pass into the midfielder’s feet. The skill looks simple because the timing is perfect.",
    animation: "pass",
    image:
      "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Football on grass, ready for a short pass",
  },
  {
    slug: "close-control",
    name: "Close control",
    difficulty: 1,
    summary:
      "Keep the ball a step from your feet so you can change direction without losing it.",
    situation:
      "Use it when you receive under pressure, dribble through midfield traffic, or hold the ball while teammates arrive. This is a daily skill — without it, every other move falls apart.",
    timing:
      "Take a small touch the instant the ball arrives. If a defender is within an arm’s length, your first touch should go away from their strongest foot, not into them.",
    matchExample:
      "Full-backs and midfielders do this every match: receive, cushion, and keep the ball so close that a presser cannot nick it.",
    animation: "dribble",
    image:
      "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Players competing for close control in a packed stadium",
  },
  {
    slug: "receiving-half-turn",
    name: "Receiving on the half-turn",
    difficulty: 1,
    summary:
      "Take the ball already facing forward so one touch puts you into the next action.",
    situation:
      "Use it when a pass comes into your feet with space ahead — midfielders and strikers do this constantly. It turns a safe receive into an attack.",
    timing:
      "Check your shoulder before the ball arrives. Open the back foot as the pass is struck, not after you have already stopped the ball.",
    matchExample:
      "A number 8 receives between the lines, lets the ball run across the body, and is already facing the opponent’s goal on the first touch.",
    animation: "turn",
    image:
      "https://images.unsplash.com/photo-1551958219-acbc608c6377?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Footballers receiving and turning with the ball",
  },
  {
    slug: "step-over",
    name: "Step-over",
    difficulty: 2,
    summary:
      "Sell a fake direction with the standing leg so the defender leans, then take the ball the other way.",
    situation:
      "Use it in 1v1s on the wing or when you need a yard to cross or shoot. It works best when the defender is square in front of you, not when they are already side-on.",
    timing:
      "Start the step-over one step before the defender plants. The explode touch must come as they shift their weight, not after they have recovered.",
    matchExample:
      "Wide attackers use this to freeze a full-back, then burst outside or cut inside. One clean step-over is enough — stacking five of them usually loses the ball.",
    animation: "fake",
    image:
      "https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Attacker taking on a defender in a 1v1",
  },
  {
    slug: "wing-cross",
    name: "Wing cross",
    difficulty: 2,
    summary:
      "Deliver the ball from the flank into the box at a height and pace strikers can attack.",
    situation:
      "Use it when you have beaten or isolated a full-back and teammates are arriving in the box. Early crosses beat a set defence; cut-back crosses punish a defence that has dropped too deep.",
    timing:
      "Look up one stride before contact. Cross when the striker is making the near-post or penalty-spot run — not when they are standing still.",
    matchExample:
      "A winger reaches the byline and pulls the ball back to the penalty spot. That cut-back is often more dangerous than a high ball onto the keeper.",
    animation: "cross",
    image:
      "https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Night stadium ready for a wide attack",
  },
  {
    slug: "first-time-finish",
    name: "First-time finish",
    difficulty: 2,
    summary:
      "Strike the ball as it arrives so the goalkeeper never gets set.",
    situation:
      "Use it on cut-backs, second balls, and crosses that skip through the six-yard box. Taking a touch here often lets the defence recover.",
    timing:
      "Decide before the ball reaches you. Plant the standing foot early and hit through the middle if you want it low, or across the face if the keeper is rushing out.",
    matchExample:
      "A midfielder arrives late at the top of the box and side-foots a bouncing cut-back first time into the corner.",
    animation: "shot",
    image:
      "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Football goalmouth ready for a finish",
  },
  {
    slug: "cruyff-turn",
    name: "Cruyff turn",
    difficulty: 3,
    summary:
      "Shape to pass or shoot, then drag the ball behind the standing leg and leave the defender facing the wrong way.",
    situation:
      "Use it when a defender is tight on your back or rushing to block a pass. It is a change-of-direction skill for the touchline, the box, or a crowded midfield pocket.",
    timing:
      "Sell the fake first. The drag happens in the same moment the defender lunges toward the fake pass. If they stay patient, abort and protect the ball.",
    matchExample:
      "Johan Cruyff’s original 1974 World Cup turn is the template: shape to cross, drag behind the standing leg, and the marker is gone.",
    videoId: "V9klCWR_nKk",
    videoTitle: "The Cruyff Turn tutorial",
    animation: "turn",
    image:
      "https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Player changing direction with the ball",
  },
  {
    slug: "through-ball",
    name: "Through ball",
    difficulty: 3,
    summary:
      "Slide the ball between or beyond defenders into the runner’s path, not to their feet.",
    situation:
      "Use it when a teammate is starting a run in behind and the defensive line is high or flat. The pass has to beat the last defender and stay onside.",
    timing:
      "Release the ball as the runner hits full stride, just before they cross the line. Early is offside. Late is a tackle. Watch the defender’s hips — when they turn, the lane is open.",
    matchExample:
      "A midfielder sees the striker peel off the last man and weights a grass-cutter into the channel. The striker never breaks stride.",
    animation: "through",
    image:
      "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Open pitch with space in behind a defence",
  },
  {
    slug: "give-and-go",
    name: "Give-and-go",
    difficulty: 3,
    summary:
      "Pass, sprint into space, and receive the return before the defender can turn.",
    situation:
      "Use it around the box, in midfield combinations, and whenever one player can pin a defender while another runs off them. Two players beat one marker.",
    timing:
      "The return pass should be played first time. Your run starts as you release the first pass, not after you watch it arrive.",
    matchExample:
      "A striker lays the ball off to a teammate on the edge of the box and spins in behind. The one-two is finished before the centre-back can recover.",
    animation: "pass",
    image:
      "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Team combination play toward goal",
  },
  {
    slug: "elastico",
    name: "Elastico",
    difficulty: 4,
    summary:
      "Push the ball one way with the outside of the foot, then snap it back with the inside in one motion.",
    situation:
      "Use it in a 1v1 when the defender is lunging at the first fake. It is not a midfield recycling skill — save it for the final third or the touchline.",
    timing:
      "The snap-back must happen before the defender plants the foot they committed. If they stay balanced, the elastico becomes a heavy touch.",
    matchExample:
      "Ronaldinho’s elastico in 1v1s sold the outside, then took the inside lane in a single flick. The defender’s weight was already gone.",
    animation: "fake",
    image:
      "https://images.unsplash.com/photo-1553778263-73a83bab9b0c?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Close-up of quick feet around a football",
  },
  {
    slug: "marseille-turn",
    name: "Marseille turn",
    difficulty: 4,
    summary:
      "Drag the ball with the sole, spin 360, and leave the presser behind your back.",
    situation:
      "Use it when a defender is tight from behind or the side and you need to keep the ball while turning out. Classic in the centre of the pitch under a press.",
    timing:
      "Start the drag as the defender reaches for the ball. Your body becomes the shield during the spin. Exit toward the open side, not back into traffic.",
    matchExample:
      "Zinedine Zidane used this turn to escape double teams in midfield. The spin is not for show — it is a shield and a reset in one move.",
    animation: "turn",
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba6852?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Athlete turning at speed",
  },
  {
    slug: "no-look-pass",
    name: "No-look pass",
    difficulty: 4,
    summary:
      "Shape your eyes and body one way, then release the ball to a teammate the defence has stopped watching.",
    situation:
      "Use it in the final third when a defender is reading your eyes. It only works if you have already scanned and know exactly where the receiver is.",
    timing:
      "Look at the dummy option until the defender’s hips turn that way, then pass the other way without changing your head. If you glance late, they recover.",
    matchExample:
      "Playmakers freeze a midfield line by staring at the striker, then slip the ball to an unmarked runner on the far side.",
    animation: "through",
    image:
      "https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Playmaker looking one way before releasing a pass",
  },
  {
    slug: "rabona",
    name: "Rabona",
    difficulty: 5,
    summary:
      "Wrap the kicking foot behind the standing leg and strike. Used to cross or finish when the body shape is ‘wrong’.",
    situation:
      "Use it when the ball is on your weaker side and you have no time to shift it, or when a regular swing would let the defender block. This is an elite last-resort or highlight skill — not a default cross.",
    timing:
      "The standing foot must be planted close enough to wrap cleanly. Strike when the ball is slightly ahead. If you are off balance, take a touch instead.",
    matchExample:
      "Wingers and attackers have scored and crossed with rabonas when they were cut onto their weaker foot at the byline.",
    animation: "cross",
    image:
      "https://images.unsplash.com/photo-1551958219-acbc608c6377?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Player wrapping a strike from an awkward body shape",
  },
  {
    slug: "panenka",
    name: "Panenka",
    difficulty: 5,
    summary:
      "Chip the penalty softly down the middle after selling a hard strike to one corner.",
    situation:
      "Use it only from the spot, and only when you are sure the goalkeeper will dive. This is a high-difficulty, high-nerve skill — miss and it looks careless.",
    timing:
      "The chip is struck after the keeper commits. Watch their first hop. If they stay central, abort and hit a normal penalty.",
    matchExample:
      "Antonín Panenka’s 1976 European Championship final kick invented the move. Modern players still use it when the keeper has dived early all game.",
    animation: "setpiece",
    image:
      "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Penalty spot facing an empty net",
  },
  {
    slug: "trivela",
    name: "Trivela",
    difficulty: 5,
    summary:
      "Bend the ball with the outside of the boot so it curves away from the keeper or into a runner.",
    situation:
      "Use it for crosses, through balls, and long-range shots when the inside of the foot cannot create the angle. Elite players use it when the body is already open to the outside.",
    timing:
      "Contact is late and across the outside of the ball. The curve needs space — do not try it in a crowded six-yard box. Release when the far-side runner or far post is the target.",
    matchExample:
      "Ricardo Quaresma made the trivela a signature: outside-foot bends from wide areas that looked impossible from the body shape.",
    animation: "shot",
    image:
      "https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Floodlit stadium for an outside-foot strike",
  },
]

export const difficulties: Difficulty[] = [1, 2, 3, 4, 5]

export function getSkill(slug: string) {
  return skills.find((skill) => skill.slug === slug)
}

export function skillsByDifficulty(level: Difficulty) {
  return skills.filter((skill) => skill.difficulty === level)
}

export function skillsWithVideo() {
  return skills.filter((skill) => skill.videoId)
}
