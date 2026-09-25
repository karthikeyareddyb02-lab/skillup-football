import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LoginForm } from "@/components/login-form"

export const metadata: Metadata = {
  title: "Log in",
  description: "Log in or create a SkillUp Football account on this device.",
}

export default function LoginPage() {
  return (
    <div className="mx-auto flex w-full max-w-lg flex-col px-4 py-16 sm:px-6">
      <Card>
        <CardHeader>
          <CardTitle>Welcome back to the pitch</CardTitle>
          <CardDescription>
            Log in or create an account. Your session stays on this computer for
            now — no password is sent to a server yet.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <LoginForm />
        </CardContent>
      </Card>
    </div>
  )
}
