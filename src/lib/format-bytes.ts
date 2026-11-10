/**
 * One way to write a file size.
 *
 * There were three: prettyBytes in the media library, and a formatSize in each
 * of DocumentsField and SectionDocuments. Same numbers, three roundings, and
 * the agent-facing one and the admin-facing one could disagree about the size
 * of the same file. This repo has already paid for duplicated vocabularies
 * (handbook sections, the section type, the admin route list); a formatter is
 * a cheap place to stop doing it again.
 */
export function formatBytes(n: number): string {
  if (!Number.isFinite(n) || n <= 0) return '0 B'
  if (n < 1024) return `${Math.round(n)} B`
  if (n < 1024 * 1024) return `${(n / 1024).toFixed(0)} KB`
  return `${(n / 1024 / 1024).toFixed(1)} MB`
}
