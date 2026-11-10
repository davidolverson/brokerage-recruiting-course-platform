import { NextRequest, NextResponse } from 'next/server'
import { getAdminContext } from '@/lib/permissions'
import { getAllEnrollments } from '@/lib/db/course-admin'

export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
  const ctx = await getAdminContext()
  if (!ctx || ctx.role !== 'owner') {
    return NextResponse.json({ error: 'Owner access only' }, { status: 403 })
  }

  const { searchParams } = new URL(request.url)

  const filters = {
    q: searchParams.get('q') || undefined,
    status: searchParams.get('status') || undefined,
    page: parseInt(searchParams.get('page') || '1'),
    perPage: Math.min(parseInt(searchParams.get('per_page') || '25'), 100),
  }

  try {
    const result = await getAllEnrollments(filters)
    return NextResponse.json(result)
  } catch (err) {
    console.error('[course/enrollments] query failed', err)
    return NextResponse.json({ error: 'Query failed' }, { status: 500 })
  }
}
