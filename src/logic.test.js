import { describe, expect, it } from 'vitest'
import { calculateTotal, formatCurrency, validateExpense } from './logic'

describe('validateExpense', () => {
  it('accepts a valid title and positive amount', () => expect(validateExpense('Lunch', '25')).toBe(''))
  it('rejects an empty title', () => expect(validateExpense('   ', '25')).toMatch(/title/i))
  it('rejects an empty amount', () => expect(validateExpense('Lunch', '')).toMatch(/amount/i))
  it('rejects a non-numeric amount', () => expect(validateExpense('Lunch', 'abc')).toMatch(/amount/i))
  it('rejects a zero amount', () => expect(validateExpense('Lunch', '0')).toMatch(/greater than zero/i))
  it('rejects a negative amount', () => expect(validateExpense('Lunch', '-2')).toMatch(/greater than zero/i))
  it('rejects amounts over 100,000', () => expect(validateExpense('Lunch', '100000.01')).toMatch(/100,000/i))
  it('accepts exactly 100,000', () => expect(validateExpense('Lunch', '100000')).toBe(''))
})

describe('calculateTotal', () => {
  it('sums expense amounts', () => expect(calculateTotal([{ amount: 12.5 }, { amount: 7.25 }])).toBe(19.75))
  it('returns zero for an empty list', () => expect(calculateTotal([])).toBe(0))
})

describe('formatCurrency', () => {
  it('uses rupees, Indian digit grouping, and two decimal places', () => {
    expect(formatCurrency(123456.78)).toBe('₹1,23,456.78')
  })
})
