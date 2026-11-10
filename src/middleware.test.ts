import { describe, it, expect } from 'vitest'
import { readdirSync, existsSync } from 'fs'
import { join } from 'path'
import { ADMIN_ROUTES, MEMBER_ROUTES, config } from './middleware'
import { PUBLIC_ADMIN_ROUTES as SHARED_PUBLIC } from './lib/admin-routes'

// The test used to keep its own copy of this list, which is exactly the drift
// it exists to catch. Strip the leading slash for the directory-name compare.
const PUBLIC_ADMIN_ROUTES = SHARED_PUBLIC.map((r) => r.replace(/^\//, ''))

// The gap this guards against: /contacts, /campaigns and /course-admin were
// admin pages that answered 200 to a signed-out visitor for months, because the
// protected-path list and config.matcher were maintained by hand and neither
// was checked against the pages that actually exist. Next.js needs the matcher
// to be a literal, so the duplication cannot be removed — but it can be asserted.

const ADMIN_DIR = join(process.cwd(), 'src', 'app', '(admin)')

// Pages under (admin) that must stay reachable signed out, otherwise nobody
// could ever sign in or accept an invite.

function adminPageDirs(): string[] {
  return readdirSync(ADMIN_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name)
    .filter((name) => !name.startsWith('_') && !name.startsWith('('))
    .filter((name) => existsSync(join(ADMIN_DIR, name, 'page.tsx')))
}

describe('admin route protection', () => {
  it('has an (admin) directory to inspect', () => {
    expect(adminPageDirs().length).toBeGreaterThan(5)
  })

  it('protects every non-public page that exists under (admin)', () => {
    const shouldProtect = adminPageDirs()
      .filter((name) => !PUBLIC_ADMIN_ROUTES.includes(name))
      .map((name) => `/${name}`)
      .sort()

    expect([...ADMIN_ROUTES].sort()).toEqual(shouldProtect)
  })

  it('never protects a page needed to sign in', () => {
    for (const pub of PUBLIC_ADMIN_ROUTES) {
      expect(ADMIN_ROUTES).not.toContain(`/${pub}`)
      expect(config.matcher).not.toContain(`/${pub}/:path*`)
    }
  })

  it('lists every protected route in config.matcher, or middleware never runs', () => {
    for (const route of ADMIN_ROUTES) {
      expect(config.matcher).toContain(`${route}/:path*`)
    }
  })

  it('lists every member route in config.matcher too', () => {
    for (const route of MEMBER_ROUTES) {
      expect(config.matcher).toContain(`${route}/:path*`)
    }
  })

  it('keeps member routes out of ADMIN_ROUTES, which is asserted against disk', () => {
    for (const route of MEMBER_ROUTES) {
      expect(ADMIN_ROUTES).not.toContain(route)
    }
  })

  it('has no matcher entry that is not a real protected route', () => {
    const known = new Set<string>([
      ...ADMIN_ROUTES.map((r) => `${r}/:path*`),
      ...MEMBER_ROUTES.map((r) => `${r}/:path*`), // signed-in, not staff
      '/course/:path*', // course area, guarded separately in the middleware body
    ])
    for (const entry of config.matcher) {
      expect(known.has(entry), `matcher entry "${entry}" matches no admin route`).toBe(true)
    }
  })
})
