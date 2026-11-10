'use client'

import { useState } from 'react'
import Link from 'next/link'

export function AnnouncementBar() {
  const [dismissed, setDismissed] = useState(false)

  if (dismissed) return null

  return (
    <div className="relative bg-black text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-3 px-4 py-2.5 text-center text-xs sm:text-sm">
        <span className="font-medium">
          <span className="hidden sm:inline">Now Recruiting:</span>{' '}
          <strong className="font-bold">6 Active Teams</strong>
          <span className="mx-1.5 text-white/40">|</span>
          FREE Growth Network Certification
        </span>
        <Link
          href="/apply"
          className="inline-flex shrink-0 items-center gap-1 rounded-md bg-white px-3 py-1 text-xs font-bold text-black transition-colors hover:bg-[#F3F4F6]"
          style={{ fontFamily: 'Manrope, sans-serif' }}
        >
          Apply Now
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>
      <button
        type="button"
        onClick={() => setDismissed(true)}
        className="absolute right-2 top-1/2 -translate-y-1/2 rounded p-1 text-white/50 transition-colors hover:text-white"
        aria-label="Dismiss announcement"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      </button>
    </div>
  )
}
