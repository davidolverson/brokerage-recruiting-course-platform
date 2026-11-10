# Brokerage Recruiting + Course Platform

A Next.js template for a real estate brokerage branch: a recruiting website for agents, a free gamified pre-licensing course, a post-license education (PLE) course, and an admin back office with a lead CRM, email campaigns, a training calendar, a member handbook, and Stripe memberships.

All branding, people, teams, addresses, and phone numbers in this repo are placeholders ("Acme Realty", "Jane Agent", `example.com`, `(555) 010-01xx`). All images are generated placeholders.

## Features

**Recruiting site**
- Home page with two career paths (join a team, or grow independently through a "Growth Network" investor program)
- Team directory and team detail pages, market areas, partner and vendor pages
- Agent fit quiz, income calculator, brokerage comparison page, FAQ, success stories
- Lead forms with TCPA phone-consent capture, book-a-tour and apply flows
- Training and events calendar with recurring events, RSVPs, and a newsletter
- SEO: metadata helpers, JSON-LD (organization, FAQ, events, job posting), sitemap, robots, `llms.txt`

**Pre-licensing course**
- 12-module, 60-hour style curriculum with chapters, lessons, key terms, and interactive activities (flashcards, drag and drop, scenarios, calculators, mini quizzes)
- Chapter quizzes, timed mock exams, spaced-repetition review, notes, mastery tracking, XP, streaks, and badges
- Exam-readiness predictor and a completion certificate
- Separate 30-hour PLE course with its own certificate
- Course content mirrors Virginia salesperson pre-licensing topics; it is educational material, not an approved course

**Admin back office** (`/login`)
- Leads, pipeline, assignment, notes, status history, CSV export
- Contacts, CSV import, segmented email campaigns with merge tags (Resend)
- Course admin and student progress, analytics (traffic attribution, quiz funnel)
- Articles CMS, file uploads, member handbook, agent onboarding milestones
- Team and role management with invites (Better Auth)
- Stripe membership checkout, customer portal, webhook, and per-transaction fee invoicing

## Stack

- Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4
- Postgres (Neon serverless driver or `pg`), Drizzle ORM schema, raw SQL migrations
- Better Auth for admin and student accounts
- Resend for email, Stripe for billing, optional Google Analytics 4
- Vitest for unit tests, Playwright for end-to-end tests

## Quick start

```bash
# 1. Install (Node version in .nvmrc)
npm ci

# 2. Configure
cp .env.example .env.local
# fill in DATABASE_URL and BETTER_AUTH_SECRET at minimum

# 3. Create the database schema: apply every migration in order
for f in src/db/migrations/*.sql; do npx tsx scripts/apply-migration.ts "$f"; done

# 4. Run
npm run dev          # http://localhost:3004

# 5. Create the first admin account
# open http://localhost:3004/setup

# Tests / build
npm test             # vitest
npm run lint
npm run build
npx playwright test  # e2e, against PLAYWRIGHT_BASE_URL (default http://localhost:3004)
```

Migrations `0008_seed_course_content.sql` and `0010_seed_ple_content.sql` seed the course content; `0015` and `0019` seed a demo training calendar and demo articles. The SQL seed files can be regenerated from `src/lib/data/*` with the scripts in `scripts/`.

## Environment variables

| Variable | Required | Purpose |
| --- | --- | --- |
| `DATABASE_URL` | yes | Postgres connection string |
| `BETTER_AUTH_SECRET` | yes | Session signing secret (32+ random chars) |
| `BETTER_AUTH_URL` | yes | Public base URL used for auth callbacks |
| `NEXT_PUBLIC_SITE_URL` | yes | Canonical site URL for metadata, sitemap, emails |
| `NEXT_PUBLIC_URL` | no | Base URL for course redirects (defaults to localhost) |
| `LEADS_API_KEY` | no | Protects `GET /api/leads` |
| `CRON_SECRET` | no | Shared secret for `/api/cron/*` digest jobs |
| `RESEND_API_KEY` | no | Transactional and campaign email |
| `RESEND_FROM_EMAIL` | no | From address for email |
| `LEAD_NOTIFY_EMAIL` | no | Inbox that receives new-lead alerts |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | no | GA4 ID; analytics load only when set |
| `AUDIO_CDN_URL` | no | Build-time CDN base for lesson audio (`<url>/lessons/<slug>.mp3`) |
| `STRIPE_SECRET_KEY` | no | Stripe billing (all three Stripe vars together) |
| `STRIPE_WEBHOOK_SECRET` | no | Stripe webhook signing secret |
| `STRIPE_PRICE_MEMBERSHIP_MONTHLY` | no | Recurring membership price id |
| `OPENAI_API_KEY` | scripts | Only for `scripts/generate-audio.mjs` |
| `R2_BUCKET` | scripts | Only for `scripts/upload-audio-r2.mjs` |
| `TEST_DATABASE_URL` | tests | Opt-in billing persistence tests; use a throwaway DB |

See `.env.example` for comments on each.

## Deploy

Any Node host that runs `next build && next start` works (Vercel, a container, a VPS). Set the env vars above, apply the migrations to the production database, and register the Stripe webhook at `<site>/api/billing/webhook` if you enable billing. Schedule `/api/cron/digest` and `/api/cron/course-digest` with your platform's cron, sending `CRON_SECRET`.

## Make it yours

Replace the placeholder branding in:
- `src/lib/data/teams.ts`, `areas.ts`, `events.ts`, `faq.ts`, `branch-metrics.ts`, `service-nodes.ts`, `articles.ts`: teams, people, markets, events, copy
- `src/lib/schema.ts`: organization name, address, phone, social links for JSON-LD
- `src/components/layout/Header.tsx`, `Footer.tsx`: name, address, license line, social links
- `src/app/layout.tsx`, `src/lib/metadata.ts`, `src/app/opengraph-image.tsx`, `icon.tsx`, `apple-icon.tsx`, `public/favicon.svg`: site metadata and icons
- `src/lib/data/ple-index.ts`: education provider name, provider number, and approval statement
- `src/app/api/course/certificate/route.ts`, `ple-certificate/route.ts`: certificate branding
- `public/images/`: every image is a generated placeholder with the file name the code expects
- `public/llms.txt`, `src/app/(marketing)/privacy`, `terms`: legal copy (have it reviewed)

The course content is provided as study material. Getting a course approved by a state real estate board is your responsibility.

## License

MIT, see [LICENSE](LICENSE).
