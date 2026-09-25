"use client"

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react"

export type AuthUser = {
  name: string
  email: string
}

type StoredUser = AuthUser & { password: string }

type AuthContextValue = {
  user: AuthUser | null
  ready: boolean
  signIn: (email: string, password: string) => string | null
  signUp: (name: string, email: string, password: string) => string | null
  signOut: () => void
}

const USERS_KEY = "skillup-users"
const SESSION_KEY = "skillup-session"

const AuthContext = createContext<AuthContextValue | null>(null)

function readUsers(): StoredUser[] {
  try {
    const raw = localStorage.getItem(USERS_KEY)
    return raw ? (JSON.parse(raw) as StoredUser[]) : []
  } catch {
    return []
  }
}

function writeUsers(users: StoredUser[]) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users))
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    try {
      const raw = localStorage.getItem(SESSION_KEY)
      if (raw) {
        setUser(JSON.parse(raw) as AuthUser)
      }
    } catch {
      localStorage.removeItem(SESSION_KEY)
    }
    setReady(true)
  }, [])

  const value = useMemo<AuthContextValue>(
    () => ({
      user,
      ready,
      signIn(email, password) {
        const match = readUsers().find(
          (entry) =>
            entry.email.toLowerCase() === email.trim().toLowerCase() &&
            entry.password === password,
        )
        if (!match) {
          return "No account matches that email and password. Create one first."
        }
        const next = { name: match.name, email: match.email }
        localStorage.setItem(SESSION_KEY, JSON.stringify(next))
        setUser(next)
        return null
      },
      signUp(name, email, password) {
        const cleanEmail = email.trim().toLowerCase()
        if (!name.trim() || !cleanEmail || password.length < 4) {
          return "Add your name, a real email, and a password of at least 4 characters."
        }
        const users = readUsers()
        if (users.some((entry) => entry.email === cleanEmail)) {
          return "That email already has an account. Log in instead."
        }
        users.push({
          name: name.trim(),
          email: cleanEmail,
          password,
        })
        writeUsers(users)
        const next = { name: name.trim(), email: cleanEmail }
        localStorage.setItem(SESSION_KEY, JSON.stringify(next))
        setUser(next)
        return null
      },
      signOut() {
        localStorage.removeItem(SESSION_KEY)
        setUser(null)
      },
    }),
    [user, ready],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider")
  }
  return context
}
