'use client'

import { useState, useEffect, Suspense } from 'react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { authClient } from '@/lib/auth-client'

const BENEFITS = [
  { title: 'Free Course', desc: 'Competitors charge $300-$600. Ours is completely free.' },
  { title: 'Interactive Learning', desc: 'Scenarios, flashcards, drag-and-drop, not just walls of text.' },
  { title: 'Practice Quizzes', desc: 'Chapter quizzes, section exams, and full timed mock exams.' },
  { title: 'Track Your Progress', desc: 'See exactly where you stand and what to study next.' },
  { title: 'Virginia-Specific', desc: 'Focused on VA law, DPOR regulations, and the PSI exam format.' },
  { title: 'Path to Your License', desc: 'After the course, we guide you through the exam and into a team.' },
]

export default function CourseSignupPage() {
  return (
    <Suspense fallback={<div className="flex min-h-screen items-center justify-center"><p className="text-gray-500">Loading...</p></div>}>
      <CourseSignupForm />
    </Suspense>
  )
}

function CourseSignupForm() {
  const router = useRouter()
  const searchParams = useSearchParams()

  useEffect(() => { document.title = 'Sign Up | VA License Prep | Acme Realty' }, [])
  const redirect = searchParams.get('redirect') || '/course/dashboard'
  const resetSuccess = searchParams.get('reset') === 'success'
  const [mode, setMode] = useState<'login' | 'register'>(resetSuccess ? 'login' : 'register')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      if (mode === 'register') {
        const result = await authClient.signUp.email({ email, password, name })
        if (result.error) {
          setError(result.error.message || 'Registration failed')
          setLoading(false)
          return
        }
        // Auto-enroll new signups into the course
        await fetch('/api/course/enroll', { method: 'POST' }).catch(() => {})
      } else {
        const result = await authClient.signIn.email({ email, password })
        if (result.error) {
          setError(result.error.message || 'Login failed')
          setLoading(false)
          return
        }
      }
      router.push(redirect)
    } catch {
      setError('Something went wrong. Please try again.')
      setLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen">
      {/* Left side - Benefits */}
      <div className="hidden lg:flex lg:w-1/2 flex-col justify-center bg-black p-12 text-white">
        <Link href="/" className="mb-8 text-sm text-white/70 hover:text-white">
          &larr; Back to Acme Realty
        </Link>
        <h1 className="mb-2 text-4xl font-extrabold" style={{ fontFamily: 'Manrope, sans-serif' }}>
          Virginia Real Estate License Prep
        </h1>
        <p className="mb-8 text-lg text-white/80">
          The only free, interactive pre-licensing course that actually prepares you to pass.
        </p>
        <p className="mb-6 text-sm text-white/60">
          First-time pass rate in Virginia is only 34%. Our students pass at 90%+.
        </p>
        <div className="space-y-4">
          {BENEFITS.map((b) => (
            <div key={b.title} className="flex gap-3">
              <div className="mt-1 h-5 w-5 shrink-0 rounded-full bg-[#EA580C] flex items-center justify-center text-xs font-bold">
                &#10003;
              </div>
              <div>
                <p className="font-semibold">{b.title}</p>
                <p className="text-sm text-white/70">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right side - Auth form */}
      <div className="flex w-full flex-col justify-center px-6 py-12 lg:w-1/2 lg:px-16">
        <div className="mx-auto w-full max-w-sm">
          <Link href="/" className="mb-6 block text-sm text-gray-500 hover:text-gray-900 lg:hidden">
            &larr; Back to Acme Realty
          </Link>
          <h2 className="mb-1 text-2xl font-extrabold text-gray-900" style={{ fontFamily: 'Manrope, sans-serif' }}>
            {mode === 'register' ? 'Start Your Course' : 'Welcome Back'}
          </h2>
          <p className="mb-6 text-sm text-gray-500">
            {mode === 'register'
              ? 'Create your free account to begin studying.'
              : 'Log in to continue where you left off.'}
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {mode === 'register' && (
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                <input
                  id="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-[#EA580C] focus:ring-[#EA580C] focus:outline-none"
                  placeholder="Jane Smith"
                />
              </div>
            )}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-[#EA580C] focus:ring-[#EA580C] focus:outline-none"
                placeholder="jane@example.com"
              />
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                {mode === 'login' && (
                  <Link href="/course/forgot-password" className="text-xs text-[#EA580C] hover:underline">
                    Forgot password?
                  </Link>
                )}
              </div>
              <input
                id="password"
                type="password"
                required
                minLength={8}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-[#EA580C] focus:ring-[#EA580C] focus:outline-none"
                placeholder="Min 8 characters"
              />
            </div>

            {resetSuccess && (
              <div className="rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-800">
                Password reset successful. Log in with your new password.
              </div>
            )}

            {error && <p className="text-sm text-red-600">{error}</p>}

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-lg bg-[#EA580C] px-4 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-[#e0740f] disabled:opacity-50"
            >
              {loading ? 'Loading...' : mode === 'register' ? 'Create Free Account' : 'Log In'}
            </button>
          </form>

          <p className="mt-4 text-center text-sm text-gray-500">
            {mode === 'register' ? (
              <>Already have an account?{' '}<button onClick={() => setMode('login')} className="text-[#EA580C] font-medium hover:underline">Log in</button></>
            ) : (
              <>Need an account?{' '}<button onClick={() => setMode('register')} className="text-[#EA580C] font-medium hover:underline">Sign up free</button></>
            )}
          </p>
        </div>
      </div>
    </div>
  )
}
