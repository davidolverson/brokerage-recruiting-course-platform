import type { Metadata } from 'next'
import Script from 'next/script'
import { Manrope, Roboto } from 'next/font/google'
import './globals.css'
import { createMetadata } from '@/lib/metadata'
import { getOrganizationSchema, getWebSiteSchema, getLocalBusinessSchema, getServicesSchema } from '@/lib/schema'

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-manrope',
  display: 'swap',
})

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-roboto',
  display: 'swap',
})

export const metadata: Metadata = {
  ...createMetadata({
    title: "Join the Fastest Growing Real Estate Branch in Anytown",
    description:
      "Join Anytown's fastest-growing real estate branch. Choose your path: join a team or grow independently with Growth Network. Training, community, and a vertically integrated support ecosystem.",
    path: '',
  }),
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://example.com'),
  keywords: [
    'Acme Realty',
    'Anytown real estate',
    'real estate agent Anytown VA',
    'join Acme Realty',
    'Growth Network real estate',
    'real estate teams Anytown',
    'real estate training Virginia',
  ],
  authors: [{ name: 'Acme Realty' }],
  creator: 'Acme Realty',
  publisher: 'Acme Realty',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'real estate',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${manrope.variable} ${roboto.variable}`}>
      <head>
        <meta name="theme-color" content="#0D9488" />
        {/* Both, not one: the apple- prefix is what iOS still reads, and Chrome
            warns on every page load that the unprefixed name is the standard. */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        {/* Preconnect to third-party origins */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getOrganizationSchema()).replace(/</g, '\\u003c'),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getWebSiteSchema()).replace(/</g, '\\u003c'),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getLocalBusinessSchema()).replace(/</g, '\\u003c'),
          }}
        />
        {getServicesSchema().map((svc, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(svc).replace(/</g, '\\u003c'),
            }}
          />
        ))}
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`} strategy="afterInteractive" />
            <Script id="ga4-init" strategy="afterInteractive">{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');`}</Script>
          </>
        )}
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
