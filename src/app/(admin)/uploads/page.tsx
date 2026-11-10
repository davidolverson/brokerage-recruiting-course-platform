'use client'

import { useCallback, useEffect, useState } from 'react'
import { formatBytes } from '@/lib/format-bytes'
import { DOCX_MIME, XLSX_MIME } from '@/lib/upload-input'
import { adminFetch } from '@/lib/admin-fetch'

/**
 * Media library.
 *
 * Uploads were write-only from the UI's point of view: the list endpoint had no
 * consumer at all, so once an image was stored the only way to see it again was
 * to already know its URL. Storage only ever grew, and nothing that was not
 * currently sitting in a field could be removed.
 *
 * The one rule this screen exists to enforce is that deleting an image must
 * never blank a live page, so every row says what still points at it and the
 * delete control is only offered for the ones nothing references.
 */

interface Reference {
  kind: 'article' | 'event'
  slug: string
  title: string
  field: string
}

interface UploadRow {
  id: number
  filename: string
  mime: string
  size_bytes: number
  width: number | null
  height: number | null
  created_at: string
  url: string
  references: Reference[]
  inUse: boolean
}

const btn =
  'min-h-[44px] rounded-lg px-4 py-2 text-sm font-semibold transition disabled:opacity-50'


export default function UploadsPage() {
  const [rows, setRows] = useState<UploadRow[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [note, setNote] = useState('')
  const [confirming, setConfirming] = useState<number | null>(null)
  const [busyId, setBusyId] = useState<number | null>(null)

  const load = useCallback(async () => {
    setLoading(true)
    setError('')
    try {
      const res = await adminFetch('/api/admin/uploads')
      const d = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(d.error || 'Could not load the media library.')
      setRows(d.uploads || [])
    } catch (e) {
      setError((e as Error).message)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => { load() }, [load])

  async function destroy(id: number) {
    setBusyId(id)
    setError('')
    setNote('')
    try {
      const res = await adminFetch(`/api/admin/uploads/${id}`, { method: 'DELETE' })
      const d = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(d.error || 'Could not delete that file.')
      setNote(`Deleted ${d.filename || 'the file'}.`)
      await load()
    } catch (e) {
      setError((e as Error).message)
    } finally {
      setBusyId(null)
      setConfirming(null)
    }
  }

  const used = rows.filter((r) => r.inUse).length
  const unused = rows.length - used
  const totalBytes = rows.reduce((sum, r) => sum + (r.size_bytes || 0), 0)

  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-white">Media library</h1>
        <p className="mt-1 text-sm text-[#9CA3AF]">
          Every file stored on the site: images, PDFs, Word and Excel. A file can only be deleted once nothing points at it,
          so removing one can never blank a live page.
        </p>
      </header>

      {!loading && rows.length > 0 && (
        <p className="mb-4 text-xs text-[#6B7280]">
          {rows.length} file{rows.length === 1 ? '' : 's'} · {used} in use · {unused} unused ·{' '}
          {formatBytes(totalBytes)} stored
        </p>
      )}

      {note && <p className="mb-4 text-sm text-[#86efac]">{note}</p>}
      {error && <p className="mb-4 text-sm text-[#fca5a5]">{error}</p>}

      {loading ? (
        <p className="text-sm text-[#9CA3AF]">Loading the library…</p>
      ) : rows.length === 0 ? (
        <div className="rounded-xl border border-[#333] bg-[#0A0A0A] p-8 text-center">
          <h2 className="text-base font-semibold text-white">No files yet</h2>
          <p className="mt-2 text-sm text-[#9CA3AF]">
            Images and documents you add while editing an event or an article will appear here.
          </p>
        </div>
      ) : (
        <ul className="flex flex-col gap-3">
          {rows.map((r) => (
            <li
              key={r.id}
              className="flex flex-wrap items-start gap-4 rounded-xl border border-[#333] bg-[#0A0A0A] p-4"
            >
              {/* A PDF has nothing for <img> to decode, so rendering one here
                  put a broken-image icon next to every document. */}
              {r.mime.startsWith('image/') ? (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  src={r.url}
                  alt={`Preview of ${r.filename}`}
                  className="h-20 w-20 shrink-0 rounded-lg border border-[#1A1A1A] object-contain"
                />
              ) : (
                <a
                  href={r.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-20 w-20 shrink-0 items-center justify-center rounded-lg border border-[#1A1A1A] bg-[#111] text-xs font-bold tracking-wide text-[#9CA3AF] transition hover:text-white"
                  aria-label={`Open ${r.filename}`}
                >
                  {kindLabel(r.mime)}
                </a>
              )}

              <div className="min-w-[12rem] flex-1">
                <p className="break-all text-sm font-semibold text-white">{r.filename}</p>
                <p className="mt-0.5 text-xs text-[#6B7280]">
                  {formatBytes(r.size_bytes)}
                  {r.width && r.height ? ` · ${r.width}×${r.height}` : ''} · {kindLabel(r.mime)}
                </p>

                {r.inUse ? (
                  <div className="mt-2">
                    <span className="rounded bg-[#1f2937] px-2 py-0.5 text-xs font-semibold text-[#93c5fd]">
                      In use
                    </span>
                    <ul className="mt-1.5 flex flex-col gap-0.5">
                      {r.references.map((ref, i) => (
                        <li key={i} className="text-xs text-[#9CA3AF]">
                          {ref.field} on the {ref.kind}{' '}
                          <span className="text-white">{ref.title}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <span className="mt-2 inline-block rounded bg-[#1A1A1A] px-2 py-0.5 text-xs font-semibold text-[#9CA3AF]">
                    Not used anywhere
                  </span>
                )}
              </div>

              <div className="flex shrink-0 items-center gap-2">
                <a
                  href={r.url}
                  target="_blank"
                  rel="noreferrer"
                  className={`${btn} border border-[#333] text-white hover:bg-[#1A1A1A]`}
                >
                  Open
                </a>

                {/* Deliberately no delete control at all while something points at
                    it: offering a button that always refuses teaches nothing. */}
                {!r.inUse && confirming !== r.id && (
                  <button
                    type="button"
                    className={`${btn} text-[#9CA3AF] underline underline-offset-4 hover:text-[#fca5a5]`}
                    onClick={() => { setConfirming(r.id); setNote(''); setError('') }}
                    disabled={busyId !== null}
                  >
                    Delete
                  </button>
                )}
                {!r.inUse && confirming === r.id && (
                  <>
                    <button
                      type="button"
                      className={`${btn} border border-[#7f1d1d] bg-[#2a1010] text-[#fca5a5] hover:bg-[#3a1414]`}
                      onClick={() => destroy(r.id)}
                      disabled={busyId === r.id}
                    >
                      {busyId === r.id ? 'Deleting…' : 'Delete permanently'}
                    </button>
                    <button
                      type="button"
                      className={`${btn} text-[#9CA3AF] hover:text-white`}
                      onClick={() => setConfirming(null)}
                      disabled={busyId === r.id}
                    >
                      Cancel
                    </button>
                  </>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

/**
 * "application/pdf" -> "PDF", "image/png" -> "png", and the OOXML types ->
 * "DOCX"/"XLSX" rather than the 70-character vendor string, which would blow
 * out the row and tell an editor nothing.
 */
function kindLabel(mime: string): string {
  if (mime === 'application/pdf') return 'PDF'
  if (mime === DOCX_MIME) return 'DOCX'
  if (mime === XLSX_MIME) return 'XLSX'
  return mime.replace('image/', '')
}
