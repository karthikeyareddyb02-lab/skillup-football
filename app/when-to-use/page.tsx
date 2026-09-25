import type { Metadata } from "next"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { difficultyCopy, skills } from "@/lib/skills"

export const metadata: Metadata = {
  title: "Where to use it",
  description: "Situations and perfect timing for every SkillUp football skill.",
}

export default function WhenToUsePage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
      <div className="max-w-2xl space-y-3">
        <p className="text-sm uppercase tracking-[0.2em] text-primary">Situations</p>
        <h1 className="text-4xl sm:text-5xl">Where you need to use the skill</h1>
        <p className="text-muted-foreground">
          A skill is only useful if you know the picture. For every move we write
          the situation and the exact moment to play it.
        </p>
      </div>
      <div className="mt-10 space-y-4">
        {skills.map((skill) => (
          <Card key={skill.slug}>
            <CardHeader className="gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <div className="mb-2 flex items-center gap-2">
                  <Badge variant="outline">Level {skill.difficulty}</Badge>
                  <span className="text-xs text-muted-foreground">
                    {difficultyCopy[skill.difficulty].label}
                  </span>
                </div>
                <CardTitle>
                  <Link href={`/skills/${skill.slug}`} className="hover:text-primary">
                    {skill.name}
                  </Link>
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="mb-2 font-medium">Situation</h3>
                <p className="text-muted-foreground">{skill.situation}</p>
              </div>
              <div>
                <h3 className="mb-2 font-medium">Perfect timing</h3>
                <p className="text-muted-foreground">{skill.timing}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
