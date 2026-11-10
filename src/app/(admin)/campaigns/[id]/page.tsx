'use client'

import { useCallback, useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import type { Campaign } from '@/lib/db/campaigns'
import LoadingState from '@/components/admin/LoadingState'
import { adminFetch } from '@/lib/admin-fetch'

export default function CampaignDetailPage() {
  const { id } = useParams<{ id: string }>()
  const [campaign, setCampaign] = useState<Campaign | null>(null)
  const [loading, setLoading] = useState(true)
  const [resuming, setResuming] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchCampaign = useCallback(async () => {
    const res = await adminFetch(`/api/admin/campaigns/${id}`)
    const data = await res.json()
    setCampaign(data.campaign ?? null)
    setLoading(false)
  }, [id])

  useEffect(() => {
    fetchCampaign()
  }, [fetchCampaign])

  async function handleResume() {
    setResuming(true)
    setError(null)
    try {
      const res = await adminFetch(`/api/admin/campaigns/${id}/send`, { method: 'POST' })
      const data = await res.json().catch(() => null)
      if (!res.ok) {
        setError(data?.error || 'Failed to resume sending')
        return
      }
      await fetchCampaign()
    } catch {
      setError('Failed to resume sending')
    } finally {
      setResuming(false)
    }
  }

  if (loading) return <LoadingState message="Loading campaign..." />
  if (!campaign) return <p className="text-sm text-[#6B7280]">Campaign not found.</p>

  const queued = campaign.recipient_count - campaign.sent_count - campaign.failed_count

  return (
    <div className="max-w-3xl">
      <h1 className="mb-1 text-2xl font-bold text-white" style={{ fontFamily: 'Manrope, sans-serif' }}>{campaign.subject}</h1>
      <p className="mb-6 text-sm text-[#6B7280]">Created {new Date(campaign.created_at).toLocaleString()}</p>

      <div className="mb-6 grid grid-cols-3 gap-3">
        <div className="rounded-xl border border-[#222] bg-[#111] p-4">
          <p className="text-xs uppercase tracking-wide text-[#6B7280]">Sent</p>
          <p className="mt-1 text-2xl font-bold text-white">{campaign.sent_count}</p>
        </div>
        <div className="rounded-xl border border-[#222] bg-[#111] p-4">
          <p className="text-xs uppercase tracking-wide text-[#6B7280]">Failed</p>
          <p className="mt-1 text-2xl font-bold text-white">{campaign.failed_count}</p>
        </div>
        <div className="rounded-xl border border-[#222] bg-[#111] p-4">
          <p className="text-xs uppercase tracking-wide text-[#6B7280]">Queued</p>
          <p className="mt-1 text-2xl font-bold text-white">{queued}</p>
        </div>
      </div>

      {campaign.status === 'sending' && queued > 0 && (
        <div className="mb-6">
          <button
            onClick={handleResume}
            disabled={resuming}
            className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-black disabled:opacity-40"
          >
            {resuming ? 'Sending…' : 'Resume sending'}
          </button>
          {error && <p className="mt-2 text-sm text-red-400">{error}</p>}
        </div>
      )}

      <div className="rounded-xl border border-[#222] bg-[#111] p-4">
        <p className="mb-2 text-xs uppercase tracking-wide text-[#6B7280]">Preview</p>
        <div className="rounded-lg border border-[#222] bg-black p-4 text-sm text-white" dangerouslySetInnerHTML={{ __html: campaign.html_body }} />
      </div>
    </div>
  )
}
