import { NextResponse } from 'next/server'
import { getAdminContext } from '@/lib/permissions'

export const dynamic = 'force-dynamic'

export async function GET() {
  const ctx = await getAdminContext()
  if (!ctx) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  return NextResponse.json({
    userId: ctx.userId,
    email: ctx.email,
    name: ctx.name,
    role: ctx.role,
    teamSlug: ctx.teamSlug,
  })
}
