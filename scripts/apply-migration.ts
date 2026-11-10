// Applies a raw .sql migration file to DATABASE_URL using the full-protocol
// Client (supports multi-statement SQL, unlike the lightweight HTTP `neon()`
// tagged-template used elsewhere in the app for single queries).
// Usage: npx tsx scripts/apply-migration.ts src/db/migrations/0016_contacts_campaigns.sql
import { Client } from '@neondatabase/serverless'
import { readFileSync } from 'fs'

async function main() {
  const file = process.argv[2]
  if (!file) {
    console.error('Usage: npx tsx scripts/apply-migration.ts <path-to-sql-file>')
    process.exit(1)
  }
  const sqlText = readFileSync(file, 'utf8')
  const databaseUrl = process.env.DATABASE_URL
  if (!databaseUrl) {
    console.error('DATABASE_URL not set')
    process.exit(1)
  }
  const client = new Client(databaseUrl)
  await client.connect()
  try {
    await client.query(sqlText)
    console.log(`Applied ${file}`)
  } finally {
    await client.end()
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
