import { neon } from '@neondatabase/serverless'
import { phoneConsentLabel } from '../phone-consent'

// ─── Types ───────────────────────────────────────────────────────────────────

export interface LeadFilters {
  q?: string
  status?: string[]
  formType?: string[]
  path?: string
  team?: string
  page?: number
  perPage?: number
  /** Team scoping for team_leader role — filters leads to this team */
  scopedTeam?: string
}

export interface Lead {
  id: number
  first_name: string | null
  last_name: string | null
  email: string | null
  phone: string | null
  form_type: string
  source_route: string | null
  source_section: string | null
  selected_path: string | null
  selected_team: string | null
  campaign_id: string | null
  partner_ref: string | null
  current_status: string
  assigned_to: string | null
  assigned_team: string | null
  metadata: Record<string, unknown>
  /**
   * TCPA. Null on any row captured before consent was collected, and on any row
   * where the visitor declined — both mean call-only. `consent_phone` is the
   * exact number the tick was given for, so a row whose phone was corrected
   * afterwards no longer matches and correctly reads as unconsented.
   */
  consent_at: string | null
  consent_phone: string | null
  created_at: string
  updated_at: string
}

export interface LeadNote {
  id: number
  lead_id: number
  author_id: string
  author_name?: string
  content: string
  is_internal: boolean
  created_at: string
}

export interface StatusHistoryEntry {
  id: number
  lead_id: number
  old_status: string | null
  new_status: string
  changed_by: string | null
  changed_by_name?: string
  changed_at: string
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function getSql() {
  const url = process.env.DATABASE_URL
  if (!url) throw new Error('DATABASE_URL not configured')
  return neon(url)
}

// ─── Queries ─────────────────────────────────────────────────────────────────

export async function getLeads(filters: LeadFilters = {}): Promise<{ leads: Lead[]; total: number }> {
  const sql = getSql()
  const { q, status, formType, path, team, scopedTeam, page = 1, perPage = 25 } = filters
  const offset = (page - 1) * perPage
  const conditions: string[] = []
  const params: unknown[] = []
  let paramIndex = 1

  // Team scoping for team_leader role
  if (scopedTeam) {
    conditions.push(`(selected_team = $${paramIndex} OR assigned_team = $${paramIndex})`)
    params.push(scopedTeam)
    paramIndex++
  }

  if (q) {
    conditions.push(`(first_name ILIKE $${paramIndex} OR last_name ILIKE $${paramIndex} OR email ILIKE $${paramIndex} OR phone ILIKE $${paramIndex})`)
    params.push(`%${q}%`)
    paramIndex++
  }

  if (status && status.length > 0) {
    const placeholders = status.map((_, i) => `$${paramIndex + i}`).join(', ')
    conditions.push(`current_status IN (${placeholders})`)
    params.push(...status)
    paramIndex += status.length
  }

  if (formType && formType.length > 0) {
    const placeholders = formType.map((_, i) => `$${paramIndex + i}`).join(', ')
    conditions.push(`form_type IN (${placeholders})`)
    params.push(...formType)
    paramIndex += formType.length
  }

  if (path) {
    conditions.push(`selected_path = $${paramIndex}`)
    params.push(path)
    paramIndex++
  }

  if (team) {
    conditions.push(`(selected_team = $${paramIndex} OR assigned_team = $${paramIndex})`)
    params.push(team)
    paramIndex++
  }

  const where = conditions.length > 0 ? `WHERE ${conditions.join(' AND ')}` : ''

  // Use raw SQL with parameterized queries
  const countQuery = `SELECT COUNT(*) as total FROM leads ${where}`
  const dataQuery = `SELECT * FROM leads ${where} ORDER BY created_at DESC LIMIT $${paramIndex} OFFSET $${paramIndex + 1}`

  const [countResult, dataResult] = await Promise.all([
    sql.query(countQuery, params),
    sql.query(dataQuery, [...params, perPage, offset]),
  ])

  return {
    leads: dataResult as Lead[],
    total: Number(countResult[0]?.total ?? 0),
  }
}

export interface LeadsSummary {
  total: number
  newThisWeek: number
  /** Count of leads per current_status */
  byStatus: Record<string, number>
  /** Count of leads per form_type */
  byFormType: Record<string, number>
  /** Count of leads per selected_path */
  byPath: Record<string, number>
  /** Won / (Won + Lost) as a percentage, rounded; 0 when no closed leads */
  conversionRate: number
  unassigned: number
}

/**
 * Aggregate counts across the whole leads table (respects team_leader scoping).
 * Used to render the list-page stat row and filter count badges.
 */
export async function getLeadsSummary(
  filters: { scopedTeam?: string } = {},
): Promise<LeadsSummary> {
  const sql = getSql()
  const { scopedTeam } = filters

  const where = scopedTeam
    ? `WHERE (selected_team = $1 OR assigned_team = $1)`
    : ''
  const params: unknown[] = scopedTeam ? [scopedTeam] : []

  const [statusRows, formTypeRows, pathRows, totalsRow] = await Promise.all([
    sql.query(`SELECT current_status AS k, COUNT(*) AS c FROM leads ${where} GROUP BY current_status`, params),
    sql.query(`SELECT form_type AS k, COUNT(*) AS c FROM leads ${where} GROUP BY form_type`, params),
    sql.query(`SELECT selected_path AS k, COUNT(*) AS c FROM leads ${where} GROUP BY selected_path`, params),
    sql.query(
      `SELECT
         COUNT(*) AS total,
         COUNT(*) FILTER (WHERE created_at >= NOW() - INTERVAL '7 days') AS new_this_week,
         COUNT(*) FILTER (WHERE assigned_team IS NULL) AS unassigned
       FROM leads ${where}`,
      params,
    ),
  ])

  const byStatus: Record<string, number> = {}
  for (const r of statusRows as Array<{ k: string | null; c: string }>) {
    if (r.k) byStatus[r.k] = Number(r.c)
  }
  const byFormType: Record<string, number> = {}
  for (const r of formTypeRows as Array<{ k: string | null; c: string }>) {
    if (r.k) byFormType[r.k] = Number(r.c)
  }
  const byPath: Record<string, number> = {}
  for (const r of pathRows as Array<{ k: string | null; c: string }>) {
    if (r.k) byPath[r.k] = Number(r.c)
  }

  const totals = (totalsRow as Array<{ total: string; new_this_week: string; unassigned: string }>)[0]
  const won = byStatus['won'] ?? 0
  const lost = byStatus['lost'] ?? 0
  const closed = won + lost
  const conversionRate = closed > 0 ? Math.round((won / closed) * 100) : 0

  return {
    total: Number(totals?.total ?? 0),
    newThisWeek: Number(totals?.new_this_week ?? 0),
    byStatus,
    byFormType,
    byPath,
    conversionRate,
    unassigned: Number(totals?.unassigned ?? 0),
  }
}

export async function getLeadById(id: number): Promise<Lead | null> {
  const sql = getSql()
  const rows = await sql`SELECT * FROM leads WHERE id = ${id}`
  return (rows[0] as Lead) ?? null
}

export async function getLeadHistory(leadId: number): Promise<StatusHistoryEntry[]> {
  const sql = getSql()
  const rows = await sql`
    SELECT h.*, au.name as changed_by_name
    FROM lead_status_history h
    LEFT JOIN admin_users au ON au.id = h.changed_by
    WHERE h.lead_id = ${leadId}
    ORDER BY h.changed_at DESC
  `
  return rows as StatusHistoryEntry[]
}

export async function getLeadNotes(leadId: number): Promise<LeadNote[]> {
  const sql = getSql()
  const rows = await sql`
    SELECT n.*, au.name as author_name
    FROM lead_notes n
    LEFT JOIN admin_users au ON au.id = n.author_id
    WHERE n.lead_id = ${leadId}
    ORDER BY n.created_at DESC
  `
  return rows as LeadNote[]
}

export async function updateLeadStatus(
  leadId: number,
  newStatus: string,
  changedBy: string,
): Promise<void> {
  const sql = getSql()

  // Get current status
  const lead = await sql`SELECT current_status FROM leads WHERE id = ${leadId}`
  const oldStatus = lead[0]?.current_status ?? null

  // Update lead
  await sql`UPDATE leads SET current_status = ${newStatus}, updated_at = NOW() WHERE id = ${leadId}`

  // Insert history
  await sql`
    INSERT INTO lead_status_history (lead_id, old_status, new_status, changed_by)
    VALUES (${leadId}, ${oldStatus}, ${newStatus}, ${changedBy})
  `

  // Activity log
  await sql`
    INSERT INTO activity_log (user_id, action, entity_type, entity_id, details)
    VALUES (${changedBy}, 'status_changed', 'lead', ${leadId}, ${JSON.stringify({ old_status: oldStatus, new_status: newStatus })}::jsonb)
  `
}

export async function addLeadNote(
  leadId: number,
  authorId: string,
  content: string,
): Promise<LeadNote> {
  const sql = getSql()

  const rows = await sql`
    INSERT INTO lead_notes (lead_id, author_id, content, is_internal)
    VALUES (${leadId}, ${authorId}, ${content}, true)
    RETURNING *
  `

  // Activity log
  await sql`
    INSERT INTO activity_log (user_id, action, entity_type, entity_id)
    VALUES (${authorId}, 'note_added', 'lead', ${leadId})
  `

  return rows[0] as LeadNote
}

export async function assignLead(
  leadId: number,
  teamSlug: string | null,
  assignedTo: string | null,
  changedBy: string,
): Promise<void> {
  const sql = getSql()

  await sql`
    UPDATE leads SET assigned_team = ${teamSlug}, assigned_to = ${assignedTo}, updated_at = NOW()
    WHERE id = ${leadId}
  `

  await sql`
    INSERT INTO activity_log (user_id, action, entity_type, entity_id, details)
    VALUES (${changedBy}, 'lead_assigned', 'lead', ${leadId}, ${JSON.stringify({ assigned_team: teamSlug, assigned_to: assignedTo })}::jsonb)
  `
}

export async function exportLeadsCsv(filters: Omit<LeadFilters, 'page' | 'perPage'>): Promise<string> {
  const { leads } = await getLeads({ ...filters, page: 1, perPage: 10000 })
  return buildLeadsCsv(leads)
}

/**
 * Separate from the query so it can be tested without a database. The export is
 * the one surface that leaves the building: it gets pasted into a dialler, a
 * mail merge, or someone's spreadsheet, where none of the admin screens and
 * none of their warnings come with it.
 */
export function buildLeadsCsv(leads: Lead[]): string {
  const headers = ['ID', 'First Name', 'Last Name', 'Email', 'Phone',
    // Immediately after the number. The two raw columns after it are the
    // evidence; this one is the instruction, and it sits where the reader is
    // already looking.
    'Text permission', 'Text consent given', 'Number consented to',
    'Form Type', 'Source Route', 'Selected Path', 'Selected Team', 'Status', 'Assigned Team', 'Partner Ref', 'Campaign ID', 'Created At']

  const rows = leads.map((lead) => [
    lead.id,
    lead.first_name ?? '',
    lead.last_name ?? '',
    lead.email ?? '',
    lead.phone ?? '',
    phoneConsentLabel(lead, lead.phone),
    lead.consent_at ?? '',
    lead.consent_phone ?? '',
    lead.form_type,
    lead.source_route ?? '',
    lead.selected_path ?? '',
    lead.selected_team ?? '',
    lead.current_status,
    lead.assigned_team ?? '',
    lead.partner_ref ?? '',
    lead.campaign_id ?? '',
    lead.created_at,
  ])

  const csvContent = [
    headers.join(','),
    ...rows.map((row) =>
      row.map((cell) => {
        const str = String(cell)
        return str.includes(',') || str.includes('"') || str.includes('\n')
          ? `"${str.replace(/"/g, '""')}"`
          : str
      }).join(',')
    ),
  ].join('\n')

  return csvContent
}
