import ExpenseItem from './ExpenseItem'

// Props: expenses is the currently visible list; onDelete forwards a selected id to App.
export default function ExpenseList({ expenses, onDelete }) {
  if (expenses.length === 0) return <div className="empty-state"><span aria-hidden="true">✳</span><strong>Nothing to see here</strong><p>Add an expense or choose another category.</p></div>
  return <ul className="expense-list">{expenses.map((expense) => <ExpenseItem key={expense.id} expense={expense} onDelete={onDelete} />)}</ul>
}
