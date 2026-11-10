/**
 * Generate SQL to seed quiz questions and options from course-questions.ts
 * Run with: node scripts/generate-quiz-seed-sql.mjs
 * Appends to: src/db/migrations/0008_seed_course_content.sql
 */

import { readFileSync, appendFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')

const questionsFile = readFileSync(join(ROOT, 'src/lib/data/course-questions.ts'), 'utf-8')

function escape(str) {
  return str.replace(/'/g, "''").replace(/\\/g, '\\\\')
}

// Parse questions from the TypeScript file
function extractQuestions() {
  const questions = []
  const lines = questionsFile.split('\n')

  let inQuestion = false
  let current = {}
  let options = []
  let braceDepth = 0

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim()

    // Start of a question object
    if (line === '{' && !inQuestion) {
      // Check if previous non-empty line hints at question context
      inQuestion = true
      current = {}
      options = []
      braceDepth = 1
      continue
    }

    if (!inQuestion) continue

    // Track brace depth
    for (const ch of line) {
      if (ch === '{') braceDepth++
      if (ch === '}') braceDepth--
    }

    // Extract fields
    const idMatch = line.match(/id:\s*'([^']+)'/)
    if (idMatch) current.id = idMatch[1]

    const chapterMatch = line.match(/chapterId:\s*'([^']+)'/)
    if (chapterMatch) current.chapterId = chapterMatch[1]

    const typeMatch = line.match(/quizType:\s*'([^']+)'/)
    if (typeMatch) current.quizType = typeMatch[1]

    const diffMatch = line.match(/difficulty:\s*'([^']+)'/)
    if (diffMatch) current.difficulty = diffMatch[1]

    const tagMatch = line.match(/topicTag:\s*'([^']+)'/)
    if (tagMatch) current.topicTag = tagMatch[1]

    // Question text (may span multiple lines)
    const qtMatch = line.match(/questionText:\s*$/)
    if (qtMatch) {
      // Next line has the text
      const nextLine = lines[i + 1]?.trim()
      if (nextLine) {
        current.questionText = nextLine.replace(/^'/, '').replace(/',?$/, '')
      }
    }
    const qtInlineMatch = line.match(/questionText:\s*'([^']+)'/)
    if (qtInlineMatch) current.questionText = qtInlineMatch[1]

    // Multi-line questionText
    const qtMLMatch = line.match(/questionText:[\s]*$/)
    if (qtMLMatch) {
      let text = ''
      for (let j = i + 1; j < lines.length; j++) {
        const tl = lines[j].trim()
        if (tl.endsWith("',") || tl.endsWith("'")) {
          text += tl.replace(/^'/, '').replace(/',?$/, '')
          break
        }
        text += tl.replace(/^'/, '').replace(/'$/, '') + ' '
      }
      if (text) current.questionText = text.trim()
    }

    // Explanation
    const expInlineMatch = line.match(/explanation:\s*'([^']+)'/)
    if (expInlineMatch) current.explanation = expInlineMatch[1]
    const expMLMatch = line.match(/explanation:[\s]*$/)
    if (expMLMatch) {
      let text = ''
      for (let j = i + 1; j < lines.length; j++) {
        const tl = lines[j].trim()
        if (tl.endsWith("',") || tl.endsWith("'")) {
          text += tl.replace(/^'/, '').replace(/',?$/, '')
          break
        }
        text += tl.replace(/^'/, '').replace(/'$/, '') + ' '
      }
      if (text) current.explanation = text.trim()
    }

    // Options
    const optMatch = line.match(/\{\s*id:\s*'([^']+)',\s*text:\s*'([^']+)',\s*isCorrect:\s*(true|false)\s*\}/)
    if (optMatch) {
      options.push({
        id: optMatch[1],
        text: optMatch[2],
        isCorrect: optMatch[3] === 'true',
      })
    }

    // Multi-line option with text on next line
    const optStartMatch = line.match(/\{\s*id:\s*'([^']+)',\s*$/)
    if (optStartMatch) {
      const textLine = lines[i + 1]?.trim()
      const correctLine = lines[i + 2]?.trim()
      const textMatch = textLine?.match(/text:\s*'([^']+)',?/)
      const correctMatch = correctLine?.match(/isCorrect:\s*(true|false)/)
      if (textMatch && correctMatch) {
        options.push({
          id: optStartMatch[1],
          text: textMatch[1],
          isCorrect: correctMatch[1] === 'true',
        })
      }
    }

    // End of question (brace depth back to 0)
    if (braceDepth <= 0 && current.id) {
      current.options = options
      if (current.questionText && current.chapterId && options.length >= 4) {
        questions.push({ ...current })
      }
      inQuestion = false
      current = {}
      options = []
    }
  }

  return questions
}

const questions = extractQuestions()
console.log(`Extracted ${questions.length} questions`)

let sql = `\n-- ============================================================================
-- QUIZ QUESTIONS AND OPTIONS
-- ============================================================================
`

for (let qi = 0; qi < questions.length; qi++) {
  const q = questions[qi]
  sql += `\n-- Question: ${q.id}
DO $$ DECLARE qid INTEGER; BEGIN
INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
VALUES (
  (SELECT id FROM course_chapters WHERE slug = '${escape(q.chapterId)}'),
  '${escape(q.quizType || 'chapter_quiz')}',
  '${escape(q.questionText)}',
  '${escape(q.explanation || '')}',
  '${escape(q.difficulty || 'medium')}',
  '${escape(q.topicTag || '')}',
  ${qi + 1},
  true
) RETURNING id INTO qid;
`

  for (let oi = 0; oi < q.options.length; oi++) {
    const opt = q.options[oi]
    sql += `INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
VALUES (qid, '${escape(opt.text)}', ${opt.isCorrect}, ${oi + 1});
`
  }

  sql += `END $$;\n`
}

const outPath = join(ROOT, 'src/db/migrations/0008_seed_course_content.sql')
appendFileSync(outPath, sql)
console.log(`Appended quiz questions to ${outPath}`)
