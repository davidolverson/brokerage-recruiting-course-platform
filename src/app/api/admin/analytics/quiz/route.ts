import { NextRequest, NextResponse } from 'next/server'
import { getAdminContext } from '@/lib/permissions'
import { getQuizStats, getQuizToApplyRate } from '@/lib/db/analytics'

export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
  const ctx = await getAdminContext()
  if (!ctx || ctx.role !== 'owner') {
    return NextResponse.json({ error: 'Owner access only' }, { status: 403 })
  }

  const rawDays = parseInt(new URL(request.url).searchParams.get('days') ?? '30')
  const days = isNaN(rawDays) || rawDays < 1 ? 30 : Math.min(rawDays, 365)

  const [quizStats, quizConversion] = await Promise.all([
    getQuizStats(days),
    getQuizToApplyRate(days),
  ])

  // ─── Derived metrics (computed, no new query) ──────────────────────────────
  const noEmail = Math.max(0, quizStats.totalQuiz - quizStats.withEmail)
  const topPath = quizStats.pathDistribution[0] ?? null
  const topTeam = quizStats.teamDistribution[0] ?? null
  const pathTotal = quizStats.pathDistribution.reduce((s, r) => s + r.count, 0)
  const topPathShare =
    topPath && pathTotal > 0 ? Math.round((topPath.count / pathTotal) * 100) : 0
  // Leads that completed the quiz but never applied (lost between capture and apply).
  const stalled = Math.max(0, quizConversion.quizWithEmail - quizConversion.converted)

  const derived = {
    noEmail,
    stalled,
    teamOptions: quizStats.teamDistribution.length,
    topPath: topPath ? { path: topPath.path, count: topPath.count, share: topPathShare } : null,
    topTeam: topTeam ? { team: topTeam.team, count: topTeam.count } : null,
  }

  return NextResponse.json({ ...quizStats, quizConversion, derived })
}
