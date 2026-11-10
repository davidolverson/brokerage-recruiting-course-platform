export interface Area {
  slug: string
  name: string
  county?: string
  description: string
  highlights: string[]
  teamSlugs: string[] // which teams serve this area
}

// Demo market areas. Replace with the real areas your brokerage serves.
export const areas: Area[] = [
  {
    slug: 'downtown',
    name: 'Downtown',
    county: 'Anytown City',
    description:
      'The urban core and the heart of branch operations. Historic housing stock, a growing condo market, and steady investor demand make it one of the most active parts of the metro.',
    highlights: [
      'Strong job growth and walkable neighborhoods',
      'Historic homes alongside new mixed-use development',
      'Healthy rental demand near employers and universities',
      'Riverfront redevelopment',
    ],
    teamSlugs: ['example-investor-team', 'example-residential-team'],
  },
  {
    slug: 'southside',
    name: 'Southside',
    county: 'Southside County',
    description:
      'A fast-growing suburban county with a mix of established neighborhoods, new construction, and investment opportunities.',
    highlights: [
      'Consistent population growth and new development',
      'Well-regarded schools driving family relocations',
      'Mix of established neighborhoods and new construction',
      'Commercial growth along the main corridor',
    ],
    teamSlugs: ['example-investor-team', 'example-lending-partner', 'example-title-partner'],
  },
  {
    slug: 'northside',
    name: 'Northside',
    county: 'Northside County',
    description:
      'A diverse suburban county with everything from starter homes to luxury properties and strong investor activity throughout.',
    highlights: [
      'Retail and residential growth in the west corridor',
      'Diverse price points from starter homes to luxury',
      'Strong rental market near universities and employers',
      'Easy interstate access',
    ],
    teamSlugs: ['example-residential-team'],
  },
  {
    slug: 'lakeside',
    name: 'Lakeside',
    county: 'Lakeside County',
    description:
      'A semi-rural county with larger lots, new subdivisions, and properties with strong appreciation potential.',
    highlights: [
      'Larger lots and acreage properties',
      'New subdivisions on the edge of the metro',
      'Lower entry prices for first-time investors',
    ],
    teamSlugs: ['example-investor-team'],
  },
]

export function getAreaBySlug(slug: string): Area | undefined {
  return areas.find((a) => a.slug === slug)
}
