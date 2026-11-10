import { NextRequest, NextResponse } from 'next/server'
import { getAdminContext } from '@/lib/permissions'
import {
  getCourseAnalytics,
  getDropoffAnalysis,
  getQuizPerformanceByChapter,
} from '@/lib/db/course-admin'

export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
  const ctx = await getAdminContext()
  if (!ctx || ctx.role !== 'owner') {
    return NextResponse.json({ error: 'Owner access only' }, { status: 403 })
  }

  const rawDays = parseInt(new URL(request.url).searchParams.get('days') ?? '30')
  const days = isNaN(rawDays) || rawDays < 1 ? 30 : Math.min(rawDays, 365)

  try {
    const [analytics, dropoff, quizPerformance] = await Promise.all([
      getCourseAnalytics(days),
      getDropoffAnalysis(),
      getQuizPerformanceByChapter(),
    ])

    return NextResponse.json({ ...analytics, dropoff, quizPerformance })
  } catch (err) {
    console.error('[course/analytics] query failed', err)
    return NextResponse.json({ error: 'Query failed' }, { status: 500 })
  }
}
