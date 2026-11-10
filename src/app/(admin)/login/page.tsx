'use client'

import { isAdminSurfaceRole, landingPathForRole } from '@/lib/roles'

import { Suspense, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { signIn } from '@/lib/auth-client'

function AdminLoginForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const resetSuccess = searchParams.get('reset') === 'success'
  // Set by adminFetch when an admin API answers 401. Without it a lapsed
  // session just dumped the user back on a blank login form with no idea why
  // the page they were using had stopped responding.
  const sessionExpired = searchParams.get('expired') === '1'
  // Sanitize redirect to prevent open redirect attacks — only allow internal paths
  const rawRedirect = searchParams.get('redirect') || '/dashboard'
  const redirectTo = rawRedirect.startsWith('/') && !rawRedirect.startsWith('//') ? rawRedirect : '/dashboard'
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')

    if (!email.trim() || !password) {
      setError('Email and password are required.')
      return
    }

    setSubmitting(true)

    try {
      // Check rate limit first
      const limitRes = await fetch('/api/admin/check-rate-limit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      })
      const limitData = await limitRes.json()

      if (!limitData.allowed) {
        setError('Too many login attempts. Please try again in 15 minutes.')
        setSubmitting(false)
        return
      }

      // Attempt login via direct fetch (bypass Better Auth client issues)
      const res = await fetch('/api/auth/sign-in/email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email.trim().toLowerCase(),
          password,
        }),
        credentials: 'include',
      })

      if (!res.ok) {
        // Differentiate "your creds are wrong" from "our backend is broken" so
        // a server outage doesn't get mistaken for a typo by every user.
        if (res.status >= 500) {
          setError("We're having a server issue on our side — not your password. Please contact the site administrator at admin@example.com.")
        } else if (res.status === 429) {
          setError('Too many login attempts. Please try again in 15 minutes.')
        } else {
          setError('Invalid email or password.')
        }
        setSubmitting(false)
        return
      }

      const data = await res.json()

      if (data.error) {
        setError(data.error.message ?? 'Invalid email or password.')
        setSubmitting(false)
        return
      }

      // Better Auth sets session cookie via Set-Cookie header when res.ok
      // Response body contains { user, session } — no top-level "token" field
      if (!data.user && !data.session) {
        setError('Invalid email or password.')
        setSubmitting(false)
        return
      }

      // Course-only roles (e.g. brokers signing in for the DPOR prep) get
      // routed to the course player instead of the lead/team admin surface.
      // /api/admin/me returns 401 for users not in admin_users (also "course
      // only") and the role string for those who are. Anything that's not in
      // the admin-surface allowlist goes to /course/dashboard.
      let destination = redirectTo
      try {
        const meRes = await fetch('/api/admin/me', { credentials: 'include' })
        if (!meRes.ok) {
          destination = '/course/dashboard'
        } else {
          const me = await meRes.json()
          if (!isAdminSurfaceRole(me?.role)) {
            // Agents go to the handbook; other non-admin roles to the course.
            destination = landingPathForRole(me?.role, redirectTo)
          }
        }
      } catch {
        // If the role lookup itself fails, fall back to the original
        // redirectTo — same behavior as before this guard existed.
      }

      // Hard redirect so middleware sees the new cookie
      window.location.href = destination
    } catch {
      setError('Something went wrong. Please try again.')
      setSubmitting(false)
    }
  }

  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="w-full max-w-sm">
        <form onSubmit={handleSubmit} className="rounded-xl border border-[#222] bg-[#111] p-8">
          <h2
            className="mb-2 text-2xl font-extrabold text-white"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            Admin Login
          </h2>
          <p className="mb-6 text-sm text-[#6B7280]">
            Sign in to manage leads, teams, and analytics.
          </p>

          {sessionExpired && !error && (
            <div className="mb-4 rounded-lg border border-amber-900/50 bg-amber-950/30 px-4 py-3 text-sm text-amber-400">
              Your session expired, so we signed you out. Sign in again and you&apos;ll go straight back to
              the page you were on.
            </div>
          )}

          {resetSuccess && (
            <div className="mb-4 rounded-lg border border-emerald-900/50 bg-emerald-950/30 px-4 py-3 text-sm text-emerald-400">
              Password reset successful. Sign in with your new password.
            </div>
          )}

          {error && (
            <div className="mb-4 rounded-lg border border-red-900/50 bg-red-950/30 px-4 py-3 text-sm text-red-400">
              {error}
            </div>
          )}

          <div className="flex flex-col gap-4">
            <div>
              <label htmlFor="email" className="mb-1 block text-xs font-medium text-[#9CA3AF]">
                Email address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={submitting}
                autoComplete="email"
                className="w-full rounded-lg border border-[#333] bg-[#0A0A0A] px-3.5 py-2.5 text-sm text-white placeholder:text-[#4B5563] focus:border-white focus:outline-none focus:ring-1 focus:ring-white disabled:opacity-50"
                placeholder="admin@example.com"
              />
            </div>

            <div>
              <label htmlFor="password" className="mb-1 block text-xs font-medium text-[#9CA3AF]">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={submitting}
                autoComplete="current-password"
                className="w-full rounded-lg border border-[#333] bg-[#0A0A0A] px-3.5 py-2.5 text-sm text-white placeholder:text-[#4B5563] focus:border-white focus:outline-none focus:ring-1 focus:ring-white disabled:opacity-50"
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="mt-2 w-full rounded-lg bg-white px-4 py-3 text-sm font-bold text-black transition-colors hover:bg-[#E5E7EB] disabled:cursor-not-allowed disabled:opacity-50"
            >
              {submitting ? 'Signing in...' : 'Sign In'}
            </button>
          </div>

          <Link
            href="/forgot-password"
            className="mt-4 block text-center text-sm text-[#9CA3AF] transition-colors hover:text-white"
          >
            Forgot password?
          </Link>
        </form>
      </div>
    </div>
  )
}

export default function AdminLoginPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-[60vh] items-center justify-center">
          <div className="text-sm text-[#6B7280]">Loading...</div>
        </div>
      }
    >
      <AdminLoginForm />
    </Suspense>
  )
}
