import { neon } from '@neondatabase/serverless'

// ─── Types ───────────────────────────────────────────────────────────────────

export interface CourseAnalytics {
  totalEnrollments: number
  activeStudents: number
  completionRate: number
  avgQuizScore: number
  avgTimeSpent: number
  enrollmentTrend: { date: string; count: number }[]
}

export interface EnrollmentFilters {
  q?: string
  status?: string
  page?: number
  perPage?: number
}

export interface EnrollmentRow {
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
  // joined from course_students / leads
  student_name: string | null
  student_email: string | null
  lead_name: string | null
  lead_email: string | null
  // computed
  progress_percent: number
  avg_quiz_score: number
}

export interface EnrollmentDetail {
  enrollment: {
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
  student: {
    name: string | null
    email: string | null
    lead_id: number | null
  }
  lessonProgress: {
    lesson_id: number
    lesson_title: string | null
    chapter_id: number | null
    chapter_title: string | null
    status: string
    started_at: string | null
    completed_at: string | null
    time_spent_seconds: number
  }[]
  quizAttempts: {
    id: number
    quiz_type: string
    chapter_id: number | null
    chapter_title: string | null
    score: number | null
    total_questions: number | null
    correct_answers: number | null
    passed: boolean | null
    started_at: string
    completed_at: string | null
  }[]
  badges: {
    badge_name: string
    badge_slug: string
    badge_icon: string | null
    earned_at: string
  }[]
  activityLog: {
    event_type: string
    details: Record<string, unknown>
    created_at: string
  }[]
  stats: {
    totalLessons: number
    completedLessons: number
    progressPercent: number
    avgQuizScore: number
    totalTimeSpent: number
  }
}

export interface DropoffLesson {
  lesson_id: number
  lesson_title: string | null
  chapter_id: number | null
  chapter_title: string | null
  dropoff_count: number
}

export interface ChapterQuizPerformance {
  chapter_id: number
  chapter_title: string | null
  avg_score: number
  pass_rate: number
  total_attempts: number
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function getSql() {
  const url = process.env.DATABASE_URL
  if (!url) throw new Error('DATABASE_URL not configured')
  return neon(url)
}

// ─── Queries ─────────────────────────────────────────────────────────────────

export async function getCourseAnalytics(days: number): Promise<CourseAnalytics> {
  const sql = getSql()
  const cutoff = days > 0 ? new Date(Date.now() - days * 24 * 60 * 60 * 1000).toISOString() : null

  const [totalRow, activeRow, completedRow, quizRow, timeRow, trendRows] = await Promise.all([
    cutoff
      ? sql`SELECT COUNT(*) as count FROM course_enrollments WHERE enrolled_at > ${cutoff}`
      : sql`SELECT COUNT(*) as count FROM course_enrollments`,

    cutoff
      ? sql`SELECT COUNT(*) as count FROM course_enrollments WHERE status = 'active' AND last_activity_at > ${cutoff}`
      : sql`SELECT COUNT(*) as count FROM course_enrollments WHERE status = 'active'`,

    cutoff
      ? sql`
          SELECT
            COUNT(*) FILTER (WHERE status = 'completed') as completed,
            COUNT(*) as total
          FROM course_enrollments WHERE enrolled_at > ${cutoff}
        `
      : sql`
          SELECT
            COUNT(*) FILTER (WHERE status = 'completed') as completed,
            COUNT(*) as total
          FROM course_enrollments
        `,

    cutoff
      ? sql`
          SELECT COALESCE(AVG(score), 0) as avg_score
          FROM course_quiz_attempts
          WHERE completed_at IS NOT NULL AND started_at > ${cutoff}
        `
      : sql`
          SELECT COALESCE(AVG(score), 0) as avg_score
          FROM course_quiz_attempts
          WHERE completed_at IS NOT NULL
        `,

    cutoff
      ? sql`
          SELECT COALESCE(AVG(total_time), 0) as avg_time
          FROM (
            SELECT enrollment_id, SUM(time_spent_seconds) as total_time
            FROM course_lesson_progress
            WHERE started_at > ${cutoff}
            GROUP BY enrollment_id
          ) t
        `
      : sql`
          SELECT COALESCE(AVG(total_time), 0) as avg_time
          FROM (
            SELECT enrollment_id, SUM(time_spent_seconds) as total_time
            FROM course_lesson_progress
            GROUP BY enrollment_id
          ) t
        `,

    cutoff
      ? sql`
          SELECT DATE(enrolled_at) as date, COUNT(*) as count
          FROM course_enrollments
          WHERE enrolled_at > ${cutoff}
          GROUP BY DATE(enrolled_at)
          ORDER BY date ASC
        `
      : sql`
          SELECT DATE(enrolled_at) as date, COUNT(*) as count
          FROM course_enrollments
          GROUP BY DATE(enrolled_at)
          ORDER BY date ASC
          LIMIT 30
        `,
  ])

  const total = Number(totalRow[0]?.count ?? 0)
  const completed = Number(completedRow[0]?.completed ?? 0)

  return {
    totalEnrollments: total,
    activeStudents: Number(activeRow[0]?.count ?? 0),
    completionRate: total > 0 ? Math.round((completed / total) * 100) : 0,
    avgQuizScore: Math.round(Number(quizRow[0]?.avg_score ?? 0)),
    avgTimeSpent: Math.round(Number(timeRow[0]?.avg_time ?? 0)),
    enrollmentTrend: trendRows.map((r: Record<string, unknown>) => ({
      date: String(r.date),
      count: Number(r.count),
    })),
  }
}

export async function getAllEnrollments(
  filters: EnrollmentFilters = {},
): Promise<{ enrollments: EnrollmentRow[]; total: number }> {
  const sql = getSql()
  const { q, status, page = 1, perPage = 25 } = filters
  const offset = (page - 1) * perPage

  const conditions: string[] = []
  const params: unknown[] = []
  let p = 1

  if (status) {
    conditions.push(`ce.status = $${p}`)
    params.push(status)
    p++
  }

  if (q) {
    conditions.push(`(
      l.first_name ILIKE $${p}
      OR l.last_name ILIKE $${p}
      OR l.email ILIKE $${p}
      OR cs.email ILIKE $${p}
      OR cs.name ILIKE $${p}
    )`)
    params.push(`%${q}%`)
    p++
  }

  const where = conditions.length > 0 ? `WHERE ${conditions.join(' AND ')}` : ''

  const countQuery = `
    SELECT COUNT(*) as total
    FROM course_enrollments ce
    LEFT JOIN leads l ON l.id = ce.lead_id
    LEFT JOIN course_students cs ON cs.user_id = ce.user_id
    ${where}
  `

  const dataQuery = `
    SELECT
      ce.*,
      cs.name as student_name,
      cs.email as student_email,
      l.first_name || ' ' || l.last_name as lead_name,
      l.email as lead_email,
      COALESCE(prog.completed_lessons, 0) as completed_lessons,
      COALESCE(total_lessons.total, 1) as total_lessons,
      CASE
        WHEN COALESCE(total_lessons.total, 0) > 0
        THEN ROUND((COALESCE(prog.completed_lessons, 0)::numeric / total_lessons.total) * 100)
        ELSE 0
      END as progress_percent,
      COALESCE(quiz_avg.avg_score, 0) as avg_quiz_score
    FROM course_enrollments ce
    LEFT JOIN leads l ON l.id = ce.lead_id
    LEFT JOIN course_students cs ON cs.user_id = ce.user_id
    LEFT JOIN (
      SELECT enrollment_id, COUNT(*) as completed_lessons
      FROM course_lesson_progress
      WHERE status = 'completed'
      GROUP BY enrollment_id
    ) prog ON prog.enrollment_id = ce.id
    LEFT JOIN (
      SELECT COUNT(*) as total FROM course_lessons WHERE is_published = true
    ) total_lessons ON true
    LEFT JOIN (
      SELECT enrollment_id, AVG(score) as avg_score
      FROM course_quiz_attempts
      WHERE completed_at IS NOT NULL
      GROUP BY enrollment_id
    ) quiz_avg ON quiz_avg.enrollment_id = ce.id
    ${where}
    ORDER BY ce.enrolled_at DESC
    LIMIT $${p} OFFSET $${p + 1}
  `

  const [countResult, dataResult] = await Promise.all([
    sql.query(countQuery, params),
    sql.query(dataQuery, [...params, perPage, offset]),
  ])

  return {
    enrollments: dataResult.map((r: Record<string, unknown>) => ({
      id: Number(r.id),
      user_id: String(r.user_id),
      lead_id: r.lead_id ? Number(r.lead_id) : null,
      enrolled_at: String(r.enrolled_at),
      status: String(r.status),
      completed_at: r.completed_at ? String(r.completed_at) : null,
      exam_readiness_score: r.exam_readiness_score ? Number(r.exam_readiness_score) : null,
      current_streak_days: Number(r.current_streak_days ?? 0),
      longest_streak_days: Number(r.longest_streak_days ?? 0),
      last_activity_at: r.last_activity_at ? String(r.last_activity_at) : null,
      student_name: r.student_name ? String(r.student_name) : null,
      student_email: r.student_email ? String(r.student_email) : null,
      lead_name: r.lead_name ? String(r.lead_name) : null,
      lead_email: r.lead_email ? String(r.lead_email) : null,
      progress_percent: Number(r.progress_percent ?? 0),
      avg_quiz_score: Math.round(Number(r.avg_quiz_score ?? 0)),
    })),
    total: Number(countResult[0]?.total ?? 0),
  }
}

export async function getEnrollmentDetail(enrollmentId: number): Promise<EnrollmentDetail | null> {
  const sql = getSql()

  const enrollmentRows = await sql`
    SELECT
      ce.*,
      cs.name as student_name,
      cs.email as student_email,
      l.first_name || ' ' || l.last_name as lead_name,
      l.email as lead_email,
      ce.lead_id
    FROM course_enrollments ce
    LEFT JOIN course_students cs ON cs.user_id = ce.user_id
    LEFT JOIN leads l ON l.id = ce.lead_id
    WHERE ce.id = ${enrollmentId}
    LIMIT 1
  `

  if (enrollmentRows.length === 0) return null
  const row = enrollmentRows[0] as Record<string, unknown>

  const [lessonProgressRows, quizAttemptRows, badgeRows, activityRows, statsRows] = await Promise.all([
    sql`
      SELECT
        clp.*,
        cl.title as lesson_title,
        cl.chapter_id,
        cc.title as chapter_title
      FROM course_lesson_progress clp
      LEFT JOIN course_lessons cl ON cl.id = clp.lesson_id
      LEFT JOIN course_chapters cc ON cc.id = cl.chapter_id
      WHERE clp.enrollment_id = ${enrollmentId}
      ORDER BY cc.sort_order, cl.sort_order
    `,
    sql`
      SELECT
        cqa.*,
        cc.title as chapter_title
      FROM course_quiz_attempts cqa
      LEFT JOIN course_chapters cc ON cc.id = cqa.chapter_id
      WHERE cqa.enrollment_id = ${enrollmentId}
      ORDER BY cqa.started_at DESC
    `,
    sql`
      SELECT ub.earned_at, b.name as badge_name, b.slug as badge_slug, b.icon as badge_icon
      FROM course_user_badges ub
      JOIN course_badges b ON b.id = ub.badge_id
      WHERE ub.enrollment_id = ${enrollmentId}
      ORDER BY ub.earned_at DESC
    `,
    sql`
      SELECT event_type, details, created_at
      FROM course_activity_log
      WHERE enrollment_id = ${enrollmentId}
      ORDER BY created_at DESC
      LIMIT 100
    `,
    sql`
      SELECT
        (SELECT COUNT(*) FROM course_lessons WHERE is_published = true) as total_lessons,
        (SELECT COUNT(*) FROM course_lesson_progress WHERE enrollment_id = ${enrollmentId} AND status = 'completed') as completed_lessons,
        (SELECT COALESCE(AVG(score), 0) FROM course_quiz_attempts WHERE enrollment_id = ${enrollmentId} AND completed_at IS NOT NULL) as avg_quiz_score,
        (SELECT COALESCE(SUM(time_spent_seconds), 0) FROM course_lesson_progress WHERE enrollment_id = ${enrollmentId}) as total_time
    `,
  ])

  const totalLessons = Number(statsRows[0]?.total_lessons ?? 0)
  const completedLessons = Number(statsRows[0]?.completed_lessons ?? 0)

  return {
    enrollment: {
      id: Number(row.id),
      user_id: String(row.user_id),
      lead_id: row.lead_id ? Number(row.lead_id) : null,
      enrolled_at: String(row.enrolled_at),
      status: String(row.status),
      completed_at: row.completed_at ? String(row.completed_at) : null,
      exam_readiness_score: row.exam_readiness_score ? Number(row.exam_readiness_score) : null,
      current_streak_days: Number(row.current_streak_days ?? 0),
      longest_streak_days: Number(row.longest_streak_days ?? 0),
      last_activity_at: row.last_activity_at ? String(row.last_activity_at) : null,
    },
    student: {
      name: row.student_name ? String(row.student_name) : (row.lead_name ? String(row.lead_name) : null),
      email: row.student_email ? String(row.student_email) : (row.lead_email ? String(row.lead_email) : null),
      lead_id: row.lead_id ? Number(row.lead_id) : null,
    },
    lessonProgress: lessonProgressRows.map((r: Record<string, unknown>) => ({
      lesson_id: Number(r.lesson_id),
      lesson_title: r.lesson_title ? String(r.lesson_title) : null,
      chapter_id: r.chapter_id ? Number(r.chapter_id) : null,
      chapter_title: r.chapter_title ? String(r.chapter_title) : null,
      status: String(r.status),
      started_at: r.started_at ? String(r.started_at) : null,
      completed_at: r.completed_at ? String(r.completed_at) : null,
      time_spent_seconds: Number(r.time_spent_seconds ?? 0),
    })),
    quizAttempts: quizAttemptRows.map((r: Record<string, unknown>) => ({
      id: Number(r.id),
      quiz_type: String(r.quiz_type),
      chapter_id: r.chapter_id ? Number(r.chapter_id) : null,
      chapter_title: r.chapter_title ? String(r.chapter_title) : null,
      score: r.score !== null ? Number(r.score) : null,
      total_questions: r.total_questions ? Number(r.total_questions) : null,
      correct_answers: r.correct_answers ? Number(r.correct_answers) : null,
      passed: r.passed !== null ? Boolean(r.passed) : null,
      started_at: String(r.started_at),
      completed_at: r.completed_at ? String(r.completed_at) : null,
    })),
    badges: badgeRows.map((r: Record<string, unknown>) => ({
      badge_name: String(r.badge_name),
      badge_slug: String(r.badge_slug),
      badge_icon: r.badge_icon ? String(r.badge_icon) : null,
      earned_at: String(r.earned_at),
    })),
    activityLog: activityRows.map((r: Record<string, unknown>) => ({
      event_type: String(r.event_type),
      details: (r.details as Record<string, unknown>) ?? {},
      created_at: String(r.created_at),
    })),
    stats: {
      totalLessons,
      completedLessons,
      progressPercent: totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0,
      avgQuizScore: Math.round(Number(statsRows[0]?.avg_quiz_score ?? 0)),
      totalTimeSpent: Number(statsRows[0]?.total_time ?? 0),
    },
  }
}

export async function getDropoffAnalysis(): Promise<DropoffLesson[]> {
  const sql = getSql()

  // Find the last completed lesson per enrollment where the student went inactive
  // (i.e., enrollment is not 'completed' and the lesson is the latest one they touched)
  const rows = await sql`
    WITH last_lesson AS (
      SELECT DISTINCT ON (clp.enrollment_id)
        clp.enrollment_id,
        clp.lesson_id,
        clp.completed_at
      FROM course_lesson_progress clp
      JOIN course_enrollments ce ON ce.id = clp.enrollment_id
      WHERE ce.status IN ('paused', 'dropped', 'active')
        AND clp.status = 'completed'
      ORDER BY clp.enrollment_id, clp.completed_at DESC
    )
    SELECT
      ll.lesson_id,
      cl.title as lesson_title,
      cl.chapter_id,
      cc.title as chapter_title,
      COUNT(*) as dropoff_count
    FROM last_lesson ll
    LEFT JOIN course_lessons cl ON cl.id = ll.lesson_id
    LEFT JOIN course_chapters cc ON cc.id = cl.chapter_id
    GROUP BY ll.lesson_id, cl.title, cl.chapter_id, cc.title
    ORDER BY dropoff_count DESC
    LIMIT 15
  `

  return rows.map((r: Record<string, unknown>) => ({
    lesson_id: Number(r.lesson_id),
    lesson_title: r.lesson_title ? String(r.lesson_title) : null,
    chapter_id: r.chapter_id ? Number(r.chapter_id) : null,
    chapter_title: r.chapter_title ? String(r.chapter_title) : null,
    dropoff_count: Number(r.dropoff_count),
  }))
}

export async function getQuizPerformanceByChapter(): Promise<ChapterQuizPerformance[]> {
  const sql = getSql()

  const rows = await sql`
    SELECT
      cqa.chapter_id,
      cc.title as chapter_title,
      ROUND(AVG(cqa.score)) as avg_score,
      COUNT(*) as total_attempts,
      ROUND(
        (COUNT(*) FILTER (WHERE cqa.passed = true)::numeric / NULLIF(COUNT(*), 0)) * 100
      ) as pass_rate
    FROM course_quiz_attempts cqa
    LEFT JOIN course_chapters cc ON cc.id = cqa.chapter_id
    WHERE cqa.completed_at IS NOT NULL
      AND cqa.quiz_type = 'chapter_quiz'
      AND cqa.chapter_id IS NOT NULL
    GROUP BY cqa.chapter_id, cc.title
    ORDER BY cqa.chapter_id ASC
  `

  return rows.map((r: Record<string, unknown>) => ({
    chapter_id: Number(r.chapter_id),
    chapter_title: r.chapter_title ? String(r.chapter_title) : null,
    avg_score: Math.round(Number(r.avg_score ?? 0)),
    pass_rate: Math.round(Number(r.pass_rate ?? 0)),
    total_attempts: Number(r.total_attempts ?? 0),
  }))
}
