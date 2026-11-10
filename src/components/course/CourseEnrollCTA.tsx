'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

interface CourseEnrollCTAProps {
  className?: string
}

type EnrollState = 'idle' | 'loading' | 'error'

export default function CourseEnrollCTA({ className }: CourseEnrollCTAProps) {
  const router = useRouter()
  const [state, setState] = useState<EnrollState>('idle')
  const [errorMsg, setErrorMsg] = useState<string | null>(null)

  async function handleEnroll() {
    setState('loading')
    setErrorMsg(null)

    try {
      const res = await fetch('/api/course/enroll', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      })

      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as { message?: string }
        throw new Error(data.message ?? 'Enrollment failed. Please try again.')
      }

      router.push('/course/dashboard')
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong.')
      setState('error')
    }
  }

  return (
    <div className={['flex flex-col items-center gap-4', className ?? ''].filter(Boolean).join(' ')}>
      <button
        type="button"
        onClick={handleEnroll}
        disabled={state === 'loading'}
        className={[
          'inline-flex w-full items-center justify-center gap-3 rounded-xl px-8 py-4',
          'text-base font-bold text-white transition-all duration-150',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EA580C] focus-visible:ring-offset-2',
          'sm:w-auto',
          state === 'loading'
            ? 'cursor-not-allowed bg-[#EA580C]/60'
            : 'bg-[#EA580C] hover:bg-[#E0720E] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#EA580C]/30 active:translate-y-0',
        ]
          .filter(Boolean)
          .join(' ')}
        style={{ fontFamily: 'Manrope, sans-serif' }}
        aria-busy={state === 'loading'}
      >
        {state === 'loading' ? (
          <>
            <svg
              className="h-5 w-5 animate-spin"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
            Enrolling...
          </>
        ) : (
          <>
            <svg
              viewBox="0 0 20 20"
              fill="none"
              className="h-5 w-5 shrink-0"
              aria-hidden="true"
            >
              <path
                d="M10 2a8 8 0 100 16A8 8 0 0010 2zm0 14a6 6 0 110-12 6 6 0 010 12zm-1-9v4l3 2"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Enroll Now — It's Free
          </>
        )}
      </button>

      {/* Trust signals */}
      {state !== 'loading' && (
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-xs text-[#6B7280]">
          <span className="flex items-center gap-1" style={{ fontFamily: 'Roboto, sans-serif' }}>
            <svg viewBox="0 0 12 12" fill="none" className="h-3 w-3 shrink-0" aria-hidden="true">
              <path d="M2 6.5L4.5 9 10 4" stroke="#16A34A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            No credit card required
          </span>
          <span className="flex items-center gap-1" style={{ fontFamily: 'Roboto, sans-serif' }}>
            <svg viewBox="0 0 12 12" fill="none" className="h-3 w-3 shrink-0" aria-hidden="true">
              <path d="M2 6.5L4.5 9 10 4" stroke="#16A34A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Instant access
          </span>
          <span className="flex items-center gap-1" style={{ fontFamily: 'Roboto, sans-serif' }}>
            <svg viewBox="0 0 12 12" fill="none" className="h-3 w-3 shrink-0" aria-hidden="true">
              <path d="M2 6.5L4.5 9 10 4" stroke="#16A34A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Cancel anytime
          </span>
        </div>
      )}

      {/* Error message */}
      {state === 'error' && errorMsg !== null && (
        <div
          className="flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 px-4 py-2.5 text-sm text-red-700"
          role="alert"
          style={{ fontFamily: 'Roboto, sans-serif' }}
        >
          <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4 shrink-0 text-red-500" aria-hidden="true">
            <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.25" />
            <path d="M8 5v3.5M8 10.5v.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          {errorMsg}
        </div>
      )}
    </div>
  )
}
