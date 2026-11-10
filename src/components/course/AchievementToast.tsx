'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react'
import type { BadgeConfig, Level } from '@/lib/data/gamification-config'
import { BADGE_TIER_COLORS } from '@/lib/data/gamification-config'

// ─── Types ────────────────────────────────────────────────────────────────────

type ToastVariant = 'badge' | 'level_up' | 'xp' | 'challenge'

interface Toast {
  id: string
  variant: ToastVariant
  // badge variant
  badge?: Pick<BadgeConfig, 'name' | 'icon' | 'description' | 'tier'>
  // level_up variant
  level?: Pick<Level, 'level' | 'title' | 'icon' | 'description'>
  // xp variant
  xpAmount?: number
  xpAction?: string
  // challenge variant
  challengeTitle?: string
  challengeXP?: number
}

// ─── Context ──────────────────────────────────────────────────────────────────

interface AchievementToastContextValue {
  showBadgeToast: (badge: Pick<BadgeConfig, 'name' | 'icon' | 'description' | 'tier'>) => void
  showLevelUpToast: (level: Pick<Level, 'level' | 'title' | 'icon' | 'description'>) => void
  showXPToast: (amount: number, action?: string) => void
  showChallengeToast: (title: string, xp: number) => void
}

const AchievementToastContext = createContext<AchievementToastContextValue | null>(null)

export function useAchievementToast() {
  const ctx = useContext(AchievementToastContext)
  if (!ctx) {
    throw new Error('useAchievementToast must be used inside AchievementToastProvider')
  }
  return ctx
}

// ─── Individual Toast ─────────────────────────────────────────────────────────

const AUTO_DISMISS_MS = 4000
const ANIMATE_IN_MS = 350

interface SingleToastProps {
  toast: Toast
  onDismiss: (id: string) => void
}

function SingleToast({ toast, onDismiss }: SingleToastProps) {
  const [visible, setVisible] = useState(false)
  const [exiting, setExiting] = useState(false)

  // Animate in
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 16)
    return () => clearTimeout(t)
  }, [])

  // Auto dismiss
  useEffect(() => {
    const t = setTimeout(() => {
      setExiting(true)
      setTimeout(() => onDismiss(toast.id), ANIMATE_IN_MS)
    }, AUTO_DISMISS_MS)
    return () => clearTimeout(t)
  }, [toast.id, onDismiss])

  function handleDismiss() {
    setExiting(true)
    setTimeout(() => onDismiss(toast.id), ANIMATE_IN_MS)
  }

  const baseClasses = [
    'relative flex items-start gap-3 rounded-xl border px-4 py-3 shadow-2xl backdrop-blur-md',
    'transition-all duration-300 ease-out w-full max-w-xs select-none',
    visible && !exiting
      ? 'opacity-100 translate-x-0'
      : 'opacity-0 translate-x-8',
  ]
    .filter(Boolean)
    .join(' ')

  // ─── Badge Toast ──────────────────────────────────────────────────────────
  if (toast.variant === 'badge' && toast.badge) {
    const tierColor = BADGE_TIER_COLORS[toast.badge.tier]
    return (
      <div
        className={baseClasses}
        style={{ borderColor: `${tierColor}40`, background: `${tierColor}15` }}
        role="status"
        aria-live="polite"
      >
        {/* Icon */}
        <div
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-xl"
          style={{ background: `${tierColor}20`, boxShadow: `0 0 12px ${tierColor}30` }}
          aria-hidden="true"
        >
          {toast.badge.icon}
        </div>

        <div className="flex-1 min-w-0">
          <p
            className="text-xs font-bold uppercase tracking-wider"
            style={{ color: tierColor, fontFamily: 'Manrope, sans-serif' }}
          >
            Badge Unlocked
          </p>
          <p
            className="truncate text-sm font-bold text-white"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            {toast.badge.name}
          </p>
          <p className="text-xs text-white/50 line-clamp-1" style={{ fontFamily: 'Roboto, sans-serif' }}>
            {toast.badge.description}
          </p>
        </div>

        <DismissButton onDismiss={handleDismiss} />
        <ProgressTimer color={tierColor} />
      </div>
    )
  }

  // ─── Level Up Toast ───────────────────────────────────────────────────────
  if (toast.variant === 'level_up' && toast.level) {
    return (
      <div
        className={[baseClasses, 'border-[#EA580C]/40 bg-[#EA580C]/10'].join(' ')}
        role="status"
        aria-live="assertive"
      >
        <div
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#EA580C]/20 text-xl ring-2 ring-[#EA580C]/40"
          aria-hidden="true"
        >
          {toast.level.icon}
        </div>

        <div className="flex-1 min-w-0">
          <p
            className="text-xs font-bold uppercase tracking-wider text-[#EA580C]"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            Level Up! — Level {toast.level.level}
          </p>
          <p
            className="truncate text-sm font-bold text-white"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            {toast.level.title}
          </p>
          <p className="text-xs text-white/50 line-clamp-1" style={{ fontFamily: 'Roboto, sans-serif' }}>
            {toast.level.description}
          </p>
        </div>

        <DismissButton onDismiss={handleDismiss} />
        <ProgressTimer color="#EA580C" />
      </div>
    )
  }

  // ─── XP Toast ─────────────────────────────────────────────────────────────
  if (toast.variant === 'xp' && toast.xpAmount !== undefined) {
    return (
      <div
        className={[baseClasses, 'border-white/10 bg-white/5'].join(' ')}
        role="status"
        aria-live="polite"
      >
        <div
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1E40AF]/20 text-base font-black text-[#1E40AF]"
          aria-hidden="true"
        >
          XP
        </div>

        <div className="flex-1 min-w-0">
          <p
            className="text-xs font-bold uppercase tracking-wider text-[#1E40AF]"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            XP Earned
          </p>
          <p
            className="text-sm font-black text-white"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            +{toast.xpAmount.toLocaleString()} XP
          </p>
          {toast.xpAction && (
            <p className="text-xs text-white/40" style={{ fontFamily: 'Roboto, sans-serif' }}>
              {toast.xpAction}
            </p>
          )}
        </div>

        <DismissButton onDismiss={handleDismiss} />
        <ProgressTimer color="#1E40AF" />
      </div>
    )
  }

  // ─── Challenge Toast ──────────────────────────────────────────────────────
  if (toast.variant === 'challenge' && toast.challengeTitle) {
    return (
      <div
        className={[baseClasses, 'border-green-500/30 bg-green-500/10'].join(' ')}
        role="status"
        aria-live="polite"
      >
        <div
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-500/20 text-xl"
          aria-hidden="true"
        >
          ✅
        </div>

        <div className="flex-1 min-w-0">
          <p
            className="text-xs font-bold uppercase tracking-wider text-green-400"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            Challenge Complete
          </p>
          <p
            className="truncate text-sm font-bold text-white"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            {toast.challengeTitle}
          </p>
          {toast.challengeXP !== undefined && (
            <p className="text-xs text-green-400/70" style={{ fontFamily: 'Roboto, sans-serif' }}>
              +{toast.challengeXP} bonus XP
            </p>
          )}
        </div>

        <DismissButton onDismiss={handleDismiss} />
        <ProgressTimer color="#22c55e" />
      </div>
    )
  }

  return null
}

function DismissButton({ onDismiss }: { onDismiss: () => void }) {
  return (
    <button
      type="button"
      onClick={onDismiss}
      className="shrink-0 rounded p-0.5 text-white/30 transition hover:text-white/70 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/40"
      aria-label="Dismiss notification"
    >
      <svg viewBox="0 0 12 12" fill="none" className="h-3 w-3" aria-hidden="true">
        <path
          d="M2 2l8 8M10 2L2 10"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </button>
  )
}

function ProgressTimer({ color }: { color: string }) {
  return (
    <div
      className="absolute bottom-0 left-0 h-0.5 w-full overflow-hidden rounded-b-xl"
      aria-hidden="true"
    >
      <div
        className="h-full origin-left rounded-b-xl"
        style={{
          background: color,
          animation: `xp-toast-shrink ${AUTO_DISMISS_MS}ms linear forwards`,
        }}
      />
      <style>{`
        @keyframes xp-toast-shrink {
          from { transform: scaleX(1); }
          to   { transform: scaleX(0); }
        }
      `}</style>
    </div>
  )
}

// ─── Provider ─────────────────────────────────────────────────────────────────

interface AchievementToastProviderProps {
  children: React.ReactNode
  soundEnabled?: boolean
}

export function AchievementToastProvider({
  children,
  soundEnabled = false,
}: AchievementToastProviderProps) {
  const [toasts, setToasts] = useState<Toast[]>([])
  const isSoundEnabled = useRef(soundEnabled)

  useEffect(() => {
    isSoundEnabled.current = soundEnabled
  }, [soundEnabled])

  function addToast(toast: Omit<Toast, 'id'>) {
    const id = `toast-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`
    setToasts((prev) => {
      // Cap at 4 visible toasts — drop oldest
      const trimmed = prev.length >= 4 ? prev.slice(1) : prev
      return [...trimmed, { ...toast, id }]
    })
  }

  const showBadgeToast = useCallback(
    (badge: Pick<BadgeConfig, 'name' | 'icon' | 'description' | 'tier'>) => {
      addToast({ variant: 'badge', badge })
    },
    [],
  )

  const showLevelUpToast = useCallback(
    (level: Pick<Level, 'level' | 'title' | 'icon' | 'description'>) => {
      addToast({ variant: 'level_up', level })
    },
    [],
  )

  const showXPToast = useCallback((amount: number, action?: string) => {
    addToast({ variant: 'xp', xpAmount: amount, xpAction: action })
  }, [])

  const showChallengeToast = useCallback((title: string, xp: number) => {
    addToast({ variant: 'challenge', challengeTitle: title, challengeXP: xp })
  }, [])

  const dismissToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id))
  }, [])

  return (
    <AchievementToastContext.Provider
      value={{ showBadgeToast, showLevelUpToast, showXPToast, showChallengeToast }}
    >
      {children}

      {/* Toast stack — fixed bottom-right */}
      <div
        className="fixed bottom-4 right-4 z-[9999] flex flex-col-reverse gap-2 pointer-events-none"
        aria-label="Achievement notifications"
        role="region"
      >
        {toasts.map((toast) => (
          <div key={toast.id} className="pointer-events-auto">
            <SingleToast toast={toast} onDismiss={dismissToast} />
          </div>
        ))}
      </div>
    </AchievementToastContext.Provider>
  )
}
