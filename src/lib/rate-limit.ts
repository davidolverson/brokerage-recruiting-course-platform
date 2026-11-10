import { neon } from '@neondatabase/serverless'

const WINDOW_MS = 15 * 60 * 1000 // 15 minutes
const MAX_ATTEMPTS = 5

export async function checkLoginRateLimit(ip: string): Promise<{ allowed: boolean; remaining: number }> {
  const databaseUrl = process.env.DATABASE_URL
  if (!databaseUrl) return { allowed: true, remaining: MAX_ATTEMPTS }

  const sql = neon(databaseUrl)
  const key = `login:${ip}`
  const now = new Date()

  // Check existing entry
  const rows = await sql`
    SELECT count, window_start FROM rate_limits WHERE key = ${key}
  `

  if (rows.length === 0) {
    // First attempt — create entry
    await sql`
      INSERT INTO rate_limits (key, count, window_start) VALUES (${key}, 1, ${now.toISOString()})
      ON CONFLICT (key) DO UPDATE SET count = 1, window_start = ${now.toISOString()}
    `
    return { allowed: true, remaining: MAX_ATTEMPTS - 1 }
  }

  const entry = rows[0]
  const windowStart = new Date(entry.window_start)
  const elapsed = now.getTime() - windowStart.getTime()

  if (elapsed > WINDOW_MS) {
    // Window expired — reset
    await sql`
      UPDATE rate_limits SET count = 1, window_start = ${now.toISOString()} WHERE key = ${key}
    `
    return { allowed: true, remaining: MAX_ATTEMPTS - 1 }
  }

  if (entry.count >= MAX_ATTEMPTS) {
    return { allowed: false, remaining: 0 }
  }

  // Increment
  await sql`
    UPDATE rate_limits SET count = count + 1 WHERE key = ${key}
  `
  return { allowed: true, remaining: MAX_ATTEMPTS - entry.count - 1 }
}
