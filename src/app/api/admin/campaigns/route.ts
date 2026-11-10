import { NextRequest, NextResponse } from 'next/server'
import sanitizeHtml from 'sanitize-html'
import { getAdminContext, requireRole, RoleError } from '@/lib/permissions'
import { createCampaign, listCampaigns, queueRecipients } from '@/lib/db/campaigns'
import { getSegmentContactIds } from '@/lib/db/contacts'
import { htmlToText } from '@/lib/campaign-mergetags'
import { processCampaignBatch } from '@/lib/campaign-sender'
import type { SegmentFilter } from '@/lib/segment-filter'

export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    requireRole(await getAdminContext(), 'owner', 'staff')
  } catch (e) {
    if (e instanceof RoleError) return NextResponse.json({ error: e.message }, { status: e.status })
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const campaigns = await listCampaigns()
  return NextResponse.json({ campaigns })
}

export async function POST(request: NextRequest) {
  let ctx
  try {
    ctx = requireRole(await getAdminContext(), 'owner', 'staff')
  } catch (e) {
    if (e instanceof RoleError) return NextResponse.json({ error: e.message }, { status: e.status })
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const body = await request.json().catch(() => null)
  if (!body) return NextResponse.json({ error: 'Invalid request' }, { status: 400 })

  const subject = String(body.subject || '').trim()
  const htmlBody = String(body.htmlBody || '').trim()
  const segmentFilter = (body.segmentFilter ?? {}) as SegmentFilter

  if (!subject) return NextResponse.json({ error: 'Subject is required' }, { status: 400 })
  if (!htmlBody) return NextResponse.json({ error: 'Message body is required' }, { status: 400 })

  const sanitizedHtmlBody = sanitizeHtml(htmlBody, {
    allowedTags: ['p', 'br', 'strong', 'em', 's', 'ul', 'ol', 'li', 'blockquote', 'code', 'pre', 'a', 'img', 'h1', 'h2', 'h3', 'hr'],
    allowedAttributes: {
      a: ['href', 'target', 'rel'],
      img: ['src', 'alt', 'title'],
    },
    allowedSchemes: ['http', 'https', 'mailto'],
  })
  if (!sanitizedHtmlBody.trim()) {
    return NextResponse.json({ error: 'Message body is required' }, { status: 400 })
  }

  const contactIds = await getSegmentContactIds(segmentFilter)
  if (contactIds.length === 0) {
    return NextResponse.json({ error: 'No contacts match this segment' }, { status: 400 })
  }

  const textBody = htmlToText(sanitizedHtmlBody)
  const campaign = await createCampaign({ subject, htmlBody: sanitizedHtmlBody, textBody, segmentFilter, createdBy: ctx.email })
  await queueRecipients(campaign.id, contactIds)

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://example.com'
  const result = await processCampaignBatch(campaign.id, siteUrl)

  return NextResponse.json({ campaignId: campaign.id, ...result })
}
