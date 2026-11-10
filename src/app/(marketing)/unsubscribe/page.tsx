'use client'

import { Suspense, useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'

function UnsubscribeContent() {
  const searchParams = useSearchParams()
  const token = searchParams.get('token') || ''
  const [email, setEmail] = useState<string | null>(null)
  const [status, setStatus] = useState<'loading' | 'ready' | 'done' | 'error'>('loading')

  useEffect(() => {
    if (!token) {
      setStatus('error')
      return
    }
    fetch(`/api/unsubscribe?token=${encodeURIComponent(token)}`)
      .then((r) => r.json())
      .then((data) => {
        if (data.email) {
          setEmail(data.email)
          setStatus(data.unsubscribed ? 'done' : 'ready')
        } else {
          setStatus('error')
        }
      })
      .catch(() => setStatus('error'))
  }, [token])

  async function handleConfirm() {
    try {
      const res = await fetch('/api/unsubscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token }),
      })
      if (!res.ok) {
        setStatus('error')
        return
      }
      setStatus('done')
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="mx-auto flex min-h-[60vh] max-w-md flex-col items-center justify-center px-4 text-center">
      {status === 'loading' && <p className="text-sm text-[#6B7280]">Loading…</p>}
      {status === 'error' && <p className="text-sm text-[#6B7280]">This unsubscribe link isn&apos;t valid.</p>}
      {status === 'ready' && (
        <>
          <h1 className="mb-2 text-xl font-bold text-white" style={{ fontFamily: 'Manrope, sans-serif' }}>Unsubscribe {email}?</h1>
          <p className="mb-6 text-sm text-[#6B7280]">You&apos;ll stop receiving emails from Acme Realty.</p>
          <button onClick={handleConfirm} className="rounded-lg bg-white px-6 py-2.5 text-sm font-semibold text-black">Unsubscribe</button>
        </>
      )}
      {status === 'done' && <p className="text-sm text-white">You&apos;ve been unsubscribed.</p>}
    </div>
  )
}

export default function UnsubscribePage() {
  return (
    <Suspense fallback={<div className="min-h-[60vh]" />}>
      <UnsubscribeContent />
    </Suspense>
  )
}
