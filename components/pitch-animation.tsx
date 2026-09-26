import { FootballBall } from "@/components/football-ball"
import { cn } from "@/lib/utils"
import type { AnimationKind } from "@/lib/skills"

export const animationLabels: Record<AnimationKind, string> = {
  pass: "Inside-foot pass into a teammate",
  dribble: "Close control through traffic",
  receive: "Receive on the half-turn",
  stepover: "Step-over, then explode away",
  cross: "Cross from the wing into the box",
  powershot: "Power shot straight into the net",
  turn: "Cruyff turn away from the marker",
  through: "Through ball in behind",
  onetwo: "Give-and-go around the defender",
  elastico: "Elastico: fake one way, snap back",
  roulette: "Marseille turn / roulette spin",
  nolook: "No-look pass the other way",
  rabona: "Rabona wrap into the box",
  panenka: "Panenka chip after the keeper dives",
  trivela: "Trivela curve into the far side",
}

export function PitchAnimation({
  kind,
  className,
  compact = false,
  caption = true,
}: {
  kind: AnimationKind
  className?: string
  compact?: boolean
  caption?: boolean
}) {
  return (
    <figure className={cn("space-y-2", className)}>
      <div
        className={cn("pitch", compact && "pitch-compact")}
        data-kind={kind}
        role="img"
        aria-label={animationLabels[kind]}
      >
        <div className="pitch-markings" />
        <div className="pitch-goal">
          <div className="pitch-net" />
        </div>
        <div className="pitch-player player-a" />
        <div className="pitch-player player-b" />
        <div className="pitch-player defender" />
        <div className="pitch-player keeper" />
        <div className="pitch-ball">
          <FootballBall className="size-full" />
        </div>
      </div>
      {caption ? (
        <figcaption className="text-sm text-muted-foreground">
          {animationLabels[kind]}
        </figcaption>
      ) : null}
    </figure>
  )
}
