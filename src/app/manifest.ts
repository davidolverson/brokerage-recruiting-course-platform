import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Acme Realty — Real Estate Careers',
    short_name: 'Acme Realty',
    description:
      "Anytown's growth-first real estate branch. Join a team or grow independently.",
    start_url: '/',
    display: 'standalone',
    background_color: '#09090B',
    theme_color: '#0D9488',
    icons: [
      {
        src: '/favicon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  }
}
