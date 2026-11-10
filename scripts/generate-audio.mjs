#!/usr/bin/env node
/**
 * TTS Audio Generation for Acme Realty Course
 *
 * Generates MP3 narration for all course lessons using Edge-TTS (free)
 * or OpenAI TTS (paid, higher quality).
 *
 * Usage:
 *   node scripts/generate-audio.mjs                    # Generate all lessons (edge-tts)
 *   node scripts/generate-audio.mjs --engine=openai    # Use OpenAI TTS ($)
 *   node scripts/generate-audio.mjs --lesson=dpor-overview  # Single lesson
 *   node scripts/generate-audio.mjs --dry-run          # List lessons without generating
 */

import { execSync, spawn } from 'child_process'
import { existsSync, mkdirSync, writeFileSync, readFileSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const PROJECT_ROOT = resolve(__dirname, '..')
const OUTPUT_DIR = resolve(PROJECT_ROOT, 'public/audio/lessons')

// Parse args
const args = process.argv.slice(2)
const engine = args.find(a => a.startsWith('--engine='))?.split('=')[1] || 'edge'
const singleLesson = args.find(a => a.startsWith('--lesson='))?.split('=')[1]
const dryRun = args.includes('--dry-run')
const force = args.includes('--force')

// Ensure output dir
if (!existsSync(OUTPUT_DIR)) mkdirSync(OUTPUT_DIR, { recursive: true })

// Dynamically import course content (we need to handle the TS imports)
// Strategy: use tsx to evaluate and export the lesson list
function extractLessons() {
  const inlineScript = `import { COURSE_MODULES } from './src/lib/data/course-content.ts'; const lessons = []; for (const mod of COURSE_MODULES) { for (const ch of mod.chapters) { for (const lesson of ch.lessons) { lessons.push({ slug: lesson.slug, title: lesson.title, module: mod.title, chapter: ch.title, content: lesson.content || '' }); } } } process.stdout.write(JSON.stringify(lessons));`

  try {
    const result = execSync(`npx tsx -e "${inlineScript.replace(/"/g, '\\"')}"`, {
      cwd: PROJECT_ROOT,
      encoding: 'utf-8',
      maxBuffer: 50 * 1024 * 1024,
    })
    return JSON.parse(result)
  } catch (e) {
    // Fallback: parse the TS file directly with regex
    console.log('[WARN] tsx extraction failed, falling back to regex parser:', e.message?.slice(0, 200))
    return extractLessonsFromFile()
  }
}

function extractLessonsFromFile() {
  const contentFile = readFileSync(
    resolve(PROJECT_ROOT, 'src/lib/data/course-content.ts'),
    'utf-8'
  )

  const lessons = []
  // Match slug + title + content patterns
  const slugMatches = [...contentFile.matchAll(/slug:\s*['"]([^'"]+)['"]/g)]
  const titleMatches = [...contentFile.matchAll(/title:\s*['"]([^'"]+)['"]/g)]

  // Simple: just get lesson slugs from the file
  const lessonSlugs = [...contentFile.matchAll(/lessons:\s*\[[\s\S]*?slug:\s*'([^']+)'/g)]

  // Better approach: find all lesson objects
  const lessonPattern = /{\s*slug:\s*'([^']+)',\s*title:\s*'([^']+)',[\s\S]*?content:\s*`([\s\S]*?)`,/g
  let match
  while ((match = lessonPattern.exec(contentFile)) !== null) {
    lessons.push({
      slug: match[1],
      title: match[2],
      content: match[3],
    })
  }

  return lessons
}

function stripMarkdownAndHtml(text) {
  return text
    // Remove markdown headers (## Title -> Title)
    .replace(/^#{1,6}\s+/gm, '')
    // Remove bold/italic markers
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/\*([^*]+)\*/g, '$1')
    // Remove links but keep text
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    // Remove markdown tables (pipes become pauses)
    .replace(/\|/g, '. ')
    .replace(/^-{3,}/gm, '')
    // Remove code blocks
    .replace(/```[\s\S]*?```/g, '')
    .replace(/`([^`]+)`/g, '$1')
    // Remove HTML tags
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
    .replace(/<[^>]+>/g, ' ')
    // Clean up entities
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    // Clean up whitespace
    .replace(/\n{3,}/g, '\n\n')
    .replace(/\s+/g, ' ')
    .trim()
}

async function generateWithEdgeTTS(text, outputPath) {
  // Write text to temp file to avoid shell escaping issues
  const tmpTextFile = resolve(PROJECT_ROOT, 'scripts/_tts-input.txt')
  writeFileSync(tmpTextFile, text, 'utf-8')

  return new Promise((resolve, reject) => {
    const proc = spawn('python', ['-m', 'edge_tts', '--voice', 'en-US-GuyNeural', '--file', tmpTextFile, '--write-media', outputPath], {
      shell: true,
      cwd: PROJECT_ROOT,
    })
    let stderr = ''
    proc.stderr.on('data', d => stderr += d.toString())
    proc.on('close', code => {
      if (code === 0) resolve()
      else reject(new Error(`edge-tts exited ${code}: ${stderr}`))
    })
  })
}

async function generateWithOpenAI(text, outputPath) {
  const apiKey = process.env.OPENAI_API_KEY
  if (!apiKey) throw new Error('OPENAI_API_KEY not set')

  // OpenAI TTS has a 4096 char limit per request, so chunk the text
  const chunks = []
  const words = text.split(' ')
  let chunk = ''
  for (const word of words) {
    if ((chunk + ' ' + word).length > 3800) {
      chunks.push(chunk.trim())
      chunk = word
    } else {
      chunk += ' ' + word
    }
  }
  if (chunk.trim()) chunks.push(chunk.trim())

  const audioBuffers = []
  for (let i = 0; i < chunks.length; i++) {
    const res = await fetch('https://api.openai.com/v1/audio/speech', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'tts-1',
        input: chunks[i],
        voice: 'onyx',
        response_format: 'mp3',
      }),
    })

    if (!res.ok) throw new Error(`OpenAI TTS error: ${res.status} ${await res.text()}`)
    audioBuffers.push(Buffer.from(await res.arrayBuffer()))
  }

  // Concatenate MP3 buffers (MP3 is concatenable)
  const combined = Buffer.concat(audioBuffers)
  writeFileSync(outputPath, combined)
}

// Main
async function main() {
  console.log(`\n  Acme Realty Course - Audio Generation`)
  console.log(`  Engine: ${engine === 'openai' ? 'OpenAI TTS ($)' : 'Edge-TTS (free)'}`)
  console.log(`  Output: ${OUTPUT_DIR}\n`)

  console.log('  Extracting lessons...')
  const lessons = extractLessons()
  console.log(`  Found ${lessons.length} lessons\n`)

  const targets = singleLesson
    ? lessons.filter(l => l.slug === singleLesson)
    : lessons

  if (targets.length === 0) {
    console.log(`  No lessons found${singleLesson ? ` matching "${singleLesson}"` : ''}`)
    process.exit(1)
  }

  if (dryRun) {
    for (const l of targets) {
      const exists = existsSync(resolve(OUTPUT_DIR, `${l.slug}.mp3`))
      const text = stripMarkdownAndHtml(l.content)
      console.log(`  ${exists ? '[EXISTS]' : '[MISSING]'} ${l.slug} (${text.length} chars)`)
    }
    console.log(`\n  Total: ${targets.length} lessons`)
    return
  }

  let generated = 0
  let skipped = 0
  let failed = 0

  for (let i = 0; i < targets.length; i++) {
    const lesson = targets[i]
    const outputPath = resolve(OUTPUT_DIR, `${lesson.slug}.mp3`)

    if (existsSync(outputPath) && !force) {
      skipped++
      continue
    }

    const text = stripMarkdownAndHtml(lesson.content)
    if (text.length < 50) {
      console.log(`  [SKIP] ${lesson.slug} - content too short (${text.length} chars)`)
      skipped++
      continue
    }

    // Prepend title for context
    const narration = `${lesson.title}. ${text}`

    process.stdout.write(`  [${i + 1}/${targets.length}] ${lesson.slug}...`)

    try {
      if (engine === 'openai') {
        await generateWithOpenAI(narration, outputPath)
      } else {
        await generateWithEdgeTTS(narration, outputPath)
      }
      console.log(` done (${text.length} chars)`)
      generated++
    } catch (err) {
      console.log(` FAILED: ${err.message}`)
      failed++
    }
  }

  console.log(`\n  Results: ${generated} generated, ${skipped} skipped, ${failed} failed`)
  console.log(`  Audio files: ${OUTPUT_DIR}\n`)
}

main().catch(err => {
  console.error('Fatal:', err)
  process.exit(1)
})
