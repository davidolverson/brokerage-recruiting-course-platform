/**
 * Lightweight markdown-to-HTML converter for lesson content.
 * Handles the subset of markdown used in course-content.ts:
 *   ## / ### headings
 *   **bold**, *italic*
 *   - bullet lists
 *   | table | rows |
 *   numbered lists (1. item)
 *   double newlines -> paragraph breaks
 */

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

function processInline(text: string): string {
  // Bold before italic to avoid partial matches
  return text
    .replace(/\*\*\*(.+?)\*\*\*/g, '<strong><em>$1</em></strong>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/`(.+?)`/g, '<code class="rounded bg-gray-100 px-1 py-0.5 text-sm font-mono text-gray-800">$1</code>')
}

function buildTable(rows: string[]): string {
  const cells = rows.map((row) =>
    row
      .replace(/^\|/, '')
      .replace(/\|$/, '')
      .split('|')
      .map((c) => c.trim())
  )

  // Second row is the separator (---|---), skip it
  const header = cells[0]
  const body = cells.slice(2)

  const headerHtml = header
    .map((h) => `<th class="border border-gray-200 bg-gray-50 px-4 py-2 text-left text-sm font-semibold text-gray-900">${processInline(h)}</th>`)
    .join('')

  const bodyHtml = body
    .map((row) => {
      const tds = row
        .map((td) => `<td class="border border-gray-200 px-4 py-2 text-sm text-gray-700">${processInline(td)}</td>`)
        .join('')
      return `<tr class="even:bg-gray-50">${tds}</tr>`
    })
    .join('')

  return `<div class="my-6 overflow-x-auto rounded-lg border border-gray-200"><table class="w-full border-collapse"><thead><tr>${headerHtml}</tr></thead><tbody>${bodyHtml}</tbody></table></div>`
}

export function renderMarkdown(content: string): string {
  const lines = content.split('\n')
  const output: string[] = []

  let i = 0

  while (i < lines.length) {
    const line = lines[i]

    // --- Table block ---
    if (/^\|/.test(line)) {
      const tableLines: string[] = []
      while (i < lines.length && /^\|/.test(lines[i])) {
        tableLines.push(lines[i])
        i++
      }
      output.push(buildTable(tableLines))
      continue
    }

    // --- Unordered list block ---
    if (/^- /.test(line)) {
      const listItems: string[] = []
      while (i < lines.length && /^- /.test(lines[i])) {
        listItems.push(`<li class="mb-1">${processInline(lines[i].replace(/^- /, ''))}</li>`)
        i++
      }
      output.push(`<ul class="my-4 list-disc space-y-1 pl-6 text-gray-700">${listItems.join('')}</ul>`)
      continue
    }

    // --- Ordered list block ---
    if (/^\d+\. /.test(line)) {
      const listItems: string[] = []
      while (i < lines.length && /^\d+\. /.test(lines[i])) {
        listItems.push(`<li class="mb-1">${processInline(lines[i].replace(/^\d+\. /, ''))}</li>`)
        i++
      }
      output.push(`<ol class="my-4 list-decimal space-y-1 pl-6 text-gray-700">${listItems.join('')}</ol>`)
      continue
    }

    // --- H2 ---
    if (/^## /.test(line)) {
      output.push(`<h2 class="mb-3 mt-8 text-2xl font-extrabold text-gray-900" style="font-family:Manrope,sans-serif">${processInline(line.replace(/^## /, ''))}</h2>`)
      i++
      continue
    }

    // --- H3 ---
    if (/^### /.test(line)) {
      output.push(`<h3 class="mb-2 mt-6 text-xl font-bold text-gray-900" style="font-family:Manrope,sans-serif">${processInline(line.replace(/^### /, ''))}</h3>`)
      i++
      continue
    }

    // --- H4 ---
    if (/^#### /.test(line)) {
      output.push(`<h4 class="mb-2 mt-4 text-lg font-semibold text-gray-900">${processInline(line.replace(/^#### /, ''))}</h4>`)
      i++
      continue
    }

    // --- Blank line ---
    if (line.trim() === '') {
      i++
      continue
    }

    // --- Paragraph: gather consecutive non-special lines ---
    const paraLines: string[] = []
    while (
      i < lines.length &&
      lines[i].trim() !== '' &&
      !/^#{1,4} /.test(lines[i]) &&
      !/^- /.test(lines[i]) &&
      !/^\d+\. /.test(lines[i]) &&
      !/^\|/.test(lines[i])
    ) {
      paraLines.push(lines[i])
      i++
    }

    if (paraLines.length > 0) {
      // Join with <br> for single line breaks within a paragraph
      const inner = paraLines.map(processInline).join('<br />')
      output.push(`<p class="mb-4 leading-relaxed text-gray-700">${inner}</p>`)
    }
  }

  return output.join('\n')
}
