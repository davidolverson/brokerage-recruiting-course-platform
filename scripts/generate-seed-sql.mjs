/**
 * Generate SQL seed migration from course-content.ts data.
 * Run with: node scripts/generate-seed-sql.mjs
 * Outputs: src/db/migrations/0008_seed_course_content.sql
 */

import { readFileSync, writeFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')

// We can't import TS directly, so we'll parse the content file for module/chapter/lesson data
// by evaluating it with a simple extractor

// Read the content file
const contentFile = readFileSync(join(ROOT, 'src/lib/data/course-content.ts'), 'utf-8')

// Extract module data using regex patterns
function extractModules() {
  const modules = []
  const moduleRegex = /const module(\d+): CourseModule = \{[\s\S]*?slug: '([^']+)',[\s\S]*?title: '([^']+)',[\s\S]*?subtitle: '([^']+)',[\s\S]*?examWeight: '([^']+)',/g

  let match
  while ((match = moduleRegex.exec(contentFile)) !== null) {
    modules.push({
      index: parseInt(match[1]),
      slug: match[2],
      title: match[3],
      subtitle: match[4],
      examWeight: match[5],
    })
  }
  return modules
}

function extractChapters() {
  const chapters = []
  // Find chapter blocks - they're at 6-space indent with slug and title
  const lines = contentFile.split('\n')
  let currentModule = null
  let chapterOrder = 0

  for (let i = 0; i < lines.length; i++) {
    // Detect module start
    const modMatch = lines[i].match(/const module(\d+): CourseModule/)
    if (modMatch) {
      currentModule = parseInt(modMatch[1])
      chapterOrder = 0
    }

    // Detect chapter slug (6 spaces indent)
    const chSlugMatch = lines[i].match(/^      slug: '([^']+)',/)
    if (chSlugMatch && currentModule) {
      const titleMatch = lines[i + 1]?.match(/title: '([^']+)'/)
      if (titleMatch) {
        chapterOrder++
        chapters.push({
          moduleIndex: currentModule,
          slug: chSlugMatch[1],
          title: titleMatch[1],
          orderIndex: chapterOrder,
        })
      }
    }
  }
  return chapters
}

function extractLessons() {
  const lessons = []
  const lines = contentFile.split('\n')
  let currentChapter = null
  let lessonOrder = 0

  for (let i = 0; i < lines.length; i++) {
    // Detect chapter slug
    const chSlugMatch = lines[i].match(/^      slug: '([^']+)',/)
    if (chSlugMatch) {
      const titleLine = lines[i + 1]
      if (titleLine && titleLine.match(/title:/)) {
        currentChapter = chSlugMatch[1]
        lessonOrder = 0
      }
    }

    // Detect lesson slug (10 spaces indent)
    const lsSlugMatch = lines[i].match(/^          slug: '([^']+)',/)
    if (lsSlugMatch && currentChapter) {
      const titleMatch = lines[i + 1]?.match(/title: '([^']+)'/)
      const typeMatch = lines[i + 2]?.match(/lessonType: '([^']+)'/)
      const minsMatch = lines[i + 3]?.match(/estimatedMinutes: (\d+)/)

      if (titleMatch) {
        lessonOrder++
        lessons.push({
          chapterSlug: currentChapter,
          slug: lsSlugMatch[1],
          title: titleMatch[1],
          lessonType: typeMatch?.[1] || 'reading',
          estimatedMinutes: parseInt(minsMatch?.[1] || '15'),
          orderIndex: lessonOrder,
        })
      }
    }
  }
  return lessons
}

function escape(str) {
  return str.replace(/'/g, "''")
}

const modules = extractModules()
const chapters = extractChapters()
const lessons = extractLessons()

console.log(`Found ${modules.length} modules, ${chapters.length} chapters, ${lessons.length} lessons`)

let sql = `-- Auto-generated from course-content.ts
-- Seeds modules, chapters, and lessons into the database
-- Run this after 0007_course_tables.sql

-- ============================================================================
-- MODULES
-- ============================================================================
`

for (const mod of modules) {
  const hours = Math.round(chapters.filter(c => c.moduleIndex === mod.index).length * 2.5)
  sql += `INSERT INTO course_modules (slug, title, description, order_index, is_published, estimated_hours)
VALUES ('${escape(mod.slug)}', '${escape(mod.title)}', '${escape(mod.subtitle)}', ${mod.index}, true, ${hours})
ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, description = EXCLUDED.description, is_published = true;\n\n`
}

sql += `-- ============================================================================
-- CHAPTERS
-- ============================================================================
`

for (const ch of chapters) {
  const modSlug = modules.find(m => m.index === ch.moduleIndex)?.slug
  if (!modSlug) continue
  sql += `INSERT INTO course_chapters (module_id, slug, title, order_index, is_published)
VALUES ((SELECT id FROM course_modules WHERE slug = '${escape(modSlug)}'), '${escape(ch.slug)}', '${escape(ch.title)}', ${ch.orderIndex}, true)
ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, is_published = true;\n\n`
}

sql += `-- ============================================================================
-- LESSONS
-- ============================================================================
`

for (const ls of lessons) {
  sql += `INSERT INTO course_lessons (chapter_id, slug, title, lesson_type, estimated_minutes, order_index, is_published)
VALUES ((SELECT id FROM course_chapters WHERE slug = '${escape(ls.chapterSlug)}'), '${escape(ls.slug)}', '${escape(ls.title)}', '${escape(ls.lessonType)}', ${ls.estimatedMinutes}, ${ls.orderIndex}, true)
ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, lesson_type = EXCLUDED.lesson_type, estimated_minutes = EXCLUDED.estimated_minutes, is_published = true;\n\n`
}

// Write the output
const outPath = join(ROOT, 'src/db/migrations/0008_seed_course_content.sql')
writeFileSync(outPath, sql)
console.log(`Wrote ${outPath}`)
console.log(`SQL size: ${(sql.length / 1024).toFixed(1)} KB`)
