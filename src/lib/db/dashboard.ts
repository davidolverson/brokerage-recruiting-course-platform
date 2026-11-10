import { neon } from '@neondatabase/serverless'

function getSql() {
  const url = process.env.DATABASE_URL
  if (!url) throw new Error('DATABASE_URL not configured')
  return neon(url)
}

export interface DashboardStats {
  totalLeads30d: number
  newUnworked: number
  pathSplit: { path: string; count: number }[]
  formBreakdown: { form_type: string; count: number }[]
  pipelineSnapshot: { status: string; count: number }[]
  /** Leads created in the last 7 days */
  totalLeads7d: number
  /** Leads created in the prior 30-day window (days 31–60), for trend comparison */
  prevLeads30d: number
  /** Leads created today (since local midnight, server time) */
  totalLeadsToday: number
  /** Count of leads in 'won' status */
  wonCount: number
  /** Count of leads in 'lost' status */
  lostCount: number
}

export async function getDashboardStats(): Promise<DashboardStats> {
  const sql = getSql()

  const [total30d, unworked, pathSplit, formBreakdown, pipeline, total7d, prev30d, totalToday] =
    await Promise.all([
      sql`SELECT COUNT(*) as count FROM leads WHERE created_at > NOW() - INTERVAL '30 days'`,
      sql`SELECT COUNT(*) as count FROM leads WHERE current_status = 'new'`,
      sql`SELECT selected_path as path, COUNT(*) as count FROM leads WHERE selected_path IS NOT NULL GROUP BY selected_path ORDER BY count DESC`,
      sql`SELECT form_type, COUNT(*) as count FROM leads GROUP BY form_type ORDER BY count DESC`,
      sql`SELECT current_status as status, COUNT(*) as count FROM leads GROUP BY current_status ORDER BY count DESC`,
      sql`SELECT COUNT(*) as count FROM leads WHERE created_at > NOW() - INTERVAL '7 days'`,
      sql`SELECT COUNT(*) as count FROM leads WHERE created_at > NOW() - INTERVAL '60 days' AND created_at <= NOW() - INTERVAL '30 days'`,
      sql`SELECT COUNT(*) as count FROM leads WHERE created_at >= date_trunc('day', NOW())`,
    ])

  const pipelineSnapshot = pipeline.map((r) => ({ status: String(r.status), count: Number(r.count) }))

  return {
    totalLeads30d: Number(total30d[0]?.count ?? 0),
    newUnworked: Number(unworked[0]?.count ?? 0),
    pathSplit: pathSplit.map((r) => ({ path: String(r.path), count: Number(r.count) })),
    formBreakdown: formBreakdown.map((r) => ({ form_type: String(r.form_type), count: Number(r.count) })),
    pipelineSnapshot,
    totalLeads7d: Number(total7d[0]?.count ?? 0),
    prevLeads30d: Number(prev30d[0]?.count ?? 0),
    totalLeadsToday: Number(totalToday[0]?.count ?? 0),
    wonCount: pipelineSnapshot.find((s) => s.status === 'won')?.count ?? 0,
    lostCount: pipelineSnapshot.find((s) => s.status === 'lost')?.count ?? 0,
  }
}

export async function getTeamDashboardStats(teamSlug: string): Promise<DashboardStats> {
  const sql = getSql()

  const [total30d, unworked, pathSplit, formBreakdown, pipeline, total7d, prev30d, totalToday] =
    await Promise.all([
      sql`SELECT COUNT(*) as count FROM leads WHERE created_at > NOW() - INTERVAL '30 days' AND (selected_team = ${teamSlug} OR assigned_team = ${teamSlug})`,
      sql`SELECT COUNT(*) as count FROM leads WHERE current_status = 'new' AND (selected_team = ${teamSlug} OR assigned_team = ${teamSlug})`,
      sql`SELECT selected_path as path, COUNT(*) as count FROM leads WHERE selected_path IS NOT NULL AND (selected_team = ${teamSlug} OR assigned_team = ${teamSlug}) GROUP BY selected_path ORDER BY count DESC`,
      sql`SELECT form_type, COUNT(*) as count FROM leads WHERE (selected_team = ${teamSlug} OR assigned_team = ${teamSlug}) GROUP BY form_type ORDER BY count DESC`,
      sql`SELECT current_status as status, COUNT(*) as count FROM leads WHERE (selected_team = ${teamSlug} OR assigned_team = ${teamSlug}) GROUP BY current_status ORDER BY count DESC`,
      sql`SELECT COUNT(*) as count FROM leads WHERE created_at > NOW() - INTERVAL '7 days' AND (selected_team = ${teamSlug} OR assigned_team = ${teamSlug})`,
      sql`SELECT COUNT(*) as count FROM leads WHERE created_at > NOW() - INTERVAL '60 days' AND created_at <= NOW() - INTERVAL '30 days' AND (selected_team = ${teamSlug} OR assigned_team = ${teamSlug})`,
      sql`SELECT COUNT(*) as count FROM leads WHERE created_at >= date_trunc('day', NOW()) AND (selected_team = ${teamSlug} OR assigned_team = ${teamSlug})`,
    ])

  const pipelineSnapshot = pipeline.map((r) => ({ status: String(r.status), count: Number(r.count) }))

  return {
    totalLeads30d: Number(total30d[0]?.count ?? 0),
    newUnworked: Number(unworked[0]?.count ?? 0),
    pathSplit: pathSplit.map((r) => ({ path: String(r.path), count: Number(r.count) })),
    formBreakdown: formBreakdown.map((r) => ({ form_type: String(r.form_type), count: Number(r.count) })),
    pipelineSnapshot,
    totalLeads7d: Number(total7d[0]?.count ?? 0),
    prevLeads30d: Number(prev30d[0]?.count ?? 0),
    totalLeadsToday: Number(totalToday[0]?.count ?? 0),
    wonCount: pipelineSnapshot.find((s) => s.status === 'won')?.count ?? 0,
    lostCount: pipelineSnapshot.find((s) => s.status === 'lost')?.count ?? 0,
  }
}

export async function getAdminUsers() {
  const sql = getSql()
  const rows = await sql`SELECT id, email, name, role, team_slug, is_active, last_login_at, created_at FROM admin_users ORDER BY created_at ASC`
  return rows
}

export async function getAdminUserByAuthId(authId: string) {
  const sql = getSql()
  const rows = await sql`SELECT * FROM admin_users WHERE id = ${authId}`
  return rows[0] ?? null
}

export async function toggleUserActive(userId: string, isActive: boolean) {
  const sql = getSql()
  await sql`UPDATE admin_users SET is_active = ${isActive}, updated_at = NOW() WHERE id = ${userId}`
}
