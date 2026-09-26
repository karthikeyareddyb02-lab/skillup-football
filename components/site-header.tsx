"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"
import { FootballBall } from "@/components/football-ball"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { useAuth } from "@/lib/auth"
import { cn } from "@/lib/utils"

const links = [
  { href: "/", label: "Home" },
  { href: "/skills", label: "Skills" },
  { href: "/when-to-use", label: "Where to use it" },
  { href: "/videos", label: "Videos" },
]

export function SiteHeader() {
  const pathname = usePathname()
  const { user } = useAuth()

  return (
    <header className="sticky top-0 z-40 bg-background/85 backdrop-blur-md">
      <div className="kit-stripe h-1.5 w-full" />
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5 font-heading text-lg tracking-wide">
          <FootballBall className="size-9 drop-shadow-sm" />
          <span>
            SkillUp
            <span className="block text-[11px] tracking-[0.22em] text-primary">Football</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-lg px-3 py-2 text-sm uppercase tracking-wide text-muted-foreground transition-colors hover:text-foreground",
                pathname === link.href && "bg-primary/15 text-primary",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:block">
          <Button asChild variant={user ? "outline" : "default"}>
            <Link href="/login">{user ? user.name : "Log in"}</Link>
          </Button>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden" aria-label="Open menu">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72">
            <SheetHeader>
              <SheetTitle>SkillUp Football</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-2 px-4" aria-label="Mobile">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "rounded-lg px-3 py-2 text-sm uppercase tracking-wide",
                    pathname === link.href ? "bg-primary/15 text-primary" : "text-muted-foreground",
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild className="mt-2">
                <Link href="/login">{user ? user.name : "Log in"}</Link>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
      <div className="kit-stripe h-1 w-full opacity-70" />
    </header>
  )
}
