'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const HIDE_ON = ['/quiz', '/apply', '/book-a-tour']

export function ExitIntentPopup() {
  const [shown, setShown] = useState(false)
  const [fired, setFired] = useState(false)
  const pathname = usePathname()

  const hidden = HIDE_ON.some((p) => pathname.startsWith(p))

  useEffect(() => {
    if (hidden || fired) return
    // Check sessionStorage to only show once per session
    if (sessionStorage.getItem('exit-intent-shown')) {
      setFired(true)
      return
    }

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !fired) {
        setShown(true)
        setFired(true)
        sessionStorage.setItem('exit-intent-shown', '1')
      }
    }

    // Delay listener to avoid false triggers on page load
    const timer = setTimeout(() => {
      document.addEventListener('mouseleave', handleMouseLeave)
    }, 5000)

    return () => {
      clearTimeout(timer)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [hidden, fired])

  if (!shown) return null

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm"
      onClick={() => setShown(false)}
    >
      <div
        className="relative mx-4 w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={() => setShown(false)}
          className="absolute right-4 top-4 rounded p-1 text-[#9CA3AF] transition-colors hover:text-black"
          aria-label="Close"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        <div className="text-center">
          <span className="mb-4 inline-flex items-center rounded-full bg-[#F3F4F6] px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#4B5563]">
            Before you go
          </span>
          <h3
            className="mt-4 text-2xl font-extrabold tracking-tight text-[#000000]"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            Not sure which path fits?
          </h3>
          <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-[#4B5563]">
            Answer 7 quick questions and we&rsquo;ll match you to the right path &mdash;
            Team or Growth Network &mdash; based on your experience and goals.
          </p>
          <div className="mt-6 flex flex-col gap-3">
            <Link
              href="/quiz"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-black px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-[#1F2937]"
              style={{ fontFamily: 'Manrope, sans-serif' }}
              onClick={() => setShown(false)}
            >
              Take the 2-Minute Quiz
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <button
              type="button"
              onClick={() => setShown(false)}
              className="text-sm font-medium text-[#9CA3AF] transition-colors hover:text-[#4B5563]"
            >
              No thanks, I&rsquo;m just browsing
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
