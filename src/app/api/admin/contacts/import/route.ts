import { NextRequest, NextResponse } from 'next/server'
import { getAdminContext, requireRole, RoleError } from '@/lib/permissions'
import { mapCsvRows, type ColumnMap } from '@/lib/csv-import'
import { upsertContact } from '@/lib/contacts'

export const dynamic = 'force-dynamic'

export async function POST(request: NextRequest) {
  try {
    requireRole(await getAdminContext(), 'owner', 'staff')
  } catch (e) {
    if (e instanceof RoleError) return NextResponse.json({ error: e.message }, { status: e.status })
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const body = await request.json().catch(() => null)
  if (!body) return NextResponse.json({ error: 'Invalid request' }, { status: 400 })

  const headerRow: string[] = Array.isArray(body.headerRow) ? body.headerRow.map(String) : []
  const dataRows: string[][] = Array.isArray(body.dataRows)
    ? body.dataRows.map((r: unknown[]) => (Array.isArray(r) ? r.map(String) : []))
    : []
  const columnMap = (body.columnMap ?? {}) as ColumnMap
  const batchName = String(body.batchName || 'import').trim().replace(/[^a-zA-Z0-9_-]/g, '-')

  if (!columnMap.email) {
    return NextResponse.json({ error: 'Email column mapping is required' }, { status: 400 })
  }

  const { valid, skipped } = mapCsvRows(headerRow, dataRows, columnMap)
  const batchTag = `csv:${batchName}`

  for (const row of valid) {
    await upsertContact({
      email: row.email,
      firstName: row.firstName,
      lastName: row.lastName,
      phone: row.phone,
      source: 'csv_import',
      tags: [batchTag, ...row.tags],
    })
  }

  return NextResponse.json({ created: valid.length, skipped })
}
