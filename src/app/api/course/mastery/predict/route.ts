import { NextResponse } from 'next/server'
import { neon } from '@neondatabase/serverless'
import { getServerSession } from '@/lib/auth-server'
import { getEnrollment } from '@/lib/db/course'
import {
  PSI_TOPICS,
  computePassPrediction,
  type TopicMasteryData,
  type MasteryLevel,
} from '@/lib/pass-predictor'

export const dynamic = 'force-dynamic'

function getSql() {
  const url = process.env.DATABASE_URL
  if (!url) throw new Error('DATABASE_URL not configured')
  return neon(url)
}

export async function GET() {
  const session = await getServerSession()
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const enrollment = await getEnrollment(session.user.id)
  if (!enrollment) {
    return NextResponse.json({ error: 'Not enrolled' }, { status: 400 })
  }

  try {
    const sql = getSql()

    const [masteryRows, mockRows, snapshotRows, enrollmentRows] = await Promise.all([
      sql`
        SELECT * FROM topic_mastery
        WHERE enrollment_id = ${enrollment.id}
      `,
      sql`
        SELECT score, completed_at FROM course_quiz_attempts
        WHERE enrollment_id = ${enrollment.id}
          AND quiz_type = 'mock_exam'
          AND score IS NOT NULL
          AND completed_at IS NOT NULL
        ORDER BY completed_at ASC
        LIMIT 10
      `,
      sql`
        SELECT predicted_pass_probability, overall_score, snapshot_date
        FROM pass_readiness_snapshots
        WHERE enrollment_id = ${enrollment.id}
        ORDER BY snapshot_date ASC
        LIMIT 30
      `,
      sql`
        SELECT current_streak_days, longest_streak_days
        FROM course_enrollments
        WHERE id = ${enrollment.id}
      `,
    ])

    const masteryMap = new Map(masteryRows.map((r) => [r.topic_slug as string, r]))
    const topicMastery: TopicMasteryData[] = PSI_TOPICS.map((topic) => {
      const row = masteryMap.get(topic.slug)
      if (row) {
        return {
          topicSlug: row.topic_slug as string,
          topicName: row.topic_name as string,
          examWeight: row.exam_weight as number,
          masteryLevel: row.mastery_level as MasteryLevel,
          masteryScore: row.mastery_score as number,
          questionsAttempted: row.questions_attempted as number,
          questionsCorrect: row.questions_correct as number,
          lastAssessedAt: row.last_assessed_at as string | null,
        }
      }
      return {
        topicSlug: topic.slug,
        topicName: topic.name,
        examWeight: topic.examWeight,
        masteryLevel: 'not_started',
        masteryScore: 0,
        questionsAttempted: 0,
        questionsCorrect: 0,
        lastAssessedAt: null,
      }
    })

    const mockExamScores = mockRows.map((r) => r.score as number)
    const mockExamHistory = mockRows.map((r) => ({
      score: r.score as number,
      completedAt: r.completed_at as string,
    }))
    const currentStreakDays = (enrollmentRows[0]?.current_streak_days as number) ?? 0

    const prediction = computePassPrediction({
      topicMastery,
      mockExamScores,
      currentStreakDays,
      recentSnapshots: snapshotRows.map((r) => ({
        predicted_pass_probability: r.predicted_pass_probability as number,
      })),
    })

    // Build trend data for chart (last 14 snapshots)
    const trendData = snapshotRows.slice(-14).map((r) => ({
      date: r.snapshot_date as string,
      probability: r.predicted_pass_probability as number,
      overallScore: r.overall_score as number,
    }))

    return NextResponse.json({
      prediction,
      topicMastery,
      mockExamHistory,
      trendData,
      currentStreakDays,
      longestStreakDays: (enrollmentRows[0]?.longest_streak_days as number) ?? 0,
    })
  } catch (err) {
    console.error('[MASTERY] Predict failed:', err)
    return NextResponse.json({ error: 'Failed to compute prediction' }, { status: 500 })
  }
}
