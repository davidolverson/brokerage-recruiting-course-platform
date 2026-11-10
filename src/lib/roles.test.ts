import { describe, it, expect } from 'vitest'
import { readFileSync } from 'fs'
import { join } from 'path'
import {
  ADMIN_SURFACE_ROLES,
  HANDBOOK_ROLES,
  isAdminSurfaceRole,
  canRoleReadHandbook,
  landingPathForRole,
} from './roles'

const src = (p: string) => readFileSync(join(process.cwd(), 'src', p), 'utf8')

describe('the agent role can read the handbook and nothing else', () => {
  it('is entitled to the handbook', () => {
    expect(canRoleReadHandbook('agent')).toBe(true)
  })

  it('is NOT an admin-surface role', () => {
    // The whole point: a new agent gets the onboarding material and no access
    // to leads, contacts, campaigns or the CMS.
    expect(isAdminSurfaceRole('agent')).toBe(false)
    expect(ADMIN_SURFACE_ROLES).not.toContain('agent')
  })

  it('lands on the handbook, not the DPOR course player', () => {
    expect(landingPathForRole('agent')).toBe('/handbook')
  })

  it('appears in no admin nav item', () => {
    const layout = src('app/(admin)/layout.tsx')
    const navBlock = layout.slice(layout.indexOf('const NAV_ITEMS'), layout.indexOf('const ROLE_LABEL'))
    expect(navBlock).not.toMatch(/'agent'/)
  })
})

describe('broker stays out of the handbook', () => {
  it('is not entitled', () => {
    // Brokers authenticate here only for the DPOR course. The handbook holds the
    // fee schedule and affiliated business disclosures.
    expect(canRoleReadHandbook('broker')).toBe(false)
    expect(HANDBOOK_ROLES).not.toContain('broker')
  })

  it('still goes to the course after signing in', () => {
    expect(landingPathForRole('broker')).toBe('/course/dashboard')
  })
})

describe('unknown and absent roles are refused', () => {
  it.each([null, undefined, '', 'admin', 'superuser', 'AGENT'])('%s is not entitled', (r) => {
    expect(canRoleReadHandbook(r as string)).toBe(false)
    expect(isAdminSurfaceRole(r as string)).toBe(false)
  })
})

describe('there is one definition of the admin-surface set', () => {
  // The admin layout and the login page each carried their own hardcoded copy,
  // so there were three definitions and nothing keeping them in step — the same
  // drift that left three admin routes unprotected in middleware.
  it.each(['app/(admin)/layout.tsx', 'app/(admin)/login/page.tsx'])(
    '%s imports the shared set instead of redefining it',
    (p) => {
      const s = src(p)
      expect(s).toMatch(/from '@\/lib\/roles'/)
      expect(s).not.toMatch(/ADMIN_SURFACE_ROLES\s*=\s*new Set/)
    },
  )

  it('permissions.ts re-exports rather than redeclaring', () => {
    const s = src('lib/permissions.ts')
    expect(s).toMatch(/from '\.\/roles'/)
    expect(s).not.toMatch(/export const ADMIN_SURFACE_ROLES/)
  })
})

describe('the invite flow can actually create an agent', () => {
  it('the API accepts the role', () => {
    expect(src('app/api/admin/team/invite/route.ts')).toMatch(/'agent'/)
  })

  it('the team page offers it', () => {
    // The page used to hardcode <option value="agent">. It now renders only
    // the roles the SERVER says this account may create, so the guarantee
    // moved: the label must exist, and the picker must be driven by that list.
    // The behavioural half of this ("a team_leader may invite an agent") is
    // asserted directly in team-permissions.test.ts.
    const page = src('app/(admin)/team/page.tsx')
    expect(page).toMatch(/INVITE_ROLE_LABELS[\s\S]{0,200}agent:/)
    expect(page).toMatch(/invitableRoles\.map/)
  })

  it('the team screen is reachable by the role that runs the hub', () => {
    // The bug this replaces: all three team routes were owner-only while the
    // client is a team_leader, so she could not invite a single agent and the
    // page rendered empty. Zero agents existed for exactly that reason.
    for (const f of ['app/api/admin/team/route.ts', 'app/api/admin/team/invite/route.ts', 'app/api/admin/team/toggle/route.ts']) {
      expect(src(f), f).not.toMatch(/role !== 'owner'/)
      expect(src(f), f).toMatch(/!canUseTeamScreen\(/)
    }
  })

  it('never lets an invite mint an owner', () => {
    const s = src('app/api/admin/team/invite/route.ts')
    const guard = s.slice(s.indexOf('includes(role)') - 120, s.indexOf('includes(role)'))
    expect(guard).not.toMatch(/'owner'/)
  })
})
