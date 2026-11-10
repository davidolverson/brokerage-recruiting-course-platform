'use client'

import Link from 'next/link'
import { trackEvent } from '@/lib/analytics'

interface TrackedCTAProps {
  href: string
  eventName: string
  eventProperties?: Record<string, string | number | boolean>
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
}

export function TrackedCTA({ href, eventName, eventProperties, children, className, style }: TrackedCTAProps) {
  return (
    <Link
      href={href}
      prefetch={true}
      className={className}
      style={style}
      onClick={() => trackEvent({ name: eventName, properties: eventProperties })}
    >
      {children}
    </Link>
  )
}
