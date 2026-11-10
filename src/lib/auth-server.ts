import { headers } from 'next/headers'
import { getAuth } from './auth'

export async function getServerSession() {
  // Order matters — do not move getAuth() above this line.
  // `headers()` is the dynamic API that tells Next this render depends on the
  // request, so a page calling getServerSession() bails out of static
  // prerendering. getAuth() eagerly builds the better-auth instance, which
  // constructs the Drizzle/Neon client and throws "DATABASE_URL is not
  // configured" when the env var is absent (as it is during `next build`).
  // If that throw happens first, Next never sees the dynamic signal and
  // reports it as a hard prerender error instead of marking the route
  // dynamic. Awaiting headers() first guarantees the bailout wins.
  const headersList = await headers()
  const auth = getAuth()
  const session = await auth.api.getSession({
    headers: headersList,
  })
  return session
}

export async function requireSession() {
  const session = await getServerSession()
  if (!session) {
    throw new Error('Unauthorized')
  }
  return session
}
