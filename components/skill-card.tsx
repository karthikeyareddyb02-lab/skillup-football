import Image from "next/image"
import Link from "next/link"
import { PitchAnimation } from "@/components/pitch-animation"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { difficultyCopy, type Skill } from "@/lib/skills"

export function SkillCard({ skill }: { skill: Skill }) {
  const level = difficultyCopy[skill.difficulty]

  return (
    <Link href={`/skills/${skill.slug}`} className="block h-full">
      <Card className="match-card h-full transition-colors hover:bg-muted/40">
        <div className="relative">
          <div className="pointer-events-none absolute inset-0">
            <Image
              src={skill.image}
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover opacity-25"
            />
          </div>
          <PitchAnimation kind={skill.animation} caption={false} className="relative z-[1]" />
          <span className="shirt-number absolute top-3 left-3 z-10 grid size-9 place-items-center rounded-full bg-primary text-base text-primary-foreground shadow-md">
            {skill.difficulty}
          </span>
        </div>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Badge variant="outline">Level {skill.difficulty}</Badge>
            <span className="text-xs text-muted-foreground">{level.label}</span>
          </div>
          <CardTitle>{skill.name}</CardTitle>
          <CardDescription>{skill.summary}</CardDescription>
        </CardHeader>
        <CardContent className="text-muted-foreground">
          The pitch replay shows this skill, then open the page for the full picture.
        </CardContent>
      </Card>
    </Link>
  )
}
