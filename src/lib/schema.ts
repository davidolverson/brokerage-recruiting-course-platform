// Schema.org structured data generators (JSON-LD)

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://example.com'

export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    '@id': `${BASE_URL}/#organization`,
    name: 'Acme Realty Anytown Branch',
    description:
      "Anytown's growth-first real estate branch. Join a team or grow independently with Growth Network.",
    url: BASE_URL,
    telephone: '+15550100100',
    email: 'agent@example.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Main Street',
      addressLocality: 'Anytown',
      addressRegion: 'VA',
      postalCode: '00000',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 0,
      longitude: 0,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
      ],
      opens: '09:00',
      closes: '17:00',
    },
    sameAs: [
      'https://example.com/facebook',
      'https://example.com/instagram',
      'https://example.com/linkedin',
      'https://example.com/tiktok',
    ],
    parentOrganization: {
      '@type': 'Organization',
      name: 'Acme Realty LLC',
      url: 'https://example.com',
    },
  }
}

export function getFAQSchema(
  items: { question: string; answer: string }[],
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }
}

export function getEventSchema(event: {
  title: string
  datetimeStart: string
  location: string
  summary: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: event.title,
    description: event.summary,
    startDate: event.datetimeStart,
    location: {
      '@type': 'Place',
      name: 'Acme Realty Branch',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '123 Main Street',
        addressLocality: 'Anytown',
        addressRegion: 'VA',
        postalCode: '00000',
      },
    },
    organizer: {
      '@type': 'Organization',
      name: 'Acme Realty Anytown Branch',
      url: BASE_URL,
    },
  }
}

export function getBreadcrumbSchema(
  items: { name: string; url: string }[],
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function getWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Acme Realty',
    url: BASE_URL,
  }
}

export function getLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${BASE_URL}/#localbusiness`,
    name: 'Acme Realty Anytown Branch',
    description:
      "Anytown's growth-first real estate branch. Whether you join a team or grow independently with Growth Network, Acme Realty offers unmatched training, financial tools, and an investor-agent community.",
    url: BASE_URL,
    telephone: '+15550100100',
    email: 'agent@example.com',
    image: `${BASE_URL}/images/og-image.jpeg`,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Main Street',
      addressLocality: 'Anytown',
      addressRegion: 'VA',
      postalCode: '00000',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 0,
      longitude: 0,
    },
    areaServed: [
      { '@type': 'City', name: 'Anytown' },
      { '@type': 'City', name: 'Southside' },
      { '@type': 'City', name: 'Northside' },
      { '@type': 'City', name: 'Westside' },
      { '@type': 'State', name: 'Virginia' },
    ],
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '17:00',
    },
    sameAs: [
      'https://example.com/facebook',
      'https://example.com/instagram',
      'https://example.com/linkedin',
      'https://example.com/tiktok',
    ],
    parentOrganization: {
      '@type': 'Organization',
      name: 'Acme Realty LLC',
      url: 'https://example.com',
    },
  }
}

export function getServicesSchema() {
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Real Estate Agent Recruitment — Acme Realty',
      description:
        'Join Anytown\'s fastest-growing Acme Realty branch. Access revenue share, stock awards, Growth Network investor education, and vertically integrated support for new and experienced agents.',
      provider: {
        '@type': 'Organization',
        '@id': `${BASE_URL}/#organization`,
        name: 'Acme Realty Anytown Branch',
      },
      areaServed: { '@type': 'State', name: 'Virginia' },
      url: `${BASE_URL}/apply`,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Growth Network Investor Education Program',
      description:
        'FREE Growth Network Pro membership for Acme Realty agents. 35+ hours of certification-eligible real estate investor education covering fix-and-flip, buy-and-hold, BRRRR, and the Wealth Roadmap framework.',
      provider: {
        '@type': 'Organization',
        '@id': `${BASE_URL}/#organization`,
        name: 'Acme Realty Anytown Branch',
      },
      areaServed: { '@type': 'AdministrativeArea', name: 'United States' },
      url: `${BASE_URL}/network`,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Virginia Real Estate Pre-Licensing Course',
      description:
        'Free 60-hour interactive pre-licensing course for the Virginia real estate salesperson exam. 12 modules, 183 lessons, 600+ practice questions, timed mock exams, and completion certificate.',
      provider: {
        '@type': 'Organization',
        '@id': `${BASE_URL}/#organization`,
        name: 'Acme Realty Anytown Branch',
      },
      areaServed: { '@type': 'State', name: 'Virginia' },
      url: `${BASE_URL}/course`,
    },
  ]
}

export function getJobPostingSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: 'Real Estate Agent — Acme Realty',
    description:
      'Join Acme Realty, one of the fastest-growing real estate branches in the Anytown, VA metro area. Whether you are a newly licensed agent seeking mentorship or a seasoned producer looking for better splits and cloud-based flexibility, Acme Realty offers specialized teams, revenue share, stock awards, and the Growth Network independent-agent program. Build your real estate career with world-class training, a vertically integrated support ecosystem, and a collaborative culture that puts agent success first.',
    datePosted: '2026-01-01',
    validThrough: '2026-12-31',
    employmentType: 'CONTRACTOR',
    hiringOrganization: {
      '@type': 'Organization',
      '@id': `${BASE_URL}/#organization`,
      name: 'Acme Realty Anytown Branch',
      sameAs: BASE_URL,
    },
    jobLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '123 Main Street',
        addressLocality: 'Anytown',
        addressRegion: 'VA',
        postalCode: '00000',
        addressCountry: 'US',
      },
    },
    applicantLocationRequirements: {
      '@type': 'City',
      name: 'Anytown, VA',
    },
    jobLocationType: 'TELECOMMUTE',
    directApply: true,
    url: `${BASE_URL}/apply`,
  }
}
