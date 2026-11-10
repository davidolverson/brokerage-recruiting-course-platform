-- Migration: 0005_operational_tables
-- Purpose: Notification queue and persistent rate limiting

CREATE TABLE IF NOT EXISTS notification_queue (
  id SERIAL PRIMARY KEY,
  recipient_email TEXT NOT NULL,
  type TEXT NOT NULL CHECK (type IN ('new_lead', 'lead_assigned', 'weekly_digest')),
  payload JSONB NOT NULL,
  sent_at TIMESTAMPTZ,
  error TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_notification_queue_pending ON notification_queue(created_at) WHERE sent_at IS NULL;

CREATE TABLE IF NOT EXISTS rate_limits (
  key TEXT PRIMARY KEY,
  count INTEGER DEFAULT 1,
  window_start TIMESTAMPTZ DEFAULT NOW()
);
