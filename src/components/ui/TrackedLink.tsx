'use client'

import Link from 'next/link'
import { trackEvent } from '@/lib/analytics'

interface TrackedLinkProps {
  href: string
  eventName: string
  eventProperties?: Record<string, string | number | boolean>
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
}

export function TrackedLink({ href, eventName, eventProperties, children, className, style }: TrackedLinkProps) {
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
