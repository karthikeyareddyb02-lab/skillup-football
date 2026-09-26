import Image from "next/image"
import Link from "next/link"
import { FootballBall } from "@/components/football-ball"
import { LoginForm } from "@/components/login-form"
import { PageKicker } from "@/components/page-kicker"
import { PitchAnimation } from "@/components/pitch-animation"
import { SkillCard } from "@/components/skill-card"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { skills } from "@/lib/skills"

const aboutPhotos = [
  {
    src: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1400&q=80",
    alt: "Goalmouth on a floodlit pitch",
    caption: "Train the way match days actually look.",
  },
  {
    src: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?auto=format&fit=crop&w=1400&q=80",
    alt: "Players competing in a packed stadium",
    caption: "Every skill is tied to a real game moment.",
  },
  {
    src: "https://images.unsplash.com/photo-1551958219-acbc608c6377?auto=format&fit=crop&w=1400&q=80",
    alt: "Footballers moving the ball as a team",
    caption: "From daily passes to elite finishes.",
  },
]

export default function HomePage() {
  return (
    <div>
      <section className="stadium-hero">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:py-20">
          <div className="space-y-6">
            <PageKicker>Kick-off · Football academy</PageKicker>
            <h1 className="max-w-xl text-5xl leading-[0.9] sm:text-7xl">
              Learn the skill. Know the moment. See it in the match.
            </h1>
            <p className="max-w-xl text-lg text-pretty text-foreground/85">
              SkillUp Football teaches moves by difficulty, then shows where to
              use them, the perfect timing, and real examples — with pitch
              animations you can replay until the picture is clear.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href="/skills">Browse the squad of skills</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/videos">Watch the film room</Link>
              </Button>
            </div>
            <div className="flex items-center gap-3 text-sm text-foreground/75">
              <FootballBall className="size-8" />
              15 skills · 5 difficulty shirts · match-day timing
            </div>
            <PitchAnimation kind="powershot" caption={false} />
          </div>
          <Card className="match-card bg-card/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Sign in at the tunnel</CardTitle>
              <CardDescription>
                Create an account to keep your place. This first version stores
                the login on this device only.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <LoginForm compact />
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
        <div className="mb-6">
          <PageKicker>The club</PageKicker>
          <h2 className="mt-2 text-3xl">About SkillUp</h2>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            This is a training desk for players who want more than a list of tricks.
            Each skill has three layers: the move, the situation, and the film.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {aboutPhotos.map((photo) => (
            <figure key={photo.src} className="overflow-hidden rounded-xl ring-1 ring-primary/20">
              <div className="relative aspect-4/3">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="bg-card px-4 py-3 text-sm text-muted-foreground">
                {photo.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-6xl gap-4 px-4 pb-16 sm:px-6 md:grid-cols-3">
        {[
          {
            href: "/skills",
            title: "The skills",
            text: "Fifteen football skills from shirt 1 (daily basics) to shirt 5 (elite).",
            animation: "dribble" as const,
          },
          {
            href: "/when-to-use",
            title: "On the pitch",
            text: "The situation and the perfect timing for every skill, written for the game.",
            animation: "through" as const,
          },
          {
            href: "/videos",
            title: "Film room",
            text: "Match-style clips and pitch animations that show exactly when to play the move.",
            animation: "powershot" as const,
          },
        ].map((item) => (
          <Card key={item.href} className="match-card">
            <CardHeader>
              <PitchAnimation kind={item.animation} caption={false} />
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.text}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="outline">
                <Link href={item.href}>Take the field</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pb-20 sm:px-6">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <PageKicker>First XI</PageKicker>
            <h2 className="mt-2 text-3xl">Start with a few skills</h2>
          </div>
          <Button asChild variant="link">
            <Link href="/skills">See the full squad</Link>
          </Button>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {skills.slice(0, 3).map((skill) => (
            <SkillCard key={skill.slug} skill={skill} />
          ))}
        </div>
      </section>
    </div>
  )
}
