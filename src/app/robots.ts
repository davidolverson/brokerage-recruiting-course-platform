import type { MetadataRoute } from 'next'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://example.com'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // The admin route group strips "(admin)" from the URL, so these are
        // top-level paths — "/admin/" alone covered almost none of them. The
        // handbook is members-only and carries the fee schedule.
        //
        // Every admin path is anchored with "$" plus a trailing-slash variant.
        // A bare "/team" is a PREFIX match, so it also blocked the public
        // "/teams" hub and all seven "/teams/<slug>" profile pages — eight
        // sitemap URLs that return 200 but that Google refused to index
        // ("Blocked by robots.txt", reported 2026-08-17). Anchoring keeps the
        // admin page blocked without swallowing its public sibling.
        disallow: [
          '/api/', '/_next/', '/private/', '/admin/',
          '/handbook$', '/handbook/',
          '/dashboard$', '/dashboard/',
          '/leads$', '/leads/',
          '/pipeline$', '/pipeline/',
          '/analytics$', '/analytics/',
          '/team$', '/team/',
          '/events$', '/events/',
          '/notifications$', '/notifications/',
          '/settings$', '/settings/',
          '/articles$', '/articles/',
          '/contacts$', '/contacts/',
          '/campaigns$', '/campaigns/',
          '/course-admin$', '/course-admin/',
          // Admin auth + setup surfaces that were never listed at all.
          '/login$', '/login/',
          '/setup$', '/setup/',
          '/onboarding$', '/onboarding/',
          '/uploads$', '/uploads/',
          '/accept-invite$', '/accept-invite/',
          '/forgot-password$', '/forgot-password/',
          '/reset-password$', '/reset-password/',
        ],
      },
      // Allow major AI / LLM crawlers explicitly
      { userAgent: 'GPTBot', allow: '/' },
      { userAgent: 'ClaudeBot', allow: '/' },
      { userAgent: 'anthropic-ai', allow: '/' },
      { userAgent: 'PerplexityBot', allow: '/' },
      { userAgent: 'Google-Extended', allow: '/' },
      { userAgent: 'CCBot', allow: '/' },
      { userAgent: 'FacebookBot', allow: '/' },
      { userAgent: 'Bytespider', allow: '/' },
      { userAgent: 'Diffbot', allow: '/' },
      { userAgent: 'ImagesiftBot', allow: '/' },
      { userAgent: 'Omgilibot', allow: '/' },
      { userAgent: 'cohere-ai', allow: '/' },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  }
}
