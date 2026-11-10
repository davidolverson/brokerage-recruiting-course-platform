'use client'

import { useCallback, useEffect, useState } from 'react'
import { CATEGORIES, type ArticleSection } from '@/lib/data/articles'
import { ImageField } from '@/components/admin/ImageField'
import { DocumentsField } from '@/components/admin/DocumentsField'
import { HANDBOOK_SECTIONS } from '@/lib/handbook-sections'
import { adminFetch } from '@/lib/admin-fetch'

// The shape an editor submits IS the shape the page renders, so this is an
// alias rather than a second declaration. It used to be its own copy, and a
// local copy of a shared vocabulary is exactly how the handbook sections drifted
// (a field added to one and not the other compiles fine and silently drops).
type Section = ArticleSection

interface ArticleRow {
  id: number
  slug: string
  title: string
  category: string
  description: string
  read_time: string | null
  published_date: string | null
  hero_image: string | null
  sections: Section[]
  status: string
  visibility: string
  handbook_section: string | null
  sort_order: number
  updated_at: string
}

const CAT_NAME: Record<string, string> = Object.fromEntries(
  CATEGORIES.map((c) => [c.value, c.label]),
)

const input =
  'min-h-[44px] w-full rounded-lg border border-[#333] bg-[#0A0A0A] px-3.5 py-2.5 text-sm text-white placeholder:text-[#4B5563] focus:border-white focus:outline-none focus:ring-1 focus:ring-white disabled:opacity-50'
const label = 'mb-1.5 block text-xs font-semibold uppercase tracking-wide text-[#9CA3AF]'
const btn =
  'min-h-[44px] rounded-lg px-4 py-2 text-sm font-semibold transition disabled:opacity-50'

const EMPTY = {
  id: null as number | null,
  slug: '',
  title: '',
  category: 'investor',
  description: '',
  readTime: '',
  publishedDate: '',
  heroImage: '',
  status: 'draft',
  visibility: 'public',
  handbookSection: '',
  sortOrder: 100,
  sections: [] as Section[],
}
type FormState = typeof EMPTY

function rowToForm(a: ArticleRow): FormState {
  return {
    id: a.id,
    slug: a.slug,
    title: a.title,
    category: a.category,
    description: a.description || '',
    readTime: a.read_time || '',
    publishedDate: a.published_date || '',
    heroImage: a.hero_image || '',
    status: a.status,
    visibility: a.visibility || 'public',
    handbookSection: a.handbook_section || '',
    sortOrder: a.sort_order,
    sections: Array.isArray(a.sections) ? a.sections : [],
  }
}

export default function ArticlesAdminPage() {
  const [rows, setRows] = useState<ArticleRow[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [notice, setNotice] = useState('')
  const [form, setForm] = useState<FormState | null>(null)
  const [saving, setSaving] = useState(false)

  const load = useCallback(async () => {
    setLoading(true)
    setError('')
    try {
      const res = await adminFetch('/api/admin/articles')
      if (!res.ok) {
        const d = await res.json().catch(() => ({}))
        throw new Error(d.error || 'Could not load articles')
      }
      const d = await res.json()
      setRows(d.articles ?? [])
    } catch (e) {
      setError((e as Error).message)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    load()
  }, [load])

  async function save() {
    if (!form) return
    if (!form.title.trim()) {
      setError('Give the article a title first.')
      return
    }
    setSaving(true)
    setError('')
    try {
      const editing = form.id !== null
      const res = await fetch(editing ? `/api/admin/articles/${form.id}` : '/api/admin/articles', {
        method: editing ? 'PATCH' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          slug: form.slug || undefined,
          title: form.title,
          category: form.category,
          description: form.description,
          readTime: form.readTime,
          publishedDate: form.publishedDate,
          heroImage: form.heroImage,
          status: form.status,
          visibility: form.visibility,
          handbookSection: form.visibility === 'members' ? form.handbookSection : null,
          sortOrder: Number(form.sortOrder) || 100,
          sections: form.sections,
        }),
      })
      const d = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(d.error || 'Save failed')
      setNotice(editing ? 'Saved.' : 'Article created.')
      setForm(null)
      await load()
    } catch (e) {
      setError((e as Error).message)
    } finally {
      setSaving(false)
    }
  }

  async function unpublish(a: ArticleRow) {
    setError('')
    try {
      const res = await adminFetch(`/api/admin/articles/${a.id}`, { method: 'DELETE' })
      if (!res.ok) throw new Error('Could not unpublish')
      setNotice(`"${a.title}" moved back to draft. It is off the site but not deleted.`)
      await load()
    } catch (e) {
      setError((e as Error).message)
    }
  }

  // ── Section editing ────────────────────────────────────────────────────────
  function patchSection(i: number, next: Partial<Section>) {
    if (!form) return
    const sections = form.sections.map((s, idx) => (idx === i ? { ...s, ...next } : s))
    setForm({ ...form, sections })
  }
  function moveSection(i: number, dir: -1 | 1) {
    if (!form) return
    const j = i + dir
    if (j < 0 || j >= form.sections.length) return
    const sections = [...form.sections]
    ;[sections[i], sections[j]] = [sections[j], sections[i]]
    setForm({ ...form, sections })
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-xl font-semibold text-white">Articles &amp; Handbook</h1>
          <p className="mt-1 text-sm text-[#9CA3AF]">
            Public pages go to the Education hub. Members-only pages go to the Agent
            Handbook, which needs a login.
          </p>
        </div>
        <button
          className={`${btn} bg-white text-black hover:bg-[#E5E7EB]`}
          onClick={() => {
            setForm({ ...EMPTY })
            setNotice('')
          }}
        >
          New article
        </button>
      </div>

      {notice && (
        <div className="mb-3 rounded-lg bg-[#0c2a16] px-3 py-2 text-sm text-[#86efac]">{notice}</div>
      )}
      {error && <div className="mb-3 text-sm text-[#fca5a5]">{error}</div>}

      {/* ── List ── */}
      {loading ? (
        <p className="text-sm text-[#9CA3AF]">Loading articles…</p>
      ) : rows.length === 0 ? (
        <p className="text-sm text-[#9CA3AF]">
          No articles yet. Use “New article” to write the first one.
        </p>
      ) : (
        <div className="rounded-xl border border-[#1A1A1A]">
          {rows.map((a) => (
            <div
              key={a.id}
              className="flex flex-wrap items-center gap-3 border-b border-[#1A1A1A] px-4 py-3.5 last:border-b-0"
            >
              <div className="min-w-[240px] flex-1">
                <div className="font-semibold text-white">{a.title}</div>
                <div className="text-xs text-[#9CA3AF]">
                  {a.visibility === 'members' ? 'Handbook' : CAT_NAME[a.category] ?? a.category} ·{' '}
                  /{a.visibility === 'members' ? 'handbook' : 'education'}/{a.slug} ·{' '}
                  {a.sections?.length ?? 0} section{a.sections?.length === 1 ? '' : 's'}
                </div>
              </div>
              <span
                className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                  a.status === 'published'
                    ? 'bg-[#0c2a16] text-[#86efac]'
                    : 'bg-[#2a2a0c] text-[#fde68a]'
                }`}
              >
                {a.status === 'published' ? 'Live' : 'Draft'}
              </span>
              <div className="flex items-center gap-2">
                <button
                  className={`${btn} border border-[#333] text-white hover:bg-[#1A1A1A]`}
                  onClick={() => {
                    setForm(rowToForm(a))
                    setNotice('')
                  }}
                >
                  Edit
                </button>
                {a.status === 'published' && (
                  <>
                    <a
                      className={`${btn} border border-[#333] text-white hover:bg-[#1A1A1A]`}
                      href={`/${a.visibility === 'members' ? 'handbook' : 'education'}/${a.slug}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View
                    </a>
                    <button
                      className={`${btn} border border-[#333] text-[#fca5a5] hover:bg-[#1A1A1A]`}
                      onClick={() => unpublish(a)}
                    >
                      Unpublish
                    </button>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ── Editor ── */}
      {form && (
        <div className="fixed inset-0 z-50 flex items-start justify-center overflow-auto bg-black/70 p-4 backdrop-blur-sm">
          <div className="w-full max-w-3xl rounded-xl border border-[#1A1A1A] bg-[#050505] p-5">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-white">
                {form.id ? 'Edit article' : 'New article'}
              </h2>
              <button
                className="text-2xl leading-none text-[#9CA3AF] hover:text-white"
                onClick={() => setForm(null)}
                aria-label="Close"
              >
                ×
              </button>
            </div>

            <div className="mb-4 grid gap-3 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label className={label} htmlFor="a-title">Title</label>
                <input
                  id="a-title"
                  className={input}
                  value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                />
              </div>

              <div>
                <label className={label} htmlFor="a-cat">Category</label>
                <select
                  id="a-cat"
                  className={input}
                  value={form.category}
                  onChange={(e) => setForm({ ...form, category: e.target.value })}
                >
                  {CATEGORIES.map((c) => (
                    <option key={c.value} value={c.value}>{c.label}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className={label} htmlFor="a-vis">Where it goes</label>
                <select
                  id="a-vis"
                  className={input}
                  value={form.visibility}
                  onChange={(e) => setForm({ ...form, visibility: e.target.value })}
                >
                  <option value="public">Education hub (public)</option>
                  <option value="members">Agent handbook (members only)</option>
                </select>
              </div>

              {form.visibility === 'members' && (
                <div className="sm:col-span-2">
                  <label className={label} htmlFor="a-hbsec">Handbook section</label>
                  <input
                    id="a-hbsec"
                    className={input}
                    list="handbook-sections"
                    value={form.handbookSection}
                    onChange={(e) => setForm({ ...form, handbookSection: e.target.value })}
                    placeholder="Start here"
                  />
                  {/* Suggestions come from the same list the handbook orders by,
                      so picking one guarantees the page lands where you expect. */}
                  <datalist id="handbook-sections">
                    {HANDBOOK_SECTIONS.map((s) => (
                      <option key={s} value={s} />
                    ))}
                  </datalist>
                  <p className="mt-1 text-xs text-[#9CA3AF]">
                    Groups the page on the handbook index. Pages sharing a section are shown
                    together. Pick one of the suggestions to control where the group appears;
                    a section of your own still works, and shows up after the standard ones.
                  </p>
                </div>
              )}

              <div>
                <label className={label} htmlFor="a-status">Status</label>
                <select
                  id="a-status"
                  className={input}
                  value={form.status}
                  onChange={(e) => setForm({ ...form, status: e.target.value })}
                >
                  <option value="draft">Draft (not on the site)</option>
                  <option value="published">Published (live)</option>
                </select>
              </div>

              <div className="sm:col-span-2">
                <label className={label} htmlFor="a-desc">Summary</label>
                <textarea
                  id="a-desc"
                  className={`${input} min-h-[80px]`}
                  value={form.description}
                  onChange={(e) => setForm({ ...form, description: e.target.value })}
                  placeholder="One or two sentences. Shown on the Education hub card and in Google results."
                />
              </div>

              <div>
                <label className={label} htmlFor="a-slug">URL</label>
                <input
                  id="a-slug"
                  className={input}
                  value={form.slug}
                  onChange={(e) => setForm({ ...form, slug: e.target.value })}
                  placeholder="auto-generated from the title"
                />
                {form.id !== null && (
                  <p className="mt-1 text-xs text-[#9CA3AF]">
                    Changing this changes the public link and breaks any existing shares.
                  </p>
                )}
              </div>

              <div>
                <label className={label} htmlFor="a-read">Read time</label>
                <input
                  id="a-read"
                  className={input}
                  value={form.readTime}
                  onChange={(e) => setForm({ ...form, readTime: e.target.value })}
                  placeholder="7 min read"
                />
              </div>

              <div>
                <label className={label} htmlFor="a-date">Published date</label>
                <input
                  id="a-date"
                  className={input}
                  value={form.publishedDate}
                  onChange={(e) => setForm({ ...form, publishedDate: e.target.value })}
                  placeholder="March 4, 2026"
                />
              </div>

              <div className="sm:col-span-2">
                <ImageField
                  id="a-hero"
                  label="Hero image"
                  value={form.heroImage}
                  onChange={(v) => setForm({ ...form, heroImage: v })}
                  inputClass={input}
                  labelClass={label}
                  hint="Shown at the top of the article and on the Education hub card."
                />
              </div>
            </div>

            {/* Sections */}
            <div className="mb-4">
              <div className="mb-2 flex items-center justify-between">
                <span className={label}>Body</span>
                <button
                  className={`${btn} border border-[#333] text-white hover:bg-[#1A1A1A]`}
                  onClick={() =>
                    setForm({
                      ...form,
                      sections: [...form.sections, { heading: '', paragraphs: [''] }],
                    })
                  }
                >
                  Add section
                </button>
              </div>

              {form.sections.length === 0 && (
                <p className="text-sm text-[#9CA3AF]">
                  No sections yet. An article needs at least one to say anything.
                </p>
              )}

              {form.sections.map((s, i) => (
                <div key={i} className="mb-3 rounded-lg border border-[#1A1A1A] p-3">
                  <div className="mb-2 flex items-center gap-2">
                    <input
                      className={input}
                      value={s.heading}
                      onChange={(e) => patchSection(i, { heading: e.target.value })}
                      placeholder={`Section ${i + 1} heading`}
                      aria-label={`Section ${i + 1} heading`}
                    />
                    <button
                      className={`${btn} border border-[#333] text-white hover:bg-[#1A1A1A]`}
                      onClick={() => moveSection(i, -1)}
                      disabled={i === 0}
                      aria-label={`Move section ${i + 1} up`}
                    >
                      ↑
                    </button>
                    <button
                      className={`${btn} border border-[#333] text-white hover:bg-[#1A1A1A]`}
                      onClick={() => moveSection(i, 1)}
                      disabled={i === form.sections.length - 1}
                      aria-label={`Move section ${i + 1} down`}
                    >
                      ↓
                    </button>
                    <button
                      className={`${btn} border border-[#333] text-[#fca5a5] hover:bg-[#1A1A1A]`}
                      onClick={() =>
                        setForm({ ...form, sections: form.sections.filter((_, idx) => idx !== i) })
                      }
                      aria-label={`Remove section ${i + 1}`}
                    >
                      Remove
                    </button>
                  </div>
                  <textarea
                    className={`${input} min-h-[120px]`}
                    value={s.paragraphs.join('\n\n')}
                    onChange={(e) =>
                      patchSection(i, { paragraphs: e.target.value.split(/\n\s*\n/) })
                    }
                    placeholder="Write the section here. Leave a blank line between paragraphs."
                    aria-label={`Section ${i + 1} text`}
                  />
                  <div className="mt-2 grid gap-2">
                    <ImageField
                      id={`section-img-${i}`}
                      label={`Section ${i + 1} image (optional)`}
                      value={s.image?.src ?? ''}
                      onChange={(v) => patchSection(i, { image: { src: v, alt: s.image?.alt ?? '' } })}
                      inputClass={input}
                      labelClass={label}
                    />
                    <input
                      className={input}
                      value={s.image?.alt ?? ''}
                      onChange={(e) =>
                        patchSection(i, {
                          image: { src: s.image?.src ?? '', alt: e.target.value },
                        })
                      }
                      placeholder="Describe the image for screen readers (required if there is one)"
                      aria-label={`Section ${i + 1} image description`}
                    />
                    <DocumentsField
                      documents={s.documents ?? []}
                      onChange={(documents) => patchSection(i, { documents })}
                      inputClass={input}
                      labelClass={label}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-end gap-2">
              <button
                className={`${btn} border border-[#333] text-white hover:bg-[#1A1A1A]`}
                onClick={() => setForm(null)}
              >
                Cancel
              </button>
              <button
                className={`${btn} bg-white text-black hover:bg-[#E5E7EB]`}
                onClick={save}
                disabled={saving}
              >
                {saving ? 'Saving…' : 'Save'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
