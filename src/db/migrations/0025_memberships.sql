-- ─── Branch membership billing ───────────────────────────────────────────────
--
-- /membership publishes what an Anytown membership costs but could not take a
-- payment: both CTAs went to the contact form, so every agent who wanted to
-- join became an email answered by hand.
--
-- Stripe is the source of truth for money. What is kept here is only what the
-- site has to answer without a round trip: who is a member, what state their
-- subscription is in, and which webhook events have already been handled.
--
-- ⛔ No legacy-seat columns. The membership sells
-- $99/month and a $500 per-closing fee with no capped entry fee, so there is no
-- seat to number and no cap to count.

CREATE TABLE IF NOT EXISTS memberships (
  id                     SERIAL PRIMARY KEY,
  user_id                TEXT NOT NULL UNIQUE REFERENCES "user"(id) ON DELETE CASCADE,
  -- Denormalised on purpose: reconciling against Stripe needs the address the
  -- customer was created with, which has to survive the user changing theirs.
  email                  TEXT NOT NULL,
  stripe_customer_id     TEXT,
  stripe_subscription_id TEXT UNIQUE,
  status                 TEXT NOT NULL DEFAULT 'pending',
  created_at             TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at             TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS memberships_status_idx ON memberships (status);
CREATE INDEX IF NOT EXISTS memberships_email_idx ON memberships (email);
CREATE INDEX IF NOT EXISTS memberships_customer_idx ON memberships (stripe_customer_id);

-- Webhook idempotency. Stripe retries delivery, and a replayed event must not
-- apply the same effect twice, so the event id is inserted before any work and
-- a conflict ends the request.
CREATE TABLE IF NOT EXISTS billing_events (
  stripe_event_id TEXT PRIMARY KEY,
  type            TEXT NOT NULL,
  received_at     TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- The $500 per-closing fee. Staff-initiated, because it is charged when a deal
-- closes and no public checkout can know that has happened.
CREATE TABLE IF NOT EXISTS transaction_fees (
  id                SERIAL PRIMARY KEY,
  membership_id     INTEGER NOT NULL REFERENCES memberships(id) ON DELETE CASCADE,
  stripe_invoice_id TEXT UNIQUE,
  amount_cents      INTEGER NOT NULL,
  closing_ref       TEXT,
  status            TEXT NOT NULL DEFAULT 'open',
  created_by        TEXT,
  created_at        TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS transaction_fees_membership_idx
  ON transaction_fees (membership_id, created_at DESC);
