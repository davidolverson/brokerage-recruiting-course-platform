// Runtime guard that fails loudly when production envs are missing.
// Returns { ok, missing } so callers can decide between throw, 503, or warn.

const REQUIRED_PROD_ENVS = [
  'DATABASE_URL',
  'BETTER_AUTH_SECRET',
  'BETTER_AUTH_URL',
  'RESEND_API_KEY',
  'RESEND_FROM_EMAIL',
] as const

export function checkProductionEnvs(): { ok: boolean; missing: string[] } {
  const missing: string[] = []
  for (const k of REQUIRED_PROD_ENVS) {
    const v = process.env[k]
    if (!v || v.trim() === '') missing.push(k)
  }
  return { ok: missing.length === 0, missing }
}

export function assertProductionEnvs(): void {
  if (process.env.VERCEL_ENV !== 'production') return
  const { ok, missing } = checkProductionEnvs()
  if (!ok) {
    throw new Error(
      `[env-guard] Production env vars are empty: ${missing.join(', ')}. ` +
        `Set them in Vercel → Project → Settings → Environment Variables and redeploy. ` +
        `Auth and email cannot work until this is fixed.`
    )
  }
}
