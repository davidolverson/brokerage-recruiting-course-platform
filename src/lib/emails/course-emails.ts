// Course email templates for Acme Realty license prep course
// Uses the same Resend fetch pattern as notifications.ts

const EXP_ORANGE = '#EA580C'
const EXP_BLUE = '#1E40AF'
const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://example.com'

// ─── Shared helpers ──────────────────────────────────────────────────────────

async function sendEmail(
  to: string,
  subject: string,
  html: string,
): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY
  const from = process.env.RESEND_FROM_EMAIL ?? 'onboarding@resend.dev'

  if (!apiKey) {
    console.warn('[COURSE-EMAIL] No RESEND_API_KEY configured')
    return false
  }

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ from, to, subject, html }),
    })

    if (!res.ok) {
      const error = await res.text()
      console.error('[COURSE-EMAIL] Resend error:', error)
      return false
    }
    return true
  } catch (err) {
    console.error('[COURSE-EMAIL] Send failed:', err)
    return false
  }
}

function emailWrapper(content: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Acme Realty</title>
</head>
<body style="margin:0;padding:0;background:#f4f4f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f5;padding:32px 0;">
    <tr>
      <td align="center">
        <table width="580" cellpadding="0" cellspacing="0" style="max-width:580px;width:100%;background:#ffffff;border-radius:8px;overflow:hidden;border:1px solid #e4e4e7;">

          <!-- Header -->
          <tr>
            <td style="background:${EXP_BLUE};padding:24px 32px;">
              <span style="color:#ffffff;font-size:20px;font-weight:700;letter-spacing:-0.3px;">Acme Realty</span>
              <span style="color:${EXP_ORANGE};font-size:14px;font-weight:600;margin-left:12px;">License Prep Course</span>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:32px;">
              ${content}
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#f4f4f5;padding:20px 32px;border-top:1px solid #e4e4e7;">
              <p style="margin:0;font-size:12px;color:#71717a;line-height:1.5;">
                Acme Realty &mdash; VA Real Estate License Prep<br />
                <a href="${BASE_URL}/course" style="color:${EXP_BLUE};text-decoration:none;">Continue your course</a>
                &nbsp;&middot;&nbsp;
                <a href="${BASE_URL}/unsubscribe" style="color:#71717a;text-decoration:none;">Unsubscribe</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
}

function ctaButton(label: string, href: string): string {
  return `<a href="${href}" style="display:inline-block;background:${EXP_ORANGE};color:#ffffff;font-size:15px;font-weight:600;text-decoration:none;padding:12px 28px;border-radius:6px;margin:8px 0;">${label}</a>`
}

function sectionLabel(text: string): string {
  return `<p style="margin:24px 0 6px;font-size:11px;font-weight:700;letter-spacing:0.08em;color:#71717a;text-transform:uppercase;">${text}</p>`
}

function statBox(label: string, value: string): string {
  return `<td style="text-align:center;padding:16px 12px;background:#f8f8fa;border-radius:6px;min-width:100px;">
    <div style="font-size:24px;font-weight:700;color:${EXP_BLUE};">${value}</div>
    <div style="font-size:11px;color:#71717a;margin-top:4px;text-transform:uppercase;letter-spacing:0.05em;">${label}</div>
  </td>`
}

// ─── Template functions ──────────────────────────────────────────────────────

export interface WeeklyProgressStats {
  lessonsCompletedThisWeek: number
  totalLessonsCompleted: number
  totalLessons: number
  progressPercent: number
  quizzesTakenThisWeek: number
  avgQuizScoreThisWeek: number | null
  currentStreak: number
  nextLessonTitle?: string
  nextLessonUrl?: string
}

export interface CompletionStats {
  totalLessons: number
  avgQuizScore: number
  examReadinessScore: number
  daysToComplete?: number
}

export async function sendCourseWelcomeEmail(to: string, name: string): Promise<boolean> {
  const subject = `You're enrolled — here's how to get started`

  const firstName = name.split(' ')[0]
  const module1Url = `${BASE_URL}/course/module/virginia-real-estate-law`

  const content = `
    <h1 style="margin:0 0 8px;font-size:24px;font-weight:700;color:#18181b;">Welcome, ${firstName}.</h1>
    <p style="margin:0 0 20px;font-size:15px;color:#52525b;line-height:1.6;">
      You're officially enrolled in the Acme Realty VA Real Estate License Prep Course.
      Here's what the next few weeks look like.
    </p>

    ${sectionLabel('What you get')}
    <ul style="margin:8px 0 20px;padding-left:20px;color:#3f3f46;font-size:14px;line-height:1.8;">
      <li>Video lessons covering all topics on the PSI VA exam</li>
      <li>Chapter quizzes after every unit so you can test as you go</li>
      <li>Section exams and full mock tests closer to exam day</li>
      <li>A readiness score that tells you when you're actually ready to book the PSI</li>
    </ul>

    ${sectionLabel('How to pace yourself')}
    <p style="margin:8px 0 20px;font-size:14px;color:#52525b;line-height:1.6;">
      Most students finish in 5&ndash;8 weeks at 30&ndash;45 minutes per day.
      You don't need to binge it. Consistent daily sessions beat marathon weekends every time.
      Start with Module 1 and go from there.
    </p>

    <div style="text-align:left;margin:28px 0;">
      ${ctaButton('Start Module 1', module1Url)}
    </div>

    ${sectionLabel('Need help?')}
    <p style="margin:8px 0 0;font-size:14px;color:#52525b;line-height:1.6;">
      Reply to this email or reach out at <a href="mailto:${process.env.RESEND_FROM_EMAIL ?? 'info@example.com'}" style="color:${EXP_BLUE};">${process.env.RESEND_FROM_EMAIL ?? 'info@example.com'}</a> any time.
      Good luck &mdash; you've got this.
    </p>
  `

  return sendEmail(to, subject, emailWrapper(content))
}

export async function sendWeeklyProgressEmail(
  to: string,
  name: string,
  stats: WeeklyProgressStats,
): Promise<boolean> {
  const firstName = name.split(' ')[0]
  const subject = `Your weekly check-in — ${stats.progressPercent}% done`

  const streakText =
    stats.currentStreak >= 7
      ? `${stats.currentStreak}-day streak. Keep it going.`
      : stats.currentStreak > 0
        ? `${stats.currentStreak}-day streak active.`
        : `No streak right now &mdash; get one going this week.`

  const quizNote =
    stats.avgQuizScoreThisWeek != null
      ? `Avg quiz score this week: <strong>${stats.avgQuizScoreThisWeek}%</strong>`
      : `No quizzes completed this week.`

  const nextLessonBlock =
    stats.nextLessonUrl && stats.nextLessonTitle
      ? `
          ${sectionLabel('Up next')}
          <p style="margin:8px 0 16px;font-size:14px;color:#52525b;">${stats.nextLessonTitle}</p>
          ${ctaButton('Pick up where you left off', stats.nextLessonUrl)}
        `
      : `
          <div style="margin-top:24px;">
            ${ctaButton('Go to your course', `${BASE_URL}/course`)}
          </div>
        `

  const content = `
    <h1 style="margin:0 0 6px;font-size:22px;font-weight:700;color:#18181b;">Weekly check-in</h1>
    <p style="margin:0 0 24px;font-size:14px;color:#71717a;">Here's where you stand, ${firstName}.</p>

    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
      <tr>
        <td style="padding:0 6px 0 0;">
          ${statBox('Lessons this week', String(stats.lessonsCompletedThisWeek))}
        </td>
        <td style="padding:0 6px;">
          ${statBox('Total completed', `${stats.totalLessonsCompleted}/${stats.totalLessons}`)}
        </td>
        <td style="padding:0 0 0 6px;">
          ${statBox('Overall progress', `${stats.progressPercent}%`)}
        </td>
      </tr>
    </table>

    ${sectionLabel('Quizzes')}
    <p style="margin:8px 0 4px;font-size:14px;color:#52525b;">
      ${stats.quizzesTakenThisWeek} quiz${stats.quizzesTakenThisWeek !== 1 ? 'zes' : ''} taken this week.
      ${quizNote}
    </p>

    ${sectionLabel('Streak')}
    <p style="margin:8px 0 4px;font-size:14px;color:#52525b;">${streakText}</p>

    ${nextLessonBlock}
  `

  return sendEmail(to, subject, emailWrapper(content))
}

export async function sendCourseCompletionEmail(
  to: string,
  name: string,
  stats: CompletionStats,
): Promise<boolean> {
  const firstName = name.split(' ')[0]
  const subject = `You finished the course — here's what to do next`

  const psiUrl = 'https://candidate.psiexams.com'
  const backgroundUrl = 'https://dpor.virginia.gov/pages/individual-background-check'
  const teamUrl = `${BASE_URL}/join-a-team`
  const networkUrl = `${BASE_URL}/network`

  const readinessNote =
    stats.examReadinessScore >= 80
      ? `Your readiness score is <strong>${stats.examReadinessScore}%</strong>. You're in solid shape to book the PSI.`
      : `Your readiness score is <strong>${stats.examReadinessScore}%</strong>. Consider running another mock exam before scheduling.`

  const content = `
    <h1 style="margin:0 0 8px;font-size:26px;font-weight:700;color:#18181b;">
      You completed the course, ${firstName}.
    </h1>
    <p style="margin:0 0 24px;font-size:15px;color:#52525b;line-height:1.6;">
      ${stats.totalLessons} lessons. Avg quiz score of ${stats.avgQuizScore}%.
      ${stats.daysToComplete ? `Wrapped up in ${stats.daysToComplete} days. ` : ''}That's the work.
    </p>

    ${sectionLabel('Exam readiness')}
    <p style="margin:8px 0 20px;font-size:14px;color:#52525b;line-height:1.6;">${readinessNote}</p>

    ${sectionLabel('Next steps')}
    <table width="100%" cellpadding="0" cellspacing="0" style="margin:8px 0 28px;">
      <tr>
        <td style="padding:12px 16px;background:#f0f4ff;border-left:3px solid ${EXP_BLUE};border-radius:4px;margin-bottom:10px;display:block;">
          <p style="margin:0 0 2px;font-size:13px;font-weight:700;color:${EXP_BLUE};">Step 1 &mdash; Schedule your PSI exam</p>
          <p style="margin:0;font-size:13px;color:#52525b;">Book at the PSI candidate portal. The VA Salesperson exam is 120 questions, 150 minutes.</p>
          <a href="${psiUrl}" style="font-size:13px;color:${EXP_ORANGE};font-weight:600;">psiexams.com &rarr;</a>
        </td>
      </tr>
      <tr><td style="height:8px;"></td></tr>
      <tr>
        <td style="padding:12px 16px;background:#fff7f0;border-left:3px solid ${EXP_ORANGE};border-radius:4px;">
          <p style="margin:0 0 2px;font-size:13px;font-weight:700;color:${EXP_ORANGE};">Step 2 &mdash; Complete your background check</p>
          <p style="margin:0;font-size:13px;color:#52525b;">DPOR requires a criminal background check before your license application is processed.</p>
          <a href="${backgroundUrl}" style="font-size:13px;color:${EXP_BLUE};font-weight:600;">dpor.virginia.gov &rarr;</a>
        </td>
      </tr>
      <tr><td style="height:8px;"></td></tr>
      <tr>
        <td style="padding:12px 16px;background:#f0f4ff;border-left:3px solid ${EXP_BLUE};border-radius:4px;">
          <p style="margin:0 0 2px;font-size:13px;font-weight:700;color:${EXP_BLUE};">Step 3 &mdash; Choose your path</p>
          <p style="margin:0;font-size:13px;color:#52525b;">Join an Acme Realty team or go independent through Growth Network. Either way, we've got a seat for you.</p>
          <a href="${teamUrl}" style="font-size:13px;color:${EXP_ORANGE};font-weight:600;margin-right:16px;">Join a team &rarr;</a>
          <a href="${networkUrl}" style="font-size:13px;color:${EXP_ORANGE};font-weight:600;">Growth Network path &rarr;</a>
        </td>
      </tr>
    </table>

    <p style="margin:0;font-size:14px;color:#71717a;line-height:1.6;">
      Questions about next steps? Reply here and someone from our team will get back to you.
    </p>
  `

  return sendEmail(to, subject, emailWrapper(content))
}

export async function sendInactivityReminderEmail(
  to: string,
  name: string,
  daysSinceActive: number,
  progressPercent: number,
): Promise<boolean> {
  const firstName = name.split(' ')[0]
  const subject = `${firstName}, your course is waiting`

  const remainingPercent = 100 - progressPercent
  const encouragement =
    progressPercent >= 75
      ? `You're almost there &mdash; ${remainingPercent}% left to finish.`
      : progressPercent >= 50
        ? `You're past the halfway mark. ${remainingPercent}% to go.`
        : progressPercent >= 25
          ? `You've laid a solid foundation. Keep building on it.`
          : `Even 20 minutes today puts you further ahead than doing nothing.`

  const content = `
    <h1 style="margin:0 0 8px;font-size:22px;font-weight:700;color:#18181b;">
      It's been ${daysSinceActive} days, ${firstName}.
    </h1>
    <p style="margin:0 0 20px;font-size:15px;color:#52525b;line-height:1.6;">
      Your course is right where you left it. ${encouragement}
    </p>

    <!-- Progress bar -->
    <div style="margin:0 0 8px;">
      <div style="display:flex;justify-content:space-between;margin-bottom:6px;">
        <span style="font-size:12px;font-weight:600;color:#71717a;text-transform:uppercase;letter-spacing:0.06em;">Progress</span>
        <span style="font-size:12px;font-weight:700;color:${EXP_BLUE};">${progressPercent}%</span>
      </div>
      <div style="background:#e4e4e7;border-radius:4px;height:8px;width:100%;">
        <div style="background:${EXP_ORANGE};border-radius:4px;height:8px;width:${progressPercent}%;"></div>
      </div>
    </div>

    <p style="margin:20px 0 28px;font-size:14px;color:#52525b;line-height:1.6;">
      The PSI exam isn't going anywhere, but neither is your window.
      Consistent practice is the difference between passing the first time and paying for a retake.
    </p>

    <div style="text-align:left;">
      ${ctaButton('Continue my course', `${BASE_URL}/course`)}
    </div>
  `

  return sendEmail(to, subject, emailWrapper(content))
}

export type MilestonePercent = 25 | 50 | 75

export async function sendMilestoneEmail(
  to: string,
  name: string,
  milestone: MilestonePercent,
): Promise<boolean> {
  const firstName = name.split(' ')[0]

  const milestoneConfig: Record<
    MilestonePercent,
    { subject: string; headline: string; body: string }
  > = {
    25: {
      subject: `25% done — you've got the momentum now`,
      headline: `Quarter of the way there.`,
      body: `Starting is the hardest part, and you're past it. You've built the habit &mdash; now let it carry you. Keep the same pace and you'll finish before you know it.`,
    },
    50: {
      subject: `You're halfway through the course`,
      headline: `Halfway there, ${firstName}.`,
      body: `Fifty percent down. The material gets a bit denser from here, but you've already proven you can handle it. The next 50% will go faster than the first &mdash; everything builds on what you've already covered.`,
    },
    75: {
      subject: `75% done — the finish line is in sight`,
      headline: `Three-quarters complete.`,
      body: `You're in the final stretch. Most of the heavy lifting is behind you. Now's a good time to start running mock exams alongside your remaining lessons &mdash; it'll do more for your exam readiness than anything else at this stage.`,
    },
  }

  const config = milestoneConfig[milestone]

  const content = `
    <!-- Milestone badge -->
    <div style="text-align:center;margin-bottom:28px;">
      <div style="display:inline-block;background:${EXP_BLUE};color:#ffffff;font-size:36px;font-weight:800;width:80px;height:80px;line-height:80px;border-radius:50;text-align:center;border-radius:50%;">
        ${milestone}%
      </div>
    </div>

    <h1 style="margin:0 0 8px;font-size:22px;font-weight:700;color:#18181b;">${config.headline}</h1>
    <p style="margin:0 0 24px;font-size:15px;color:#52525b;line-height:1.6;">
      ${config.body}
    </p>

    <div style="text-align:left;">
      ${ctaButton('Keep going', `${BASE_URL}/course`)}
    </div>
  `

  return sendEmail(to, config.subject, emailWrapper(content))
}
