-- ─── Course Notes ─────────────────────────────────────────────────────────────
-- Smart note-taking system: lesson notes, quiz notes, highlights, bookmarks

CREATE TABLE IF NOT EXISTS course_notes (
  id                SERIAL PRIMARY KEY,
  enrollment_id     INTEGER NOT NULL REFERENCES course_enrollments(id) ON DELETE CASCADE,
  lesson_id         INTEGER REFERENCES course_lessons(id) ON DELETE SET NULL,
  quiz_attempt_id   INTEGER REFERENCES course_quiz_attempts(id) ON DELETE SET NULL,
  note_type         TEXT NOT NULL DEFAULT 'lesson',    -- 'lesson' | 'quiz' | 'highlight' | 'bookmark'
  content           TEXT NOT NULL,
  highlighted_text  TEXT,
  page_context      TEXT,                              -- moduleSlug/chapterSlug/lessonSlug
  tags              TEXT[] NOT NULL DEFAULT '{}',      -- 'important' | 'review-later' | 'confused' | 'exam-topic'
  created_at        TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at        TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_course_notes_enrollment
  ON course_notes (enrollment_id);

CREATE INDEX IF NOT EXISTS idx_course_notes_lesson
  ON course_notes (lesson_id);

CREATE INDEX IF NOT EXISTS idx_course_notes_quiz_attempt
  ON course_notes (quiz_attempt_id);

CREATE INDEX IF NOT EXISTS idx_course_notes_type
  ON course_notes (note_type);

CREATE INDEX IF NOT EXISTS idx_course_notes_created
  ON course_notes (created_at);

-- GIN index for fast tag array queries
CREATE INDEX IF NOT EXISTS idx_course_notes_tags
  ON course_notes USING GIN (tags);
