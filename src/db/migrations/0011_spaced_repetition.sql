-- ─── Spaced Repetition Cards ─────────────────────────────────────────────────
-- SM-2 algorithm state for each glossary term per enrollment

CREATE TABLE IF NOT EXISTS spaced_repetition_cards (
  id                SERIAL PRIMARY KEY,
  enrollment_id     INTEGER NOT NULL REFERENCES course_enrollments(id) ON DELETE CASCADE,
  term_key          TEXT NOT NULL,
  ease_factor       TEXT NOT NULL DEFAULT '2.5',
  interval_days     INTEGER NOT NULL DEFAULT 1,
  repetitions       INTEGER NOT NULL DEFAULT 0,
  next_review_date  TIMESTAMPTZ NOT NULL DEFAULT now(),
  last_review_date  TIMESTAMPTZ,
  quality           INTEGER,
  status            TEXT NOT NULL DEFAULT 'new',  -- 'new' | 'learning' | 'review' | 'graduated'
  created_at        TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at        TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Unique constraint: one card per term per enrollment
CREATE UNIQUE INDEX IF NOT EXISTS idx_sr_cards_enrollment_term
  ON spaced_repetition_cards (enrollment_id, term_key);

CREATE INDEX IF NOT EXISTS idx_sr_cards_enrollment
  ON spaced_repetition_cards (enrollment_id);

CREATE INDEX IF NOT EXISTS idx_sr_cards_next_review
  ON spaced_repetition_cards (next_review_date);

CREATE INDEX IF NOT EXISTS idx_sr_cards_status
  ON spaced_repetition_cards (status);
