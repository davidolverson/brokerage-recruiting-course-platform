/**
 * The Example Investor Team agent onboarding tracker.
 *
 * ⚠️ DESIGNED FROM A BRIEF, NOT FROM A CONVERSATION. The office manager's one stated
 * condition was: "I just want to make sure it's simpler and there's more
 * automation than just moving a checklist from one spot to another." She has
 * not seen this yet. It is a first cut for her to react to, and the milestone
 * list below is the part most likely to be wrong.
 *
 * Two rules follow from that condition, and they are what make this not a
 * relocated checklist:
 *
 *  1. IT TRACKS PEOPLE, NOT TASKS. Her internal checklist is ~50 steps and
 *     stays a Google Sheet. This holds EIGHT milestones, because a progress
 *     view nobody updates is worse than no progress view. Reading her real
 *     checklist showed six steps were "COMMUNICATION: send X", and five of the
 *     six were reference material rather than announcements — those became
 *     handbook pages, so the tracker links to the page instead of reminding
 *     her to send an email.
 *
 *  2. ANYTHING THE SYSTEM CAN ANSWER, THE SYSTEM ANSWERS. A milestone marked
 *     `auto` is never ticked by hand; it is derived from data we already hold.
 *     Today that is handbook access, which is true exactly when an active
 *     agent account exists for that email. Ticking a box to record something
 *     the database already knows is the busywork she was objecting to.
 */

export type MilestoneSource = 'auto' | 'manual'

export interface Milestone {
  key: string
  label: string
  /** What "done" concretely means, so two people tick it for the same reason. */
  definition: string
  source: MilestoneSource
  /** The handbook page that explains this to the agent, if there is one. */
  handbookSlug?: string
}

export const MILESTONES: readonly Milestone[] = [
  {
    key: 'joined',
    label: 'Paperwork in',
    definition: 'Acme application submitted and the ICA is signed.',
    source: 'manual',
  },
  {
    key: 'email_accounts',
    label: 'Email and accounts',
    definition: 'Their brokerage email exists and they can sign in to it.',
    source: 'manual',
    handbookSlug: 'tools-accounts-and-access',
  },
  {
    key: 'details_returned',
    label: 'Details returned',
    definition: 'Employee information form, headshot and bio received.',
    source: 'manual',
    handbookSlug: 'start-here-first-two-weeks',
  },
  {
    key: 'handbook_access',
    label: 'Handbook access',
    definition: 'An active agent account exists for this email address.',
    // Derived, never ticked: see rule 2 above.
    source: 'auto',
    handbookSlug: 'start-here-first-two-weeks',
  },
  {
    key: 'tc_call',
    label: 'TC onboarding call booked',
    definition: 'Booked through the onboarding coordinator scheduling link. The office manager calls this non-negotiable.',
    source: 'manual',
    handbookSlug: 'transaction-coordination',
  },
  {
    key: 'business_setup',
    label: 'Business setup reviewed',
    definition: 'Fees, payment and any LLC question have been walked through.',
    source: 'manual',
    handbookSlug: 'business-101',
  },
  {
    key: 'training_started',
    label: 'Training started',
    definition: 'They have attended at least one training or branch meeting.',
    source: 'manual',
    handbookSlug: 'training-and-your-first-90-days',
  },
  {
    key: 'first_contract',
    label: 'First contract',
    definition: 'First property under contract and handed to transaction coordination.',
    source: 'manual',
    handbookSlug: 'paperwork-and-compliance',
  },
] as const

export const MILESTONE_KEYS: readonly string[] = MILESTONES.map((m) => m.key)

/** Steps an editor ticks by hand in the ordinary course of things. */
export const MANUAL_MILESTONE_KEYS: readonly string[] = MILESTONES.filter(
  (m) => m.source === 'manual',
).map((m) => m.key)

/**
 * Auto milestones an editor may ALSO mark done by hand.
 *
 * ⚠️ This reverses an earlier decision, and the reason matters. The rule used
 * to be "a derived milestone can never be written by hand", so that the
 * tracker could not claim access that does not exist. Correct in principle,
 * and it produced a wall in practice: the office manager reached 3/8 on 2026-08-17 and
 * reported she "couldn't get past page 3". Handbook access ticks itself when
 * the agent ACCEPTS their invite, which is somebody else's action on somebody
 * else's schedule, and until they do the step reads as permanently refused.
 * Her words: "Sometimes tasks are blocked and I'd want to be able to move on."
 *
 * The original intent survives intact, because the override is one-directional:
 *
 *  - The automation still wins whenever it is satisfied. `isMilestoneDone`
 *    reads `hasHandbookAccess` first, so a hand-set value can never be the
 *    reason a satisfied milestone shows as done, and nothing has to be tidied
 *    up later when the invite is finally accepted.
 *  - The override only ever moves a step from not-done to done. It cannot
 *    contradict the database, only stand in for it while the database has
 *    nothing to say.
 *  - The UI shows it as an override rather than as the automation firing, so
 *    "this person actually has an account" and "The office manager vouched for it" stay
 *    distinguishable on screen.
 */
export const OVERRIDABLE_MILESTONE_KEYS: readonly string[] = MILESTONES.filter(
  (m) => m.source === 'auto',
).map((m) => m.key)

/** Every key an editor is allowed to write, by hand or as an override. */
export const WRITABLE_MILESTONE_KEYS: readonly string[] = [
  ...MANUAL_MILESTONE_KEYS,
  ...OVERRIDABLE_MILESTONE_KEYS,
]

export function getMilestone(key: string): Milestone | undefined {
  return MILESTONES.find((m) => m.key === key)
}

/**
 * Stored per agent: milestone key -> ISO timestamp it was completed.
 * Absent means not done. A timestamp rather than `true` so the tracker can
 * answer "how long has this person been stuck" without a second table.
 */
export type MilestoneState = Record<string, string>

/**
 * Only known keys, only manual ones, only real timestamps.
 *
 * The state arrives from the browser and lands in jsonb wholesale, so an
 * unbounded object would otherwise be stored verbatim — the same shape of
 * problem as extraDates on training_events.
 */
export function sanitiseMilestones(value: unknown): MilestoneState {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return {}
  const out: MilestoneState = {}
  for (const [k, v] of Object.entries(value as Record<string, unknown>)) {
    if (!WRITABLE_MILESTONE_KEYS.includes(k)) continue
    if (typeof v !== 'string') continue
    const d = new Date(v)
    if (Number.isNaN(d.getTime())) continue
    out[k] = d.toISOString()
  }
  return out
}

export interface ProgressInput {
  milestones: MilestoneState
  /** True when an active agent account exists for this person's email. */
  hasHandbookAccess: boolean
}

export interface Progress {
  done: number
  total: number
  percent: number
  complete: boolean
  nextKey: string | null
  nextLabel: string | null
}

/** Is a given milestone done, accounting for the derived ones? */
export function isMilestoneDone(key: string, input: ProgressInput): boolean {
  const m = getMilestone(key)
  if (!m) return false
  if (m.source === 'auto') {
    // Only one auto milestone today. Adding another without teaching this
    // function about it would silently read as never-done, so it is explicit.
    const derived = key === 'handbook_access' ? input.hasHandbookAccess : false
    // The database is asked FIRST and its answer is never overwritten. The
    // stored value can only stand in while the derived answer is still no.
    return derived || isMilestoneOverridden(key, input)
  }
  return typeof input.milestones[key] === 'string'
}

/**
 * Was this step marked done by hand while the automation still says no?
 *
 * Only ever true for an overridable auto milestone, so the screen can say
 * "marked done by you" rather than implying the account exists. Returns false
 * once the derived answer catches up, because at that point the automation is
 * the reason it is done and the stored value is redundant.
 */
export function isMilestoneOverridden(key: string, input: ProgressInput): boolean {
  const m = getMilestone(key)
  if (!m || m.source !== 'auto') return false
  if (!OVERRIDABLE_MILESTONE_KEYS.includes(key)) return false
  const derived = key === 'handbook_access' ? input.hasHandbookAccess : false
  if (derived) return false
  return typeof input.milestones[key] === 'string'
}

export function calculateProgress(input: ProgressInput): Progress {
  const total = MILESTONES.length
  let done = 0
  let nextKey: string | null = null
  let nextLabel: string | null = null

  for (const m of MILESTONES) {
    if (isMilestoneDone(m.key, input)) {
      done++
    } else if (nextKey === null) {
      // "Next" is the first incomplete milestone in order, which is the thing
      // to chase. It is not "the last one they finished plus one" — people
      // complete these out of order all the time.
      nextKey = m.key
      nextLabel = m.label
    }
  }

  return {
    done,
    total,
    percent: total === 0 ? 0 : Math.round((done / total) * 100),
    complete: done === total,
    nextKey,
    nextLabel,
  }
}

/**
 * Days since anything last moved, for the "who is stuck" view.
 *
 * Falls back to the start date, so someone who has done nothing at all still
 * reports a real age instead of looking freshly active.
 */
export function daysSinceLastMovement(
  milestones: MilestoneState,
  startedAt: string | Date,
  now: Date,
): number {
  const stamps = Object.values(milestones)
    .map((v) => new Date(v).getTime())
    .filter((t) => !Number.isNaN(t))
  const start = new Date(startedAt).getTime()
  const latest = stamps.length ? Math.max(...stamps, start) : start
  if (Number.isNaN(latest)) return 0
  return Math.max(0, Math.floor((now.getTime() - latest) / 86_400_000))
}

/** Nudge threshold for the stalled list. Deliberately generous. */
export const STALLED_AFTER_DAYS = 14

export function isStalled(
  input: ProgressInput,
  startedAt: string | Date,
  now: Date,
): boolean {
  if (calculateProgress(input).complete) return false
  return daysSinceLastMovement(input.milestones, startedAt, now) >= STALLED_AFTER_DAYS
}

/**
 * Today's date in the brokerage's own timezone.
 *
 * The column defaulted to CURRENT_DATE, which Postgres evaluates in UTC. An
 * agent added at 11:20 PM Eastern was recorded as starting TOMORROW — measured
 * on 2026-08-13, the server said 2026-08-14. Everyone using this is in
 * Anytown, and "started" means the day it was for them, not for the database.
 * It also feeds daysSinceLastMovement, so the drift is not only cosmetic.
 */
export const BROKERAGE_TIMEZONE = 'America/New_York'

export function todayInBrokerageTz(now: Date = new Date()): string {
  // en-CA renders ISO-ish YYYY-MM-DD, which is what a date column wants.
  return new Intl.DateTimeFormat('en-CA', {
    timeZone: BROKERAGE_TIMEZONE,
    year: 'numeric', month: '2-digit', day: '2-digit',
  }).format(now)
}
