#!/usr/bin/env node
/**
 * TTS Audio Generation for PLE (Post-License Education) Course
 *
 * Generates MP3 narration for all PLE lessons using Edge-TTS (free).
 * Extracts content from all 4 PLE content files (mod123, mod4, mod567, mod89).
 *
 * Usage:
 *   node scripts/generate-ple-audio.mjs                    # Generate all PLE lessons
 *   node scripts/generate-ple-audio.mjs --lesson=slug      # Single lesson
 *   node scripts/generate-ple-audio.mjs --dry-run          # List lessons without generating
 *   node scripts/generate-ple-audio.mjs --force            # Regenerate existing files
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
const singleLesson = args.find(a => a.startsWith('--lesson='))?.split('=')[1]
const dryRun = args.includes('--dry-run')
const force = args.includes('--force')

// Ensure output dir
if (!existsSync(OUTPUT_DIR)) mkdirSync(OUTPUT_DIR, { recursive: true })

// Extract PLE lessons from all 4 content files using tsx
function extractPleLessons() {
  const inlineScript = `
    import { PLE_MODULES_123 } from './src/lib/data/ple-content-mod123.ts';
    import { PLE_MODULE_4 } from './src/lib/data/ple-content-mod4.ts';
    import { PLE_MODULES_567 } from './src/lib/data/ple-content-mod567.ts';
    import { PLE_MODULES_89 } from './src/lib/data/ple-content-mod89.ts';
    const allModules = [...PLE_MODULES_123, ...PLE_MODULE_4, ...PLE_MODULES_567, ...PLE_MODULES_89];
    const lessons = [];
    for (const mod of allModules) {
      for (const ch of mod.chapters) {
        for (const lesson of ch.lessons) {
          lessons.push({ slug: lesson.slug, title: lesson.title, module: mod.title, chapter: ch.title, content: lesson.content || '' });
        }
      }
    }
    process.stdout.write(JSON.stringify(lessons));
  `.replace(/\n/g, ' ')

  try {
    const result = execSync(`npx tsx -e "${inlineScript.replace(/"/g, '\\"')}"`, {
      cwd: PROJECT_ROOT,
      encoding: 'utf-8',
      maxBuffer: 100 * 1024 * 1024,
    })
    return JSON.parse(result)
  } catch (e) {
    console.log('[WARN] tsx extraction failed, falling back to regex parser:', e.message?.slice(0, 200))
    return extractLessonsFromFiles()
  }
}

// Fallback: regex extraction from all 4 PLE content files
function extractLessonsFromFiles() {
  const files = [
    'src/lib/data/ple-content-mod123.ts',
    'src/lib/data/ple-content-mod4.ts',
    'src/lib/data/ple-content-mod567.ts',
    'src/lib/data/ple-content-mod89.ts',
  ]

  const lessons = []
  for (const file of files) {
    const content = readFileSync(resolve(PROJECT_ROOT, file), 'utf-8')
    const lessonPattern = /{\s*slug:\s*'([^']+)',\s*title:\s*'([^']+)',[\s\S]*?content:\s*`([\s\S]*?)`,/g
    let match
    while ((match = lessonPattern.exec(content)) !== null) {
      lessons.push({
        slug: match[1],
        title: match[2],
        content: match[3],
      })
    }
  }

  return lessons
}

function stripMarkdown(text) {
  return text
    // Remove markdown headers
    .replace(/^#{1,6}\s+/gm, '')
    // Remove bold/italic markers
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/\*([^*]+)\*/g, '$1')
    // Remove links but keep text
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    // Remove markdown tables (keep content)
    .replace(/\|/g, '. ')
    .replace(/^-{3,}/gm, '')
    // Remove HTML tags
    .replace(/<[^>]+>/g, ' ')
    // Remove code blocks
    .replace(/```[\s\S]*?```/g, '')
    .replace(/`([^`]+)`/g, '$1')
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
  const tmpTextFile = resolve(PROJECT_ROOT, 'scripts/_tts-ple-input.txt')
  writeFileSync(tmpTextFile, text, 'utf-8')

  return new Promise((resolvePromise, reject) => {
    const proc = spawn('python', [
      '-m', 'edge_tts',
      '--voice', 'en-US-GuyNeural',
      '--file', tmpTextFile,
      '--write-media', outputPath
    ], {
      shell: true,
      cwd: PROJECT_ROOT,
    })
    let stderr = ''
    proc.stderr.on('data', d => stderr += d.toString())
    proc.on('close', code => {
      if (code === 0) resolvePromise()
      else reject(new Error(`edge-tts exited ${code}: ${stderr}`))
    })
  })
}

// Main
async function main() {
  console.log(`\n  Acme Realty PLE Course - Audio Generation`)
  console.log(`  Engine: Edge-TTS (free)`)
  console.log(`  Voice: en-US-GuyNeural`)
  console.log(`  Output: ${OUTPUT_DIR}\n`)

  console.log('  Extracting PLE lessons...')
  const lessons = extractPleLessons()
  console.log(`  Found ${lessons.length} PLE lessons\n`)

  const targets = singleLesson
    ? lessons.filter(l => l.slug === singleLesson || l.slug.includes(singleLesson))
    : lessons

  if (targets.length === 0) {
    console.log(`  No lessons found${singleLesson ? ` matching "${singleLesson}"` : ''}`)
    process.exit(1)
  }

  if (dryRun) {
    for (const l of targets) {
      const exists = existsSync(resolve(OUTPUT_DIR, `${l.slug}.mp3`))
      const text = stripMarkdown(l.content)
      const module = l.module || 'Unknown'
      console.log(`  ${exists ? '[EXISTS]' : '[MISSING]'} ${l.slug} (${text.length} chars) [${module}]`)
    }
    const missing = targets.filter(l => !existsSync(resolve(OUTPUT_DIR, `${l.slug}.mp3`)))
    console.log(`\n  Total: ${targets.length} lessons (${missing.length} missing audio)`)
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

    const text = stripMarkdown(lesson.content)
    if (text.length < 50) {
      console.log(`  [SKIP] ${lesson.slug} - content too short (${text.length} chars)`)
      skipped++
      continue
    }

    // Prepend title for context
    const narration = `${lesson.title}. ${text}`

    process.stdout.write(`  [${i + 1}/${targets.length}] ${lesson.slug}...`)

    try {
      await generateWithEdgeTTS(narration, outputPath)
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
