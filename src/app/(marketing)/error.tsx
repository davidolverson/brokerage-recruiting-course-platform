'use client'

import Link from 'next/link'
import { Container } from '@/components/layout/Container'

export default function MarketingError({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-screen bg-white">
      <Container>
        <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
          <span className="mb-6 inline-flex items-center rounded-full bg-[#F3F4F6] px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#9CA3AF]">
            Something went wrong
          </span>
          <h1
            className="text-4xl font-extrabold tracking-tight text-[#000000] sm:text-5xl"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            We hit a snag.
          </h1>
          <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-[#4B5563]">
            Something unexpected happened. Try refreshing the page, or head back
            to the homepage.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={reset}
              className="inline-flex items-center rounded-md bg-[#000000] px-7 py-3 text-sm font-semibold text-white transition-colors duration-150 hover:bg-[#1F2937]"
            >
              Try Again
            </button>
            <Link
              href="/"
              className="inline-flex items-center rounded-md border border-[#000000] px-7 py-3 text-sm font-semibold text-[#000000] transition-colors duration-150 hover:bg-[#000000] hover:text-white"
            >
              Go Home
            </Link>
          </div>
        </div>
      </Container>
    </div>
  )
}
