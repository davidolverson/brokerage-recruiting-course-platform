#!/usr/bin/env node
/**
 * Upload all audio files to Cloudflare R2 bucket
 * Usage: node scripts/upload-audio-r2.mjs
 */

import { execSync } from 'child_process'
import { readdirSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const PROJECT_ROOT = resolve(__dirname, '..')
const AUDIO_DIR = resolve(PROJECT_ROOT, 'public/audio/lessons')
const BUCKET = process.env.R2_BUCKET || 'your-audio-bucket'

const files = readdirSync(AUDIO_DIR).filter(f => f.endsWith('.mp3'))
console.log(`\n  Uploading ${files.length} audio files to R2 bucket: ${BUCKET}\n`)

let uploaded = 0
let failed = 0

for (let i = 0; i < files.length; i++) {
  const file = files[i]
  const filePath = resolve(AUDIO_DIR, file)
  const objectKey = `${BUCKET}/lessons/${file}`

  process.stdout.write(`  [${i + 1}/${files.length}] ${file}...`)

  try {
    execSync(
      `npx wrangler r2 object put "${objectKey}" --file="${filePath}" --content-type="audio/mpeg" --remote`,
      { cwd: PROJECT_ROOT, stdio: 'pipe', timeout: 60000 }
    )
    console.log(' done')
    uploaded++
  } catch (err) {
    console.log(` FAILED: ${err.message?.slice(0, 100)}`)
    failed++
  }
}

console.log(`\n  Results: ${uploaded} uploaded, ${failed} failed, ${files.length} total\n`)
