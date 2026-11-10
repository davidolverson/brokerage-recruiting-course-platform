-- ─── A second live subscription for one member ───────────────────────────────
--
-- `memberships` holds one row per user, keyed on user_id, with a single
-- stripe_subscription_id. That made a second completed checkout silently
-- destructive: activating it overwrote the column, the first subscription kept
-- billing the member every month, and nothing in the product referred to it
-- again. The member is charged twice and the evidence is only in Stripe.
--
-- The duplicate guard at checkout reads Stripe before opening a session, so
-- this needs two checkouts close enough together to both pass that read. The
-- Join button disables on click, but it re-enables after a failed attempt,
-- which is a realistic way in.
--
-- Rather than choose which subscription wins, the conflict is recorded. The
-- membership of record stays the one already active; the newcomer is written
-- here for staff to cancel and refund, and the roster says so out loud. An
-- automatic cancellation is not attempted: cancelling a paying customer's
-- subscription without a human looking is a worse failure than showing it.

ALTER TABLE memberships
  ADD COLUMN IF NOT EXISTS conflicting_subscription_id TEXT;

ALTER TABLE memberships
  ADD COLUMN IF NOT EXISTS conflicting_seen_at TIMESTAMPTZ;

CREATE INDEX IF NOT EXISTS memberships_conflicting_idx
  ON memberships (conflicting_subscription_id)
  WHERE conflicting_subscription_id IS NOT NULL;
