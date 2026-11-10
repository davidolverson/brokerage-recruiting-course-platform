/**
 * Pages under (admin) that must stay reachable signed out, or nobody could
 * ever sign in or accept an invite.
 *
 * One definition. It previously existed twice (middleware.ts and its test) and
 * a third copy was about to go into the admin layout — the same drift that has
 * already bitten the role lists and the article section type in this repo.
 */
export const PUBLIC_ADMIN_ROUTES = [
  '/login',
  '/setup',
  '/accept-invite',
  '/forgot-password',
  '/reset-password',
] as const

/** Is this path one of the signed-out admin pages? */
export function isPublicAdminRoute(pathname: string): boolean {
  return (PUBLIC_ADMIN_ROUTES as readonly string[]).some(
    (r) => pathname === r || pathname.startsWith(`${r}/`),
  )
}
