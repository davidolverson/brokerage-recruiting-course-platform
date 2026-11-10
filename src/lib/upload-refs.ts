// Which pages are still using an upload?
//
// Uploads are referenced by URL string, in three different places: an article's
// hero image, an image inside an article section (jsonb), and an event flyer.
// Nothing in the schema ties those back to the uploads row, so "is this still in
// use?" has to be answered by looking, and it has to be answered before a delete
// — otherwise removing a file silently blanks a live page.
//
// Pure on purpose: the caller fetches rows, this decides. Same reasoning as
// upload-input.ts.

export interface ArticleRef {
  slug: string
  title: string
  hero_image: string | null
  sections: unknown
}

export interface EventRef {
  slug: string
  title: string
  image_url: string | null
}

export interface UploadReference {
  kind: 'article' | 'event'
  slug: string
  title: string
  field: 'hero image' | 'section image' | 'attachment' | 'flyer'
}

export function uploadUrl(id: number): string {
  return `/api/uploads/${id}`
}

/**
 * True if `haystack` refers to this exact upload id.
 *
 * The digit guard is the whole point: a plain substring test says upload 2 is
 * referenced by a page that actually uses upload 20, and the result is an
 * upload nobody can ever delete for a reason nobody can see.
 */
function mentions(haystack: string | null | undefined, id: number): boolean {
  if (!haystack) return false
  return new RegExp(`/api/uploads/${id}(?![0-9])`).test(haystack)
}

/**
 * Every attachment URL in a sections blob, as a flat list.
 *
 * Defensive about shape on purpose: `sections` is jsonb written by an editor,
 * so this runs against whatever is actually in the column rather than what the
 * type says should be.
 */
function sectionDocumentUrls(sections: unknown): string[] {
  if (!Array.isArray(sections)) return []
  const urls: string[] = []
  for (const s of sections) {
    if (!s || typeof s !== 'object') continue
    const docs = (s as Record<string, unknown>).documents
    if (!Array.isArray(docs)) continue
    for (const d of docs) {
      if (d && typeof d === 'object') {
        const u = (d as Record<string, unknown>).url
        if (typeof u === 'string') urls.push(u)
      }
    }
  }
  return urls
}

export function findUploadReferences(
  id: number,
  articles: ArticleRef[],
  events: EventRef[],
): UploadReference[] {
  const refs: UploadReference[] = []

  for (const a of articles) {
    if (mentions(a.hero_image, id)) {
      refs.push({ kind: 'article', slug: a.slug, title: a.title, field: 'hero image' })
      continue // one row, one reason — listing the same article twice reads as two pages
    }
    // An attachment and a section image both live in `sections`, so a single
    // stringify cannot tell them apart, and calling a PDF a "section image" in
    // the refusal sends the editor hunting for a picture that is not there.
    // Look in the documents lists first and only fall back to the whole blob.
    if (mentions(JSON.stringify(sectionDocumentUrls(a.sections)), id)) {
      refs.push({ kind: 'article', slug: a.slug, title: a.title, field: 'attachment' })
      continue
    }
    if (mentions(JSON.stringify(a.sections ?? null), id)) {
      refs.push({ kind: 'article', slug: a.slug, title: a.title, field: 'section image' })
    }
  }

  for (const e of events) {
    if (mentions(e.image_url, id)) {
      refs.push({ kind: 'event', slug: e.slug, title: e.title, field: 'flyer' })
    }
  }

  return refs
}

/**
 * Annotates a list of uploads with what, if anything, still points at each one.
 *
 * The media library needs this for every row at once. Doing it per-upload would
 * mean re-reading the articles and events tables once per image; the caller
 * fetches both once and this decides.
 */
export function annotateUploadUsage<T extends { id: number }>(
  uploads: T[],
  articles: ArticleRef[],
  events: EventRef[],
): (T & { references: UploadReference[]; inUse: boolean })[] {
  return uploads.map((u) => {
    const references = findUploadReferences(u.id, articles, events)
    return { ...u, references, inUse: references.length > 0 }
  })
}

/**
 * The refusal an editor reads when a delete is blocked.
 *
 * "In use" on its own is a dead end — she would have to open every article and
 * event to find out where. Name the pages and the fix.
 */
export function explainUploadInUse(refs: UploadReference[]): string {
  const name = (r: UploadReference) => `the ${r.kind} “${r.title}”`

  // "image" was correct when images were the only thing this app stored. It is
  // now also PDFs, and telling an editor her disclosures pack is an image in
  // use is its own small defect.
  if (refs.length === 1) {
    const r = refs[0]
    const where = r.field === 'attachment' ? `an ${r.field} on` : `the ${r.field} on`
    return `This file is still ${where} ${name(r)}. Remove it there first, then delete the file.`
  }

  const list = refs.map((r) => `${name(r)} (${r.field})`).join(', ')
  return `This file is still used in ${refs.length} places: ${list}. Remove it from each one first, then delete the file.`
}
