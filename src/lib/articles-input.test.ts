import { describe, it, expect } from 'vitest'
import { isSafeHref, normalizeSections, slugify } from './articles-input'

describe('slugify', () => {
  it('turns a title into a url segment', () => {
    expect(slugify('The BRRR Strategy: A Playbook')).toBe('the-brrr-strategy-a-playbook')
  })

  it('strips leading and trailing separators rather than leaving them in the url', () => {
    expect(slugify('  !!Hello World!!  ')).toBe('hello-world')
  })

  it('falls back to a usable slug when the title has nothing alphanumeric', () => {
    expect(slugify('!!!')).toBe('article')
    expect(slugify('')).toBe('article')
  })

  it('caps length so the url stays manageable', () => {
    expect(slugify('a'.repeat(200))).toHaveLength(80)
  })
})

describe('normalizeSections', () => {
  it('accepts a well-formed section', () => {
    const out = normalizeSections([{ heading: 'Why BRRR', paragraphs: ['One.', 'Two.'] }])
    expect(out).toEqual([{ heading: 'Why BRRR', paragraphs: ['One.', 'Two.'] }])
  })

  it('treats missing sections as an empty body, not an error', () => {
    expect(normalizeSections(undefined)).toEqual([])
    expect(normalizeSections(null)).toEqual([])
  })

  it('rejects a non-list', () => {
    expect(() => normalizeSections('nope')).toThrow('Sections must be a list')
  })

  it('rejects a section with no heading, naming which one', () => {
    expect(() => normalizeSections([{ heading: '   ', paragraphs: ['x'] }])).toThrow(
      'Section 1 needs a heading',
    )
  })

  it('reports the correct index for a later bad section', () => {
    expect(() =>
      normalizeSections([
        { heading: 'Good', paragraphs: ['x'] },
        { heading: 'Also good', paragraphs: ['y'] },
        { heading: '', paragraphs: ['z'] },
      ]),
    ).toThrow('Section 3 needs a heading')
  })

  it('rejects a section whose paragraphs are not a list', () => {
    expect(() => normalizeSections([{ heading: 'H', paragraphs: 'text' }])).toThrow(
      'Section 1 needs a list of paragraphs',
    )
  })

  it('drops blank paragraphs but keeps the real ones', () => {
    const out = normalizeSections([{ heading: 'H', paragraphs: ['', '  ', 'Real text.'] }])
    expect(out[0].paragraphs).toEqual(['Real text.'])
  })

  it('rejects a section left with no text at all, quoting the heading', () => {
    expect(() => normalizeSections([{ heading: 'Empty', paragraphs: ['', '   '] }])).toThrow(
      'Section 1 ("Empty") needs some text or at least one attachment',
    )
  })

  it('trims surrounding whitespace on heading and paragraphs', () => {
    const out = normalizeSections([{ heading: '  H  ', paragraphs: ['  body  '] }])
    expect(out[0].heading).toBe('H')
    expect(out[0].paragraphs).toEqual(['body'])
  })

  it('keeps an image that has both a path and alt text', () => {
    const out = normalizeSections([
      { heading: 'H', paragraphs: ['x'], image: { src: '/a.jpg', alt: 'A chart' } },
    ])
    expect(out[0].image).toEqual({ src: '/a.jpg', alt: 'A chart' })
  })

  it('refuses an image with no alt text instead of shipping it unlabelled', () => {
    expect(() =>
      normalizeSections([{ heading: 'H', paragraphs: ['x'], image: { src: '/a.jpg', alt: '' } }]),
    ).toThrow('Section 1 ("H") has an image with no alt text')
  })

  it('ignores an image entry that has alt text but no path', () => {
    const out = normalizeSections([
      { heading: 'H', paragraphs: ['x'], image: { src: '', alt: 'orphaned' } },
    ])
    expect(out[0].image).toBeUndefined()
    // the rest of the section still survives
    expect(out[0].paragraphs).toEqual(['x'])
  })

  it('rejects a null entry in the list', () => {
    expect(() => normalizeSections([null])).toThrow('Section 1 is not valid')
  })
})

// ── Section attachments ──────────────────────────────────────────────────────
//
// A document link with no words is a bare URL an agent cannot judge, so a
// missing label is refused the same way missing alt text is.

describe('normalizeSections: attachments', () => {
  const base = { heading: 'Paperwork', paragraphs: ['Read this before closing.'] }

  it('keeps a well-formed attachment', () => {
    const [s] = normalizeSections([
      { ...base, documents: [{ url: '/api/uploads/9', label: 'Disclosures', size: 1234 }] },
    ])
    expect(s.documents).toEqual([{ url: '/api/uploads/9', label: 'Disclosures', size: 1234 }])
  })

  it('refuses an attachment with no name', () => {
    expect(() =>
      normalizeSections([{ ...base, documents: [{ url: '/api/uploads/9', label: '  ' }] }]),
    ).toThrow(/no name/)
  })

  it('refuses an attachment with no file', () => {
    expect(() =>
      normalizeSections([{ ...base, documents: [{ url: '', label: 'Disclosures' }] }]),
    ).toThrow(/no file/)
  })

  it('drops a row the editor added but never filled in', () => {
    // The UI appends the entry before the upload finishes; a blank pair is a
    // half-typed row, not an error worth blocking a save over.
    const [s] = normalizeSections([{ ...base, documents: [{ url: '', label: '' }] }])
    expect(s.documents).toBeUndefined()
  })

  it('leaves documents off entirely when there are none', () => {
    const [s] = normalizeSections([base])
    expect('documents' in s).toBe(false)
  })

  it('rejects a documents value that is not a list', () => {
    expect(() => normalizeSections([{ ...base, documents: 'nope' }])).toThrow(/invalid attachment list/)
  })

  it('ignores a nonsense size rather than storing it', () => {
    const [s] = normalizeSections([
      { ...base, documents: [{ url: '/api/uploads/9', label: 'Net sheet', size: -1 }] },
    ])
    expect(s.documents).toEqual([{ url: '/api/uploads/9', label: 'Net sheet' }])
  })
})

describe('normalizeSections: a section that is only attachments', () => {
  it('allows a heading plus files with no prose', () => {
    // "Forms and documents" followed by six PDFs is the likely shape of the
    // paperwork page. Requiring a sentence above it would be filler.
    const [s] = normalizeSections([
      {
        heading: 'Forms and documents',
        paragraphs: [],
        documents: [{ url: '/api/uploads/9', label: 'Wire fraud advisory' }],
      },
    ])
    expect(s.paragraphs).toEqual([])
    expect(s.documents).toHaveLength(1)
  })

  it('still refuses a section with neither text nor files', () => {
    expect(() =>
      normalizeSections([{ heading: 'Empty', paragraphs: [''], documents: [] }]),
    ).toThrow(/needs some text or at least one attachment/)
  })
})

// ── Attachment links become hrefs, so the scheme matters ─────────────────────

describe('isSafeHref', () => {
  it('allows ordinary web links and paths on this site', () => {
    expect(isSafeHref('https://example.com/schedule')).toBe(true)
    expect(isSafeHref('http://example.com')).toBe(true)
    expect(isSafeHref('/api/uploads/9')).toBe(true)
    expect(isSafeHref('/handbook/business-101')).toBe(true)
  })

  it('refuses schemes that execute', () => {
    expect(isSafeHref('javascript:alert(1)')).toBe(false)
    expect(isSafeHref('JavaScript:alert(1)')).toBe(false)
    expect(isSafeHref('  javascript:alert(1)')).toBe(false)
    expect(isSafeHref('data:text/html,<script>alert(1)</script>')).toBe(false)
    expect(isSafeHref('vbscript:msgbox')).toBe(false)
  })

  it('refuses a protocol-relative url, which is not a path on this site', () => {
    expect(isSafeHref('//evil.example.com/x')).toBe(false)
  })

  it('refuses an empty or whitespace url', () => {
    expect(isSafeHref('')).toBe(false)
    expect(isSafeHref('   ')).toBe(false)
  })
})

describe('normalizeSections: attachment links', () => {
  const base = { heading: 'Partners', paragraphs: ['Who to call.'] }

  it('keeps an external link as an attachment', () => {
    const [s] = normalizeSections([
      { ...base, documents: [{ url: 'https://example.com/schedule', label: 'Book your TC call' }] },
    ])
    expect(s.documents).toEqual([{ url: 'https://example.com/schedule', label: 'Book your TC call' }])
  })

  it('refuses a javascript: url before it can be stored', () => {
    // This value is rendered straight into an href on a members page.
    expect(() =>
      normalizeSections([{ ...base, documents: [{ url: 'javascript:alert(1)', label: 'Click me' }] }]),
    ).toThrow(/not a web address/)
  })
})
