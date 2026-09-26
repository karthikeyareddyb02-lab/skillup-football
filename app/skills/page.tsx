import type { Metadata } from "next"
import { PageKicker } from "@/components/page-kicker"
import { SkillCard } from "@/components/skill-card"
import { difficulties, difficultyCopy, skillsByDifficulty } from "@/lib/skills"

export const metadata: Metadata = {
  title: "Skills",
  description: "Football skills from daily basics to elite, ranked by difficulty of learning.",
}

export default function SkillsPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
      <div className="max-w-2xl space-y-3">
        <PageKicker>The squad · Difficulty 1 to 5</PageKicker>
        <h1 className="text-4xl sm:text-5xl">All the football skills</h1>
        <p className="text-muted-foreground">
          Level 1 is the normal, daily-life football you use every session. Level 5
          is the best-of-the-best — rare skills for players who already own the basics.
        </p>
      </div>
      <div className="mt-10 space-y-12">
        {difficulties.map((level) => {
          const copy = difficultyCopy[level]
          return (
            <section key={level} id={`level-${level}`} className="space-y-4">
              <div>
                <h2 className="text-3xl">
                  Level {level} · {copy.label}
                </h2>
                <p className="mt-1 text-muted-foreground">{copy.blurb}</p>
              </div>
              <div className="grid gap-4 md:grid-cols-3">
                {skillsByDifficulty(level).map((skill) => (
                  <SkillCard key={skill.slug} skill={skill} />
                ))}
              </div>
            </section>
          )
        })}
      </div>
    </div>
  )
}
