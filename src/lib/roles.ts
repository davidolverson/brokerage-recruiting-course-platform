// Role constants, shared by server and client.
//
// This lives apart from permissions.ts because that module pulls in the Neon
// client and better-auth, which a client component cannot import. The admin
// layout and the login page each kept their own hardcoded copy of the
// admin-surface set, so there were three definitions of "which roles see the
// admin" and nothing keeping them honest — the same drift that left three admin
// routes unprotected in middleware.ts. roles.test.ts asserts they agree.

export type AdminRole = 'owner' | 'team_leader' | 'staff' | 'broker' | 'agent'

/** Roles that see the lead/pipeline admin shell. */
export const ADMIN_SURFACE_ROLES: readonly AdminRole[] = ['owner', 'team_leader', 'staff']

/**
 * Roles that may read the members-only handbook.
 *
 * `agent` exists for exactly this: a Example Investor Team agent who needs the onboarding
 * material and nothing else. It is deliberately absent from every admin
 * allowlist, so an agent account cannot reach a lead, a contact or the CMS.
 *
 * `broker` is excluded. Brokers authenticate here only for the DPOR course, and
 * the handbook carries the fee schedule and affiliated business disclosures —
 * when in doubt about a role, leave it out.
 */
export const HANDBOOK_ROLES: readonly AdminRole[] = ['owner', 'team_leader', 'staff', 'agent']

export function isAdminSurfaceRole(role: string | null | undefined): boolean {
  return !!role && (ADMIN_SURFACE_ROLES as readonly string[]).includes(role)
}

export function canRoleReadHandbook(role: string | null | undefined): boolean {
  return !!role && (HANDBOOK_ROLES as readonly string[]).includes(role)
}

/**
 * Where a person should land after signing in.
 *
 * Everyone outside the admin surface used to be sent to /course/dashboard,
 * which is the DPOR exam prep. Sending a brand new agent there on their first
 * day, instead of to the handbook written for them, would be a poor welcome.
 */
export function landingPathForRole(role: string | null | undefined, fallback = '/dashboard'): string {
  if (isAdminSurfaceRole(role)) return fallback
  if (role === 'agent') return '/handbook'
  return '/course/dashboard'
}
