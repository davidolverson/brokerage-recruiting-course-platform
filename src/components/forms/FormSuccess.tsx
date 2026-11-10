import Link from 'next/link'

interface FormSuccessProps {
  heading?: string
  message?: string
  /** Back-link destination. Defaults to "/" */
  backHref?: string
  /** Back-link label */
  backLabel?: string
}

export function FormSuccess({
  heading = 'Thank you!',
  message = "We've received your submission and will be in touch shortly.",
  backHref = '/',
  backLabel = 'Return home',
}: FormSuccessProps) {
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
        <p className="max-w-sm text-[#6B7280]" style={{ fontFamily: 'Roboto, sans-serif' }}>
          {message}
        </p>
      </div>

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
