'use client'

export default function AdminError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
      <p className="text-6xl font-extrabold text-[#1A1A1A]">500</p>
      <h1
        className="mt-4 text-2xl font-bold text-white"
        style={{ fontFamily: 'Manrope, sans-serif' }}
      >
        Something went wrong
      </h1>
      <p className="mt-2 max-w-md text-sm text-[#6B7280]">
        An unexpected error occurred. Please try again.
      </p>
      {error.digest && (
        <p className="mt-1 text-xs text-[#4B5563]">
          Error ID: {error.digest}
        </p>
      )}
      <button
        type="button"
        onClick={reset}
        className="mt-6 rounded-lg border border-[#333] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:border-white"
      >
        Try Again
      </button>
    </div>
  )
}
