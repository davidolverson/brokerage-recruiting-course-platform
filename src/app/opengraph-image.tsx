import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Acme Realty — Anytown\'s Fastest-Growing Real Estate Branch'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0a0a0a',
          position: 'relative',
        }}
      >
        {/* Teal accent bar top */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 8,
            background: '#0D9488',
          }}
        />

        {/* Logo mark */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 28,
          }}
        >
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 16,
              background: '#0D9488',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span
              style={{
                fontSize: 38,
                fontWeight: 800,
                color: '#ffffff',
                fontFamily: 'system-ui, sans-serif',
                letterSpacing: '-2px',
              }}
            >
              AR
            </span>
          </div>
        </div>

        {/* Main headline */}
        <div
          style={{
            fontSize: 64,
            fontWeight: 800,
            color: '#ffffff',
            textAlign: 'center',
            lineHeight: 1.05,
            letterSpacing: '-2px',
            fontFamily: 'system-ui, sans-serif',
            maxWidth: 900,
            marginBottom: 20,
          }}
        >
          Acme Realty
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 28,
            fontWeight: 500,
            color: '#9CA3AF',
            textAlign: 'center',
            fontFamily: 'system-ui, sans-serif',
            maxWidth: 760,
            lineHeight: 1.4,
            marginBottom: 40,
          }}
        >
          Anytown&apos;s Fastest-Growing Real Estate Branch
        </div>

        {/* Pills row */}
        <div
          style={{
            display: 'flex',
            gap: 16,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {['Join a Team', 'Grow with Growth Network', 'Free VA Course'].map((label) => (
            <div
              key={label}
              style={{
                padding: '10px 24px',
                borderRadius: 999,
                border: '1.5px solid rgba(255,255,255,0.2)',
                background: 'rgba(255,255,255,0.07)',
                color: '#D1D5DB',
                fontSize: 18,
                fontWeight: 600,
                fontFamily: 'system-ui, sans-serif',
              }}
            >
              {label}
            </div>
          ))}
        </div>

        {/* Domain footer */}
        <div
          style={{
            position: 'absolute',
            bottom: 32,
            color: '#4B5563',
            fontSize: 20,
            fontFamily: 'system-ui, sans-serif',
            letterSpacing: '0.05em',
          }}
        >
          example.com
        </div>
      </div>
    ),
    { ...size }
  )
}
