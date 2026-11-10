import { NextResponse } from 'next/server'
import { getServerSession } from '@/lib/auth-server'
import { getEnrollment } from '@/lib/db/course'
import { neon } from '@neondatabase/serverless'

export const dynamic = 'force-dynamic'

function getSql() {
  const url = process.env.DATABASE_URL
  if (!url) throw new Error('DATABASE_URL not configured')
  return neon(url)
}

interface NoteRow {
  id: number
  note_type: string
  content: string
  highlighted_text: string | null
  page_context: string | null
  tags: string[]
  created_at: string
  lesson_title: string | null
  lesson_slug: string | null
  chapter_title: string | null
  module_title: string | null
  module_slug: string | null
}

function formatDate(isoString: string): string {
  const d = new Date(isoString)
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}

function tagLabel(tag: string): string {
  const map: Record<string, string> = {
    'important': 'IMPORTANT',
    'review-later': 'REVIEW LATER',
    'confused': 'CONFUSED',
    'exam-topic': 'EXAM TOPIC',
  }
  return map[tag] ?? tag.toUpperCase()
}

function buildMarkdown(notes: NoteRow[], studentName: string): string {
  const lines: string[] = []
  const exportDate = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })

  lines.push('# VA Real Estate License Prep — Study Guide')
  lines.push(`**Student:** ${studentName}`)
  lines.push(`**Exported:** ${exportDate}`)
  lines.push(`**Total Notes:** ${notes.length}`)
  lines.push('')
  lines.push('---')
  lines.push('')

  // ── Flagged for Review ──────────────────────────────────────────
  const flagged = notes.filter((n) => n.tags.includes('review-later') || n.tags.includes('confused'))
  if (flagged.length > 0) {
    lines.push('## Flagged for Review')
    lines.push('')
    for (const note of flagged) {
      const location = note.lesson_title
        ? `*${note.chapter_title ?? ''} > ${note.lesson_title}*`
        : note.page_context
          ? `*${note.page_context}*`
          : '*General*'

      const tagBadges = note.tags.map(tagLabel).join(' | ')
      lines.push(`### ${location}`)
      if (tagBadges) lines.push(`**Tags:** ${tagBadges}`)
      lines.push('')

      if (note.highlighted_text) {
        lines.push('> ' + note.highlighted_text.split('\n').join('\n> '))
        lines.push('')
      }

      lines.push(note.content)
      lines.push('')
      lines.push(`*Added ${formatDate(note.created_at)}*`)
      lines.push('')
      lines.push('---')
      lines.push('')
    }
  }

  // ── Group by module > chapter > lesson ────────────────────────

  // Build a hierarchy map
  type ChapterMap = Map<string, { title: string; notes: NoteRow[] }>
  type ModuleMap = Map<string, { title: string; chapters: ChapterMap }>

  const moduleMap: ModuleMap = new Map()

  for (const note of notes) {
    const modSlug = note.module_slug ?? 'general'
    const modTitle = note.module_title ?? 'General Notes'
    const chTitle = note.chapter_title ?? 'Uncategorized'
    const chKey = chTitle

    if (!moduleMap.has(modSlug)) {
      moduleMap.set(modSlug, { title: modTitle, chapters: new Map() })
    }
    const mod = moduleMap.get(modSlug)!

    if (!mod.chapters.has(chKey)) {
      mod.chapters.set(chKey, { title: chTitle, notes: [] })
    }
    mod.chapters.get(chKey)!.notes.push(note)
  }

  lines.push('## Notes by Module')
  lines.push('')

  for (const [, mod] of moduleMap) {
    lines.push(`## ${mod.title}`)
    lines.push('')

    for (const [, chapter] of mod.chapters) {
      lines.push(`### ${chapter.title}`)
      lines.push('')

      // Group by lesson
      type LessonGroup = Map<string, { title: string; notes: NoteRow[] }>
      const lessonMap: LessonGroup = new Map()

      for (const note of chapter.notes) {
        const lKey = note.lesson_slug ?? '__no-lesson__'
        const lTitle = note.lesson_title ?? 'Quiz / General'
        if (!lessonMap.has(lKey)) lessonMap.set(lKey, { title: lTitle, notes: [] })
        lessonMap.get(lKey)!.notes.push(note)
      }

      for (const [, lesson] of lessonMap) {
        if (lesson.title !== 'Quiz / General') {
          lines.push(`#### ${lesson.title}`)
          lines.push('')
        }

        for (const note of lesson.notes) {
          const typeLabel = note.note_type === 'highlight' ? 'Highlight'
            : note.note_type === 'quiz' ? 'Quiz Note'
            : note.note_type === 'bookmark' ? 'Bookmark'
            : 'Note'

          const tagBadges = note.tags.map(tagLabel).join(' | ')

          lines.push(`**[${typeLabel}]**${tagBadges ? ` — ${tagBadges}` : ''}`)

          if (note.highlighted_text) {
            lines.push('')
            lines.push('> ' + note.highlighted_text.split('\n').join('\n> '))
          }

          lines.push('')
          lines.push(note.content)
          lines.push('')
          lines.push(`*${formatDate(note.created_at)}*`)
          lines.push('')
        }
      }
    }
  }

  lines.push('---')
  lines.push('*Generated by Acme Realty Real Estate Academy*')

  return lines.join('\n')
}

// ─── GET /api/course/notes/export ─────────────────────────────────────────

export async function GET() {
  const session = await getServerSession()
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const enrollment = await getEnrollment(session.user.id)
  if (!enrollment) {
    return NextResponse.json({ error: 'Not enrolled' }, { status: 403 })
  }

  try {
    const sql = getSql()

    const rows = await sql`
      SELECT
        cn.id,
        cn.note_type,
        cn.content,
        cn.highlighted_text,
        cn.page_context,
        cn.tags,
        cn.created_at,
        cl.title  AS lesson_title,
        cl.slug   AS lesson_slug,
        cc.title  AS chapter_title,
        cm.title  AS module_title,
        cm.slug   AS module_slug
      FROM course_notes cn
      LEFT JOIN course_lessons cl       ON cl.id = cn.lesson_id
      LEFT JOIN course_chapters cc      ON cc.id = cl.chapter_id
      LEFT JOIN course_modules cm       ON cm.id = cc.module_id
      WHERE cn.enrollment_id = ${enrollment.id}
      ORDER BY
        cm.order_index NULLS LAST,
        cc.order_index NULLS LAST,
        cl.order_index NULLS LAST,
        cn.created_at ASC
    ` as NoteRow[]

    if (rows.length === 0) {
      return NextResponse.json({ error: 'No notes to export' }, { status: 404 })
    }

    const studentName = session.user.name ?? session.user.email ?? 'Student'
    const markdown = buildMarkdown(rows, studentName)

    const filename = `study-guide-${new Date().toISOString().slice(0, 10)}.md`

    return new NextResponse(markdown, {
      status: 200,
      headers: {
        'Content-Type': 'text/markdown; charset=utf-8',
        'Content-Disposition': `attachment; filename="${filename}"`,
        'Cache-Control': 'no-store',
      },
    })
  } catch (err) {
    console.error('[NOTES] EXPORT failed:', err)
    return NextResponse.json({ error: 'Failed to export notes' }, { status: 500 })
  }
}
