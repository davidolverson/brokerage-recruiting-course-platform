import type { NextConfig } from 'next'

// Content-Security-Policy. Allowlist: GA + GTM, Google (reCAPTCHA / maps
// embed), Cloudflare Web Analytics, and the optional public media CDN that
// serves course audio (AUDIO_CDN_URL).
//
// AUDIO_CDN_URL is read at build time, e.g. a public Cloudflare R2 bucket URL
// such as https://pub-<id>.r2.dev. When it is unset, lesson audio is served
// from /public/audio/lessons and no rewrite is added.
const AUDIO_CDN_URL = (process.env.AUDIO_CDN_URL ?? '').replace(/\/$/, '')

const CSP = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://www.google.com https://www.gstatic.com https://static.cloudflareinsights.com",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' https://fonts.gstatic.com data:",
  "img-src 'self' data: blob: https:",
  // cloudflareinsights.com here too: loading the beacon is only half of it,
  // the beacon then POSTs its sample to /cdn-cgi/rum on that host. Allowing
  // the script without the connection would have swapped a visible script
  // error for a silent one that still reports no data.
  `connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://www.googletagmanager.com https://vitals.vercel-insights.com${AUDIO_CDN_URL ? ' ' + AUDIO_CDN_URL : ''} https://cloudflareinsights.com https://static.cloudflareinsights.com`,
  "frame-src https://www.google.com",
  "worker-src 'self' blob:",
  `media-src 'self'${AUDIO_CDN_URL ? ' ' + AUDIO_CDN_URL : ''}`,
].join('; ')

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
          { key: 'Content-Security-Policy', value: CSP },
        ],
      },
      {
        // Cache marketing imagery aggressively at the edge and in browsers.
        source: '/images/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=86400, s-maxage=86400, stale-while-revalidate=3600' },
        ],
      },
    ]
  },
  async rewrites() {
    if (!AUDIO_CDN_URL) return []
    return [
      {
        // Course AudioPlayer points at /audio/lessons/<slug>.mp3 (see
        // components/course/AudioPlayer.tsx); proxy those to the media CDN.
        source: '/audio/lessons/:slug*.mp3',
        destination: `${AUDIO_CDN_URL}/lessons/:slug*.mp3`,
      },
    ]
  },
  async redirects() {
    // SEO-friendly short URLs.
    return [
      { source: '/join', destination: '/join-a-team', permanent: true },
      { source: '/tour', destination: '/book-a-tour', permanent: true },
      { source: '/services', destination: '/agent-advantage', permanent: true },
    ]
  },
}

export default nextConfig
