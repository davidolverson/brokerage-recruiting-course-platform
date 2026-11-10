'use client'

import { isAdminSurfaceRole, landingPathForRole } from '@/lib/roles'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { isPublicAdminRoute } from '@/lib/admin-routes'

interface NavItem {
  label: string
  href: string
  roles: string[] // which roles can see this
  icon: string // inline SVG path data (24x24 viewBox)
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Dashboard', href: '/dashboard', roles: ['owner', 'team_leader'], icon: 'M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z' },
  { label: 'Leads', href: '/leads', roles: ['owner', 'team_leader', 'staff'], icon: 'M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z' },
  { label: 'Pipeline', href: '/pipeline', roles: ['owner', 'team_leader'], icon: 'M3 4h18v2H3V4zm0 7h12v2H3v-2zm0 7h6v2H3v-2z' },
  { label: 'Onboarding', href: '/onboarding', roles: ['owner', 'team_leader'], icon: 'M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z' },
  { label: 'Events', href: '/events', roles: ['owner', 'team_leader'], icon: 'M19 4h-1V2h-2v2H8V2H6v2H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V6a2 2 0 00-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z' },
  { label: 'Articles', href: '/articles', roles: ['owner', 'team_leader'], icon: 'M4 3h16a1 1 0 011 1v16a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1zm2 4v2h12V7H6zm0 4v2h12v-2H6zm0 4v2h8v-2H6z' },
  { label: 'Handbook', href: '/handbook', roles: ['owner', 'team_leader'], icon: 'M6 2h11a2 2 0 012 2v16a2 2 0 01-2 2H6a2 2 0 01-2-2V4a2 2 0 012-2zm0 2v16h11V4H6zm2 3h7v2H8V7zm0 4h7v2H8v-2z' },
  { label: 'Media', href: '/uploads', roles: ['owner', 'team_leader'], icon: 'M4 5h16a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V6a1 1 0 011-1zm1 2v8.5l3.5-3.5 3 3 3.5-3.5L19 15V7H5zm3 1.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3z' },
  { label: 'Contacts', href: '/contacts', roles: ['owner', 'staff'], icon: 'M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z' },
  { label: 'Campaigns', href: '/campaigns', roles: ['owner', 'staff'], icon: 'M2 4h20v16H2V4zm2 2v.01L12 12l8-5.99V6H4zm16 2.24l-8 6-8-6V18h16V8.24z' },
  // Staff may read the roster; only owner and team_leader may raise the $500
  // fee, which is enforced in /api/admin/billing/transaction-fee rather than
  // here. Listing it for staff matches what the roster API authorises.
  { label: 'Memberships', href: '/memberships', roles: ['owner', 'team_leader', 'staff'], icon: 'M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z' },
  { label: 'Analytics', href: '/analytics', roles: ['owner'], icon: 'M5 9.2h3V19H5V9.2zM10.6 5h2.8v14h-2.8V5zm5.6 8H19v6h-2.8v-6z' },
  { label: 'Course', href: '/course-admin', roles: ['owner'], icon: 'M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z' },
  { label: 'Team', href: '/team', roles: ['owner'], icon: 'M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z' },
  { label: 'Notifications', href: '/notifications', roles: ['owner', 'team_leader', 'staff'], icon: 'M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5S10.5 3.17 10.5 4v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z' },
  { label: 'Settings', href: '/settings', roles: ['owner'], icon: 'M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 00.12-.61l-1.92-3.32a.488.488 0 00-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.484.484 0 00-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58a.49.49 0 00-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z' },
]

const ROLE_LABEL: Record<string, string> = {
  team_leader: 'Team Leader',
  staff: 'Staff',
  owner: 'Owner',
  broker: 'Broker',
}

function NavLinks({
  items,
  pathname,
  onNavigate,
}: {
  items: NavItem[]
  pathname: string
  onNavigate?: () => void
}) {
  return (
    <div className="flex flex-col gap-0.5">
      {items.map((item) => {
        const isActive = pathname === item.href || pathname.startsWith(item.href + '/')
        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={onNavigate}
            aria-current={isActive ? 'page' : undefined}
            className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
              isActive
                ? 'bg-[#1A1A1A] text-white'
                : 'text-[#6B7280] hover:bg-[#111] hover:text-white'
            }`}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="shrink-0">
              <path d={item.icon} />
            </svg>
            {item.label}
          </Link>
        )
      })}
    </div>
  )
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [role, setRole] = useState<string | null>(null)
  // Distinct from `role`: null role means BOTH "still asking" and "asked, not
  // an admin", and those must not render the same thing.
  const [roleResolved, setRoleResolved] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    fetch('/api/admin/me')
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (!data?.role) { setRoleResolved(true); return }
        // Course-only roles (e.g. broker) should never see the admin shell.
        // If someone follows a stale bookmark or shared link, bounce them
        // into the course player instead of rendering an empty sidebar.
        if (!isAdminSurfaceRole(data.role)) {
          // ...but NOT on the signed-out pages. An invite link has to work
          // whoever happens to be signed in on that browser: bouncing an agent
          // from /accept-invite sent them to their own handbook instead, with
          // nothing to say why the invite had vanished.
          if (isPublicAdminRoute(window.location.pathname)) return
          // An agent belongs in the handbook, not the DPOR course player.
          window.location.href = landingPathForRole(data.role)
          return
        }
        setRole(data.role)
        setRoleResolved(true)
      })
      .catch(() => setRoleResolved(true))
  }, [])

  // Close the mobile drawer whenever the route changes.
  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  // Lock body scroll while the drawer is open.
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  // FAIL CLOSED. This was `!role || item.roles.includes(role)`, so a null role
  // — signed out, or simply before /api/admin/me resolves — showed EVERY item.
  // /login, /accept-invite and /forgot-password were serving the whole admin
  // toolset (Dashboard, Leads, Pipeline, Contacts, Campaigns, Analytics, Team,
  // Settings) in their HTML to anyone who asked.
  const visibleItems = role ? NAV_ITEMS.filter((item) => item.roles.includes(role)) : []
  const roleLabel = role ? ROLE_LABEL[role] ?? role : null

  // A sign-in page has no business wearing the admin shell: there is nobody to
  // navigate yet, and rendering it leaks the shape of the admin surface.
  //
  // It still needs the shell's BACKGROUND though. Returning bare children left
  // the dark login card floating on a white page, which reads as a broken
  // stylesheet — dropping the nav is the point, dropping the theme was a
  // regression.
  if (isPublicAdminRoute(pathname)) {
    return <div className="min-h-screen bg-[#0A0A0A] text-white">{children}</div>
  }

  // Until we know who this is, show the frame WITHOUT the nav rather than a
  // sidebar with zero links. A non-admin role is about to be bounced by the
  // effect above, and a real admin should not see an empty nav flash either.
  if (!roleResolved) {
    return (
      <div className="min-h-screen bg-[#0A0A0A] text-white">
        <div className="flex h-16 items-center border-b border-[#1A1A1A] px-6">
          <span className="text-lg font-extrabold tracking-tight text-white" style={{ fontFamily: 'Manrope, sans-serif' }}>
            Acme Realty
          </span>
        </div>
        <p className="p-8 text-sm text-[#6B7280]">Loading…</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <div className="flex min-h-screen">
        {/* Desktop sidebar */}
        <aside className="hidden w-64 shrink-0 border-r border-[#1A1A1A] bg-[#0A0A0A] lg:block">
          <div className="flex h-16 items-center border-b border-[#1A1A1A] px-6">
            <Link href="/dashboard">
              <span
                className="text-lg font-extrabold tracking-tight text-white"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                Acme Realty
              </span>
            </Link>
          </div>
          <nav className="p-4">
            <p className="mb-3 px-2 text-xs font-semibold uppercase tracking-widest text-[#4B5563]">
              Admin
            </p>
            <NavLinks items={visibleItems} pathname={pathname} />
            {roleLabel && (
              <div className="mt-6 border-t border-[#1A1A1A] pt-4">
                <p className="px-2 text-xs text-[#4B5563]">
                  Role: <span className="font-semibold text-[#6B7280]">{roleLabel}</span>
                </p>
              </div>
            )}
          </nav>
        </aside>

        {/* Mobile drawer + backdrop */}
        {mobileOpen && (
          <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true" aria-label="Navigation menu">
            <div
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <aside className="absolute left-0 top-0 flex h-full w-72 max-w-[82vw] flex-col border-r border-[#1A1A1A] bg-[#0A0A0A] shadow-2xl">
              <div className="flex h-16 shrink-0 items-center justify-between border-b border-[#1A1A1A] px-5">
                <span
                  className="text-lg font-extrabold tracking-tight text-white"
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                >
                  Acme Realty
                </span>
                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-[#6B7280] transition-colors hover:bg-[#1A1A1A] hover:text-white"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <nav className="flex-1 overflow-y-auto p-4">
                <p className="mb-3 px-2 text-xs font-semibold uppercase tracking-widest text-[#4B5563]">
                  Admin
                </p>
                <NavLinks items={visibleItems} pathname={pathname} onNavigate={() => setMobileOpen(false)} />
              </nav>
              {roleLabel && (
                <div className="shrink-0 border-t border-[#1A1A1A] p-4">
                  <p className="px-2 text-xs text-[#4B5563]">
                    Role: <span className="font-semibold text-[#6B7280]">{roleLabel}</span>
                  </p>
                </div>
              )}
            </aside>
          </div>
        )}

        {/* Main content area */}
        <div className="flex min-w-0 flex-1 flex-col">
          <header className="sticky top-0 z-30 flex h-16 items-center gap-3 border-b border-[#1A1A1A] bg-[#0A0A0A]/95 px-4 backdrop-blur supports-[backdrop-filter]:bg-[#0A0A0A]/80 sm:px-6 lg:px-8">
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#1A1A1A] text-[#9CA3AF] transition-colors hover:bg-[#1A1A1A] hover:text-white lg:hidden"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M3 12h18M3 6h18M3 18h18" />
              </svg>
            </button>
            <span
              className="text-sm font-bold text-white lg:hidden"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              Acme Realty
            </span>
            <div className="ml-auto text-xs text-[#6B7280]">Admin Panel</div>
          </header>

          <main className="flex-1 p-4 sm:p-6 lg:p-8">{children}</main>
        </div>
      </div>
    </div>
  )
}
