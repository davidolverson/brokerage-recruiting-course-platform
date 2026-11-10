'use client'

interface SubmissionStatusProps {
  message: string
  className?: string
}

export function SubmissionStatus({ message, className = '' }: SubmissionStatusProps) {
  return (
    <div
      className={`flex items-center gap-3 ${className}`}
      role="status"
      aria-live="polite"
    >
      {/* Minimal spinner — three dots pulsing */}
      <span className="flex gap-1" aria-hidden="true">
        <span className="h-1.5 w-1.5 rounded-full bg-black animate-pulse" style={{ animationDelay: '0ms' }} />
        <span className="h-1.5 w-1.5 rounded-full bg-black animate-pulse" style={{ animationDelay: '150ms' }} />
        <span className="h-1.5 w-1.5 rounded-full bg-black animate-pulse" style={{ animationDelay: '300ms' }} />
      </span>
      <p className="text-sm font-medium text-[#4B5563]">{message}</p>
    </div>
  )
}
