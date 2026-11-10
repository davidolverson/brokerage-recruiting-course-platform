'use client'

import { useInView } from '@/lib/hooks/useInView'

type RevealVariant = 'up' | 'clip' | 'scale' | 'crop'

interface RevealProps {
  children: React.ReactNode
  variant?: RevealVariant
  delay?: number // ms
  className?: string
}

const variantClasses: Record<RevealVariant, { hidden: string; visible: string }> = {
  up: {
    hidden: 'translate-y-8 opacity-0',
    visible: 'translate-y-0 opacity-100',
  },
  clip: {
    hidden: '[clip-path:inset(0_100%_0_0)]',
    visible: '[clip-path:inset(0_0%_0_0)]',
  },
  scale: {
    hidden: 'scale-[0.92] opacity-0',
    visible: 'scale-100 opacity-100',
  },
  crop: {
    hidden: 'translate-y-6 scale-[1.08] opacity-0',
    visible: 'translate-y-0 scale-100 opacity-100',
  },
}

export function Reveal({
  children,
  variant = 'up',
  delay = 0,
  className = '',
}: RevealProps) {
  const { ref, visible } = useInView(0.12)
  const v = variantClasses[variant]

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`transition-all duration-700 ease-out will-change-transform ${visible ? v.visible : v.hidden} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

/**
 * Stagger wrapper — renders children inside Reveal with incrementing delays.
 */
export function RevealStagger({
  children,
  variant = 'scale',
  baseDelay = 0,
  stagger = 80,
  className = '',
}: {
  children: React.ReactNode[]
  variant?: RevealVariant
  baseDelay?: number
  stagger?: number
  className?: string
}) {
  return (
    <>
      {children.map((child, i) => (
        <Reveal
          key={i}
          variant={variant}
          delay={baseDelay + i * stagger}
          className={className}
        >
          {child}
        </Reveal>
      ))}
    </>
  )
}
