import type { AdminRole } from './roles'

/**
 * Who may manage whom on the Team screen.
 *
 * All three /api/admin/team routes were `owner` only, while /team sits in
 * ADMIN_ROUTES and team_leader is an admin-surface role. So the client (a
 * team_leader) could open the page, see an invite form offering "Example Investor Team
 * Agent (handbook only)", fill it in, and get 403 from every call — including
 * the list, so the page rendered empty. The Agent Hub had zero agents because
 * the person who owns it had no way to add one. That is a permissions bug, not
 * a missing feature.
 *
 * The rule is least privilege, not "team_leader is a junior owner":
 *   - owner does anything, as before.
 *   - team_leader may invite ONLY agents, ONLY into their own team, and may
 *     only see and deactivate the agents in that team.
 * A team_leader must never be able to mint another admin-surface account, or
 * touch an owner. Those are the escalation paths and each has its own test.
 */

export interface TeamActor {
  role: AdminRole
  teamSlug: string | null
  userId: string
}

export interface TeamTarget {
  id: string
  role: AdminRole
  team_slug: string | null
}

/** Roles a team_leader is allowed to create. Deliberately just the one. */
export const TEAM_LEADER_INVITABLE: readonly AdminRole[] = ['agent']

export function canInviteRole(actor: TeamActor, role: string): boolean {
  if (actor.role === 'owner') {
    // The invite API has always refused owner; that check stays where it is.
    return ['team_leader', 'staff', 'broker', 'agent'].includes(role)
  }
  if (actor.role !== 'team_leader') return false
  // A team_leader with no team cannot scope an invite, so it cannot make one.
  if (!actor.teamSlug) return false
  return (TEAM_LEADER_INVITABLE as readonly string[]).includes(role)
}

/**
 * The team an invite lands in. A team_leader's invites are FORCED into their
 * own team rather than trusting the team_slug in the request body, which is
 * client-supplied and is the obvious way to plant an account elsewhere.
 */
export function resolveInviteTeam(actor: TeamActor, requested: string | null | undefined): string | null {
  if (actor.role === 'team_leader') return actor.teamSlug
  return requested ?? null
}

/** Which existing users this actor may see on the Team screen. */
export function visibleTeamUsers<T extends TeamTarget>(actor: TeamActor, users: T[]): T[] {
  if (actor.role === 'owner') return users
  if (actor.role !== 'team_leader' || !actor.teamSlug) return []
  // Their own row, plus the agents in their team. Not other leaders, not staff,
  // and never an owner.
  return users.filter(
    (u) => u.id === actor.userId || (u.role === 'agent' && u.team_slug === actor.teamSlug),
  )
}

/**
 * May this actor activate/deactivate the target?
 *
 * A departing agent still reads the fee schedule until someone switches them
 * off, so a team_leader has to be able to do it without emailing us. They may
 * not touch anything other than an agent in their own team.
 */
export function canToggleUser(actor: TeamActor, target: TeamTarget): boolean {
  if (target.id === actor.userId) return false // no self-deactivation, either role
  if (actor.role === 'owner') return true
  if (actor.role !== 'team_leader' || !actor.teamSlug) return false
  return target.role === 'agent' && target.team_slug === actor.teamSlug
}

/** May this actor open the Team screen at all? */
export function canUseTeamScreen(actor: Pick<TeamActor, 'role'>): boolean {
  return actor.role === 'owner' || actor.role === 'team_leader'
}
