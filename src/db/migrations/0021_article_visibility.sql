-- 0021_article_visibility.sql
--
-- Phase 1 of the onboarding hub: a members-only area agents can be pointed at
-- instead of six separate emails with attachments.
--
-- Deliberately NOT a second content system. The office manager already writes and publishes
-- in /articles; a page destined for the handbook is the same shape as an
-- education article, so it is the same table, the same editor and the same
-- mental model, with one extra switch. A parallel CMS would be more code and
-- one more thing to teach.
--
-- 'public'  -> /education, listed in the sitemap, visible to anyone
-- 'members' -> /handbook, requires a signed-in account, never in the sitemap
--
-- Defaulting to 'public' preserves the behaviour of every existing row. The
-- handbook holds fee schedules, LLC information and affiliated business
-- disclosures, so the read path has to exclude 'members' from every public
-- surface — that is enforced in code and pinned by tests, not by this default.

ALTER TABLE articles
  ADD COLUMN IF NOT EXISTS visibility text NOT NULL DEFAULT 'public';

-- Ordering within the handbook is independent of the education hub's ordering.
ALTER TABLE articles
  ADD COLUMN IF NOT EXISTS handbook_section text;

CREATE INDEX IF NOT EXISTS idx_articles_visibility_status
  ON articles(visibility, status, sort_order);
