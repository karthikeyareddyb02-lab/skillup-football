import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LoginForm } from "@/components/login-form"
import { SkillCard } from "@/components/skill-card"
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
      <section className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:py-16">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.2em] text-primary">Football skill academy</p>
          <h1 className="max-w-xl text-5xl leading-none sm:text-6xl">
            Learn the skill. Know the moment. See it in the match.
          </h1>
          <p className="max-w-xl text-lg text-muted-foreground">
            SkillUp Football teaches moves by difficulty, then shows where to use
            them, the perfect timing, and real examples — with animations you can
            replay until the picture is clear.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link href="/skills">Browse skills</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/videos">Watch examples</Link>
            </Button>
          </div>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Log in on the home page</CardTitle>
            <CardDescription>
              Create an account to keep your place. This first version stores the
              login on this device only.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <LoginForm compact />
          </CardContent>
        </Card>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pb-16 sm:px-6">
        <div className="mb-6">
          <h2 className="text-3xl">About SkillUp</h2>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            This is a training desk for players who want more than a list of tricks.
            Each skill has three layers: the move, the situation, and the film.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {aboutPhotos.map((photo) => (
            <figure key={photo.src} className="overflow-hidden rounded-xl ring-1 ring-foreground/10">
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
            title: "Skills",
            text: "Fifteen football skills from difficulty 1 (daily basics) to difficulty 5 (elite).",
          },
          {
            href: "/when-to-use",
            title: "Where to use it",
            text: "The situation and the perfect timing for every skill, written for the pitch.",
          },
          {
            href: "/videos",
            title: "Videos",
            text: "Match-style clips and pitch animations that show exactly when to play the move.",
          },
        ].map((item) => (
          <Card key={item.href}>
            <CardHeader>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.text}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="outline">
                <Link href={item.href}>Open</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pb-20 sm:px-6">
        <div className="mb-6 flex items-end justify-between gap-4">
          <h2 className="text-3xl">Start with a few skills</h2>
          <Button asChild variant="link">
            <Link href="/skills">See all</Link>
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
