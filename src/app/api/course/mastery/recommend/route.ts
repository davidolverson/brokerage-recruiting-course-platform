import { NextResponse } from 'next/server'
import { neon } from '@neondatabase/serverless'
import { getServerSession } from '@/lib/auth-server'
import { getEnrollment } from '@/lib/db/course'
import {
  PSI_TOPICS,
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

    const masteryRows = await sql`
      SELECT * FROM topic_mastery
      WHERE enrollment_id = ${enrollment.id}
    `

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

    // Primary recommendation: highest urgency (examWeight * gap)
    const weakest = findWeakestTopic(topicMastery)

    // Secondary: topics not yet started, ordered by exam weight
    const notStarted = topicMastery
      .filter((t) => t.masteryLevel === 'not_started')
      .sort((a, b) => b.examWeight - a.examWeight)

    // Struggling topics: attempted but score < 50
    const struggling = topicMastery
      .filter((t) => t.masteryLevel === 'attempted' || (t.masteryScore > 0 && t.masteryScore < 50))
      .sort((a, b) => (b.examWeight * (100 - b.masteryScore)) - (a.examWeight * (100 - a.masteryScore)))

    // Build a study plan: top 3 topics by priority
    const studyPlan: Array<{
      topicSlug: string
      topicName: string
      examWeight: number
      masteryScore: number
      masteryLevel: MasteryLevel
      urgency: number
      reason: string
    }> = []

    const seen = new Set<string>()

    function addToPlan(t: TopicMasteryData, reason: string) {
      if (seen.has(t.topicSlug)) return
      seen.add(t.topicSlug)
      studyPlan.push({
        topicSlug: t.topicSlug,
        topicName: t.topicName,
        examWeight: t.examWeight,
        masteryScore: t.masteryScore,
        masteryLevel: t.masteryLevel,
        urgency: t.examWeight * (100 - t.masteryScore),
        reason,
      })
    }

    if (weakest) addToPlan(weakest, 'Highest exam impact gap')
    struggling.slice(0, 2).forEach((t) => addToPlan(t, 'Score below 50% — needs drilling'))
    notStarted.slice(0, 2).forEach((t) => addToPlan(t, `Not yet started — worth ${t.examWeight}% of exam`))

    const primaryTopic = studyPlan[0] ?? null
    const recommendation = primaryTopic
      ? `Study ${primaryTopic.topicName} next — it carries ${primaryTopic.examWeight}% of the PSI exam and your current score is ${primaryTopic.masteryScore}%.`
      : 'You are on track. Keep reviewing all topics.'

    return NextResponse.json({
      recommendation,
      primaryTopic,
      studyPlan: studyPlan.slice(0, 3),
      topicMastery,
    })
  } catch (err) {
    console.error('[MASTERY] Recommend failed:', err)
    return NextResponse.json({ error: 'Failed to generate recommendation' }, { status: 500 })
  }
}
