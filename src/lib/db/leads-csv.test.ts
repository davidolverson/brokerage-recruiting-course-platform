import { describe, it, expect } from 'vitest'
import { buildLeadsCsv, type Lead } from './leads'
import { CALL_ONLY_LABEL, MAY_TEXT_LABEL } from '../phone-consent'

/**
 * The export is the one lead surface that leaves the building. Every admin
 * screen states whether a number may be texted; the CSV shipped the number with
 * no standing attached at all, and it is the copy that gets pasted into a
 * dialler or a mail merge, where none of those screens come with it.
 */

function lead(overrides: Partial<Lead> = {}): Lead {
  return {
    id: 1,
    first_name: 'Jane',
    last_name: 'Buyer',
    email: 'jane@example.com',
    phone: '5550100123',
    form_type: 'contact',
    source_route: '/contact',
    source_section: null,
    selected_path: null,
    selected_team: null,
    campaign_id: null,
    partner_ref: null,
    current_status: 'new',
    assigned_team: null,
    assigned_to: null,
    consent_at: '2026-08-02T21:30:00.000Z',
    consent_phone: '5550100123',
    metadata: null,
    created_at: '2026-08-02T21:30:00.000Z',
    updated_at: '2026-08-02T21:30:00.000Z',
    ...overrides,
  } as Lead
}

/** Fields in one CSV line, ignoring commas inside a quoted value. */
function fieldCount(line: string): number {
  let fields = 1
  let quoted = false
  for (const ch of line) {
    if (ch === '"') quoted = !quoted
    else if (ch === ',' && !quoted) fields += 1
  }
  return fields
}

describe('buildLeadsCsv', () => {
  it('states the permission immediately after the number', () => {
    const [header] = buildLeadsCsv([lead()]).split('\n')
    const columns = (header ?? '').split(',')
    expect(columns[columns.indexOf('Phone') + 1]).toBe('Text permission')
  })

  it('says which of the two positions each row is in', () => {
    const consented = lead()
    const never = lead({ id: 2, consent_at: null, consent_phone: null })
    // Consent attaches to the number, so a phone corrected after the tick is
    // call-only again even though the record is still there.
    const edited = lead({ id: 3, phone: '5550100199' })

    const rows = buildLeadsCsv([consented, never, edited]).split('\n').slice(1)
    expect(rows[0]).toContain(MAY_TEXT_LABEL)
    expect(rows[1]).toContain(CALL_ONLY_LABEL)
    expect(rows[2]).toContain(CALL_ONLY_LABEL)
  })

  it('writes No phone rather than an instruction to dial nothing', () => {
    const rows = buildLeadsCsv([lead({ phone: null, consent_at: null, consent_phone: null })])
      .split('\n')
      .slice(1)
    expect(rows[0]).toContain('No phone')
    expect(rows[0]).not.toContain(CALL_ONLY_LABEL)
  })

  it('keeps every row exactly as wide as the header', () => {
    // Adding a column to one list and not the other shifts every value after
    // it. The file still opens; the consent date just lands under Form Type.
    const csv = buildLeadsCsv([lead(), lead({ id: 2, selected_team: 'Smith, Jones & Co' })])
    const [header, ...rows] = csv.split('\n')
    for (const row of rows) expect(fieldCount(row)).toBe(fieldCount(header ?? ''))
  })
})
