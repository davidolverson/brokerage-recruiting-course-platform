import { neon } from '@neondatabase/serverless'

function getSql() {
  const url = process.env.DATABASE_URL
  if (!url) throw new Error('DATABASE_URL not configured')
  return neon(url)
}

function getDateCutoff(days: number): Date | null {
  if (days <= 0) return null
  return new Date(Date.now() - days * 24 * 60 * 60 * 1000)
}

// ─── Overview ────────────────────────────────────────────────────────────────

export async function getOverviewStats(days: number) {
  const sql = getSql()
  const cutoff = getDateCutoff(days)
  const prevCutoff = days > 0 ? getDateCutoff(days * 2) : null

  let total, prevTotal, byStatus, byFormType, byPath

  if (cutoff) {
    const cutoffStr = cutoff.toISOString()
    const prevStr = prevCutoff!.toISOString();
    [total, prevTotal, byStatus, byFormType, byPath] = await Promise.all([
      sql`SELECT COUNT(*) as count FROM leads WHERE created_at > ${cutoffStr}`,
      sql`SELECT COUNT(*) as count FROM leads WHERE created_at > ${prevStr} AND created_at <= ${cutoffStr}`,
      sql`SELECT current_status as status, COUNT(*) as count FROM leads WHERE created_at > ${cutoffStr} GROUP BY current_status ORDER BY count DESC`,
      sql`SELECT form_type, COUNT(*) as count FROM leads WHERE created_at > ${cutoffStr} GROUP BY form_type ORDER BY count DESC`,
      sql`SELECT selected_path as path, COUNT(*) as count FROM leads WHERE selected_path IS NOT NULL AND created_at > ${cutoffStr} GROUP BY selected_path ORDER BY count DESC`,
    ])
  } else {
    [total, byStatus, byFormType, byPath] = await Promise.all([
      sql`SELECT COUNT(*) as count FROM leads`,
      sql`SELECT current_status as status, COUNT(*) as count FROM leads GROUP BY current_status ORDER BY count DESC`,
      sql`SELECT form_type, COUNT(*) as count FROM leads GROUP BY form_type ORDER BY count DESC`,
      sql`SELECT selected_path as path, COUNT(*) as count FROM leads WHERE selected_path IS NOT NULL GROUP BY selected_path ORDER BY count DESC`,
    ])
    prevTotal = [{ count: 0 }]
  }

  const currentCount = Number(total[0]?.count ?? 0)
  const previousCount = Number(prevTotal[0]?.count ?? 0)
  const trend = previousCount > 0 ? Math.round(((currentCount - previousCount) / previousCount) * 100) : 0

  return {
    totalLeads: currentCount,
    trend,
    previousPeriodLeads: previousCount,
    byStatus: byStatus.map((r: Record<string, unknown>) => ({ status: String(r.status), count: Number(r.count) })),
    byFormType: byFormType.map((r: Record<string, unknown>) => ({ form_type: String(r.form_type), count: Number(r.count) })),
    byPath: byPath.map((r: Record<string, unknown>) => ({ path: String(r.path), count: Number(r.count) })),
  }
}

export async function getTopSourceRoutes(days: number, limit = 10) {
  const sql = getSql()
  const cutoff = getDateCutoff(days)

  const rows = cutoff
    ? await sql`SELECT source_route, COUNT(*) as count FROM leads WHERE source_route IS NOT NULL AND created_at > ${cutoff.toISOString()} GROUP BY source_route ORDER BY count DESC LIMIT ${limit}`
    : await sql`SELECT source_route, COUNT(*) as count FROM leads WHERE source_route IS NOT NULL GROUP BY source_route ORDER BY count DESC LIMIT ${limit}`

  return rows.map((r: Record<string, unknown>) => ({ route: String(r.source_route), count: Number(r.count) }))
}

export async function getConversionRate(days: number) {
  const sql = getSql()
  const cutoff = getDateCutoff(days)

  const [total, converted] = cutoff
    ? await Promise.all([
        sql`SELECT COUNT(*) as count FROM leads WHERE created_at > ${cutoff.toISOString()}`,
        sql`SELECT COUNT(*) as count FROM leads WHERE current_status IN ('won', 'qualified') AND created_at > ${cutoff.toISOString()}`,
      ])
    : await Promise.all([
        sql`SELECT COUNT(*) as count FROM leads`,
        sql`SELECT COUNT(*) as count FROM leads WHERE current_status IN ('won', 'qualified')`,
      ])

  const t = Number(total[0]?.count ?? 0)
  const c = Number(converted[0]?.count ?? 0)
  return { total: t, converted: c, rate: t > 0 ? Math.round((c / t) * 100) : 0 }
}

// ─── Quiz ────────────────────────────────────────────────────────────────────

export async function getQuizStats(days: number) {
  const sql = getSql()
  const cutoff = getDateCutoff(days)

  let totalQuiz, withEmail, pathDist, teamDist

  if (cutoff) {
    const c = cutoff.toISOString();
    [totalQuiz, withEmail, pathDist, teamDist] = await Promise.all([
      sql`SELECT COUNT(*) as count FROM leads WHERE form_type = 'fit_quiz' AND created_at > ${c}`,
      sql`SELECT COUNT(*) as count FROM leads WHERE form_type = 'fit_quiz' AND email IS NOT NULL AND created_at > ${c}`,
      sql`SELECT selected_path as path, COUNT(*) as count FROM leads WHERE form_type = 'fit_quiz' AND selected_path IS NOT NULL AND created_at > ${c} GROUP BY selected_path ORDER BY count DESC`,
      sql`SELECT metadata->'metadata'->>'recommended_team' as team, COUNT(*) as count FROM leads WHERE form_type = 'fit_quiz' AND metadata->'metadata'->>'recommended_team' IS NOT NULL AND created_at > ${c} GROUP BY metadata->'metadata'->>'recommended_team' ORDER BY count DESC`,
    ])
  } else {
    [totalQuiz, withEmail, pathDist, teamDist] = await Promise.all([
      sql`SELECT COUNT(*) as count FROM leads WHERE form_type = 'fit_quiz'`,
      sql`SELECT COUNT(*) as count FROM leads WHERE form_type = 'fit_quiz' AND email IS NOT NULL`,
      sql`SELECT selected_path as path, COUNT(*) as count FROM leads WHERE form_type = 'fit_quiz' AND selected_path IS NOT NULL GROUP BY selected_path ORDER BY count DESC`,
      sql`SELECT metadata->'metadata'->>'recommended_team' as team, COUNT(*) as count FROM leads WHERE form_type = 'fit_quiz' AND metadata->'metadata'->>'recommended_team' IS NOT NULL GROUP BY metadata->'metadata'->>'recommended_team' ORDER BY count DESC`,
    ])
  }

  const quizTotal = Number(totalQuiz[0]?.count ?? 0)
  const emailCount = Number(withEmail[0]?.count ?? 0)

  return {
    totalQuiz: quizTotal,
    withEmail: emailCount,
    emailRate: quizTotal > 0 ? Math.round((emailCount / quizTotal) * 100) : 0,
    pathDistribution: pathDist.map((r: Record<string, unknown>) => ({ path: String(r.path), count: Number(r.count) })),
    teamDistribution: teamDist.map((r: Record<string, unknown>) => ({ team: String(r.team), count: Number(r.count) })),
  }
}

export async function getQuizToApplyRate(days: number) {
  const sql = getSql()
  const cutoff = getDateCutoff(days)

  const rows = cutoff
    ? await sql`SELECT COUNT(DISTINCT q.email) as converted FROM leads q JOIN leads a ON q.email = a.email AND a.form_type IN ('join_team_inquiry', 'network_inquiry') WHERE q.form_type = 'fit_quiz' AND q.email IS NOT NULL AND q.created_at > ${cutoff.toISOString()}`
    : await sql`SELECT COUNT(DISTINCT q.email) as converted FROM leads q JOIN leads a ON q.email = a.email AND a.form_type IN ('join_team_inquiry', 'network_inquiry') WHERE q.form_type = 'fit_quiz' AND q.email IS NOT NULL`

  const quizWithEmail = cutoff
    ? await sql`SELECT COUNT(*) as count FROM leads WHERE form_type = 'fit_quiz' AND email IS NOT NULL AND created_at > ${cutoff.toISOString()}`
    : await sql`SELECT COUNT(*) as count FROM leads WHERE form_type = 'fit_quiz' AND email IS NOT NULL`

  const converted = Number(rows[0]?.converted ?? 0)
  const total = Number(quizWithEmail[0]?.count ?? 0)

  return { quizWithEmail: total, converted, rate: total > 0 ? Math.round((converted / total) * 100) : 0 }
}

// ─── Attribution ─────────────────────────────────────────────────────────────

export async function getAttributionStats(days: number) {
  const sql = getSql()
  const cutoff = getDateCutoff(days)

  let utmSource, utmMedium, utmCampaign, partnerRef, campaignId, sourceRoute

  if (cutoff) {
    const c = cutoff.toISOString();
    [utmSource, utmMedium, utmCampaign, partnerRef, campaignId, sourceRoute] = await Promise.all([
      sql`SELECT metadata->>'utm_source' as value, COUNT(*) as count FROM leads WHERE metadata->>'utm_source' IS NOT NULL AND metadata->>'utm_source' != '' AND created_at > ${c} GROUP BY metadata->>'utm_source' ORDER BY count DESC LIMIT 15`,
      sql`SELECT metadata->>'utm_medium' as value, COUNT(*) as count FROM leads WHERE metadata->>'utm_medium' IS NOT NULL AND metadata->>'utm_medium' != '' AND created_at > ${c} GROUP BY metadata->>'utm_medium' ORDER BY count DESC LIMIT 15`,
      sql`SELECT metadata->>'utm_campaign' as value, COUNT(*) as count FROM leads WHERE metadata->>'utm_campaign' IS NOT NULL AND metadata->>'utm_campaign' != '' AND created_at > ${c} GROUP BY metadata->>'utm_campaign' ORDER BY count DESC LIMIT 15`,
      sql`SELECT partner_ref as value, COUNT(*) as count FROM leads WHERE partner_ref IS NOT NULL AND created_at > ${c} GROUP BY partner_ref ORDER BY count DESC LIMIT 15`,
      sql`SELECT campaign_id as value, COUNT(*) as count FROM leads WHERE campaign_id IS NOT NULL AND campaign_id != '' AND created_at > ${c} GROUP BY campaign_id ORDER BY count DESC LIMIT 15`,
      sql`SELECT source_route as value, COUNT(*) as count FROM leads WHERE source_route IS NOT NULL AND created_at > ${c} GROUP BY source_route ORDER BY count DESC LIMIT 15`,
    ])
  } else {
    [utmSource, utmMedium, utmCampaign, partnerRef, campaignId, sourceRoute] = await Promise.all([
      sql`SELECT metadata->>'utm_source' as value, COUNT(*) as count FROM leads WHERE metadata->>'utm_source' IS NOT NULL AND metadata->>'utm_source' != '' GROUP BY metadata->>'utm_source' ORDER BY count DESC LIMIT 15`,
      sql`SELECT metadata->>'utm_medium' as value, COUNT(*) as count FROM leads WHERE metadata->>'utm_medium' IS NOT NULL AND metadata->>'utm_medium' != '' GROUP BY metadata->>'utm_medium' ORDER BY count DESC LIMIT 15`,
      sql`SELECT metadata->>'utm_campaign' as value, COUNT(*) as count FROM leads WHERE metadata->>'utm_campaign' IS NOT NULL AND metadata->>'utm_campaign' != '' GROUP BY metadata->>'utm_campaign' ORDER BY count DESC LIMIT 15`,
      sql`SELECT partner_ref as value, COUNT(*) as count FROM leads WHERE partner_ref IS NOT NULL GROUP BY partner_ref ORDER BY count DESC LIMIT 15`,
      sql`SELECT campaign_id as value, COUNT(*) as count FROM leads WHERE campaign_id IS NOT NULL AND campaign_id != '' GROUP BY campaign_id ORDER BY count DESC LIMIT 15`,
      sql`SELECT source_route as value, COUNT(*) as count FROM leads WHERE source_route IS NOT NULL GROUP BY source_route ORDER BY count DESC LIMIT 15`,
    ])
  }

  const toList = (rows: Array<Record<string, unknown>>) =>
    rows.map((r) => ({ value: String(r.value), count: Number(r.count) }))

  return {
    utmSource: toList(utmSource),
    utmMedium: toList(utmMedium),
    utmCampaign: toList(utmCampaign),
    partnerRef: toList(partnerRef),
    campaignId: toList(campaignId),
    sourceRoute: toList(sourceRoute),
  }
}

// ─── Dashboard (re-export for compatibility) ────────────────────────────────

export interface DashboardStats {
  totalLeads30d: number
  newUnworked: number
  pathSplit: { path: string; count: number }[]
  formBreakdown: { form_type: string; count: number }[]
  pipelineSnapshot: { status: string; count: number }[]
}
