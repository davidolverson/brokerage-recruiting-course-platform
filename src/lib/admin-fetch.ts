/**
 * A signed-out admin should be told so, not shown an empty page.
 *
 * The middleware only checks that a session COOKIE EXISTS, never that the
 * session behind it is still live (see src/middleware.ts). So once a session
 * lapses — they expire 24h after sign-in — the admin page still renders, and
 * every API call underneath it answers 401. Each screen fetches with a bare
 * `fetch` and a `.catch(() => [])`, which is right for a network blip and
 * badly wrong here: the list draws as EMPTY and the buttons quietly do
 * nothing, with no way for the user to tell that apart from "the page is
 * broken". The office manager reported exactly that shape on 2026-08-13.
 *
 * `adminFetch` leaves the network-blip behaviour alone and makes only the
 * expired case announce itself: it sends the user back to /login carrying the
 * page they were on, and the login screen says why they landed there.
 */

export class SessionExpiredError extends Error {
  constructor() {
    super('Your session has expired. Please sign in again.')
    this.name = 'SessionExpiredError'
  }
}

/**
 * Where a 401'd admin screen should send the browser.
 *
 * Pure so it can be tested without a DOM. The `redirect` value is read back by
 * the login page, which already refuses anything that is not a site-relative
 * path, so a protocol-relative `//evil.com` cannot survive the round trip.
 */
export function loginRedirectUrl(pathname: string, search = ''): string {
  const safe = pathname.startsWith('/') && !pathname.startsWith('//') ? `${pathname}${search}` : '/dashboard'
  return `/login?expired=1&redirect=${encodeURIComponent(safe)}`
}

export function isSessionExpired(error: unknown): boolean {
  return error instanceof SessionExpiredError
}

/**
 * fetch() for admin API calls. Identical to fetch except that a 401 bounces to
 * the login page and throws, so a `.catch(() => [])` at the call site can no
 * longer swallow "you are signed out" into an empty list.
 */
export async function adminFetch(input: string, init?: RequestInit): Promise<Response> {
  const res = await fetch(input, { credentials: 'include', ...init })

  if (res.status === 401) {
    if (typeof window !== 'undefined') {
      window.location.href = loginRedirectUrl(window.location.pathname, window.location.search)
    }
    throw new SessionExpiredError()
  }

  return res
}
