interface SuccessConfirmationProps {
  heading: string
  message: string
  nextStep?: string
  backLabel?: string
  backHref?: string
  className?: string
}

export function SuccessConfirmation({
  heading,
  message,
  nextStep,
  backLabel = 'Back to Home',
  backHref = '/',
  className = '',
}: SuccessConfirmationProps) {
  return (
    <div
      className={`rounded-2xl border border-[#E5E7EB] bg-white p-8 text-center sm:p-12 ${className}`}
      role="status"
      aria-live="polite"
    >
      {/* Checkmark icon */}
      <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#F3F4F6]">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>
      <h3 className="text-xl font-bold text-black" style={{ fontFamily: 'Manrope, sans-serif' }}>
        {heading}
      </h3>
      <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-[#6B7280]">
        {message}
      </p>
      {nextStep && (
        <p className="mx-auto mt-4 max-w-md text-xs font-medium uppercase tracking-wider text-[#9CA3AF]">
          What happens next: {nextStep}
        </p>
      )}
      <a
        href={backHref}
        className="mt-8 inline-flex items-center gap-2 rounded-lg bg-black px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#333] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
      >
        {backLabel}
      </a>
    </div>
  )
}
