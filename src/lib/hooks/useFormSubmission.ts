'use client'

import { useState, useCallback, useRef } from 'react'

// Shared submission states
export type SubmissionState =
  | 'idle'
  | 'submitting'
  | 'success'
  | 'error_retryable'
  | 'error_terminal'

export interface SubmissionResult {
  id?: number
  errors?: Record<string, string>
}

export interface UseFormSubmissionOptions {
  formType: string
  sourceRoute: string
  sourceSection?: string
  selectedPath?: string
  selectedTeam?: string
  /** Partner or service page attribution tag */
  partnerRef?: string
  onSuccess?: (result: SubmissionResult) => void
  timeoutMs?: number
}

export function useFormSubmission(options: UseFormSubmissionOptions) {
  const [state, setState] = useState<SubmissionState>('idle')
  const [result, setResult] = useState<SubmissionResult | null>(null)
  const [errorMessage, setErrorMessage] = useState<string>('')
  const abortRef = useRef<AbortController | null>(null)

  const submit = useCallback(async (formData: Record<string, unknown>) => {
    // Reset
    setState('submitting')
    setErrorMessage('')
    setResult(null)

    // Build payload with metadata
    const payload = {
      ...formData,
      form_type: options.formType,
      source_route: options.sourceRoute,
      source_section: options.sourceSection || '',
      selected_path: options.selectedPath || '',
      selected_team: options.selectedTeam || '',
      campaign_id: '',
      partner_ref: options.partnerRef || '',
      timestamp: new Date().toISOString(),
    }

    // Abort controller for timeout
    abortRef.current = new AbortController()
    const timeoutId = setTimeout(() => {
      abortRef.current?.abort()
    }, options.timeoutMs || 10000)

    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        signal: abortRef.current.signal,
      })

      clearTimeout(timeoutId)

      if (res.ok) {
        const data = await res.json()
        setResult(data)
        setState('success')
        options.onSuccess?.(data)
        return
      }

      // Handle specific error codes
      if (res.status === 429) {
        setErrorMessage('Too many requests. Please wait a moment and try again.')
        setState('error_retryable')
        return
      }

      if (res.status === 400) {
        const data = await res.json().catch(() => null)
        if (data?.errors) {
          setResult({ errors: data.errors })
          setState('error_terminal')
          return
        }
      }

      // Generic server error
      setErrorMessage('We couldn\'t send this right now. Please try again or contact us directly at (555) 010-0100.')
      setState('error_retryable')
    } catch (err) {
      clearTimeout(timeoutId)

      if (err instanceof DOMException && err.name === 'AbortError') {
        setErrorMessage('The request took too long. Please try again or contact us directly at (555) 010-0100.')
      } else {
        setErrorMessage('We couldn\'t send this right now. Please try again or contact us directly at (555) 010-0100.')
      }
      setState('error_retryable')
    }
  }, [options])

  const retry = useCallback(() => {
    setState('idle')
    setErrorMessage('')
    setResult(null)
  }, [])

  const reset = useCallback(() => {
    setState('idle')
    setErrorMessage('')
    setResult(null)
  }, [])

  return {
    state,
    result,
    errorMessage,
    submit,
    retry,
    reset,
    isSubmitting: state === 'submitting',
    isSuccess: state === 'success',
    isError: state === 'error_retryable' || state === 'error_terminal',
    isRetryable: state === 'error_retryable',
  }
}
