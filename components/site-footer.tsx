import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="border-t border-border/70">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>SkillUp Football — learn the skill, the moment, and the match example.</p>
        <div className="flex gap-4">
          <Link href="/skills" className="hover:text-foreground">
            Skills
          </Link>
          <Link href="/when-to-use" className="hover:text-foreground">
            Where to use it
          </Link>
          <Link href="/videos" className="hover:text-foreground">
            Videos
          </Link>
        </div>
      </div>
    </footer>
  )
}
