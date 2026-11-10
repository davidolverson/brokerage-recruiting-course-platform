-- 0015_training_calendar.sql
-- Training & Events calendar: events, RSVPs ("who's going"), and subscribers.
-- Purely additive — three new isolated tables. Safe to apply directly to prod.
-- Applied to prod on: <fill in when applied>

-- ── Events ───────────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS training_events (
  id           serial PRIMARY KEY,
  slug         text NOT NULL UNIQUE,
  title        text NOT NULL,
  category     text NOT NULL,           -- branch|example|newagent|prelicense|community|broker|popup
  description  text,
  host         text,
  location     text,
  image_url    text,
  start_time   text,                    -- 'HH:MM' (24h) or NULL for all-day / TBD
  end_time     text,
  capacity     integer,
  recurrence   jsonb NOT NULL DEFAULT '{}'::jsonb,
  tentative    boolean NOT NULL DEFAULT false,
  active       boolean NOT NULL DEFAULT true,
  sort_order   integer NOT NULL DEFAULT 0,
  created_at   timestamptz NOT NULL DEFAULT now(),
  updated_at   timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS idx_training_events_active   ON training_events(active);
CREATE INDEX IF NOT EXISTS idx_training_events_category ON training_events(category);

-- ── RSVPs (one row per person per occurrence) ────────────────────────────────
CREATE TABLE IF NOT EXISTS training_rsvps (
  id             serial PRIMARY KEY,
  occurrence_key text NOT NULL,         -- 'slug:YYYY-MM-DD'
  event_slug     text NOT NULL,
  event_date     date NOT NULL,
  name           text NOT NULL,
  email          text NOT NULL,
  status         text NOT NULL,         -- going|maybe|not_going
  created_at     timestamptz NOT NULL DEFAULT now(),
  updated_at     timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT uq_training_rsvps_occ_email UNIQUE (occurrence_key, email)
);
CREATE INDEX IF NOT EXISTS idx_training_rsvps_occ   ON training_rsvps(occurrence_key);
CREATE INDEX IF NOT EXISTS idx_training_rsvps_date  ON training_rsvps(event_date);
CREATE INDEX IF NOT EXISTS idx_training_rsvps_email ON training_rsvps(email);

-- ── Subscribers (the "manifest" the team emails from) ────────────────────────
CREATE TABLE IF NOT EXISTS training_subscribers (
  id                serial PRIMARY KEY,
  email             text NOT NULL UNIQUE,
  name              text,
  categories        jsonb NOT NULL DEFAULT '[]'::jsonb,  -- interest categories, empty = all
  active            boolean NOT NULL DEFAULT true,
  unsubscribe_token text NOT NULL,
  created_at        timestamptz NOT NULL DEFAULT now(),
  updated_at        timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS idx_training_subscribers_active ON training_subscribers(active);

-- ── Seed: the office manager's Example Investor Team / Acme Realty training calendar ──────────────────
INSERT INTO training_events (slug, title, category, description, host, start_time, end_time, capacity, recurrence, tentative, sort_order) VALUES
('branch-mtg','Branch Meeting','branch','Connect with the other members of Acme across the region to learn, grow your skills, and stay current with our market!',NULL,'11:00','13:00',80,'{"type":"nthWeekday","weekday":2,"n":1}'::jsonb,false,10),
('od-team','Example Investor Team Meeting','example','Sharpen your skills and connect with your team at the weekly Example Investor Team meeting.',NULL,'11:00','12:00',40,'{"type":"weekly","weekday":2,"exceptNth":[1]}'::jsonb,false,20),
('od-admin','Example Investor Team Admin Connect','example','For any Example Investor Team members who have upcoming listings, or buyers/sellers under contract, to connect with their transaction coordinator and make sure everyone is on the same page on how to best service the client.',NULL,'10:00','10:45',25,'{"type":"weekly","weekday":3}'::jsonb,false,30),
('agent101','Agent 101 — 30-Minute Office Hours','newagent','Join us for a 30-minute pop-up to build the skills necessary to get your real estate business off the ground. Designed for agents who have sold 25 homes or less in their career and are looking to jump-start their career in real estate.',NULL,'10:00','10:30',8,'{"type":"weekly","weekday":4}'::jsonb,false,40),
('pickleball','First Friday''s Pickleball','community','Join the Example Investor Team community for First Friday pickleball! Details to come.',NULL,NULL,NULL,24,'{"type":"nthWeekday","weekday":5,"n":1}'::jsonb,true,50),
('foodbank','Food Bank Volunteering','community','Give back with the team at our weekly food bank volunteering. Details to come.',NULL,'15:00','17:00',16,'{"type":"weekly","weekday":4}'::jsonb,false,60),
('broker-wt','Wednesday Walkthrough with Demo Speaker','broker','Join our broker Demo Speaker for a Wednesday Walkthrough of all you need to know about the latest in real estate law and contracts — so you stay current and at the highest level of professionalism and compliance for those you represent. A 4-week series.','Demo Speaker','10:00','11:00',60,'{"type":"weeklyCount","weekday":3,"start":"2026-07-15","count":4}'::jsonb,false,70),
('popup-sda','Pop-Up Class: Self-Directed Accounts','popup','Our goal is to educate attendees on strategies that can help them move toward greater financial independence, create additional streams of income, and build long-term wealth for themselves and their families. We''ll discuss how self-directed investing and private lending can be used as tools to help preserve capital, increase retirement income, and create opportunities to develop generational wealth and financial security. Expect real-world examples, practical strategies, and actionable information, plus time for questions and discussion.','Demo Speaker · F&M Private Lending','11:00','13:30',30,'{"type":"oneoff","date":"2026-07-23"}'::jsonb,false,80),
('popup-pl','Pop-Up Class: Private Lending','popup','Our goal is to educate attendees on strategies that can help them move toward greater financial independence, create additional streams of income, and build long-term wealth for themselves and their families. We''ll discuss how self-directed investing and private lending can be used as tools to help preserve capital, increase retirement income, and create opportunities to develop generational wealth and financial security. Expect real-world examples, practical strategies, and actionable information, plus time for questions and discussion.','Demo Speaker · F&M Private Lending','11:00','13:30',30,'{"type":"oneoff","date":"2026-08-20"}'::jsonb,false,90)
ON CONFLICT (slug) DO NOTHING;
