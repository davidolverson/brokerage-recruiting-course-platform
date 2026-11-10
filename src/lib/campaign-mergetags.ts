export interface MergeTagContact {
  firstName?: string | null
}

export function renderMergeTags(body: string, contact: MergeTagContact): string {
  const firstName = contact.firstName?.trim() || 'there'
  return body.replace(/\{\{\s*first_name\s*\}\}/gi, firstName)
}

export function htmlToText(html: string): string {
  return html
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<\/p>/gi, '\n\n')
    .replace(/<\/?[^>]+(>|$)/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&')
    .replace(/\n{3,}/g, '\n\n')
    .trim()
}

export function appendUnsubscribeFooter(
  html: string,
  text: string,
  unsubscribeUrl: string
): { html: string; text: string } {
  const htmlFooter = `<hr style="margin:24px 0;border:none;border-top:1px solid #333"/><p style="font-size:12px;color:#6B7280">You're receiving this because you're on our contact list. <a href="${unsubscribeUrl}" style="color:#6B7280">Unsubscribe</a></p>`
  const textFooter = `\n\n---\nUnsubscribe: ${unsubscribeUrl}`
  return { html: html + htmlFooter, text: text + textFooter }
}
