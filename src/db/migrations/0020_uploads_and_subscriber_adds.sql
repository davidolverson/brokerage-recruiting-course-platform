-- 0020_uploads_and_subscriber_adds.sql
--
-- Two gaps that kept the office manager dependent on a developer:
--
-- 1. Event and article images were a bare "Image URL" text box. She had no way
--    to put a file on the site, so every flyer had to come through me. There is
--    no object storage configured for this app (no R2/S3 credentials in the
--    environment), and the container filesystem is wiped on each deploy, so the
--    bytes live in Postgres and are served by /api/uploads/[id]. Flyers are a
--    few hundred KB and there will be a handful, so this is well within Neon.
--
-- 2. training_subscribers could only be written by an agent subscribing on the
--    public page. The admin API was GET-only. That is why the list has been
--    empty and the "send update" button has had nobody to send to.

CREATE TABLE IF NOT EXISTS uploads (
  id          serial PRIMARY KEY,
  filename    text NOT NULL,
  mime        text NOT NULL,
  bytes       bytea NOT NULL,
  size_bytes  integer NOT NULL,
  sha256      text NOT NULL UNIQUE,
  width       integer,
  height      integer,
  created_by  text,
  created_at  timestamptz NOT NULL DEFAULT now()
);

-- sha256 is UNIQUE so re-uploading the same file returns the existing row
-- instead of storing a second copy of it.
CREATE INDEX IF NOT EXISTS idx_uploads_created_at ON uploads(created_at DESC);

-- Lets the subscribers admin record who added a row by hand versus who signed
-- themselves up, so an unsubscribe complaint can be traced.
ALTER TABLE training_subscribers ADD COLUMN IF NOT EXISTS added_by text;
ALTER TABLE training_subscribers ADD COLUMN IF NOT EXISTS source text NOT NULL DEFAULT 'self';
