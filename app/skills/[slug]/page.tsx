import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PitchAnimation } from "@/components/pitch-animation"
import { YoutubeEmbed } from "@/components/youtube-embed"
import { difficultyCopy, getSkill, skills } from "@/lib/skills"

export function generateStaticParams() {
  return skills.map((skill) => ({ slug: skill.slug }))
}

export async function generateMetadata({
  params,
}: PageProps<"/skills/[slug]">): Promise<Metadata> {
  const { slug } = await params
  const skill = getSkill(slug)
  if (!skill) {
    return { title: "Skill" }
  }
  return {
    title: skill.name,
    description: skill.summary,
  }
}

export default async function SkillDetailPage({
  params,
}: PageProps<"/skills/[slug]">) {
  const { slug } = await params
  const skill = getSkill(slug)
  if (!skill) {
    notFound()
  }

  const level = difficultyCopy[skill.difficulty]

  return (
    <article className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
      <Button asChild variant="ghost" className="mb-6 px-0">
        <Link href="/skills">Back to all skills</Link>
      </Button>
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <Badge>Level {skill.difficulty}</Badge>
            <span className="text-sm text-muted-foreground">{level.label}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl">{skill.name}</h1>
          <p className="text-lg text-muted-foreground">{skill.summary}</p>
          <div className="relative aspect-16/9 overflow-hidden rounded-xl">
            <Image
              src={skill.image}
              alt={skill.imageAlt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover"
            />
          </div>
        </div>
        <PitchAnimation kind={skill.animation} />
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Where you use it</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">{skill.situation}</CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Perfect timing</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">{skill.timing}</CardContent>
        </Card>
      </div>

      <section className="mt-10 space-y-4">
        <h2 className="text-3xl">Match example</h2>
        <p className="max-w-3xl text-muted-foreground">{skill.matchExample}</p>
        {skill.videoId ? (
          <YoutubeEmbed videoId={skill.videoId} title={skill.videoTitle ?? skill.name} />
        ) : (
          <p className="text-sm text-muted-foreground">
            A filmed clip for this skill will be posted here. The pitch animation
            above already shows the timing.
          </p>
        )}
      </section>
    </article>
  )
}
