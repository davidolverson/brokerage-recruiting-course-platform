-- Course Modules
CREATE TABLE IF NOT EXISTS course_modules (
  id SERIAL PRIMARY KEY,
  slug TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  description TEXT,
  order_index INTEGER NOT NULL,
  is_published BOOLEAN DEFAULT false,
  estimated_hours INTEGER,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Course Chapters
CREATE TABLE IF NOT EXISTS course_chapters (
  id SERIAL PRIMARY KEY,
  module_id INTEGER NOT NULL REFERENCES course_modules(id) ON DELETE CASCADE,
  slug TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  description TEXT,
  order_index INTEGER NOT NULL,
  is_published BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_course_chapters_module ON course_chapters(module_id);

-- Course Lessons
CREATE TABLE IF NOT EXISTS course_lessons (
  id SERIAL PRIMARY KEY,
  chapter_id INTEGER NOT NULL REFERENCES course_chapters(id) ON DELETE CASCADE,
  slug TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  content TEXT,
  lesson_type TEXT NOT NULL DEFAULT 'reading',
  estimated_minutes INTEGER,
  order_index INTEGER NOT NULL,
  is_published BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_course_lessons_chapter ON course_lessons(chapter_id);

-- Quiz Questions
CREATE TABLE IF NOT EXISTS course_quiz_questions (
  id SERIAL PRIMARY KEY,
  chapter_id INTEGER REFERENCES course_chapters(id) ON DELETE CASCADE,
  quiz_type TEXT NOT NULL,
  question_text TEXT NOT NULL,
  explanation TEXT,
  difficulty TEXT DEFAULT 'medium',
  topic_tag TEXT,
  order_index INTEGER DEFAULT 0,
  is_published BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_course_quiz_questions_chapter ON course_quiz_questions(chapter_id);
CREATE INDEX IF NOT EXISTS idx_course_quiz_questions_type ON course_quiz_questions(quiz_type);

-- Quiz Options
CREATE TABLE IF NOT EXISTS course_quiz_options (
  id SERIAL PRIMARY KEY,
  question_id INTEGER NOT NULL REFERENCES course_quiz_questions(id) ON DELETE CASCADE,
  option_text TEXT NOT NULL,
  is_correct BOOLEAN DEFAULT false,
  order_index INTEGER DEFAULT 0
);
CREATE INDEX IF NOT EXISTS idx_course_quiz_options_question ON course_quiz_options(question_id);

-- Course Enrollments
CREATE TABLE IF NOT EXISTS course_enrollments (
  id SERIAL PRIMARY KEY,
  user_id TEXT NOT NULL REFERENCES "user"(id) ON DELETE CASCADE,
  lead_id INTEGER REFERENCES leads(id),
  enrolled_at TIMESTAMPTZ DEFAULT NOW(),
  status TEXT NOT NULL DEFAULT 'active',
  completed_at TIMESTAMPTZ,
  exam_readiness_score INTEGER,
  current_streak_days INTEGER DEFAULT 0,
  longest_streak_days INTEGER DEFAULT 0,
  last_activity_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);
CREATE UNIQUE INDEX IF NOT EXISTS idx_course_enrollments_user ON course_enrollments(user_id);
CREATE INDEX IF NOT EXISTS idx_course_enrollments_status ON course_enrollments(status);
CREATE INDEX IF NOT EXISTS idx_course_enrollments_enrolled ON course_enrollments(enrolled_at);

-- Lesson Progress
CREATE TABLE IF NOT EXISTS course_lesson_progress (
  id SERIAL PRIMARY KEY,
  enrollment_id INTEGER NOT NULL REFERENCES course_enrollments(id) ON DELETE CASCADE,
  lesson_id INTEGER NOT NULL REFERENCES course_lessons(id) ON DELETE CASCADE,
  status TEXT NOT NULL DEFAULT 'not_started',
  started_at TIMESTAMPTZ,
  completed_at TIMESTAMPTZ,
  time_spent_seconds INTEGER DEFAULT 0
);
CREATE UNIQUE INDEX IF NOT EXISTS idx_course_lesson_progress_unique ON course_lesson_progress(enrollment_id, lesson_id);
CREATE INDEX IF NOT EXISTS idx_course_lesson_progress_enrollment ON course_lesson_progress(enrollment_id);

-- Quiz Attempts
CREATE TABLE IF NOT EXISTS course_quiz_attempts (
  id SERIAL PRIMARY KEY,
  enrollment_id INTEGER NOT NULL REFERENCES course_enrollments(id) ON DELETE CASCADE,
  quiz_type TEXT NOT NULL,
  chapter_id INTEGER REFERENCES course_chapters(id),
  score INTEGER,
  total_questions INTEGER,
  correct_answers INTEGER,
  time_taken_seconds INTEGER,
  started_at TIMESTAMPTZ DEFAULT NOW(),
  completed_at TIMESTAMPTZ,
  passed BOOLEAN
);
CREATE INDEX IF NOT EXISTS idx_course_quiz_attempts_enrollment ON course_quiz_attempts(enrollment_id);
CREATE INDEX IF NOT EXISTS idx_course_quiz_attempts_type ON course_quiz_attempts(quiz_type);
CREATE INDEX IF NOT EXISTS idx_course_quiz_attempts_chapter ON course_quiz_attempts(chapter_id);

-- Quiz Responses
CREATE TABLE IF NOT EXISTS course_quiz_responses (
  id SERIAL PRIMARY KEY,
  attempt_id INTEGER NOT NULL REFERENCES course_quiz_attempts(id) ON DELETE CASCADE,
  question_id INTEGER NOT NULL REFERENCES course_quiz_questions(id),
  selected_option_id INTEGER REFERENCES course_quiz_options(id),
  is_correct BOOLEAN
);
CREATE INDEX IF NOT EXISTS idx_course_quiz_responses_attempt ON course_quiz_responses(attempt_id);

-- Badges
CREATE TABLE IF NOT EXISTS course_badges (
  id SERIAL PRIMARY KEY,
  slug TEXT NOT NULL UNIQUE,
  name TEXT NOT NULL,
  description TEXT,
  icon TEXT,
  criteria_type TEXT NOT NULL,
  criteria_value JSONB DEFAULT '{}'
);

-- User Badges
CREATE TABLE IF NOT EXISTS course_user_badges (
  id SERIAL PRIMARY KEY,
  enrollment_id INTEGER NOT NULL REFERENCES course_enrollments(id) ON DELETE CASCADE,
  badge_id INTEGER NOT NULL REFERENCES course_badges(id) ON DELETE CASCADE,
  earned_at TIMESTAMPTZ DEFAULT NOW()
);
CREATE UNIQUE INDEX IF NOT EXISTS idx_course_user_badges_unique ON course_user_badges(enrollment_id, badge_id);

-- Course Activity Log
CREATE TABLE IF NOT EXISTS course_activity_log (
  id SERIAL PRIMARY KEY,
  enrollment_id INTEGER NOT NULL REFERENCES course_enrollments(id) ON DELETE CASCADE,
  event_type TEXT NOT NULL,
  details JSONB DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_course_activity_log_enrollment ON course_activity_log(enrollment_id);
CREATE INDEX IF NOT EXISTS idx_course_activity_log_event ON course_activity_log(event_type);
CREATE INDEX IF NOT EXISTS idx_course_activity_log_created ON course_activity_log(created_at);

-- Seed default badges
INSERT INTO course_badges (slug, name, description, icon, criteria_type, criteria_value) VALUES
  ('first_lesson', 'First Steps', 'Completed your first lesson', '1', 'lesson_count', '{"count": 1}'),
  ('quarter_complete', 'Making Progress', 'Completed 25% of the course', '2', 'progress_percent', '{"percent": 25}'),
  ('half_complete', 'Halfway There', 'Completed 50% of the course', '3', 'progress_percent', '{"percent": 50}'),
  ('three_quarter_complete', 'Almost There', 'Completed 75% of the course', '4', 'progress_percent', '{"percent": 75}'),
  ('course_graduate', 'Course Graduate', 'Completed the entire course', '5', 'progress_percent', '{"percent": 100}'),
  ('quiz_ace', 'Quiz Ace', 'Scored 90% or higher on a chapter quiz', '6', 'quiz_score', '{"score_threshold": 90}'),
  ('perfect_score', 'Perfect Score', 'Got 100% on any quiz', '7', 'quiz_score', '{"score_threshold": 100}'),
  ('streak_7', 'Week Warrior', '7-day study streak', '8', 'streak', '{"days": 7}'),
  ('streak_30', 'Month Master', '30-day study streak', '9', 'streak', '{"days": 30}'),
  ('mock_exam_ready', 'Exam Ready', 'Passed a full mock exam with 80%+', '10', 'mock_exam', '{"score_threshold": 80}')
ON CONFLICT (slug) DO NOTHING;
