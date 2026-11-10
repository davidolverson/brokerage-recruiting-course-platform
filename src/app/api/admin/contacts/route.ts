import { NextRequest, NextResponse } from 'next/server'
import { getAdminContext, requireRole, RoleError } from '@/lib/permissions'
import { getContacts } from '@/lib/db/contacts'

export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
  try {
    requireRole(await getAdminContext(), 'owner', 'staff')
  } catch (e) {
    if (e instanceof RoleError) return NextResponse.json({ error: e.message }, { status: e.status })
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { searchParams } = new URL(request.url)
  const filters = {
    q: searchParams.get('q') || undefined,
    source: searchParams.get('source') || undefined,
    tag: searchParams.get('tag') || undefined,
    teamSlug: searchParams.get('team') || undefined,
    page: parseInt(searchParams.get('page') || '1'),
    perPage: Math.min(parseInt(searchParams.get('per_page') || '25'), 100),
  }
  const result = await getContacts(filters)
  return NextResponse.json(result)
}
