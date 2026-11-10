-- Migration: Add PLE (Post-License Education) support
-- Adds course_type to modules and enrollments, creates PLE certificate and time enforcement tables

-- Add course_type to course_modules (default to 'pre-license' for existing rows)
ALTER TABLE course_modules ADD COLUMN IF NOT EXISTS course_type TEXT NOT NULL DEFAULT 'pre-license';

-- Add course_type to course_enrollments
ALTER TABLE course_enrollments ADD COLUMN IF NOT EXISTS course_type TEXT NOT NULL DEFAULT 'pre-license';

-- Drop old unique index on enrollments (was just userId, now needs userId + courseType)
DROP INDEX IF EXISTS idx_course_enrollments_user;
CREATE UNIQUE INDEX IF NOT EXISTS idx_course_enrollments_user_type ON course_enrollments (user_id, course_type);
CREATE INDEX IF NOT EXISTS idx_course_enrollments_type ON course_enrollments (course_type);

-- PLE Certificates table
CREATE TABLE IF NOT EXISTS ple_certificates (
  id SERIAL PRIMARY KEY,
  enrollment_id INTEGER NOT NULL REFERENCES course_enrollments(id) ON DELETE CASCADE,
  user_id TEXT NOT NULL REFERENCES "user"(id) ON DELETE CASCADE,
  certificate_id TEXT NOT NULL UNIQUE,
  licensee_name TEXT NOT NULL,
  license_number TEXT,
  course_name TEXT NOT NULL DEFAULT 'VA Post-License Real Estate Ed',
  course_approval_number TEXT,
  course_hours INTEGER NOT NULL DEFAULT 30,
  completion_date TIMESTAMPTZ NOT NULL,
  provider_name TEXT NOT NULL DEFAULT 'Acme Realty Real Estate Academy',
  provider_number TEXT NOT NULL DEFAULT '0000',
  director_name TEXT,
  director_signature TEXT,
  dpor_statement TEXT NOT NULL DEFAULT 'This course is approved by the Virginia Real Estate Board for Post License Education pursuant to Section 54.1-2105.01 of the Code of Virginia.',
  reported_to_dpor BOOLEAN DEFAULT FALSE,
  reported_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE UNIQUE INDEX IF NOT EXISTS idx_ple_certificates_enrollment ON ple_certificates (enrollment_id);
CREATE INDEX IF NOT EXISTS idx_ple_certificates_user ON ple_certificates (user_id);
CREATE INDEX IF NOT EXISTS idx_ple_certificates_reported ON ple_certificates (reported_to_dpor);

-- Time enforcement table (for PLE minimum time requirements)
CREATE TABLE IF NOT EXISTS course_lesson_time_enforcement (
  id SERIAL PRIMARY KEY,
  enrollment_id INTEGER NOT NULL REFERENCES course_enrollments(id) ON DELETE CASCADE,
  lesson_id INTEGER NOT NULL REFERENCES course_lessons(id) ON DELETE CASCADE,
  minimum_seconds INTEGER NOT NULL,
  actual_seconds INTEGER DEFAULT 0,
  enforced BOOLEAN DEFAULT TRUE,
  can_proceed BOOLEAN DEFAULT FALSE,
  last_heartbeat TIMESTAMPTZ
);

CREATE UNIQUE INDEX IF NOT EXISTS idx_time_enforcement_unique ON course_lesson_time_enforcement (enrollment_id, lesson_id);
