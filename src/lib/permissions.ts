import { neon } from '@neondatabase/serverless'
import { getServerSession } from './auth-server'

// Role constants live in lib/roles so client components can import them too.
// 'broker' and 'agent' are course-only / handbook-only respectively: both
// authenticate against admin_users so they can be managed from /team, but admin
// pages and APIs treat them as non-admin.
export {
  ADMIN_SURFACE_ROLES,
  HANDBOOK_ROLES,
  isAdminSurfaceRole,
  canRoleReadHandbook,
  landingPathForRole,
  type AdminRole,
} from './roles'
import { canRoleReadHandbook } from './roles'
import type { AdminRole } from './roles'

export interface AdminContext {
  userId: string
  email: string
  name: string
  role: AdminRole
  teamSlug: string | null
  isActive: boolean
}

export async function getAdminContext(): Promise<AdminContext | null> {
  const session = await getServerSession()
  if (!session) return null

  const sql = neon(process.env.DATABASE_URL!)
  const rows = await sql`
    SELECT id, email, name, role, team_slug, is_active FROM admin_users WHERE id = ${session.user.id}
  `

  if (rows.length === 0 || !rows[0].is_active) return null

  return {
    userId: String(rows[0].id),
    email: String(rows[0].email),
    name: String(rows[0].name),
    role: String(rows[0].role) as AdminRole,
    teamSlug: rows[0].team_slug ? String(rows[0].team_slug) : null,
    isActive: Boolean(rows[0].is_active),
  }
}

/**
 * May this viewer read the members-only handbook?
 *
 * ⛔ A session cookie is NOT sufficient and never was. /course/signup is a
 * public, self-service better-auth registration, so anyone on the internet can
 * mint an account and therefore a session. The middleware's cookie check is a
 * cheap first pass only; entitlement is decided here, server-side.
 *
 * "Entitled" means an active admin_users row whose role is in HANDBOOK_ROLES.
 * An agent qualifies; a broker does not, because brokers authenticate here only
 * for the DPOR course. The handbook carries the fee schedule, LLC information
 * and affiliated business disclosures, so when in doubt about a role, leave it
 * out: too strict is recoverable, too loose is not.
 */
export async function canReadHandbook(): Promise<AdminContext | null> {
  const ctx = await getAdminContext()
  if (!ctx) return null
  // Being in admin_users is not enough — a broker is in there for the DPOR
  // course and has no business reading the fee schedule.
  return canRoleReadHandbook(ctx.role) ? ctx : null
}

export function requireRole(ctx: AdminContext | null, ...allowed: AdminRole[]): AdminContext {
  if (!ctx) throw new RoleError('Unauthorized', 401)
  if (!allowed.includes(ctx.role)) throw new RoleError('Forbidden', 403)
  return ctx
}

/**
 * The floor for anything in the sales CRM: leads, the pipeline, the dashboard.
 *
 * These routes only ever asked "is there an admin context?", which is true for
 * ANY active admin_users row — including `broker` (who is here for the DPOR
 * course) and `agent` (who is here for the handbook and nothing else). Walking
 * the hub as a real agent on 2026-08-13 showed it plainly: /api/admin/leads
 * returned all 44 records, and /api/admin/leads/export returned a CSV of every
 * name, email, phone and phone-consent flag.
 *
 * canAccessLead/canMutateLead already refuse those roles, but the list, export,
 * pipeline and dashboard routes never called them. The per-record gate was
 * right and the collection had none.
 */
export function requireCrmAccess(ctx: AdminContext | null): AdminContext {
  return requireRole(ctx, 'owner', 'team_leader', 'staff')
}

export function canAccessLead(ctx: AdminContext, lead: { selected_team: string | null; assigned_team: string | null }): boolean {
  if (ctx.role === 'owner' || ctx.role === 'staff') return true
  if (ctx.role === 'team_leader' && ctx.teamSlug) {
    return lead.selected_team === ctx.teamSlug || lead.assigned_team === ctx.teamSlug
  }
  return false
}

export function canMutateLead(ctx: AdminContext, lead: { selected_team: string | null; assigned_team: string | null }): boolean {
  if (ctx.role === 'owner') return true
  if (ctx.role === 'staff') return false
  if (ctx.role === 'team_leader' && ctx.teamSlug) {
    return lead.selected_team === ctx.teamSlug || lead.assigned_team === ctx.teamSlug
  }
  return false
}

export class RoleError extends Error {
  status: number
  constructor(message: string, status: number) {
    super(message)
    this.status = status
  }
}
