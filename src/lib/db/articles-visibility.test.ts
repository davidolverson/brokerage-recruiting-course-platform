import { describe, it, expect } from 'vitest'
import { readFileSync } from 'fs'
import { join } from 'path'
import { MEMBER_ROUTES, config } from '../../middleware'

// The handbook holds the fee schedule, LLC information and affiliated business
// disclosures, and it lives in the SAME table as the public education articles.
// One missing predicate publishes all of it to an indexed page. These are
// source-level assertions because the read path cannot be exercised without a
// live database, and "we'd notice" is not a control.

const src = (p: string) => readFileSync(join(process.cwd(), 'src', p), 'utf8')

const articlesDb = src('lib/db/articles.ts')
const sitemap = src('app/sitemap.ts')
const educationHub = src('app/(marketing)/education/page.tsx')
const educationPage = src('app/(marketing)/education/[slug]/page.tsx')
const handbookHub = src('app/(marketing)/handbook/page.tsx')
const handbookPage = src('app/(marketing)/handbook/[slug]/page.tsx')

/** The body of a named exported async function, up to the next export. */
function fnBody(source: string, name: string): string {
  const start = source.indexOf(`export async function ${name}`)
  if (start === -1) throw new Error(`${name} not found`)
  const rest = source.slice(start + 10)
  const end = rest.indexOf('\nexport ')
  return end === -1 ? rest : rest.slice(0, end)
}

describe('public reader cannot serve members content', () => {
  const body = fnBody(articlesDb, 'getPublishedArticles')

  it("filters on visibility = 'public'", () => {
    expect(body).toMatch(/visibility\s*=\s*'public'/)
  })

  it('still filters on published status', () => {
    expect(body).toMatch(/status\s*=\s*'published'/)
  })

  it('never queries members rows', () => {
    expect(body).not.toMatch(/'members'/)
  })
})

describe('handbook reader cannot serve public content', () => {
  const body = fnBody(articlesDb, 'getHandbookPages')

  it("filters on visibility = 'members'", () => {
    expect(body).toMatch(/visibility\s*=\s*'members'/)
  })

  it('does NOT fall back to the static article list', () => {
    // A fallback here would render public education articles inside the members
    // area on any DB hiccup — wrong content, presented as the handbook.
    expect(body).not.toMatch(/STATIC_ARTICLES/)
  })

  it('returns empty rather than throwing when there is no database', () => {
    expect(body).toMatch(/return \[\]/)
  })
})

describe('members pages stay out of public surfaces', () => {
  it('the sitemap is built from the public reader only', () => {
    expect(sitemap).toMatch(/getPublishedArticles/)
    expect(sitemap).not.toMatch(/getHandbookPages/)
  })

  it('the education hub and article page use the public reader only', () => {
    for (const [name, s] of [['hub', educationHub], ['article', educationPage]] as const) {
      expect(s, name).toMatch(/getPublishedArticles/)
      expect(s, name).not.toMatch(/getHandbookPages/)
    }
  })

  it('the handbook pages use the handbook reader only', () => {
    for (const [name, s] of [['hub', handbookHub], ['page', handbookPage]] as const) {
      expect(s, name).toMatch(/getHandbookPages/)
      expect(s, name).not.toMatch(/getPublishedArticles/)
    }
  })

  it('handbook pages are marked noIndex', () => {
    expect(handbookHub).toMatch(/noIndex:\s*true/)
    expect(handbookPage).toMatch(/noIndex:\s*true/)
  })
})

describe('the handbook is behind the session gate', () => {
  it('/handbook is a member route', () => {
    expect(MEMBER_ROUTES).toContain('/handbook')
  })

  it('/handbook is in config.matcher, or the middleware never runs on it', () => {
    expect(config.matcher).toContain('/handbook/:path*')
  })

  it('is not smuggled into the admin route list, which is asserted against disk', () => {
    // /handbook is a (marketing) route. Putting it in ADMIN_ROUTES would break
    // the disk == list == matcher invariant in middleware.test.ts.
    const mw = src('middleware.ts')
    // The array literal only — slicing to MEMBER_ROUTES would swallow its doc
    // comment, which mentions the handbook and would fail for the wrong reason.
    const start = mw.indexOf('export const ADMIN_ROUTES')
    const adminArray = mw.slice(start, mw.indexOf('] as const', start))
    expect(adminArray).not.toMatch(/handbook/)
  })
})
