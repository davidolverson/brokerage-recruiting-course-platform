'use client'

import { useInView } from '@/lib/hooks/useInView'

/**
 * Crop-reveal for images — the container clips, the image
 * slides into place. More interesting than a generic fade.
 */
export function ImageReveal({
  children,
  className = '',
  direction = 'up',
}: {
  children: React.ReactNode
  className?: string
  direction?: 'up' | 'left'
}) {
  const { ref, visible } = useInView(0.1)

  const clipHidden =
    direction === 'up'
      ? 'inset(20% 0 0 0)'
      : 'inset(0 0 0 20%)'

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`overflow-hidden transition-[clip-path] duration-1000 ease-out ${className}`}
      style={{
        clipPath: visible ? 'inset(0 0 0 0)' : clipHidden,
      }}
    >
      <div
        className="relative h-full w-full transition-transform duration-1000 ease-out"
        style={{
          transform: visible ? 'scale(1)' : 'scale(1.06)',
        }}
      >
        {children}
      </div>
    </div>
  )
}
