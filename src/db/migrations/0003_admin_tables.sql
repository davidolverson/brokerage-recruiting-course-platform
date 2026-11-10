-- Migration: 0003_admin_tables
-- Purpose: Admin user profiles and invite tokens

CREATE TABLE IF NOT EXISTS admin_users (
  id TEXT PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  name TEXT NOT NULL,
  role TEXT NOT NULL CHECK (role IN ('owner', 'team_leader', 'staff')),
  team_slug TEXT,
  avatar_url TEXT,
  is_active BOOLEAN DEFAULT true,
  notification_preferences JSONB DEFAULT '{"instant_new_lead": true, "instant_assignment": true, "weekly_digest": true}',
  last_login_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS invite_tokens (
  id SERIAL PRIMARY KEY,
  email TEXT NOT NULL,
  role TEXT NOT NULL CHECK (role IN ('team_leader', 'staff')),
  team_slug TEXT,
  token TEXT NOT NULL UNIQUE,
  invited_by TEXT NOT NULL REFERENCES admin_users(id),
  expires_at TIMESTAMPTZ NOT NULL,
  used_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_invite_tokens_pending ON invite_tokens(token) WHERE used_at IS NULL;
