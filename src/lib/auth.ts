import { betterAuth } from 'better-auth'
import { drizzleAdapter } from 'better-auth/adapters/drizzle'
import * as schema from '@/db/schema'
import { assertProductionEnvs } from './env-guard'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let _auth: any = null

export function getAuth() {
  if (_auth) return _auth as ReturnType<typeof betterAuth>

  assertProductionEnvs()

  // Lazy import to avoid DATABASE_URL check at build time
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const { getDb } = require('@/db')

  _auth = betterAuth({
    database: drizzleAdapter(getDb(), {
      provider: 'pg',
      schema: {
        user: schema.user,
        session: schema.session,
        account: schema.account,
        verification: schema.verification,
      },
    }),
    emailAndPassword: {
      enabled: true,
      // First-time onboarding sometimes spans a weekend or a busy day; the
      // upstream default of 1 hour stranded a new team member who couldn't
      // open the link until the next afternoon. 7 days matches the window
      // commonly used by other broker portals and keeps the link useful for
      // anyone juggling licensing paperwork in parallel.
      resetPasswordTokenExpiresIn: 60 * 60 * 24 * 7,
      sendResetPassword: async ({ user, url }: { user: { email: string }; url: string }) => {
        const apiKey = process.env.RESEND_API_KEY
        const from = process.env.RESEND_FROM_EMAIL ?? 'onboarding@resend.dev'
        if (!apiKey) {
          console.error('[AUTH] No RESEND_API_KEY set — cannot send password reset email')
          throw new Error('Email service not configured')
        }
        const res = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
          body: JSON.stringify({
            from,
            to: user.email,
            subject: 'Reset your Acme Realty password',
            text: `Click here to reset your password:\n\n${url}\n\nThis link is good for 7 days.\n\nAcme Realty`,
          }),
        })
        if (!res.ok) {
          const err = await res.text().catch(() => 'Unknown error')
          console.error('[AUTH] Resend API error:', res.status, err)
          throw new Error('Failed to send reset email')
        }
      },
    },
    databaseHooks: {
      session: {
        create: {
          // admin_users.last_login_at has existed since the table did and
          // NOTHING has ever written it, so every row reads NULL. That cost a
          // real diagnosis on 2026-08-13: a client reported "trouble with my
          // admin page" and the first question, "has she signed in since?",
          // could only be answered by joining better-auth's session table by
          // hand. A session row is created exactly once per sign-in, which is
          // the definition of the column.
          after: async (session: { userId?: string }) => {
            if (!session?.userId) return
            try {
              // eslint-disable-next-line @typescript-eslint/no-require-imports
              const { getDb } = require('@/db')
              // eslint-disable-next-line @typescript-eslint/no-require-imports
              const { adminUsers } = require('@/db/schema')
              // eslint-disable-next-line @typescript-eslint/no-require-imports
              const { eq } = require('drizzle-orm')
              await getDb()
                .update(adminUsers)
                .set({ lastLoginAt: new Date() })
                .where(eq(adminUsers.id, session.userId))
            } catch (e) {
              // Bookkeeping must never be able to fail a sign-in. A user who
              // cannot log in is a far worse outcome than a stale timestamp.
              console.error('[AUTH] could not stamp last_login_at:', e)
            }
          },
        },
      },
    },
    session: {
      expiresIn: 60 * 60 * 24, // 24 hours
      updateAge: 60 * 60, // refresh every hour
      cookieCache: {
        enabled: true,
        maxAge: 60 * 5, // 5 min client cache
      },
    },
    trustedOrigins: [
      process.env.BETTER_AUTH_URL,
      process.env.NEXT_PUBLIC_SITE_URL,
      'http://localhost:3004',
      'https://example.com',
    ].filter(Boolean) as string[],
    secret: process.env.BETTER_AUTH_SECRET,
  })

  return _auth as ReturnType<typeof betterAuth>
}
