'use client'

import { useEffect, useRef } from 'react'
import { trackEvent } from '@/lib/analytics'

const THRESHOLDS = [25, 50, 75, 100]

export function ScrollDepthTracker({ route }: { route: string }) {
  const firedRef = useRef<Set<number>>(new Set())

  useEffect(() => {
    function handleScroll() {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      if (scrollHeight <= 0) return
      const percent = Math.round((window.scrollY / scrollHeight) * 100)

      for (const threshold of THRESHOLDS) {
        if (percent >= threshold && !firedRef.current.has(threshold)) {
          firedRef.current.add(threshold)
          trackEvent({
            name: 'scroll_depth',
            properties: { route, threshold: String(threshold) },
          })
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [route])

  return null
}
