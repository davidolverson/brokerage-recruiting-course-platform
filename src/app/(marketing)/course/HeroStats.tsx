'use client'

import { useEffect, useRef, useState } from 'react'

interface Stat {
  value: string
  label: string
  numeric: number
  suffix: string
}

const STATS: Stat[] = [
  { value: '87', label: 'Lessons', numeric: 87, suffix: '' },
  { value: '200+', label: 'Questions', numeric: 200, suffix: '+' },
  { value: '90%+', label: 'Pass Rate', numeric: 90, suffix: '%+' },
  { value: '$0', label: 'Cost', numeric: 0, suffix: '' },
]

function useCountUp(target: number, active: boolean, duration = 1000): number {
  const [display, setDisplay] = useState(0)
  const raf = useRef<number | null>(null)

  useEffect(() => {
    if (!active || target === 0) {
      if (target === 0) setDisplay(0)
      return
    }
    const start = performance.now()

    function tick(now: number) {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(Math.round(eased * target))
      if (progress < 1) {
        raf.current = requestAnimationFrame(tick)
      }
    }

    raf.current = requestAnimationFrame(tick)
    return () => { if (raf.current !== null) cancelAnimationFrame(raf.current) }
  }, [target, active, duration])

  return display
}

function StatItem({ stat, active }: { stat: Stat; active: boolean }) {
  const count = useCountUp(stat.numeric, active, 1100)

  let displayValue: string
  if (stat.label === 'Cost') {
    displayValue = '$0'
  } else {
    displayValue = `${count}${stat.suffix}`
  }

  return (
    <div>
      <p className="text-2xl font-extrabold text-white">{displayValue}</p>
      <p className="text-xs uppercase tracking-wider text-white/40">{stat.label}</p>
    </div>
  )
}

export function HeroStats() {
  const ref = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4 max-w-xl mx-auto">
      {STATS.map((s) => (
        <StatItem key={s.label} stat={s} active={active} />
      ))}
    </div>
  )
}
