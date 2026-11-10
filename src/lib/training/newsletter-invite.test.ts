import { describe, it, expect } from 'vitest'
import { inviteAttachmentError, type InviteEvent } from './newsletter-invite'

const teamMeeting: InviteEvent = {
  title: 'Example Investor Team Meeting',
  // The real prod row: weekly Tuesday, not the 1st, and cancelled on Aug 25.
  recurrence: { type: 'weekly', weekday: 2, exceptNth: [1], skipDates: ['2026-08-25'] },
  active: true,
}

describe('attaching an event invite to a newsletter', () => {
  it('allows a date the event actually happens on', () => {
    expect(inviteAttachmentError(teamMeeting, '2026-08-18')).toBeNull()
  })

  it('refuses a date the editor CANCELLED', () => {
    // The whole point: the tool for announcing a meeting must not be able to
    // announce the one meeting that was called off.
    const err = inviteAttachmentError(teamMeeting, '2026-08-25')
    expect(err).toMatch(/does not happen on August 25, 2026/)
    expect(err).toMatch(/cancelled dates/)
  })

  it('refuses a date the pattern never produces', () => {
    expect(inviteAttachmentError(teamMeeting, '2026-08-19')).toMatch(/does not happen/)
    // The 1st Tuesday, excluded by exceptNth.
    expect(inviteAttachmentError(teamMeeting, '2026-09-01')).toMatch(/does not happen/)
  })

  it('refuses a hidden event instead of inviting people to it', () => {
    expect(inviteAttachmentError({ ...teamMeeting, active: false }, '2026-08-18'))
      .toMatch(/hidden from the calendar/)
  })

  it('refuses a slug that did not resolve, rather than sending without the invite', () => {
    // This used to send the newsletter as a bare message and report success.
    expect(inviteAttachmentError(undefined, '2026-08-18')).toMatch(/no longer exists/)
  })

  it('refuses a missing or malformed date', () => {
    for (const v of [undefined, null, '', 'tomorrow', '2026-8-18', '2026-13-01', '2026-02-30', 42]) {
      expect(inviteAttachmentError(teamMeeting, v), String(v)).toMatch(/Pick a date/)
    }
  })

  it('names the event, so the editor knows which one is wrong', () => {
    expect(inviteAttachmentError(teamMeeting, '2026-08-25')).toContain('Example Investor Team Meeting')
  })

  it('works for a one-off, not just a repeating event', () => {
    const tour: InviteEvent = {
      title: 'Broker Tour: Demo Community by a builder',
      recurrence: { type: 'oneoff', date: '2026-08-25' },
      active: true,
    }
    expect(inviteAttachmentError(tour, '2026-08-25')).toBeNull()
    expect(inviteAttachmentError(tour, '2026-08-26')).toMatch(/does not happen/)
  })
})
