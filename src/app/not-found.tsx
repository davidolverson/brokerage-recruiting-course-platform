import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#F3F4F6] px-6 py-24">
      {/* 404 badge */}
      <div className="mb-6 inline-flex h-24 w-24 items-center justify-center rounded-full bg-[#E5E7EB]">
        <span className="text-4xl font-extrabold text-[#000000]">
          404
        </span>
      </div>

      {/* Heading */}
      <h1 className="mb-4 text-center text-4xl font-extrabold text-[#000000]">
        Page Not Found
      </h1>

      {/* Subtext */}
      <p className="mb-10 max-w-md text-center text-lg text-[#4B5563]">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>

      {/* Navigation links */}
      <div className="flex flex-col items-center gap-4 sm:flex-row">
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-lg bg-black px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#000000]"
        >
          Go Home
        </Link>

        <Link
          href="/book-a-tour"
          className="inline-flex items-center justify-center rounded-lg border border-black bg-white px-6 py-3 text-sm font-semibold text-[#000000] transition-colors duration-200 hover:bg-[#F3F4F6]"
        >
          Book a Tour
        </Link>

        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-lg border border-[#E5E7EB] bg-white px-6 py-3 text-sm font-semibold text-[#000000] transition-colors duration-200 hover:border-black"
        >
          Contact Us
        </Link>
      </div>

      {/* Decorative divider */}
      <div className="mt-16 h-1 w-16 rounded-full bg-[#E5E7EB]" />
    </div>
  )
}
