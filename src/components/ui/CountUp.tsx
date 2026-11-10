'use client'

import { useEffect, useMemo, useState } from 'react'
import { useInView } from '@/lib/hooks/useInView'

/**
 * Animates a number from 0 to `end` when scrolled into view.
 * Handles formatted strings like "50,000+" or "$100M+".
 */
export function CountUp({
  value,
  className,
  style,
}: {
  value: string
  className?: string
  style?: React.CSSProperties
}) {
  const { ref, visible } = useInView(0.3)
  const [display, setDisplay] = useState(value)

  // Memoize the regex match so it doesn't create a new ref each render
  const numericMatch = useMemo(() => value.match(/[\d,]+/), [value])
  const target = useMemo(() => {
    if (!numericMatch) return null
    return parseInt(numericMatch[0].replace(/,/g, ''), 10)
  }, [numericMatch])

  useEffect(() => {
    if (!visible || target === null || !numericMatch) return

    const duration = 1200
    const steps = 30
    const interval = duration / steps

    let step = 0
    const timer = setInterval(() => {
      step++
      const progress = step / steps
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = Math.round(target * eased)

      // Re-format with commas and preserve prefix/suffix
      const formatted = current.toLocaleString()
      setDisplay(value.replace(numericMatch[0], formatted))

      if (step >= steps) {
        clearInterval(timer)
        setDisplay(value)
      }
    }, interval)

    return () => clearInterval(timer)
  }, [visible, target, value, numericMatch])

  return (
    <p ref={ref as React.RefObject<HTMLParagraphElement>} className={className} style={style}>
      {display}
    </p>
  )
}
