'use client'

import { useState, useEffect, useRef, useCallback } from 'react'

// ─── Types ──────────────────────────────────────────────────────────────────

export type NoteTag = 'important' | 'review-later' | 'confused' | 'exam-topic'

interface Note {
  id: number
  note_type: string
  content: string
  highlighted_text: string | null
  page_context: string | null
  tags: NoteTag[]
  created_at: string
}

export interface NotePanelProps {
  lessonId: number
  pageContext: string // e.g. "virginia-real-estate-law/agency-relationships/buyer-agency"
  lessonTitle: string
}

// ─── Constants ──────────────────────────────────────────────────────────────

const TAG_CONFIG: { key: NoteTag; label: string; color: string }[] = [
  { key: 'important', label: 'Important', color: '#EA580C' },
  { key: 'review-later', label: 'Review Later', color: '#1E40AF' },
  { key: 'confused', label: 'Confused', color: '#DC2626' },
  { key: 'exam-topic', label: 'Exam Topic', color: '#16A34A' },
]

const DEBOUNCE_MS = 1000

function formatRelative(isoString: string): string {
  const diff = Date.now() - new Date(isoString).getTime()
  const mins = Math.floor(diff / 60_000)
  const hours = Math.floor(diff / 3_600_000)
  const days = Math.floor(diff / 86_400_000)
  if (mins < 1) return 'just now'
  if (mins < 60) return `${mins}m ago`
  if (hours < 24) return `${hours}h ago`
  return `${days}d ago`
}

// ─── NotePanel ──────────────────────────────────────────────────────────────

export default function NotePanel({ lessonId, pageContext, lessonTitle }: NotePanelProps) {
  const [open, setOpen] = useState(false)
  const [notes, setNotes] = useState<Note[]>([])
  const [draft, setDraft] = useState('')
  const [selectedTags, setSelectedTags] = useState<NoteTag[]>([])
  const [highlightedText, setHighlightedText] = useState<string | null>(null)
  const [saving, setSaving] = useState(false)
  const [saveStatus, setSaveStatus] = useState<'idle' | 'saved' | 'error'>('idle')
  const [editingId, setEditingId] = useState<number | null>(null)
  const [editDraft, setEditDraft] = useState('')
  const [editTags, setEditTags] = useState<NoteTag[]>([])
  const [loading, setLoading] = useState(false)
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const draftRef = useRef(draft)
  draftRef.current = draft

  // ── Load notes for this lesson ────────────────────────────────
  const loadNotes = useCallback(async () => {
    setLoading(true)
    try {
      const res = await fetch(`/api/course/notes?lessonId=${lessonId}`)
      if (res.ok) {
        const data = await res.json() as { notes: Note[] }
        setNotes(data.notes ?? [])
      }
    } catch { /* silent */ }
    setLoading(false)
  }, [lessonId])

  useEffect(() => {
    if (open && notes.length === 0) {
      loadNotes()
    }
  }, [open, notes.length, loadNotes])

  // ── Keyboard shortcut Ctrl+N / Cmd+N ────────────────────────
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if ((e.ctrlKey || e.metaKey) && e.key === 'n' && !e.shiftKey) {
        e.preventDefault()
        setOpen((prev) => !prev)
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  // Focus textarea when panel opens
  useEffect(() => {
    if (open) {
      setTimeout(() => textareaRef.current?.focus(), 150)
    }
  }, [open])

  // ── Text selection capture ───────────────────────────────────
  useEffect(() => {
    function onMouseUp() {
      const sel = window.getSelection()
      if (sel && sel.toString().trim().length > 10) {
        setHighlightedText(sel.toString().trim())
      }
    }
    document.addEventListener('mouseup', onMouseUp)
    return () => document.removeEventListener('mouseup', onMouseUp)
  }, [])

  // ── Debounced auto-save ───────────────────────────────────────
  const scheduleAutoSave = useCallback(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current)
    debounceRef.current = setTimeout(async () => {
      if (!draftRef.current.trim()) return
      await doSave(draftRef.current)
    }, DEBOUNCE_MS)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  function handleDraftChange(value: string) {
    setDraft(value)
    setSaveStatus('idle')
    scheduleAutoSave()
  }

  // ── Save note ─────────────────────────────────────────────────
  async function doSave(content: string) {
    if (!content.trim()) return
    setSaving(true)
    try {
      const res = await fetch('/api/course/notes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          lessonId,
          noteType: highlightedText ? 'highlight' : 'lesson',
          content: content.trim(),
          highlightedText: highlightedText ?? null,
          pageContext,
          tags: selectedTags,
        }),
      })

      if (res.ok) {
        const data = await res.json() as { note: Note }
        setNotes((prev) => [data.note, ...prev])
        setDraft('')
        setSelectedTags([])
        setHighlightedText(null)
        setSaveStatus('saved')
        setTimeout(() => setSaveStatus('idle'), 2000)
      } else {
        setSaveStatus('error')
      }
    } catch {
      setSaveStatus('error')
    }
    setSaving(false)
  }

  function handleSaveClick() {
    if (debounceRef.current) clearTimeout(debounceRef.current)
    doSave(draft)
  }

  function handleSaveHighlight() {
    if (!highlightedText) return
    const noteContent = draft.trim() || `Highlighted: "${highlightedText}"`
    if (debounceRef.current) clearTimeout(debounceRef.current)
    doSave(noteContent)
  }

  function toggleTag(tag: NoteTag) {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
    )
  }

  // ── Edit note ─────────────────────────────────────────────────
  function startEdit(note: Note) {
    setEditingId(note.id)
    setEditDraft(note.content)
    setEditTags(note.tags)
  }

  async function saveEdit(noteId: number) {
    if (!editDraft.trim()) return
    try {
      const res = await fetch(`/api/course/notes/${noteId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: editDraft.trim(), tags: editTags }),
      })
      if (res.ok) {
        const data = await res.json() as { note: Note }
        setNotes((prev) => prev.map((n) => (n.id === noteId ? data.note : n)))
        setEditingId(null)
      }
    } catch { /* silent */ }
  }

  // ── Delete note ───────────────────────────────────────────────
  async function deleteNote(noteId: number) {
    if (!confirm('Delete this note?')) return
    try {
      await fetch(`/api/course/notes/${noteId}`, { method: 'DELETE' })
      setNotes((prev) => prev.filter((n) => n.id !== noteId))
    } catch { /* silent */ }
  }

  // ── Tag toggle for edit ───────────────────────────────────────
  function toggleEditTag(tag: NoteTag) {
    setEditTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
    )
  }

  return (
    <>
      {/* ── Toggle button ─────────────────────────────────────── */}
      <button
        type="button"
        aria-label={open ? 'Close notes panel' : 'Open notes panel (Ctrl+N)'}
        title={open ? 'Close notes (Ctrl+N)' : 'Open notes (Ctrl+N)'}
        onClick={() => setOpen((prev) => !prev)}
        className={[
          'fixed right-0 top-1/2 z-40 -translate-y-1/2',
          'flex flex-col items-center gap-1 rounded-l-xl px-2 py-4',
          'border border-r-0 border-[#2a2a2a] transition-all duration-200',
          open
            ? 'bg-[#EA580C] text-white border-[#EA580C]'
            : 'bg-[#141414] text-[#9CA3AF] hover:bg-[#1e1e1e] hover:text-white',
        ].join(' ')}
        style={{ writingMode: 'vertical-rl' }}
      >
        <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4 shrink-0" style={{ writingMode: 'horizontal-tb' }} aria-hidden="true">
          <path d="M3 3h10v9H3zM6 3v9M3 6h7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="text-[10px] font-semibold tracking-widest uppercase" style={{ writingMode: 'vertical-rl' }}>
          Notes
        </span>
        {notes.length > 0 && (
          <span
            className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-[10px] font-bold text-[#0a0a0a] shrink-0"
            style={{ writingMode: 'horizontal-tb' }}
          >
            {notes.length > 9 ? '9+' : notes.length}
          </span>
        )}
      </button>

      {/* ── Slide-out panel ───────────────────────────────────── */}
      <aside
        aria-label="Notes panel"
        className={[
          'fixed right-0 top-0 z-30 flex h-full flex-col',
          'w-full max-w-sm border-l border-[#1f1f1f] bg-[#0d0d0d]',
          'shadow-2xl transition-transform duration-300 ease-in-out',
          open ? 'translate-x-0' : 'translate-x-full',
        ].join(' ')}
      >
        {/* Panel header */}
        <div className="flex items-center justify-between border-b border-[#1f1f1f] px-4 py-3">
          <div className="flex items-center gap-2">
            <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4 text-[#EA580C]" aria-hidden="true">
              <path d="M3 3h10v9H3zM6 3v9M3 6h7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <h2 className="text-sm font-bold text-white" style={{ fontFamily: 'Manrope, sans-serif' }}>
              My Notes
            </h2>
            <span className="text-xs text-[#6B7280]">— {lessonTitle}</span>
          </div>
          <div className="flex items-center gap-2">
            <a
              href="/course/notes"
              className="text-xs text-[#9CA3AF] underline hover:text-white"
            >
              All notes
            </a>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close notes panel"
              className="rounded p-1 text-[#6B7280] hover:bg-[#1a1a1a] hover:text-white"
            >
              <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4" aria-hidden="true">
                <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>

        {/* Highlighted text capture banner */}
        {highlightedText && (
          <div className="mx-3 mt-3 rounded-lg border border-[#EA580C]/30 bg-[#EA580C]/10 px-3 py-2.5">
            <p className="mb-1 text-xs font-semibold text-[#EA580C]">Selected text</p>
            <p className="line-clamp-2 text-xs text-[#D1D5DB] italic">"{highlightedText}"</p>
            <div className="mt-2 flex gap-2">
              <button
                type="button"
                onClick={handleSaveHighlight}
                className="rounded bg-[#EA580C] px-2 py-1 text-xs font-semibold text-white hover:bg-[#e0740f]"
              >
                Save as Note
              </button>
              <button
                type="button"
                onClick={() => setHighlightedText(null)}
                className="text-xs text-[#6B7280] hover:text-white"
              >
                Dismiss
              </button>
            </div>
          </div>
        )}

        {/* New note input */}
        <div className="border-b border-[#1f1f1f] px-3 pb-3 pt-3">
          <textarea
            ref={textareaRef}
            value={draft}
            onChange={(e) => handleDraftChange(e.target.value)}
            placeholder="Jot something down..."
            rows={4}
            className={[
              'w-full resize-none rounded-lg border border-[#2a2a2a] bg-[#111111]',
              'px-3 py-2.5 text-sm text-white placeholder-[#4B5563]',
              'focus:border-[#EA580C] focus:outline-none focus:ring-1 focus:ring-[#EA580C]',
            ].join(' ')}
            style={{ fontFamily: 'Roboto, sans-serif' }}
          />

          {/* Tags */}
          <div className="mt-2 flex flex-wrap gap-1.5">
            {TAG_CONFIG.map((t) => (
              <button
                key={t.key}
                type="button"
                onClick={() => toggleTag(t.key)}
                className={[
                  'rounded-full px-2.5 py-0.5 text-xs font-medium transition-all',
                  selectedTags.includes(t.key)
                    ? 'text-white'
                    : 'text-[#9CA3AF] border border-[#2a2a2a] hover:border-[#3a3a3a]',
                ].join(' ')}
                style={
                  selectedTags.includes(t.key)
                    ? { background: t.color, borderColor: t.color }
                    : {}
                }
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* Save row */}
          <div className="mt-2 flex items-center justify-between">
            <span className="text-xs text-[#4B5563]">
              {saveStatus === 'saved' && (
                <span className="text-[#16A34A]">Saved</span>
              )}
              {saveStatus === 'error' && (
                <span className="text-red-500">Failed to save</span>
              )}
              {saveStatus === 'idle' && draft.trim() && (
                <span>Auto-saves after 1s of inactivity</span>
              )}
            </span>
            <button
              type="button"
              onClick={handleSaveClick}
              disabled={saving || !draft.trim()}
              className={[
                'rounded-lg px-3 py-1.5 text-xs font-semibold text-white transition-colors',
                saving || !draft.trim()
                  ? 'bg-[#EA580C]/30 cursor-not-allowed'
                  : 'bg-[#EA580C] hover:bg-[#e0740f]',
              ].join(' ')}
            >
              {saving ? 'Saving...' : 'Save'}
            </button>
          </div>
        </div>

        {/* Notes list */}
        <div className="flex-1 overflow-y-auto px-3 py-3">
          {loading && (
            <p className="text-center text-xs text-[#4B5563]">Loading notes...</p>
          )}

          {!loading && notes.length === 0 && (
            <div className="mt-8 text-center">
              <p className="text-sm text-[#4B5563]">No notes yet for this lesson.</p>
              <p className="mt-1 text-xs text-[#374151]">Start typing above to capture your thoughts.</p>
            </div>
          )}

          <div className="space-y-3">
            {notes.map((note) => (
              <div
                key={note.id}
                className="group rounded-lg border border-[#1f1f1f] bg-[#111111] px-3 py-3"
              >
                {editingId === note.id ? (
                  /* Edit mode */
                  <div>
                    <textarea
                      value={editDraft}
                      onChange={(e) => setEditDraft(e.target.value)}
                      rows={4}
                      className={[
                        'w-full resize-none rounded border border-[#2a2a2a] bg-[#0d0d0d]',
                        'px-2 py-1.5 text-sm text-white focus:border-[#EA580C] focus:outline-none',
                      ].join(' ')}
                    />
                    <div className="mt-1.5 flex flex-wrap gap-1">
                      {TAG_CONFIG.map((t) => (
                        <button
                          key={t.key}
                          type="button"
                          onClick={() => toggleEditTag(t.key)}
                          className={[
                            'rounded-full px-2 py-0.5 text-[10px] font-medium transition-all',
                            editTags.includes(t.key)
                              ? 'text-white'
                              : 'border border-[#2a2a2a] text-[#6B7280]',
                          ].join(' ')}
                          style={editTags.includes(t.key) ? { background: t.color } : {}}
                        >
                          {t.label}
                        </button>
                      ))}
                    </div>
                    <div className="mt-2 flex gap-2">
                      <button
                        type="button"
                        onClick={() => saveEdit(note.id)}
                        className="rounded bg-[#EA580C] px-2.5 py-1 text-xs font-semibold text-white hover:bg-[#e0740f]"
                      >
                        Save
                      </button>
                      <button
                        type="button"
                        onClick={() => setEditingId(null)}
                        className="text-xs text-[#6B7280] hover:text-white"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  /* View mode */
                  <>
                    {note.highlighted_text && (
                      <p className="mb-2 rounded bg-[#EA580C]/10 px-2 py-1.5 text-xs italic text-[#D1D5DB]">
                        "{note.highlighted_text}"
                      </p>
                    )}

                    <p className="text-sm text-[#E5E7EB]" style={{ fontFamily: 'Roboto, sans-serif' }}>
                      {note.content}
                    </p>

                    {note.tags.length > 0 && (
                      <div className="mt-2 flex flex-wrap gap-1">
                        {note.tags.map((tag) => {
                          const cfg = TAG_CONFIG.find((t) => t.key === tag)
                          return (
                            <span
                              key={tag}
                              className="rounded-full px-2 py-0.5 text-[10px] font-medium text-white"
                              style={{ background: cfg?.color ?? '#374151' }}
                            >
                              {cfg?.label ?? tag}
                            </span>
                          )
                        })}
                      </div>
                    )}

                    <div className="mt-2 flex items-center justify-between">
                      <span className="text-[10px] text-[#4B5563]">
                        {formatRelative(note.created_at)}
                      </span>
                      <div className="flex gap-2 opacity-0 transition-opacity group-hover:opacity-100">
                        <button
                          type="button"
                          onClick={() => startEdit(note)}
                          className="text-[10px] text-[#6B7280] hover:text-[#EA580C]"
                        >
                          Edit
                        </button>
                        <button
                          type="button"
                          onClick={() => deleteNote(note.id)}
                          className="text-[10px] text-[#6B7280] hover:text-red-400"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </aside>

      {/* Mobile overlay backdrop */}
      {open && (
        <div
          className="fixed inset-0 z-20 bg-black/60 sm:hidden"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  )
}
