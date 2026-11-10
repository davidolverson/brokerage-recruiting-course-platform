'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Container } from './Container'

const EXPLORE_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Join a Team', href: '/join-a-team' },
  { label: 'Growth Network', href: '/network' },
  { label: 'Teams', href: '/teams' },
  { label: 'Agent Advantage', href: '/agent-advantage' },
  { label: 'Training & Events', href: '/training-events' },
  { label: 'Community', href: '/community' },
  { label: 'Success Stories', href: '/success-stories' },
]

const RESOURCES_LINKS = [
  { label: 'Education', href: '/education' },
  { label: 'Local Markets', href: '/areas' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Partners', href: '/partners' },
  { label: 'Current Agents', href: '/current-agents' },
  { label: 'Agent Quiz', href: '/quiz' },
]

const CONNECT_LINKS = [
  { label: 'Contact Us', href: '/contact' },
  { label: 'Book a Tour', href: '/book-a-tour' },
  { label: 'Apply Now', href: '/apply' },
]

function FooterColumnHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3
      className="mb-4 text-xs font-bold uppercase tracking-widest text-white"
      style={{ fontFamily: 'Manrope, sans-serif' }}
    >
      {children}
    </h3>
  )
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link
        href={href}
        className="text-sm leading-relaxed text-[#9CA3AF] transition-colors duration-150 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm"
        style={{ fontFamily: 'Roboto, sans-serif' }}
      >
        {children}
      </Link>
    </li>
  )
}

function NewsletterSignup() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email.trim()) return
    setStatus('loading')
    try {
      const controller = new AbortController()
      const timeout = setTimeout(() => controller.abort(), 15000)
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          form_type: 'newsletter',
          source_route: 'footer',
        }),
        signal: controller.signal,
      })
      clearTimeout(timeout)
      if (res.ok) {
        setStatus('success')
        setEmail('')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="flex items-center justify-center gap-2 py-6 text-center">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="text-green-400" aria-hidden="true">
          <path d="M20 6L9 17l-5-5" />
        </svg>
        <p className="text-sm font-medium text-white" style={{ fontFamily: 'Manrope, sans-serif' }}>
          You&rsquo;re on the list. We&rsquo;ll be in touch.
        </p>
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
      <div>
        <p
          className="text-sm font-bold text-white"
          style={{ fontFamily: 'Manrope, sans-serif' }}
        >
          Stay in the loop
        </p>
        <p
          className="text-xs text-[#9CA3AF]"
          style={{ fontFamily: 'Roboto, sans-serif' }}
        >
          Market updates, training announcements, and branch news.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="flex w-full max-w-sm gap-2 sm:w-auto">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          required
          className="w-full min-w-0 rounded-lg border border-white/20 bg-white/10 px-4 py-2.5 text-sm text-white placeholder-white/40 outline-none transition-colors focus:border-white/50 sm:w-56"
          style={{ fontFamily: 'Roboto, sans-serif' }}
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="shrink-0 rounded-lg bg-white px-5 py-2.5 text-sm font-bold text-black transition-colors hover:bg-[#F3F4F6] disabled:opacity-50"
          style={{ fontFamily: 'Manrope, sans-serif' }}
        >
          {status === 'loading' ? 'Sending...' : 'Subscribe'}
        </button>
      </form>
      {status === 'error' && (
        <p className="text-xs text-red-400">Something went wrong. Try again.</p>
      )}
    </div>
  )
}

export function Footer() {
  return (
    <footer style={{ backgroundColor: '#000000' }}>
      {/* Main footer body */}
      <Container>
        <div className="grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              href="/"
              aria-label="Acme Realty — home"
              className="inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded"
            >
              <span
                className="text-xl font-extrabold tracking-tight text-white"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                Acme Realty
              </span>
            </Link>
            <p
              className="mt-3 text-sm leading-relaxed text-[#9CA3AF]"
              style={{ fontFamily: 'Roboto, sans-serif' }}
            >
              Anytown&rsquo;s growth-first real estate branch. We equip agents with
              the tools, training, teams, and community to build careers that last.
            </p>

            {/* Social */}
            <div className="mt-5 flex items-center gap-3">
              {/* Facebook */}
              <a
                href="https://example.com/facebook"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Acme Realty on Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-white transition-colors duration-150 hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              {/* Instagram */}
              <a
                href="https://example.com/instagram"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Acme Realty on Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-white transition-colors duration-150 hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a
                href="https://example.com/linkedin"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Acme Realty on LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-white transition-colors duration-150 hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              {/* TikTok */}
              <a
                href="https://example.com/tiktok"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Acme Realty on TikTok"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-white transition-colors duration-150 hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.75a8.18 8.18 0 004.77 1.52V6.84a4.84 4.84 0 01-1-.15z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Explore */}
          <div>
            <FooterColumnHeading>Explore</FooterColumnHeading>
            <ul className="flex flex-col gap-2">
              {EXPLORE_LINKS.map((l) => (
                <FooterLink key={l.href} href={l.href}>
                  {l.label}
                </FooterLink>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <FooterColumnHeading>Resources</FooterColumnHeading>
            <ul className="flex flex-col gap-2">
              {RESOURCES_LINKS.map((l) => (
                <FooterLink key={l.href} href={l.href}>
                  {l.label}
                </FooterLink>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <FooterColumnHeading>Connect</FooterColumnHeading>
            <ul className="mb-6 flex flex-col gap-2">
              {CONNECT_LINKS.map((l) => (
                <FooterLink key={l.href} href={l.href}>
                  {l.label}
                </FooterLink>
              ))}
            </ul>

            <FooterColumnHeading>Office</FooterColumnHeading>
            <address
              className="not-italic text-[#9CA3AF]"
              style={{ fontFamily: 'Roboto, sans-serif' }}
            >
              <p className="text-sm leading-relaxed">
                123 Main Street
                <br />
                Anytown, VA 00000
              </p>
              <p className="mt-2 text-sm">
                <a
                  href="tel:+15550100100"
                  className="text-[#9CA3AF] transition-colors duration-150 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  (555) 010-0100
                </a>
              </p>
              <p className="mt-1 text-sm">
                <a
                  href="mailto:agent@example.com"
                  className="text-[#9CA3AF] transition-colors duration-150 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  agent@example.com
                </a>
              </p>
              <p className="mt-2 text-sm text-[#6B7280]">
                Mon–Fri &nbsp;9AM – 5PM
              </p>
            </address>
          </div>
        </div>
      </Container>

      {/* Newsletter */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <Container>
          <NewsletterSignup />
        </Container>
      </div>

      {/* Legal bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <Container>
          <div
            className="flex flex-col items-center justify-between gap-2 py-5 text-xs sm:flex-row"
            style={{ fontFamily: 'Roboto, sans-serif' }}
          >
            <p className="flex items-center gap-1.5 text-[#6B7280]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-4 w-4 shrink-0"
                aria-label="Equal Housing Opportunity"
              >
                <path d="M12 2L2 9h3v11h14V9h3L12 2zm0 2.84L19 9.7V18H5V9.7l7-4.86zM7 14h10v1H7v-1zm0-3h10v1H7v-1z" />
              </svg>
              Brokered by Acme Realty &mdash; an Equal Housing Opportunity Brokerage
            </p>
            <div className="flex items-center gap-4 text-[#6B7280]">
              <Link
                href="/privacy"
                className="transition-colors duration-150 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="transition-colors duration-150 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm"
              >
                Terms of Service
              </Link>
              <Link
                href="/login"
                className="transition-colors duration-150 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm"
              >
                Agent Login
              </Link>
            </div>
            <div className="text-right text-[#6B7280]">
              <p>
                &copy; 2026 Acme Realty Anytown Branch. All Rights Reserved.
              </p>
              <p className="mt-1">
                Virginia DPOR License: 0000000000 (placeholder)
              </p>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  )
}
