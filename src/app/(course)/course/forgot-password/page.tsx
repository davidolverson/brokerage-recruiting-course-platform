'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function CourseForgotPasswordPage() {
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
          redirectTo: '/course/reset-password',
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
    <div className="flex min-h-screen">
      {/* Left side */}
      <div className="hidden lg:flex lg:w-1/2 flex-col justify-center bg-black p-12 text-white">
        <Link href="/course" className="mb-8 text-sm text-white/70 hover:text-white">
          &larr; Back to Course
        </Link>
        <h1 className="mb-4 text-3xl font-extrabold" style={{ fontFamily: 'Manrope, sans-serif' }}>
          Reset Your Password
        </h1>
        <p className="text-white/70">
          Enter the email you used to sign up and we'll send you a link to create a new password.
        </p>
      </div>

      {/* Right side */}
      <div className="flex w-full flex-col justify-center px-6 py-12 lg:w-1/2 lg:px-16">
        <div className="mx-auto w-full max-w-sm">
          <Link href="/course/signup" className="mb-6 block text-sm text-gray-500 hover:text-gray-900 lg:hidden">
            &larr; Back to login
          </Link>
          <h2 className="mb-1 text-2xl font-extrabold text-gray-900" style={{ fontFamily: 'Manrope, sans-serif' }}>
            Forgot Password
          </h2>
          <p className="mb-6 text-sm text-gray-500">
            Enter your email and we'll send you a reset link.
          </p>

          {sent ? (
            <div className="space-y-4">
              <div className="rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-800">
                If an account exists with that email, a reset link has been sent. Check your inbox.
              </div>
              <Link
                href="/course/signup"
                className="block text-center text-sm text-gray-500 hover:text-gray-900"
              >
                &larr; Back to login
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                  {error}
                </div>
              )}

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={submitting}
                  autoComplete="email"
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-[#EA580C] focus:ring-[#EA580C] focus:outline-none disabled:opacity-50"
                  placeholder="jane@example.com"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full rounded-lg bg-[#EA580C] px-4 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-[#e0740f] disabled:opacity-50"
              >
                {submitting ? 'Sending...' : 'Send Reset Link'}
              </button>

              <Link
                href="/course/signup"
                className="block text-center text-sm text-gray-500 hover:text-gray-900"
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
