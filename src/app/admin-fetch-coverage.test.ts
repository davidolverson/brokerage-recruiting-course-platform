import { describe, it, expect } from 'vitest'
import { readdirSync, readFileSync } from 'fs'
import { join, relative, sep } from 'path'

/**
 * The gap this guards against: every admin screen called its API with a bare
 * `fetch` and a `.catch(() => setX([]))`. The middleware only checks that a
 * session COOKIE EXISTS, never that the session behind it is live, so once a
 * session lapsed (24h after sign-in) the page still rendered and every call
 * under it answered 401 — which those catches turned into "No events yet."
 * and buttons that quietly did nothing. A client reported exactly that on
 * 2026-08-13 and there was no way to tell it apart from a broken page.
 *
 * adminFetch fixes it by navigating to /login before the call site's catch can
 * run. That only holds while screens actually use it, and the tempting thing
 * to write when adding a page is `fetch`. So: assert it.
 */

const ROOT = process.cwd()
const SCAN_DIRS = [
  join(ROOT, 'src', 'app', '(admin)'),
  join(ROOT, 'src', 'components', 'admin'),
]

/**
 * Files allowed to call an admin API with a bare fetch, each for a reason that
 * is about MEANING, not convenience. In all of these a 401 does not mean "your
 * session died", so bouncing to /login?expired=1 would be a lie.
 */
const ALLOWED_BARE_FETCH: Record<string, string> = {
  'login/page.tsx':
    'A 401 here is a wrong password. Redirecting the login page to the login page is a loop.',
  'setup/page.tsx': 'Runs before any session exists, that is the whole point of it.',
  'accept-invite/page.tsx': 'Runs before any session exists, that is the whole point of it.',
  // forgot-password and reset-password are NOT listed: they talk to /api/auth,
  // not /api/admin, so this scan never sees them. Listing them would be a
  // comforting entry that guards nothing.
  'layout.tsx':
    '/api/admin/me answers 401 for a signed-in course-only role. That is "not an admin", not "signed out".',
}

function tsxFiles(dir: string): string[] {
  const out: string[] = []
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, e.name)
    if (e.isDirectory()) out.push(...tsxFiles(p))
    else if (e.name.endsWith('.tsx')) out.push(p)
  }
  return out
}

/** `fetch('/api/admin…` or `fetch(\`/api/admin…`, but never `adminFetch(`. */
const BARE_ADMIN_FETCH = /(?<![A-Za-z0-9_])fetch\(\s*['`]\/api\/admin/

function allowKey(file: string): string {
  const rel = relative(ROOT, file).split(sep).join('/')
  const parts = rel.split('/')
  const tail2 = parts.slice(-2).join('/')
  return allowKeyIn(tail2) ? tail2 : parts[parts.length - 1]
}
function allowKeyIn(k: string): boolean {
  return Object.prototype.hasOwnProperty.call(ALLOWED_BARE_FETCH, k)
}

describe('admin screens call admin APIs through adminFetch', () => {
  const files = SCAN_DIRS.flatMap(tsxFiles)

  it('finds admin screens to check at all', () => {
    // Without this the whole suite passes by scanning nothing.
    expect(files.length).toBeGreaterThan(20)
  })

  it('no admin screen answers a dead session with an empty list', () => {
    const offenders = files
      .filter((f) => BARE_ADMIN_FETCH.test(readFileSync(f, 'utf-8')))
      .map((f) => ({ file: relative(ROOT, f).split(sep).join('/'), key: allowKey(f) }))
      .filter((o) => !allowKeyIn(o.key))
      .map((o) => o.file)

    expect(
      offenders,
      `Use adminFetch from @/lib/admin-fetch instead of fetch, or add the file to ` +
        `ALLOWED_BARE_FETCH with the reason a 401 there is not an expired session.`,
    ).toEqual([])
  })

  it('every allowlisted file still exists and still uses a bare fetch', () => {
    // An allowlist entry that no longer applies is a hole nobody is watching.
    const stale = Object.keys(ALLOWED_BARE_FETCH).filter((key) => {
      const match = files.find((f) => allowKey(f) === key)
      return !match || !BARE_ADMIN_FETCH.test(readFileSync(match, 'utf-8'))
    })
    expect(stale, 'these allowlist entries are stale, delete them').toEqual([])
  })

  it('every allowlist entry carries a reason', () => {
    for (const [file, reason] of Object.entries(ALLOWED_BARE_FETCH)) {
      expect(reason.length, `${file} needs a real reason`).toBeGreaterThan(20)
    }
  })
})
