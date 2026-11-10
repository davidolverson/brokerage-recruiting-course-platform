import { NextRequest, NextResponse } from 'next/server'
import { getAdminContext, requireRole, RoleError } from '@/lib/permissions'
import { countSegment } from '@/lib/db/contacts'
import type { SegmentFilter } from '@/lib/segment-filter'

export const dynamic = 'force-dynamic'

export async function POST(request: NextRequest) {
  try {
    requireRole(await getAdminContext(), 'owner', 'staff')
  } catch (e) {
    if (e instanceof RoleError) return NextResponse.json({ error: e.message }, { status: e.status })
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const filter = (await request.json().catch(() => ({}))) as SegmentFilter
  const count = await countSegment(filter)
  return NextResponse.json({ count })
}
