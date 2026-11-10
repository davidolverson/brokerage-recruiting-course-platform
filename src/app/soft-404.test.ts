import { describe, it, expect } from 'vitest'
import { existsSync, readFileSync } from 'fs'
import { join } from 'path'

// /education/<anything> returned 200 with the 404 page rendered inside it — a
// soft 404, which search engines index. Confirmed by experiment, not guesswork:
// the origin did it too (so not Cloudflare), moving notFound() into
// generateMetadata did NOT fix it, and removing the group-level loading.tsx DID.
//
// Cause: a loading.tsx at a route-group root puts every route in the group
// behind a Suspense boundary. A dynamic route then streams its shell — with 200
// already committed — before notFound() can run.
//
// This is easy to reintroduce innocently, because adding a loading skeleton
// looks like a pure UX improvement.

const APP = join(process.cwd(), 'src', 'app')

describe('no route group containing a dynamic route has a group-level loading.tsx', () => {
  it('(marketing) has no loading.tsx at its root', () => {
    expect(
      existsSync(join(APP, '(marketing)', 'loading.tsx')),
      'A loading.tsx here makes every dynamic route in the group return 200 for ' +
        'URLs that should 404. Put the skeleton on a specific route instead.',
    ).toBe(false)
  })

  it('the dynamic article routes still call notFound for unknown slugs', () => {
    for (const p of ['(marketing)/education/[slug]/page.tsx', '(marketing)/handbook/[slug]/page.tsx']) {
      const src = readFileSync(join(APP, p), 'utf8')
      expect(src, p).toMatch(/notFound\(\)/)
    }
  })

  it('the declared favicon actually exists', () => {
    // layout.tsx advertises /favicon.ico; the file was missing, so every page
    // load fetched a 404.
    const layout = readFileSync(join(APP, 'layout.tsx'), 'utf8')
    if (/favicon\.ico/.test(layout)) {
      expect(
        existsSync(join(process.cwd(), 'public', 'favicon.ico')),
        'layout.tsx declares /favicon.ico but public/favicon.ico is missing',
      ).toBe(true)
    }
  })
})
