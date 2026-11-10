import { describe, it, expect } from 'vitest'
import {
  MILESTONES, MILESTONE_KEYS, MANUAL_MILESTONE_KEYS, OVERRIDABLE_MILESTONE_KEYS,
  WRITABLE_MILESTONE_KEYS, getMilestone,
  sanitiseMilestones, calculateProgress, isMilestoneDone, isMilestoneOverridden,
  daysSinceLastMovement, isStalled, STALLED_AFTER_DAYS, todayInBrokerageTz,
} from './milestones'

const at = (s: string) => new Date(s).toISOString()
const NOW = new Date('2026-08-13T00:00:00.000Z')

describe('the milestone list', () => {
  it('stays short, because a progress view nobody updates is worse than none', () => {
    expect(MILESTONES.length).toBeLessThanOrEqual(10)
    expect(MILESTONES.length).toBeGreaterThan(3)
  })

  it('has unique keys, or state would overwrite itself', () => {
    expect(new Set(MILESTONE_KEYS).size).toBe(MILESTONES.length)
  })

  it('says what done MEANS for every milestone, so two people tick it alike', () => {
    for (const m of MILESTONES) {
      expect(m.definition.length, m.key).toBeGreaterThan(20)
      expect(m.label.length, m.key).toBeGreaterThan(3)
    }
  })

  it('points at a handbook page wherever one explains the step', () => {
    // The point of the hub: link the page instead of re-sending the email.
    const linked = MILESTONES.filter((m) => m.handbookSlug)
    expect(linked.length).toBeGreaterThanOrEqual(5)
  })

  it('automates at least one milestone, which is the whole brief', () => {
    expect(MILESTONES.some((m) => m.source === 'auto')).toBe(true)
    expect(MANUAL_MILESTONE_KEYS).not.toContain('handbook_access')
  })

  it('every automatic milestone can be passed by hand, so none of them is a wall', () => {
    // The list is derived rather than hand-written on purpose. Adding a second
    // auto milestone without thinking about it would otherwise re-create the
    // dead end this override exists to remove.
    const auto = MILESTONES.filter((m) => m.source === 'auto').map((m) => m.key)
    expect(OVERRIDABLE_MILESTONE_KEYS).toEqual(auto)
    for (const k of MILESTONE_KEYS) expect(WRITABLE_MILESTONE_KEYS).toContain(k)
  })
})

describe('sanitiseMilestones', () => {
  it('keeps real manual completions', () => {
    const t = at('2026-08-01T10:00:00Z')
    expect(sanitiseMilestones({ joined: t })).toEqual({ joined: t })
  })

  it('stores an override on a derived milestone, so a blocked step can be passed', () => {
    // This reverses the original rule, deliberately. It used to refuse the
    // value outright, which meant handbook access could not be passed until
    // the agent accepted their invite: the office manager hit exactly that wall at 3/8 on
    // 2026-08-17. The safety the old rule bought is kept by isMilestoneDone,
    // which asks the database first and only falls back to this value.
    const t = at('2026-08-01T10:00:00Z')
    expect(sanitiseMilestones({ handbook_access: t })).toEqual({ handbook_access: t })
  })

  it('drops unknown keys rather than storing them in jsonb', () => {
    expect(sanitiseMilestones({ not_a_step: at('2026-08-01T10:00:00Z'), joined: 'nope' })).toEqual({})
  })

  it('drops values that are not timestamps', () => {
    expect(sanitiseMilestones({ joined: true, tc_call: 42, business_setup: 'soon' })).toEqual({})
  })

  it('survives junk in place of an object', () => {
    for (const v of [null, undefined, 'x', 7, []]) expect(sanitiseMilestones(v)).toEqual({})
  })
})

describe('calculateProgress', () => {
  const none = { milestones: {}, hasHandbookAccess: false }

  it('starts at zero and names the first thing to chase', () => {
    const p = calculateProgress(none)
    expect(p.done).toBe(0)
    expect(p.percent).toBe(0)
    expect(p.complete).toBe(false)
    expect(p.nextKey).toBe(MILESTONES[0].key)
  })

  it('counts the derived milestone WITHOUT anyone ticking it', () => {
    const p = calculateProgress({ milestones: {}, hasHandbookAccess: true })
    expect(p.done).toBe(1)
    expect(isMilestoneDone('handbook_access', { milestones: {}, hasHandbookAccess: true })).toBe(true)
  })

  it('counts a hand-set override on the derived milestone, and says it is an override', () => {
    const input = { milestones: { handbook_access: at('2026-08-01T10:00:00Z') }, hasHandbookAccess: false }
    expect(calculateProgress(input).done).toBe(1)
    expect(isMilestoneOverridden('handbook_access', input)).toBe(true)
  })

  it('stops calling it an override once the automation catches up', () => {
    // The stored value becomes redundant rather than wrong, so nothing has to
    // be cleaned up when the invite is finally accepted, and the screen goes
    // back to crediting the automation.
    const input = { milestones: { handbook_access: at('2026-08-01T10:00:00Z') }, hasHandbookAccess: true }
    expect(isMilestoneDone('handbook_access', input)).toBe(true)
    expect(isMilestoneOverridden('handbook_access', input)).toBe(false)
  })

  it('never reports an override for a manual milestone', () => {
    const input = { milestones: { joined: at('2026-08-01T10:00:00Z') }, hasHandbookAccess: false }
    expect(isMilestoneOverridden('joined', input)).toBe(false)
  })

  it('an override cannot un-do a milestone the database says is done', () => {
    // One-directional by construction: there is no value an editor can store
    // that makes a satisfied derived milestone read as not done.
    expect(isMilestoneDone('handbook_access', { milestones: {}, hasHandbookAccess: true })).toBe(true)
  })

  it('reports complete only when every milestone is done', () => {
    const all: Record<string, string> = {}
    for (const k of MANUAL_MILESTONE_KEYS) all[k] = at('2026-08-01T10:00:00Z')
    const p = calculateProgress({ milestones: all, hasHandbookAccess: true })
    expect(p.done).toBe(MILESTONES.length)
    expect(p.percent).toBe(100)
    expect(p.complete).toBe(true)
    expect(p.nextKey).toBeNull()
  })

  it('is not complete when only the manual steps are done', () => {
    const all: Record<string, string> = {}
    for (const k of MANUAL_MILESTONE_KEYS) all[k] = at('2026-08-01T10:00:00Z')
    expect(calculateProgress({ milestones: all, hasHandbookAccess: false }).complete).toBe(false)
  })

  it('names the FIRST gap, not the one after the last completed step', () => {
    // People finish these out of order; "next" must be the earliest thing
    // outstanding or it will point past a skipped step forever.
    const p = calculateProgress({ milestones: { first_contract: at('2026-08-01T10:00:00Z') }, hasHandbookAccess: false })
    expect(p.nextKey).toBe('joined')
    expect(p.done).toBe(1)
  })
})

describe('daysSinceLastMovement', () => {
  it('measures from the most recent completion', () => {
    expect(daysSinceLastMovement({ joined: at('2026-08-10T00:00:00Z') }, '2026-07-01', NOW)).toBe(3)
  })

  it('falls back to the start date when nothing has happened', () => {
    // Otherwise someone who has done nothing looks freshly active.
    expect(daysSinceLastMovement({}, '2026-08-03T00:00:00Z', NOW)).toBe(10)
  })

  it('never reports negative days for a future start date', () => {
    expect(daysSinceLastMovement({}, '2026-09-01', NOW)).toBe(0)
  })
})

describe('isStalled', () => {
  const started = '2026-07-01T00:00:00Z'

  it('flags someone who has not moved in a fortnight', () => {
    expect(isStalled({ milestones: {}, hasHandbookAccess: false }, started, NOW)).toBe(true)
  })

  it('does not flag recent movement', () => {
    expect(isStalled({ milestones: { joined: at('2026-08-12T00:00:00Z') }, hasHandbookAccess: false }, started, NOW)).toBe(false)
  })

  it('NEVER flags someone who has finished, however long ago', () => {
    const all: Record<string, string> = {}
    for (const k of MANUAL_MILESTONE_KEYS) all[k] = at('2026-01-01T00:00:00Z')
    expect(isStalled({ milestones: all, hasHandbookAccess: true }, started, NOW)).toBe(false)
  })

  it('uses a generous threshold — chasing people is not the job', () => {
    expect(STALLED_AFTER_DAYS).toBeGreaterThanOrEqual(10)
  })
})

describe('getMilestone', () => {
  it('finds a real one and refuses an invented one', () => {
    expect(getMilestone('tc_call')?.label).toBe('TC onboarding call booked')
    expect(getMilestone('nope')).toBeUndefined()
  })
})

describe('todayInBrokerageTz', () => {
  it('uses the brokerage day, not the UTC day', () => {
    // 2026-08-14T03:26Z is still the evening of the 13th in Anytown. The old
    // CURRENT_DATE default recorded this as the 14th.
    expect(todayInBrokerageTz(new Date('2026-08-14T03:26:00Z'))).toBe('2026-08-13')
  })

  it('agrees with UTC during the working day', () => {
    expect(todayInBrokerageTz(new Date('2026-08-13T15:00:00Z'))).toBe('2026-08-13')
  })

  it('rolls over at local midnight, not UTC midnight', () => {
    expect(todayInBrokerageTz(new Date('2026-08-14T04:30:00Z'))).toBe('2026-08-14')
  })

  it('returns a plain YYYY-MM-DD a date column will accept', () => {
    expect(todayInBrokerageTz(new Date('2026-01-05T12:00:00Z'))).toMatch(/^\d{4}-\d{2}-\d{2}$/)
  })
})
