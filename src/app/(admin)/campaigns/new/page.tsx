'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import RichTextEditor from '@/components/admin/RichTextEditor'
import { adminFetch } from '@/lib/admin-fetch'

const inputCls = 'w-full rounded-lg border border-[#222] bg-[#111] px-3 py-2 text-sm text-white placeholder-[#4B5563] outline-none focus:border-[#444]'
const labelCls = 'mb-1 block text-xs font-semibold uppercase tracking-wide text-[#6B7280]'

export default function NewCampaignPage() {
  const router = useRouter()
  const [subject, setSubject] = useState('')
  const [htmlBody, setHtmlBody] = useState('')
  const [teamSlug, setTeamSlug] = useState('')
  const [sourcesInput, setSourcesInput] = useState('')
  const [tagsInput, setTagsInput] = useState('')
  const [count, setCount] = useState<number | null>(null)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')

  const segmentFilter = {
    teamSlug: teamSlug || undefined,
    sources: sourcesInput ? sourcesInput.split(',').map((s) => s.trim()).filter(Boolean) : undefined,
    tags: tagsInput ? tagsInput.split(',').map((s) => s.trim()).filter(Boolean) : undefined,
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      adminFetch('/api/admin/campaigns/segment-preview', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(segmentFilter),
      })
        .then((r) => r.json())
        .then((data) => setCount(typeof data.count === 'number' ? data.count : null))
    }, 300)
    return () => clearTimeout(timer)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [teamSlug, sourcesInput, tagsInput])

  async function handleSend() {
    setError('')
    setSending(true)
    try {
      const res = await adminFetch('/api/admin/campaigns', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ subject, htmlBody, segmentFilter }),
      })
      const data = await res.json()
      if (!res.ok) {
        setError(data.error || 'Failed to send campaign')
        return
      }
      router.push(`/campaigns/${data.campaignId}`)
    } finally {
      setSending(false)
    }
  }

  return (
    <div className="max-w-3xl">
      <h1 className="mb-6 text-2xl font-bold text-white" style={{ fontFamily: 'Manrope, sans-serif' }}>New Campaign</h1>

      <div className="mb-4">
        <label className={labelCls}>Subject</label>
        <input className={inputCls} value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="This week at Example Investor Team" />
      </div>

      <div className="mb-6">
        <label className={labelCls}>Message</label>
        <RichTextEditor value={htmlBody} onChange={setHtmlBody} />
        <p className="mt-1 text-xs text-[#4B5563]">Use {'{{first_name}}'} to personalize. An unsubscribe link is added automatically.</p>
      </div>

      <div className="mb-6 rounded-xl border border-[#222] bg-[#111] p-4">
        <p className={labelCls}>Segment</p>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          <div>
            <label className={labelCls}>Team</label>
            <input className={inputCls} value={teamSlug} onChange={(e) => setTeamSlug(e.target.value)} placeholder="e.g. example-investor-team" />
          </div>
          <div>
            <label className={labelCls}>Sources (comma-separated)</label>
            <input className={inputCls} value={sourcesInput} onChange={(e) => setSourcesInput(e.target.value)} placeholder="training_subscriber, lead:fit_quiz" />
          </div>
          <div>
            <label className={labelCls}>Tags (comma-separated)</label>
            <input className={inputCls} value={tagsInput} onChange={(e) => setTagsInput(e.target.value)} placeholder="csv:spring-list" />
          </div>
        </div>
        <p className="mt-3 text-sm text-white">
          {count === null ? 'Calculating recipients…' : `${count} contact${count === 1 ? '' : 's'} will receive this email.`}
        </p>
      </div>

      {error && <p className="mb-4 text-sm text-red-400">{error}</p>}

      <button
        onClick={handleSend}
        disabled={!subject || !htmlBody || sending || count === null || count === 0}
        className="rounded-lg bg-white px-6 py-2.5 text-sm font-semibold text-black disabled:opacity-40"
      >
        {sending ? 'Sending…' : 'Send Campaign'}
      </button>
    </div>
  )
}
