import { NextRequest, NextResponse } from 'next/server'
import { neon } from '@neondatabase/serverless'
import { randomBytes } from 'crypto'
import { getAdminContext, requireRole, RoleError } from '@/lib/permissions'
import { parseSubscriberList } from '@/lib/upload-input'

// Admin: the subscriber "manifest" the team emails from. owner/team_leader only.
export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    requireRole(await getAdminContext(), 'owner', 'team_leader')
  } catch (e) {
    if (e instanceof RoleError) return NextResponse.json({ error: e.message }, { status: e.status })
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const sql = neon(process.env.DATABASE_URL!)
  const rows = await sql`
    SELECT id, email, name, categories, active, created_at, source, consent_at, consent_basis
    FROM training_subscribers WHERE active = true ORDER BY created_at DESC
  `
  return NextResponse.json({ subscribers: rows })
}

/**
 * Add subscribers by pasting a list.
 *
 * Until now this route was GET-only: the only way into training_subscribers was
 * an agent subscribing on the public page. That is why the list sat at zero and
 * the "send update" button had nobody to send to, which matters more to a thin
 * room than any particular event date.
 */
export async function POST(request: NextRequest) {
  let ctx
  try {
    ctx = requireRole(await getAdminContext(), 'owner', 'team_leader')
  } catch (e) {
    if (e instanceof RoleError) return NextResponse.json({ error: e.message }, { status: e.status })
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const b = await request.json().catch(() => null)
  if (!b) return NextResponse.json({ error: 'Invalid request' }, { status: 400 })

  const { valid, invalid } = parseSubscriberList(String(b.list || ''))
  const categories: string[] = Array.isArray(b.categories) ? b.categories.map(String) : []

  // Why is this person on the list? Recorded, never inferred — the same rule
  // this repo already applies to phone consent. Without it, nobody can answer
  // that question in six months, and "we think the office manager added them" is not an
  // answer when someone complains.
  const consentBasis = String(b.consentBasis || '').trim()
  if (consentBasis.length < 4) {
    return NextResponse.json(
      { error: 'Say how these people agreed to hear from Example Investor Team. It is stored with each address.' },
      { status: 400 },
    )
  }

  if (valid.length === 0) {
    return NextResponse.json(
      { error: invalid.length ? 'No usable email addresses in that list.' : 'Paste some email addresses first.', invalid },
      { status: 400 },
    )
  }

  const sql = neon(process.env.DATABASE_URL!)
  let added = 0
  let reactivated = 0
  const alreadyThere: string[] = []

  for (const s of valid) {
    // A previously unsubscribed address is reactivated rather than duplicated,
    // but it is still recorded as an admin add so a complaint can be traced.
    const existing = await sql`SELECT id, active FROM training_subscribers WHERE email = ${s.email}`
    if (existing.length > 0) {
      if (existing[0].active) {
        alreadyThere.push(s.email)
      } else {
        await sql`
          UPDATE training_subscribers
          SET active = true, added_by = ${ctx.userId}, source = 'admin',
              consent_at = now(), consent_basis = ${consentBasis}
          WHERE id = ${existing[0].id}
        `
        reactivated++
      }
      continue
    }
    await sql`
      INSERT INTO training_subscribers (email, name, categories, unsubscribe_token, active,
                                        added_by, source, consent_at, consent_basis)
      VALUES (${s.email}, ${s.name}, ${JSON.stringify(categories)}::jsonb,
              ${randomBytes(24).toString('hex')}, true, ${ctx.userId}, 'admin',
              now(), ${consentBasis})
    `
    added++
  }

  return NextResponse.json({
    success: true,
    added,
    reactivated,
    alreadyThere,
    invalid,
    total: valid.length,
  })
}

/** Unsubscribe someone by hand. Deactivates, never deletes. */
export async function DELETE(request: NextRequest) {
  try {
    requireRole(await getAdminContext(), 'owner', 'team_leader')
  } catch (e) {
    if (e instanceof RoleError) return NextResponse.json({ error: e.message }, { status: e.status })
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const id = Number(new URL(request.url).searchParams.get('id'))
  if (!Number.isInteger(id) || id <= 0) {
    return NextResponse.json({ error: 'Which subscriber?' }, { status: 400 })
  }
  const sql = neon(process.env.DATABASE_URL!)
  await sql`UPDATE training_subscribers SET active = false WHERE id = ${id}`
  return NextResponse.json({ success: true })
}
