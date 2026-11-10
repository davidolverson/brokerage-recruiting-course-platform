'use client'

import { useState, useRef, useEffect, useCallback } from 'react'

interface AudioPlayerProps {
  lessonSlug: string
  lessonTitle: string
}

export function AudioPlayer({ lessonSlug, lessonTitle }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [playing, setPlaying] = useState(false)
  const [loading, setLoading] = useState(false)
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [playbackRate, setPlaybackRate] = useState(1)
  const [hasAudio, setHasAudio] = useState<boolean | null>(null)
  const [useBrowserTTS, setUseBrowserTTS] = useState(false)
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null)

  // Use local path - Vercel rewrites proxy this to R2 CDN, avoiding browser security blocks on r2.dev
  const audioPath = `/audio/lessons/${lessonSlug}.mp3`

  // Check if pre-generated audio exists
  useEffect(() => {
    fetch(audioPath, { method: 'HEAD' })
      .then((res) => {
        if (res.ok) {
          setHasAudio(true)
        } else {
          // Fall back to browser TTS
          setHasAudio(false)
          setUseBrowserTTS('speechSynthesis' in window)
        }
      })
      .catch(() => {
        setHasAudio(false)
        setUseBrowserTTS('speechSynthesis' in window)
      })
  }, [audioPath])

  // Audio file player handlers
  useEffect(() => {
    if (!hasAudio) return
    const audio = new Audio(audioPath)
    audioRef.current = audio
    audio.playbackRate = playbackRate

    audio.addEventListener('loadedmetadata', () => setDuration(audio.duration))
    audio.addEventListener('timeupdate', () => {
      setCurrentTime(audio.currentTime)
      if (audio.duration > 0) setProgress((audio.currentTime / audio.duration) * 100)
    })
    audio.addEventListener('ended', () => { setPlaying(false); setProgress(100) })
    audio.addEventListener('waiting', () => setLoading(true))
    audio.addEventListener('canplay', () => setLoading(false))

    return () => {
      audio.pause()
      audio.src = ''
    }
  }, [audioPath, hasAudio, playbackRate])

  // Sync playback rate
  useEffect(() => {
    if (audioRef.current) audioRef.current.playbackRate = playbackRate
  }, [playbackRate])

  const togglePlay = useCallback(() => {
    if (hasAudio && audioRef.current) {
      if (playing) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setPlaying(!playing)
    } else if (useBrowserTTS) {
      if (playing) {
        speechSynthesis.cancel()
        setPlaying(false)
      } else {
        // Get lesson text content from the article element
        const article = document.querySelector('article')
        if (!article) return
        const text = article.innerText
        const utterance = new SpeechSynthesisUtterance(text)
        utterance.rate = playbackRate
        utterance.onend = () => setPlaying(false)
        utteranceRef.current = utterance
        speechSynthesis.speak(utterance)
        setPlaying(true)
      }
    }
  }, [hasAudio, playing, useBrowserTTS, playbackRate])

  const handleSeek = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!audioRef.current || !hasAudio) return
    const rect = e.currentTarget.getBoundingClientRect()
    const pct = (e.clientX - rect.left) / rect.width
    audioRef.current.currentTime = pct * audioRef.current.duration
  }, [hasAudio])

  const skipForward = useCallback(() => {
    if (audioRef.current && hasAudio) {
      audioRef.current.currentTime = Math.min(audioRef.current.currentTime + 15, audioRef.current.duration)
    }
  }, [hasAudio])

  const skipBack = useCallback(() => {
    if (audioRef.current && hasAudio) {
      audioRef.current.currentTime = Math.max(audioRef.current.currentTime - 15, 0)
    }
  }, [hasAudio])

  const cycleSpeed = useCallback(() => {
    const speeds = [0.75, 1, 1.25, 1.5, 1.75, 2]
    const idx = speeds.indexOf(playbackRate)
    setPlaybackRate(speeds[(idx + 1) % speeds.length])
  }, [playbackRate])

  function formatTime(s: number): string {
    const m = Math.floor(s / 60)
    const sec = Math.floor(s % 60)
    return `${m}:${String(sec).padStart(2, '0')}`
  }

  // Don't render if no audio capability at all
  if (hasAudio === null) return null
  if (!hasAudio && !useBrowserTTS) return null

  return (
    <div className="mb-6 rounded-xl border border-gray-200 bg-gray-50 p-4">
      <div className="flex items-center gap-3">
        {/* Play/Pause */}
        <button
          onClick={togglePlay}
          disabled={loading}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-black text-white transition hover:bg-gray-800 disabled:opacity-50"
          aria-label={playing ? 'Pause' : 'Listen to lesson'}
        >
          {loading ? (
            <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
          ) : playing ? (
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
            </svg>
          ) : (
            <svg className="h-4 w-4 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>

        <div className="flex-1">
          <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
            <span className="font-medium text-gray-700">
              {hasAudio ? 'Listen to this lesson' : 'Read aloud (browser voice)'}
            </span>
            <div className="flex items-center gap-2">
              {hasAudio && (
                <>
                  <button onClick={skipBack} className="hover:text-gray-900 transition" aria-label="Back 15s">
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0019 16V8a1 1 0 00-1.6-.8l-5.333 4zM4.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0011 16V8a1 1 0 00-1.6-.8l-5.334 4z" />
                    </svg>
                  </button>
                  <button onClick={skipForward} className="hover:text-gray-900 transition" aria-label="Forward 15s">
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11.933 12.8a1 1 0 000-1.6L6.6 7.2A1 1 0 005 8v8a1 1 0 001.6.8l5.333-4zM19.933 12.8a1 1 0 000-1.6l-5.333-4A1 1 0 0013 8v8a1 1 0 001.6.8l5.333-4z" />
                    </svg>
                  </button>
                </>
              )}
              <button
                onClick={cycleSpeed}
                className="rounded bg-gray-200 px-1.5 py-0.5 text-[10px] font-bold tabular-nums hover:bg-gray-300 transition"
              >
                {playbackRate}x
              </button>
            </div>
          </div>

          {/* Progress bar */}
          {hasAudio ? (
            <div
              className="group relative h-1.5 w-full cursor-pointer rounded-full bg-gray-200"
              onClick={handleSeek}
            >
              <div
                className="absolute left-0 top-0 h-1.5 rounded-full bg-[#EA580C] transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>
          ) : (
            <div className="h-1.5 w-full rounded-full bg-gray-200">
              {playing && (
                <div className="h-1.5 animate-pulse rounded-full bg-[#EA580C]" style={{ width: '100%', opacity: 0.5 }} />
              )}
            </div>
          )}

          {hasAudio && duration > 0 && (
            <div className="mt-1 flex justify-between text-[10px] tabular-nums text-gray-400">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
