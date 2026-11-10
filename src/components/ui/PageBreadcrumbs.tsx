'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useRef } from 'react'

const LABELS: Record<string, string> = {
  'join-a-team': 'Join a Team',
  network: 'Growth Network',
  teams: 'Teams',
  'agent-advantage': 'Agent Advantage',
  'transactions-operations': 'Transactions & Operations',
  'financial-legal': 'Financial & Legal',
  'asset-management': 'Asset Management',
  education: 'Education',
  'training-events': 'Training & Events',
  community: 'Community',
  'success-stories': 'Success Stories',
  contact: 'Contact',
  apply: 'Apply',
  compare: 'Compare',
  calculator: 'Calculator',
  quiz: 'Fit Quiz',
  faq: 'FAQ',
  partners: 'Partners',
  'current-agents': 'Agent Resources',
  'book-a-tour': 'Book a Tour',
  areas: 'Local Markets',
  privacy: 'Privacy',
  terms: 'Terms',
}

/**
 * Injects BreadcrumbList JSON-LD schema for the current page.
 * Client-side only — uses usePathname to build breadcrumb chain.
 */
export function PageBreadcrumbs() {
  const pathname = usePathname()
  const scriptRef = useRef<HTMLScriptElement | null>(null)

  useEffect(() => {
    const base = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://example.com'
    const segments = pathname.split('/').filter(Boolean)

    if (segments.length === 0) return // homepage — no breadcrumb needed

    const items = [
      { name: 'Home', url: base },
      ...segments.map((seg, i) => ({
        name: LABELS[seg] ?? seg.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()),
        url: `${base}/${segments.slice(0, i + 1).join('/')}`,
      })),
    ]

    const schema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: item.url,
      })),
    }

    // Inject or update script tag
    if (!scriptRef.current) {
      const script = document.createElement('script')
      script.type = 'application/ld+json'
      script.textContent = JSON.stringify(schema)
      document.head.appendChild(script)
      scriptRef.current = script
    } else {
      scriptRef.current.textContent = JSON.stringify(schema)
    }

    return () => {
      if (scriptRef.current && scriptRef.current.parentNode) {
        scriptRef.current.parentNode.removeChild(scriptRef.current)
        scriptRef.current = null
      }
    }
  }, [pathname])

  return null
}
