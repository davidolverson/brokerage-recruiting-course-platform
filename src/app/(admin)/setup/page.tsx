'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { signUp } from '@/lib/auth-client'

export default function AdminSetupPage() {
  const router = useRouter()
  const [checking, setChecking] = useState(true)
  const [locked, setLocked] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    fetch('/api/admin/check-owner')
      .then((res) => res.json())
      .then((data) => {
        if (data.hasOwner) {
          setLocked(true)
          router.replace('/login')
        }
        setChecking(false)
      })
      .catch(() => setChecking(false))
  }, [router])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')

    if (!name.trim() || !email.trim() || !password) {
      setError('All fields are required.')
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
      // Step 1: Create Better Auth user
      const authResult = await signUp.email({
        name: name.trim(),
        email: email.trim().toLowerCase(),
        password,
      })

      if (authResult.error) {
        setError(authResult.error.message ?? 'Failed to create account.')
        setSubmitting(false)
        return
      }

      const userId = authResult.data?.user?.id
      if (!userId) {
        setError('Account created but user ID not returned.')
        setSubmitting(false)
        return
      }

      // Step 2: Create admin_users row with owner role
      const adminRes = await fetch('/api/admin/setup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId,
          email: email.trim().toLowerCase(),
          name: name.trim(),
        }),
      })

      if (!adminRes.ok) {
        const adminError = await adminRes.json()
        setError(adminError.error ?? 'Failed to set up admin profile.')
        setSubmitting(false)
        return
      }

      // Success — redirect to dashboard
      router.push('/dashboard')
    } catch {
      setError('Something went wrong. Please try again.')
      setSubmitting(false)
    }
  }

  if (checking) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <p className="text-sm text-[#6B7280]">Checking setup status...</p>
      </div>
    )
  }

  if (locked) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <p className="text-sm text-[#6B7280]">Setup already complete. Redirecting...</p>
      </div>
    )
  }

  const inputClass =
    'min-h-[44px] w-full rounded-lg border border-[#333] bg-[#0A0A0A] px-3.5 py-2.5 text-sm text-white placeholder:text-[#4B5563] focus:border-white focus:outline-none focus:ring-1 focus:ring-white disabled:opacity-50'

  const passwordValid = password.length >= 8
  const passwordsMatch = password.length > 0 && password === confirm

  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="w-full max-w-md">
        {/* Intro */}
        <div className="mb-5 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#6B7280]">
            One-time setup
          </p>
          <h2
            className="mt-2 text-xl font-extrabold text-white sm:text-2xl"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            Create the Branch Owner
          </h2>
          <p className="mt-2 text-sm text-[#6B7280]">
            This account has full control of the admin panel — team, settings, and leads.
            Once created, this page locks permanently.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-xl border border-[#222] bg-[#111] p-5 sm:p-6"
        >
          {error && (
            <div className="mb-4 rounded-lg border border-red-900/50 bg-red-950/30 px-4 py-3 text-sm text-red-400">
              {error}
            </div>
          )}

          <div className="flex flex-col gap-4">
            <div>
              <label htmlFor="name" className="mb-1.5 block text-xs font-medium text-[#9CA3AF]">
                Full name
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
              <label htmlFor="email" className="mb-1.5 block text-xs font-medium text-[#9CA3AF]">
                Email address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={submitting}
                autoComplete="email"
                className={inputClass}
                placeholder="admin@example.com"
              />
              <p className="mt-1.5 text-xs text-[#4B5563]">Used to sign in and receive admin alerts.</p>
            </div>

            <div>
              <label htmlFor="password" className="mb-1.5 block text-xs font-medium text-[#9CA3AF]">
                Password
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
              {submitting ? 'Creating account...' : 'Create Owner Account'}
            </button>
          </div>
        </form>

        <p className="mt-4 text-center text-xs text-[#4B5563]">
          Additional team members are added later from the Team page by invite.
        </p>
      </div>
    </div>
  )
}
