-- ─── Mastery Tracking Tables ─────────────────────────────────────────────────
-- Topic-level mastery scores aligned to Virginia PSI exam topic weights
-- Pass readiness snapshots for trend analysis and prediction

-- topic_mastery: one row per topic per enrollment, updated after each quiz
CREATE TABLE IF NOT EXISTS topic_mastery (
  id                   SERIAL PRIMARY KEY,
  enrollment_id        INTEGER NOT NULL REFERENCES course_enrollments(id) ON DELETE CASCADE,
  topic_slug           TEXT NOT NULL,
  topic_name           TEXT NOT NULL,
  exam_weight          INTEGER NOT NULL,            -- PSI exam weight percentage (e.g. 19 for Contracts)
  mastery_level        TEXT NOT NULL DEFAULT 'not_started',
                                                    -- 'not_started'|'attempted'|'familiar'|'proficient'|'mastered'
  mastery_score        INTEGER NOT NULL DEFAULT 0,  -- 0-100
  questions_attempted  INTEGER NOT NULL DEFAULT 0,
  questions_correct    INTEGER NOT NULL DEFAULT 0,
  last_assessed_at     TIMESTAMPTZ,
  created_at           TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at           TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE UNIQUE INDEX IF NOT EXISTS idx_topic_mastery_enrollment_slug
  ON topic_mastery (enrollment_id, topic_slug);

CREATE INDEX IF NOT EXISTS idx_topic_mastery_enrollment
  ON topic_mastery (enrollment_id);

CREATE INDEX IF NOT EXISTS idx_topic_mastery_level
  ON topic_mastery (mastery_level);

-- pass_readiness_snapshots: point-in-time snapshots for trend lines and recommendations
CREATE TABLE IF NOT EXISTS pass_readiness_snapshots (
  id                          SERIAL PRIMARY KEY,
  enrollment_id               INTEGER NOT NULL REFERENCES course_enrollments(id) ON DELETE CASCADE,
  snapshot_date               TIMESTAMPTZ NOT NULL DEFAULT now(),
  overall_score               INTEGER NOT NULL DEFAULT 0,              -- 0-100 weighted average
  predicted_pass_probability  INTEGER NOT NULL DEFAULT 0,              -- 0-100 final prediction
  topic_scores                JSONB NOT NULL DEFAULT '{}',             -- { topicSlug: score }
  mock_exam_scores            JSONB NOT NULL DEFAULT '[]',             -- array of recent mock scores
  recommendation              TEXT,                                    -- "Study Contracts next"
  created_at                  TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_pass_readiness_enrollment
  ON pass_readiness_snapshots (enrollment_id);

CREATE INDEX IF NOT EXISTS idx_pass_readiness_date
  ON pass_readiness_snapshots (snapshot_date);
