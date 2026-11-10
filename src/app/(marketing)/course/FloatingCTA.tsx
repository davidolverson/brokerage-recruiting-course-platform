'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export function FloatingCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    function onScroll() {
      // Show after user scrolls past 400px
      setVisible(window.scrollY > 400)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    // Check initial position in case the page is already scrolled
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null

  return (
    <div className="fixed bottom-6 right-6 z-50 float-cta-enter">
      <Link
        href="/course/signup"
        className="flex items-center gap-2 rounded-full bg-[#EA580C] px-5 py-3 text-sm font-bold text-white shadow-2xl transition hover:bg-[#e0740f] hover:scale-105 active:scale-95"
        style={{ transform: 'translateZ(0)' }}
      >
        <svg
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
        Start Free
      </Link>
    </div>
  )
}
