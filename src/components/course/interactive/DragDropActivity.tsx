'use client'

import { useState, useRef } from 'react'
import { getDragDropContent } from '@/lib/data/interactive-content'

interface Props {
  prompt: string
}

interface ItemState {
  id: number
  label: string
  correctZone: string
  currentZone: string | null
  checked: boolean
  isCorrect: boolean | null
}

export default function DragDropActivity({ prompt }: Props) {
  const content = getDragDropContent(prompt)

  const [initialized, setInitialized] = useState(false)
  const [items, setItems] = useState<ItemState[]>([])
  const [zones, setZones] = useState<string[]>([])
  const [dragId, setDragId] = useState<number | null>(null)
  const [dragOver, setDragOver] = useState<string | null>(null)
  const [checked, setChecked] = useState(false)
  const [score, setScore] = useState<number | null>(null)
  const dragItem = useRef<number | null>(null)

  if (!initialized && content) {
    const itemStates: ItemState[] = content.items.map((pair, i) => ({
      id: i,
      label: pair.item,
      correctZone: pair.zone,
      currentZone: null,
      checked: false,
      isCorrect: null,
    }))
    setItems(itemStates)
    setZones(content.zones)
    setInitialized(true)
  }

  if (!content) {
    return (
      <div className="rounded-xl border border-gray-200 bg-white p-5">
        <p className="text-sm text-gray-500">Drag-and-drop content for this topic is coming soon.</p>
      </div>
    )
  }

  function handleDragStart(id: number) {
    dragItem.current = id
    setDragId(id)
  }

  function handleDragEnd() {
    dragItem.current = null
    setDragId(null)
    setDragOver(null)
  }

  function handleDrop(zoneName: string) {
    if (dragItem.current === null) return
    const id = dragItem.current
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, currentZone: zoneName } : item
      )
    )
    setDragId(null)
    setDragOver(null)
  }

  function removeFromZone(id: number) {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, currentZone: null, isCorrect: null } : item))
    )
  }

  function checkAnswers() {
    let correct = 0
    const updated = items.map((item) => {
      const isCorrect = item.currentZone === item.correctZone
      if (isCorrect) correct++
      return { ...item, isCorrect }
    })
    setItems(updated)
    setScore(correct)
    setChecked(true)
  }

  function reset() {
    setItems((prev) => prev.map((item) => ({ ...item, currentZone: null, isCorrect: null })))
    setChecked(false)
    setScore(null)
  }

  const unplacedItems = items.filter((item) => item.currentZone === null)
  const allPlaced = unplacedItems.length === 0

  return (
    <div className="space-y-4">
      {/* Instructions */}
      <p className="text-sm text-gray-500" style={{ fontFamily: 'Roboto, sans-serif' }}>
        {content.instruction}
      </p>

      {/* Score banner */}
      {checked && score !== null && (
        <div
          className={`rounded-lg border px-4 py-3 text-sm font-semibold ${
            score === items.length
              ? 'border-green-200 bg-green-50 text-green-800'
              : score >= items.length * 0.7
              ? 'border-yellow-200 bg-yellow-50 text-yellow-800'
              : 'border-red-200 bg-red-50 text-red-800'
          }`}
          role="alert"
          aria-live="polite"
        >
          {score === items.length
            ? `All ${items.length} correct! Excellent work.`
            : `${score} of ${items.length} correct. Review the highlighted items and try again.`}
        </div>
      )}

      {/* Unplaced items bank */}
      {unplacedItems.length > 0 && (
        <div className="rounded-xl border border-dashed border-gray-300 bg-gray-50 p-3">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-400">
            Items to Place
          </p>
          <div className="flex flex-wrap gap-2">
            {unplacedItems.map((item) => (
              <div
                key={item.id}
                draggable
                onDragStart={() => handleDragStart(item.id)}
                onDragEnd={handleDragEnd}
                aria-grabbed={dragId === item.id}
                role="button"
                tabIndex={0}
                aria-label={`Drag item: ${item.label}`}
                className={`cursor-grab select-none rounded-lg border border-gray-200 bg-white px-3 py-2 text-xs font-medium text-gray-800 shadow-sm transition-all active:cursor-grabbing ${
                  dragId === item.id ? 'opacity-50 scale-95' : 'hover:shadow-md hover:-translate-y-0.5'
                }`}
              >
                {item.label}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Drop zones */}
      <div className="grid gap-3 sm:grid-cols-2">
        {zones.map((zone) => {
          const zoneItems = items.filter((item) => item.currentZone === zone)
          const isOver = dragOver === zone
          return (
            <div
              key={zone}
              onDragOver={(e) => {
                e.preventDefault()
                setDragOver(zone)
              }}
              onDragLeave={() => setDragOver(null)}
              onDrop={() => handleDrop(zone)}
              className={`min-h-[100px] rounded-xl border-2 p-3 transition-all duration-150 ${
                isOver
                  ? 'border-[#EA580C] bg-[#EA580C]/5'
                  : 'border-gray-200 bg-white'
              }`}
              aria-label={`Drop zone: ${zone}`}
            >
              <p className="mb-2 text-xs font-bold text-gray-700" style={{ fontFamily: 'Manrope, sans-serif' }}>
                {zone}
              </p>
              <div className="space-y-1.5">
                {zoneItems.map((item) => (
                  <div
                    key={item.id}
                    className={`flex items-start justify-between gap-2 rounded-lg border px-3 py-2 text-xs font-medium transition-colors ${
                      checked
                        ? item.isCorrect
                          ? 'border-green-300 bg-green-50 text-green-800'
                          : 'border-red-300 bg-red-50 text-red-800'
                        : 'border-gray-200 bg-gray-50 text-gray-800'
                    }`}
                  >
                    <span>{item.label}</span>
                    {!checked && (
                      <button
                        onClick={() => removeFromZone(item.id)}
                        aria-label={`Remove ${item.label} from ${zone}`}
                        className="shrink-0 text-gray-400 hover:text-gray-700"
                      >
                        &times;
                      </button>
                    )}
                    {checked && (
                      <span
                        className={`shrink-0 font-bold ${item.isCorrect ? 'text-green-600' : 'text-red-500'}`}
                        aria-hidden="true"
                      >
                        {item.isCorrect ? '✓' : '✗'}
                      </span>
                    )}
                  </div>
                ))}
                {zoneItems.length === 0 && (
                  <p className="text-xs text-gray-300 italic">Drop here</p>
                )}
              </div>
            </div>
          )
        })}
      </div>

      {/* Correct answers revealed after check */}
      {checked && items.some((item) => !item.isCorrect) && (
        <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-500">Correct Answers</p>
          <ul className="space-y-1">
            {items
              .filter((item) => !item.isCorrect)
              .map((item) => (
                <li key={item.id} className="text-xs text-gray-700">
                  <span className="font-medium">{item.label}</span>
                  <span className="text-gray-400"> &rarr; </span>
                  <span className="font-medium text-gray-900">{item.correctZone}</span>
                </li>
              ))}
          </ul>
        </div>
      )}

      {/* Actions */}
      <div className="flex gap-3">
        {!checked ? (
          <button
            onClick={checkAnswers}
            disabled={!allPlaced}
            className="rounded-lg bg-[#EA580C] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#e0740f] disabled:opacity-40 disabled:cursor-not-allowed active:scale-95"
          >
            {allPlaced ? 'Check Answers' : `Place all ${unplacedItems.length} remaining items to check`}
          </button>
        ) : (
          <button
            onClick={reset}
            className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-semibold text-gray-700 transition hover:bg-gray-50 active:scale-95"
          >
            Try Again
          </button>
        )}
      </div>
    </div>
  )
}
