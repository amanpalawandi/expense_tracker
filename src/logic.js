export const CATEGORIES = ['Food', 'Travel', 'Bills', 'Other']

export function validateExpense(title, amount) {
  const normalizedTitle = title.trim()
  const numericAmount = Number(amount)

  if (!normalizedTitle) return 'Enter a title for this expense.'
  if (amount === '' || !Number.isFinite(numericAmount)) return 'Enter a valid amount.'
  if (numericAmount <= 0) return 'Amount must be greater than zero.'
  if (numericAmount > 100_000) return 'Amount must be 100,000 or less.'
  return ''
}

export function calculateTotal(expenses) {
  return expenses.reduce((sum, expense) => sum + expense.amount, 0)
}

export function formatCurrency(amount) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
  }).format(amount)
}
