import { describe, it, expect } from 'vitest'
import { readFileSync } from 'fs'
import { join } from 'path'

// Gaps found reviewing the day's work. Each of these was a real hole, and each
// is the kind that fails silently, so they are pinned rather than remembered.

const src = (p: string) => readFileSync(join(process.cwd(), 'src', p), 'utf8')

const handbookHub = src('app/(marketing)/handbook/page.tsx')
const handbookPage = src('app/(marketing)/handbook/[slug]/page.tsx')
const uploadsRoute = src('app/api/uploads/[id]/route.ts')
const unsubRoute = src('app/api/unsubscribe/route.ts')
const newsletter = src('app/api/admin/training-newsletter/route.ts')
const robots = src('app/robots.ts')
const adminLayout = src('app/(admin)/layout.tsx')

describe('a session cookie is not authorization', () => {
  // /course/signup is a PUBLIC self-service better-auth registration, so any
  // visitor can mint a session. The middleware cookie check is a first pass.
  // Both surfaces now go through getHandbookAccess(), which distinguishes
  // "signed out" from "signed in but not entitled" — they used to disagree,
  // and the article page answered an expired session with a bare 404. The
  // guarantee is unchanged, so the chain is asserted end to end rather than
  // just moved: both call it, and it is the thing that calls canReadHandbook.
  it('the handbook index checks entitlement server-side', () => {
    expect(handbookHub).toMatch(/getHandbookAccess\(\)/)
  })

  it('the handbook article checks entitlement too, since deep links skip the index', () => {
    expect(handbookPage).toMatch(/getHandbookAccess\(\)/)
  })

  it('and that check is really an entitlement check, not just a session check', () => {
    const access = src('lib/handbook-access.ts')
    expect(access).toMatch(/canReadHandbook\(\)/)
    expect(access).toMatch(/getServerSession\(\)/)
  })

  it('withholds even the page title from an unentitled viewer', () => {
    const meta = handbookPage.slice(
      handbookPage.indexOf('export async function generateMetadata'),
      handbookPage.indexOf('export default'),
    )
    expect(meta).toMatch(/canReadHandbook/)
  })
})

describe('uploaded images inherit the protection of what references them', () => {
  it('derives members-only from referencing articles rather than a stored flag', () => {
    // A stored flag drifts when an article flips public <-> members, and the
    // drift fails open.
    expect(uploadsRoute).toMatch(/visibility = 'members'/)
    expect(uploadsRoute).toMatch(/hero_image|sections::text/)
  })

  it('refuses a members image to an unentitled requester', () => {
    expect(uploadsRoute).toMatch(/membersOnly && !\(await canReadHandbook\(\)\)/)
  })

  it('never lets a members image sit in a shared cache', () => {
    expect(uploadsRoute).toMatch(/private, no-store/)
  })

  it('checks entitlement before the 304 short-circuit', () => {
    // Otherwise a guessed ETag confirms the image exists.
    const gate = uploadsRoute.indexOf('membersOnly = await')
    const notModified = uploadsRoute.indexOf('status: 304')
    expect(gate).toBeGreaterThan(-1)
    expect(notModified).toBeGreaterThan(gate)
  })
})

describe('unsubscribe actually works for training subscribers', () => {
  // Two tables issue unsubscribe tokens. This route only ever checked
  // `contacts`, so a training subscriber clicking their own link was told the
  // token was invalid — the one interaction that must never fail.
  it('resolves training_subscribers as well as contacts', () => {
    expect(unsubRoute).toMatch(/training_subscribers/)
    expect(unsubRoute).toMatch(/getContactByUnsubscribeToken/)
  })

  it('deactivates rather than deletes', () => {
    expect(unsubRoute).toMatch(/SET active = false/)
  })

  it('the newsletter actually includes the link it promises', () => {
    expect(newsletter).toMatch(/unsubscribe_token/)
    expect(newsletter).toMatch(/\/unsubscribe\?token=/)
  })

  it('selects the token it needs to build that link', () => {
    expect(newsletter).toMatch(/SELECT email, name, categories, unsubscribe_token/)
  })
})

describe('crawlers are told to stay out of the private areas', () => {
  // These paths are anchored with "$" as of 2026-08-17: a bare "/team" is a
  // prefix match and was also blocking the public "/teams" pages. Each entry
  // now appears as '<path>$' plus a '<path>/' variant for its subpages.
  // src/app/robots-public-routes.test.ts owns the behavioural check (that no
  // public route is blocked); these assertions just pin the paths as listed.
  it('disallows the handbook', () => {
    expect(robots).toMatch(/'\/handbook\$'/)
    expect(robots).toMatch(/'\/handbook\/'/)
  })

  it('disallows the admin pages, which are top-level and were not covered by /admin/', () => {
    for (const p of ['/leads', '/events', '/articles', '/contacts', '/campaigns']) {
      expect(robots, p).toMatch(new RegExp(`'${p}\\$'`))
      expect(robots, p).toMatch(new RegExp(`'${p}/'`))
    }
  })
})

describe('the things built today are reachable', () => {
  it('Articles is in the admin nav, not only in an email I sent', () => {
    expect(adminLayout).toMatch(/href: '\/articles'/)
  })

  it('the Handbook is in the admin nav', () => {
    expect(adminLayout).toMatch(/href: '\/handbook'/)
  })
})
