import { useMemo, useState } from 'react'
import CategoryFilter from './components/CategoryFilter'
import ExpenseForm from './components/ExpenseForm'
import ExpenseList from './components/ExpenseList'
import { calculateTotal, formatCurrency } from './logic'
import './App.css'

function App() {
  const [expenses, setExpenses] = useState([])
  const [filter, setFilter] = useState('All')
  const visibleExpenses = useMemo(() => filter === 'All' ? expenses : expenses.filter((expense) => expense.category === filter), [expenses, filter])
  const total = calculateTotal(visibleExpenses)

  function addExpense(expense) { setExpenses((current) => [expense, ...current]) }
  function deleteExpense(id) { setExpenses((current) => current.filter((expense) => expense.id !== id)) }

  return (
    <main className="app-shell">
      <header className="topbar"><a className="brand" href="#top" aria-label="Pennywise home"><span className="brand-mark">p</span><span>pennywise</span></a><div className="topbar-right"><span className="private-note"><span className="status-dot" /> Your personal ledger</span><span className="avatar" aria-label="Personal account">A</span></div></header>
      <section className="welcome" id="top"><div><span className="eyebrow">YOUR MONEY, IN FOCUS</span><h1>A little more <em>mindful.</em></h1><p>Small steps add up. See where yours are going.</p></div><div className="date-chip"><span className="date-icon" aria-hidden="true">▦</span><span><strong>THIS MONTH</strong><small>Expense overview</small></span></div></section>
      <section className="summary-card" aria-label="Expense summary"><div className="summary-copy"><span className="summary-label">TOTAL SPENT</span><strong className="summary-total" data-cy="total">{formatCurrency(total)}</strong><span className="summary-caption">{filter === 'All' ? 'Across all categories' : `In ${filter}`}</span></div><div className="summary-art" aria-hidden="true"><span className="art-ring ring-one"/><span className="art-ring ring-two"/><span className="art-leaf">✳</span><span className="art-dash"/></div><div className="summary-meta"><span className="summary-meta-label">TRANSACTIONS</span><strong data-cy="count">{visibleExpenses.length.toString().padStart(2, '0')}</strong><span>expenses logged</span></div></section>
      <div className="content-grid"><section className="ledger-section"><div className="section-heading"><div><span className="eyebrow">THE DETAILS</span><h2>Your activity</h2></div><CategoryFilter value={filter} onChange={setFilter} /></div><div className="ledger-card"><div className="ledger-head"><span>DESCRIPTION</span><span>AMOUNT</span></div><ExpenseList expenses={visibleExpenses} onDelete={deleteExpense} /></div><p className="ledger-footnote">Showing <strong>{visibleExpenses.length}</strong> {visibleExpenses.length === 1 ? 'expense' : 'expenses'}{filter !== 'All' ? ` in ${filter}` : ''}</p></section><aside><ExpenseForm onAdd={addExpense} /></aside></div>
      <footer className="footer"><span>Made for a more mindful month.</span><span>Take it one day at a time <span aria-hidden="true">✳</span></span></footer>
    </main>
  )
}

export default App
