import type { ArticleDocument, ArticleSection } from '@/lib/data/articles'
import { ALLOWED_MIME } from '@/lib/upload-input'

// Input rules for admin-authored articles. Pure functions with no request or
// DB dependency so they can be tested directly — same reasoning as
// phone-consent.ts.

/**
 * Is this safe to put in an href?
 *
 * Allows a path on this site and ordinary web links, and nothing else. The
 * scheme check is what stops `javascript:` (and `data:`, and `vbscript:`) being
 * stored by an editor and rendered as a working link on a members page.
 *
 * Deliberately a scheme allow-list rather than a blocklist: a blocklist has to
 * anticipate every dangerous scheme plus every way of spelling it, and
 * `java\tscript:` or a leading newline defeats the obvious version.
 */
export function isSafeHref(url: string): boolean {
  const v = url.trim()
  if (!v) return false
  // A path on this site. Not "//evil.com", which is protocol-relative.
  if (v.startsWith('/') && !v.startsWith('//')) return true
  return /^https?:\/\//i.test(v)
}

export function slugify(s: string): string {
  return (
    s
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '')
      .slice(0, 80) || 'article'
  )
}

/**
 * Validates and cleans the section list an editor submits.
 *
 * `sections` is stored as jsonb and rendered straight into the article page, so
 * an unchecked shape here becomes a runtime crash on a public, indexed page.
 * Anything that is not a usable section is rejected rather than coerced: a
 * silently dropped paragraph reads as "the CMS ate my work".
 */
export function normalizeSections(input: unknown): ArticleSection[] {
  if (input === undefined || input === null) return []
  if (!Array.isArray(input)) {
    throw new Error('Sections must be a list')
  }

  return input.map((raw, i) => {
    if (!raw || typeof raw !== 'object') {
      throw new Error(`Section ${i + 1} is not valid`)
    }
    const s = raw as Record<string, unknown>

    const heading = typeof s.heading === 'string' ? s.heading.trim() : ''
    if (!heading) throw new Error(`Section ${i + 1} needs a heading`)

    if (!Array.isArray(s.paragraphs)) {
      throw new Error(`Section ${i + 1} needs a list of paragraphs`)
    }
    const paragraphs = s.paragraphs
      .map((p) => (typeof p === 'string' ? p.trim() : ''))
      .filter((p) => p.length > 0)

    const section: ArticleSection = { heading, paragraphs }

    // An image is optional, but a half-filled one is not: alt text is what a
    // screen reader announces, and src without alt ships an unlabelled image
    // onto a public page.
    if (s.image && typeof s.image === 'object') {
      const img = s.image as Record<string, unknown>
      const src = typeof img.src === 'string' ? img.src.trim() : ''
      const alt = typeof img.alt === 'string' ? img.alt.trim() : ''
      if (src && !alt) {
        throw new Error(`Section ${i + 1} ("${heading}") has an image with no alt text`)
      }
      if (src) section.image = { src, alt }
    }

    // Attachments are optional, but a link with no words is not a link. An
    // unlabelled document renders as a bare URL that tells an agent nothing
    // about whether it is the net sheet or the disclosures, so a missing label
    // is rejected the same way missing alt text is.
    if (s.documents !== undefined && s.documents !== null) {
      if (!Array.isArray(s.documents)) {
        throw new Error(`Section ${i + 1} ("${heading}") has an invalid attachment list`)
      }
      const documents: ArticleDocument[] = []
      for (const rawDoc of s.documents) {
        if (!rawDoc || typeof rawDoc !== 'object') {
          throw new Error(`Section ${i + 1} ("${heading}") has an invalid attachment`)
        }
        const d = rawDoc as Record<string, unknown>
        const url = typeof d.url === 'string' ? d.url.trim() : ''
        // Capped like slug (80) and filename (120). Admin-only input, but an
        // unbounded string still ends up in jsonb and on a rendered page.
        const label = typeof d.label === 'string' ? d.label.trim().slice(0, 200) : ''
        // A row still being filled in is dropped, not rejected: the editor adds
        // the entry before choosing the file.
        if (!url && !label) continue
        if (!url) {
          throw new Error(`Section ${i + 1} ("${heading}") has an attachment with no file or link`)
        }
        if (!label) {
          throw new Error(`Section ${i + 1} ("${heading}") has an attachment with no name`)
        }
        // This value becomes an href on a rendered page. Without a scheme check
        // a pasted `javascript:` URL is stored and served as a working link,
        // which is stored XSS wearing the label the editor chose. Admin-only
        // input is not a reason to skip it.
        if (!isSafeHref(url)) {
          throw new Error(
            `Section ${i + 1} ("${heading}") has an attachment link that is not a web address. ` +
              `Use a link starting with https:// or a path on this site.`,
          )
        }
        const size = typeof d.size === 'number' && Number.isFinite(d.size) && d.size > 0 ? d.size : undefined
        // Pinned to the allow-list rather than stored as sent. This value is
        // client-supplied like everything else in the body, and it decides what
        // the badge claims a file is; an unchecked string here would let the
        // page label a spreadsheet a PDF.
        const mime =
          typeof d.mime === 'string' && (ALLOWED_MIME as readonly string[]).includes(d.mime)
            ? d.mime
            : undefined

        const doc: ArticleDocument = { url, label }
        if (size !== undefined) doc.size = size
        if (mime !== undefined) doc.mime = mime
        documents.push(doc)
      }
      if (documents.length > 0) section.documents = documents
    }

    // The "no text" rule is checked HERE, after attachments, not next to the
    // paragraphs. A section used to be prose and nothing else, so empty text
    // meant an empty section. Now "Forms and documents" followed by six PDFs is
    // a legitimate section and the most likely shape of the paperwork page, and
    // refusing it would have forced a sentence of filler above every list.
    // A section with neither text nor files is still empty and still refused.
    if (paragraphs.length === 0 && !section.documents) {
      throw new Error(`Section ${i + 1} ("${heading}") needs some text or at least one attachment`)
    }

    return section
  })
}
