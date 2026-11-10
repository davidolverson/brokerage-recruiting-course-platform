-- Contacts + Mass Email Campaigns
-- Unifies every email captured on the site into one table, plus CSV imports.

CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TABLE IF NOT EXISTS contacts (
  id                 serial PRIMARY KEY,
  email              text NOT NULL UNIQUE,
  first_name         text,
  last_name          text,
  phone              text,
  sources            jsonb NOT NULL DEFAULT '[]',
  team_slug          text,
  tags               jsonb NOT NULL DEFAULT '[]',
  unsubscribed       boolean NOT NULL DEFAULT false,
  unsubscribed_at    timestamptz,
  unsubscribe_token  text NOT NULL UNIQUE DEFAULT gen_random_uuid()::text,
  created_at         timestamptz NOT NULL DEFAULT now(),
  updated_at         timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS idx_contacts_unsubscribed ON contacts(unsubscribed);
CREATE INDEX IF NOT EXISTS idx_contacts_team_slug ON contacts(team_slug);
CREATE INDEX IF NOT EXISTS idx_contacts_tags ON contacts USING gin(tags);
CREATE INDEX IF NOT EXISTS idx_contacts_sources ON contacts USING gin(sources);

CREATE TABLE IF NOT EXISTS campaigns (
  id               serial PRIMARY KEY,
  subject          text NOT NULL,
  html_body        text NOT NULL,
  text_body        text NOT NULL,
  segment_filter   jsonb NOT NULL DEFAULT '{}',
  status           text NOT NULL DEFAULT 'draft',
  created_by       text NOT NULL,
  recipient_count  integer NOT NULL DEFAULT 0,
  sent_count       integer NOT NULL DEFAULT 0,
  failed_count     integer NOT NULL DEFAULT 0,
  created_at       timestamptz NOT NULL DEFAULT now(),
  sent_at          timestamptz
);

CREATE TABLE IF NOT EXISTS campaign_recipients (
  id            serial PRIMARY KEY,
  campaign_id   integer NOT NULL REFERENCES campaigns(id) ON DELETE CASCADE,
  contact_id    integer NOT NULL REFERENCES contacts(id) ON DELETE CASCADE,
  status        text NOT NULL DEFAULT 'queued',
  sent_at       timestamptz,
  error         text,
  UNIQUE(campaign_id, contact_id)
);
CREATE INDEX IF NOT EXISTS idx_campaign_recipients_campaign_status ON campaign_recipients(campaign_id, status);

CREATE TABLE IF NOT EXISTS segments (
  id          serial PRIMARY KEY,
  name        text NOT NULL,
  filter      jsonb NOT NULL,
  created_by  text NOT NULL,
  created_at  timestamptz NOT NULL DEFAULT now()
);

-- ── Backfill: leads (richest data — first/last name, phone, team) ──────────
INSERT INTO contacts (email, first_name, last_name, phone, sources, team_slug, tags)
SELECT
  lower(trim(l.email)) AS email,
  (array_agg(l.first_name) FILTER (WHERE l.first_name IS NOT NULL AND l.first_name <> ''))[1],
  (array_agg(l.last_name) FILTER (WHERE l.last_name IS NOT NULL AND l.last_name <> ''))[1],
  (array_agg(l.phone) FILTER (WHERE l.phone IS NOT NULL AND l.phone <> ''))[1],
  jsonb_agg(DISTINCT ('lead:' || l.form_type)),
  (array_agg(COALESCE(l.assigned_team, l.selected_team) ORDER BY l.created_at DESC)
    FILTER (WHERE COALESCE(l.assigned_team, l.selected_team) IS NOT NULL))[1],
  '[]'::jsonb
FROM leads l
WHERE l.email IS NOT NULL AND trim(l.email) <> ''
GROUP BY lower(trim(l.email))
ON CONFLICT (email) DO NOTHING;

-- ── Backfill: training_subscribers ──────────────────────────────────────────
INSERT INTO contacts (email, first_name, sources, tags)
SELECT lower(trim(ts.email)), ts.name, '["training_subscriber"]'::jsonb, '[]'::jsonb
FROM training_subscribers ts
WHERE ts.email IS NOT NULL AND trim(ts.email) <> ''
ON CONFLICT (email) DO UPDATE SET
  sources = (SELECT jsonb_agg(DISTINCT v) FROM jsonb_array_elements_text(contacts.sources || EXCLUDED.sources) v),
  first_name = COALESCE(contacts.first_name, EXCLUDED.first_name),
  updated_at = now();

-- ── Backfill: training_rsvps ─────────────────────────────────────────────────
INSERT INTO contacts (email, first_name, sources, tags)
SELECT lower(trim(r.email)), (array_agg(r.name))[1], '["training_rsvp"]'::jsonb, '[]'::jsonb
FROM training_rsvps r
WHERE r.email IS NOT NULL AND trim(r.email) <> ''
GROUP BY lower(trim(r.email))
ON CONFLICT (email) DO UPDATE SET
  sources = (SELECT jsonb_agg(DISTINCT v) FROM jsonb_array_elements_text(contacts.sources || EXCLUDED.sources) v),
  first_name = COALESCE(contacts.first_name, EXCLUDED.first_name),
  updated_at = now();

-- ── Backfill: course_enrollments (no email column — join through user) ──────
INSERT INTO contacts (email, first_name, sources, tags)
SELECT lower(trim(u.email)), (array_agg(u.name))[1], '["course_enrollee"]'::jsonb, '[]'::jsonb
FROM course_enrollments ce
JOIN "user" u ON u.id = ce.user_id
WHERE u.email IS NOT NULL AND trim(u.email) <> ''
GROUP BY lower(trim(u.email))
ON CONFLICT (email) DO UPDATE SET
  sources = (SELECT jsonb_agg(DISTINCT v) FROM jsonb_array_elements_text(contacts.sources || EXCLUDED.sources) v),
  first_name = COALESCE(contacts.first_name, EXCLUDED.first_name),
  updated_at = now();
