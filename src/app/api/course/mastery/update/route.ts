import { NextRequest, NextResponse } from 'next/server'
import { neon } from '@neondatabase/serverless'
import { getServerSession } from '@/lib/auth-server'
import { getEnrollment, logCourseActivity } from '@/lib/db/course'
import {
  PSI_TOPICS,
  updateMasteryScore,
  computePassPrediction,
  findWeakestTopic,
  type TopicMasteryData,
  type MasteryLevel,
} from '@/lib/pass-predictor'

export const dynamic = 'force-dynamic'

function getSql() {
  const url = process.env.DATABASE_URL
  if (!url) throw new Error('DATABASE_URL not configured')
  return neon(url)
}

interface UpdatePayload {
  // One of these must be provided to identify the topic context
  topicSlug?: string
  // Direct quiz results
  quizType: string          // 'chapter_quiz' | 'section_exam' | 'mock_exam' | 'topic_drill'
  questionsCorrect: number
  questionsTotal: number
  // Optional: array of { topicTag, correct } for per-topic granular updates
  topicBreakdown?: Array<{ topicTag: string; correct: number; total: number }>
}

/**
 * Maps a course topic_tag or quiz type to a PSI topic slug.
 * Handles both the quiz question topic_tag field and general quiz types.
 */
function resolveTopicSlug(tag: string): string | null {
  const normalized = tag.toLowerCase().replace(/[^a-z0-9]/g, '-')

  const mappings: Record<string, string> = {
    // Direct slug matches
    'contracts':            'contracts',
    'contract':             'contracts',
    'agency':               'practice',
    'practice':             'practice',
    'ethics':               'practice',
    'real-estate-practice': 'practice',
    'property-ownership':   'property-ownership',
    'ownership':            'property-ownership',
    'property':             'property-ownership',
    'financing':            'financing',
    'finance':              'financing',
    'mortgages':            'financing',
    'loans':                'financing',
    'valuation':            'valuation',
    'appraisal':            'valuation',
    'cma':                  'valuation',
    'disclosures':          'disclosures',
    'disclosure':           'disclosures',
    'calculations':         'calculations',
    'math':                 'calculations',
    'transfer':             'transfer-of-title',
    'transfer-of-title':    'transfer-of-title',
    'title':                'transfer-of-title',
    'closing':              'transfer-of-title',
    'land-use':             'land-use',
    'land':                 'land-use',
    'zoning':               'land-use',
    'property-management':  'property-management',
    'management':           'property-management',
    'leasing':              'property-management',
  }

  // Try direct match
  if (mappings[normalized]) return mappings[normalized]

  // Try partial match
  for (const [key, slug] of Object.entries(mappings)) {
    if (normalized.includes(key) || key.includes(normalized)) return slug
  }

  // Check if it already is a valid PSI slug
  if (PSI_TOPICS.some((t) => t.slug === normalized)) return normalized

  return null
}

export async function POST(request: NextRequest) {
  const session = await getServerSession()
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const enrollment = await getEnrollment(session.user.id)
  if (!enrollment) {
    return NextResponse.json({ error: 'Not enrolled' }, { status: 400 })
  }

  const body: UpdatePayload = await request.json().catch(() => ({}))

  if (
    typeof body.questionsCorrect !== 'number' ||
    typeof body.questionsTotal !== 'number' ||
    body.questionsTotal <= 0
  ) {
    return NextResponse.json({ error: 'Invalid payload: questionsCorrect and questionsTotal required' }, { status: 400 })
  }

  const sql = getSql()
  const updatedSlugs: string[] = []

  try {
    // ── Per-topic granular update (preferred) ─────────────────────────────
    if (Array.isArray(body.topicBreakdown) && body.topicBreakdown.length > 0) {
      for (const item of body.topicBreakdown) {
        if (!item.topicTag || item.total <= 0) continue

        const slug = resolveTopicSlug(item.topicTag)
        if (!slug) continue

        const psiTopic = PSI_TOPICS.find((t) => t.slug === slug)
        if (!psiTopic) continue

        // Get current mastery row (if exists)
        const existing = await sql`
          SELECT * FROM topic_mastery
          WHERE enrollment_id = ${enrollment.id} AND topic_slug = ${slug}
        `

        const current = existing[0]
        const { newScore, newLevel } = updateMasteryScore(
          (current?.mastery_score as number) ?? 0,
          (current?.questions_attempted as number) ?? 0,
          item.correct,
          item.total,
        )

        await sql`
          INSERT INTO topic_mastery (
            enrollment_id, topic_slug, topic_name, exam_weight,
            mastery_level, mastery_score,
            questions_attempted, questions_correct,
            last_assessed_at, updated_at
          )
          VALUES (
            ${enrollment.id}, ${slug}, ${psiTopic.name}, ${psiTopic.examWeight},
            ${newLevel}, ${newScore},
            ${item.total}, ${item.correct},
            now(), now()
          )
          ON CONFLICT (enrollment_id, topic_slug)
          DO UPDATE SET
            mastery_level      = ${newLevel},
            mastery_score      = ${newScore},
            questions_attempted = topic_mastery.questions_attempted + ${item.total},
            questions_correct   = topic_mastery.questions_correct + ${item.correct},
            last_assessed_at   = now(),
            updated_at         = now()
        `

        updatedSlugs.push(slug)
      }
    }

    // ── Single-topic update (fallback when topicSlug is provided) ─────────
    if (body.topicSlug && updatedSlugs.length === 0) {
      const slug = resolveTopicSlug(body.topicSlug) ?? body.topicSlug
      const psiTopic = PSI_TOPICS.find((t) => t.slug === slug)

      if (psiTopic) {
        const existing = await sql`
          SELECT * FROM topic_mastery
          WHERE enrollment_id = ${enrollment.id} AND topic_slug = ${slug}
        `
        const current = existing[0]
        const { newScore, newLevel } = updateMasteryScore(
          (current?.mastery_score as number) ?? 0,
          (current?.questions_attempted as number) ?? 0,
          body.questionsCorrect,
          body.questionsTotal,
        )

        await sql`
          INSERT INTO topic_mastery (
            enrollment_id, topic_slug, topic_name, exam_weight,
            mastery_level, mastery_score,
            questions_attempted, questions_correct,
            last_assessed_at, updated_at
          )
          VALUES (
            ${enrollment.id}, ${slug}, ${psiTopic.name}, ${psiTopic.examWeight},
            ${newLevel}, ${newScore},
            ${body.questionsTotal}, ${body.questionsCorrect},
            now(), now()
          )
          ON CONFLICT (enrollment_id, topic_slug)
          DO UPDATE SET
            mastery_level       = ${newLevel},
            mastery_score       = ${newScore},
            questions_attempted = topic_mastery.questions_attempted + ${body.questionsTotal},
            questions_correct   = topic_mastery.questions_correct + ${body.questionsCorrect},
            last_assessed_at    = now(),
            updated_at          = now()
        `
        updatedSlugs.push(slug)
      }
    }

    // ── Recalculate pass probability and save a snapshot ─────────────────
    const [allMasteryRows, mockRows, snapshotRows, enrollmentRows] = await Promise.all([
      sql`SELECT * FROM topic_mastery WHERE enrollment_id = ${enrollment.id}`,
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
        SELECT predicted_pass_probability FROM pass_readiness_snapshots
        WHERE enrollment_id = ${enrollment.id}
        ORDER BY snapshot_date ASC
        LIMIT 20
      `,
      sql`SELECT current_streak_days FROM course_enrollments WHERE id = ${enrollment.id}`,
    ])

    const masteryMap = new Map(allMasteryRows.map((r) => [r.topic_slug as string, r]))
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

    const weakest = findWeakestTopic(topicMastery)

    // Save snapshot
    await sql`
      INSERT INTO pass_readiness_snapshots (
        enrollment_id, overall_score, predicted_pass_probability,
        topic_scores, mock_exam_scores, recommendation
      )
      VALUES (
        ${enrollment.id},
        ${prediction.overallScore},
        ${prediction.predictedPassProbability},
        ${JSON.stringify(prediction.topicScores)},
        ${JSON.stringify(mockExamScores)},
        ${prediction.recommendation}
      )
    `

    // Log activity
    await logCourseActivity(enrollment.id, 'mastery_updated', {
      updatedTopics: updatedSlugs,
      probability: prediction.predictedPassProbability,
      category: prediction.category,
    })

    return NextResponse.json({
      updatedTopics: updatedSlugs,
      prediction,
      weakestTopic: weakest,
    })
  } catch (err) {
    console.error('[MASTERY] Update failed:', err)
    return NextResponse.json({ error: 'Failed to update mastery' }, { status: 500 })
  }
}
