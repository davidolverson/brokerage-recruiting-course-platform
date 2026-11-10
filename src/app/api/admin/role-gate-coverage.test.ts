import { describe, it, expect } from 'vitest'
import { readdirSync, readFileSync } from 'fs'
import { join, relative, sep } from 'path'

/**
 * The gap this guards against: several /api/admin routes asked only "is there
 * an admin context?", which is true for ANY active admin_users row. `broker`
 * exists for the DPOR course and `agent` exists for the handbook, and both
 * sailed straight through.
 *
 * Walking the hub as a real agent on 2026-08-13 proved it: /api/admin/leads
 * returned all 44 lead records, and /api/admin/leads/export returned a CSV of
 * every name, email, phone and phone-consent flag. canAccessLead already
 * refused those roles — the per-record gate was right, and the collection
 * routes simply never called it.
 *
 * "It checks a session" is not a role gate. Assert the role gate.
 */

const ADMIN_API = join(process.cwd(), 'src', 'app', 'api', 'admin')

/**
 * Any of these counts as deciding WHICH roles may proceed.
 *
 * canAccessLead / canMutateLead are per-record rather than per-route, but they
 * are a real role decision: both return false for agent and broker, verified
 * live against those three routes (403 on read AND on the status write).
 */
const ROLE_GATE = /requireRole\(|requireCrmAccess\(|canUseTeamScreen\(|canReadHandbook\(|role !== 'owner'|isAdminSurfaceRole\(|canAccessLead\(|canMutateLead\(/

/**
 * Routes that legitimately have no role gate. Each needs a reason that is
 * about the route's purpose, not about it being inconvenient to fix.
 */
const NO_GATE_REQUIRED: Record<string, string> = {
  'setup/route.ts': 'Bootstraps the very first owner. Runs before any role exists.',
  'accept-invite/route.ts': 'The invite token IS the authorization; no session exists yet.',
  'check-owner/route.ts': 'Answers "has setup run", pre-auth by design.',
  'check-rate-limit/route.ts': 'Called by the login form before anyone is signed in.',
  'me/route.ts': 'Returns the caller their own identity and nothing about anyone else.',
  'revoke-session/route.ts': 'Deletes only the caller\'s own session; any signed-in role may sign itself out.',
  'notifications/route.ts': 'Reads and writes only the caller\'s own notification preferences.',
}

function routeFiles(dir: string): string[] {
  const out: string[] = []
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, e.name)
    if (e.isDirectory()) out.push(...routeFiles(p))
    else if (e.name === 'route.ts') out.push(p)
  }
  return out
}

const key = (f: string) => relative(ADMIN_API, f).split(sep).join('/')

describe('every admin API route decides which roles may use it', () => {
  const files = routeFiles(ADMIN_API)

  it('finds the admin routes at all', () => {
    // Without this the suite passes by scanning nothing.
    expect(files.length).toBeGreaterThan(25)
  })

  it('no route settles for "there is a session"', () => {
    const ungated = files
      .filter((f) => !ROLE_GATE.test(readFileSync(f, 'utf-8')))
      .map(key)
      .filter((k) => !Object.prototype.hasOwnProperty.call(NO_GATE_REQUIRED, k))

    expect(
      ungated,
      'Add a role gate, or list the route in NO_GATE_REQUIRED with the reason it needs none.',
    ).toEqual([])
  })

  it('every exemption still exists and still has no gate', () => {
    // An exemption that no longer applies is a hole nobody is watching.
    const stale = Object.keys(NO_GATE_REQUIRED).filter((k) => {
      const f = files.find((x) => key(x) === k)
      return !f || ROLE_GATE.test(readFileSync(f, 'utf-8'))
    })
    expect(stale, 'these exemptions are stale, delete them').toEqual([])
  })

  it('the lead routes specifically keep a CRM floor', () => {
    // The exact routes that leaked. Named so a future refactor cannot quietly
    // drop the gate and still pass the generic check above.
    for (const k of ['leads/route.ts', 'leads/export/route.ts', 'pipeline/route.ts', 'dashboard/route.ts']) {
      const f = files.find((x) => key(x) === k)
      expect(f, k).toBeTruthy()
      expect(readFileSync(f!, 'utf-8'), k).toMatch(/requireCrmAccess\(/)
    }
  })
})
