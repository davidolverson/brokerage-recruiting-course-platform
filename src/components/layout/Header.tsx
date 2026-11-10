'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Container } from './Container'
import { events } from '@/lib/analytics'

interface NavItem {
  label: string
  href?: string
  children?: { label: string; href: string; description?: string }[]
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Join a Team', href: '/join-a-team' },
  { label: 'Growth Network', href: '/network' },
  { label: 'Teams', href: '/teams' },
  {
    label: 'Tools',
    children: [
      { label: 'License Prep', href: '/course', description: 'Free VA real estate license course' },
      { label: 'Compare Acme', href: '/compare', description: 'Acme vs traditional brokerages' },
      { label: 'Income Calculator', href: '/calculator', description: 'Model your potential earnings' },
      { label: 'Fit Quiz', href: '/quiz', description: 'Find your recommended path' },
    ],
  },
  {
    label: 'Explore',
    children: [
      { label: 'Membership', href: '/membership', description: 'What it costs and what is included' },
      { label: 'Agent Advantage', href: '/agent-advantage', description: 'Your support ecosystem' },
      { label: 'Training & Events', href: '/training-events', description: 'Workshops and certifications' },
      { label: 'Community', href: '/community', description: 'Anytown roots, global reach' },
      { label: 'Local Markets', href: '/areas', description: 'Area-specific insights' },
      { label: 'Success Stories', href: '/success-stories', description: 'Real agent outcomes' },
      { label: 'Partners', href: '/partners', description: 'Vendor program & sponsorships' },
    ],
  },
  { label: 'Contact', href: '/contact' },
]

// Flatten for mobile menu
const MOBILE_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Join a Team', href: '/join-a-team' },
  { label: 'Growth Network', href: '/network' },
  { label: 'Teams', href: '/teams' },
  { label: 'Membership', href: '/membership' },
  { label: 'Compare Acme', href: '/compare' },
  { label: 'Income Calculator', href: '/calculator' },
  { label: 'Fit Quiz', href: '/quiz' },
  { label: 'License Prep', href: '/course' },
  { label: 'Agent Advantage', href: '/agent-advantage' },
  { label: 'Training & Events', href: '/training-events' },
  { label: 'Community', href: '/community' },
  { label: 'Local Markets', href: '/areas' },
  { label: 'Success Stories', href: '/success-stories' },
  { label: 'Partners', href: '/partners' },
  { label: 'Contact', href: '/contact' },
]

function DropdownMenu({
  item,
  isOpen,
  onToggle,
  onClose,
  isActive,
}: {
  item: NavItem
  isOpen: boolean
  onToggle: () => void
  onClose: () => void
  isActive: boolean
}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onClose()
      }
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen, onClose])

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={onToggle}
        className={[
          'flex items-center gap-1 whitespace-nowrap px-2 py-1 xl:px-3',
          'text-[0.82rem] xl:text-sm font-medium transition-colors duration-150',
          'rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black',
          'text-black hover:text-black/60',
          isActive
            ? 'border-b-2 border-black pb-[3px] font-semibold'
            : '',
        ]
          .filter(Boolean)
          .join(' ')}
        aria-expanded={isOpen}
        aria-haspopup="true"
        style={{ fontFamily: 'Manrope, sans-serif' }}
      >
        {item.label}
        <svg
          className={`h-3 w-3 transition-transform duration-150 ${isOpen ? 'rotate-180' : ''}`}
          viewBox="0 0 12 12"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          aria-hidden="true"
        >
          <path d="M3 5l3 3 3-3" />
        </svg>
      </button>

      {isOpen && item.children && (
        <div
          className="absolute left-0 top-full z-50 mt-1 w-64 rounded-xl border border-[#E5E7EB] bg-white py-2 shadow-lg"
          role="menu"
        >
          {item.children.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              className="block px-4 py-2.5 transition-colors duration-150 hover:bg-[#F9FAFB]"
              role="menuitem"
              onClick={onClose}
            >
              <span
                className="block text-sm font-medium text-black"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                {child.label}
              </span>
              {child.description && (
                <span
                  className="block text-xs text-[#9CA3AF]"
                  style={{ fontFamily: 'Roboto, sans-serif' }}
                >
                  {child.description}
                </span>
              )}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  // Close dropdown when route changes
  useEffect(() => {
    setOpenDropdown(null)
    setMenuOpen(false)
  }, [pathname])

  function isLinkActive(href: string) {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  function isDropdownActive(item: NavItem) {
    return item.children?.some((c) => pathname.startsWith(c.href)) ?? false
  }

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white transition-shadow duration-200 ${
        scrolled ? 'shadow-md' : 'shadow-sm'
      }`}
    >
      <Container>
        <div className="flex h-16 items-center justify-between gap-4 lg:h-[70px]">
          {/* Logo */}
          <Link
            href="/"
            className="flex shrink-0 flex-col leading-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black rounded"
            aria-label="Acme Realty — home"
          >
            <span
              className="text-[1.2rem] font-extrabold tracking-tight text-black"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              Acme Realty
            </span>
            <span
              className="text-[0.65rem] font-medium uppercase tracking-widest text-[#9CA3AF]"
              style={{ fontFamily: 'Roboto, sans-serif' }}
            >
              Brokered by Acme Realty
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav
            aria-label="Primary navigation"
            className="hidden lg:flex lg:items-center lg:gap-1 xl:gap-2"
          >
            {NAV_ITEMS.map((item) =>
              item.children ? (
                <DropdownMenu
                  key={item.label}
                  item={item}
                  isOpen={openDropdown === item.label}
                  isActive={isDropdownActive(item)}
                  onToggle={() =>
                    setOpenDropdown((prev) => (prev === item.label ? null : item.label))
                  }
                  onClose={() => setOpenDropdown(null)}
                />
              ) : (
                <Link
                  key={item.href}
                  href={item.href!}
                  className={[
                    'whitespace-nowrap px-2 py-1 xl:px-3',
                    'text-[0.82rem] xl:text-sm transition-colors duration-150',
                    'rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black',
                    'text-black hover:text-black/60',
                    isLinkActive(item.href!)
                      ? 'font-semibold border-b-2 border-black pb-[3px]'
                      : 'font-medium',
                  ]
                    .filter(Boolean)
                    .join(' ')}
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                  aria-current={isLinkActive(item.href!) ? 'page' : undefined}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex shrink-0 items-center gap-3">
            {/* Phone icon — mobile only */}
            <a
              href="tel:+15550100100"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#E5E7EB] text-black transition-colors hover:bg-[#F3F4F6] lg:hidden"
              aria-label="Call Acme Realty"
              onClick={() => events.ctaClick('Phone Call', 'header', 'tel:+15550100100')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z" clipRule="evenodd" />
              </svg>
            </a>

            <Link
              href="/book-a-tour"
              className="inline-flex rounded-lg bg-black px-4 py-2 text-sm font-semibold text-white transition-colors duration-150 hover:bg-black/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
              style={{ fontFamily: 'Manrope, sans-serif' }}
              onClick={() => events.ctaClick('Book a Tour', 'header', '/book-a-tour')}
            >
              Book a Tour
            </Link>

            <button
              type="button"
              aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              className="flex h-9 w-9 flex-col items-center justify-center gap-[5px] rounded-md lg:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black"
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              <span
                className={`block h-[2px] w-5 rounded-full bg-black transition-all duration-200 ${
                  menuOpen ? 'translate-y-[7px] rotate-45' : ''
                }`}
              />
              <span
                className={`block h-[2px] w-5 rounded-full bg-black transition-all duration-200 ${
                  menuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block h-[2px] w-5 rounded-full bg-black transition-all duration-200 ${
                  menuOpen ? '-translate-y-[7px] -rotate-45' : ''
                }`}
              />
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`overflow-hidden border-t border-gray-100 bg-white transition-all duration-300 lg:hidden ${
          menuOpen ? 'max-h-[700px] opacity-100' : 'max-h-0 opacity-0'
        }`}
        aria-hidden={!menuOpen}
      >
        <Container>
          <nav aria-label="Mobile navigation" className="flex flex-col gap-1 py-4">
            {MOBILE_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={[
                  'rounded-md px-3 py-2.5 text-sm transition-colors duration-150',
                  'hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black',
                  isLinkActive(link.href)
                    ? 'font-semibold text-black bg-gray-50'
                    : 'font-medium text-black',
                ]
                  .filter(Boolean)
                  .join(' ')}
                style={{ fontFamily: 'Manrope, sans-serif' }}
                aria-current={isLinkActive(link.href) ? 'page' : undefined}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-3 border-t border-gray-100 pt-3">
              <Link
                href="/book-a-tour"
                className="block rounded-lg bg-black px-3 py-2.5 text-center text-sm font-semibold text-white transition-colors duration-150 hover:bg-black/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
                style={{ fontFamily: 'Manrope, sans-serif' }}
                onClick={() => setMenuOpen(false)}
              >
                Book a Tour
              </Link>
            </div>
          </nav>
        </Container>
      </div>
    </header>
  )
}
