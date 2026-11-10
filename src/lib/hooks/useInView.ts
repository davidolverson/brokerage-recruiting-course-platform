'use client'

import { useEffect, useRef, useState } from 'react'

/**
 * Thin IntersectionObserver hook. Returns a ref and a boolean.
 * Once visible, stays visible (no re-triggering on scroll-back).
 *
 * Starts visible (true) so SSR/first paint shows content,
 * then resets to false on mount so scroll-triggered animation works.
 * Elements already in the viewport on mount get immediately set back to true.
 */
export function useInView(threshold = 0.15) {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(true) // SSR: content visible

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // If IntersectionObserver not supported, stay visible
    if (typeof IntersectionObserver === 'undefined') return

    // Reset to hidden so the animation can play
    setVisible(false)

    // Safety timeout: if observer doesn't fire in 3s, force visible
    const safety = setTimeout(() => setVisible(true), 3000)

    const raf = requestAnimationFrame(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            clearTimeout(safety)
            setVisible(true)
            observer.disconnect()
          }
        },
        { threshold: Math.min(threshold, 0.05), rootMargin: '50px 0px 0px 0px' }
      )

      observer.observe(el)
      ;(el as HTMLElement & { __observer?: IntersectionObserver }).__observer = observer
    })

    return () => {
      clearTimeout(safety)
      cancelAnimationFrame(raf)
      const obs = (el as HTMLElement & { __observer?: IntersectionObserver }).__observer
      if (obs) obs.disconnect()
    }
  }, [threshold])

  return { ref, visible }
}
