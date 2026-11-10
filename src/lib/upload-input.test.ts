import { describe, it, expect } from 'vitest'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import {
  sniffMime,
  checkUpload,
  safeFilename,
  parseSubscriberList,
  MAX_UPLOAD_BYTES,
  MAX_UPLOAD_MB,
  DOCX_MIME,
  XLSX_MIME,
  ALLOWED_IMAGE_MIME,
  ALLOWED_MIME,
} from './upload-input'

const png = () => new Uint8Array([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a, 0, 0, 0, 0])
const jpeg = () => new Uint8Array([0xff, 0xd8, 0xff, 0xe0, 0, 0, 0, 0])
const gif = () => new Uint8Array([0x47, 0x49, 0x46, 0x38, 0x39, 0x61, 0, 0])
const webp = () => new Uint8Array([0x52, 0x49, 0x46, 0x46, 1, 2, 3, 4, 0x57, 0x45, 0x42, 0x50, 0])

describe('sniffMime', () => {
  it('identifies each allowed format from its leading bytes', () => {
    expect(sniffMime(png())).toBe('image/png')
    expect(sniffMime(jpeg())).toBe('image/jpeg')
    expect(sniffMime(gif())).toBe('image/gif')
    expect(sniffMime(webp())).toBe('image/webp')
  })

  it('refuses a file that is not an image, however it is labelled', () => {
    const html = new Uint8Array([...'<script>alert(1)</script>'].map((c) => c.charCodeAt(0)))
    expect(sniffMime(html)).toBeNull()
    const svg = new Uint8Array([...'<svg xmlns="http://www.w3.org/2000/svg">'].map((c) => c.charCodeAt(0)))
    expect(sniffMime(svg)).toBeNull()
  })

  it('refuses a RIFF container that is not WebP (e.g. a WAV)', () => {
    const wav = new Uint8Array([0x52, 0x49, 0x46, 0x46, 1, 2, 3, 4, 0x57, 0x41, 0x56, 0x45, 0])
    expect(sniffMime(wav)).toBeNull()
  })

  it('does not read past the end of a truncated file', () => {
    expect(sniffMime(new Uint8Array([0x89, 0x50]))).toBeNull()
    expect(sniffMime(new Uint8Array([]))).toBeNull()
  })
})

describe('checkUpload', () => {
  it('accepts a real image', () => {
    expect(checkUpload(png())).toEqual({ ok: true, mime: 'image/png' })
  })

  it('rejects an empty file', () => {
    expect(checkUpload(new Uint8Array([]))).toMatchObject({ ok: false })
    expect(checkUpload(new Uint8Array([])).error).toMatch(/empty/i)
  })

  it('rejects something oversized and says how big it was', () => {
    const big = new Uint8Array(MAX_UPLOAD_BYTES + 1)
    big.set(png())
    const r = checkUpload(big)
    expect(r.ok).toBe(false)
    // Asserted against the constant, not a literal: the whole point of
    // tooLargeMessage is that the number lives in exactly one place.
    expect(r.error).toContain(`${MAX_UPLOAD_MB} MB`)
  })

  it('rejects a non-image with a readable message', () => {
    const txt = new Uint8Array([...'hello there'].map((c) => c.charCodeAt(0)))
    expect(checkUpload(txt).error).toMatch(/PNG, JPEG, WebP or GIF/)
  })
})

// the office manager's onboarding material is a Business 101 PDF, a multiple-offer
// spreadsheet, a net sheet and affiliated business disclosures. The handbook
// can hold the words but could not hold a single one of those attachments.
describe('documents', () => {
  const pdf = () =>
    new Uint8Array([0x25, 0x50, 0x44, 0x46, 0x2d, 0x31, 0x2e, 0x37, 0x0a, 0, 0, 0])

  it('identifies a PDF from its leading bytes', () => {
    expect(sniffMime(pdf())).toBe('application/pdf')
  })

  it('accepts a PDF when documents are allowed', () => {
    expect(checkUpload(pdf(), 'document')).toEqual({ ok: true, mime: 'application/pdf' })
  })

  // The whole reason the allow-lists stay separate. An image picker that
  // silently accepted a PDF would store a file its own preview cannot render.
  it('still refuses a PDF on an image-only field', () => {
    const r = checkUpload(pdf(), 'image')
    expect(r.ok).toBe(false)
    expect(r.error).toMatch(/PNG, JPEG, WebP or GIF/)
  })

  it('defaults to image-only, so an existing caller cannot widen by accident', () => {
    expect(checkUpload(pdf()).ok).toBe(false)
  })

  it('accepts an image when documents are allowed, since a page may hold both', () => {
    expect(checkUpload(png(), 'document')).toEqual({ ok: true, mime: 'image/png' })
  })

  it('refuses something that is neither, with a message naming documents', () => {
    const txt = new Uint8Array([...'just some text'].map((c) => c.charCodeAt(0)))
    expect(checkUpload(txt, 'document').error).toMatch(/PDF/)
  })

  it('does not mistake a file that merely mentions %PDF- later on', () => {
    const sneaky = new Uint8Array([...'GIF89a %PDF-1.7'].map((c) => c.charCodeAt(0)))
    expect(sniffMime(sneaky)).toBe('image/gif')
  })

  it('keeps the served allow-list a superset of the image allow-list', () => {
    for (const m of ALLOWED_IMAGE_MIME) {
      expect(ALLOWED_MIME as readonly string[]).toContain(m)
    }
    expect(ALLOWED_MIME as readonly string[]).toContain('application/pdf')
  })
})

describe('safeFilename', () => {
  it('strips directory traversal', () => {
    expect(safeFilename('../../etc/passwd')).toBe('passwd')
    expect(safeFilename('C:\\Users\\me\\flyer.png')).toBe('flyer.png')
  })

  it('removes quotes that would break out of the Content-Disposition value', () => {
    expect(safeFilename('a"b.png')).toBe('ab.png')
  })

  it('strips CR/LF so a filename cannot inject a header', () => {
    // no slash here: path-stripping would otherwise take only the last segment
    expect(safeFilename('flyer.png\r\nX-Injected: yes')).toBe('flyer.pngX-Injected yes')
    expect(safeFilename('flyer.png\r\nX-Injected: yes')).not.toContain('\r')
    expect(safeFilename('flyer.png\r\nX-Injected: yes')).not.toContain('\n')
  })

  it('keeps only the final path segment, which also defuses a slashed payload', () => {
    expect(safeFilename('one\r\nContent-Type: text/html')).toBe('html')
  })

  it('always returns something usable', () => {
    expect(safeFilename('')).toBe('upload')
    expect(safeFilename('%%%')).toBe('upload')
  })

  it('keeps an ordinary name intact', () => {
    expect(safeFilename('sda-sept-1-2026-flyer.webp')).toBe('sda-sept-1-2026-flyer.webp')
  })
})

describe('parseSubscriberList', () => {
  it('parses one address per line', () => {
    const r = parseSubscriberList('a@example.com\nb@example.com')
    expect(r.valid).toEqual([
      { email: 'a@example.com', name: null },
      { email: 'b@example.com', name: null },
    ])
  })

  it('parses comma separated addresses', () => {
    expect(parseSubscriberList('a@example.com, b@example.com').valid).toHaveLength(2)
  })

  it('pulls a display name out of angle brackets', () => {
    const r = parseSubscriberList('Jane Smith <jane@example.com>')
    expect(r.valid).toEqual([{ email: 'jane@example.com', name: 'Jane Smith' }])
  })

  it('does not split a name containing a comma out of an angled entry', () => {
    const r = parseSubscriberList('Smith, Jane <jane@example.com>')
    expect(r.valid).toEqual([{ email: 'jane@example.com', name: 'Smith, Jane' }])
  })

  it('lowercases addresses so duplicates collapse', () => {
    const r = parseSubscriberList('Jane@Example.com\njane@example.com')
    expect(r.valid).toHaveLength(1)
    expect(r.valid[0].email).toBe('jane@example.com')
  })

  it('reports bad entries instead of silently dropping them', () => {
    const r = parseSubscriberList('good@example.com\nnot-an-email\nalso bad')
    expect(r.valid).toHaveLength(1)
    expect(r.invalid).toEqual(['not-an-email', 'also bad'])
  })

  it('ignores blank lines and stray separators', () => {
    const r = parseSubscriberList('\n\na@example.com\n\n;\n, \nb@example.com\n')
    expect(r.valid).toHaveLength(2)
    expect(r.invalid).toEqual([])
  })

  it('returns empty for empty input rather than throwing', () => {
    expect(parseSubscriberList('')).toEqual({ valid: [], invalid: [] })
  })
})

// ── Office documents ─────────────────────────────────────────────────────────
//
// .docx and .xlsx are ZIP archives, so the leading bytes only say "a zip" and
// the type has to be read from the package layout. Fixtures are real zips
// written by a zip library, not hand-rolled byte arrays, because the point is
// that this agrees with actual files rather than with itself.

describe('sniffMime: Office documents', () => {
  const fixture = (name: string) =>
    new Uint8Array(readFileSync(join(__dirname, '__fixtures__', name)))

  it('recognises a real .docx', () => {
    expect(sniffMime(fixture('sample.docx'))).toBe(DOCX_MIME)
  })

  it('recognises a real .xlsx', () => {
    expect(sniffMime(fixture('sample.xlsx'))).toBe(XLSX_MIME)
  })

  it('refuses a plain zip that is not an Office document', () => {
    // "It starts with PK" must not be enough, or the document field becomes an
    // upload slot for arbitrary archives.
    expect(sniffMime(fixture('plain.zip'))).toBeNull()
  })

  it('accepts Office files on a document field', () => {
    expect(checkUpload(fixture('sample.docx'), 'document')).toEqual({ ok: true, mime: DOCX_MIME })
    expect(checkUpload(fixture('sample.xlsx'), 'document')).toEqual({ ok: true, mime: XLSX_MIME })
  })

  it('refuses Office files on an image field', () => {
    // The event flyer picker must not be widened by the document work.
    expect(checkUpload(fixture('sample.docx'), 'image').ok).toBe(false)
    expect(checkUpload(fixture('sample.xlsx')).ok).toBe(false)
  })

  it('refuses a zip whose name merely mentions a Word part', () => {
    // The marker has to be an entry in the archive, not a string anywhere in
    // the file. A .txt that happens to contain "word/document.xml" is not a
    // zip at all and never reaches the OOXML check.
    const notAZip = new TextEncoder().encode('word/document.xml is a path I typed')
    expect(sniffMime(notAZip)).toBeNull()
  })

  it('lists both Office types as servable', () => {
    expect(ALLOWED_MIME as readonly string[]).toContain(DOCX_MIME)
    expect(ALLOWED_MIME as readonly string[]).toContain(XLSX_MIME)
  })
})
