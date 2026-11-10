import { describe, it, expect } from 'vitest'
import { inviteState, inviteLabel, canSendInvite, whyCannotInvite } from './invite-link'

describe('inviteState', () => {
  it('reports an active account regardless of any leftover token', () => {
    // Once they are in, a stale unused invite is irrelevant.
    expect(inviteState({ hasAccount: true, hasPendingInvite: true })).toBe('active')
    expect(inviteState({ hasAccount: true, hasPendingInvite: false })).toBe('active')
  })

  it('reports a waiting invite', () => {
    expect(inviteState({ hasAccount: false, hasPendingInvite: true })).toBe('pending')
  })

  it('reports nobody invited', () => {
    expect(inviteState({ hasAccount: false, hasPendingInvite: false })).toBe('none')
  })
})

describe('canSendInvite', () => {
  it('allows exactly one invite, and only when there is nothing already', () => {
    expect(canSendInvite('none')).toBe(true)
    expect(canSendInvite('pending')).toBe(false)
    expect(canSendInvite('active')).toBe(false)
  })

  it('explains every refusal, so the button never fails silently', () => {
    expect(whyCannotInvite('pending')).toBeTruthy()
    expect(whyCannotInvite('active')).toBeTruthy()
    expect(whyCannotInvite('none')).toBeNull()
  })
})

describe('inviteLabel', () => {
  it('says something different for each state', () => {
    const labels = (['none', 'pending', 'active'] as const).map(inviteLabel)
    expect(new Set(labels).size).toBe(3)
    for (const l of labels) expect(l.length).toBeGreaterThan(5)
  })
})
