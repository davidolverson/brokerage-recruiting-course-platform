CREATE TABLE IF NOT EXISTS branch_settings (
  id INTEGER PRIMARY KEY DEFAULT 1 CHECK (id = 1),
  branch_name TEXT DEFAULT 'Acme Realty',
  contact_email TEXT,
  contact_phone TEXT,
  scheduler_url TEXT,
  default_team TEXT,
  settings JSONB DEFAULT '{}',
  updated_at TIMESTAMPTZ DEFAULT NOW()
);
INSERT INTO branch_settings (id) VALUES (1) ON CONFLICT DO NOTHING;
