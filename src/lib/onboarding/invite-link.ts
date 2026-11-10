/**
 * Keeping the onboarding tracker and the handbook invite in step.
 *
 * They were two disconnected jobs: add someone to the tracker, then go to Team
 * and type the same address again. Two chances to typo the one field the
 * automation joins on, and the "more automation" brief only half met.
 *
 * This module holds the pure parts so the tracker's invite button and the
 * accept-invite hook agree about what the states mean.
 */

export type InviteState = 'none' | 'pending' | 'active'

export interface InviteFacts {
  /** An active agent account exists for this email. */
  hasAccount: boolean
  /** An unused, unexpired invite exists for this email. */
  hasPendingInvite: boolean
}

export function inviteState(f: InviteFacts): InviteState {
  // Account wins: once they are in, a stale unused token is irrelevant.
  if (f.hasAccount) return 'active'
  if (f.hasPendingInvite) return 'pending'
  return 'none'
}

/** What the tracker row should say about this person's handbook access. */
export function inviteLabel(state: InviteState): string {
  switch (state) {
    case 'active': return 'Handbook active'
    case 'pending': return 'Invite sent, not accepted'
    default: return 'Not invited'
  }
}

/**
 * May we send an invite for this person right now?
 *
 * Refusing the already-invited case in one place stops the tracker button and
 * the Team screen disagreeing about whether a second invite is allowed.
 */
export function canSendInvite(state: InviteState): boolean {
  return state === 'none'
}

export function whyCannotInvite(state: InviteState): string | null {
  if (state === 'active') return 'They already have a handbook account.'
  if (state === 'pending') return 'An invite is already waiting to be accepted.'
  return null
}
