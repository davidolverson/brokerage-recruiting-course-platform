import { NextResponse } from 'next/server'
import { neon } from '@neondatabase/serverless'
import { getServerSession } from '@/lib/auth-server'
import { createEnrollment, getEnrollment, logCourseActivity } from '@/lib/db/course'
import { sendCourseWelcomeEmail } from '@/lib/emails/course-emails'
import { upsertContact } from '@/lib/contacts'

export const dynamic = 'force-dynamic'

export async function POST() {
  const session = await getServerSession()
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const userId = session.user.id
  const userEmail = session.user.email
  const userName = session.user.name

  // Check if already enrolled
  const existing = await getEnrollment(userId)
  if (existing) {
    return NextResponse.json({ enrollment: existing, created: false })
  }

  // Create a lead record for CRM tracking
  const url = process.env.DATABASE_URL
  if (!url) {
    return NextResponse.json({ error: 'Database not configured' }, { status: 500 })
  }
  const sql = neon(url)
  const leadRows = await sql`
    INSERT INTO leads (first_name, email, form_type, source_route, source_section, selected_path, metadata)
    VALUES (
      ${userName},
      ${userEmail},
      'course_enrollment',
      '/course',
      'enrollment',
      'license_prep',
      ${JSON.stringify({ courseType: 'va_real_estate_prelicense' })}
    )
    RETURNING id
  `

  const leadId = leadRows.length > 0 ? (leadRows[0].id as number) : undefined

  if (userEmail) {
    upsertContact({ email: userEmail, firstName: userName, source: 'course_enrollee' }).catch(() => {})
  }

  const enrollment = await createEnrollment(userId, leadId)

  await logCourseActivity(enrollment.id, 'enrolled', {
    email: userEmail,
    name: userName,
  })

  // Fire welcome email — non-blocking, failure doesn't affect enrollment response
  if (userEmail && userName) {
    sendCourseWelcomeEmail(userEmail, userName).catch((err) => {
      console.error('[ENROLL] Welcome email failed:', err)
    })
  }

  return NextResponse.json({ enrollment, created: true }, { status: 201 })
}
