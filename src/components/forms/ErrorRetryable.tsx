'use client'

interface ErrorRetryableProps {
  message: string
  onRetry: () => void
  className?: string
}

export function ErrorRetryable({ message, onRetry, className = '' }: ErrorRetryableProps) {
  return (
    <div
      className={`rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] p-6 ${className}`}
      role="alert"
      aria-live="assertive"
    >
      <p className="text-sm font-medium text-black">{message}</p>
      <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
        <button
          type="button"
          onClick={onRetry}
          className="inline-flex items-center justify-center rounded-lg bg-black px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#333] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
        >
          Try Again
        </button>
        <span className="text-xs text-[#9CA3AF]">
          Or contact us directly:{' '}
          <a href="tel:+15550100100" className="font-medium text-black underline underline-offset-2">
            (555) 010-0100
          </a>
          {' / '}
          <a href="mailto:agent@example.com" className="font-medium text-black underline underline-offset-2">
            agent@example.com
          </a>
        </span>
      </div>
    </div>
  )
}
