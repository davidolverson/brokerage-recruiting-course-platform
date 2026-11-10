'use client'

interface SubmissionStatusProps {
  message: string
}

/**
 * Inline loading indicator shown while a form submission is in flight.
 */
export function SubmissionStatus({ message }: SubmissionStatusProps) {
  return (
    <div
      role="status"
      className="flex items-center gap-3 rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-3 text-sm text-[#6B7280]"
    >
      <svg
        className="h-5 w-5 animate-spin text-black"
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
          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
        />
      </svg>
      <span>{message}</span>
    </div>
  )
}
