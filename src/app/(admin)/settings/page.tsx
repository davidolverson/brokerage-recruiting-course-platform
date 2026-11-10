'use client'

import { useState, useEffect } from 'react'
import { teams } from '@/lib/data/teams'
import LoadingState from '@/components/admin/LoadingState'
import { adminFetch } from '@/lib/admin-fetch'

interface BranchSettings {
  branch_name: string | null
  contact_email: string | null
  contact_phone: string | null
  scheduler_url: string | null
  default_team: string | null
}

function formatUpdated(dateStr: string | null): string {
  if (!dateStr) return 'Never saved'
  return `Last saved ${new Date(dateStr).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })}`
}

export default function SettingsPage() {
  const [form, setForm] = useState<BranchSettings>({
    branch_name: '',
    contact_email: '',
    contact_phone: '',
    scheduler_url: '',
    default_team: '',
  })
  const [updatedAt, setUpdatedAt] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  useEffect(() => {
    adminFetch('/api/admin/settings')
      .then((res) => {
        if (res.status === 403) throw new Error('Owner access only')
        if (!res.ok) throw new Error('Failed to load settings')
        return res.json()
      })
      .then((data) => {
        setForm({
          branch_name: data.branch_name ?? '',
          contact_email: data.contact_email ?? '',
          contact_phone: data.contact_phone ?? '',
          scheduler_url: data.scheduler_url ?? '',
          default_team: data.default_team ?? '',
        })
        setUpdatedAt(data.updated_at ?? null)
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  async function handleSave() {
    setSaving(true)
    setError('')
    setSuccess('')

    try {
      const res = await adminFetch('/api/admin/settings', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          branch_name: form.branch_name || null,
          contact_email: form.contact_email || null,
          contact_phone: form.contact_phone || null,
          scheduler_url: form.scheduler_url || null,
          default_team: form.default_team || null,
        }),
      })

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || 'Failed to save settings')
      }

      const data = await res.json()
      setForm({
        branch_name: data.branch_name ?? '',
        contact_email: data.contact_email ?? '',
        contact_phone: data.contact_phone ?? '',
        scheduler_url: data.scheduler_url ?? '',
        default_team: data.default_team ?? '',
      })
      setUpdatedAt(data.updated_at ?? null)
      setSuccess('Settings saved successfully')
      setTimeout(() => setSuccess(''), 3000)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Save failed')
    } finally {
      setSaving(false)
    }
  }

  if (error && loading) {
    return (
      <div className="rounded-xl border border-[#222] bg-[#111] p-8 text-center">
        <p className="text-sm text-red-400">{error}</p>
      </div>
    )
  }

  if (loading) {
    return <LoadingState message="Loading settings..." />
  }

  const inputClass =
    'min-h-[44px] w-full rounded-lg border border-[#333] bg-[#0A0A0A] px-3.5 py-2.5 text-sm text-white placeholder:text-[#4B5563] outline-none transition-colors focus:border-white'

  return (
    <div className="mx-auto max-w-2xl">
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1
            className="text-xl font-extrabold tracking-tight text-white sm:text-2xl lg:text-3xl"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            Branch Settings
          </h1>
          <p className="mt-1 text-sm text-[#6B7280]">
            Branch-wide defaults used across the site. Owner access only.
          </p>
        </div>
        <p className="text-xs text-[#4B5563]">{formatUpdated(updatedAt)}</p>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault()
          handleSave()
        }}
        className="space-y-6"
      >
        {/* Identity section */}
        <section className="rounded-xl border border-[#222] bg-[#111] p-5 sm:p-6">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-[#6B7280]">
            Branch Identity
          </h2>
          <p className="mt-1 text-xs text-[#4B5563]">
            How the branch is named across the public site and admin emails.
          </p>
          <div className="mt-5">
            <FieldGroup label="Branch Name" hint="Displayed in the header, footer, and outbound emails.">
              <input
                type="text"
                value={form.branch_name ?? ''}
                onChange={(e) => setForm({ ...form, branch_name: e.target.value })}
                placeholder="Acme Realty"
                className={inputClass}
              />
            </FieldGroup>
          </div>
        </section>

        {/* Contact section */}
        <section className="rounded-xl border border-[#222] bg-[#111] p-5 sm:p-6">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-[#6B7280]">
            Public Contact
          </h2>
          <p className="mt-1 text-xs text-[#4B5563]">
            Where leads and visitors reach the branch. Shown on contact pages.
          </p>
          <div className="mt-5 space-y-5">
            <FieldGroup label="Contact Email" hint="Receives general inquiries from the public site.">
              <input
                type="email"
                value={form.contact_email ?? ''}
                onChange={(e) => setForm({ ...form, contact_email: e.target.value })}
                placeholder="info@example.com"
                className={inputClass}
              />
            </FieldGroup>
            <FieldGroup label="Contact Phone" hint="Digits, spaces, dashes, or parentheses.">
              <input
                type="tel"
                value={form.contact_phone ?? ''}
                onChange={(e) => setForm({ ...form, contact_phone: e.target.value })}
                placeholder="(555) 010-0100"
                className={inputClass}
              />
            </FieldGroup>
            <FieldGroup label="Scheduler URL" hint="Must start with https:// — used for the “Book a call” link.">
              <input
                type="url"
                value={form.scheduler_url ?? ''}
                onChange={(e) => setForm({ ...form, scheduler_url: e.target.value })}
                placeholder="https://example.com/schedule"
                className={inputClass}
              />
            </FieldGroup>
          </div>
        </section>

        {/* Lead routing section */}
        <section className="rounded-xl border border-[#222] bg-[#111] p-5 sm:p-6">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-[#6B7280]">
            Lead Routing
          </h2>
          <p className="mt-1 text-xs text-[#4B5563]">
            Controls how incoming leads are assigned by default.
          </p>
          <div className="mt-5">
            <FieldGroup
              label="Default Assigned Team"
              hint="New leads without an explicit team are routed here."
            >
              <select
                value={form.default_team ?? ''}
                onChange={(e) => setForm({ ...form, default_team: e.target.value })}
                className={inputClass}
              >
                <option value="">None (unassigned)</option>
                {teams.map((team) => (
                  <option key={team.slug} value={team.slug}>
                    {team.name}
                  </option>
                ))}
              </select>
            </FieldGroup>
          </div>
        </section>

        {/* Status Messages */}
        {error && !loading && (
          <div className="rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400">
            {error}
          </div>
        )}
        {success && (
          <div className="rounded-lg border border-green-500/20 bg-green-500/10 px-4 py-3 text-sm text-green-400">
            {success}
          </div>
        )}

        {/* Save Button */}
        <div className="flex sm:justify-end">
          <button
            type="submit"
            disabled={saving}
            className="w-full rounded-lg bg-white px-6 py-3 text-sm font-semibold text-black transition-opacity hover:opacity-90 disabled:opacity-50 sm:w-auto"
          >
            {saving ? 'Saving...' : 'Save Settings'}
          </button>
        </div>
      </form>
    </div>
  )
}

function FieldGroup({
  label,
  hint,
  children,
}: {
  label: string
  hint?: string
  children: React.ReactNode
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-[#9CA3AF]">{label}</label>
      {children}
      {hint && <p className="mt-1.5 text-xs text-[#4B5563]">{hint}</p>}
    </div>
  )
}
