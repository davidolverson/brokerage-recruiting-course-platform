import { afterAll, beforeAll, beforeEach, describe, expect, it } from 'vitest'
import { Client } from 'pg'

/**
 * SQL-level tests for membership billing.
 *
 * These exercise the real repository against a real Postgres, because the
 * properties under test belong to the SQL rather than to the TypeScript: that a
 * second live subscription is refused instead of overwriting the first, and
 * that the replay guard is idempotent and releasable.
 *
 * Until `src/db/sql.ts` existed, none of this could run at all: the repository
 * imported Neon's HTTP driver, which cannot reach an ordinary Postgres, so the
 * billing code had never executed anywhere but production. Money code that has
 * never run is not code anyone should trust.
 *
 * Skipped unless TEST_DATABASE_URL points at a throwaway database. Vitest
 * reports those as skipped rather than silently running nothing, so a run with
 * no database cannot be mistaken for a passing one.
 */

const TEST_DATABASE_URL = process.env.TEST_DATABASE_URL

describe.skipIf(!TEST_DATABASE_URL)('billing persistence', () => {
  let client: Client
  let repo: typeof import('./repository')

  beforeAll(async () => {
    process.env.DATABASE_URL = TEST_DATABASE_URL
    repo = await import('./repository')
    client = new Client({ connectionString: TEST_DATABASE_URL })
    await client.connect()
  })

  afterAll(async () => {
    await client.end()
  })

  beforeEach(async () => {
    await client.query('DELETE FROM transaction_fees')
    await client.query('DELETE FROM memberships')
    await client.query('DELETE FROM billing_events')
    await client.query(`DELETE FROM "user" WHERE id LIKE 'redroom-%'`)
  })

  async function makeMember(id: string, subscriptionId?: string): Promise<string> {
    await client.query(
      `INSERT INTO "user" (id, name, email) VALUES ($1, $2, $3) ON CONFLICT (id) DO NOTHING`,
      [id, `Red Room ${id}`, `${id}@example.invalid`],
    )
    await repo.upsertPendingMembership({
      userId: id,
      email: `${id}@example.invalid`,
      stripeCustomerId: `cus_${id}`,
    })
    if (subscriptionId) await repo.activateMembership({ userId: id, subscriptionId })
    return id
  }

  describe('a second live subscription for one member', () => {
    /**
     * The failure this prevents: the row holds one subscription id, so a plain
     * write let a second completed checkout overwrite the first. The original
     * kept billing the member monthly and nothing in the product mentioned it.
     */
    it('keeps the first subscription and records the second instead of replacing it', async () => {
      const userId = await makeMember('redroom-conflict', 'sub_first')

      const after = await repo.activateMembership({ userId, subscriptionId: 'sub_second' })

      expect(after.stripeSubscriptionId).toBe('sub_first')
      expect(after.conflictingSubscriptionId).toBe('sub_second')
      expect(after.status).toBe('active')
    })

    it('is idempotent for the same subscription, so a replayed webhook is harmless', async () => {
      const userId = await makeMember('redroom-same', 'sub_same')

      const after = await repo.activateMembership({ userId, subscriptionId: 'sub_same' })

      expect(after.stripeSubscriptionId).toBe('sub_same')
      expect(after.conflictingSubscriptionId).toBeNull()
    })

    it('lets a canceled member resubscribe with a new subscription', async () => {
      const userId = await makeMember('redroom-resub', 'sub_old')
      await repo.setMembershipStatus('sub_old', 'canceled')

      const after = await repo.activateMembership({ userId, subscriptionId: 'sub_new' })

      expect(after.stripeSubscriptionId).toBe('sub_new')
      expect(after.conflictingSubscriptionId).toBeNull()
      expect(after.status).toBe('active')
    })
  })

  describe('the webhook replay guard', () => {
    it('accepts an event once and refuses the same id again', async () => {
      expect(await repo.recordBillingEvent('evt_once', 'invoice.paid')).toBe(true)
      expect(await repo.recordBillingEvent('evt_once', 'invoice.paid')).toBe(false)
    })

    /**
     * Without the release, a handler that throws leaves its id claimed, Stripe's
     * retry is dismissed as a duplicate, and the work is lost in silence.
     */
    it('lets a retry do the work after a failed handler releases the id', async () => {
      expect(await repo.recordBillingEvent('evt_retry', 'invoice.paid')).toBe(true)
      await repo.forgetBillingEvent('evt_retry')
      expect(await repo.recordBillingEvent('evt_retry', 'invoice.paid')).toBe(true)
    })
  })

  describe('the duplicate transaction fee guard', () => {
    it('finds an existing fee for the same closing so a repeat can be refused', async () => {
      const userId = await makeMember('redroom-fee', 'sub_fee')
      const membership = await repo.findMembershipByUserId(userId)
      expect(membership).not.toBeNull()

      await repo.recordTransactionFee({
        membershipId: membership!.id,
        stripeInvoiceId: 'in_first',
        amountCents: 50_000,
        closingRef: '123 Main St',
        createdBy: 'redroom',
      })

      expect(await repo.findFeeByClosingRef(membership!.id, '123 Main St')).not.toBeNull()
      expect(await repo.findFeeByClosingRef(membership!.id, '456 Other St')).toBeNull()
      expect(await repo.countRecentFeesFor(membership!.id)).toBe(1)
    })
  })

  describe('integrity the application cannot bypass', () => {
    it('refuses a membership for a user that does not exist', async () => {
      // A forged client_reference_id must not create a membership for an
      // identity with no account behind it.
      await expect(
        repo.upsertPendingMembership({
          userId: 'redroom-does-not-exist',
          email: 'nobody@example.invalid',
          stripeCustomerId: 'cus_forged',
        }),
      ).rejects.toThrow(/violates foreign key constraint/i)
    })

    it('refuses two memberships sharing one Stripe subscription', async () => {
      await makeMember('redroom-sub-a', 'sub_shared')
      const second = await makeMember('redroom-sub-b')

      await expect(
        repo.activateMembership({ userId: second, subscriptionId: 'sub_shared' }),
      ).rejects.toThrow(/duplicate key value|unique constraint/i)
    })
  })
})
