import { describe, it, expect } from 'vitest'
import { readdir } from 'node:fs/promises'
import path from 'node:path'
import robots from './robots'

// Regression net for 2026-08-17: Search Console reported "Blocked by robots.txt"
// against example.com, for pages that were in the sitemap AND returning 200.
//
// Cause: robots.txt Disallow entries are PREFIX matches, not exact matches. The
// admin route group strips "(admin)" from the URL, so the admin team page lives
// at "/team" and was disallowed as a bare "/team" — which also matched the
// public "/teams" hub and all seven "/teams/<slug>" profile pages. Eight live
// public URLs were told not to be crawled.
//
// The pre-existing robots test only asserted that the body contained "Allow: /",
// so it passed throughout. This one checks the actual invariant: no public page
// may be disallowed. It discovers routes from the filesystem rather than a
// hand-kept list, so a public route added tomorrow is covered without anyone
// remembering to register it here.

const APP_DIR = path.resolve(__dirname)

// Route groups whose pages are private. Everything else under src/app is public.
const PRIVATE_GROUPS = new Set(['(admin)'])

// Pages that live in a public route group but are gated at runtime, so being
// disallowed is correct. Keep this list short and justified: anything added
// here stops being protected by this test.
//   /handbook — sits in (marketing) but redirects signed-out visitors to a
//   login (see (marketing)/handbook/page.tsx) and carries the fee schedule.
//   It is deliberately absent from the sitemap.
const INTENTIONALLY_BLOCKED = ['/handbook']

function isIntentionallyBlocked(urlPath: string): boolean {
  return INTENTIONALLY_BLOCKED.some(
    (base) => urlPath === base || urlPath.startsWith(`${base}/`)
  )
}

/** Turn an absolute page.tsx path into the URL path Next.js will serve it at. */
function routeForPage(absPageFile: string): string {
  const rel = path.relative(APP_DIR, path.dirname(absPageFile)).split(path.sep).join('/')
  const segments = rel
    .split('/')
    .filter((s) => s.length > 0)
    // Route groups "(name)" and parallel/intercepted routes never appear in the URL.
    .filter((s) => !(s.startsWith('(') && s.endsWith(')')))
    .filter((s) => !s.startsWith('@'))
    // A dynamic segment stands in for any real slug, so use a concrete sample.
    .map((s) => (s.startsWith('[') ? 'sample' : s))
  return `/${segments.join('/')}`
}

async function findPublicRoutes(dir: string, out: string[] = []): Promise<string[]> {
  let entries
  try {
    entries = await readdir(dir, { withFileTypes: true })
  } catch {
    return out
  }
  for (const e of entries) {
    const full = path.join(dir, e.name)
    if (e.isDirectory()) {
      if (PRIVATE_GROUPS.has(e.name)) continue
      if (e.name === 'api' && dir === APP_DIR) continue
      if (e.name === 'node_modules' || e.name.startsWith('.')) continue
      await findPublicRoutes(full, out)
    } else if (e.name === 'page.tsx' || e.name === 'page.ts') {
      out.push(routeForPage(full))
    }
  }
  return out
}

/**
 * Apply robots.txt path matching the way a crawler does: a rule is a prefix
 * match unless it ends in "$", which anchors it to the end of the path.
 */
function matchingRule(urlPath: string, rules: string[]): string | undefined {
  return rules.find((rule) =>
    rule.endsWith('$') ? urlPath === rule.slice(0, -1) : urlPath.startsWith(rule)
  )
}

function wildcardRules(): string[] {
  const result = robots()
  const rules = Array.isArray(result.rules) ? result.rules : [result.rules]
  const star = rules.find((r) => r.userAgent === '*')
  if (!star) throw new Error('robots.ts no longer defines a "*" user-agent rule')
  const disallow = star.disallow
  if (!disallow) return []
  return Array.isArray(disallow) ? disallow : [disallow]
}

describe('robots.txt does not block public pages', () => {
  it('no public route matches a Disallow rule', async () => {
    const routes = await findPublicRoutes(APP_DIR)
    const rules = wildcardRules()

    // Guard against the discovery silently matching nothing: a broken walk
    // would otherwise make this test pass forever.
    expect(
      routes.length,
      'route discovery found no public pages; the walk is broken'
    ).toBeGreaterThanOrEqual(15)

    const blocked = routes
      .filter((route) => !isIntentionallyBlocked(route))
      .map((route) => ({ route, rule: matchingRule(route, rules) }))
      .filter((r) => r.rule !== undefined)

    expect(
      blocked,
      `These public pages are blocked by robots.txt, so Google will refuse to ` +
        `index them:\n` +
        blocked.map((b) => `  ${b.route}  (blocked by "${b.rule}")`).join('\n') +
        `\nAnchor the rule with "$" (plus a "/" variant for its subpaths) so it ` +
        `stops matching public siblings.`
    ).toEqual([])
  })

  it('still blocks the private admin pages it is meant to block', () => {
    const rules = wildcardRules()
    // The exact regression: /team must stay blocked while /teams must not.
    expect(matchingRule('/team', rules)).toBeDefined()
    expect(matchingRule('/teams', rules)).toBeUndefined()
    expect(matchingRule('/teams/example-investor-team', rules)).toBeUndefined()

    for (const adminPath of [
      '/dashboard',
      '/leads',
      '/pipeline',
      '/analytics',
      '/events',
      '/notifications',
      '/settings',
      '/articles',
      '/contacts',
      '/campaigns',
      '/course-admin',
      '/login',
      '/uploads',
    ]) {
      expect(matchingRule(adminPath, rules), `${adminPath} must stay blocked`).toBeDefined()
      expect(
        matchingRule(`${adminPath}/nested`, rules),
        `${adminPath}/nested must stay blocked`
      ).toBeDefined()
    }
  })
})
