import { isSafeHref } from '@/lib/articles-input'

/**
 * Split text into plain runs and link runs.
 *
 * An event description is a plain textarea, and the page rendered it as
 * `<p>{description}</p>` — so a URL in it was dead text. That is not a
 * cosmetic gap: on 2026-08-14 the office manager sent the copy for a builder tour with the
 * a builder community page as the last line, meaning agents were supposed to open
 * it. Pasting a link is the obvious way to point at something, there is no
 * other link field on an event, and the editor gets no hint that it will not
 * work.
 *
 * The scheme rule is `isSafeHref` — the same allow-list the handbook
 * attachments use — rather than a second opinion about what is safe to put in
 * an href. `www.` is accepted because it is how people paste, and it is
 * resolved to https before it is checked, never after.
 */
/**
 * `text` is what the editor typed. `label` is what a link run should DISPLAY.
 *
 * They differ because a real pasted URL is enormous: the office manager's builder link is 176
 * characters and rendered as three dense lines that dominated the event copy.
 * The href is always the full address, so nothing is lost and the link still
 * goes where it says.
 */
export interface TextRun { text: string; href?: string; label?: string }

/** Length past which a bare address stops being readable and starts being noise. */
const MAX_LABEL = 48

/**
 * A short, still-identifying label for a URL.
 *
 * Keeps the host and the LAST path segment, which is the part that names the
 * thing ("demo-community"), and elides the middle. Query strings go entirely:
 * `utm_source` and friends tell a reader nothing.
 *
 * Not truncated to a bare host, and never to generic text: the accessible name
 * of the link is this string, so it has to say where the link goes.
 */
export function linkLabel(href: string): string {
  let u: URL
  try { u = new URL(href) } catch { return href }

  const host = u.hostname.replace(/^www\./i, '')
  const segs = u.pathname.split('/').filter(Boolean)
  if (!segs.length) return host

  const full = `${host}/${segs.join('/')}`
  if (full.length <= MAX_LABEL && !u.search) return full
  if (segs.length === 1) {
    const one = `${host}/${segs[0]}`
    return one.length <= MAX_LABEL ? one : `${one.slice(0, MAX_LABEL - 1)}…`
  }
  const elided = `${host}/${segs[0]}/…/${segs[segs.length - 1]}`
  return elided.length <= MAX_LABEL ? elided : `${host}/…/${segs[segs.length - 1]}`
}

/**
 * Anything shaped like `scheme:rest`, plus a bare `www.` host.
 *
 * Deliberately WIDER than the schemes that are allowed. Scanning for
 * `https?://` alone would mean the regex was the real allow-list and the
 * `isSafeHref` call below could never fail — dead code wearing the appearance
 * of a security check, which is worse than no check because it reads as one.
 * Matching `javascript:alert(1)` and then REFUSING it is what makes the
 * allow-list load-bearing and the test for it honest.
 *
 * Starts at a letter, so a clock time ("11:00") is not a candidate, and
 * requires a non-space straight after the colon, so ordinary prose ("Note: we
 * meet at 11") is not either. Stops at whitespace and at `<` so a run can
 * never swallow markup.
 */
const URL_LIKE = /\b[a-z][a-z0-9+.-]*:[^\s<]+|\bwww\.[^\s<]+/gi

/**
 * Trailing punctuation belongs to the sentence, not the address. A link at the
 * end of a line is normally followed by a full stop, and including it gives a
 * 404 on a link that looked right.
 */
function trimTrailingPunctuation(raw: string): string {
  let url = raw
  while (url.length > 1) {
    const last = url[url.length - 1]
    if (`.,;:!?'"`.includes(last)) { url = url.slice(0, -1); continue }
    // A closing bracket counts only if this run opened one — "(see https://x.com/a)"
    // ends the address, but "https://x.com/a_(b)" does not.
    if (last === ')' || last === ']' || last === '}') {
      const open = last === ')' ? '(' : last === ']' ? '[' : '{'
      const opens = url.split(open).length - 1
      const closes = url.split(last).length - 1
      if (closes > opens) { url = url.slice(0, -1); continue }
    }
    break
  }
  return url
}

export function linkify(text: string): TextRun[] {
  const runs: TextRun[] = []
  let cursor = 0
  URL_LIKE.lastIndex = 0

  for (const match of text.matchAll(URL_LIKE)) {
    const raw = match[0]
    const start = match.index ?? 0
    const url = trimTrailingPunctuation(raw)
    const href = url.toLowerCase().startsWith('www.') ? `https://${url}` : url
    // A run that does not survive the allow-list stays plain text. Refusing to
    // link it is the right answer; dropping it would silently eat what the
    // editor typed.
    if (!isSafeHref(href)) continue

    if (start > cursor) runs.push({ text: text.slice(cursor, start) })
    runs.push({ text: url, href, label: linkLabel(href) })
    cursor = start + url.length
  }

  if (cursor < text.length) runs.push({ text: text.slice(cursor) })
  return runs.length ? runs : [{ text }]
}
