// The handbook's shelves.
//
// ONE definition, imported by both the page that orders the shelves and the
// admin field that suggests them. It used to live only inside the handbook page
// as a local SECTION_ORDER array, while the admin offered a free-text box with
// examples in its placeholder. Those two drifted the first time anyone typed:
// seeding pages as 'Getting started' rather than 'Start here' silently pushed
// "Start Here: Your First Two Weeks" below Training, with nothing on screen to
// explain it. Same shape as the role lists that drifted three times in this
// repo, so it gets the same treatment.

export const HANDBOOK_SECTIONS = [
  'Start here',
  'Getting acclimated to Acme',
  'Business 101',
  'Transaction coordination',
  'Training',
  'Paperwork & compliance',
  'Our partners',
  'Marketing & announcement',
] as const

/**
 * Compares the way a person types, not the way a string equals.
 *
 * An editor filling in a free-text field will not reproduce your casing, your
 * spacing, or your choice of "&" over "and". Matching on the raw string turns
 * every one of those into an invisible ordering bug.
 */
function normalise(value: string | null | undefined): string {
  return String(value ?? '')
    .trim()
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/\s+/g, ' ')
}

const NORMALISED = HANDBOOK_SECTIONS.map(normalise)

/** Position in HANDBOOK_SECTIONS, or -1 if this is a section nobody defined. */
export function sectionRank(value: string | null | undefined): number {
  const n = normalise(value)
  if (!n) return -1
  return NORMALISED.indexOf(n)
}

/**
 * Sort comparator for section headings.
 *
 * Known sections keep the curated order, because it follows how a new agent
 * actually moves through onboarding. Anything unrecognised sorts after them and
 * alphabetically among itself, so an editor inventing a section still gets a
 * predictable, visible result rather than a random one.
 */
export function compareSections(a: string, b: string): number {
  const ra = sectionRank(a)
  const rb = sectionRank(b)
  if (ra === -1 && rb === -1) return a.localeCompare(b)
  if (ra === -1) return 1
  if (rb === -1) return -1
  return ra - rb
}

/**
 * Tailwind classes for a shelf holding `count` pages.
 *
 * Column count follows the section's size instead of always being three. Five
 * of the six sections hold exactly one page today, and a lone card in a
 * three-column row is two empty columns of white space that reads as a page
 * that failed to load — on the page the client demos. Capping the width
 * instead makes a single card look chosen. It grows back to three columns on
 * its own as pages are added, so this needs no follow-up.
 *
 * Lives here rather than inline in the page because /handbook is members-only:
 * it cannot be checked signed out, and a rule nobody can see is a rule nobody
 * can verify. As a pure function it is assertable without a session.
 */
export function handbookGridClass(count: number): string {
  const base = 'mt-4 grid gap-4'
  if (count <= 1) return `${base} max-w-md`
  if (count === 2) return `${base} max-w-3xl sm:grid-cols-2`
  return `${base} sm:grid-cols-2 lg:grid-cols-3`
}
