import { describe, it, expect } from 'vitest'
import {
  uploadUrl,
  findUploadReferences,
  explainUploadInUse,
  annotateUploadUsage,
  type ArticleRef,
  type EventRef,
  type UploadReference,
} from './upload-refs'

// Deleting an upload that a live page still points at would blank an image on
// the public site (or on the handbook) with no warning. These tests pin the
// "is anything still using this?" check that has to run before a delete.

const article = (over: Partial<ArticleRef> = {}): ArticleRef => ({
  slug: 'brrrr-basics',
  title: 'BRRRR Basics',
  hero_image: null,
  sections: [],
  ...over,
})

const event = (over: Partial<EventRef> = {}): EventRef => ({
  slug: 'popup-solo401k',
  title: 'Pop-Up Class: Self-Directed Solo 401(k) Trusts',
  image_url: null,
  ...over,
})

describe('uploadUrl', () => {
  it('is the path the CMS actually stores', () => {
    expect(uploadUrl(7)).toBe('/api/uploads/7')
  })
})

describe('findUploadReferences', () => {
  it('finds an upload used as an article hero image', () => {
    const refs = findUploadReferences(3, [article({ hero_image: '/api/uploads/3' })], [])
    expect(refs).toEqual([
      { kind: 'article', slug: 'brrrr-basics', title: 'BRRRR Basics', field: 'hero image' },
    ])
  })

  it('finds an upload used inside an article section', () => {
    const refs = findUploadReferences(
      3,
      [article({ sections: [{ heading: 'Step one', image: '/api/uploads/3' }] })],
      [],
    )
    expect(refs).toEqual([
      { kind: 'article', slug: 'brrrr-basics', title: 'BRRRR Basics', field: 'section image' },
    ])
  })

  it('finds an upload used as an event flyer', () => {
    const refs = findUploadReferences(3, [], [event({ image_url: '/api/uploads/3' })])
    expect(refs).toEqual([
      {
        kind: 'event',
        slug: 'popup-solo401k',
        title: 'Pop-Up Class: Self-Directed Solo 401(k) Trusts',
        field: 'flyer',
      },
    ])
  })

  // The trap. A substring match would report upload 2 as "still in use" because
  // some other page references upload 20 — and then nothing could ever be
  // deleted, silently, for reasons nobody could see.
  it('does not confuse an id with a longer id that starts with it', () => {
    const refs = findUploadReferences(2, [article({ hero_image: '/api/uploads/20' })], [
      event({ image_url: '/api/uploads/25' }),
    ])
    expect(refs).toEqual([])
  })

  it('still matches when the url is followed by a quote inside serialised json', () => {
    const refs = findUploadReferences(
      2,
      [article({ sections: [{ heading: 'x', image: '/api/uploads/2' }, { heading: 'y', image: '/api/uploads/20' }] })],
      [],
    )
    expect(refs).toHaveLength(1)
    expect(refs[0].field).toBe('section image')
  })

  it('reports nothing when the upload is unused', () => {
    const refs = findUploadReferences(9, [article({ hero_image: '/api/uploads/1' })], [event()])
    expect(refs).toEqual([])
  })

  it('reports every page using the upload, not just the first', () => {
    const refs = findUploadReferences(
      4,
      [
        article({ slug: 'a', title: 'A', hero_image: '/api/uploads/4' }),
        article({ slug: 'b', title: 'B', sections: [{ image: '/api/uploads/4' }] }),
      ],
      [event({ image_url: '/api/uploads/4' })],
    )
    expect(refs).toHaveLength(3)
    expect(refs.map((r) => r.slug)).toEqual(['a', 'b', 'popup-solo401k'])
  })

  it('counts an article only once when it uses the same upload twice', () => {
    const refs = findUploadReferences(
      5,
      [article({ hero_image: '/api/uploads/5', sections: [{ image: '/api/uploads/5' }] })],
      [],
    )
    expect(refs).toHaveLength(1)
  })

  it('survives sections that are not an array', () => {
    const refs = findUploadReferences(3, [article({ sections: null })], [])
    expect(refs).toEqual([])
  })
})

describe('annotateUploadUsage', () => {
  const uploads = [
    { id: 2, filename: 'flyer.png' },
    { id: 20, filename: 'headshot.jpg' },
    { id: 7, filename: 'orphan.webp' },
  ]

  it('marks an upload used by an article as in use, and says where', () => {
    const rows = annotateUploadUsage(
      uploads,
      [article({ hero_image: '/api/uploads/2' })],
      [],
    )
    const two = rows.find((r) => r.id === 2)!
    expect(two.inUse).toBe(true)
    expect(two.references).toEqual([
      { kind: 'article', slug: 'brrrr-basics', title: 'BRRRR Basics', field: 'hero image' },
    ])
  })

  it('marks an upload nothing points at as unused, so it can be deleted', () => {
    const rows = annotateUploadUsage(uploads, [article({ hero_image: '/api/uploads/2' })], [])
    const orphan = rows.find((r) => r.id === 7)!
    expect(orphan.inUse).toBe(false)
    expect(orphan.references).toEqual([])
  })

  // The same prefix trap, now at the level the library screen renders from: if
  // upload 2 being referenced marked 20 as in use, she could never clear 20.
  it('does not mark id 20 as in use because id 2 is referenced', () => {
    const rows = annotateUploadUsage(uploads, [article({ hero_image: '/api/uploads/2' })], [])
    expect(rows.find((r) => r.id === 20)!.inUse).toBe(false)
  })

  it('keeps every upload in the list and preserves its order', () => {
    const rows = annotateUploadUsage(uploads, [], [])
    expect(rows.map((r) => r.id)).toEqual([2, 20, 7])
    expect(rows.every((r) => r.filename)).toBe(true)
  })
})

describe('explainUploadInUse', () => {
  const ref = (over: Partial<UploadReference> = {}): UploadReference => ({
    kind: 'article',
    slug: 'brrrr-basics',
    title: 'BRRRR Basics',
    field: 'hero image',
    ...over,
  })

  it('names the one page still using the image and what to do', () => {
    expect(explainUploadInUse([ref()])).toBe(
      'This file is still the hero image on the article “BRRRR Basics”. Remove it there first, then delete the file.',
    )
  })

  it('names an event by what the image is used as', () => {
    expect(explainUploadInUse([ref({ kind: 'event', title: 'Food Bank Volunteering', field: 'flyer' })])).toBe(
      'This file is still the flyer on the event “Food Bank Volunteering”. Remove it there first, then delete the file.',
    )
  })

  it('lists every page when more than one still uses it', () => {
    const msg = explainUploadInUse([
      ref({ title: 'BRRRR Basics' }),
      ref({ title: 'Creative Financing', field: 'section image' }),
      ref({ kind: 'event', title: 'Branch Meeting', field: 'flyer' }),
    ])
    expect(msg).toBe(
      'This file is still used in 3 places: the article “BRRRR Basics” (hero image), ' +
        'the article “Creative Financing” (section image), the event “Branch Meeting” (flyer). ' +
        'Remove it from each one first, then delete the file.',
    )
  })
})

// ── Attachments ──────────────────────────────────────────────────────────────
//
// PDFs attach to a section, which means they live in the same `sections` jsonb
// as section images. That is deliberate (both the members gate and this
// reference check read that column, so attachments are covered for free), but
// it does mean the two have to be told apart when naming the reason.

describe('findUploadReferences: attachments', () => {
  const withDoc = (url: string) =>
    article({
      sections: [
        { heading: 'Paperwork', paragraphs: ['Read this.'], documents: [{ url, label: 'Disclosures' }] },
      ],
    })

  it('finds an upload attached to a section as a document', () => {
    expect(findUploadReferences(9, [withDoc('/api/uploads/9')], [])).toEqual([
      { kind: 'article', slug: 'brrrr-basics', title: 'BRRRR Basics', field: 'attachment' },
    ])
  })

  it('calls it an attachment, not a section image', () => {
    // Telling an editor to go remove "the section image" when the thing in the
    // way is a PDF sends her looking for a picture that does not exist.
    const [ref] = findUploadReferences(9, [withDoc('/api/uploads/9')], [])
    expect(ref.field).toBe('attachment')
  })

  it('still calls an inline image a section image', () => {
    const a = article({
      sections: [{ heading: 'Intro', paragraphs: ['x'], image: { src: '/api/uploads/4', alt: 'x' } }],
    })
    expect(findUploadReferences(4, [a], [])[0].field).toBe('section image')
  })

  it('does not mistake attachment 20 for attachment 2', () => {
    // Same digit-guard trap as everywhere else this id is matched by string.
    expect(findUploadReferences(2, [withDoc('/api/uploads/20')], [])).toEqual([])
  })

  it('blocks a delete of an attached file, and says it is a file', () => {
    const refs = findUploadReferences(9, [withDoc('/api/uploads/9')], [])
    const msg = explainUploadInUse(refs)
    expect(msg).toContain('This file is still an attachment')
    expect(msg).not.toContain('image')
  })

  it('survives a sections blob that is not the shape the type promises', () => {
    // jsonb written by an editor, so this runs against whatever is in the
    // column, not against the interface.
    const junk = [null, 'nope', { documents: 'not-an-array' }, { documents: [null, { url: 5 }] }]
    expect(() =>
      findUploadReferences(1, [article({ sections: junk as unknown as ArticleRef['sections'] })], []),
    ).not.toThrow()
  })

  it('marks an attached upload as in use in the media library', () => {
    const [row] = annotateUploadUsage([{ id: 9 }], [withDoc('/api/uploads/9')], [])
    expect(row.inUse).toBe(true)
  })
})
