'use client'

import { useState, useEffect, useCallback } from 'react'
import { StatCard } from '@/components/admin/StatCard'
import LoadingState from '@/components/admin/LoadingState'
import { adminFetch } from '@/lib/admin-fetch'

interface Preferences {
  instant_new_lead: boolean
  instant_assignment: boolean
  weekly_digest: boolean
}

type DeliveryGroup = 'instant' | 'digest'

const TOGGLE_META: {
  key: keyof Preferences
  label: string
  description: string
  group: DeliveryGroup
}[] = [
  {
    key: 'instant_new_lead',
    label: 'New lead alerts',
    description: 'Get notified immediately when a new lead submits an inquiry through the website.',
    group: 'instant',
  },
  {
    key: 'instant_assignment',
    label: 'Lead assignment alerts',
    description: 'Get notified when a lead is assigned to you or your team.',
    group: 'instant',
  },
  {
    key: 'weekly_digest',
    label: 'Weekly digest',
    description: 'Receive a summary of lead activity, pipeline status, and team metrics every Monday.',
    group: 'digest',
  },
]

const GROUP_META: Record<DeliveryGroup, { title: string; blurb: string }> = {
  instant: {
    title: 'Real-time Alerts',
    blurb: 'Delivered to your email the moment something happens.',
  },
  digest: {
    title: 'Summaries',
    blurb: 'Periodic roundups instead of individual alerts.',
  },
}

export default function NotificationsPage() {
  const [preferences, setPreferences] = useState<Preferences | null>(null)
  const [email, setEmail] = useState<string>('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    adminFetch('/api/admin/notifications')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to load preferences')
        return res.json()
      })
      .then((data) => {
        setPreferences(data.preferences)
        setEmail(data.email)
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  const toggle = useCallback(
    async (key: keyof Preferences) => {
      if (!preferences) return

      const prev = { ...preferences }
      const updated = { ...preferences, [key]: !preferences[key] }
      setPreferences(updated)
      setError(null)

      try {
        const res = await adminFetch('/api/admin/notifications', {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ [key]: updated[key] }),
        })
        if (!res.ok) {
          setPreferences(prev)
          setError('Failed to save preference')
        }
      } catch {
        setPreferences(prev)
        setError('Failed to save preference')
      }
    },
    [preferences],
  )

  if (loading) {
    return <LoadingState message="Loading preferences..." />
  }

  if (error && !preferences) {
    return (
      <div className="rounded-xl border border-[#222] bg-[#111] p-8 text-center">
        <p className="text-sm text-red-400">{error}</p>
      </div>
    )
  }

  const enabledCount = preferences
    ? Object.values(preferences).filter(Boolean).length
    : 0
  const totalCount = TOGGLE_META.length
  const groups: DeliveryGroup[] = ['instant', 'digest']

  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <div>
        <h1
          className="text-xl font-extrabold tracking-tight text-white sm:text-2xl lg:text-3xl"
          style={{ fontFamily: 'Manrope, sans-serif' }}
        >
          Notification Preferences
        </h1>
        <p className="mt-1 text-sm text-[#6B7280]">
          Control how and when you receive alerts.
        </p>
      </div>

      {error && preferences && (
        <div className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
          {error}
        </div>
      )}

      {/* Summary */}
      <div className="grid grid-cols-2 gap-3 sm:gap-4">
        <StatCard
          label="Active Alerts"
          value={`${enabledCount} / ${totalCount}`}
          sub={enabledCount === totalCount ? 'All alerts on' : enabledCount === 0 ? 'All alerts off' : 'Partially enabled'}
        />
        <StatCard
          label="Delivery Channel"
          value="Email"
          sub="Sent to your account email"
        />
      </div>

      {/* Grouped toggle cards */}
      {groups.map((group) => {
        const items = TOGGLE_META.filter((t) => t.group === group)
        if (items.length === 0) return null
        return (
          <div key={group} className="rounded-xl border border-[#222] bg-[#111] p-5 sm:p-6">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-[#6B7280]">
              {GROUP_META[group].title}
            </h2>
            <p className="mt-1 text-xs text-[#4B5563]">{GROUP_META[group].blurb}</p>
            <div className="mt-4 divide-y divide-[#1A1A1A]">
              {preferences &&
                items.map(({ key, label, description }) => {
                  const isOn = preferences[key]
                  return (
                    <div
                      key={key}
                      className="flex items-center justify-between gap-4 py-4 first:pt-0 last:pb-0"
                    >
                      <div className="min-w-0">
                        <p className="text-sm font-medium text-white">{label}</p>
                        <p className="mt-0.5 text-xs leading-relaxed text-[#6B7280]">{description}</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => toggle(key)}
                        aria-pressed={isOn}
                        className={`min-h-[40px] shrink-0 rounded-full px-4 py-1.5 text-xs font-semibold transition-colors ${
                          isOn
                            ? 'bg-white text-black'
                            : 'border border-[#333] bg-transparent text-[#6B7280] hover:border-white hover:text-white'
                        }`}
                      >
                        {isOn ? 'On' : 'Off'}
                      </button>
                    </div>
                  )
                })}
            </div>
          </div>
        )
      })}

      {/* Email card */}
      <div className="rounded-xl border border-[#222] bg-[#111] p-5 sm:p-6">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-[#6B7280]">
          Notification Email
        </h2>
        <p className="mt-3 break-words text-sm text-white">{email}</p>
        <p className="mt-1.5 text-xs text-[#4B5563]">
          This is the email associated with your admin account. To change it, contact the site owner.
        </p>
      </div>
    </div>
  )
}
