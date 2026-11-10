// ─── Virginia PSI Exam Topic Weights ────────────────────────────────────────
// Official weights from the Virginia PSI exam content outline

export interface PsiTopic {
  slug: string
  name: string
  examWeight: number // integer percentage
}

export const PSI_TOPICS: PsiTopic[] = [
  { slug: 'contracts',          name: 'Contracts',            examWeight: 19 },
  { slug: 'practice',           name: 'Practice of Real Estate', examWeight: 12 },
  { slug: 'property-ownership', name: 'Property Ownership',   examWeight: 10 },
  { slug: 'financing',          name: 'Financing',            examWeight: 10 },
  { slug: 'valuation',          name: 'Valuation & Appraisal', examWeight: 8 },
  { slug: 'disclosures',        name: 'Disclosures',          examWeight: 7 },
  { slug: 'calculations',       name: 'Calculations',         examWeight: 7 },
  { slug: 'transfer-of-title',  name: 'Transfer of Title',    examWeight: 6 },
  { slug: 'land-use',           name: 'Land Use Controls',    examWeight: 5 },
  { slug: 'property-management', name: 'Property Management', examWeight: 3 },
]

// Total must equal 87 — the remaining 13% is Virginia-specific content also seeded below
// but the national PSI portion covers these 10 categories summing to 87%.
// We normalize weights to sum to 100 in all calculations.

export const TOTAL_WEIGHT = PSI_TOPICS.reduce((s, t) => s + t.examWeight, 0) // 87

// ─── Types ───────────────────────────────────────────────────────────────────

export type MasteryLevel = 'not_started' | 'attempted' | 'familiar' | 'proficient' | 'mastered'

export interface TopicMasteryData {
  topicSlug: string
  topicName: string
  examWeight: number
  masteryLevel: MasteryLevel
  masteryScore: number        // 0-100
  questionsAttempted: number
  questionsCorrect: number
  lastAssessedAt: string | null
}

export interface PassPrediction {
  overallScore: number           // 0-100 weighted topic average
  predictedPassProbability: number  // 0-100 final output
  category: 'Not Ready' | 'Needs Work' | 'Almost Ready' | 'Ready' | 'Highly Ready'
  categoryColor: string          // tailwind color hex
  topicScores: Record<string, number>
  mockExamScores: number[]
  recommendation: string
  weakestTopic: TopicMasteryData | null
  trendDirection: 'improving' | 'declining' | 'stable'
}

export interface ReadinessInput {
  topicMastery: TopicMasteryData[]
  mockExamScores: number[]         // chronological, most recent last
  currentStreakDays: number
  recentSnapshots: Array<{ predicted_pass_probability: number }> // oldest first
}

// ─── Mastery Level Scoring Map ───────────────────────────────────────────────
// Maps a mastery level to a baseline score contribution when no quiz data exists

const MASTERY_LEVEL_SCORES: Record<MasteryLevel, number> = {
  not_started:  0,
  attempted:   30,
  familiar:    55,
  proficient:  75,
  mastered:    92,
}

// ─── Core Algorithm ──────────────────────────────────────────────────────────

/**
 * Derives mastery level from a numeric score.
 * Used when updating mastery after quiz completion.
 */
export function scoreToMasteryLevel(score: number): MasteryLevel {
  if (score === 0)       return 'not_started'
  if (score < 40)        return 'attempted'
  if (score < 60)        return 'familiar'
  if (score < 80)        return 'proficient'
  return 'mastered'
}

/**
 * Weighted average of all topic mastery scores, normalized to PSI weights.
 * Topics with no data contribute 0 to the weighted sum.
 */
function computeWeightedTopicScore(topics: TopicMasteryData[]): number {
  const topicMap = new Map(topics.map((t) => [t.topicSlug, t]))

  let weightedSum = 0
  let totalWeight = 0

  for (const psiTopic of PSI_TOPICS) {
    const data = topicMap.get(psiTopic.slug)
    const score = data ? data.masteryScore : 0
    weightedSum += score * psiTopic.examWeight
    totalWeight += psiTopic.examWeight
  }

  if (totalWeight === 0) return 0
  return Math.round(weightedSum / totalWeight)
}

/**
 * Mock exam factor: average of last 5 mock exams, with a confidence boost
 * if 3+ consecutive mocks are at or above 70%.
 */
function computeMockExamFactor(mockScores: number[]): { score: number; boosted: boolean } {
  if (mockScores.length === 0) return { score: 0, boosted: false }

  const recent = mockScores.slice(-5)
  const avg = Math.round(recent.reduce((s, v) => s + v, 0) / recent.length)

  // Confidence boost: 3+ of the last 5 mocks at >= 70%
  const passingMocks = recent.filter((s) => s >= 70).length
  const boosted = passingMocks >= 3

  const adjustedScore = boosted ? Math.min(100, avg + 5) : avg
  return { score: adjustedScore, boosted }
}

/**
 * Streak factor: rewards consistent daily study.
 * Returns a 0-100 multiplier contribution.
 */
function computeStreakFactor(streakDays: number): number {
  if (streakDays === 0)  return 40
  if (streakDays < 3)    return 50
  if (streakDays < 7)    return 65
  if (streakDays < 14)   return 78
  if (streakDays < 30)   return 88
  return 100
}

/**
 * Identifies the topic most in need of study.
 * Ranks by: examWeight * (100 - masteryScore) — highest urgency wins.
 */
export function findWeakestTopic(topics: TopicMasteryData[]): TopicMasteryData | null {
  if (topics.length === 0) return null

  const topicMap = new Map(topics.map((t) => [t.topicSlug, t]))

  let worstScore = -1
  let worstTopic: TopicMasteryData | null = null

  for (const psiTopic of PSI_TOPICS) {
    const data = topicMap.get(psiTopic.slug)
    const masteryScore = data?.masteryScore ?? 0
    const urgency = psiTopic.examWeight * (100 - masteryScore)

    if (urgency > worstScore) {
      worstScore = urgency
      worstTopic = data ?? {
        topicSlug: psiTopic.slug,
        topicName: psiTopic.name,
        examWeight: psiTopic.examWeight,
        masteryLevel: 'not_started',
        masteryScore: 0,
        questionsAttempted: 0,
        questionsCorrect: 0,
        lastAssessedAt: null,
      }
    }
  }

  return worstTopic
}

/**
 * Determines trend direction by comparing the two most recent snapshots.
 */
function computeTrend(
  snapshots: Array<{ predicted_pass_probability: number }>,
): 'improving' | 'declining' | 'stable' {
  if (snapshots.length < 2) return 'stable'
  const prev = snapshots[snapshots.length - 2].predicted_pass_probability
  const curr = snapshots[snapshots.length - 1].predicted_pass_probability
  const delta = curr - prev
  if (delta >= 3) return 'improving'
  if (delta <= -3) return 'declining'
  return 'stable'
}

/**
 * Maps a probability integer (0-100) to a human-readable category.
 */
export function probabilityToCategory(prob: number): PassPrediction['category'] {
  if (prob < 40)  return 'Not Ready'
  if (prob < 60)  return 'Needs Work'
  if (prob < 75)  return 'Almost Ready'
  if (prob < 90)  return 'Ready'
  return 'Highly Ready'
}

export function categoryToColor(category: PassPrediction['category']): string {
  switch (category) {
    case 'Not Ready':    return '#DC2626'  // red-600
    case 'Needs Work':   return '#EA580C'  // orange brand
    case 'Almost Ready': return '#D97706'  // amber-600
    case 'Ready':        return '#16A34A'  // green-600
    case 'Highly Ready': return '#FBBF24'  // gold/amber-400
  }
}

/**
 * Main prediction function.
 *
 * Factor breakdown:
 *   60% — weighted topic mastery scores
 *   30% — mock exam performance (last 5)
 *   10% — study consistency (streak)
 */
export function computePassPrediction(input: ReadinessInput): PassPrediction {
  const { topicMastery, mockExamScores, currentStreakDays, recentSnapshots } = input

  // Factor 1: weighted topic mastery (60%)
  const topicScore = computeWeightedTopicScore(topicMastery)

  // Factor 2: mock exam performance (30%)
  const { score: mockScore, boosted } = computeMockExamFactor(mockExamScores)

  // Factor 3: consistency (10%)
  const streakScore = computeStreakFactor(currentStreakDays)

  // Blend — mock exams only contribute if any have been taken
  const hasMocks = mockExamScores.length > 0
  let probability: number

  if (hasMocks) {
    probability = Math.round(
      topicScore * 0.60 +
      mockScore  * 0.30 +
      streakScore * 0.10
    )
  } else {
    // No mocks yet: shift weight to topics + streak
    probability = Math.round(
      topicScore  * 0.80 +
      streakScore * 0.20
    )
  }

  // Apply confidence boost from consistent mock passing
  if (boosted && probability < 100) {
    probability = Math.min(100, probability + 3)
  }

  probability = Math.max(0, Math.min(100, probability))

  // Build topic score map
  const topicScores: Record<string, number> = {}
  for (const t of topicMastery) {
    topicScores[t.topicSlug] = t.masteryScore
  }

  // Identify weakest topic for recommendation
  const weakest = findWeakestTopic(topicMastery)
  const recommendation = weakest
    ? `Focus on ${weakest.topicName} — it's worth ${weakest.examWeight}% of the PSI exam and your current score is ${weakest.masteryScore}%.`
    : 'Keep reviewing all topics to maintain your readiness.'

  const category = probabilityToCategory(probability)

  // Include a synthetic "current" snapshot for trend calculation
  const allSnapshots = [
    ...recentSnapshots,
    { predicted_pass_probability: probability },
  ]
  const trendDirection = computeTrend(allSnapshots)

  return {
    overallScore: topicScore,
    predictedPassProbability: probability,
    category,
    categoryColor: categoryToColor(category),
    topicScores,
    mockExamScores,
    recommendation,
    weakestTopic: weakest,
    trendDirection,
  }
}

/**
 * Updates mastery score using a rolling weighted average.
 * Newer quiz results carry 70% weight; historical carries 30%.
 * This prevents single lucky/unlucky runs from dominating.
 */
export function updateMasteryScore(
  currentScore: number,
  currentAttempts: number,
  newCorrect: number,
  newTotal: number,
): { newScore: number; newLevel: MasteryLevel } {
  if (newTotal === 0) return { newScore: currentScore, newLevel: scoreToMasteryLevel(currentScore) }

  const newSessionScore = Math.round((newCorrect / newTotal) * 100)

  let newScore: number
  if (currentAttempts === 0) {
    // First attempt — use raw score
    newScore = newSessionScore
  } else {
    // Weighted blend: 70% new, 30% historical
    newScore = Math.round(newSessionScore * 0.7 + currentScore * 0.3)
  }

  newScore = Math.max(0, Math.min(100, newScore))
  return { newScore, newLevel: scoreToMasteryLevel(newScore) }
}
