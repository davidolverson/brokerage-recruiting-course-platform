'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const HIDE_ON = ['/apply', '/book-a-tour', '/login', '/admin']

export function MobileCTABar() {
  const [visible, setVisible] = useState(false)
  const pathname = usePathname()

  const hidden = HIDE_ON.some((p) => pathname.startsWith(p))

  useEffect(() => {
    if (hidden) return
    const onScroll = () => setVisible(window.scrollY > 600)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [hidden])

  if (hidden || !visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-[#E5E7EB] bg-white/95 backdrop-blur-sm lg:hidden">
      <div className="flex items-center gap-3 px-4 py-3">
        <Link
          href="/apply"
          className="flex-1 rounded-lg bg-black py-3 text-center text-sm font-bold text-white transition-colors hover:bg-[#1F2937]"
          style={{ fontFamily: 'Manrope, sans-serif' }}
        >
          Apply Now
        </Link>
        <Link
          href="/book-a-tour"
          className="flex-1 rounded-lg border-2 border-black py-3 text-center text-sm font-bold text-black transition-colors hover:bg-black hover:text-white"
          style={{ fontFamily: 'Manrope, sans-serif' }}
        >
          Book a Tour
        </Link>
      </div>
    </div>
  )
}
