import { NextRequest, NextResponse } from 'next/server'

// Marketing module SEO pages (public, no auth required)
const PUBLIC_COURSE_ROUTES = [
  '/course',
  '/course/signup',
  '/course/forgot-password',
  '/course/reset-password',
  '/course/virginia-real-estate-law',
  '/course/property-ownership',
  '/course/contracts-agency',
  '/course/finance-valuation',
  '/course/practice-ethics',
  '/course/virginia-specific',
  '/course/exam-day',
]

/**
 * Every page under src/app/(admin) that is not in PUBLIC_ADMIN_ROUTES.
 *
 * This used to be a hand-written chain of `pathname === '/x' || ...`, kept in
 * sync with config.matcher by memory alone. It drifted: /contacts, /campaigns
 * and /course-admin were never added to either, so they answered 200 to a
 * signed-out visitor while /dashboard redirected. Their APIs still enforced
 * auth, so nothing leaked, but the gate was not where it looked like it was.
 *
 * middleware.test.ts asserts this list matches the directories on disk AND the
 * matcher below, so adding a page without protecting it fails the build.
 */
export const ADMIN_ROUTES = [
  '/analytics',
  '/articles',
  '/campaigns',
  '/contacts',
  '/course-admin',
  '/dashboard',
  '/events',
  '/leads',
  '/memberships',
  '/notifications',
  '/onboarding',
  '/pipeline',
  '/settings',
  '/team',
  '/uploads',
] as const

/**
 * Signed-in-but-not-staff areas: the onboarding handbook a new agent is given.
 *
 * Kept separate from ADMIN_ROUTES on purpose. These are not admin pages and
 * must not be asserted against the (admin) directory listing, but they still
 * require a session — the handbook carries the fee schedule, LLC information
 * and affiliated business disclosures, so an unlisted URL is not sufficient.
 */
export const MEMBER_ROUTES = ['/handbook'] as const

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Route group strips "(admin)" from the URL, so these are top-level paths.
  const isAdminRoute = ADMIN_ROUTES.some(
    (r) => pathname === r || pathname.startsWith(`${r}/`),
  )
  const isMemberRoute = MEMBER_ROUTES.some(
    (r) => pathname === r || pathname.startsWith(`${r}/`),
  )

  // Course routes require auth (except public marketing/auth pages)
  const isCourseProtected = pathname.startsWith('/course/') &&
    !PUBLIC_COURSE_ROUTES.includes(pathname)

  if (!isAdminRoute && !isMemberRoute && !isCourseProtected) return NextResponse.next()

  // Check for Better Auth session cookie (production uses __Secure- prefix)
  const sessionCookie =
    request.cookies.get('__Secure-better-auth.session_token') ??
    request.cookies.get('better-auth.session_token')

  if (!sessionCookie?.value) {
    // Course routes redirect to course signup, admin routes to admin login
    const redirectPath = isCourseProtected ? '/course/signup' : '/login'
    const redirectUrl = new URL(redirectPath, request.url)
    redirectUrl.searchParams.set('redirect', pathname)
    return NextResponse.redirect(redirectUrl)
  }

  // Cookie exists — allow through (actual session validation happens server-side)
  return NextResponse.next()
}

// Next.js requires this to be a statically analysable literal, so it cannot be
// generated from ADMIN_ROUTES. middleware.test.ts asserts the two agree.
export const config = {
  matcher: [
    '/analytics/:path*',
    '/articles/:path*',
    '/campaigns/:path*',
    '/contacts/:path*',
    '/course-admin/:path*',
    '/dashboard/:path*',
    '/events/:path*',
    '/leads/:path*',
    '/memberships/:path*',
    '/notifications/:path*',
    '/onboarding/:path*',
    '/pipeline/:path*',
    '/settings/:path*',
    '/team/:path*',
    '/uploads/:path*',
    '/handbook/:path*',
    '/course/:path*',
  ],
}
