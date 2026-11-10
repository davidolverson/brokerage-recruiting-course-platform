import { describe, it, expect } from 'vitest'
import { readFileSync } from 'fs'
import { join } from 'path'
import { HANDBOOK_SECTIONS, sectionRank, compareSections, handbookGridClass } from './handbook-sections'

const read = (p: string) => readFileSync(join(process.cwd(), p), 'utf8')

// The handbook groups pages by a free-text "Handbook section" field, and orders
// the groups against a fixed list. Exact string matching means one capital
// letter puts a page at the bottom of the page with nothing to explain why.
// That is not hypothetical: seeding the handbook with 'Getting started' instead
// of 'Start here' sent "Start Here: Your First Two Weeks" below Training.

describe('sectionRank', () => {
  it('ranks a known section by its position in the list', () => {
    expect(sectionRank('Start here')).toBe(0)
    expect(sectionRank(HANDBOOK_SECTIONS[1])).toBe(1)
  })

  // The trap. An editor typing into a free-text box will not match your casing.
  it('ignores capitalisation, so "Start Here" is still the first section', () => {
    expect(sectionRank('Start Here')).toBe(sectionRank('Start here'))
  })

  it('ignores surrounding whitespace', () => {
    expect(sectionRank('  Start here  ')).toBe(sectionRank('Start here'))
  })

  it('treats "and" and "&" as the same word', () => {
    expect(sectionRank('Paperwork and compliance')).toBe(sectionRank('Paperwork & compliance'))
  })

  it('returns -1 for a section nobody has defined', () => {
    expect(sectionRank('Christmas party photos')).toBe(-1)
  })

  it('returns -1 for an empty or missing value', () => {
    expect(sectionRank('')).toBe(-1)
    expect(sectionRank(null)).toBe(-1)
  })
})

describe('compareSections', () => {
  it('puts known sections in list order', () => {
    const out = ['Training', 'Start here', 'Our partners'].sort(compareSections)
    expect(out[0]).toBe('Start here')
    expect(out[out.length - 1]).toBe('Our partners')
  })

  it('keeps a differently-capitalised section in its proper place', () => {
    const out = ['Training', 'START HERE'].sort(compareSections)
    expect(out[0]).toBe('START HERE')
  })

  it('sorts unknown sections after every known one, alphabetically', () => {
    const out = ['Zebra notes', 'Training', 'Apple notes', 'Start here'].sort(compareSections)
    expect(out).toEqual(['Start here', 'Training', 'Apple notes', 'Zebra notes'])
  })
})

// The reason this module exists. The handbook page and the admin field both
// need the same vocabulary, and when each kept its own copy they drifted the
// first time anyone typed. Same failure the role lists hit three times.
describe('one definition, two consumers', () => {
  const handbookPage = read('src/app/(marketing)/handbook/page.tsx')
  const articlesAdmin = read('src/app/(admin)/articles/page.tsx')

  it('the handbook page orders sections from the shared module', () => {
    expect(handbookPage).toMatch(/from '@\/lib\/handbook-sections'/)
    expect(handbookPage).toMatch(/compareSections/)
  })

  it('the admin field suggests sections from the shared module', () => {
    expect(articlesAdmin).toMatch(/from '@\/lib\/handbook-sections'/)
    expect(articlesAdmin).toMatch(/HANDBOOK_SECTIONS/)
  })

  it('neither file declares a section list of its own', () => {
    for (const [name, src] of [['handbook page', handbookPage], ['articles admin', articlesAdmin]] as const) {
      expect(src, name).not.toMatch(/const SECTION_ORDER\s*=/)
      // A second literal list of shelf names is the drift this guards against.
      expect(src, name).not.toMatch(/'Getting acclimated to Acme'/)
    }
  })

  it('every section the handbook was seeded with is a known section', () => {
    const seeded = [
      'Start here', 'Business 101', 'Transaction coordination',
      'Training', 'Paperwork & compliance', 'Our partners',
    ]
    for (const s of seeded) expect(sectionRank(s), s).toBeGreaterThan(-1)
  })
})

describe('handbookGridClass', () => {
  it('does not put a lone card in a three-column row', () => {
    // The defect: one card beside two empty columns reads as a page that
    // failed to load, on the page the client demos.
    const one = handbookGridClass(1)
    expect(one).not.toContain('grid-cols-3')
    expect(one).not.toContain('grid-cols-2')
    expect(one).toContain('max-w-md')
  })

  it('pairs up two cards without stretching them across three columns', () => {
    const two = handbookGridClass(2)
    expect(two).toContain('sm:grid-cols-2')
    expect(two).not.toContain('lg:grid-cols-3')
  })

  it('goes back to the full three-column shelf once there are enough pages', () => {
    for (const n of [3, 4, 9]) {
      expect(handbookGridClass(n)).toContain('lg:grid-cols-3')
      expect(handbookGridClass(n)).not.toContain('max-w-')
    }
  })

  it('treats an empty shelf like a single one rather than crashing or widening', () => {
    expect(handbookGridClass(0)).toBe(handbookGridClass(1))
  })

  it('always keeps the grid and its gap, whatever the count', () => {
    for (const n of [0, 1, 2, 3, 12]) {
      expect(handbookGridClass(n)).toContain('grid')
      expect(handbookGridClass(n)).toContain('gap-4')
    }
  })
})
