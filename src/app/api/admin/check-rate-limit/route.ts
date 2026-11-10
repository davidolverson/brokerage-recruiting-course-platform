import { NextRequest, NextResponse } from 'next/server'
import { checkLoginRateLimit } from '@/lib/rate-limit'

export async function POST(request: NextRequest) {
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown'
  const result = await checkLoginRateLimit(ip)
  return NextResponse.json(result)
}
