'use client'

import { useState, useRef } from 'react'

interface ModuleVideoIntroProps {
  moduleSlug: string
  moduleTitle: string
}

export function ModuleVideoIntro({ moduleSlug, moduleTitle }: ModuleVideoIntroProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [hasVideo, setHasVideo] = useState(true)
  const [playing, setPlaying] = useState(false)

  const videoPath = `/video/modules/${moduleSlug}-intro.mp4`

  if (!hasVideo) return null

  return (
    <div className="relative mb-8 overflow-hidden rounded-xl border-2 border-gray-900 bg-black">
      <video
        ref={videoRef}
        src={videoPath}
        className="w-full"
        playsInline
        preload="metadata"
        onError={() => setHasVideo(false)}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
      />

      {/* Play overlay */}
      {!playing && (
        <button
          onClick={() => videoRef.current?.play()}
          className="absolute inset-0 flex items-center justify-center bg-black/40 transition hover:bg-black/30"
          aria-label={`Play ${moduleTitle} introduction`}
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#EA580C] text-white shadow-lg">
            <svg className="h-7 w-7 ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </button>
      )}
    </div>
  )
}
