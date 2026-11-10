import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from '@/lib/auth-server'
import { getEnrollment, getEnrollmentStats } from '@/lib/db/course'

export const dynamic = 'force-dynamic'

function formatDate(dateStr: string | null | undefined): string {
  if (!dateStr) return new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
  return new Date(dateStr).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
}

function formatHours(seconds: number): string {
  const hours = Math.round(seconds / 3600)
  return `${hours} hr${hours !== 1 ? 's' : ''}`
}

function buildSvg(studentName: string, completionDate: string, totalHours: string, quizAvg: number, examReadiness: number): string {
  const safeStudentName = studentName.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 640" width="900" height="640" font-family="Georgia, 'Times New Roman', serif">
  <!-- Background -->
  <rect width="900" height="640" fill="#ffffff"/>

  <!-- Navy border frame -->
  <rect x="0" y="0" width="900" height="640" fill="none" stroke="#1E40AF" stroke-width="16"/>
  <rect x="12" y="12" width="876" height="616" fill="none" stroke="#EA580C" stroke-width="2"/>

  <!-- Top accent bar -->
  <rect x="12" y="12" width="876" height="6" fill="#EA580C"/>

  <!-- Corner ornaments - top left -->
  <line x1="40" y1="40" x2="80" y2="40" stroke="#1E40AF" stroke-width="1.5"/>
  <line x1="40" y1="40" x2="40" y2="80" stroke="#1E40AF" stroke-width="1.5"/>

  <!-- Corner ornaments - top right -->
  <line x1="860" y1="40" x2="820" y2="40" stroke="#1E40AF" stroke-width="1.5"/>
  <line x1="860" y1="40" x2="860" y2="80" stroke="#1E40AF" stroke-width="1.5"/>

  <!-- Corner ornaments - bottom left -->
  <line x1="40" y1="600" x2="80" y2="600" stroke="#1E40AF" stroke-width="1.5"/>
  <line x1="40" y1="600" x2="40" y2="560" stroke="#1E40AF" stroke-width="1.5"/>

  <!-- Corner ornaments - bottom right -->
  <line x1="860" y1="600" x2="820" y2="600" stroke="#1E40AF" stroke-width="1.5"/>
  <line x1="860" y1="600" x2="860" y2="560" stroke="#1E40AF" stroke-width="1.5"/>

  <!-- Acme Realty logo text -->
  <text x="450" y="80" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="13" font-weight="700" letter-spacing="4" fill="#1E40AF">ACME REALTY</text>

  <!-- Divider line -->
  <line x1="180" y1="96" x2="720" y2="96" stroke="#EA580C" stroke-width="1"/>

  <!-- Certificate of Completion title -->
  <text x="450" y="150" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="42" font-weight="400" fill="#1E40AF" letter-spacing="1">Certificate of Completion</text>

  <!-- Presented to label -->
  <text x="450" y="208" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="12" font-weight="400" letter-spacing="3" fill="#888888">THIS CERTIFIES THAT</text>

  <!-- Student name -->
  <text x="450" y="276" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="52" font-weight="400" fill="#111111">${safeStudentName}</text>

  <!-- Underline for name -->
  <line x1="200" y1="290" x2="700" y2="290" stroke="#1E40AF" stroke-width="1" opacity="0.4"/>

  <!-- Has successfully completed -->
  <text x="450" y="328" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="13" font-weight="400" letter-spacing="2" fill="#555555">HAS SUCCESSFULLY COMPLETED</text>

  <!-- Course title -->
  <text x="450" y="374" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="24" font-weight="400" fill="#1E40AF">Virginia Real Estate Pre-Licensing Prep Course</text>

  <!-- Course subtitle -->
  <text x="450" y="402" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="12" fill="#888888">60-Hour Comprehensive Exam Preparation</text>

  <!-- Decorative divider -->
  <line x1="340" y1="426" x2="405" y2="426" stroke="#EA580C" stroke-width="1"/>
  <circle cx="450" cy="426" r="4" fill="#EA580C"/>
  <line x1="495" y1="426" x2="560" y2="426" stroke="#EA580C" stroke-width="1"/>

  <!-- Stats row -->
  <!-- Total hours box -->
  <rect x="130" y="448" width="170" height="72" rx="6" fill="#F0F4FF" stroke="#1E40AF" stroke-width="1" opacity="0.9"/>
  <text x="215" y="476" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="22" font-weight="700" fill="#1E40AF">${totalHours}</text>
  <text x="215" y="498" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="10" fill="#555555" letter-spacing="1">STUDY TIME</text>

  <!-- Quiz avg box -->
  <rect x="365" y="448" width="170" height="72" rx="6" fill="#FFF5EC" stroke="#EA580C" stroke-width="1" opacity="0.9"/>
  <text x="450" y="476" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="22" font-weight="700" fill="#EA580C">${quizAvg > 0 ? quizAvg + '%' : 'N/A'}</text>
  <text x="450" y="498" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="10" fill="#555555" letter-spacing="1">QUIZ AVERAGE</text>

  <!-- Exam readiness box -->
  <rect x="600" y="448" width="170" height="72" rx="6" fill="#F0F4FF" stroke="#1E40AF" stroke-width="1" opacity="0.9"/>
  <text x="685" y="476" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="22" font-weight="700" fill="#1E40AF">${examReadiness > 0 ? examReadiness + '%' : 'N/A'}</text>
  <text x="685" y="498" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="10" fill="#555555" letter-spacing="1">EXAM READINESS</text>

  <!-- Completion date and signature area -->
  <line x1="160" y1="566" x2="360" y2="566" stroke="#CCCCCC" stroke-width="1"/>
  <text x="260" y="584" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="10" fill="#888888">${completionDate}</text>
  <text x="260" y="597" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="9" letter-spacing="1" fill="#AAAAAA">DATE OF COMPLETION</text>

  <!-- Acme Realty signature side -->
  <line x1="540" y1="566" x2="740" y2="566" stroke="#CCCCCC" stroke-width="1"/>
  <text x="640" y="584" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="10" fill="#1E40AF" font-weight="600">Acme Realty</text>
  <text x="640" y="597" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="9" letter-spacing="1" fill="#AAAAAA">BROKERED BY Acme REALTY</text>
</svg>`
}

function buildHtmlPage(studentName: string, completionDate: string, totalHours: string, quizAvg: number, examReadiness: number): string {
  const svg = buildSvg(studentName, completionDate, totalHours, quizAvg, examReadiness)

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Certificate of Completion - ${studentName.replace(/</g, '&lt;')}</title>
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
    .print-controls {
      display: flex;
      gap: 12px;
      margin-bottom: 24px;
    }
    .btn {
      padding: 10px 24px;
      border-radius: 8px;
      font-size: 14px;
      font-weight: 700;
      cursor: pointer;
      border: none;
    }
    .btn-primary { background: #EA580C; color: #fff; }
    .btn-secondary { background: #1E40AF; color: #fff; }
    .certificate-wrapper {
      max-width: 900px;
      width: 100%;
      background: #fff;
      box-shadow: 0 8px 40px rgba(0,0,0,0.12);
    }
    .certificate-wrapper svg { width: 100%; height: auto; display: block; }
    .note {
      margin-top: 16px;
      font-size: 12px;
      color: #888;
      text-align: center;
    }
    @media print {
      body { background: #fff; padding: 0; }
      .print-controls, .note { display: none; }
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
</body>
</html>`
}

export async function GET(req: NextRequest) {
  const session = await getServerSession()
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const enrollment = await getEnrollment(session.user.id)
  if (!enrollment) {
    return NextResponse.json({ error: 'Not enrolled' }, { status: 404 })
  }

  // Verify completion: status = 'completed' OR progress >= 100
  const stats = await getEnrollmentStats(enrollment.id)
  const isComplete = enrollment.status === 'completed' || stats.progressPercent >= 100

  if (!isComplete) {
    return NextResponse.json(
      { error: 'Course not yet completed', progressPercent: stats.progressPercent },
      { status: 403 },
    )
  }

  const studentName = session.user.name || session.user.email || 'Student'
  const completionDate = formatDate(enrollment.completed_at)
  const totalHours = formatHours(stats.totalTimeSpent)
  const quizAvg = stats.avgQuizScore
  const examReadiness = stats.examReadinessScore

  const format = req.nextUrl.searchParams.get('format')

  if (format === 'html') {
    const html = buildHtmlPage(studentName, completionDate, totalHours, quizAvg, examReadiness)
    return new NextResponse(html, {
      status: 200,
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'Cache-Control': 'private, no-cache',
      },
    })
  }

  const svg = buildSvg(studentName, completionDate, totalHours, quizAvg, examReadiness)
  return new NextResponse(svg, {
    status: 200,
    headers: {
      'Content-Type': 'image/svg+xml',
      'Content-Disposition': `inline; filename="acme-realty-certificate-${studentName.replace(/\s+/g, '-').toLowerCase()}.svg"`,
      'Cache-Control': 'private, no-cache',
    },
  })
}
