import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { difficultyCopy, type Skill } from "@/lib/skills"

export function SkillCard({ skill }: { skill: Skill }) {
  const level = difficultyCopy[skill.difficulty]

  return (
    <Link href={`/skills/${skill.slug}`} className="block h-full">
      <Card className="h-full transition-colors hover:bg-muted/40">
        <div className="relative aspect-16/10 overflow-hidden">
          <Image
            src={skill.image}
            alt={skill.imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover"
          />
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
          Open for situation, perfect timing, and a match example.
        </CardContent>
      </Card>
    </Link>
  )
}
