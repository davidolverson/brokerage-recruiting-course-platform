import { NextResponse } from 'next/server'
import { neon } from '@neondatabase/serverless'
import { getServerSession } from '@/lib/auth-server'
import { getEnrollment } from '@/lib/db/course'
import { PSI_TOPICS, computePassPrediction, type TopicMasteryData, type MasteryLevel } from '@/lib/pass-predictor'

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
        ORDER BY exam_weight DESC
      `,
      sql`
        SELECT score FROM course_quiz_attempts
        WHERE enrollment_id = ${enrollment.id}
          AND quiz_type = 'mock_exam'
          AND score IS NOT NULL
          AND completed_at IS NOT NULL
        ORDER BY completed_at ASC
        LIMIT 10
      `,
      sql`
        SELECT predicted_pass_probability, snapshot_date
        FROM pass_readiness_snapshots
        WHERE enrollment_id = ${enrollment.id}
        ORDER BY snapshot_date ASC
        LIMIT 20
      `,
      sql`
        SELECT current_streak_days, longest_streak_days
        FROM course_enrollments
        WHERE id = ${enrollment.id}
      `,
    ])

    // Build mastery data, filling in any missing PSI topics with defaults
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
    const currentStreakDays = (enrollmentRows[0]?.current_streak_days as number) ?? 0

    const prediction = computePassPrediction({
      topicMastery,
      mockExamScores,
      currentStreakDays,
      recentSnapshots: snapshotRows.map((r) => ({
        predicted_pass_probability: r.predicted_pass_probability as number,
      })),
    })

    return NextResponse.json({
      topicMastery,
      prediction,
      enrollmentId: enrollment.id,
      currentStreakDays,
      longestStreakDays: (enrollmentRows[0]?.longest_streak_days as number) ?? 0,
    })
  } catch (err) {
    console.error('[MASTERY] GET failed:', err)
    return NextResponse.json({ error: 'Failed to load mastery data' }, { status: 500 })
  }
}
