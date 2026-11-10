'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { DateFilter } from '@/components/admin/DateFilter'
import { RankedTable } from '@/components/admin/RankedTable'
import { StatCard } from '@/components/admin/StatCard'
import EmptyState from '@/components/admin/EmptyState'
import LoadingState from '@/components/admin/LoadingState'
import ForbiddenState from '@/components/admin/ForbiddenState'
import { adminFetch } from '@/lib/admin-fetch'

interface RankedRow {
  value: string
  count: number
}

interface AttributionData {
  utmSource: RankedRow[]
  utmMedium: RankedRow[]
  utmCampaign: RankedRow[]
  partnerRef: RankedRow[]
  campaignId: RankedRow[]
  sourceRoute: RankedRow[]
  summary: {
    trackedLeads: number
    partnerLeads: number
    campaignLeads: number
    uniqueSources: number
    uniqueMediums: number
    uniqueCampaigns: number
    uniquePartners: number
    uniqueRoutes: number
    topSource: RankedRow | null
    topMedium: RankedRow | null
    topCampaign: RankedRow | null
    topPartner: RankedRow | null
    topRoute: RankedRow | null
  }
}

export default function AttributionPage() {
  const [days, setDays] = useState(30)
  const [data, setData] = useState<AttributionData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [forbidden, setForbidden] = useState(false)

  useEffect(() => {
    setLoading(true)
    setError('')
    adminFetch(`/api/admin/analytics/attribution?days=${days}`)
      .then((res) => {
        if (res.status === 403) { setForbidden(true); throw new Error('forbidden') }
        if (!res.ok) throw new Error('Failed to load attribution data.')
        return res.json()
      })
      .then((d: AttributionData) => { setData(d); setLoading(false) })
      .catch((err: Error) => { if (err.message !== 'forbidden') setError(err.message); setLoading(false) })
  }, [days])

  if (forbidden) return <ForbiddenState />

  const hasAnyUtm =
    data && (data.utmSource.length > 0 || data.utmMedium.length > 0 || data.utmCampaign.length > 0)
  const hasAnyData =
    data &&
    (hasAnyUtm ||
      data.partnerRef.length > 0 ||
      data.campaignId.length > 0 ||
      data.sourceRoute.length > 0)
  const periodLabel = days > 0 ? `last ${days} days` : 'all time'

  return (
    <div>
      {/* Header — wraps gracefully on mobile */}
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-extrabold text-white sm:text-2xl lg:text-3xl" style={{ fontFamily: 'Manrope, sans-serif' }}>
            Attribution
          </h2>
          <p className="mt-1 text-sm text-[#6B7280]">
            Where leads come from ·{' '}
            <Link href="/analytics" className="underline hover:text-white">Overview</Link>
            {' · '}
            <Link href="/analytics/quiz" className="underline hover:text-white">Quiz</Link>
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <DateFilter days={days} onChange={setDays} />
        </div>
      </div>

      {loading ? (
        <LoadingState message="Loading attribution…" />
      ) : error ? (
        <EmptyState title="Couldn't load attribution" description={error} />
      ) : !data ? null : !hasAnyData ? (
        <EmptyState
          title={`No tracked traffic in the ${periodLabel}`}
          description="Attribution appears when leads arrive via tracked links carrying UTM tags, partner refs, or campaign IDs — e.g. ?utm_source=facebook&utm_medium=cpc. Try widening the date range."
        />
      ) : (
        <>
          {/* Summary KPIs */}
          <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <StatCard
              label="UTM-Tracked Leads"
              value={data.summary.trackedLeads}
              sub={`across ${data.summary.uniqueSources} source${data.summary.uniqueSources === 1 ? '' : 's'}`}
            />
            <StatCard
              label="Partner-Referred"
              value={data.summary.partnerLeads}
              sub={`${data.summary.uniquePartners} partner${data.summary.uniquePartners === 1 ? '' : 's'}`}
            />
            <StatCard
              label="Campaign Leads"
              value={data.summary.campaignLeads}
              sub={`${data.summary.uniqueCampaigns} UTM campaign${data.summary.uniqueCampaigns === 1 ? '' : 's'}`}
            />
            <StatCard
              label="Source Routes"
              value={data.summary.uniqueRoutes}
              sub="distinct landing routes"
            />
          </div>

          {/* Top performers */}
          <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <StatCard
              label="Top Source"
              value={data.summary.topSource ? data.summary.topSource.value : '—'}
              sub={data.summary.topSource ? `${data.summary.topSource.count} leads` : 'no UTM source'}
            />
            <StatCard
              label="Top Medium"
              value={data.summary.topMedium ? data.summary.topMedium.value : '—'}
              sub={data.summary.topMedium ? `${data.summary.topMedium.count} leads` : 'no UTM medium'}
            />
            <StatCard
              label="Top Campaign"
              value={data.summary.topCampaign ? data.summary.topCampaign.value : '—'}
              sub={data.summary.topCampaign ? `${data.summary.topCampaign.count} leads` : 'no UTM campaign'}
            />
            <StatCard
              label="Top Route"
              value={data.summary.topRoute ? data.summary.topRoute.value : '—'}
              sub={data.summary.topRoute ? `${data.summary.topRoute.count} leads` : 'no route data'}
            />
          </div>

          {!hasAnyUtm && (
            <div className="mb-6 rounded-xl border border-[#222] bg-[#111] p-5 sm:p-6">
              <p className="text-sm text-[#9CA3AF]">
                No UTM data yet — leads are tracked only by route, partner ref, or campaign ID. Add{' '}
                <code className="rounded bg-[#1A1A1A] px-1.5 py-0.5 text-xs text-[#9CA3AF]">
                  ?utm_source=…&amp;utm_medium=…
                </code>{' '}
                to your campaign links to populate UTM breakdowns.
              </p>
            </div>
          )}

          {/* Breakdown tables — RankedTable already stacks per-row, no horizontal scroll */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <RankedTable title="Source Routes" data={data.sourceRoute} />
            <RankedTable title="UTM Source" data={data.utmSource} />
            <RankedTable title="UTM Medium" data={data.utmMedium} />
            <RankedTable title="UTM Campaign" data={data.utmCampaign} />
            <RankedTable title="Partner Refs" data={data.partnerRef} />
            <RankedTable title="Campaign IDs" data={data.campaignId} />
          </div>
        </>
      )}
    </div>
  )
}
