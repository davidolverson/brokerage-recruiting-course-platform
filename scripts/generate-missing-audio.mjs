#!/usr/bin/env node
/**
 * Generate missing lesson audio files using node-edge-tts
 * Voice: en-US-GuyNeural (matches existing 63 files)
 */

import { execSync } from 'child_process'
import { existsSync, mkdirSync, unlinkSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const PROJECT_ROOT = resolve(__dirname, '..')
const OUTPUT_DIR = resolve(PROJECT_ROOT, 'public/audio/lessons')

// The 29 missing lesson slugs
const MISSING_SLUGS = [
  'dpor-overview-licensing-requirements',
  'agency-fundamentals-fiduciary-duties',
  'federal-fair-housing-act',
  'vrlta-overview-applicability',
  'nar-code-of-ethics-overview',
  'tenancy-in-common-joint-tenancy',
  'metes-and-bounds',
  'zoning-classifications-variances',
  'lead-paint-asbestos-disclosures',
  'essential-elements-valid-contract',
  'virginia-purchase-agreement-anatomy',
  'exclusive-right-to-sell',
  'presenting-receiving-offers',
  'breach-of-contract-remedies',
  'conventional-vs-government-loans',
  'underwriting-qualification-criteria',
  'sales-comparison-approach',
  'commission-calculations',
  'mls-cooperation-compensation',
  'virginia-residential-disclosure-act',
  'virginia-closing-process',
  'title-insurance-types',
  'types-of-deeds',
  'property-manager-roles-responsibilities',
  'vreb-regulations-18-vac-135',
  'rein-nvar-standard-forms',
  'virginia-settlement-agents',
  'ce-requirements-renewal',
  'cic-fundamentals-virginia',
]

// Files to delete (module-level files that shouldn't exist + test)
const DELETE_FILES = [
  'contracts-agency.mp3',
  'finance-valuation.mp3',
  'practice-ethics.mp3',
  'property-ownership-land-use.mp3',
  'virginia-real-estate-law.mp3',
  'virginia-specific-regulations.mp3',
  '_test.mp3',
  '_node_test.mp3',
]

function stripMarkdownAndHtml(text) {
  return text
    // Remove HTML tags
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
    .replace(/<[^>]+>/g, ' ')
    // Remove markdown formatting
    .replace(/#{1,6}\s+/g, '') // headers
    .replace(/\*\*([^*]+)\*\*/g, '$1') // bold
    .replace(/\*([^*]+)\*/g, '$1') // italic
    .replace(/__([^_]+)__/g, '$1') // bold
    .replace(/_([^_]+)_/g, '$1') // italic
    .replace(/`{1,3}[^`]*`{1,3}/g, '') // code
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // links
    .replace(/!\[([^\]]*)\]\([^)]+\)/g, '') // images
    .replace(/^\s*[-*+]\s+/gm, '') // list markers
    .replace(/^\s*\d+\.\s+/gm, '') // numbered lists
    .replace(/^\s*>\s+/gm, '') // blockquotes
    .replace(/---+/g, '') // horizontal rules
    // HTML entities
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    // Clean whitespace
    .replace(/\n{3,}/g, '\n\n')
    .replace(/\s+/g, ' ')
    .trim()
}

function extractLessons() {
  const script = `
    import { COURSE_MODULES } from './src/lib/data/course-content.ts';
    const lessons = [];
    for (const mod of COURSE_MODULES) {
      for (const ch of mod.chapters) {
        for (const lesson of ch.lessons) {
          lessons.push({ slug: lesson.slug, title: lesson.title, content: lesson.content || '' });
        }
      }
    }
    process.stdout.write(JSON.stringify(lessons));
  `.replace(/\n/g, ' ').trim()

  const result = execSync(`npx tsx -e "${script.replace(/"/g, '\\"')}"`, {
    cwd: PROJECT_ROOT,
    encoding: 'utf-8',
    maxBuffer: 50 * 1024 * 1024,
  })
  return JSON.parse(result)
}

async function generateAudio(text, outputPath) {
  // Dynamic import for CommonJS module
  const { EdgeTTS } = await import('node-edge-tts')
  const tts = new EdgeTTS({
    voice: 'en-US-GuyNeural',
    lang: 'en-US',
    outputFormat: 'audio-24khz-96kbitrate-mono-mp3',
    timeout: 60000,
  })
  await tts.ttsPromise(text, outputPath)
}

async function main() {
  console.log('\n  Acme Realty - Generate Missing Audio (node-edge-tts)')
  console.log(`  Output: ${OUTPUT_DIR}\n`)

  // Step 1: Delete unwanted files
  console.log('  --- Deleting unwanted files ---')
  for (const file of DELETE_FILES) {
    const filePath = resolve(OUTPUT_DIR, file)
    if (existsSync(filePath)) {
      unlinkSync(filePath)
      console.log(`  [DELETED] ${file}`)
    } else {
      console.log(`  [SKIP] ${file} (not found)`)
    }
  }

  // Step 2: Extract lessons
  console.log('\n  --- Extracting lessons ---')
  const allLessons = extractLessons()
  console.log(`  Found ${allLessons.length} total lessons`)

  // Filter to only missing slugs
  const missingLessons = allLessons.filter(l => MISSING_SLUGS.includes(l.slug))
  console.log(`  ${missingLessons.length} of ${MISSING_SLUGS.length} missing slugs matched in course data`)

  // Check for any slugs not found in course data
  const foundSlugs = new Set(missingLessons.map(l => l.slug))
  const notFound = MISSING_SLUGS.filter(s => !foundSlugs.has(s))
  if (notFound.length > 0) {
    console.log(`  WARNING: ${notFound.length} slugs not found in course data:`)
    notFound.forEach(s => console.log(`    - ${s}`))
  }

  // Step 3: Generate audio for each missing lesson
  console.log('\n  --- Generating audio ---')
  let generated = 0
  let skipped = 0
  let failed = 0

  for (let i = 0; i < missingLessons.length; i++) {
    const lesson = missingLessons[i]
    const outputPath = resolve(OUTPUT_DIR, `${lesson.slug}.mp3`)

    // Skip if already exists (in case of re-run)
    if (existsSync(outputPath)) {
      console.log(`  [${i + 1}/${missingLessons.length}] ${lesson.slug} - already exists, skipping`)
      skipped++
      continue
    }

    const cleanText = stripMarkdownAndHtml(lesson.content)
    if (cleanText.length < 50) {
      console.log(`  [${i + 1}/${missingLessons.length}] ${lesson.slug} - content too short (${cleanText.length} chars), skipping`)
      skipped++
      continue
    }

    // Prepend title
    const narration = `${lesson.title}. ${cleanText}`

    process.stdout.write(`  [${i + 1}/${missingLessons.length}] ${lesson.slug} (${narration.length} chars)...`)

    try {
      await generateAudio(narration, outputPath)
      console.log(' done')
      generated++
    } catch (err) {
      console.log(` FAILED: ${err.message}`)
      failed++
      // Wait a bit before retrying next one
      await new Promise(r => setTimeout(r, 2000))
    }
  }

  console.log(`\n  --- Results ---`)
  console.log(`  Generated: ${generated}`)
  console.log(`  Skipped: ${skipped}`)
  console.log(`  Failed: ${failed}`)

  // Final count
  const { readdirSync } = await import('fs')
  const finalFiles = readdirSync(OUTPUT_DIR).filter(f => f.endsWith('.mp3') && !f.startsWith('_'))
  console.log(`  Total audio files: ${finalFiles.length}`)
  console.log()
}

main().catch(err => {
  console.error('Fatal:', err)
  process.exit(1)
})
