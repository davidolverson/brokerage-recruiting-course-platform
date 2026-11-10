-- 0023_agent_role_constraints.sql
--
-- The 'agent' role was added in application code and would have failed at the
-- database. Two CHECK constraints enumerate the allowed roles, and neither knew
-- about it, so inviting an agent raised 23514 and the office manager would have seen a 500 on
-- a feature that looked finished. Source-level tests all passed; only inserting
-- a real row found it.
--
-- ⛔ invite_tokens deliberately does NOT allow 'owner'. An invite must never be
-- able to mint an owner, and that property is preserved here.

ALTER TABLE admin_users DROP CONSTRAINT IF EXISTS admin_users_role_check;
ALTER TABLE admin_users ADD CONSTRAINT admin_users_role_check
  CHECK (role = ANY (ARRAY['owner', 'team_leader', 'staff', 'broker', 'agent']));

ALTER TABLE invite_tokens DROP CONSTRAINT IF EXISTS invite_tokens_role_check;
ALTER TABLE invite_tokens ADD CONSTRAINT invite_tokens_role_check
  CHECK (role = ANY (ARRAY['team_leader', 'staff', 'broker', 'agent']));
