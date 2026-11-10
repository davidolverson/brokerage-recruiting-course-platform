'use client'

import { useRef, useState } from 'react'
import { adminFetch } from '@/lib/admin-fetch'

/**
 * Image picker for the admin.
 *
 * The field used to be a bare "Image URL" text box, which meant an editor could
 * only reference a file a developer had already put on the server. Uploading is
 * the point of a CMS, so the text box stays (for an existing path or an
 * external URL) but the normal route is now choosing a file.
 */
export function ImageField({
  label,
  value,
  onChange,
  inputClass,
  labelClass,
  hint,
  id,
}: {
  label: string
  value: string
  onChange: (v: string) => void
  inputClass: string
  labelClass: string
  hint?: string
  id: string
}) {
  const fileRef = useRef<HTMLInputElement>(null)
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')
  const [note, setNote] = useState('')
  const [confirming, setConfirming] = useState(false)

  // Only a file this CMS stores can be deleted from it. An external URL or a
  // path shipped with the site is not ours to remove.
  const uploadId = value.match(/^\/api\/uploads\/(\d+)$/)?.[1] ?? null

  async function destroy() {
    setBusy(true)
    setError('')
    setNote('')
    try {
      const res = await adminFetch(`/api/admin/uploads/${uploadId}`, { method: 'DELETE' })
      const d = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(d.error || 'Could not delete that image.')
      // The URL is dead now, so the field must not keep pointing at it.
      onChange('')
      setNote('Image deleted.')
    } catch (e) {
      setError((e as Error).message)
    } finally {
      setBusy(false)
      setConfirming(false)
    }
  }

  async function upload(file: File) {
    setBusy(true)
    setError('')
    setNote('')
    try {
      const fd = new FormData()
      fd.append('file', file)

      // Send the natural dimensions along so the admin list can show them
      // without decoding the image server-side.
      const dims = await readDimensions(file).catch(() => null)
      if (dims) {
        fd.append('width', String(dims.w))
        fd.append('height', String(dims.h))
      }

      const res = await adminFetch('/api/admin/uploads', { method: 'POST', body: fd })
      const d = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(d.error || 'Upload failed')
      onChange(d.url)
      setNote(d.deduped ? 'That image was already uploaded, reusing it.' : 'Uploaded.')
    } catch (e) {
      setError((e as Error).message)
    } finally {
      setBusy(false)
      if (fileRef.current) fileRef.current.value = ''
    }
  }

  return (
    <div>
      <label className={labelClass} htmlFor={id}>{label}</label>

      <div className="flex flex-wrap items-center gap-2">
        <input
          id={id}
          className={inputClass}
          style={{ flex: '1 1 220px' }}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Choose a file, or paste a path"
        />
        <button
          type="button"
          className="min-h-[44px] rounded-lg border border-[#333] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#1A1A1A] disabled:opacity-50"
          onClick={() => fileRef.current?.click()}
          disabled={busy}
        >
          {busy ? 'Uploading…' : 'Upload'}
        </button>
        {value && (
          <button
            type="button"
            className="min-h-[44px] rounded-lg border border-[#333] px-3 py-2 text-sm font-semibold text-[#fca5a5] transition hover:bg-[#1A1A1A]"
            onClick={() => { onChange(''); setNote(''); setError(''); setConfirming(false) }}
          >
            Remove
          </button>
        )}

        {/* "Remove" takes the image off this page. This takes the file off the
            server, which is the only way stored images ever go away. */}
        {uploadId && !confirming && (
          <button
            type="button"
            className="min-h-[44px] rounded-lg px-3 py-2 text-sm font-semibold text-[#9CA3AF] underline underline-offset-4 transition hover:text-[#fca5a5] disabled:opacity-50"
            onClick={() => { setConfirming(true); setNote(''); setError('') }}
            disabled={busy}
          >
            Delete file
          </button>
        )}
        {uploadId && confirming && (
          <>
            <button
              type="button"
              className="min-h-[44px] rounded-lg border border-[#7f1d1d] bg-[#2a1010] px-3 py-2 text-sm font-semibold text-[#fca5a5] transition hover:bg-[#3a1414] disabled:opacity-50"
              onClick={destroy}
              disabled={busy}
            >
              {busy ? 'Deleting…' : 'Delete permanently'}
            </button>
            <button
              type="button"
              className="min-h-[44px] rounded-lg px-3 py-2 text-sm font-semibold text-[#9CA3AF] transition hover:text-white"
              onClick={() => setConfirming(false)}
              disabled={busy}
            >
              Cancel
            </button>
          </>
        )}
      </div>

      <input
        ref={fileRef}
        type="file"
        accept="image/png,image/jpeg,image/webp,image/gif"
        className="hidden"
        onChange={(e) => { const f = e.target.files?.[0]; if (f) upload(f) }}
      />

      {hint && !error && !note && <p className="mt-1 text-xs text-[#9CA3AF]">{hint}</p>}
      {note && <p className="mt-1 text-xs text-[#86efac]">{note}</p>}
      {error && <p className="mt-1 text-xs text-[#fca5a5]">{error}</p>}

      {value && (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          src={value}
          alt="Selected image preview"
          className="mt-2 max-h-40 w-auto rounded-lg border border-[#1A1A1A] object-contain"
          onError={() => setError('That path does not load. Check it, or upload the file instead.')}
        />
      )}
    </div>
  )
}

function readDimensions(file: File): Promise<{ w: number; h: number }> {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file)
    const img = new Image()
    img.onload = () => { URL.revokeObjectURL(url); resolve({ w: img.naturalWidth, h: img.naturalHeight }) }
    img.onerror = () => { URL.revokeObjectURL(url); reject(new Error('not an image')) }
    img.src = url
  })
}
