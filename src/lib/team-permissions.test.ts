import { describe, it, expect } from 'vitest'
import {
  canInviteRole, resolveInviteTeam, visibleTeamUsers, canToggleUser, canUseTeamScreen,
  type TeamActor, type TeamTarget,
} from './team-permissions'

const owner: TeamActor = { role: 'owner', teamSlug: null, userId: 'own1' }
const leader: TeamActor = { role: 'team_leader', teamSlug: 'example-investor-team', userId: 'ldr1' }
const otherLeader: TeamActor = { role: 'team_leader', teamSlug: 'other-team', userId: 'oth1' }
const homeless: TeamActor = { role: 'team_leader', teamSlug: null, userId: 'nul1' }
const staff: TeamActor = { role: 'staff', teamSlug: null, userId: 'stf1' }

const users: TeamTarget[] = [
  { id: 'own1', role: 'owner', team_slug: null },
  { id: 'ldr1', role: 'team_leader', team_slug: 'example-investor-team' },
  { id: 'agt1', role: 'agent', team_slug: 'example-investor-team' },
  { id: 'oth1', role: 'team_leader', team_slug: 'other-team' },
  { id: 'agt2', role: 'agent', team_slug: 'other-team' },
  { id: 'stf1', role: 'staff', team_slug: null },
  { id: 'brk1', role: 'broker', team_slug: null },
]

describe('canInviteRole', () => {
  it('unblocks the actual problem: a team leader can create an agent', () => {
    expect(canInviteRole(leader, 'agent')).toBe(true)
  })

  it('REFUSES every role that carries an admin surface', () => {
    // The escalation path. A team_leader minting a team_leader or staff would
    // be handing out the lead pipeline and the CMS.
    for (const role of ['team_leader', 'staff', 'broker', 'owner']) {
      expect(canInviteRole(leader, role), role).toBe(false)
    }
  })

  it('leaves the owner exactly as they were', () => {
    for (const role of ['team_leader', 'staff', 'broker', 'agent']) {
      expect(canInviteRole(owner, role), role).toBe(true)
    }
    expect(canInviteRole(owner, 'owner')).toBe(false)
  })

  it('refuses a team leader with no team, who could not scope the invite anyway', () => {
    expect(canInviteRole(homeless, 'agent')).toBe(false)
  })

  it('gives no one else the power at all', () => {
    expect(canInviteRole(staff, 'agent')).toBe(false)
  })
})

describe('resolveInviteTeam', () => {
  it('forces a team leader invite into their OWN team, whatever the body says', () => {
    // team_slug is client-supplied; trusting it is how an account gets planted
    // in someone else's team.
    expect(resolveInviteTeam(leader, 'other-team')).toBe('example-investor-team')
    expect(resolveInviteTeam(leader, null)).toBe('example-investor-team')
  })

  it('still lets an owner place an invite wherever they mean to', () => {
    expect(resolveInviteTeam(owner, 'other-team')).toBe('other-team')
    expect(resolveInviteTeam(owner, undefined)).toBeNull()
  })
})

describe('visibleTeamUsers', () => {
  it('shows a team leader their own row and their own agents, nothing else', () => {
    expect(visibleTeamUsers(leader, users).map((u) => u.id).sort()).toEqual(['agt1', 'ldr1'])
  })

  it('never leaks the owner, staff, brokers, or another team\'s agents', () => {
    const ids = visibleTeamUsers(leader, users).map((u) => u.id)
    for (const hidden of ['own1', 'stf1', 'brk1', 'agt2']) expect(ids, hidden).not.toContain(hidden)
  })

  it('scopes per leader rather than to a hardcoded team', () => {
    expect(visibleTeamUsers(otherLeader, users).map((u) => u.id).sort()).toEqual(['agt2', 'oth1'])
  })

  it('shows the owner everyone, as before', () => {
    expect(visibleTeamUsers(owner, users)).toHaveLength(users.length)
  })

  it('shows nothing to anyone else', () => {
    expect(visibleTeamUsers(staff, users)).toEqual([])
    expect(visibleTeamUsers(homeless, users)).toEqual([])
  })
})

describe('canToggleUser', () => {
  const t = (id: string) => users.find((u) => u.id === id)!

  it('lets a team leader switch off a departing agent without emailing us', () => {
    // Until someone does, they still read the fee schedule.
    expect(canToggleUser(leader, t('agt1'))).toBe(true)
  })

  it('REFUSES the owner, another leader, staff, and another team\'s agent', () => {
    for (const id of ['own1', 'stf1', 'brk1', 'agt2']) {
      expect(canToggleUser(leader, t(id)), id).toBe(false)
    }
  })

  it('refuses self-deactivation for everyone, including the owner', () => {
    expect(canToggleUser(leader, t('ldr1'))).toBe(false)
    expect(canToggleUser(owner, t('own1'))).toBe(false)
  })

  it('leaves the owner able to manage anyone but themselves', () => {
    for (const id of ['ldr1', 'agt1', 'agt2', 'stf1', 'brk1']) {
      expect(canToggleUser(owner, t(id)), id).toBe(true)
    }
  })
})

describe('canUseTeamScreen', () => {
  it('is open to the two roles that manage people, and nobody else', () => {
    expect(canUseTeamScreen({ role: 'owner' })).toBe(true)
    expect(canUseTeamScreen({ role: 'team_leader' })).toBe(true)
    for (const role of ['staff', 'broker', 'agent'] as const) {
      expect(canUseTeamScreen({ role }), role).toBe(false)
    }
  })
})
