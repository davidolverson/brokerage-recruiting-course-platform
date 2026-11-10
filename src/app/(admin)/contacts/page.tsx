'use client'

import { useCallback, useEffect, useState } from 'react'
import Link from 'next/link'
import type { Contact } from '@/lib/db/contacts'
import LoadingState from '@/components/admin/LoadingState'
import EmptyState from '@/components/admin/EmptyState'
import { adminFetch } from '@/lib/admin-fetch'

const inputCls = 'w-full rounded-lg border border-[#222] bg-[#111] px-3 py-2 text-sm text-white placeholder-[#4B5563] outline-none focus:border-[#444]'
const labelCls = 'mb-1 block text-xs font-semibold uppercase tracking-wide text-[#6B7280]'

export default function ContactsPage() {
  const [contacts, setContacts] = useState<Contact[]>([])
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(true)
  const [q, setQ] = useState('')
  const [source, setSource] = useState('')
  const [tag, setTag] = useState('')
  const [page, setPage] = useState(1)
  const [error, setError] = useState<string | null>(null)
  const perPage = 25

  const fetchContacts = useCallback(async () => {
    setLoading(true)
    setError(null)
    const params = new URLSearchParams()
    if (q) params.set('q', q)
    if (source) params.set('source', source)
    if (tag) params.set('tag', tag)
    params.set('page', String(page))
    params.set('per_page', String(perPage))
    try {
      const res = await adminFetch(`/api/admin/contacts?${params}`)
      const data = await res.json()
      if (!res.ok) {
        setError(data.error || 'Failed to load contacts')
        return
      }
      setContacts(data.contacts ?? [])
      setTotal(data.total ?? 0)
    } finally {
      setLoading(false)
    }
  }, [q, source, tag, page])

  useEffect(() => {
    const timer = setTimeout(fetchContacts, q ? 300 : 0)
    return () => clearTimeout(timer)
  }, [fetchContacts, q])

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white" style={{ fontFamily: 'Manrope, sans-serif' }}>Contacts</h1>
          <p className="mt-1 text-sm text-[#6B7280]">Everyone captured on the site, plus imports. {total} total.</p>
        </div>
        <Link href="/contacts/import" className="rounded-lg border border-[#333] px-4 py-2 text-sm font-medium text-white transition-colors hover:border-white">
          Import CSV
        </Link>
      </div>

      {error && <p className="mb-4 text-sm text-red-400">{error}</p>}

      <div className="mb-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
        <div>
          <label className={labelCls}>Search</label>
          <input className={inputCls} value={q} onChange={(e) => { setPage(1); setQ(e.target.value) }} placeholder="Name or email" />
        </div>
        <div>
          <label className={labelCls}>Source</label>
          <input className={inputCls} value={source} onChange={(e) => { setPage(1); setSource(e.target.value) }} placeholder="e.g. training_subscriber" />
        </div>
        <div>
          <label className={labelCls}>Tag</label>
          <input className={inputCls} value={tag} onChange={(e) => { setPage(1); setTag(e.target.value) }} placeholder="e.g. csv:spring-list" />
        </div>
      </div>

      {loading ? (
        <LoadingState message="Loading contacts..." />
      ) : contacts.length === 0 ? (
        <EmptyState title="No contacts found" description="Try clearing your filters, or import a CSV." action={{ label: 'Import CSV', href: '/contacts/import' }} />
      ) : (
        <div className="overflow-hidden rounded-xl border border-[#222]">
          <table className="w-full text-left text-sm">
            <thead className="bg-[#111] text-[#6B7280]">
              <tr>
                <th className="px-4 py-3 font-medium">Name</th>
                <th className="px-4 py-3 font-medium">Email</th>
                <th className="px-4 py-3 font-medium">Sources</th>
                <th className="px-4 py-3 font-medium">Tags</th>
                <th className="px-4 py-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((c) => (
                <tr key={c.id} className="border-t border-[#1A1A1A]">
                  <td className="px-4 py-3 text-white">{[c.first_name, c.last_name].filter(Boolean).join(' ') || '—'}</td>
                  <td className="px-4 py-3 text-[#9CA3AF]">{c.email}</td>
                  <td className="px-4 py-3 text-[#6B7280]">{c.sources.join(', ') || '—'}</td>
                  <td className="px-4 py-3 text-[#6B7280]">{c.tags.join(', ') || '—'}</td>
                  <td className="px-4 py-3">
                    {c.unsubscribed
                      ? <span className="rounded-full bg-[#333] px-2.5 py-0.5 text-xs font-semibold text-[#6B7280]">Unsubscribed</span>
                      : <span className="rounded-full border border-[#444] px-2.5 py-0.5 text-xs font-semibold text-[#9CA3AF]">Subscribed</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {total > perPage && (
        <div className="mt-4 flex items-center justify-between text-sm text-[#6B7280]">
          <button disabled={page === 1} onClick={() => setPage((p) => p - 1)} className="rounded-lg border border-[#333] px-3 py-1.5 disabled:opacity-40">Previous</button>
          <span>Page {page} of {Math.ceil(total / perPage)}</span>
          <button disabled={page * perPage >= total} onClick={() => setPage((p) => p + 1)} className="rounded-lg border border-[#333] px-3 py-1.5 disabled:opacity-40">Next</button>
        </div>
      )}
    </div>
  )
}
