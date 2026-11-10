-- ─── The table every other migration assumed ─────────────────────────────────
--
-- `leads` is the oldest table in this database and nothing in this repository
-- ever created it. The chain starts at 0001_extend_leads.sql, which ALTERs a
-- table that, on any database built from these files, does not exist. Applying
-- all of them in order to an empty Postgres failed 10 of 25 times, and the
-- failures cascade: 0004, 0017 and the course chain all depend on it directly
-- or on something it blocks.
--
-- The practical cost is that the schema could not be rebuilt. There was no way
-- to stand up a staging copy, no way to test a migration before production saw
-- it, and no way to recover the shape of the database from the repository.
--
-- ⛔ This is reconstructed from `src/db/schema.ts`, the repository's own Drizzle
-- declaration, NOT from the production database, which nobody here can read.
-- It is the pre-0001 shape: the admin columns (current_status, assigned_to,
-- assigned_team, partner_ref, updated_at) are deliberately left to 0001, and
-- the TCPA consent columns to the migration that introduces them, so the chain
-- still tells the truth about the order things were added in.
--
-- ⚠️ Production already has this table and `IF NOT EXISTS` makes this a no-op
-- there. If production has since drifted from schema.ts, this file reproduces
-- schema.ts, not production. Reconciling the two needs a dump of the live
-- schema, which is a separate job.
--
-- 🔴 NOT YET VERIFIED FROM EMPTY (2026-10-02). The point of this file is that
-- `for f in src/db/migrations/*.sql; do psql -f "$f"; done` against a blank
-- database completes without error. That run was started and never finished:
-- Docker on the authoring machine stopped responding partway through, and the
-- only other local Postgres had its data directory held by another process.
-- Until somebody completes that run, treat "the chain builds from empty" as the
-- intent of this file and not as a measured fact. The columns here are the
-- pre-0001 subset of schema.ts, so the likely failure mode if it is wrong is a
-- later migration referencing a column that no migration adds.

CREATE TABLE IF NOT EXISTS leads (
  id             SERIAL PRIMARY KEY,
  first_name     TEXT,
  last_name      TEXT,
  email          TEXT,
  phone          TEXT,
  form_type      TEXT NOT NULL,
  source_route   TEXT,
  source_section TEXT,
  selected_path  TEXT,
  selected_team  TEXT,
  campaign_id    TEXT,
  metadata       JSONB DEFAULT '{}'::jsonb,
  created_at     TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_leads_form_type ON leads (form_type);
CREATE INDEX IF NOT EXISTS idx_leads_selected_team ON leads (selected_team);
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads (created_at);
