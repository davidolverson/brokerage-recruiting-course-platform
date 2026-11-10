import { NextResponse } from 'next/server'
import { neon } from '@neondatabase/serverless'
import { checkProductionEnvs } from '@/lib/env-guard'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export async function GET() {
  const envCheck = checkProductionEnvs()
  if (!envCheck.ok) {
    return NextResponse.json(
      { status: 'unhealthy', reason: 'missing_envs', missing: envCheck.missing },
      { status: 503 }
    )
  }

  try {
    const sql = neon(process.env.DATABASE_URL!)
    const r = await sql`SELECT 1::int AS ok`
    if (r[0]?.ok !== 1) throw new Error('db_query_unexpected_result')
  } catch (e) {
    const msg = e instanceof Error ? e.message : 'db_unreachable'
    return NextResponse.json(
      { status: 'unhealthy', reason: 'db', error: msg },
      { status: 503 }
    )
  }

  return NextResponse.json({
    status: 'ok',
    deploy: process.env.VERCEL_GIT_COMMIT_SHA?.slice(0, 7) ?? 'local',
    env: process.env.VERCEL_ENV ?? 'unknown',
    ts: new Date().toISOString(),
  })
}
