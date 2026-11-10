import { NextResponse } from 'next/server'
import { getServerSession } from '@/lib/auth-server'
import { getDb } from '@/db'
import { courseEnrollments } from '@/db/schema'
import { eq, and } from 'drizzle-orm'
import { upsertContact } from '@/lib/contacts'

export const dynamic = 'force-dynamic'

export async function POST() {
  const session = await getServerSession()
  if (!session) {
    return NextResponse.redirect(new URL('/course/signup?redirect=/course/ple', process.env.NEXT_PUBLIC_URL || 'http://localhost:3000'))
  }

  // Check if already enrolled in PLE
  const existing = await getDb()
    .select()
    .from(courseEnrollments)
    .where(
      and(
        eq(courseEnrollments.userId, session.user.id),
        eq(courseEnrollments.courseType, 'ple')
      )
    )
    .limit(1)

  if (existing.length > 0) {
    return NextResponse.redirect(new URL('/course/ple', process.env.NEXT_PUBLIC_URL || 'http://localhost:3000'))
  }

  // Create PLE enrollment
  await getDb()
    .insert(courseEnrollments)
    .values({
      userId: session.user.id,
      courseType: 'ple',
      status: 'active',
    })
    .returning()

  if (session.user.email) {
    upsertContact({ email: session.user.email, firstName: session.user.name, source: 'course_enrollee' }).catch(() => {})
  }

  return NextResponse.redirect(new URL('/course/ple', process.env.NEXT_PUBLIC_URL || 'http://localhost:3000'))
}
