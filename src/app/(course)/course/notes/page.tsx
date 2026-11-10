'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'

// ─── Types ──────────────────────────────────────────────────────────────────

type NoteTag = 'important' | 'review-later' | 'confused' | 'exam-topic'

interface Note {
  id: number
  note_type: string
  content: string
  highlighted_text: string | null
  page_context: string | null
  tags: NoteTag[]
  created_at: string
  lesson_title: string | null
  lesson_slug: string | null
  chapter_title: string | null
  module_title: string | null
  module_slug: string | null
}

type FilterTag = NoteTag | 'all'

// ─── Constants ──────────────────────────────────────────────────────────────

const TAG_CONFIG: { key: NoteTag; label: string; color: string }[] = [
  { key: 'important', label: 'Important', color: '#EA580C' },
  { key: 'review-later', label: 'Review Later', color: '#1E40AF' },
  { key: 'confused', label: 'Confused', color: '#DC2626' },
  { key: 'exam-topic', label: 'Exam Topic', color: '#16A34A' },
]

// ─── Helpers ────────────────────────────────────────────────────────────────

function formatDate(isoString: string): string {
  return new Date(isoString).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}

function buildLessonHref(note: Note): string | null {
  if (!note.page_context) return null
  const parts = note.page_context.split('/')
  if (parts.length >= 3) {
    return `/course/module/${parts[0]}/${parts[1]}/${parts[2]}`
  }
  if (parts.length === 2) {
    return `/course/module/${parts[0]}/${parts[1]}`
  }
  return null
}

// ─── Grouped structure ───────────────────────────────────────────────────────

interface GroupedNotes {
  flagged: Note[]
  byModule: Map<string, {
    title: string
    slug: string | null
    chapters: Map<string, {
      title: string
      notes: Note[]
    }>
  }>
}

function groupNotes(notes: Note[]): GroupedNotes {
  const flagged = notes.filter((n) => n.tags.includes('review-later') || n.tags.includes('confused'))

  const byModule: GroupedNotes['byModule'] = new Map()

  for (const note of notes) {
    const modSlug = note.module_slug ?? '__uncat__'
    const modTitle = note.module_title ?? 'Uncategorized'
    const chTitle = note.chapter_title ?? (note.note_type === 'quiz' ? 'Quiz Notes' : 'General')

    if (!byModule.has(modSlug)) {
      byModule.set(modSlug, { title: modTitle, slug: note.module_slug, chapters: new Map() })
    }
    const mod = byModule.get(modSlug)!

    if (!mod.chapters.has(chTitle)) {
      mod.chapters.set(chTitle, { title: chTitle, notes: [] })
    }
    mod.chapters.get(chTitle)!.notes.push(note)
  }

  return { flagged, byModule }
}

// ─── NoteCard ────────────────────────────────────────────────────────────────

function NoteCard({
  note,
  onDelete,
  onEdit,
}: {
  note: Note
  onDelete: (id: number) => void
  onEdit: (note: Note) => void
}) {
  const href = buildLessonHref(note)

  return (
    <div className="group rounded-xl border border-[#1f1f1f] bg-[#111111] px-4 py-4 transition-colors hover:border-[#2a2a2a]">
      {/* Type badge + lesson link */}
      <div className="mb-2 flex items-start justify-between gap-2">
        <div className="flex flex-wrap items-center gap-2">
          <span
            className={[
              'rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider',
              note.note_type === 'highlight' ? 'bg-[#EA580C]/15 text-[#EA580C]' :
              note.note_type === 'quiz' ? 'bg-[#1E40AF]/15 text-[#1E40AF]' :
              note.note_type === 'bookmark' ? 'bg-[#16A34A]/15 text-[#16A34A]' :
              'bg-[#1f1f1f] text-[#9CA3AF]',
            ].join(' ')}
          >
            {note.note_type}
          </span>
          {note.lesson_title && (
            <span className="text-xs text-[#6B7280]">{note.lesson_title}</span>
          )}
        </div>

        <div className="flex shrink-0 items-center gap-3 opacity-0 transition-opacity group-hover:opacity-100">
          <button
            type="button"
            onClick={() => onEdit(note)}
            className="text-xs text-[#6B7280] hover:text-[#EA580C]"
          >
            Edit
          </button>
          <button
            type="button"
            onClick={() => onDelete(note.id)}
            className="text-xs text-[#6B7280] hover:text-red-400"
          >
            Delete
          </button>
        </div>
      </div>

      {/* Highlighted text */}
      {note.highlighted_text && (
        <p className="mb-2 rounded bg-[#EA580C]/8 px-2.5 py-2 text-xs italic text-[#D1D5DB] border-l-2 border-[#EA580C]/40">
          "{note.highlighted_text}"
        </p>
      )}

      {/* Content */}
      <p className="text-sm text-[#E5E7EB]" style={{ fontFamily: 'Roboto, sans-serif' }}>
        {note.content}
      </p>

      {/* Tags */}
      {note.tags.length > 0 && (
        <div className="mt-2.5 flex flex-wrap gap-1.5">
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

      {/* Footer */}
      <div className="mt-3 flex items-center justify-between">
        <span className="text-[10px] text-[#4B5563]">{formatDate(note.created_at)}</span>
        {href && (
          <Link
            href={href}
            className="text-xs text-[#EA580C] hover:underline"
          >
            Go to lesson &rarr;
          </Link>
        )}
      </div>
    </div>
  )
}

// ─── EditModal ───────────────────────────────────────────────────────────────

function EditModal({
  note,
  onSave,
  onClose,
}: {
  note: Note
  onSave: (id: number, content: string, tags: NoteTag[]) => Promise<void>
  onClose: () => void
}) {
  const [content, setContent] = useState(note.content)
  const [tags, setTags] = useState<NoteTag[]>(note.tags)
  const [saving, setSaving] = useState(false)

  function toggleTag(tag: NoteTag) {
    setTags((prev) => prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag])
  }

  async function handleSave() {
    setSaving(true)
    await onSave(note.id, content, tags)
    setSaving(false)
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-black/70" onClick={onClose} aria-hidden="true" />
      <div className="relative w-full max-w-md rounded-2xl border border-[#2a2a2a] bg-[#0d0d0d] p-6 shadow-2xl">
        <h3 className="mb-4 text-base font-bold text-white" style={{ fontFamily: 'Manrope, sans-serif' }}>
          Edit Note
        </h3>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={6}
          className={[
            'w-full resize-none rounded-lg border border-[#2a2a2a] bg-[#111111]',
            'px-3 py-2.5 text-sm text-white focus:border-[#EA580C] focus:outline-none',
          ].join(' ')}
        />
        <div className="mt-3 flex flex-wrap gap-2">
          {TAG_CONFIG.map((t) => (
            <button
              key={t.key}
              type="button"
              onClick={() => toggleTag(t.key)}
              className={[
                'rounded-full px-3 py-1 text-xs font-medium transition-all',
                tags.includes(t.key) ? 'text-white' : 'border border-[#2a2a2a] text-[#9CA3AF]',
              ].join(' ')}
              style={tags.includes(t.key) ? { background: t.color } : {}}
            >
              {t.label}
            </button>
          ))}
        </div>
        <div className="mt-4 flex justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg border border-[#2a2a2a] px-4 py-2 text-sm text-[#9CA3AF] hover:text-white"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleSave}
            disabled={saving || !content.trim()}
            className={[
              'rounded-lg px-5 py-2 text-sm font-semibold text-white',
              saving || !content.trim()
                ? 'bg-[#EA580C]/30 cursor-not-allowed'
                : 'bg-[#EA580C] hover:bg-[#e0740f]',
            ].join(' ')}
          >
            {saving ? 'Saving...' : 'Save Changes'}
          </button>
        </div>
      </div>
    </div>
  )
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function NotesPage() {
  const [allNotes, setAllNotes] = useState<Note[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [activeTag, setActiveTag] = useState<FilterTag>('all')
  const [activeType, setActiveType] = useState<string>('all')
  const [exporting, setExporting] = useState(false)
  const [editingNote, setEditingNote] = useState<Note | null>(null)

  useEffect(() => {
    document.title = 'My Notes | VA License Prep | Acme Realty'
  }, [])

  const loadNotes = useCallback(async () => {
    setLoading(true)
    try {
      const res = await fetch('/api/course/notes?limit=200')
      if (res.ok) {
        const data = await res.json() as { notes: Note[] }
        setAllNotes(data.notes ?? [])
      }
    } catch { /* silent */ }
    setLoading(false)
  }, [])

  useEffect(() => {
    loadNotes()
  }, [loadNotes])

  // ── Filtered notes ─────────────────────────────────────────────
  const filtered = allNotes.filter((n) => {
    const tagMatch = activeTag === 'all' || n.tags.includes(activeTag)
    const typeMatch = activeType === 'all' || n.note_type === activeType
    const searchMatch =
      !search ||
      n.content.toLowerCase().includes(search.toLowerCase()) ||
      (n.highlighted_text ?? '').toLowerCase().includes(search.toLowerCase()) ||
      (n.lesson_title ?? '').toLowerCase().includes(search.toLowerCase())

    return tagMatch && typeMatch && searchMatch
  })

  const grouped = groupNotes(filtered)

  // ── Delete note ────────────────────────────────────────────────
  async function deleteNote(id: number) {
    if (!confirm('Delete this note?')) return
    try {
      await fetch(`/api/course/notes/${id}`, { method: 'DELETE' })
      setAllNotes((prev) => prev.filter((n) => n.id !== id))
    } catch { /* silent */ }
  }

  // ── Edit note ──────────────────────────────────────────────────
  async function saveEdit(id: number, content: string, tags: NoteTag[]) {
    try {
      const res = await fetch(`/api/course/notes/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content, tags }),
      })
      if (res.ok) {
        const data = await res.json() as { note: Note }
        setAllNotes((prev) => prev.map((n) => (n.id === id ? data.note : n)))
      }
    } catch { /* silent */ }
  }

  // ── Export ─────────────────────────────────────────────────────
  async function handleExport() {
    setExporting(true)
    try {
      const res = await fetch('/api/course/notes/export')
      if (!res.ok) {
        alert('Nothing to export yet.')
        setExporting(false)
        return
      }
      const blob = await res.blob()
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `study-guide-${new Date().toISOString().slice(0, 10)}.md`
      a.click()
      URL.revokeObjectURL(url)
    } catch {
      alert('Export failed. Please try again.')
    }
    setExporting(false)
  }

  // ── Counts for tags ─────────────────────────────────────────────
  function tagCount(tag: NoteTag) {
    return allNotes.filter((n) => n.tags.includes(tag)).length
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Header */}
      <header className="sticky top-0 z-10 border-b border-[#1f1f1f] bg-[#0a0a0a]/95 px-6 py-4 backdrop-blur-sm">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Link href="/course/dashboard" className="text-[#6B7280] hover:text-white">
              <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4" aria-hidden="true">
                <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <h1 className="text-lg font-extrabold text-white" style={{ fontFamily: 'Manrope, sans-serif' }}>
              My Notes
            </h1>
            <span className="rounded-full bg-[#1f1f1f] px-2.5 py-0.5 text-xs font-medium text-[#9CA3AF]">
              {allNotes.length}
            </span>
          </div>

          <button
            type="button"
            onClick={handleExport}
            disabled={exporting || allNotes.length === 0}
            className={[
              'flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold text-white transition-all',
              exporting || allNotes.length === 0
                ? 'cursor-not-allowed bg-[#EA580C]/30'
                : 'bg-[#EA580C] hover:bg-[#e0740f]',
            ].join(' ')}
          >
            <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4" aria-hidden="true">
              <path d="M8 2v8M5 7l3 3 3-3M3 12h10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {exporting ? 'Exporting...' : 'Export Study Guide'}
          </button>
        </div>
      </header>

      <div className="mx-auto max-w-5xl px-6 py-8">

        {/* Search + filters */}
        <div className="mb-6 flex flex-col gap-4">
          {/* Search */}
          <div className="relative">
            <svg
              viewBox="0 0 16 16"
              fill="none"
              className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#4B5563]"
              aria-hidden="true"
            >
              <circle cx="7" cy="7" r="4.5" stroke="currentColor" strokeWidth="1.3" />
              <path d="M10.5 10.5l3 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
            </svg>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search notes..."
              className={[
                'w-full rounded-xl border border-[#1f1f1f] bg-[#111111]',
                'py-2.5 pl-9 pr-4 text-sm text-white placeholder-[#4B5563]',
                'focus:border-[#EA580C] focus:outline-none focus:ring-1 focus:ring-[#EA580C]',
              ].join(' ')}
            />
          </div>

          {/* Tag filters */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs text-[#4B5563]">Filter:</span>
            <button
              type="button"
              onClick={() => setActiveTag('all')}
              className={[
                'rounded-full px-3 py-1 text-xs font-medium transition-all',
                activeTag === 'all'
                  ? 'bg-white text-[#0a0a0a]'
                  : 'border border-[#2a2a2a] text-[#9CA3AF] hover:text-white',
              ].join(' ')}
            >
              All ({allNotes.length})
            </button>

            {TAG_CONFIG.map((t) => {
              const count = tagCount(t.key)
              if (count === 0) return null
              return (
                <button
                  key={t.key}
                  type="button"
                  onClick={() => setActiveTag(activeTag === t.key ? 'all' : t.key)}
                  className={[
                    'rounded-full px-3 py-1 text-xs font-medium transition-all',
                    activeTag === t.key
                      ? 'text-white'
                      : 'border border-[#2a2a2a] text-[#9CA3AF] hover:text-white',
                  ].join(' ')}
                  style={activeTag === t.key ? { background: t.color } : {}}
                >
                  {t.label} ({count})
                </button>
              )
            })}

            {/* Type filter */}
            <div className="ml-2 flex gap-2">
              {['all', 'lesson', 'quiz', 'highlight', 'bookmark'].map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setActiveType(activeType === type ? 'all' : type)}
                  className={[
                    'rounded-full px-3 py-1 text-xs font-medium transition-all capitalize',
                    activeType === type
                      ? 'bg-[#1f1f1f] text-white border border-[#3a3a3a]'
                      : 'text-[#6B7280] hover:text-white',
                  ].join(' ')}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
        </div>

        {loading && (
          <div className="flex items-center justify-center py-16">
            <div className="h-6 w-6 animate-spin rounded-full border-2 border-[#EA580C] border-t-transparent" />
          </div>
        )}

        {!loading && allNotes.length === 0 && (
          <div className="py-20 text-center">
            <svg viewBox="0 0 48 48" fill="none" className="mx-auto mb-4 h-12 w-12 text-[#2a2a2a]" aria-hidden="true">
              <rect x="8" y="6" width="32" height="36" rx="3" stroke="currentColor" strokeWidth="2" />
              <path d="M16 16h16M16 24h16M16 32h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <p className="text-sm text-[#4B5563]">No notes yet.</p>
            <p className="mt-1 text-xs text-[#374151]">
              Open any lesson and press{' '}
              <kbd className="rounded bg-[#1f1f1f] px-1.5 py-0.5 text-[10px] text-white">Ctrl+N</kbd>
              {' '}to start taking notes.
            </p>
          </div>
        )}

        {!loading && allNotes.length > 0 && filtered.length === 0 && (
          <p className="py-8 text-center text-sm text-[#4B5563]">
            No notes match your filters.
          </p>
        )}

        {/* ── Flagged for Review section ───────────────────────── */}
        {!loading && grouped.flagged.length > 0 && activeTag === 'all' && !search && activeType === 'all' && (
          <section className="mb-10">
            <div className="mb-4 flex items-center gap-2">
              <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4 text-[#1E40AF]" aria-hidden="true">
                <path d="M3 2v12M3 2l9 4-9 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <h2 className="text-base font-bold text-white" style={{ fontFamily: 'Manrope, sans-serif' }}>
                Flagged for Review
              </h2>
              <span className="rounded-full bg-[#1E40AF]/20 px-2 py-0.5 text-xs font-medium text-[#1E40AF]">
                {grouped.flagged.length}
              </span>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {grouped.flagged.map((note) => (
                <NoteCard
                  key={note.id}
                  note={note}
                  onDelete={deleteNote}
                  onEdit={(n) => setEditingNote(n)}
                />
              ))}
            </div>
          </section>
        )}

        {/* ── Notes by Module ─────────────────────────────────── */}
        {!loading && filtered.length > 0 && (
          <section>
            {(activeTag !== 'all' || search || activeType !== 'all') ? (
              // Flat list when filtering
              <div>
                <h2 className="mb-4 text-base font-bold text-white" style={{ fontFamily: 'Manrope, sans-serif' }}>
                  {filtered.length} result{filtered.length !== 1 ? 's' : ''}
                </h2>
                <div className="grid gap-3 sm:grid-cols-2">
                  {filtered.map((note) => (
                    <NoteCard
                      key={note.id}
                      note={note}
                      onDelete={deleteNote}
                      onEdit={(n) => setEditingNote(n)}
                    />
                  ))}
                </div>
              </div>
            ) : (
              // Grouped by module
              <div className="space-y-10">
                {Array.from(grouped.byModule.entries()).map(([modSlug, mod]) => (
                  <div key={modSlug}>
                    <div className="mb-5 flex items-center gap-3">
                      <h2
                        className="text-base font-extrabold text-white"
                        style={{ fontFamily: 'Manrope, sans-serif' }}
                      >
                        {mod.title}
                      </h2>
                      <div className="h-px flex-1 bg-[#1f1f1f]" />
                    </div>

                    <div className="space-y-8">
                      {Array.from(mod.chapters.entries()).map(([chKey, chapter]) => (
                        <div key={chKey}>
                          <h3
                            className="mb-3 text-sm font-bold text-[#9CA3AF]"
                            style={{ fontFamily: 'Manrope, sans-serif' }}
                          >
                            {chapter.title}
                            <span className="ml-2 font-normal text-[#4B5563]">
                              ({chapter.notes.length} note{chapter.notes.length !== 1 ? 's' : ''})
                            </span>
                          </h3>
                          <div className="grid gap-3 sm:grid-cols-2">
                            {chapter.notes.map((note) => (
                              <NoteCard
                                key={note.id}
                                note={note}
                                onDelete={deleteNote}
                                onEdit={(n) => setEditingNote(n)}
                              />
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        )}
      </div>

      {/* Edit modal */}
      {editingNote && (
        <EditModal
          note={editingNote}
          onSave={saveEdit}
          onClose={() => setEditingNote(null)}
        />
      )}
    </div>
  )
}
