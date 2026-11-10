'use client'

import { useState, useEffect, useMemo } from 'react'
import { teams } from '@/lib/data/teams'
import { StatCard } from '@/components/admin/StatCard'
import EmptyState from '@/components/admin/EmptyState'
import LoadingState from '@/components/admin/LoadingState'
import { adminFetch } from '@/lib/admin-fetch'

interface AdminUser {
  id: string
  email: string
  name: string
  role: string
  team_slug: string | null
  is_active: boolean
  last_login_at: string | null
  created_at: string
}

interface PendingInvite {
  id: string
  email: string
  role: string
  team_slug: string | null
  created_at: string
  expires_at: string
}

const ROLE_LABELS: Record<string, string> = {
  owner: 'Owner',
  team_leader: 'Team Leader',
  staff: 'Staff',
  broker: 'Broker',
  agent: 'Example Investor Team Agent',
}

function timeAgo(dateStr: string | null): string {
  if (!dateStr) return 'Never'
  const diff = Date.now() - new Date(dateStr).getTime()
  const mins = Math.floor(diff / 60000)
  if (mins < 1) return 'Just now'
  if (mins < 60) return `${mins}m ago`
  const hrs = Math.floor(mins / 60)
  if (hrs < 24) return `${hrs}h ago`
  const days = Math.floor(hrs / 24)
  if (days < 30) return `${days}d ago`
  const months = Math.floor(days / 30)
  return `${months}mo ago`
}

function expiresIn(dateStr: string): string {
  const diff = new Date(dateStr).getTime() - Date.now()
  if (diff <= 0) return 'Expired'
  const hrs = Math.floor(diff / 3600000)
  if (hrs < 1) return 'Expires <1h'
  if (hrs < 24) return `Expires in ${hrs}h`
  return `Expires in ${Math.floor(hrs / 24)}d`
}

/** Only roles this account may actually create are ever rendered. */
const INVITE_ROLE_LABELS: Record<string, string> = {
  team_leader: 'Team Leader',
  staff: 'Staff',
  agent: 'Example Investor Team Agent (handbook only)',
  broker: 'Broker (course-only)',
}

function RoleBadge({ role }: { role: string }) {
  return (
    <span
      className={`inline-flex shrink-0 rounded-full px-2.5 py-0.5 text-xs font-semibold ${
        role === 'owner'
          ? 'bg-white text-black'
          : role === 'team_leader'
            ? 'border border-[#444] text-[#9CA3AF]'
            : 'border border-[#2A2A2A] text-[#6B7280]'
      }`}
    >
      {ROLE_LABELS[role] ?? role}
    </span>
  )
}

export default function AdminTeamPage() {
  const [users, setUsers] = useState<AdminUser[]>([])
  const [pendingInvites, setPendingInvites] = useState<PendingInvite[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  // Invite form state
  const [showInvite, setShowInvite] = useState(false)
  const [inviteEmail, setInviteEmail] = useState('')
  const [inviteRole, setInviteRole] = useState('agent')
  const [invitableRoles, setInvitableRoles] = useState<string[]>([])
  const [inviteTeam, setInviteTeam] = useState('')
  const [inviting, setInviting] = useState(false)
  const [inviteResult, setInviteResult] = useState<{ success: boolean; message: string } | null>(null)

  function loadTeam() {
    setLoading(true)
    adminFetch('/api/admin/team')
      .then((res) => {
        if (res.status === 403) throw new Error('Owner access only')
        if (!res.ok) throw new Error('Failed to load team')
        return res.json()
      })
      .then((data) => {
        setUsers(data.users ?? [])
        const allowed: string[] = data.invitableRoles ?? []
        setInvitableRoles(allowed)
        // Never leave the picker on a role this account cannot create.
        if (allowed.length && !allowed.includes(inviteRole)) setInviteRole(allowed[0])
        setPendingInvites(data.pendingInvites ?? [])
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })
  }

  useEffect(loadTeam, [])

  const stats = useMemo(() => {
    const active = users.filter((u) => u.is_active).length
    const leaders = users.filter((u) => u.role === 'team_leader').length
    const staff = users.filter((u) => u.role === 'staff').length
    const recentLogin = users
      .filter((u) => u.last_login_at)
      .sort((a, b) => new Date(b.last_login_at!).getTime() - new Date(a.last_login_at!).getTime())[0]
    return { active, leaders, staff, recentLogin }
  }, [users])

  async function handleToggle(userId: string, currentActive: boolean) {
    const res = await adminFetch('/api/admin/team/toggle', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId, isActive: !currentActive }),
    })
    if (res.ok) {
      setUsers((prev) => prev.map((u) => (u.id === userId ? { ...u, is_active: !currentActive } : u)))
    }
  }

  async function handleInvite(e: React.FormEvent) {
    e.preventDefault()
    setInviting(true)
    setInviteResult(null)

    const res = await adminFetch('/api/admin/team/invite', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: inviteEmail.trim(),
        role: inviteRole,
        team_slug: inviteRole === 'team_leader' ? inviteTeam : null,
      }),
    })

    const data = await res.json()
    setInviting(false)

    if (res.ok) {
      setInviteResult({
        success: true,
        message: data.emailSent
          ? `Invite sent to ${inviteEmail}`
          : `Invite created (email delivery pending — check Resend dashboard)`,
      })
      setInviteEmail('')
      setInviteTeam('')
      loadTeam()
    } else {
      setInviteResult({ success: false, message: data.error ?? 'Failed to create invite' })
    }
  }

  if (loading) {
    return <LoadingState message="Loading team..." />
  }

  if (error) {
    return (
      <div className="rounded-xl border border-[#222] bg-[#111] p-8 text-center">
        <p className="text-sm text-red-400">{error}</p>
        <button
          type="button"
          onClick={loadTeam}
          className="mt-4 rounded-lg border border-[#333] px-4 py-2 text-sm font-medium text-white transition-colors hover:border-white"
        >
          Try again
        </button>
      </div>
    )
  }

  return (
    <div>
      {/* Header */}
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2
            className="text-xl font-extrabold text-white sm:text-2xl lg:text-3xl"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            Team
          </h2>
          <p className="mt-1 text-sm text-[#6B7280]">
            {users.length} member{users.length !== 1 ? 's' : ''}
            {pendingInvites.length > 0 && ` · ${pendingInvites.length} pending invite${pendingInvites.length !== 1 ? 's' : ''}`}
          </p>
        </div>
        <button
          type="button"
          onClick={() => setShowInvite(!showInvite)}
          className={`w-full rounded-lg px-4 py-2.5 text-sm font-bold transition-colors sm:w-auto ${
            showInvite
              ? 'border border-[#333] text-white hover:border-white'
              : 'bg-white text-black hover:bg-[#E5E7EB]'
          }`}
        >
          {showInvite ? 'Cancel' : 'Invite Member'}
        </button>
      </div>

      {/* Stat overview */}
      <div className="mb-6 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        <StatCard label="Total Members" value={users.length} sub={`${stats.active} active`} />
        <StatCard label="Team Leaders" value={stats.leaders} sub={`${stats.staff} staff`} />
        <StatCard
          label="Pending Invites"
          value={pendingInvites.length}
          sub={pendingInvites.length === 0 ? 'All accepted' : 'Awaiting signup'}
        />
        <StatCard
          label="Most Recent Login"
          value={stats.recentLogin ? timeAgo(stats.recentLogin.last_login_at) : 'None'}
          sub={stats.recentLogin ? stats.recentLogin.name : 'No logins yet'}
        />
      </div>

      {/* Invite form */}
      {showInvite && (
        <div className="mb-6 rounded-xl border border-[#222] bg-[#111] p-5 sm:p-6">
          <h3 className="mb-1 text-sm font-bold text-white">New Invite</h3>
          <p className="mb-4 text-xs text-[#6B7280]">
            Invited members receive an email link valid for 72 hours.
          </p>
          <form onSubmit={handleInvite} className="flex flex-col gap-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div>
                <label className="mb-1.5 block text-xs font-medium text-[#9CA3AF]">Email</label>
                <input
                  type="email"
                  value={inviteEmail}
                  onChange={(e) => setInviteEmail(e.target.value)}
                  required
                  className="min-h-[44px] w-full rounded-lg border border-[#333] bg-[#0A0A0A] px-3.5 py-2.5 text-sm text-white placeholder:text-[#4B5563] focus:border-white focus:outline-none"
                  placeholder="team.leader@example.com"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-medium text-[#9CA3AF]">Role</label>
                <select
                  value={inviteRole}
                  onChange={(e) => setInviteRole(e.target.value)}
                  className="min-h-[44px] w-full rounded-lg border border-[#333] bg-[#0A0A0A] px-3.5 py-2.5 text-sm text-white focus:border-white focus:outline-none"
                >
                  {invitableRoles.map((r) => (
                    <option key={r} value={r}>{INVITE_ROLE_LABELS[r] ?? r}</option>
                  ))}
                </select>
              </div>
              {inviteRole === 'team_leader' && (
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-[#9CA3AF]">Team</label>
                  <select
                    value={inviteTeam}
                    onChange={(e) => setInviteTeam(e.target.value)}
                    required
                    className="min-h-[44px] w-full rounded-lg border border-[#333] bg-[#0A0A0A] px-3.5 py-2.5 text-sm text-white focus:border-white focus:outline-none"
                  >
                    <option value="">Select team...</option>
                    {teams.filter((t) => !t.isPlaceholder).map((t) => (
                      <option key={t.slug} value={t.slug}>{t.name}</option>
                    ))}
                  </select>
                </div>
              )}
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <button
                type="submit"
                disabled={inviting}
                className="w-full rounded-lg bg-white px-4 py-2.5 text-sm font-bold text-black transition-colors hover:bg-[#E5E7EB] disabled:opacity-40 sm:w-auto"
              >
                {inviting ? 'Sending...' : 'Send Invite'}
              </button>
              {inviteResult && (
                <p className={`text-sm ${inviteResult.success ? 'text-green-400' : 'text-red-400'}`}>
                  {inviteResult.message}
                </p>
              )}
            </div>
          </form>
        </div>
      )}

      {/* Pending invites */}
      {pendingInvites.length > 0 && (
        <div className="mb-6">
          <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#6B7280]">
            Pending Invites
          </h3>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {pendingInvites.map((inv) => (
              <div
                key={inv.id}
                className="flex items-center justify-between gap-3 rounded-xl border border-[#222] bg-[#111] p-4"
              >
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium text-white">{inv.email}</p>
                  <p className="mt-0.5 text-xs text-[#4B5563]">
                    {inv.team_slug ? `${inv.team_slug} · ` : ''}{expiresIn(inv.expires_at)}
                  </p>
                </div>
                <RoleBadge role={inv.role} />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Members — section label */}
      <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#6B7280]">
        Members
      </h3>

      {users.length === 0 ? (
        <EmptyState title="No team members yet" description="Invite team leaders and staff to get started." />
      ) : (
        <>
          {/* Mobile: stacked cards */}
          <div className="space-y-3 md:hidden">
            {users.map((user) => (
              <div key={user.id} className="rounded-xl border border-[#222] bg-[#111] p-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <p className="truncate font-semibold text-white">{user.name}</p>
                    <p className="mt-0.5 truncate text-sm text-[#9CA3AF]">{user.email}</p>
                  </div>
                  <RoleBadge role={user.role} />
                </div>
                <dl className="mt-3 grid grid-cols-2 gap-x-3 gap-y-2 border-t border-[#1A1A1A] pt-3 text-xs">
                  <div>
                    <dt className="text-[#6B7280]">Team</dt>
                    <dd className="mt-0.5 text-[#9CA3AF]">{user.team_slug ?? '—'}</dd>
                  </div>
                  <div>
                    <dt className="text-[#6B7280]">Last login</dt>
                    <dd className="mt-0.5 text-[#9CA3AF]">{timeAgo(user.last_login_at)}</dd>
                  </div>
                  <div>
                    <dt className="text-[#6B7280]">Status</dt>
                    <dd className={`mt-0.5 font-medium ${user.is_active ? 'text-green-400' : 'text-[#6B7280]'}`}>
                      {user.is_active ? 'Active' : 'Inactive'}
                    </dd>
                  </div>
                </dl>
                {user.role !== 'owner' && (
                  <button
                    type="button"
                    onClick={() => handleToggle(user.id, user.is_active)}
                    className="mt-3 min-h-[44px] w-full rounded-lg border border-[#333] text-sm font-medium text-white transition-colors hover:border-white"
                  >
                    {user.is_active ? 'Deactivate' : 'Activate'}
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Desktop: table */}
          <div className="hidden overflow-x-auto rounded-xl border border-[#222] md:block">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#222] bg-[#111]">
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-widest text-[#6B7280]">Name</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-widest text-[#6B7280]">Email</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-widest text-[#6B7280]">Role</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-widest text-[#6B7280]">Team</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-widest text-[#6B7280]">Status</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-widest text-[#6B7280]">Last Login</th>
                  <th className="px-4 py-3 text-right text-xs font-semibold uppercase tracking-widest text-[#6B7280]">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id} className="border-b border-[#1A1A1A]">
                    <td className="px-4 py-3 font-medium text-white">{user.name}</td>
                    <td className="px-4 py-3 text-[#9CA3AF]">{user.email}</td>
                    <td className="px-4 py-3"><RoleBadge role={user.role} /></td>
                    <td className="px-4 py-3 text-[#9CA3AF]">{user.team_slug ?? '—'}</td>
                    <td className="px-4 py-3">
                      <span className={`text-xs font-medium ${user.is_active ? 'text-green-400' : 'text-[#6B7280]'}`}>
                        {user.is_active ? 'Active' : 'Inactive'}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-xs text-[#4B5563]">{timeAgo(user.last_login_at)}</td>
                    <td className="px-4 py-3 text-right">
                      {user.role !== 'owner' && (
                        <button
                          type="button"
                          onClick={() => handleToggle(user.id, user.is_active)}
                          className="text-xs text-[#6B7280] underline hover:text-white"
                        >
                          {user.is_active ? 'Deactivate' : 'Activate'}
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  )
}
