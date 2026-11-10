import { NextRequest, NextResponse } from 'next/server'
import { getAdminContext } from '@/lib/permissions'
import { getEnrollmentDetail } from '@/lib/db/course-admin'

export const dynamic = 'force-dynamic'

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const ctx = await getAdminContext()
  if (!ctx || ctx.role !== 'owner') {
    return NextResponse.json({ error: 'Owner access only' }, { status: 403 })
  }

  const { id } = await params
  const enrollmentId = parseInt(id)
  if (isNaN(enrollmentId)) {
    return NextResponse.json({ error: 'Invalid enrollment ID' }, { status: 400 })
  }

  try {
    const detail = await getEnrollmentDetail(enrollmentId)
    if (!detail) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 })
    }
    return NextResponse.json(detail)
  } catch (err) {
    console.error('[course/enrollments/[id]] query failed', err)
    return NextResponse.json({ error: 'Query failed' }, { status: 500 })
  }
}
