import { getServerSession } from './auth-server'
import { canReadHandbook } from './permissions'

/**
 * Why a viewer is or is not getting into the handbook.
 *
 * The index and the article page answered this differently, and the article
 * page answered it wrongly. Signed out with a stale cookie (middleware only
 * checks that a cookie EXISTS, not that the session behind it is live):
 *
 *   /handbook                       -> 200, "This area is for Example Investor Team agents"
 *   /handbook/tools-accounts-...    -> bare 404
 *
 * So a member whose session had simply expired was told the page does not
 * exist. It does exist; they were signed out. A false message is its own
 * defect, separate from whatever caused it.
 *
 * The three answers are genuinely different and each needs its own outcome:
 *   - no live session      -> send them to sign in, carrying where they were
 *   - signed in, no rights -> explain, do not pretend the area is missing
 *   - entitled             -> render
 */
export type HandbookAccess =
  | { state: 'signed-out' }
  | { state: 'not-entitled' }
  | { state: 'ok'; viewer: NonNullable<Awaited<ReturnType<typeof canReadHandbook>>> }

export async function getHandbookAccess(): Promise<HandbookAccess> {
  const session = await getServerSession()
  if (!session) return { state: 'signed-out' }

  const viewer = await canReadHandbook()
  if (!viewer) return { state: 'not-entitled' }

  return { state: 'ok', viewer }
}

/** Where to send a signed-out viewer so they land back where they meant to be. */
export function handbookLoginUrl(pathname: string): string {
  const safe = pathname.startsWith('/') && !pathname.startsWith('//') ? pathname : '/handbook'
  return `/login?redirect=${encodeURIComponent(safe)}`
}
