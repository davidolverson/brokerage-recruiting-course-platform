import { neon } from '@neondatabase/serverless'

// ─── Types ───────────────────────────────────────────────────────────────────

export interface Enrollment {
  id: number
  user_id: string
  lead_id: number | null
  enrolled_at: string
  status: string
  completed_at: string | null
  exam_readiness_score: number | null
  current_streak_days: number
  longest_streak_days: number
  last_activity_at: string | null
}

export interface LessonProgress {
  id: number
  enrollment_id: number
  lesson_id: number
  status: string
  started_at: string | null
  completed_at: string | null
  time_spent_seconds: number
}

export interface QuizAttempt {
  id: number
  enrollment_id: number
  quiz_type: string
  chapter_id: number | null
  score: number | null
  total_questions: number | null
  correct_answers: number | null
  time_taken_seconds: number | null
  started_at: string
  completed_at: string | null
  passed: boolean | null
}

export interface QuizResponse {
  id: number
  attempt_id: number
  question_id: number
  selected_option_id: number | null
  is_correct: boolean | null
}

export interface Badge {
  id: number
  slug: string
  name: string
  description: string | null
  icon: string | null
  criteria_type: string
  criteria_value: Record<string, unknown>
}

export interface UserBadge {
  id: number
  enrollment_id: number
  badge_id: number
  earned_at: string
  badge_name?: string
  badge_slug?: string
  badge_icon?: string
}

export interface EnrollmentStats {
  totalLessons: number
  completedLessons: number
  progressPercent: number
  avgQuizScore: number
  quizzesTaken: number
  examReadinessScore: number
  currentStreak: number
  longestStreak: number
  totalTimeSpent: number
  badgesEarned: number
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function getSql() {
  const url = process.env.DATABASE_URL
  if (!url) throw new Error('DATABASE_URL not configured')
  return neon(url)
}

// ─── Slug Resolution ────────────────────────────────────────────────────────

/**
 * Resolve a lesson identifier (numeric ID or slug string) to a numeric ID.
 * Returns null if not found. Uses course_lessons table.
 */
export async function resolveLessonId(idOrSlug: string): Promise<number | null> {
  const asNum = parseInt(idOrSlug, 10)
  if (!isNaN(asNum) && String(asNum) === idOrSlug) return asNum

  const sql = getSql()
  const rows = await sql`SELECT id FROM course_lessons WHERE slug = ${idOrSlug} LIMIT 1`
  return rows.length > 0 ? (rows[0] as { id: number }).id : null
}

/**
 * Resolve a chapter identifier (numeric ID or slug string) to a numeric ID.
 * Returns null if not found. Uses course_chapters table.
 */
export async function resolveChapterId(idOrSlug: string): Promise<number | null> {
  const asNum = parseInt(idOrSlug, 10)
  if (!isNaN(asNum) && String(asNum) === idOrSlug) return asNum

  const sql = getSql()
  const rows = await sql`SELECT id FROM course_chapters WHERE slug = ${idOrSlug} LIMIT 1`
  return rows.length > 0 ? (rows[0] as { id: number }).id : null
}

// ─── Enrollment ──────────────────────────────────────────────────────────────

export async function getEnrollment(userId: string, courseType: string = 'pre-license'): Promise<Enrollment | null> {
  const sql = getSql()
  const rows = await sql`SELECT * FROM course_enrollments WHERE user_id = ${userId} AND course_type = ${courseType} LIMIT 1`
  return (rows[0] as Enrollment) ?? null
}

export async function createEnrollment(userId: string, leadId?: number, courseType: string = 'pre-license'): Promise<Enrollment> {
  const sql = getSql()
  const rows = await sql`
    INSERT INTO course_enrollments (user_id, lead_id, course_type, status)
    VALUES (${userId}, ${leadId ?? null}, ${courseType}, 'active')
    ON CONFLICT (user_id, course_type) DO UPDATE SET updated_at = now()
    RETURNING *
  `
  return rows[0] as Enrollment
}

export async function updateEnrollmentStatus(enrollmentId: number, status: string): Promise<void> {
  const sql = getSql()
  await sql`
    UPDATE course_enrollments
    SET status = ${status},
        completed_at = ${status === 'completed' ? new Date().toISOString() : null},
        updated_at = now()
    WHERE id = ${enrollmentId}
  `
}

// ─── Lesson Progress ─────────────────────────────────────────────────────────

export async function getLessonProgress(enrollmentId: number): Promise<LessonProgress[]> {
  const sql = getSql()
  const rows = await sql`
    SELECT * FROM course_lesson_progress
    WHERE enrollment_id = ${enrollmentId}
    ORDER BY lesson_id
  `
  return rows as LessonProgress[]
}

export async function getLessonProgressByLesson(enrollmentId: number, lessonId: number): Promise<LessonProgress | null> {
  const sql = getSql()
  const rows = await sql`
    SELECT * FROM course_lesson_progress
    WHERE enrollment_id = ${enrollmentId} AND lesson_id = ${lessonId}
    LIMIT 1
  `
  return (rows[0] as LessonProgress) ?? null
}

export async function startLesson(enrollmentId: number, lessonId: number): Promise<LessonProgress> {
  const sql = getSql()
  const rows = await sql`
    INSERT INTO course_lesson_progress (enrollment_id, lesson_id, status, started_at)
    VALUES (${enrollmentId}, ${lessonId}, 'in_progress', now())
    ON CONFLICT (enrollment_id, lesson_id)
    DO UPDATE SET status = CASE
      WHEN course_lesson_progress.status = 'not_started' THEN 'in_progress'
      ELSE course_lesson_progress.status
    END,
    started_at = COALESCE(course_lesson_progress.started_at, now())
    RETURNING *
  `
  return rows[0] as LessonProgress
}

export async function markLessonComplete(enrollmentId: number, lessonId: number, timeSpentSeconds: number): Promise<LessonProgress> {
  const sql = getSql()
  const rows = await sql`
    INSERT INTO course_lesson_progress (enrollment_id, lesson_id, status, started_at, completed_at, time_spent_seconds)
    VALUES (${enrollmentId}, ${lessonId}, 'completed', now(), now(), ${timeSpentSeconds})
    ON CONFLICT (enrollment_id, lesson_id)
    DO UPDATE SET
      status = 'completed',
      completed_at = now(),
      time_spent_seconds = course_lesson_progress.time_spent_seconds + ${timeSpentSeconds}
    RETURNING *
  `

  // Update enrollment last activity and streak
  await updateLastActivity(enrollmentId)

  // Log the event
  await logCourseActivity(enrollmentId, 'lesson_completed', { lessonId, timeSpentSeconds })

  return rows[0] as LessonProgress
}

export async function updateLessonTimeSpent(enrollmentId: number, lessonId: number, additionalSeconds: number): Promise<void> {
  const sql = getSql()
  await sql`
    INSERT INTO course_lesson_progress (enrollment_id, lesson_id, status, started_at, time_spent_seconds)
    VALUES (${enrollmentId}, ${lessonId}, 'in_progress', now(), ${additionalSeconds})
    ON CONFLICT (enrollment_id, lesson_id)
    DO UPDATE SET time_spent_seconds = course_lesson_progress.time_spent_seconds + ${additionalSeconds}
  `
  await updateLastActivity(enrollmentId)
}

// ─── Quiz Attempts ───────────────────────────────────────────────────────────

export async function createQuizAttempt(
  enrollmentId: number,
  quizType: string,
  chapterId: number | null,
): Promise<QuizAttempt> {
  const sql = getSql()
  const rows = await sql`
    INSERT INTO course_quiz_attempts (enrollment_id, quiz_type, chapter_id, started_at)
    VALUES (${enrollmentId}, ${quizType}, ${chapterId}, now())
    RETURNING *
  `
  await logCourseActivity(enrollmentId, 'quiz_started', { quizType, chapterId })
  return rows[0] as QuizAttempt
}

export async function submitQuizAttempt(
  attemptId: number,
  responses: { questionId: number; selectedOptionId: number; isCorrect: boolean }[],
): Promise<QuizAttempt> {
  const sql = getSql()

  // Insert all responses
  for (const r of responses) {
    await sql`
      INSERT INTO course_quiz_responses (attempt_id, question_id, selected_option_id, is_correct)
      VALUES (${attemptId}, ${r.questionId}, ${r.selectedOptionId}, ${r.isCorrect})
    `
  }

  const totalQuestions = responses.length
  const correctAnswers = responses.filter(r => r.isCorrect).length
  const score = totalQuestions > 0 ? Math.round((correctAnswers / totalQuestions) * 100) : 0
  const passed = score >= 70

  const rows = await sql`
    UPDATE course_quiz_attempts
    SET score = ${score},
        total_questions = ${totalQuestions},
        correct_answers = ${correctAnswers},
        completed_at = now(),
        time_taken_seconds = EXTRACT(EPOCH FROM (now() - started_at))::integer,
        passed = ${passed}
    WHERE id = ${attemptId}
    RETURNING *
  `

  const attempt = rows[0] as QuizAttempt

  await logCourseActivity(attempt.enrollment_id, 'quiz_completed', {
    attemptId,
    quizType: attempt.quiz_type,
    score,
    passed,
  })

  // Recalculate exam readiness after each quiz
  await calculateExamReadiness(attempt.enrollment_id)

  return attempt
}

export async function getQuizAttempts(enrollmentId: number, quizType?: string, chapterId?: number): Promise<QuizAttempt[]> {
  const sql = getSql()
  if (quizType && chapterId) {
    return await sql`
      SELECT * FROM course_quiz_attempts
      WHERE enrollment_id = ${enrollmentId} AND quiz_type = ${quizType} AND chapter_id = ${chapterId}
      ORDER BY started_at DESC
    ` as QuizAttempt[]
  }
  if (quizType) {
    return await sql`
      SELECT * FROM course_quiz_attempts
      WHERE enrollment_id = ${enrollmentId} AND quiz_type = ${quizType}
      ORDER BY started_at DESC
    ` as QuizAttempt[]
  }
  return await sql`
    SELECT * FROM course_quiz_attempts
    WHERE enrollment_id = ${enrollmentId}
    ORDER BY started_at DESC
  ` as QuizAttempt[]
}

export async function getQuizResponses(attemptId: number): Promise<QuizResponse[]> {
  const sql = getSql()
  return await sql`
    SELECT * FROM course_quiz_responses WHERE attempt_id = ${attemptId}
  ` as QuizResponse[]
}

// ─── Streaks & Activity ──────────────────────────────────────────────────────

async function updateLastActivity(enrollmentId: number): Promise<void> {
  const sql = getSql()

  // Get current enrollment
  const rows = await sql`SELECT * FROM course_enrollments WHERE id = ${enrollmentId}`
  if (rows.length === 0) return
  const enrollment = rows[0] as Enrollment

  const now = new Date()
  const lastActivity = enrollment.last_activity_at ? new Date(enrollment.last_activity_at) : null
  let newStreak = enrollment.current_streak_days

  if (lastActivity) {
    const diffHours = (now.getTime() - lastActivity.getTime()) / (1000 * 60 * 60)
    if (diffHours >= 24 && diffHours < 48) {
      // New day, extend streak
      newStreak += 1
    } else if (diffHours >= 48) {
      // Streak broken
      newStreak = 1
    }
    // Same day: no change
  } else {
    newStreak = 1
  }

  const longestStreak = Math.max(newStreak, enrollment.longest_streak_days)

  await sql`
    UPDATE course_enrollments
    SET last_activity_at = now(),
        current_streak_days = ${newStreak},
        longest_streak_days = ${longestStreak},
        updated_at = now()
    WHERE id = ${enrollmentId}
  `
}

// ─── Exam Readiness ──────────────────────────────────────────────────────────

export async function calculateExamReadiness(enrollmentId: number): Promise<number> {
  const sql = getSql()

  // Weighted: chapter quizzes 30%, section exams 40%, mock exams 30%
  const chapterAvg = await sql`
    SELECT COALESCE(AVG(score), 0) as avg_score FROM course_quiz_attempts
    WHERE enrollment_id = ${enrollmentId} AND quiz_type = 'chapter_quiz' AND score IS NOT NULL
  `
  const sectionAvg = await sql`
    SELECT COALESCE(AVG(score), 0) as avg_score FROM course_quiz_attempts
    WHERE enrollment_id = ${enrollmentId} AND quiz_type = 'section_exam' AND score IS NOT NULL
  `
  const mockAvg = await sql`
    SELECT COALESCE(AVG(score), 0) as avg_score FROM course_quiz_attempts
    WHERE enrollment_id = ${enrollmentId} AND quiz_type = 'mock_exam' AND score IS NOT NULL
  `

  const cScore = Number(chapterAvg[0]?.avg_score ?? 0)
  const sScore = Number(sectionAvg[0]?.avg_score ?? 0)
  const mScore = Number(mockAvg[0]?.avg_score ?? 0)

  const readiness = Math.round(cScore * 0.3 + sScore * 0.4 + mScore * 0.3)

  await sql`
    UPDATE course_enrollments SET exam_readiness_score = ${readiness}, updated_at = now()
    WHERE id = ${enrollmentId}
  `

  return readiness
}

// ─── Stats ───────────────────────────────────────────────────────────────────

export async function getEnrollmentStats(enrollmentId: number): Promise<EnrollmentStats> {
  const sql = getSql()

  const [totalRow, completedRow, quizRow, timeRow, badgeRow, enrollmentRow] = await Promise.all([
    sql`SELECT COUNT(*) as count FROM course_lessons WHERE is_published = true`,
    sql`SELECT COUNT(*) as count FROM course_lesson_progress WHERE enrollment_id = ${enrollmentId} AND status = 'completed'`,
    sql`SELECT COUNT(*) as count, COALESCE(AVG(score), 0) as avg_score FROM course_quiz_attempts WHERE enrollment_id = ${enrollmentId} AND completed_at IS NOT NULL`,
    sql`SELECT COALESCE(SUM(time_spent_seconds), 0) as total FROM course_lesson_progress WHERE enrollment_id = ${enrollmentId}`,
    sql`SELECT COUNT(*) as count FROM course_user_badges WHERE enrollment_id = ${enrollmentId}`,
    sql`SELECT * FROM course_enrollments WHERE id = ${enrollmentId}`,
  ])

  const totalLessons = Number(totalRow[0]?.count ?? 0)
  const completedLessons = Number(completedRow[0]?.count ?? 0)
  const enrollment = enrollmentRow[0] as Enrollment | undefined

  return {
    totalLessons,
    completedLessons,
    progressPercent: totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0,
    avgQuizScore: Math.round(Number(quizRow[0]?.avg_score ?? 0)),
    quizzesTaken: Number(quizRow[0]?.count ?? 0),
    examReadinessScore: enrollment?.exam_readiness_score ?? 0,
    currentStreak: enrollment?.current_streak_days ?? 0,
    longestStreak: enrollment?.longest_streak_days ?? 0,
    totalTimeSpent: Number(timeRow[0]?.total ?? 0),
    badgesEarned: Number(badgeRow[0]?.count ?? 0),
  }
}

// ─── Badges ──────────────────────────────────────────────────────────────────

export async function getUserBadges(enrollmentId: number): Promise<UserBadge[]> {
  const sql = getSql()
  return await sql`
    SELECT ub.*, b.name as badge_name, b.slug as badge_slug, b.icon as badge_icon
    FROM course_user_badges ub
    JOIN course_badges b ON b.id = ub.badge_id
    WHERE ub.enrollment_id = ${enrollmentId}
    ORDER BY ub.earned_at DESC
  ` as UserBadge[]
}

export async function awardBadge(enrollmentId: number, badgeSlug: string): Promise<UserBadge | null> {
  const sql = getSql()

  // Get badge ID
  const badges = await sql`SELECT id FROM course_badges WHERE slug = ${badgeSlug}`
  if (badges.length === 0) return null

  const badgeId = badges[0].id as number

  // Upsert (don't award twice)
  const rows = await sql`
    INSERT INTO course_user_badges (enrollment_id, badge_id)
    VALUES (${enrollmentId}, ${badgeId})
    ON CONFLICT (enrollment_id, badge_id) DO NOTHING
    RETURNING *
  `

  if (rows.length > 0) {
    await logCourseActivity(enrollmentId, 'badge_earned', { badgeSlug })
  }

  return (rows[0] as UserBadge) ?? null
}

// ─── Activity Log ────────────────────────────────────────────────────────────

export async function logCourseActivity(
  enrollmentId: number,
  eventType: string,
  details: Record<string, unknown> = {},
): Promise<void> {
  const sql = getSql()
  await sql`
    INSERT INTO course_activity_log (enrollment_id, event_type, details)
    VALUES (${enrollmentId}, ${eventType}, ${JSON.stringify(details)})
  `
}

export async function getCourseActivityLog(enrollmentId: number, limit = 50): Promise<{ event_type: string; details: Record<string, unknown>; created_at: string }[]> {
  const sql = getSql()
  return await sql`
    SELECT event_type, details, created_at
    FROM course_activity_log
    WHERE enrollment_id = ${enrollmentId}
    ORDER BY created_at DESC
    LIMIT ${limit}
  ` as { event_type: string; details: Record<string, unknown>; created_at: string }[]
}
