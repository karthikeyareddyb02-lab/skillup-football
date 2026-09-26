import Link from "next/link"
import { FootballBall } from "@/components/football-ball"

export function SiteFooter() {
  return (
    <footer className="mt-auto">
      <div className="kit-stripe h-1.5 w-full" />
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p className="flex items-center gap-2">
          <FootballBall className="size-6" />
          SkillUp Football — learn the skill, the moment, and the match example.
        </p>
        <div className="flex gap-4 uppercase tracking-wide">
          <Link href="/skills" className="hover:text-primary">
            Skills
          </Link>
          <Link href="/when-to-use" className="hover:text-primary">
            Where to use it
          </Link>
          <Link href="/videos" className="hover:text-primary">
            Videos
          </Link>
        </div>
      </div>
    </footer>
  )
}
