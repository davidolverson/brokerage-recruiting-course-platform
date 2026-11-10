-- Carry the TCPA consent record across into contacts.
--
-- 0017 put consent on `leads`, which is where it is collected. But `contacts`
-- is where outreach is actually run from — it is the deduplicated, merged list
-- a campaign selects against — and upsertContact was copying a lead's phone
-- into it while dropping the consent pair entirely. The evidence was being lost
-- at exactly the boundary where it is needed.
--
-- Worse, the phone column merges with COALESCE(EXCLUDED.phone, contacts.phone),
-- so any later non-null phone wins. A CSV import or an unconsented submission
-- for the same email could silently replace a number that had been consented
-- to, leaving a row that looked no different from a consented one.
--
-- Same pair, same meaning as on leads: the timestamp is server-generated, and
-- consent_phone is the exact number the tick was given for. Because every read
-- compares consent_phone against the row's CURRENT phone, a contact whose phone
-- is later replaced stops reading as consented on its own — which is precisely
-- the behaviour the merge above needs.
--
-- No backfill. Contacts that predate this have no consent and are call-only;
-- that is correct, not a gap. Consent cannot be granted retroactively.
ALTER TABLE contacts ADD COLUMN IF NOT EXISTS consent_at    TIMESTAMPTZ;
ALTER TABLE contacts ADD COLUMN IF NOT EXISTS consent_phone TEXT;

-- "Which contacts may we lawfully text" is the query that gets run before any
-- SMS campaign. There is no SMS sender in this codebase today; this index is
-- here so that the day one is added, the safe query is the cheap one.
CREATE INDEX IF NOT EXISTS idx_contacts_consent_at ON contacts (consent_at) WHERE consent_at IS NOT NULL;
