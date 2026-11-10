import { NextRequest, NextResponse } from 'next/server'
import { neon } from '@neondatabase/serverless'
import { getContactByUnsubscribeToken, unsubscribeContact } from '@/lib/db/contacts'

export const dynamic = 'force-dynamic'

// GET looks up the recipient so the confirm page can show "Unsubscribe
// you@example.com?" before the user commits. POST performs the unsubscribe.
// Both are public/no-auth — the token itself is the credential.
//
// Two separate lists issue tokens: `contacts` and `training_subscribers`. This
// route only ever checked contacts, so a training subscriber clicking their own
// unsubscribe link was told the token was invalid — the one interaction that
// must never fail. Both are resolved here now.

async function findTrainingSubscriber(token: string) {
  if (!process.env.DATABASE_URL) return null
  try {
    const sql = neon(process.env.DATABASE_URL)
    const rows = await sql`
      SELECT email, active FROM training_subscribers WHERE unsubscribe_token = ${token}
    `
    if (rows.length === 0) return null
    return { email: String(rows[0].email), unsubscribed: !rows[0].active }
  } catch (err) {
    console.error('[UNSUBSCRIBE] training lookup failed:', err)
    return null
  }
}

async function unsubscribeTrainingSubscriber(token: string): Promise<boolean> {
  if (!process.env.DATABASE_URL) return false
  try {
    const sql = neon(process.env.DATABASE_URL)
    const rows = await sql`
      UPDATE training_subscribers SET active = false
      WHERE unsubscribe_token = ${token}
      RETURNING id
    `
    return rows.length > 0
  } catch (err) {
    console.error('[UNSUBSCRIBE] training update failed:', err)
    return false
  }
}

export async function GET(request: NextRequest) {
  const token = new URL(request.url).searchParams.get('token') || ''
  if (!token) return NextResponse.json({ error: 'Missing token' }, { status: 400 })

  const contact = await getContactByUnsubscribeToken(token)
  if (contact) {
    return NextResponse.json({ email: contact.email, unsubscribed: contact.unsubscribed })
  }

  const sub = await findTrainingSubscriber(token)
  if (sub) return NextResponse.json(sub)

  return NextResponse.json({ error: 'Not found' }, { status: 404 })
}

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null)
  const token = body?.token ? String(body.token) : ''
  if (!token) return NextResponse.json({ error: 'Missing token' }, { status: 400 })

  if (await unsubscribeContact(token)) return NextResponse.json({ success: true })
  if (await unsubscribeTrainingSubscriber(token)) return NextResponse.json({ success: true })

  return NextResponse.json({ error: 'Not found' }, { status: 404 })
}
