export interface ColumnMap {
  email: string
  firstName?: string
  lastName?: string
  phone?: string
  tags?: string
}

export interface ImportedContactRow {
  email: string
  firstName: string | null
  lastName: string | null
  phone: string | null
  tags: string[]
}

export interface SkippedRow {
  row: number
  reason: string
}

export interface CsvImportResult {
  valid: ImportedContactRow[]
  skipped: SkippedRow[]
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function mapCsvRows(headerRow: string[], dataRows: string[][], columnMap: ColumnMap): CsvImportResult {
  const emailIdx = headerRow.indexOf(columnMap.email)
  if (emailIdx === -1) {
    return { valid: [], skipped: dataRows.map((_, i) => ({ row: i + 1, reason: 'Email column not found' })) }
  }
  const firstNameIdx = columnMap.firstName ? headerRow.indexOf(columnMap.firstName) : -1
  const lastNameIdx = columnMap.lastName ? headerRow.indexOf(columnMap.lastName) : -1
  const phoneIdx = columnMap.phone ? headerRow.indexOf(columnMap.phone) : -1
  const tagsIdx = columnMap.tags ? headerRow.indexOf(columnMap.tags) : -1

  const valid: ImportedContactRow[] = []
  const skipped: SkippedRow[] = []
  const seen = new Set<string>()

  dataRows.forEach((row, i) => {
    const rowNum = i + 1
    const rawEmail = (row[emailIdx] ?? '').trim().toLowerCase()

    if (!rawEmail) {
      skipped.push({ row: rowNum, reason: 'Missing email' })
      return
    }
    if (!EMAIL_RE.test(rawEmail)) {
      skipped.push({ row: rowNum, reason: `Invalid email: ${rawEmail}` })
      return
    }
    if (seen.has(rawEmail)) {
      skipped.push({ row: rowNum, reason: `Duplicate email in file: ${rawEmail}` })
      return
    }
    seen.add(rawEmail)

    const tagsCell = tagsIdx >= 0 ? (row[tagsIdx] ?? '') : ''
    const tags = tagsCell.split(',').map((t) => t.trim()).filter(Boolean)

    valid.push({
      email: rawEmail,
      firstName: firstNameIdx >= 0 ? (row[firstNameIdx]?.trim() || null) : null,
      lastName: lastNameIdx >= 0 ? (row[lastNameIdx]?.trim() || null) : null,
      phone: phoneIdx >= 0 ? (row[phoneIdx]?.trim() || null) : null,
      tags,
    })
  })

  return { valid, skipped }
}
