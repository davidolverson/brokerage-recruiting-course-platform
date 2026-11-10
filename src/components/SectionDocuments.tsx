import type { ArticleDocument } from '@/lib/data/articles'
import { formatBytes } from '@/lib/format-bytes'
import { DOCX_MIME, XLSX_MIME } from '@/lib/upload-input'

/**
 * The attachment list under a section.
 *
 * One component used by both the handbook and the public education article, on
 * purpose: two hand-written copies of the same markup is how "is it upcoming?"
 * ended up decided in three places, and a divergence here would mean an
 * attachment that renders on one surface and silently vanishes on the other.
 *
 * The size is shown next to the link because these are real documents, and an
 * agent opening a 12 MB disclosures pack on cell data deserves the warning.
 */
export function SectionDocuments({ documents }: { documents?: ArticleDocument[] }) {
  if (!documents || documents.length === 0) return null

  return (
    <ul className="mt-4 flex flex-col gap-2 border-t border-[#E5E7EB] pt-4">
      {documents.map((d, i) => (
        <li key={i}>
          <a
            href={d.url}
            target="_blank"
            rel="noreferrer"
            // flex-wrap and max-w-full are load-bearing, not tidying. Without
            // them a single long unbroken label (an editor pasting a URL as the
            // name is the obvious way in) pushed this row past the viewport and
            // gave the WHOLE PAGE a horizontal scrollbar on a phone: 700px of
            // content in a 390px viewport, measured.
            className="group inline-flex max-w-full flex-wrap items-baseline gap-x-2 gap-y-1 font-semibold text-black underline-offset-4 hover:underline"
          >
            {/* Deliberately NOT aria-hidden. The rule that decorative text in
                a link becomes its name applies to decoration; "PDF" and the
                size are information. A screen reader user is entitled to know
                a link opens a 391 KB PDF rather than a page, before they
                click. */}
            <span className="text-[#6B7280]">
              {badgeFor(d)}
            </span>
            {/* min-w-0 lets this flex item shrink below its longest word, and
                overflow-wrap:anywhere breaks that word rather than the layout. */}
            <span className="min-w-0 [overflow-wrap:anywhere]">{d.label}</span>
            {d.size ? (
              <span className="text-sm font-normal text-[#6B7280]">{formatBytes(d.size)}</span>
            ) : null}
          </a>
        </li>
      ))}
    </ul>
  )
}

/**
 * What the badge says.
 *
 * Read from the mime captured at upload, which came from the file's magic
 * bytes. NOT from the label: the label is a free-text box the editor rewrites,
 * so a spreadsheet renamed "Fee schedule" would have announced itself as a PDF.
 *
 * Denormalising the mime onto the attachment is safe in a way that a stored
 * members-only flag was not: an upload id is immutable, the bytes behind
 * /api/uploads/9 never change, so this fact cannot drift out of date.
 */
function badgeFor(d: ArticleDocument): string {
  if (!d.url.startsWith('/api/uploads/')) return 'Link'
  if (d.mime === 'application/pdf') return 'PDF'
  if (d.mime === DOCX_MIME) return 'DOC'
  if (d.mime === XLSX_MIME) return 'XLS'
  // Attachments saved before the mime was recorded, and anything unrecognised.
  return 'File'
}
