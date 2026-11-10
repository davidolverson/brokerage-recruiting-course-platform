import { pgTable, serial, text, integer, boolean, timestamp, jsonb, index, uniqueIndex } from 'drizzle-orm/pg-core'

// ─── Existing Table (extended for admin) ─────────────────────────────────────

export const leads = pgTable('leads', {
  id: serial('id').primaryKey(),
  firstName: text('first_name'),
  lastName: text('last_name'),
  email: text('email'),
  phone: text('phone'),
  formType: text('form_type').notNull(),
  sourceRoute: text('source_route'),
  sourceSection: text('source_section'),
  selectedPath: text('selected_path'),
  selectedTeam: text('selected_team'),
  campaignId: text('campaign_id'),
  partnerRef: text('partner_ref'),
  currentStatus: text('current_status').default('new'),
  assignedTo: text('assigned_to'),
  assignedTeam: text('assigned_team'),
  metadata: jsonb('metadata').default({}),
  // TCPA. Null means this number may be dialled manually but never texted or
  // autodialled. Consent attaches to the number, not the person, so the number
  // it was given for is stored beside it: if phone is later corrected and no
  // longer matches consentPhone, the row is unconsented again.
  consentAt: timestamp('consent_at', { withTimezone: true }),
  consentPhone: text('consent_phone'),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow(),
}, (table) => [
  index('idx_leads_form_type').on(table.formType),
  index('idx_leads_selected_team').on(table.selectedTeam),
  index('idx_leads_current_status').on(table.currentStatus),
  index('idx_leads_assigned_team').on(table.assignedTeam),
  index('idx_leads_created_at').on(table.createdAt),
  index('idx_leads_updated_at').on(table.updatedAt),
])

// ─── Better Auth Tables ──────────────────────────────────────────────────────

export const user = pgTable('user', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  emailVerified: boolean('email_verified').default(false),
  image: text('image'),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow(),
})

export const session = pgTable('session', {
  id: text('id').primaryKey(),
  expiresAt: timestamp('expires_at', { withTimezone: true }).notNull(),
  token: text('token').notNull().unique(),
  ipAddress: text('ip_address'),
  userAgent: text('user_agent'),
  userId: text('user_id').notNull().references(() => user.id, { onDelete: 'cascade' }),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow(),
})

export const account = pgTable('account', {
  id: text('id').primaryKey(),
  accountId: text('account_id').notNull(),
  providerId: text('provider_id').notNull(),
  userId: text('user_id').notNull().references(() => user.id, { onDelete: 'cascade' }),
  accessToken: text('access_token'),
  refreshToken: text('refresh_token'),
  idToken: text('id_token'),
  accessTokenExpiresAt: timestamp('access_token_expires_at', { withTimezone: true }),
  refreshTokenExpiresAt: timestamp('refresh_token_expires_at', { withTimezone: true }),
  scope: text('scope'),
  password: text('password'),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow(),
})

export const verification = pgTable('verification', {
  id: text('id').primaryKey(),
  identifier: text('identifier').notNull(),
  value: text('value').notNull(),
  expiresAt: timestamp('expires_at', { withTimezone: true }).notNull(),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow(),
})

// ─── Admin Tables ────────────────────────────────────────────────────────────

export const adminUsers = pgTable('admin_users', {
  id: text('id').primaryKey(), // Better Auth user ID
  email: text('email').notNull().unique(),
  name: text('name').notNull(),
  role: text('role').notNull(), // 'owner' | 'team_leader' | 'staff'
  teamSlug: text('team_slug'),
  avatarUrl: text('avatar_url'),
  isActive: boolean('is_active').default(true),
  notificationPreferences: jsonb('notification_preferences').default({
    instant_new_lead: true,
    instant_assignment: true,
    weekly_digest: true,
  }),
  lastLoginAt: timestamp('last_login_at', { withTimezone: true }),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow(),
})

export const inviteTokens = pgTable('invite_tokens', {
  id: serial('id').primaryKey(),
  email: text('email').notNull(),
  role: text('role').notNull(), // 'team_leader' | 'staff'
  teamSlug: text('team_slug'),
  token: text('token').notNull().unique(),
  invitedBy: text('invited_by').notNull().references(() => adminUsers.id),
  expiresAt: timestamp('expires_at', { withTimezone: true }).notNull(),
  usedAt: timestamp('used_at', { withTimezone: true }),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow(),
})

// ─── Lead Management Tables ─────────────────────────────────────────────────

export const leadStatusHistory = pgTable('lead_status_history', {
  id: serial('id').primaryKey(),
  leadId: integer('lead_id').notNull().references(() => leads.id, { onDelete: 'cascade' }),
  oldStatus: text('old_status'),
  newStatus: text('new_status').notNull(),
  assignedTo: text('assigned_to'),
  assignedTeam: text('assigned_team'),
  changedBy: text('changed_by'),
  changedAt: timestamp('changed_at', { withTimezone: true }).defaultNow(),
}, (table) => [
  index('idx_lead_status_history_lead').on(table.leadId, table.changedAt),
  index('idx_lead_status_history_status').on(table.newStatus),
])

export const leadNotes = pgTable('lead_notes', {
  id: serial('id').primaryKey(),
  leadId: integer('lead_id').notNull().references(() => leads.id, { onDelete: 'cascade' }),
  authorId: text('author_id').notNull(),
  content: text('content').notNull(),
  isInternal: boolean('is_internal').default(true),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow(),
}, (table) => [
  index('idx_lead_notes_lead_id').on(table.leadId),
])

export const activityLog = pgTable('activity_log', {
  id: serial('id').primaryKey(),
  userId: text('user_id'),
  action: text('action').notNull(),
  entityType: text('entity_type').notNull(), // 'lead' | 'user' | 'system'
  entityId: integer('entity_id'),
  details: jsonb('details').default({}),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow(),
}, (table) => [
  index('idx_activity_log_entity').on(table.entityType, table.entityId),
  index('idx_activity_log_user').on(table.userId),
  index('idx_activity_log_created').on(table.createdAt),
])

// ─── Operational Tables ──────────────────────────────────────────────────────

export const notificationQueue = pgTable('notification_queue', {
  id: serial('id').primaryKey(),
  recipientEmail: text('recipient_email').notNull(),
  type: text('type').notNull(), // 'new_lead' | 'lead_assigned' | 'weekly_digest'
  payload: jsonb('payload').notNull(),
  sentAt: timestamp('sent_at', { withTimezone: true }),
  error: text('error'),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow(),
})

export const rateLimits = pgTable('rate_limits', {
  key: text('key').primaryKey(),
  count: integer('count').default(1),
  windowStart: timestamp('window_start', { withTimezone: true }).defaultNow(),
})

// ─── Course Tables ──────────────────────────────────────────────────────────

export const courseModules = pgTable('course_modules', {
  id: serial('id').primaryKey(),
  slug: text('slug').notNull().unique(),
  title: text('title').notNull(),
  description: text('description'),
  courseType: text('course_type').notNull().default('pre-license'), // 'pre-license' | 'ple' | 'ce'
  orderIndex: integer('order_index').notNull(),
  isPublished: boolean('is_published').default(false),
  estimatedHours: integer('estimated_hours'),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow(),
})

export const courseChapters = pgTable('course_chapters', {
  id: serial('id').primaryKey(),
  moduleId: integer('module_id').notNull().references(() => courseModules.id, { onDelete: 'cascade' }),
  slug: text('slug').notNull().unique(),
  title: text('title').notNull(),
  description: text('description'),
  orderIndex: integer('order_index').notNull(),
  isPublished: boolean('is_published').default(false),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow(),
}, (table) => [
  index('idx_course_chapters_module').on(table.moduleId),
])

export const courseLessons = pgTable('course_lessons', {
  id: serial('id').primaryKey(),
  chapterId: integer('chapter_id').notNull().references(() => courseChapters.id, { onDelete: 'cascade' }),
  slug: text('slug').notNull().unique(),
  title: text('title').notNull(),
  content: text('content'),
  lessonType: text('lesson_type').notNull().default('reading'),
  estimatedMinutes: integer('estimated_minutes'),
  orderIndex: integer('order_index').notNull(),
  isPublished: boolean('is_published').default(false),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow(),
}, (table) => [
  index('idx_course_lessons_chapter').on(table.chapterId),
])

export const courseQuizQuestions = pgTable('course_quiz_questions', {
  id: serial('id').primaryKey(),
  chapterId: integer('chapter_id').references(() => courseChapters.id, { onDelete: 'cascade' }),
  quizType: text('quiz_type').notNull(),
  questionText: text('question_text').notNull(),
  explanation: text('explanation'),
  difficulty: text('difficulty').default('medium'),
  topicTag: text('topic_tag'),
  orderIndex: integer('order_index').default(0),
  isPublished: boolean('is_published').default(false),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow(),
}, (table) => [
  index('idx_course_quiz_questions_chapter').on(table.chapterId),
  index('idx_course_quiz_questions_type').on(table.quizType),
])

export const courseQuizOptions = pgTable('course_quiz_options', {
  id: serial('id').primaryKey(),
  questionId: integer('question_id').notNull().references(() => courseQuizQuestions.id, { onDelete: 'cascade' }),
  optionText: text('option_text').notNull(),
  isCorrect: boolean('is_correct').default(false),
  orderIndex: integer('order_index').default(0),
}, (table) => [
  index('idx_course_quiz_options_question').on(table.questionId),
])

export const courseEnrollments = pgTable('course_enrollments', {
  id: serial('id').primaryKey(),
  userId: text('user_id').notNull().references(() => user.id, { onDelete: 'cascade' }),
  leadId: integer('lead_id').references(() => leads.id),
  courseType: text('course_type').notNull().default('pre-license'), // 'pre-license' | 'ple' | 'ce'
  enrolledAt: timestamp('enrolled_at', { withTimezone: true }).defaultNow(),
  status: text('status').notNull().default('active'),
  completedAt: timestamp('completed_at', { withTimezone: true }),
  examReadinessScore: integer('exam_readiness_score'),
  currentStreakDays: integer('current_streak_days').default(0),
  longestStreakDays: integer('longest_streak_days').default(0),
  lastActivityAt: timestamp('last_activity_at', { withTimezone: true }),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow(),
}, (table) => [
  uniqueIndex('idx_course_enrollments_user_type').on(table.userId, table.courseType),
  index('idx_course_enrollments_status').on(table.status),
  index('idx_course_enrollments_enrolled').on(table.enrolledAt),
  index('idx_course_enrollments_type').on(table.courseType),
])

export const courseLessonProgress = pgTable('course_lesson_progress', {
  id: serial('id').primaryKey(),
  enrollmentId: integer('enrollment_id').notNull().references(() => courseEnrollments.id, { onDelete: 'cascade' }),
  lessonId: integer('lesson_id').notNull().references(() => courseLessons.id, { onDelete: 'cascade' }),
  status: text('status').notNull().default('not_started'),
  startedAt: timestamp('started_at', { withTimezone: true }),
  completedAt: timestamp('completed_at', { withTimezone: true }),
  timeSpentSeconds: integer('time_spent_seconds').default(0),
}, (table) => [
  uniqueIndex('idx_course_lesson_progress_unique').on(table.enrollmentId, table.lessonId),
  index('idx_course_lesson_progress_enrollment').on(table.enrollmentId),
])

export const courseQuizAttempts = pgTable('course_quiz_attempts', {
  id: serial('id').primaryKey(),
  enrollmentId: integer('enrollment_id').notNull().references(() => courseEnrollments.id, { onDelete: 'cascade' }),
  quizType: text('quiz_type').notNull(),
  chapterId: integer('chapter_id').references(() => courseChapters.id),
  score: integer('score'),
  totalQuestions: integer('total_questions'),
  correctAnswers: integer('correct_answers'),
  timeTakenSeconds: integer('time_taken_seconds'),
  startedAt: timestamp('started_at', { withTimezone: true }).defaultNow(),
  completedAt: timestamp('completed_at', { withTimezone: true }),
  passed: boolean('passed'),
}, (table) => [
  index('idx_course_quiz_attempts_enrollment').on(table.enrollmentId),
  index('idx_course_quiz_attempts_type').on(table.quizType),
  index('idx_course_quiz_attempts_chapter').on(table.chapterId),
])

export const courseQuizResponses = pgTable('course_quiz_responses', {
  id: serial('id').primaryKey(),
  attemptId: integer('attempt_id').notNull().references(() => courseQuizAttempts.id, { onDelete: 'cascade' }),
  questionId: integer('question_id').notNull().references(() => courseQuizQuestions.id),
  selectedOptionId: integer('selected_option_id').references(() => courseQuizOptions.id),
  isCorrect: boolean('is_correct'),
}, (table) => [
  index('idx_course_quiz_responses_attempt').on(table.attemptId),
])

export const courseBadges = pgTable('course_badges', {
  id: serial('id').primaryKey(),
  slug: text('slug').notNull().unique(),
  name: text('name').notNull(),
  description: text('description'),
  icon: text('icon'),
  criteriaType: text('criteria_type').notNull(),
  criteriaValue: jsonb('criteria_value').default({}),
})

export const courseUserBadges = pgTable('course_user_badges', {
  id: serial('id').primaryKey(),
  enrollmentId: integer('enrollment_id').notNull().references(() => courseEnrollments.id, { onDelete: 'cascade' }),
  badgeId: integer('badge_id').notNull().references(() => courseBadges.id, { onDelete: 'cascade' }),
  earnedAt: timestamp('earned_at', { withTimezone: true }).defaultNow(),
}, (table) => [
  uniqueIndex('idx_course_user_badges_unique').on(table.enrollmentId, table.badgeId),
])

// ─── PLE Certificate Tables ─────────────────────────────────────────────────

export const pleCertificates = pgTable('ple_certificates', {
  id: serial('id').primaryKey(),
  enrollmentId: integer('enrollment_id').notNull().references(() => courseEnrollments.id, { onDelete: 'cascade' }),
  userId: text('user_id').notNull().references(() => user.id, { onDelete: 'cascade' }),
  certificateId: text('certificate_id').notNull().unique(), // auto-generated unique ID
  licenseeName: text('licensee_name').notNull(),
  licenseNumber: text('license_number'),
  courseName: text('course_name').notNull().default('VA Post-License Real Estate Ed'),
  courseApprovalNumber: text('course_approval_number'), // assigned by DPOR after approval
  courseHours: integer('course_hours').notNull().default(30),
  completionDate: timestamp('completion_date', { withTimezone: true }).notNull(),
  providerName: text('provider_name').notNull().default('Acme Realty Real Estate Academy'),
  providerNumber: text('provider_number').notNull().default('0000'),
  directorName: text('director_name'),
  directorSignature: text('director_signature'), // path to signature image
  dporStatement: text('dpor_statement').notNull().default(
    'This course is approved by the Virginia Real Estate Board for Post License Education pursuant to Section 54.1-2105.01 of the Code of Virginia.'
  ),
  reportedToDpor: boolean('reported_to_dpor').default(false),
  reportedAt: timestamp('reported_at', { withTimezone: true }),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow(),
}, (table) => [
  uniqueIndex('idx_ple_certificates_enrollment').on(table.enrollmentId),
  index('idx_ple_certificates_user').on(table.userId),
  index('idx_ple_certificates_reported').on(table.reportedToDpor),
])

export const courseLessonTimeEnforcement = pgTable('course_lesson_time_enforcement', {
  id: serial('id').primaryKey(),
  enrollmentId: integer('enrollment_id').notNull().references(() => courseEnrollments.id, { onDelete: 'cascade' }),
  lessonId: integer('lesson_id').notNull().references(() => courseLessons.id, { onDelete: 'cascade' }),
  minimumSeconds: integer('minimum_seconds').notNull(), // minimum time before lesson can be marked complete
  actualSeconds: integer('actual_seconds').default(0),
  enforced: boolean('enforced').default(true), // PLE courses must enforce, pre-license optional
  canProceed: boolean('can_proceed').default(false), // set to true when actual >= minimum
  lastHeartbeat: timestamp('last_heartbeat', { withTimezone: true }),
}, (table) => [
  uniqueIndex('idx_time_enforcement_unique').on(table.enrollmentId, table.lessonId),
])

// ─── Course Activity Log ───────────────────────────────────────────────────

export const courseActivityLog = pgTable('course_activity_log', {
  id: serial('id').primaryKey(),
  enrollmentId: integer('enrollment_id').notNull().references(() => courseEnrollments.id, { onDelete: 'cascade' }),
  eventType: text('event_type').notNull(),
  details: jsonb('details').default({}),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow(),
}, (table) => [
  index('idx_course_activity_log_enrollment').on(table.enrollmentId),
  index('idx_course_activity_log_event').on(table.eventType),
  index('idx_course_activity_log_created').on(table.createdAt),
])

// ─── Spaced Repetition Tables ───────────────────────────────────────────────

// ─── Mastery Tracking Tables ────────────────────────────────────────────────

export const topicMastery = pgTable('topic_mastery', {
  id: serial('id').primaryKey(),
  enrollmentId: integer('enrollment_id').notNull().references(() => courseEnrollments.id, { onDelete: 'cascade' }),
  topicSlug: text('topic_slug').notNull(),
  topicName: text('topic_name').notNull(),
  examWeight: integer('exam_weight').notNull(), // PSI exam weight as integer percentage
  masteryLevel: text('mastery_level').notNull().default('not_started'), // 'not_started'|'attempted'|'familiar'|'proficient'|'mastered'
  masteryScore: integer('mastery_score').notNull().default(0), // 0-100
  questionsAttempted: integer('questions_attempted').notNull().default(0),
  questionsCorrect: integer('questions_correct').notNull().default(0),
  lastAssessedAt: timestamp('last_assessed_at', { withTimezone: true }),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow(),
}, (table) => [
  uniqueIndex('idx_topic_mastery_enrollment_slug').on(table.enrollmentId, table.topicSlug),
  index('idx_topic_mastery_enrollment').on(table.enrollmentId),
  index('idx_topic_mastery_level').on(table.masteryLevel),
])

export const passReadinessSnapshots = pgTable('pass_readiness_snapshots', {
  id: serial('id').primaryKey(),
  enrollmentId: integer('enrollment_id').notNull().references(() => courseEnrollments.id, { onDelete: 'cascade' }),
  snapshotDate: timestamp('snapshot_date', { withTimezone: true }).defaultNow(),
  overallScore: integer('overall_score').notNull().default(0), // 0-100
  predictedPassProbability: integer('predicted_pass_probability').notNull().default(0), // 0-100
  topicScores: jsonb('topic_scores').default({}), // { topicSlug: score }
  mockExamScores: jsonb('mock_exam_scores').default([]), // array of recent mock scores
  recommendation: text('recommendation'), // what to study next
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow(),
}, (table) => [
  index('idx_pass_readiness_enrollment').on(table.enrollmentId),
  index('idx_pass_readiness_date').on(table.snapshotDate),
])

// ─── Course Notes ───────────────────────────────────────────────────────────

export const courseNotes = pgTable('course_notes', {
  id: serial('id').primaryKey(),
  enrollmentId: integer('enrollment_id').notNull().references(() => courseEnrollments.id, { onDelete: 'cascade' }),
  lessonId: integer('lesson_id').references(() => courseLessons.id, { onDelete: 'set null' }),
  quizAttemptId: integer('quiz_attempt_id').references(() => courseQuizAttempts.id, { onDelete: 'set null' }),
  noteType: text('note_type').notNull().default('lesson'), // 'lesson' | 'quiz' | 'highlight' | 'bookmark'
  content: text('content').notNull(),
  highlightedText: text('highlighted_text'),
  pageContext: text('page_context'), // stores moduleSlug/chapterSlug/lessonSlug for navigation
  tags: text('tags').array().default([]), // 'important' | 'review-later' | 'confused' | 'exam-topic'
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow(),
}, (table) => [
  index('idx_course_notes_enrollment').on(table.enrollmentId),
  index('idx_course_notes_lesson').on(table.lessonId),
  index('idx_course_notes_quiz_attempt').on(table.quizAttemptId),
  index('idx_course_notes_type').on(table.noteType),
  index('idx_course_notes_created').on(table.createdAt),
])

export const spacedRepetitionCards = pgTable('spaced_repetition_cards', {
  id: serial('id').primaryKey(),
  enrollmentId: integer('enrollment_id').notNull().references(() => courseEnrollments.id, { onDelete: 'cascade' }),
  termKey: text('term_key').notNull(),
  easeFactor: text('ease_factor').notNull().default('2.5'),
  intervalDays: integer('interval_days').notNull().default(1),
  repetitions: integer('repetitions').notNull().default(0),
  nextReviewDate: timestamp('next_review_date', { withTimezone: true }).defaultNow(),
  lastReviewDate: timestamp('last_review_date', { withTimezone: true }),
  quality: integer('quality'), // last quality rating 0-5
  status: text('status').notNull().default('new'), // 'new' | 'learning' | 'review' | 'graduated'
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow(),
}, (table) => [
  uniqueIndex('idx_sr_cards_enrollment_term').on(table.enrollmentId, table.termKey),
  index('idx_sr_cards_enrollment').on(table.enrollmentId),
  index('idx_sr_cards_next_review').on(table.nextReviewDate),
  index('idx_sr_cards_status').on(table.status),
])

// ─── Training & Events Calendar ──────────────────────────────────────────────

export const trainingEvents = pgTable('training_events', {
  id: serial('id').primaryKey(),
  slug: text('slug').notNull().unique(),
  title: text('title').notNull(),
  category: text('category').notNull(), // branch|example|newagent|prelicense|community|broker|popup
  description: text('description'),
  host: text('host'),
  location: text('location'),
  imageUrl: text('image_url'),
  startTime: text('start_time'), // 'HH:MM' 24h or null
  endTime: text('end_time'),
  capacity: integer('capacity'),
  recurrence: jsonb('recurrence').notNull().default({}),
  tentative: boolean('tentative').notNull().default(false),
  active: boolean('active').notNull().default(true),
  sortOrder: integer('sort_order').notNull().default(0),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow(),
}, (table) => [
  index('idx_training_events_active').on(table.active),
  index('idx_training_events_category').on(table.category),
])

export const trainingRsvps = pgTable('training_rsvps', {
  id: serial('id').primaryKey(),
  occurrenceKey: text('occurrence_key').notNull(), // 'slug:YYYY-MM-DD'
  eventSlug: text('event_slug').notNull(),
  eventDate: text('event_date').notNull(), // date column; read as 'YYYY-MM-DD'
  name: text('name').notNull(),
  email: text('email').notNull(),
  status: text('status').notNull(), // going|maybe|not_going
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow(),
}, (table) => [
  uniqueIndex('uq_training_rsvps_occ_email').on(table.occurrenceKey, table.email),
  index('idx_training_rsvps_occ').on(table.occurrenceKey),
  index('idx_training_rsvps_date').on(table.eventDate),
  index('idx_training_rsvps_email').on(table.email),
])

export const trainingSubscribers = pgTable('training_subscribers', {
  id: serial('id').primaryKey(),
  email: text('email').notNull().unique(),
  name: text('name'),
  categories: jsonb('categories').notNull().default([]),
  active: boolean('active').notNull().default(true),
  unsubscribeToken: text('unsubscribe_token').notNull(),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow(),
}, (table) => [
  index('idx_training_subscribers_active').on(table.active),
])

// ─── Contacts + Mass Email Campaigns ─────────────────────────────────────────

export const contacts = pgTable('contacts', {
  id: serial('id').primaryKey(),
  email: text('email').notNull().unique(),
  firstName: text('first_name'),
  lastName: text('last_name'),
  phone: text('phone'),
  sources: jsonb('sources').notNull().default([]),
  teamSlug: text('team_slug'),
  tags: jsonb('tags').notNull().default([]),
  unsubscribed: boolean('unsubscribed').notNull().default(false),
  unsubscribedAt: timestamp('unsubscribed_at', { withTimezone: true }),
  unsubscribeToken: text('unsubscribe_token').notNull().unique(),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow(),
}, (table) => [
  index('idx_contacts_unsubscribed').on(table.unsubscribed),
  index('idx_contacts_team_slug').on(table.teamSlug),
])

export const campaigns = pgTable('campaigns', {
  id: serial('id').primaryKey(),
  subject: text('subject').notNull(),
  htmlBody: text('html_body').notNull(),
  textBody: text('text_body').notNull(),
  segmentFilter: jsonb('segment_filter').notNull().default({}),
  status: text('status').notNull().default('draft'),
  createdBy: text('created_by').notNull(),
  recipientCount: integer('recipient_count').notNull().default(0),
  sentCount: integer('sent_count').notNull().default(0),
  failedCount: integer('failed_count').notNull().default(0),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow(),
  sentAt: timestamp('sent_at', { withTimezone: true }),
})

export const campaignRecipients = pgTable('campaign_recipients', {
  id: serial('id').primaryKey(),
  campaignId: integer('campaign_id').notNull().references(() => campaigns.id, { onDelete: 'cascade' }),
  contactId: integer('contact_id').notNull().references(() => contacts.id, { onDelete: 'cascade' }),
  status: text('status').notNull().default('queued'),
  sentAt: timestamp('sent_at', { withTimezone: true }),
  error: text('error'),
}, (table) => [
  index('idx_campaign_recipients_campaign_status').on(table.campaignId, table.status),
])

export const segments = pgTable('segments', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  filter: jsonb('filter').notNull(),
  createdBy: text('created_by').notNull(),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow(),
})
