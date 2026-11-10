// Analytics event tracking — adapter pattern
// Wired to GA4 via NEXT_PUBLIC_GA_MEASUREMENT_ID env var

type AnalyticsEvent = {
  name: string
  properties?: Record<string, string | number | boolean>
}

/** GA4 injects this at runtime; it is absent until the script loads. */
type GtagWindow = Window & {
  gtag?: (command: 'event', name: string, params?: AnalyticsEvent['properties']) => void
}

export function trackEvent(event: AnalyticsEvent): void {
  if (typeof window !== 'undefined') {
    if (process.env.NODE_ENV === 'development') {
      console.log('[Analytics]', event.name, event.properties)
    }
    const { gtag } = window as GtagWindow
    if (typeof gtag === 'function') {
      gtag('event', event.name, event.properties)
    }
  }
}

// Pre-defined events from analytics-events.yaml
export const events = {
  pathSelected: (path: 'team' | 'network', source: string) =>
    trackEvent({
      name: 'path_selected',
      properties: { selected_path: path, source_section: source },
    }),

  teamCardViewed: (teamSlug: string, source: string) =>
    trackEvent({
      name: 'team_card_viewed',
      properties: { team_slug: teamSlug, source_route: source },
    }),

  leadFormStarted: (formType: string, source: string) =>
    trackEvent({
      name: 'lead_form_started',
      properties: { form_type: formType, source_route: source },
    }),

  leadFormSubmitted: (formType: string, path?: string, team?: string) =>
    trackEvent({
      name: 'lead_form_submitted',
      properties: {
        form_type: formType,
        selected_path: path ?? '',
        selected_team: team ?? '',
      },
    }),

  schedulerOpened: (type: string, source: string) =>
    trackEvent({
      name: 'scheduler_opened',
      properties: { schedule_type: type, source_route: source },
    }),

  chatbotOpened: (source: string) =>
    trackEvent({
      name: 'chatbot_opened',
      properties: { source_route: source },
    }),

  quizStarted: (source: string) =>
    trackEvent({
      name: 'fit_quiz_started',
      properties: { source_route: source },
    }),

  quizCompleted: (path: string, team?: string) =>
    trackEvent({
      name: 'fit_quiz_completed',
      properties: { recommended_path: path, recommended_team: team ?? '' },
    }),

  ctaClick: (ctaText: string, sourceRoute: string, destination: string) =>
    trackEvent({
      name: 'cta_click',
      properties: { cta_text: ctaText, source_route: sourceRoute, destination },
    }),

  // Course events
  courseEnrolled: () =>
    trackEvent({ name: 'course_enrolled', properties: { course: 'va_real_estate_prelicense' } }),

  lessonStarted: (lessonSlug: string, moduleSlug: string) =>
    trackEvent({
      name: 'lesson_started',
      properties: { lesson_slug: lessonSlug, module_slug: moduleSlug },
    }),

  lessonCompleted: (lessonSlug: string, moduleSlug: string, timeSpent: number) =>
    trackEvent({
      name: 'lesson_completed',
      properties: { lesson_slug: lessonSlug, module_slug: moduleSlug, time_spent_seconds: timeSpent },
    }),

  courseQuizStarted: (quizType: string, chapterSlug: string) =>
    trackEvent({
      name: 'course_quiz_started',
      properties: { quiz_type: quizType, chapter_slug: chapterSlug },
    }),

  courseQuizCompleted: (quizType: string, score: number, passed: boolean) =>
    trackEvent({
      name: 'course_quiz_completed',
      properties: { quiz_type: quizType, score, passed },
    }),

  courseExamPassed: (quizType: string, score: number) =>
    trackEvent({
      name: 'course_exam_passed',
      properties: { quiz_type: quizType, score },
    }),

  badgeEarned: (badgeSlug: string) =>
    trackEvent({
      name: 'badge_earned',
      properties: { badge_slug: badgeSlug },
    }),

  courseCompleted: () =>
    trackEvent({ name: 'course_completed', properties: { course: 'va_real_estate_prelicense' } }),

  postCourseCta: (destination: string) =>
    trackEvent({
      name: 'post_course_cta_clicked',
      properties: { destination },
    }),
}

// ─── UTM helpers ──────────────────────────────────────────────────────────────

export interface UTMParams {
  utm_source: string
  utm_medium: string
  utm_campaign: string
  utm_content: string
  utm_term: string
}

export function getUTMParams(): UTMParams {
  if (typeof window === 'undefined') {
    return { utm_source: '', utm_medium: '', utm_campaign: '', utm_content: '', utm_term: '' }
  }
  const sp = new URLSearchParams(window.location.search)
  return {
    utm_source: sp.get('utm_source') || '',
    utm_medium: sp.get('utm_medium') || '',
    utm_campaign: sp.get('utm_campaign') || '',
    utm_content: sp.get('utm_content') || '',
    utm_term: sp.get('utm_term') || '',
  }
}

export function buildCampaignId(utm: UTMParams): string {
  const parts = [utm.utm_source, utm.utm_medium, utm.utm_campaign].filter(Boolean)
  return parts.join('|') || ''
}
