'use client'

import { useState, useEffect, useCallback } from 'react'

const PROOF_ITEMS = [
  { team: 'Example Residential Team', stat: '1,000+ homes sold', badge: '#1 in Central VA', logo: '/images/teams/example-residential-team-logo.png' },
  { team: 'Example Residential Team', stat: 'Sells 4.56% above market avg', badge: 'Multi-State', logo: '/images/teams/example-residential-team-logo.png' },
  { team: 'Example Residential Team', stat: '$1.5B+ total transactions', badge: '25x avg agent', logo: '/images/teams/example-residential-team-logo.png' },
  { team: 'Example Investor Team', stat: '100+ houses flipped', badge: 'Investor-Focused', logo: '/images/teams/example-investor-team-logo.png' },
  { team: 'Example Lending Partner', stat: 'A+ BBB, zero complaints', badge: '11+ Programs', logo: '/images/teams/example-lending-partner-logo.png' },
  { team: 'Example Title Partner', stat: '4,000+ closings, 5.0 Google', badge: 'Same-Day Recording', logo: '/images/teams/example-title-partner-logo.png' },
]

export function SocialProofToast() {
  const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  const cycle = useCallback(() => {
    setVisible(true)
    const hideTimer = setTimeout(() => {
      setVisible(false)
      const nextTimer = setTimeout(() => {
        setIndex((prev) => (prev + 1) % PROOF_ITEMS.length)
      }, 500)
      return () => clearTimeout(nextTimer)
    }, 5000)
    return () => clearTimeout(hideTimer)
  }, [])

  useEffect(() => {
    if (dismissed) return
    const initial = setTimeout(() => {
      cycle()
    }, 4000)
    return () => clearTimeout(initial)
  }, [dismissed, cycle])

  useEffect(() => {
    if (dismissed || !visible) return
    let inner: ReturnType<typeof setTimeout>
    const next = setTimeout(() => {
      setVisible(false)
      inner = setTimeout(() => {
        setIndex((prev) => (prev + 1) % PROOF_ITEMS.length)
        setVisible(true)
      }, 800)
    }, 5000)
    return () => { clearTimeout(next); clearTimeout(inner) }
  }, [index, visible, dismissed])

  if (dismissed) return null

  const item = PROOF_ITEMS[index]

  return (
    <div
      className={`fixed bottom-4 left-4 z-30 hidden max-w-xs transition-all duration-500 lg:block ${
        visible
          ? 'translate-y-0 opacity-100'
          : 'translate-y-4 opacity-0 pointer-events-none'
      }`}
    >
      <div className="relative rounded-xl border border-[#E5E7EB] bg-white p-4 shadow-lg">
        <button
          type="button"
          onClick={() => setDismissed(true)}
          className="absolute right-2 top-2 rounded p-0.5 text-[#9CA3AF] transition-colors hover:text-black"
          aria-label="Dismiss"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
        <div className="flex items-start gap-3 pr-4">
          <img
            src={item.logo}
            alt={`${item.team} logo`}
            className="mt-0.5 h-10 w-10 shrink-0 rounded-lg border border-[#E5E7EB] bg-white object-contain p-1"
          />
          <div>
            <p className="text-sm font-bold text-[#000000]" style={{ fontFamily: 'Manrope, sans-serif' }}>
              {item.team}
            </p>
            <p className="text-xs text-[#4B5563]">{item.stat}</p>
            <span className="mt-1.5 inline-block rounded-full bg-[#F3F4F6] px-2 py-0.5 text-[10px] font-semibold text-[#6B7280]">
              {item.badge}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
