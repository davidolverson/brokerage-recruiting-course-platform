-- TCPA consent record for lead phone numbers.
--
-- Every public form on this site collects a phone, and four form types make it
-- mandatory, but nothing recorded whether the visitor agreed to be called or
-- texted at that number. The consent record IS the evidence, and it is the one
-- thing that cannot be added retroactively: rows captured before this migration
-- have no consent and must be treated as call-only.
--
-- Consent attaches to the NUMBER, not the person, so the number consented to is
-- stored beside the timestamp. A row whose phone is later corrected no longer
-- matches, and must read as unconsented rather than inheriting permission for a
-- number nobody agreed to.
ALTER TABLE leads ADD COLUMN IF NOT EXISTS consent_at    TIMESTAMPTZ;
ALTER TABLE leads ADD COLUMN IF NOT EXISTS consent_phone TEXT;

-- "Which rows may we lawfully text" is the query the team will actually run
-- before any campaign.
CREATE INDEX IF NOT EXISTS idx_leads_consent_at ON leads (consent_at) WHERE consent_at IS NOT NULL;
