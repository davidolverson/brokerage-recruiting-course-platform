import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from '@/lib/auth-server'
import { getEnrollment, getEnrollmentStats } from '@/lib/db/course'
import { getDb } from '@/db'
import { pleCertificates } from '@/db/schema'
import { eq } from 'drizzle-orm'
import { PLE_COURSE_META, generateCertificateId } from '@/lib/data/ple-index'

export const dynamic = 'force-dynamic'

function formatDate(dateStr: string | null | undefined): string {
  if (!dateStr) return new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
  return new Date(dateStr).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
}

function buildPleCertificateSvg(
  licenseeName: string,
  licenseNumber: string,
  completionDate: string,
  certificateId: string,
  courseApprovalNumber: string
): string {
  const safeName = licenseeName.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
  const safeLicense = licenseNumber.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 720" width="900" height="720" font-family="Georgia, 'Times New Roman', serif">
  <!-- Background -->
  <rect width="900" height="720" fill="#ffffff"/>

  <!-- Navy border frame -->
  <rect x="0" y="0" width="900" height="720" fill="none" stroke="#1E40AF" stroke-width="16"/>
  <rect x="12" y="12" width="876" height="696" fill="none" stroke="#1E40AF" stroke-width="1" opacity="0.3"/>

  <!-- Top accent bar -->
  <rect x="12" y="12" width="876" height="6" fill="#EA580C"/>

  <!-- Corner ornaments -->
  <line x1="40" y1="40" x2="80" y2="40" stroke="#1E40AF" stroke-width="1.5"/>
  <line x1="40" y1="40" x2="40" y2="80" stroke="#1E40AF" stroke-width="1.5"/>
  <line x1="860" y1="40" x2="820" y2="40" stroke="#1E40AF" stroke-width="1.5"/>
  <line x1="860" y1="40" x2="860" y2="80" stroke="#1E40AF" stroke-width="1.5"/>
  <line x1="40" y1="680" x2="80" y2="680" stroke="#1E40AF" stroke-width="1.5"/>
  <line x1="40" y1="680" x2="40" y2="640" stroke="#1E40AF" stroke-width="1.5"/>
  <line x1="860" y1="680" x2="820" y2="680" stroke="#1E40AF" stroke-width="1.5"/>
  <line x1="860" y1="680" x2="860" y2="640" stroke="#1E40AF" stroke-width="1.5"/>

  <!-- Provider header -->
  <text x="450" y="70" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="13" font-weight="700" letter-spacing="4" fill="#1E40AF">ACME REALTY REAL ESTATE ACADEMY</text>
  <text x="450" y="88" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="10" letter-spacing="2" fill="#888888">Education Provider Number: ${PLE_COURSE_META.providerNumber}</text>

  <!-- Divider -->
  <line x1="180" y1="100" x2="720" y2="100" stroke="#EA580C" stroke-width="1"/>

  <!-- Certificate title -->
  <text x="450" y="144" text-anchor="middle" font-size="36" font-weight="400" fill="#1E40AF" letter-spacing="1">Certificate of Course Completion</text>
  <text x="450" y="170" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="14" font-weight="600" letter-spacing="2" fill="#EA580C">POST-LICENSE EDUCATION (PLE)</text>

  <!-- Certifies -->
  <text x="450" y="210" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="11" letter-spacing="3" fill="#888888">THIS CERTIFIES THAT</text>

  <!-- Licensee name -->
  <text x="450" y="260" text-anchor="middle" font-size="44" font-weight="400" fill="#111111">${safeName}</text>
  <line x1="180" y1="274" x2="720" y2="274" stroke="#1E40AF" stroke-width="1" opacity="0.3"/>

  <!-- License number -->
  <text x="450" y="300" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="12" letter-spacing="1" fill="#555555">Virginia Real Estate License Number: ${safeLicense || '[License Number]'}</text>

  <!-- Completion text -->
  <text x="450" y="336" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="11" letter-spacing="2" fill="#888888">HAS SUCCESSFULLY COMPLETED</text>

  <!-- Course name -->
  <text x="450" y="372" text-anchor="middle" font-size="22" font-weight="400" fill="#1E40AF">${PLE_COURSE_META.title}</text>

  <!-- Course details row -->
  <rect x="180" y="394" width="540" height="60" rx="6" fill="#F0F4FF" stroke="#1E40AF" stroke-width="0.5"/>

  <text x="280" y="420" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="18" font-weight="700" fill="#1E40AF">30 Hours</text>
  <text x="280" y="438" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="9" letter-spacing="1" fill="#555555">COURSE HOURS</text>

  <line x1="370" y1="400" x2="370" y2="448" stroke="#1E40AF" stroke-width="0.5" opacity="0.3"/>

  <text x="450" y="420" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="14" font-weight="700" fill="#1E40AF">${courseApprovalNumber || 'PLE-[Pending]'}</text>
  <text x="450" y="438" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="9" letter-spacing="1" fill="#555555">APPROVAL NUMBER</text>

  <line x1="530" y1="400" x2="530" y2="448" stroke="#1E40AF" stroke-width="0.5" opacity="0.3"/>

  <text x="630" y="420" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="14" font-weight="700" fill="#1E40AF">${completionDate}</text>
  <text x="630" y="438" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="9" letter-spacing="1" fill="#555555">COMPLETION DATE</text>

  <!-- Delivery method -->
  <text x="450" y="478" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="10" fill="#888888">Delivery Method: Online (Self-Directed)</text>

  <!-- DPOR approval statement -->
  <rect x="100" y="496" width="700" height="44" rx="4" fill="#FFFAF5" stroke="#EA580C" stroke-width="0.5"/>
  <text x="450" y="516" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="9.5" fill="#333333" font-style="italic">This course is approved by the Virginia Real Estate Board for Post License Education</text>
  <text x="450" y="530" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="9.5" fill="#333333" font-style="italic">pursuant to Section 54.1-2105.01 of the Code of Virginia.</text>

  <!-- Signature area -->
  <line x1="140" y1="600" x2="360" y2="600" stroke="#CCCCCC" stroke-width="1"/>
  <text x="250" y="618" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="10" fill="#1E40AF" font-weight="600">[School Director Name]</text>
  <text x="250" y="632" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="9" letter-spacing="1" fill="#AAAAAA">SCHOOL DIRECTOR/ADMINISTRATOR</text>

  <line x1="540" y1="600" x2="760" y2="600" stroke="#CCCCCC" stroke-width="1"/>
  <text x="650" y="618" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="10" fill="#888888">${completionDate}</text>
  <text x="650" y="632" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="9" letter-spacing="1" fill="#AAAAAA">DATE</text>

  <!-- Certificate ID -->
  <text x="450" y="668" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="8" fill="#AAAAAA">Certificate ID: ${certificateId}</text>

  <!-- Footer -->
  <rect x="12" y="706" width="876" height="2" fill="#EA580C"/>
</svg>`
}

function buildPleHtmlPage(
  licenseeName: string,
  licenseNumber: string,
  completionDate: string,
  certificateId: string,
  courseApprovalNumber: string
): string {
  const svg = buildPleCertificateSvg(licenseeName, licenseNumber, completionDate, certificateId, courseApprovalNumber)

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>PLE Certificate - ${licenseeName.replace(/</g, '&lt;')}</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      background: #f5f5f5;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      padding: 32px 16px;
      font-family: Arial, Helvetica, sans-serif;
    }
    .print-controls { display: flex; gap: 12px; margin-bottom: 24px; }
    .btn { padding: 10px 24px; border-radius: 8px; font-size: 14px; font-weight: 700; cursor: pointer; border: none; }
    .btn-primary { background: #EA580C; color: #fff; }
    .btn-secondary { background: #1E40AF; color: #fff; }
    .certificate-wrapper { max-width: 900px; width: 100%; background: #fff; box-shadow: 0 8px 40px rgba(0,0,0,0.12); }
    .certificate-wrapper svg { width: 100%; height: auto; display: block; }
    .note { margin-top: 16px; font-size: 12px; color: #888; text-align: center; }
    .dpor-notice { margin-top: 12px; font-size: 11px; color: #666; text-align: center; max-width: 700px; line-height: 1.6; }
    @media print {
      body { background: #fff; padding: 0; }
      .print-controls, .note, .dpor-notice { display: none; }
      .certificate-wrapper { box-shadow: none; max-width: 100%; }
    }
  </style>
</head>
<body>
  <div class="print-controls">
    <button class="btn btn-primary" onclick="window.print()">Print / Save as PDF</button>
    <button class="btn btn-secondary" onclick="window.close()">Close</button>
  </div>
  <div class="certificate-wrapper">
    ${svg}
  </div>
  <p class="note">Use your browser's Print dialog to save as PDF. Set margins to "None" for best results.</p>
  <p class="dpor-notice">
    This Course Completion Certificate shall not be modified without the Virginia Real Estate Board's approval.
    Course completions are reported to DPOR within 15 business days.
  </p>
</body>
</html>`
}

export async function GET(req: NextRequest) {
  const session = await getServerSession()
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  // Get PLE enrollment (courseType = 'ple')
  const enrollment = await getEnrollment(session.user.id, 'ple')
  if (!enrollment) {
    return NextResponse.json({ error: 'Not enrolled in PLE course' }, { status: 404 })
  }

  const stats = await getEnrollmentStats(enrollment.id)
  const isComplete = enrollment.status === 'completed' || stats.progressPercent >= 100

  if (!isComplete) {
    return NextResponse.json(
      { error: 'PLE course not yet completed', progressPercent: stats.progressPercent },
      { status: 403 },
    )
  }

  const licenseeName = session.user.name || session.user.email || 'Student'
  const licenseNumber = req.nextUrl.searchParams.get('licenseNumber') || ''
  const completionDate = formatDate(enrollment.completed_at)
  const courseApprovalNumber = '' // Will be filled after DPOR approval

  // Check for existing certificate or create one
  const existingCert = await getDb()
    .select()
    .from(pleCertificates)
    .where(eq(pleCertificates.enrollmentId, enrollment.id))
    .limit(1)

  let certificateId: string
  if (existingCert.length > 0) {
    certificateId = existingCert[0].certificateId
  } else {
    certificateId = generateCertificateId()
    await getDb().insert(pleCertificates).values({
      enrollmentId: enrollment.id,
      userId: session.user.id,
      certificateId,
      licenseeName,
      licenseNumber: licenseNumber || null,
      completionDate: new Date(enrollment.completed_at || new Date()),
    })
  }

  const format = req.nextUrl.searchParams.get('format')

  if (format === 'html') {
    const html = buildPleHtmlPage(licenseeName, licenseNumber, completionDate, certificateId, courseApprovalNumber)
    return new NextResponse(html, {
      status: 200,
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'Cache-Control': 'private, no-cache',
      },
    })
  }

  const svg = buildPleCertificateSvg(licenseeName, licenseNumber, completionDate, certificateId, courseApprovalNumber)
  return new NextResponse(svg, {
    status: 200,
    headers: {
      'Content-Type': 'image/svg+xml',
      'Content-Disposition': `inline; filename="ple-certificate-${licenseeName.replace(/\s+/g, '-').toLowerCase()}.svg"`,
      'Cache-Control': 'private, no-cache',
    },
  })
}
