'use client'

import { Suspense, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'

function ResetPasswordForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const token = searchParams.get('token') ?? ''

  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)

  if (!token) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="w-full max-w-sm">
          <div className="rounded-xl border border-[#222] bg-[#111] p-8 text-center">
            <h2
              className="mb-2 text-2xl font-extrabold text-white"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              Invalid Link
            </h2>
            <p className="mb-6 text-sm text-[#6B7280]">
              This password reset link is invalid or has expired.
            </p>
            <Link
              href="/forgot-password"
              className="text-sm text-[#9CA3AF] transition-colors hover:text-white"
            >
              Request a new reset link
            </Link>
          </div>
        </div>
      </div>
    )
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')

    if (!password || !confirmPassword) {
      setError('Both fields are required.')
      return
    }

    if (password.length < 8) {
      setError('Password must be at least 8 characters.')
      return
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.')
      return
    }

    setSubmitting(true)

    try {
      const res = await fetch('/api/auth/reset-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token, newPassword: password }),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        setError(data?.message ?? 'Failed to reset password. The link may have expired.')
        setSubmitting(false)
        return
      }

      // Redirect to login with success indicator
      router.push('/login?reset=success')
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
            Reset Password
          </h2>
          <p className="mb-6 text-sm text-[#6B7280]">
            Enter your new password below.
          </p>

          {error && (
            <div className="mb-4 rounded-lg border border-red-900/50 bg-red-950/30 px-4 py-3 text-sm text-red-400">
              {error}
            </div>
          )}

          <div className="flex flex-col gap-4">
            <div>
              <label htmlFor="password" className="mb-1 block text-xs font-medium text-[#9CA3AF]">
                New password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={submitting}
                autoComplete="new-password"
                className="w-full rounded-lg border border-[#333] bg-[#0A0A0A] px-3.5 py-2.5 text-sm text-white placeholder:text-[#4B5563] focus:border-white focus:outline-none focus:ring-1 focus:ring-white disabled:opacity-50"
                placeholder="At least 8 characters"
              />
            </div>

            <div>
              <label htmlFor="confirm-password" className="mb-1 block text-xs font-medium text-[#9CA3AF]">
                Confirm new password
              </label>
              <input
                id="confirm-password"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                disabled={submitting}
                autoComplete="new-password"
                className="w-full rounded-lg border border-[#333] bg-[#0A0A0A] px-3.5 py-2.5 text-sm text-white placeholder:text-[#4B5563] focus:border-white focus:outline-none focus:ring-1 focus:ring-white disabled:opacity-50"
                placeholder="Repeat your new password"
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="mt-2 w-full rounded-lg bg-white px-4 py-3 text-sm font-bold text-black transition-colors hover:bg-[#E5E7EB] disabled:cursor-not-allowed disabled:opacity-50"
            >
              {submitting ? 'Resetting...' : 'Reset Password'}
            </button>
          </div>

          <Link
            href="/login"
            className="mt-4 block text-center text-sm text-[#9CA3AF] transition-colors hover:text-white"
          >
            &larr; Back to login
          </Link>
        </form>
      </div>
    </div>
  )
}

export default function ResetPasswordPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-[60vh] items-center justify-center">
          <div className="text-sm text-[#6B7280]">Loading...</div>
        </div>
      }
    >
      <ResetPasswordForm />
    </Suspense>
  )
}
