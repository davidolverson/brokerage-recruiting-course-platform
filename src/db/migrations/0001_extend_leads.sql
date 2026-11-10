-- Migration: 0001_extend_leads
-- Purpose: Add admin-related columns to existing leads table
-- Safety: All columns nullable or defaulted. Non-destructive. Safe for live data.

ALTER TABLE leads ADD COLUMN IF NOT EXISTS current_status TEXT DEFAULT 'new';
ALTER TABLE leads ADD COLUMN IF NOT EXISTS assigned_to TEXT;
ALTER TABLE leads ADD COLUMN IF NOT EXISTS assigned_team TEXT;
ALTER TABLE leads ADD COLUMN IF NOT EXISTS partner_ref TEXT;
ALTER TABLE leads ADD COLUMN IF NOT EXISTS updated_at TIMESTAMPTZ DEFAULT NOW();

-- Backfill: ensure all existing leads have current_status
UPDATE leads SET current_status = 'new' WHERE current_status IS NULL;

-- Backfill: extract partner_ref from metadata JSONB where it exists
UPDATE leads SET partner_ref = metadata->>'partner_ref'
WHERE metadata->>'partner_ref' IS NOT NULL AND partner_ref IS NULL;

-- Indexes for admin queries
CREATE INDEX IF NOT EXISTS idx_leads_current_status ON leads(current_status);
CREATE INDEX IF NOT EXISTS idx_leads_assigned_team ON leads(assigned_team);
CREATE INDEX IF NOT EXISTS idx_leads_updated_at ON leads(updated_at DESC);
CREATE INDEX IF NOT EXISTS idx_leads_partner_ref ON leads(partner_ref) WHERE partner_ref IS NOT NULL;
