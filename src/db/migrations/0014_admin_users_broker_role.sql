-- ─── Add 'broker' to the admin_users.role check constraint ──────────────────
--
-- The broker (e.g. Demo Speaker at Acme Realty) signs in with admin
-- credentials so we can manage her account from /team, but the app routes
-- her to /course/dashboard after login and treats her as non-admin
-- everywhere else (see src/lib/permissions.ts ADMIN_SURFACE_ROLES).
--
-- This migration was applied directly to prod on 2026-06-01 alongside
-- commit 38058ed; check_constraint update is idempotent.

ALTER TABLE admin_users DROP CONSTRAINT IF EXISTS admin_users_role_check;

ALTER TABLE admin_users
  ADD CONSTRAINT admin_users_role_check
  CHECK (role = ANY (ARRAY['owner'::text, 'team_leader'::text, 'staff'::text, 'broker'::text]));
