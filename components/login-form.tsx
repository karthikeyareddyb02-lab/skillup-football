"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useAuth } from "@/lib/auth"

export function LoginForm({
  redirectTo = "/",
  compact = false,
}: {
  redirectTo?: string
  compact?: boolean
}) {
  const router = useRouter()
  const { user, signIn, signUp, signOut } = useAuth()
  const [error, setError] = useState<string | null>(null)
  const [mode, setMode] = useState("login")

  function finish(message: string | null) {
    setError(message)
    if (!message) {
      router.push(redirectTo)
    }
  }

  if (user) {
    return (
      <div className="space-y-4">
        <p className="text-sm text-muted-foreground">
          You are in as{" "}
          <span className="font-medium text-foreground">{user.name}</span>. Your
          training desk is ready.
        </p>
        <div className="flex gap-2">
          <Button asChild>
            <Link href="/skills">Open skills</Link>
          </Button>
          <Button type="button" variant="outline" onClick={signOut}>
            Log out
          </Button>
        </div>
      </div>
    )
  }

  return (
    <Tabs value={mode} onValueChange={setMode}>
      <TabsList>
        <TabsTrigger value="login">Log in</TabsTrigger>
        <TabsTrigger value="signup">Create account</TabsTrigger>
      </TabsList>
      <TabsContent value="login" className={compact ? "pt-3" : "pt-4"}>
        <form
          className="space-y-3"
          onSubmit={(event) => {
            event.preventDefault()
            const data = new FormData(event.currentTarget)
            finish(
              signIn(String(data.get("email")), String(data.get("password"))),
            )
          }}
        >
          <Field id="login-email" name="email" label="Email" type="email" />
          <Field
            id="login-password"
            name="password"
            label="Password"
            type="password"
          />
          {error ? <ErrorText text={error} /> : null}
          <Button type="submit" className="w-full">
            Enter SkillUp
          </Button>
        </form>
      </TabsContent>
      <TabsContent value="signup" className={compact ? "pt-3" : "pt-4"}>
        <form
          className="space-y-3"
          onSubmit={(event) => {
            event.preventDefault()
            const data = new FormData(event.currentTarget)
            finish(
              signUp(
                String(data.get("name")),
                String(data.get("email")),
                String(data.get("password")),
              ),
            )
          }}
        >
          <Field id="signup-name" name="name" label="Name" type="text" />
          <Field id="signup-email" name="email" label="Email" type="email" />
          <Field
            id="signup-password"
            name="password"
            label="Password"
            type="password"
          />
          {error ? <ErrorText text={error} /> : null}
          <Button type="submit" className="w-full">
            Create account
          </Button>
        </form>
      </TabsContent>
    </Tabs>
  )
}

function Field({
  id,
  name,
  label,
  type,
}: {
  id: string
  name: string
  label: string
  type: string
}) {
  return (
    <div className="space-y-1.5">
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} name={name} type={type} required autoComplete={name} />
    </div>
  )
}

function ErrorText({ text }: { text: string }) {
  return (
    <p className="text-sm text-destructive" role="alert">
      {text}
    </p>
  )
}
