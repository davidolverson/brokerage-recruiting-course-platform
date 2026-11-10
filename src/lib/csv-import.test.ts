import { describe, it, expect } from 'vitest'
import { mapCsvRows } from './csv-import'

const header = ['Email', 'First', 'Last', 'Phone', 'Tags']
const columnMap = { email: 'Email', firstName: 'First', lastName: 'Last', phone: 'Phone', tags: 'Tags' }

describe('mapCsvRows', () => {
  it('maps valid rows using the column map', () => {
    const result = mapCsvRows(header, [['agent@example.com', 'Jane', 'Agent', '5550100123', 'vip, investor']], columnMap)
    expect(result.valid).toEqual([
      { email: 'agent@example.com', firstName: 'Jane', lastName: 'Agent', phone: '5550100123', tags: ['vip', 'investor'] },
    ])
    expect(result.skipped).toEqual([])
  })

  it('lowercases and trims email', () => {
    const result = mapCsvRows(header, [['  agent@example.com  ', '', '', '', '']], columnMap)
    expect(result.valid[0].email).toBe('agent@example.com')
  })

  it('skips rows with a missing email', () => {
    const result = mapCsvRows(header, [['', 'No', 'Email', '', '']], columnMap)
    expect(result.valid).toEqual([])
    expect(result.skipped).toEqual([{ row: 1, reason: 'Missing email' }])
  })

  it('skips rows with an invalid email', () => {
    const result = mapCsvRows(header, [['not-an-email', '', '', '', '']], columnMap)
    expect(result.skipped).toEqual([{ row: 1, reason: 'Invalid email: not-an-email' }])
  })

  it('skips duplicate emails within the same file, keeping the first', () => {
    const result = mapCsvRows(header, [
      ['a@example.com', 'First', '', '', ''],
      ['a@example.com', 'Second', '', '', ''],
    ], columnMap)
    expect(result.valid).toHaveLength(1)
    expect(result.valid[0].firstName).toBe('First')
    expect(result.skipped).toEqual([{ row: 2, reason: 'Duplicate email in file: a@example.com' }])
  })

  it('treats optional columns as null/empty when unmapped', () => {
    const result = mapCsvRows(['Email'], [['a@example.com']], { email: 'Email' })
    expect(result.valid).toEqual([{ email: 'a@example.com', firstName: null, lastName: null, phone: null, tags: [] }])
  })

  it('skips every row with the same reason when the email column is not found', () => {
    const result = mapCsvRows(['Wrong'], [['x'], ['y']], { email: 'Email' })
    expect(result.valid).toEqual([])
    expect(result.skipped).toEqual([
      { row: 1, reason: 'Email column not found' },
      { row: 2, reason: 'Email column not found' },
    ])
  })
})
