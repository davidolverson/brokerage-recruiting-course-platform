'use client'

import { useState, useEffect, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { signUp } from '@/lib/auth-client'
import { signOutCompletely } from '@/lib/sign-out'

const ROLE_LABELS: Record<string, string> = {
  team_leader: 'Team Leader',
  staff: 'Staff',
  broker: 'Broker',
  agent: 'Example Investor Team Agent',
}

const ROLE_BLURB: Record<string, string> = {
  team_leader: 'You can manage your team’s leads and pipeline.',
  staff: 'You can view and work the leads assigned to you.',
  broker: 'You have access to the pre-licensing course.',
  agent: 'You’ll have the agent handbook — everything you need for your first 90 days, in one place.',
}

const inputClass =
  'min-h-[44px] w-full rounded-lg border border-[#333] bg-[#0A0A0A] px-3.5 py-2.5 text-sm text-white placeholder:text-[#4B5563] focus:border-white focus:outline-none focus:ring-1 focus:ring-white disabled:opacity-50'

function AcceptInviteForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const token = searchParams.get('token')

  const [invite, setInvite] = useState<{ email: string; role: string; team_slug: string | null } | null>(null)
  const [error, setError] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [checking, setChecking] = useState(true)
  // Somebody else may already be signed in on this browser — a shared office
  // desktop is the normal case here, not the edge case.
  const [signedInAs, setSignedInAs] = useState<string | null>(null)

  useEffect(() => {
    if (!token) {
      setError('No invite token provided.')
      setChecking(false)
      return
    }

    fetch('/api/admin/me', { credentials: 'include' })
      .then((r) => (r.ok ? r.json() : null))
      .then((me) => setSignedInAs(me?.email ?? null))
      .catch(() => {})

    fetch(`/api/admin/accept-invite?token=${token}`)
      .then(async (res) => {
        if (!res.ok) {
          const data = await res.json()
          throw new Error(data.error ?? 'Invalid invite')
        }
        return res.json()
      })
      .then((data) => {
        setInvite(data)
        setChecking(false)
      })
      .catch((err) => {
        setError(err.message)
        setChecking(false)
      })
  }, [token])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')

    if (!name.trim()) {
      setError('Name is required.')
      return
    }
    if (password.length < 8) {
      setError('Password must be at least 8 characters.')
      return
    }
    if (password !== confirm) {
      setError('Passwords do not match.')
      return
    }

    setSubmitting(true)

    try {
      const authResult = await signUp.email({
        name: name.trim(),
        email: invite!.email,
        password,
      })

      if (authResult.error) {
        setError(authResult.error.message ?? 'Failed to create account.')
        setSubmitting(false)
        return
      }

      const userId = authResult.data?.user?.id
      if (!userId) {
        setError('Account created but ID missing.')
        setSubmitting(false)
        return
      }

      const acceptRes = await fetch('/api/admin/accept-invite', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token, userId, name: name.trim() }),
      })

      if (!acceptRes.ok) {
        const data = await acceptRes.json()
        setError(data.error ?? 'Failed to complete setup.')
        setSubmitting(false)
        return
      }

      router.push('/login')
    } catch {
      setError('Something went wrong.')
      setSubmitting(false)
    }
  }

  if (checking) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <p className="text-sm text-[#6B7280]">Validating invite...</p>
      </div>
    )
  }

  if (error && !invite) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="w-full max-w-md rounded-xl border border-[#222] bg-[#111] p-6 text-center sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#6B7280]">Invite problem</p>
          <p className="mt-3 text-sm text-red-400">{error}</p>
          <p className="mt-3 text-xs text-[#4B5563]">
            Invite links expire after 72 hours. Contact the branch owner for a new invite.
          </p>
        </div>
      </div>
    )
  }

  if (!invite) return null

  const roleLabel = ROLE_LABELS[invite.role] ?? invite.role
  const roleBlurb = ROLE_BLURB[invite.role]
  const passwordValid = password.length >= 8
  const passwordsMatch = password.length > 0 && password === confirm

  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="w-full max-w-md">
        {/* Invite summary card */}
        <div className="mb-5 rounded-xl border border-[#222] bg-[#111] p-5 sm:p-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#6B7280]">
            You&apos;ve been invited
          </p>
          <div className="mt-3 flex flex-wrap items-center gap-2">
            <span className="inline-flex rounded-full bg-white px-2.5 py-0.5 text-xs font-semibold text-black">
              {roleLabel}
            </span>
            {invite.team_slug && (
              <span className="inline-flex rounded-full border border-[#444] px-2.5 py-0.5 text-xs font-semibold text-[#9CA3AF]">
                {invite.team_slug}
              </span>
            )}
          </div>
          {roleBlurb && <p className="mt-3 text-sm text-[#9CA3AF]">{roleBlurb}</p>}
          <p className="mt-2 break-words text-xs text-[#4B5563]">{invite.email}</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-xl border border-[#222] bg-[#111] p-5 sm:p-6"
        >
          <h2
            className="text-lg font-extrabold text-white sm:text-xl"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            Create your account
          </h2>
          <p className="mt-1 text-xs text-[#6B7280]">
            Set a name and password to finish joining the branch.
          </p>

          {/* A shared office desktop is the normal case here. Saying nothing
              meant the invite appeared to vanish. */}
          {signedInAs && signedInAs.toLowerCase() !== String(invite?.email ?? '').toLowerCase() && (
            <div className="mt-4 rounded-lg border border-amber-900/50 bg-amber-950/20 px-4 py-3 text-xs text-amber-300">
              This browser is signed in as <span className="font-semibold">{signedInAs}</span>. You can still
              create the account for <span className="font-semibold">{invite?.email}</span> below, but sign out
              first if you want to use it straight away.{' '}
              <button
                type="button"
                onClick={async () => {
                  await signOutCompletely()
                  setSignedInAs(null)
                }}
                className="font-semibold underline underline-offset-2"
              >
                Sign out
              </button>
            </div>
          )}

          {error && (
            <div className="mt-4 rounded-lg border border-red-900/50 bg-red-950/30 px-4 py-3 text-sm text-red-400">
              {error}
            </div>
          )}

          <div className="mt-4 flex flex-col gap-4">
            <div>
              <label htmlFor="name" className="mb-1.5 block text-xs font-medium text-[#9CA3AF]">
                Your name
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={submitting}
                autoComplete="name"
                className={inputClass}
                placeholder="Jane Doe"
              />
            </div>
            <div>
              <label htmlFor="password" className="mb-1.5 block text-xs font-medium text-[#9CA3AF]">
                Create password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={submitting}
                autoComplete="new-password"
                className={inputClass}
                placeholder="Min 8 characters"
              />
              {password.length > 0 && (
                <p className={`mt-1.5 text-xs ${passwordValid ? 'text-green-400' : 'text-[#4B5563]'}`}>
                  {passwordValid ? 'Strong enough' : 'At least 8 characters'}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="confirm" className="mb-1.5 block text-xs font-medium text-[#9CA3AF]">
                Confirm password
              </label>
              <input
                id="confirm"
                type="password"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                disabled={submitting}
                autoComplete="new-password"
                className={inputClass}
              />
              {confirm.length > 0 && (
                <p className={`mt-1.5 text-xs ${passwordsMatch ? 'text-green-400' : 'text-red-400'}`}>
                  {passwordsMatch ? 'Passwords match' : 'Passwords do not match'}
                </p>
              )}
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="mt-2 w-full rounded-lg bg-white px-4 py-3 text-sm font-bold text-black transition-colors hover:bg-[#E5E7EB] disabled:cursor-not-allowed disabled:opacity-50"
            >
              {submitting ? 'Setting up...' : 'Create Account'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default function AcceptInvitePage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-[60vh] items-center justify-center">
          <p className="text-sm text-[#6B7280]">Loading...</p>
        </div>
      }
    >
      <AcceptInviteForm />
    </Suspense>
  )
}
