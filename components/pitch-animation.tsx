import { cn } from "@/lib/utils"
import type { AnimationKind } from "@/lib/skills"

const labels: Record<AnimationKind, string> = {
  pass: "Short pass into feet",
  dribble: "Close control through traffic",
  turn: "Fake, then turn away",
  through: "Ball played in behind",
  shot: "Strike toward goal",
  fake: "Sell one way, explode the other",
  cross: "Delivery from the flank",
  setpiece: "Spot kick after the keeper dives",
}

export function PitchAnimation({
  kind,
  className,
}: {
  kind: AnimationKind
  className?: string
}) {
  return (
    <figure className={cn("space-y-3", className)}>
      <div className="pitch" data-kind={kind} aria-hidden="true">
        <div className="pitch-markings" />
        <div className="pitch-goal" />
        <div className="pitch-player player-a" />
        <div className="pitch-player player-b" />
        <div className="pitch-player defender" />
        <div className="pitch-ball" />
      </div>
      <figcaption className="text-sm text-muted-foreground">
        Animation: {labels[kind]}. Watch the ball, then the defender’s weight.
      </figcaption>
    </figure>
  )
}
