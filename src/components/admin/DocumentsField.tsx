'use client'

import { useRef, useState } from 'react'
import { MAX_UPLOAD_MB, DOCX_MIME, XLSX_MIME } from '@/lib/upload-input'
import { formatBytes } from '@/lib/format-bytes'
import type { ArticleDocument } from '@/lib/data/articles'
import { adminFetch } from '@/lib/admin-fetch'

/**
 * Attachments for a section.
 *
 * The handbook could hold the office manager's words but not one of her files, which is what
 * kept it from replacing the six emails it was meant to replace: the Business
 * 101 pack, the net sheet, the affiliated business disclosures are all PDFs.
 *
 * Separate from ImageField rather than a mode of it. An image is one value with
 * a preview; attachments are a list with names, and the two pickers must send
 * different `kind` values so the event flyer field can never accept a PDF it
 * cannot render.
 */
export function DocumentsField({
  documents,
  onChange,
  labelClass,
  inputClass,
}: {
  documents: ArticleDocument[]
  onChange: (next: ArticleDocument[]) => void
  labelClass: string
  inputClass: string
}) {
  const fileRef = useRef<HTMLInputElement>(null)
  const [busy, setBusy] = useState('')
  const [error, setError] = useState('')
  const [note, setNote] = useState('')

  async function upload(file: File) {
    // Name the file and its size while it goes. A 19 MB upload takes about
    // 26 seconds against production, and a bare "Uploading..." for that long
    // reads as a hang and invites a second click.
    setBusy(`Uploading ${file.name} (${formatBytes(file.size)}), this can take a moment…`)
    setError('')
    setNote('')
    try {
      const fd = new FormData()
      fd.append('file', file)
      // The server decides the allow-list from THIS value, not from the file's
      // own claim about itself.
      fd.append('kind', 'document')

      const res = await adminFetch('/api/admin/uploads', { method: 'POST', body: fd })
      const d = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(d.error || 'Upload failed')

      // Seed the label from the filename so a hurried editor still ships
      // something readable, but leave it editable: "Business 101.pdf" is a
      // filename, "Business 101 and fee schedule" is a link an agent
      // understands.
      const label = prettyLabel((file as File).name || d.filename || 'Document')
      onChange([...documents, { url: d.url, label, size: file.size, mime: d.mime }])
      setNote(d.deduped ? 'That file was already uploaded, reusing it.' : 'Uploaded.')
    } catch (e) {
      setError((e as Error).message)
    } finally {
      setBusy('')
      if (fileRef.current) fileRef.current.value = ''
    }
  }

  function update(i: number, next: Partial<ArticleDocument>) {
    onChange(documents.map((d, idx) => (idx === i ? { ...d, ...next } : d)))
  }

  return (
    <div>
      <span className={labelClass}>Attachments</span>

      {documents.length > 0 && (
        <ul className="mb-2 flex flex-col gap-2">
          {documents.map((d, i) => (
            <li key={i} className="flex flex-wrap items-center gap-2">
              <input
                className={inputClass}
                style={{ flex: '1 1 220px' }}
                value={d.label}
                onChange={(e) => update(i, { label: e.target.value })}
                placeholder="What agents see, e.g. Business 101 and fee schedule"
                aria-label={`Attachment ${i + 1} name`}
              />
              {isUpload(d.url) ? (
                <a
                  href={d.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-[#9CA3AF] underline underline-offset-4 hover:text-white"
                >
                  {d.size ? formatBytes(d.size) : 'Open'}
                </a>
              ) : (
                // A link row: the editor types the address. An uploaded file
                // has no editable URL, because ours is the only correct one.
                <input
                  className={inputClass}
                  style={{ flex: '1 1 200px' }}
                  value={d.url}
                  onChange={(e) => update(i, { url: e.target.value })}
                  placeholder="https://…"
                  aria-label={`Attachment ${i + 1} link`}
                />
              )}
              <button
                type="button"
                className="min-h-[44px] rounded-lg border border-[#333] px-3 py-2 text-sm font-semibold text-[#fca5a5] transition hover:bg-[#1A1A1A]"
                onClick={() => onChange(documents.filter((_, idx) => idx !== i))}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}

      <div className="flex flex-wrap items-center gap-2">
        <button
          type="button"
          className="min-h-[44px] rounded-lg border border-[#333] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#1A1A1A] disabled:opacity-50"
          onClick={() => fileRef.current?.click()}
          disabled={!!busy}
        >
          {busy ? 'Uploading…' : 'Add a file'}
        </button>

        {/* Not everything worth pointing an agent at is a file we host: the
            scheduling link for the TC, the partner sites, a Google Sheet. Prose
            paragraphs render as plain text, so without this there is no way to
            put a working link on a handbook page at all. */}
        <button
          type="button"
          className="min-h-[44px] rounded-lg px-3 py-2 text-sm font-semibold text-[#9CA3AF] underline underline-offset-4 transition hover:text-white"
          onClick={() => onChange([...documents, { url: '', label: '' }])}
          disabled={!!busy}
        >
          Add a link
        </button>
      </div>

      <input
        ref={fileRef}
        type="file"
        accept={`application/pdf,${DOCX_MIME},${XLSX_MIME},.pdf,.docx,.xlsx`}
        className="hidden"
        onChange={(e) => { const f = e.target.files?.[0]; if (f) upload(f) }}
      />

      {busy && <p className="mt-1 text-xs text-[#9CA3AF]">{busy}</p>}
      {!busy && !error && !note && (
        <p className="mt-1 text-xs text-[#9CA3AF]">
          PDF, Word or Excel, up to {MAX_UPLOAD_MB} MB, or a link to somewhere else. Uploaded files follow the page:
          put one on a members-only page and only signed-in agents can open it. A link does not.
        </p>
      )}
      {note && <p className="mt-1 text-xs text-[#86efac]">{note}</p>}
      {error && <p className="mt-1 text-xs text-[#fca5a5]">{error}</p>}
    </div>
  )
}

/** True for a file this CMS stores, as opposed to a link somewhere else. */
export function isUpload(url: string): boolean {
  return /^\/api\/uploads\/\d+$/.test(url)
}

/** "Example Investor Team Business 101_v3.pdf" -> "Example Investor Team Business 101 v3" */
function prettyLabel(filename: string): string {
  return (
    filename
      .replace(/\.[A-Za-z0-9]+$/, '')
      .replace(/[_-]+/g, ' ')
      .replace(/\s+/g, ' ')
      .trim()
      .slice(0, 120) || 'Document'
  )
}

