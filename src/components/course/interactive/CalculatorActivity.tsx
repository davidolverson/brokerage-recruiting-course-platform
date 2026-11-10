'use client'

import { useState } from 'react'
import { getCalculatorContent, type CalculatorDef } from '@/lib/data/interactive-content'

interface Props {
  prompt: string
}

interface InnerProps {
  def: CalculatorDef
}

function CalculatorInner({ def }: InnerProps) {
  const [inputs, setInputs] = useState<Record<string, string>>({})
  const [result, setResult] = useState<{ result: string; steps: string[] } | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [usedExample, setUsedExample] = useState(false)

  function handleChange(id: string, value: string) {
    setInputs((prev) => ({ ...prev, [id]: value }))
    setResult(null)
    setError(null)
    setUsedExample(false)
  }

  function loadExample() {
    const exampleInputs: Record<string, string> = {}
    for (const [k, v] of Object.entries(def.example)) {
      exampleInputs[k] = String(v)
    }
    setInputs(exampleInputs)
    setResult(null)
    setError(null)
    setUsedExample(true)
  }

  function calculate() {
    const numericInputs: Record<string, number> = {}
    for (const field of def.fields) {
      const raw = inputs[field.id] ?? ''
      const parsed = parseFloat(raw.replace(/,/g, ''))
      if (isNaN(parsed)) {
        setError(`Please enter a valid number for "${field.label}".`)
        setResult(null)
        return
      }
      numericInputs[field.id] = parsed
    }
    setError(null)
    try {
      const res = def.formula(numericInputs)
      setResult(res)
    } catch {
      setError('Could not calculate. Please check your inputs.')
    }
  }

  function reset() {
    setInputs({})
    setResult(null)
    setError(null)
    setUsedExample(false)
  }

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5">
      {/* Header */}
      <div className="mb-4">
        <h4 className="mb-1 text-base font-bold text-gray-900" style={{ fontFamily: 'Manrope, sans-serif' }}>
          {def.title}
        </h4>
        <p className="text-sm text-gray-500" style={{ fontFamily: 'Roboto, sans-serif' }}>
          {def.description}
        </p>
      </div>

      {/* Input fields */}
      <div className="mb-4 space-y-3">
        {def.fields.map((field) => (
          <div key={field.id}>
            <label
              htmlFor={field.id}
              className="mb-1 block text-xs font-semibold text-gray-700"
            >
              {field.unit === '$' ? `${field.label} ($)` : field.label}
            </label>
            <div className="flex">
              {field.unit === '$' && (
                <span className="flex items-center rounded-l-lg border border-r-0 border-gray-200 bg-gray-50 px-3 text-sm text-gray-500">
                  $
                </span>
              )}
              <input
                id={field.id}
                type="text"
                inputMode="decimal"
                value={inputs[field.id] ?? ''}
                onChange={(e) => handleChange(field.id, e.target.value)}
                placeholder={field.placeholder}
                className={`w-full border border-gray-200 px-3 py-2 text-sm text-gray-900 transition focus:border-[#EA580C] focus:outline-none focus:ring-1 focus:ring-[#EA580C] ${field.unit === '$' ? 'rounded-r-lg' : 'rounded-lg'}`}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Error */}
      {error && (
        <p className="mb-3 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-xs font-medium text-red-700" role="alert">
          {error}
        </p>
      )}

      {/* Action buttons */}
      <div className="mb-4 flex flex-wrap gap-2">
        <button
          onClick={calculate}
          className="rounded-lg bg-[#EA580C] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#e0740f] active:scale-95"
        >
          Calculate
        </button>
        <button
          onClick={loadExample}
          className="rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-600 transition hover:bg-gray-50 active:scale-95"
        >
          Load Example
        </button>
        {(result !== null || Object.keys(inputs).length > 0) && (
          <button
            onClick={reset}
            className="rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-500 transition hover:bg-gray-50 active:scale-95"
          >
            Clear
          </button>
        )}
      </div>

      {/* Results */}
      {result !== null && (
        <div className="space-y-3" role="region" aria-live="polite" aria-label="Calculation result">
          {/* Main result */}
          <div className="rounded-lg border border-[#EA580C]/30 bg-[#EA580C]/5 px-4 py-3">
            <p className="mb-0.5 text-xs font-semibold uppercase tracking-wider text-[#EA580C]">
              {usedExample ? 'Example Result' : 'Result'}
            </p>
            <p className="text-base font-bold text-gray-900" style={{ fontFamily: 'Manrope, sans-serif' }}>
              {result.result}
            </p>
          </div>

          {/* Steps */}
          <div className="rounded-lg border border-gray-200 bg-gray-50 px-4 py-4">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-500">
              How It Was Calculated
            </p>
            <ol className="space-y-1.5">
              {result.steps.map((step, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-gray-200 text-xs font-bold text-gray-500">
                    {i + 1}
                  </span>
                  <span style={{ fontFamily: 'Roboto, sans-serif' }}>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      )}
    </div>
  )
}

export default function CalculatorActivity({ prompt }: Props) {
  const def = getCalculatorContent(prompt)

  if (!def) {
    return (
      <div className="rounded-xl border border-gray-200 bg-white p-5">
        <p className="text-sm text-gray-500">Calculator content for this topic is coming soon.</p>
      </div>
    )
  }

  return <CalculatorInner def={def} />
}
