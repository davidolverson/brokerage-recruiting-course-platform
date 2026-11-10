import { describe, it, expect } from 'vitest'
import { readFileSync, readdirSync } from 'fs'
import { join } from 'path'
import { ADMIN_SURFACE_ROLES, HANDBOOK_ROLES } from '../lib/roles'

// The 'agent' role was added in application code, 18 source-level tests passed,
// and it was still completely broken in production: CHECK constraints on
// admin_users.role and invite_tokens.role enumerate the allowed values, and
// neither knew about it. Inviting an agent raised 23514.
//
// Source tests cannot see the database, so this compares the roles the app
// believes in against the roles the migrations actually permit.

const MIGRATIONS = join(process.cwd(), 'src', 'db', 'migrations')

/** Roles allowed by the LAST migration that redefines the given constraint. */
function allowedByConstraint(constraint: string): string[] {
  const files = readdirSync(MIGRATIONS).filter((f) => f.endsWith('.sql')).sort()
  let latest: string | null = null
  for (const f of files) {
    const sql = readFileSync(join(MIGRATIONS, f), 'utf8')
    const idx = sql.indexOf(constraint)
    if (idx === -1) continue
    const after = sql.slice(idx)
    const m = after.match(/CHECK\s*\(\s*role\s*=\s*ANY\s*\(\s*ARRAY\s*\[([^\]]+)\]/i)
    if (m) latest = m[1]
  }
  if (!latest) throw new Error(`no ARRAY[...] found for ${constraint}`)
  return [...latest.matchAll(/'([a-z_]+)'/g)].map((m) => m[1])
}

const appRoles = [...new Set([...ADMIN_SURFACE_ROLES, ...HANDBOOK_ROLES, 'broker'])].sort()

describe('the database permits every role the application uses', () => {
  it('admin_users allows all of them', () => {
    const allowed = allowedByConstraint('admin_users_role_check').sort()
    for (const r of appRoles) {
      expect(allowed, `admin_users_role_check is missing '${r}'`).toContain(r)
    }
  })

  it('invite_tokens allows every invitable role', () => {
    // Everything except owner, which is never invitable.
    const invitable = appRoles.filter((r) => r !== 'owner')
    const allowed = allowedByConstraint('invite_tokens_role_check').sort()
    for (const r of invitable) {
      expect(allowed, `invite_tokens_role_check is missing '${r}'`).toContain(r)
    }
  })

  it('an invite can never mint an owner', () => {
    // The security property the constraint exists to hold. Verified live too:
    // inserting an owner invite is refused with 23514.
    expect(allowedByConstraint('invite_tokens_role_check')).not.toContain('owner')
  })

  it('the constraints grant nothing the application does not know about', () => {
    // A role permitted by the DB but absent from lib/roles would be a role
    // nothing in the app checks — it would fall through every allowlist.
    for (const r of allowedByConstraint('admin_users_role_check')) {
      expect(appRoles, `the DB allows '${r}' but lib/roles does not define it`).toContain(r)
    }
  })
})
