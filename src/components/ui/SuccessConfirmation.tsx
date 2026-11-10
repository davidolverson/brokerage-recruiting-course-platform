'use client'

import Link from 'next/link'

interface SuccessConfirmationProps {
  heading: string
  message: string
  /** Describes the next concrete step the user can expect */
  nextStep?: string
  backHref?: string
  backLabel?: string
}

/**
 * Rich success state shown after a form submission completes.
 * Replaces the generic FormSuccess with form-type-aware messaging.
 */
export function SuccessConfirmation({
  heading,
  message,
  nextStep,
  backHref = '/',
  backLabel = 'Return home',
}: SuccessConfirmationProps) {
  return (
    <div className="flex flex-col items-center gap-6 py-10 text-center">
      {/* Checkmark */}
      <div
        className="flex h-16 w-16 items-center justify-center rounded-full bg-[#F0FDF4]"
        aria-hidden="true"
      >
        <svg
          className="h-8 w-8"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#16A34A"
          strokeWidth={2.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>

      {/* Text */}
      <div className="flex flex-col gap-2">
        <h3
          className="text-2xl font-extrabold text-[#000000]"
          style={{ fontFamily: 'Manrope, sans-serif' }}
        >
          {heading}
        </h3>
        <p
          className="max-w-sm text-[#6B7280]"
          style={{ fontFamily: 'Roboto, sans-serif' }}
        >
          {message}
        </p>
      </div>

      {/* Next step callout */}
      {nextStep && (
        <div className="flex max-w-sm items-start gap-2.5 rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-3 text-left text-sm text-[#374151]">
          <svg
            className="mt-0.5 h-4 w-4 shrink-0 text-[#16A34A]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
          <span>
            <span className="font-semibold">Next step:</span> {nextStep}
          </span>
        </div>
      )}

      {/* Back link */}
      <Link
        href={backHref}
        className="inline-flex items-center gap-1.5 rounded-lg bg-black px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-150 hover:bg-[#000000] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
      >
        <svg
          className="h-4 w-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>
        {backLabel}
      </Link>
    </div>
  )
}
