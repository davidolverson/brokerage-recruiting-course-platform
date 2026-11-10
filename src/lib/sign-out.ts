import { signOut } from './auth-client'

/**
 * Sign out properly: revoke the session server-side, THEN clear the cookie.
 *
 * Order matters. Once the cookie is gone the server cannot tell whose session
 * to delete, and better-auth's signOut alone left the row valid in the
 * database for another 24 hours — measured after a real sign-out, /api/admin/me
 * answered 401 while the row was still sitting there.
 *
 * Lives in lib rather than inline in the page so both the dashboard button and
 * the "someone else is signed in" notice on the invite page do it identically,
 * and so the deliberate bare fetch is not mistaken for a screen that forgot to
 * use adminFetch. A 401 here means "already signed out", which is the desired
 * state, not an expired session to bounce anyone over.
 */
export async function signOutCompletely(): Promise<void> {
  await fetch('/api/admin/revoke-session', { method: 'POST', credentials: 'include' }).catch(() => {})
  await signOut().catch(() => {})
}
