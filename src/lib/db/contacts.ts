import { neon } from '@neondatabase/serverless'
import { buildSegmentQuery, type SegmentFilter } from '@/lib/segment-filter'

export interface Contact {
  id: number
  email: string
  first_name: string | null
  last_name: string | null
  phone: string | null
  /**
   * TCPA. Carried across from the lead that supplied the number — see
   * upsertContact. Null means call-only, which is the correct reading for every
   * contact that predates consent and for every CSV import, since a bulk import
   * is not consent.
   *
   * Never read `consent_at` alone. Consent attaches to the NUMBER, so use
   * isConsentedFor(contact, contact.phone) from @/lib/phone-consent — a contact
   * whose phone was later replaced by a merge must stop reading as consented.
   */
  consent_at: string | null
  consent_phone: string | null
  sources: string[]
  team_slug: string | null
  tags: string[]
  unsubscribed: boolean
  unsubscribed_at: string | null
  unsubscribe_token: string
  created_at: string
  updated_at: string
}

export interface ContactFilters {
  q?: string
  source?: string
  tag?: string
  teamSlug?: string
  page?: number
  perPage?: number
}

function getSql() {
  const url = process.env.DATABASE_URL
  if (!url) throw new Error('DATABASE_URL not configured')
  return neon(url)
}

// Builds a dynamic WHERE clause for the optional filters and executes via
// the callable (non-tagged-template) form of `neon()`, since this driver
// does not support composing nested `sql\`...\`` fragments.
function buildContactListWhere(filters: ContactFilters): { whereSql: string; params: unknown[] } {
  const conditions: string[] = []
  const params: unknown[] = []
  if (filters.q) {
    params.push(`%${filters.q}%`)
    conditions.push(`(email ILIKE $${params.length} OR first_name ILIKE $${params.length} OR last_name ILIKE $${params.length})`)
  }
  if (filters.source) {
    params.push([filters.source])
    conditions.push(`sources ?| $${params.length}::text[]`)
  }
  if (filters.tag) {
    params.push([filters.tag])
    conditions.push(`tags ?| $${params.length}::text[]`)
  }
  if (filters.teamSlug) {
    params.push(filters.teamSlug)
    conditions.push(`team_slug = $${params.length}`)
  }
  return { whereSql: conditions.length ? `WHERE ${conditions.join(' AND ')}` : '', params }
}

export async function getContacts(filters: ContactFilters = {}): Promise<{ contacts: Contact[]; total: number }> {
  const sql = getSql()
  const { page = 1, perPage = 25 } = filters
  const offset = (page - 1) * perPage
  const { whereSql, params } = buildContactListWhere(filters)

  const rows = await sql.query(
    `SELECT * FROM contacts ${whereSql} ORDER BY created_at DESC LIMIT $${params.length + 1} OFFSET $${params.length + 2}`,
    [...params, perPage, offset]
  )
  const countRows = await sql.query(`SELECT COUNT(*)::int AS total FROM contacts ${whereSql}`, params)

  return {
    contacts: rows as unknown as Contact[],
    total: (countRows[0] as { total: number } | undefined)?.total ?? 0,
  }
}

export async function countSegment(filter: SegmentFilter): Promise<number> {
  const sql = getSql()
  const { whereSql, params } = buildSegmentQuery(filter)
  const rows = await sql.query(`SELECT COUNT(*)::int AS total FROM contacts WHERE ${whereSql}`, params)
  return (rows[0] as { total: number } | undefined)?.total ?? 0
}

export async function getSegmentContactIds(filter: SegmentFilter): Promise<number[]> {
  const sql = getSql()
  const { whereSql, params } = buildSegmentQuery(filter)
  const rows = await sql.query(`SELECT id FROM contacts WHERE ${whereSql}`, params)
  return (rows as { id: number }[]).map((r) => r.id)
}

export async function getContactByUnsubscribeToken(token: string): Promise<Contact | null> {
  const sql = getSql()
  const rows = await sql`SELECT * FROM contacts WHERE unsubscribe_token = ${token}`
  return (rows[0] as unknown as Contact) ?? null
}

export async function unsubscribeContact(token: string): Promise<boolean> {
  const sql = getSql()
  const rows = await sql`
    UPDATE contacts SET unsubscribed = true, unsubscribed_at = now()
    WHERE unsubscribe_token = ${token}
    RETURNING id
  `
  return rows.length > 0
}
