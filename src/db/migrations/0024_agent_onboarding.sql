-- 0024_agent_onboarding.sql
--
-- The internal ops tracker. Her ~50-step checklist STAYS a Google Sheet; this
-- holds only the eight milestones that answer "where is each new agent up to".
--
-- One table, milestones in jsonb rather than a rows-per-step child table: the
-- set is fixed and small, every read wants all of it, and nothing joins on an
-- individual step. A child table would buy nothing and cost a join.
--
-- email is UNIQUE because it is the join key for the one derived milestone
-- (handbook access = an active agent account with this email). Two rows for the
-- same person would make that answer ambiguous.
--
-- Purely additive: one new table, no existing table touched.

CREATE TABLE IF NOT EXISTS agent_onboarding (
  id          serial PRIMARY KEY,
  name        text NOT NULL,
  email       text NOT NULL,
  team_slug   text,
  started_at  date NOT NULL DEFAULT CURRENT_DATE,
  milestones  jsonb NOT NULL DEFAULT '{}'::jsonb,
  notes       text,
  archived    boolean NOT NULL DEFAULT false,
  created_by  text,
  created_at  timestamptz NOT NULL DEFAULT now(),
  updated_at  timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT uq_agent_onboarding_email UNIQUE (email)
);

CREATE INDEX IF NOT EXISTS idx_agent_onboarding_team ON agent_onboarding(team_slug);
CREATE INDEX IF NOT EXISTS idx_agent_onboarding_archived ON agent_onboarding(archived);
