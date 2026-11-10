import { describe, it, expect } from 'vitest'
import { buildAnnouncement, longDate } from './announcement'

const fred = {
  title: 'Pop-Up Class: Self-Directed Solo 401(k) Trusts',
  description: 'First paragraph about the class.\n\nSecond paragraph nobody needs in an email.',
  host: 'Demo Speaker, F&M 401K Trust',
  location: 'Acme Realty Office',
  startTime: '12:00',
  endTime: '14:30',
}

describe('longDate', () => {
  it('reads as a person would say it', () => {
    expect(longDate('2026-09-01')).toBe('Tuesday, September 1, 2026')
  })

  it('does not shift the day (the value is parsed as local, not UTC)', () => {
    expect(longDate('2026-01-01')).toBe('Thursday, January 1, 2026')
  })

  it('returns the input unchanged when it is not a date', () => {
    expect(longDate('soon')).toBe('soon')
  })
})

describe('buildAnnouncement', () => {
  it('leads the subject with the title and date', () => {
    const { subject } = buildAnnouncement(fred, '2026-09-01')
    expect(subject).toBe('Pop-Up Class: Self-Directed Solo 401(k) Trusts — Tuesday, September 1, 2026')
  })

  it('changes the framing for a week-out and a day-before send', () => {
    expect(buildAnnouncement(fred, '2026-09-01', 'week').subject).toMatch(/^Next week:/)
    expect(buildAnnouncement(fred, '2026-09-01', 'tomorrow').subject).toBe(
      'Tomorrow: Pop-Up Class: Self-Directed Solo 401(k) Trusts',
    )
    // the day-before subject deliberately omits the date; "tomorrow" is clearer
    expect(buildAnnouncement(fred, '2026-09-01', 'tomorrow').subject).not.toMatch(/September/)
  })

  it('includes the details someone needs to decide whether to come', () => {
    const { message } = buildAnnouncement(fred, '2026-09-01')
    expect(message).toContain('Tuesday, September 1, 2026')
    expect(message).toContain('12:00 PM - 2:30 PM')
    expect(message).toContain('Acme Realty Office')
    expect(message).toContain('Hosted by Demo Speaker, F&M 401K Trust')
    expect(message).toContain('https://example.com/training-events')
  })

  it('uses only the opening paragraph, not the whole description', () => {
    const { message } = buildAnnouncement(fred, '2026-09-01')
    expect(message).toContain('First paragraph about the class.')
    expect(message).not.toContain('Second paragraph nobody needs')
  })

  it('handles an event with no end time', () => {
    const { message } = buildAnnouncement({ ...fred, endTime: null }, '2026-09-01')
    expect(message).toContain('12:00 PM')
    expect(message).not.toContain(' - ')
  })

  it('says the time is unconfirmed rather than printing nothing', () => {
    const { message } = buildAnnouncement({ ...fred, startTime: null, endTime: null }, '2026-09-01')
    expect(message).toContain('Time to be confirmed')
  })

  it('omits optional lines cleanly when they are absent', () => {
    const bare = { title: 'Team Meeting', description: null, host: null, location: null, startTime: '11:00', endTime: '12:00' }
    const { message } = buildAnnouncement(bare, '2026-09-08')
    expect(message).not.toContain('Hosted by')
    expect(message).not.toContain('null')
    expect(message).toContain('Team Meeting')
  })
})
