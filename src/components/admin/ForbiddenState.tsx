import Link from 'next/link'

export default function ForbiddenState() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
      <p className="text-6xl font-extrabold text-[#1A1A1A]">403</p>
      <h1
        className="mt-4 text-2xl font-bold text-white"
        style={{ fontFamily: 'Manrope, sans-serif' }}
      >
        Access Denied
      </h1>
      <p className="mt-2 max-w-md text-sm text-[#6B7280]">
        You do not have permission to view this page. Contact your administrator if you believe this is an error.
      </p>
      <Link
        href="/dashboard"
        className="mt-6 rounded-lg border border-[#333] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:border-white"
      >
        Back to Dashboard
      </Link>
    </div>
  )
}
