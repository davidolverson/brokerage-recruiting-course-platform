import { QUESTION_BANK } from '../src/lib/data/course-questions'
import { writeFileSync, readFileSync } from 'fs'
import { join } from 'path'

function escape(str: string): string {
  return str.replace(/'/g, "''")
}

const existing = readFileSync(join(__dirname, '../src/db/migrations/0008_seed_course_content.sql'), 'utf-8')

// Remove any previously appended quiz section
const quizSectionIndex = existing.indexOf('\n-- ====')
const cleanedSQL = quizSectionIndex > 0 && existing.slice(quizSectionIndex).includes('QUIZ QUESTIONS')
  ? existing.slice(0, quizSectionIndex)
  : existing

let sql = `\n-- ============================================================================
-- QUIZ QUESTIONS AND OPTIONS (${QUESTION_BANK.length} questions)
-- ============================================================================
`

for (let qi = 0; qi < QUESTION_BANK.length; qi++) {
  const q = QUESTION_BANK[qi]
  sql += `\n-- Question: ${q.id}
DO $$ DECLARE qid INTEGER; BEGIN
INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
VALUES (
  (SELECT id FROM course_chapters WHERE slug = '${escape(q.chapterId)}'),
  '${escape(q.quizType)}',
  '${escape(q.questionText)}',
  '${escape(q.explanation)}',
  '${escape(q.difficulty)}',
  '${escape(q.topicTag)}',
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

const outPath = join(__dirname, '../src/db/migrations/0008_seed_course_content.sql')
writeFileSync(outPath, cleanedSQL + sql)
console.log(`Wrote ${QUESTION_BANK.length} questions to seed SQL`)
console.log(`Output: ${outPath}`)
