import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PitchAnimation } from "@/components/pitch-animation"
import { YoutubeEmbed } from "@/components/youtube-embed"
import { skills, skillsWithVideo } from "@/lib/skills"

export const metadata: Metadata = {
  title: "Videos",
  description: "Match examples and pitch animations that show when to play each football skill.",
}

export default function VideosPage() {
  const filmed = skillsWithVideo()

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
      <div className="max-w-2xl space-y-3">
        <p className="text-sm uppercase tracking-[0.2em] text-primary">Film room</p>
        <h1 className="text-4xl sm:text-5xl">Videos and animations</h1>
        <p className="text-muted-foreground">
          Real clips show the skill in a match picture. The pitch animations show
          the timing — when the defender leans, when the runner goes, when the
          ball has to leave your foot.
        </p>
      </div>

      <section className="mt-10 space-y-4">
        <h2 className="text-3xl">Posted match examples</h2>
        {filmed.length === 0 ? (
          <p className="text-muted-foreground">Clips will be added here as they are posted.</p>
        ) : (
          <div className="grid gap-6 lg:grid-cols-2">
            {filmed.map((skill) => (
              <Card key={skill.slug}>
                <CardHeader>
                  <CardTitle>
                    <Link href={`/skills/${skill.slug}`} className="hover:text-primary">
                      {skill.name}
                    </Link>
                  </CardTitle>
                  <CardDescription>{skill.matchExample}</CardDescription>
                </CardHeader>
                <CardContent>
                  <YoutubeEmbed
                    videoId={skill.videoId!}
                    title={skill.videoTitle ?? skill.name}
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </section>

      <section className="mt-14 space-y-4">
        <h2 className="text-3xl">Animation lab</h2>
        <p className="max-w-2xl text-muted-foreground">
          Replay these until you can name the trigger: the lean, the run, or the
          open lane.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          {skills.map((skill) => (
            <Card key={skill.slug}>
              <CardHeader>
                <CardTitle>
                  <Link href={`/skills/${skill.slug}`} className="hover:text-primary">
                    {skill.name}
                  </Link>
                </CardTitle>
                <CardDescription>{skill.matchExample}</CardDescription>
              </CardHeader>
              <CardContent>
                <PitchAnimation kind={skill.animation} />
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
