-- 0022_subscriber_consent_evidence.sql
--
-- Admin-added subscribers had no evidence trail. Someone pastes a list, the
-- rows appear, and months later nobody can answer "why is this person on it?"
--
-- This repo already holds that line for phone numbers: leads.consent_at and
-- leads.consent_phone exist precisely so a tick can be evidenced later, and the
-- rule is that consent is recorded, never inferred. Email is a lower bar than
-- TCPA, but the same reasoning applies — the point of a record is that it
-- survives the person who made it.
--
-- 0020 already added added_by and source ('self' | 'admin'). This adds the
-- attestation itself: when it was claimed, and on what basis.

ALTER TABLE training_subscribers ADD COLUMN IF NOT EXISTS consent_at timestamptz;
ALTER TABLE training_subscribers ADD COLUMN IF NOT EXISTS consent_basis text;

-- Self-serve subscribers consented by using the form; their created_at IS the
-- moment, so backfill it rather than leaving a misleading NULL that would read
-- as "no consent recorded".
UPDATE training_subscribers
   SET consent_at = created_at,
       consent_basis = 'Subscribed via the public form on the training calendar'
 WHERE consent_at IS NULL
   AND COALESCE(source, 'self') = 'self';

CREATE INDEX IF NOT EXISTS idx_training_subscribers_source ON training_subscribers(source);
