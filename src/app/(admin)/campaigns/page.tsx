'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import type { Campaign } from '@/lib/db/campaigns'
import LoadingState from '@/components/admin/LoadingState'
import EmptyState from '@/components/admin/EmptyState'
import { adminFetch } from '@/lib/admin-fetch'

function StatusBadge({ status }: { status: Campaign['status'] }) {
  const cls = status === 'sent'
    ? 'bg-white text-black'
    : status === 'sending'
      ? 'border border-[#444] text-[#9CA3AF]'
      : 'bg-[#333] text-[#6B7280]'
  return <span className={`inline-flex shrink-0 rounded-full px-2.5 py-0.5 text-xs font-semibold ${cls}`}>{status}</span>
}

export default function CampaignsPage() {
  const [campaigns, setCampaigns] = useState<Campaign[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    setLoading(true)
    setError(null)
    adminFetch('/api/admin/campaigns')
      .then(async (res) => {
        const data = await res.json()
        if (!res.ok) {
          setError(data.error || 'Failed to load campaigns')
          return
        }
        setCampaigns(data.campaigns ?? [])
      })
      .finally(() => setLoading(false))
  }, [])

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white" style={{ fontFamily: 'Manrope, sans-serif' }}>Campaigns</h1>
          <p className="mt-1 text-sm text-[#6B7280]">Mass emails sent to filtered contact segments.</p>
        </div>
        <Link href="/campaigns/new" className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-black">New Campaign</Link>
      </div>

      {error && <p className="mb-4 text-sm text-red-400">{error}</p>}

      {loading ? (
        <LoadingState message="Loading campaigns..." />
      ) : campaigns.length === 0 ? (
        <EmptyState title="No campaigns yet" description="Send your first mass email." action={{ label: 'New Campaign', href: '/campaigns/new' }} />
      ) : (
        <div className="overflow-hidden rounded-xl border border-[#222]">
          <table className="w-full text-left text-sm">
            <thead className="bg-[#111] text-[#6B7280]">
              <tr>
                <th className="px-4 py-3 font-medium">Subject</th>
                <th className="px-4 py-3 font-medium">Status</th>
                <th className="px-4 py-3 font-medium">Sent / Total</th>
                <th className="px-4 py-3 font-medium">Created</th>
              </tr>
            </thead>
            <tbody>
              {campaigns.map((c) => (
                <tr key={c.id} className="cursor-pointer border-t border-[#1A1A1A] hover:bg-[#111]" onClick={() => (window.location.href = `/campaigns/${c.id}`)}>
                  <td className="px-4 py-3 text-white">{c.subject}</td>
                  <td className="px-4 py-3"><StatusBadge status={c.status} /></td>
                  <td className="px-4 py-3 text-[#9CA3AF]">{c.sent_count} / {c.recipient_count}{c.failed_count > 0 ? ` (${c.failed_count} failed)` : ''}</td>
                  <td className="px-4 py-3 text-[#6B7280]">{new Date(c.created_at).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
