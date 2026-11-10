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
      <div className="flex min-h-screen items-center justify-center px-6">
        <div className="w-full max-w-sm text-center">
          <h2 className="mb-2 text-2xl font-extrabold text-gray-900" style={{ fontFamily: 'Manrope, sans-serif' }}>
            Invalid Link
          </h2>
          <p className="mb-6 text-sm text-gray-500">
            This password reset link is invalid or has expired.
          </p>
          <Link href="/course/forgot-password" className="text-sm text-[#EA580C] hover:underline">
            Request a new reset link
          </Link>
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

      router.push('/course/signup?reset=success')
    } catch {
      setError('Something went wrong. Please try again.')
      setSubmitting(false)
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center px-6">
      <div className="w-full max-w-sm">
        <form onSubmit={handleSubmit} className="space-y-4">
          <h2 className="mb-1 text-2xl font-extrabold text-gray-900" style={{ fontFamily: 'Manrope, sans-serif' }}>
            Reset Password
          </h2>
          <p className="mb-6 text-sm text-gray-500">
            Enter your new password below.
          </p>

          {error && (
            <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              {error}
            </div>
          )}

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">New Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={submitting}
              autoComplete="new-password"
              className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-[#EA580C] focus:ring-[#EA580C] focus:outline-none disabled:opacity-50"
              placeholder="At least 8 characters"
            />
          </div>

          <div>
            <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">Confirm Password</label>
            <input
              id="confirm-password"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              disabled={submitting}
              autoComplete="new-password"
              className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-[#EA580C] focus:ring-[#EA580C] focus:outline-none disabled:opacity-50"
              placeholder="Repeat your new password"
            />
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="w-full rounded-lg bg-[#EA580C] px-4 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-[#e0740f] disabled:opacity-50"
          >
            {submitting ? 'Resetting...' : 'Reset Password'}
          </button>

          <Link
            href="/course/signup"
            className="block text-center text-sm text-gray-500 hover:text-gray-900"
          >
            &larr; Back to login
          </Link>
        </form>
      </div>
    </div>
  )
}

export default function CourseResetPasswordPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center">
          <p className="text-sm text-gray-500">Loading...</p>
        </div>
      }
    >
      <ResetPasswordForm />
    </Suspense>
  )
}
