import { formatCurrency } from '../logic'

const categoryIcons = { Food: '◉', Travel: '↗', Bills: '▤', Other: '✳' }

// Props: expense is a single list record; onDelete removes that record by id.
export default function ExpenseItem({ expense, onDelete }) {
  return (
    <li className="expense-item" data-cy="expense-item">
      <span className={`category-icon ${expense.category.toLowerCase()}`} aria-hidden="true">{categoryIcons[expense.category]}</span>
      <span className="expense-description"><strong>{expense.title}</strong><span>{expense.category}</span></span>
      <strong className="expense-amount">{formatCurrency(expense.amount)}</strong>
      <button className="delete-button" type="button" aria-label={`Delete ${expense.title}`} onClick={() => onDelete(expense.id)} data-cy="delete-expense">×</button>
    </li>
  )
}
