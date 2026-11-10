import { NextResponse } from 'next/server'
import { neon } from '@neondatabase/serverless'

export async function GET() {
  const databaseUrl = process.env.DATABASE_URL
  if (!databaseUrl) {
    return NextResponse.json({ hasOwner: false })
  }

  const sql = neon(databaseUrl)
  const rows = await sql`SELECT COUNT(*) as count FROM admin_users WHERE role = 'owner'`
  const hasOwner = Number(rows[0]?.count) > 0

  return NextResponse.json({ hasOwner })
}
