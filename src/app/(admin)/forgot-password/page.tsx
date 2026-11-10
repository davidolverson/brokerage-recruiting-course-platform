'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [sent, setSent] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')

    if (!email.trim()) {
      setError('Please enter your email address.')
      return
    }

    setSubmitting(true)

    try {
      const res = await fetch('/api/auth/request-password-reset', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email.trim().toLowerCase(),
          redirectTo: '/reset-password',
        }),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        setError(data?.message ?? 'Failed to send reset email. Please try again.')
        setSubmitting(false)
        return
      }

      setSent(true)
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="w-full max-w-sm">
        <div className="rounded-xl border border-[#222] bg-[#111] p-8">
          <h2
            className="mb-2 text-2xl font-extrabold text-white"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            Forgot Password
          </h2>
          <p className="mb-6 text-sm text-[#6B7280]">
            Enter your email and we&apos;ll send you a reset link.
          </p>

          {sent ? (
            <div className="space-y-4">
              <div className="rounded-lg border border-emerald-900/50 bg-emerald-950/30 px-4 py-3 text-sm text-emerald-400">
                If an account exists with that email, a reset link has been sent.
              </div>
              <Link
                href="/login"
                className="block text-center text-sm text-[#9CA3AF] transition-colors hover:text-white"
              >
                &larr; Back to login
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
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

                <button
                  type="submit"
                  disabled={submitting}
                  className="mt-2 w-full rounded-lg bg-white px-4 py-3 text-sm font-bold text-black transition-colors hover:bg-[#E5E7EB] disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {submitting ? 'Sending...' : 'Send Reset Link'}
                </button>
              </div>

              <Link
                href="/login"
                className="mt-4 block text-center text-sm text-[#9CA3AF] transition-colors hover:text-white"
              >
                &larr; Back to login
              </Link>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
