// Validation for admin image uploads. Pure functions, no request or DB, so the
// rules can be tested directly â same reasoning as phone-consent.ts.

/**
 * The upload ceiling, and why it is this number.
 *
 * Bytes are stored in Postgres, not object storage, and the INSERT sends them
 * as a hex string through Neon's HTTP driver. Hex doubles the payload, and Neon
 * refuses any request over 64 MiB with a 413. Measured against the production
 * endpoint: 25 MB of file (50 MB of hex) succeeds in ~3s, 32 MB (64 MB of hex)
 * fails outright. 20 MB leaves real headroom for the rest of the statement.
 *
 * So this is a hard platform limit, not a preference. Raising it past ~30 MB
 * cannot work without moving the bytes out of Postgres.
 */
export const MAX_UPLOAD_MB = 20
export const MAX_UPLOAD_BYTES = MAX_UPLOAD_MB * 1024 * 1024

/**
 * One place that turns an oversized file into a sentence.
 *
 * The limit used to be written as the literal "5 MB" in both the validator and
 * the route, so changing the constant would have left two messages confidently
 * quoting the old number.
 */
export function tooLargeMessage(bytes: number): string {
  return `That file is ${(bytes / 1024 / 1024).toFixed(1)} MB. The limit is ${MAX_UPLOAD_MB} MB.`
}

/**
 * Two allow-lists, deliberately not one.
 *
 * An image field and a document field want different answers. Widening a single
 * shared list to let the handbook carry a PDF would also let the event flyer
 * picker accept one, and then store a file whose own preview cannot render it.
 * The caller says which kind of field it is; the default is the strict one.
 */
export const ALLOWED_IMAGE_MIME = ['image/png', 'image/jpeg', 'image/webp', 'image/gif'] as const

export const DOCX_MIME = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
export const XLSX_MIME = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
export const ALLOWED_DOC_MIME = ['application/pdf', DOCX_MIME, XLSX_MIME] as const

/** Everything this app will ever serve back, used to pin the Content-Type. */
export const ALLOWED_MIME = [...ALLOWED_IMAGE_MIME, ...ALLOWED_DOC_MIME] as const
export type AllowedMime = (typeof ALLOWED_MIME)[number]

export type UploadKind = 'image' | 'document'

/**
 * Identifies an image from its leading bytes.
 *
 * The browser-declared Content-Type is attacker-controlled and a filename
 * extension is worse, so neither decides what we store or what we later send
 * back in a Content-Type header. Anything not recognised here is refused.
 */
export function sniffMime(bytes: Uint8Array): AllowedMime | null {
  const at = (i: number) => bytes[i]

  // PNG: 89 50 4E 47 0D 0A 1A 0A
  if (
    bytes.length > 8 &&
    at(0) === 0x89 && at(1) === 0x50 && at(2) === 0x4e && at(3) === 0x47 &&
    at(4) === 0x0d && at(5) === 0x0a && at(6) === 0x1a && at(7) === 0x0a
  ) return 'image/png'

  // JPEG: FF D8 FF
  if (bytes.length > 3 && at(0) === 0xff && at(1) === 0xd8 && at(2) === 0xff) return 'image/jpeg'

  // GIF: "GIF87a" / "GIF89a"
  if (
    bytes.length > 6 &&
    at(0) === 0x47 && at(1) === 0x49 && at(2) === 0x46 && at(3) === 0x38 &&
    (at(4) === 0x37 || at(4) === 0x39) && at(5) === 0x61
  ) return 'image/gif'

  // WEBP: "RIFF" .... "WEBP"
  if (
    bytes.length > 12 &&
    at(0) === 0x52 && at(1) === 0x49 && at(2) === 0x46 && at(3) === 0x46 &&
    at(8) === 0x57 && at(9) === 0x45 && at(10) === 0x42 && at(11) === 0x50
  ) return 'image/webp'

  // PDF: "%PDF-". Anchored at byte 0 like every other check here, so a file
  // that merely contains the marker later on is not mistaken for one.
  if (
    bytes.length > 5 &&
    at(0) === 0x25 && at(1) === 0x50 && at(2) === 0x44 && at(3) === 0x46 && at(4) === 0x2d
  ) return 'application/pdf'

  // .docx and .xlsx are ZIP archives, so the leading bytes only ever say "a
  // zip". What kind of document it is has to come from inside the archive.
  if (
    bytes.length > 4 &&
    at(0) === 0x50 && at(1) === 0x4b && at(2) === 0x03 && at(3) === 0x04
  ) {
    return sniffOoxml(bytes)
  }

  return null
}

/**
 * Which Office document, if any, this ZIP is.
 *
 * Entry NAMES are stored uncompressed in a zip (in every local file header and
 * again in the central directory), so the package layout is readable without
 * inflating anything. A Word package contains `word/document.xml`; a workbook
 * contains `xl/workbook.xml`.
 *
 * ⚠️ Checked against a real .docx before trusting it: the obvious rule, "the
 * first entry is [Content_Types].xml", is FALSE in practice. A genuine Word
 * export listed `word/` first, so a first-entry test would have rejected every
 * real file while passing a hand-made fixture.
 *
 * This says "a zip laid out like a Word document", not "a valid Word document".
 * That is the honest limit, and it is enough for what the type is used for:
 * the bytes are only ever served back with a pinned Content-Type, nosniff and
 * a download disposition, never interpreted.
 */
function sniffOoxml(bytes: Uint8Array): AllowedMime | null {
  if (contains(bytes, 'word/document.xml')) return DOCX_MIME
  if (contains(bytes, 'xl/workbook.xml')) return XLSX_MIME
  return null
}

/** Byte-wise substring search, so a 20 MB upload is never turned into a string. */
function contains(haystack: Uint8Array, needle: string): boolean {
  const n = needle.length
  if (n === 0 || haystack.length < n) return false
  const first = needle.charCodeAt(0)
  const limit = haystack.length - n
  outer: for (let i = 0; i <= limit; i++) {
    if (haystack[i] !== first) continue
    for (let j = 1; j < n; j++) {
      if (haystack[i + j] !== needle.charCodeAt(j)) continue outer
    }
    return true
  }
  return false
}

export interface UploadCheck {
  ok: boolean
  mime?: AllowedMime
  error?: string
}

export function checkUpload(bytes: Uint8Array, kind: UploadKind = 'image'): UploadCheck {
  if (bytes.length === 0) return { ok: false, error: 'That file is empty.' }
  if (bytes.length > MAX_UPLOAD_BYTES) {
    return { ok: false, error: tooLargeMessage(bytes.length) }
  }
  const mime = sniffMime(bytes)
  const permitted: readonly string[] =
    kind === 'document' ? ALLOWED_MIME : ALLOWED_IMAGE_MIME

  if (!mime || !permitted.includes(mime)) {
    return {
      ok: false,
      error:
        kind === 'document'
          ? 'That does not look like a PDF, Word or Excel file, or a PNG, JPEG, WebP or GIF image. ' +
            'If it is an old .doc or .xls, save it as .docx, .xlsx or PDF first.'
          : 'That does not look like a PNG, JPEG, WebP or GIF image.',
    }
  }
  return { ok: true, mime }
}

/**
 * Strips directory parts and anything unsafe from a user-supplied filename.
 * Control characters are removed explicitly: this value ends up in a
 * Content-Disposition header, where a raw newline would let the filename
 * inject a header of its own.
 */
export function safeFilename(name: string): string {
  const base = String(name || '')
    .replace(/\\/g, '/')
    .split('/')
    .pop() as string
  const cleaned = base
    // Strips control characters out of an uploaded filename. The disable
    // comment that used to sit here guarded a rule this config does not
    // enable, so it was reported as dead — and a directive that guards
    // nothing reads as a considered exception when it is not one.
    .replace(/[\x00-\x1f\x7f]/g, '')
    .replace(/[^A-Za-z0-9._ -]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 120)
  return cleaned || 'upload'
}

// ââ Subscriber input âââââââââââââââââââââââââââââââââââââââââââââââââââââââââ

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export interface ParsedSubscriber {
  email: string
  name: string | null
}

/**
 * Parses a pasted block of recipients.
 *
 * Accepts one per line or comma separated, with or without a display name:
 *   Jane Smith <jane@example.com>
 *   jane@example.com
 *   jane@example.com, joe@example.com
 *
 * Invalid entries are returned separately rather than dropped â silently
 * discarding a line reads as "the CMS ate half my list".
 */
export function parseSubscriberList(input: string): {
  valid: ParsedSubscriber[]
  invalid: string[]
} {
  const valid: ParsedSubscriber[] = []
  const invalid: string[] = []
  const seen = new Set<string>()

  const chunks = String(input || '')
    .split(/[\r\n;]+/)
    .flatMap((line) => (line.includes('<') ? [line] : line.split(',')))
    .map((s) => s.trim())
    .filter(Boolean)

  for (const chunk of chunks) {
    let email = ''
    let name: string | null = null

    const angled = chunk.match(/^(.*)<([^>]+)>$/)
    if (angled) {
      name = angled[1].trim().replace(/^["']|["']$/g, '') || null
      email = angled[2].trim()
    } else {
      email = chunk
    }

    email = email.toLowerCase()
    if (!EMAIL_RE.test(email)) {
      invalid.push(chunk.slice(0, 80))
      continue
    }
    if (seen.has(email)) continue
    seen.add(email)
    valid.push({ email, name })
  }

  return { valid, invalid }
}
