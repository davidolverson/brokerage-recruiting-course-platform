export interface Event {
  slug: string
  title: string
  eventType: 'networking' | 'training' | 'certification' | 'conference' | 'workshop'
  datetimeStart: string
  datetimeEnd?: string
  location: string
  summary: string
  registrationCta: string
  registrationUrl: string
  tag: string
  time?: string
  isPlaceholder?: boolean
  isFeatured?: boolean
}

const MEETUP_URL = 'https://example.com/meetup'
const NETWORK_CALENDAR_URL = 'https://example.com/calendar'
const NETWORK_MEETUPS_URL = 'https://example.com/meetups'
const OFFICE_LOCATION = 'Acme Realty Office \u00b7 Anytown, VA'

/**
 * Build a Google Calendar "Add to Calendar" URL.
 * Only meaningful for events with real ISO dates (not placeholders).
 */
export function googleCalendarUrl(event: Event): string | null {
  if (event.isPlaceholder) return null
  const start = event.datetimeStart.replace(/[-:]/g, '').replace('T', '') + '00'
  const end = event.datetimeEnd
    ? event.datetimeEnd.replace(/[-:]/g, '').replace('T', '') + '00'
    : // Default to 2 hours after start
      (() => {
        const d = new Date(event.datetimeStart)
        d.setHours(d.getHours() + 2)
        return d.toISOString().replace(/[-:]/g, '').replace('T', '').split('.')[0]
      })()
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: event.title,
    dates: `${start}/${end}`,
    details: event.summary,
    location: event.location,
  })
  return `https://calendar.google.com/calendar/render?${params.toString()}`
}

// The four dated "sample" classes that used to head this list (BRRR Masterclass,
// Creative Financing, STR Blueprint, Tax Strategies) were removed 2026-08-10.
// They were invented placeholders dated April and May 2026, still rendering as
// upcoming months after those dates had passed, directly underneath the real
// Example Investor Team calendar. Real dated events belong in the `training_events` table,
// which the office manager manages from /events \u2014 not here.
export const events: Event[] = [
  {
    slug: 'tactical-tuesday',
    title: 'Tactics Training',
    eventType: 'training',
    datetimeStart: 'Weekly · Tuesdays',
    time: '8:30 AM – 9:15 AM',
    location: 'Virtual (the Acme virtual campus)',
    summary:
      'Weekly training focused on elevating your agent production game. Learn from the experts as they share proven, tactical strategies you can leverage and implement right away. 100% focused on accelerating your business growth and building your cash machine.',
    registrationCta: 'Register on Growth Network Calendar',
    registrationUrl: NETWORK_CALENDAR_URL,
    tag: 'Weekly Training',
    isPlaceholder: true,
  },
  {
    slug: 'wealth-wednesday',
    title: 'Wealth Mastermind',
    eventType: 'training',
    datetimeStart: 'Weekly · Wednesdays',
    time: '8:30 AM – 9:15 AM',
    location: 'Virtual (Growth Network Pro Community)',
    summary:
      'Exclusive private weekly mastermind for real estate agents and investors focused on building real, long-term wealth. Investing strategies, fix & flips, rentals, financing, deal structures, partnerships, and wealth-building opportunities. Included in Growth Network Pro membership — free for Growth Network agents.',
    registrationCta: 'Join Growth Network Pro',
    registrationUrl: NETWORK_CALENDAR_URL,
    tag: 'Growth Network Pro',
    isPlaceholder: true,
  },
  {
    slug: 'network-webinar-monthly',
    title: 'Growth Network Webinar Series',
    eventType: 'training',
    datetimeStart: '3rd Wednesdays · Monthly',
    time: '3:00 PM – 4:00 PM ET',
    location: 'Virtual (Live Webinar)',
    summary:
      'Monthly live webinar covering real estate investing topics: from the Wealth Roadmap and the Income Flip framework to cash flow strategies and building wealth with leverage. Free and open to all agents. Register at example.com/calendar.',
    registrationCta: 'Register for Webinar',
    registrationUrl: NETWORK_CALENDAR_URL,
    tag: 'Live Webinar',
    isPlaceholder: true,
  },
  {
    slug: 'annual-summit-2026',
    title: 'Annual Summit 2026',
    eventType: 'conference',
    datetimeStart: '2026-06-01T09:00',
    datetimeEnd: '2026-06-02T17:00',
    location: 'Anytown',
    summary:
      'The annual Growth Network investor conference. Two days of national speakers, live deal rooms, and Mid-Atlantic networking.',
    registrationCta: 'Get Early Bird Tickets',
    registrationUrl: MEETUP_URL,
    tag: 'Conference',
    isFeatured: true,
  },
]

/** Monthly events only (excludes featured/conference events). */
export const monthlyEvents = events.filter((e) => !e.isFeatured)

/** Featured events (e.g. The Annual Summit). */
export const featuredEvents = events.filter((e) => e.isFeatured)

/**
 * Has this event not happened yet?
 *
 * Lives here because "is it still upcoming" was being decided in three places —
 * the Save-the-Date banner, the page's JSON-LD, and the layout's JSON-LD — and
 * they disagreed. The Annual Summit 2026 finished on June 2 and was still being published
 * as an upcoming schema.org Event in August because the layout had its own copy
 * of the list and no date check at all.
 *
 * Placeholders ("Weekly · Tuesdays") have no parseable date and are never
 * upcoming in this sense; recurring items are surfaced by the calendar instead.
 */
export function isUpcoming(event: Event, now: Date = new Date()): boolean {
  if (event.isPlaceholder) return false
  const end = new Date(event.datetimeEnd ?? event.datetimeStart)
  if (Number.isNaN(end.getTime())) return false
  return end >= now
}

/** Featured events that have not finished yet. */
export function upcomingFeaturedEvents(now: Date = new Date()): Event[] {
  return featuredEvents.filter((e) => isUpcoming(e, now))
}
