'use client'

import { useState } from 'react'
import Link from 'next/link'
import { adminFetch } from '@/lib/admin-fetch'

const inputCls = 'w-full rounded-lg border border-[#222] bg-[#111] px-3 py-2 text-sm text-white placeholder-[#4B5563] outline-none focus:border-[#444]'
const labelCls = 'mb-1 block text-xs font-semibold uppercase tracking-wide text-[#6B7280]'
const selectCls = inputCls

function parseCsvLine(line: string): string[] {
  const cells: string[] = []
  let current = ''
  let inQuotes = false
  for (let i = 0; i < line.length; i++) {
    const char = line[i]
    if (inQuotes) {
      if (char === '"') {
        if (line[i + 1] === '"') {
          current += '"'
          i++
        } else {
          inQuotes = false
        }
      } else {
        current += char
      }
    } else {
      if (char === '"') {
        inQuotes = true
      } else if (char === ',') {
        cells.push(current.trim())
        current = ''
      } else {
        current += char
      }
    }
  }
  cells.push(current.trim())
  return cells
}

function parseCsv(text: string): string[][] {
  return text
    .split(/\r?\n/)
    .filter((line) => line.trim().length > 0)
    .map(parseCsvLine)
}

export default function ContactsImportPage() {
  const [headerRow, setHeaderRow] = useState<string[]>([])
  const [dataRows, setDataRows] = useState<string[][]>([])
  const [fileName, setFileName] = useState('')
  const [emailCol, setEmailCol] = useState('')
  const [firstNameCol, setFirstNameCol] = useState('')
  const [lastNameCol, setLastNameCol] = useState('')
  const [phoneCol, setPhoneCol] = useState('')
  const [tagsCol, setTagsCol] = useState('')
  const [result, setResult] = useState<{ created: number; skipped: { row: number; reason: string }[] } | null>(null)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return
    setFileName(file.name)
    const text = await file.text()
    const rows = parseCsv(text)
    setHeaderRow(rows[0] ?? [])
    setDataRows(rows.slice(1))
    setResult(null)
  }

  async function handleImport() {
    if (!emailCol) return
    setSubmitting(true)
    setError(null)
    try {
      const res = await adminFetch('/api/admin/contacts/import', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          headerRow,
          dataRows,
          columnMap: {
            email: emailCol,
            firstName: firstNameCol || undefined,
            lastName: lastNameCol || undefined,
            phone: phoneCol || undefined,
            tags: tagsCol || undefined,
          },
          batchName: fileName.replace(/\.csv$/i, ''),
        }),
      })
      const data = await res.json()
      if (!res.ok) {
        setError(data.error || 'Import failed')
        return
      }
      setResult(data)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="max-w-2xl">
      <div className="mb-6">
        <Link href="/contacts" className="text-sm text-[#6B7280] hover:text-white">&larr; Back to Contacts</Link>
        <h1 className="mt-2 text-2xl font-bold text-white" style={{ fontFamily: 'Manrope, sans-serif' }}>Import Contacts</h1>
        <p className="mt-1 text-sm text-[#6B7280]">Upload a CSV exported from any CRM or spreadsheet. Map the columns below.</p>
      </div>

      <div className="mb-6">
        <label className={labelCls}>CSV file</label>
        <input type="file" accept=".csv" onChange={handleFile} className={inputCls} />
      </div>

      {headerRow.length > 0 && (
        <div className="space-y-4 rounded-xl border border-[#222] bg-[#111] p-4">
          <p className="text-sm text-[#6B7280]">{dataRows.length} rows found. Map your columns:</p>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div>
              <label className={labelCls}>Email (required)</label>
              <select className={selectCls} value={emailCol} onChange={(e) => setEmailCol(e.target.value)}>
                <option value="">Select column…</option>
                {headerRow.map((h) => <option key={h} value={h}>{h}</option>)}
              </select>
            </div>
            <div>
              <label className={labelCls}>First name</label>
              <select className={selectCls} value={firstNameCol} onChange={(e) => setFirstNameCol(e.target.value)}>
                <option value="">— none —</option>
                {headerRow.map((h) => <option key={h} value={h}>{h}</option>)}
              </select>
            </div>
            <div>
              <label className={labelCls}>Last name</label>
              <select className={selectCls} value={lastNameCol} onChange={(e) => setLastNameCol(e.target.value)}>
                <option value="">— none —</option>
                {headerRow.map((h) => <option key={h} value={h}>{h}</option>)}
              </select>
            </div>
            <div>
              <label className={labelCls}>Phone</label>
              <select className={selectCls} value={phoneCol} onChange={(e) => setPhoneCol(e.target.value)}>
                <option value="">— none —</option>
                {headerRow.map((h) => <option key={h} value={h}>{h}</option>)}
              </select>
            </div>
            <div>
              <label className={labelCls}>Tags (comma-separated cell)</label>
              <select className={selectCls} value={tagsCol} onChange={(e) => setTagsCol(e.target.value)}>
                <option value="">— none —</option>
                {headerRow.map((h) => <option key={h} value={h}>{h}</option>)}
              </select>
            </div>
          </div>
          <button
            onClick={handleImport}
            disabled={!emailCol || submitting}
            className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-black disabled:opacity-40"
          >
            {submitting ? 'Importing…' : `Import ${dataRows.length} rows`}
          </button>
        </div>
      )}

      {error && <p className="mt-4 text-sm text-red-400">{error}</p>}

      {result && (
        <div className="mt-6 rounded-xl border border-[#222] bg-[#111] p-4">
          <p className="text-sm text-white">{result.created} contacts created/updated.</p>
          {result.skipped.length > 0 && (
            <>
              <p className="mt-2 text-sm text-[#6B7280]">{result.skipped.length} rows skipped:</p>
              <ul className="mt-1 max-h-48 overflow-y-auto text-xs text-[#4B5563]">
                {result.skipped.map((s) => <li key={s.row}>Row {s.row}: {s.reason}</li>)}
              </ul>
            </>
          )}
        </div>
      )}
    </div>
  )
}
