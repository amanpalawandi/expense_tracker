import { useState } from 'react'
import { CATEGORIES, validateExpense } from '../logic'

// Props: onAdd receives a validated expense. Form state stays local until submission.
export default function ExpenseForm({ onAdd }) {
  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState('')
  const [category, setCategory] = useState(CATEGORIES[0])
  const [error, setError] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    const message = validateExpense(title, amount)
    if (message) {
      setError(message)
      return
    }
    onAdd({ title: title.trim(), amount: Number(amount), category, id: crypto.randomUUID() })
    setTitle('')
    setAmount('')
    setCategory(CATEGORIES[0])
    setError('')
  }

  return (
    <form className="expense-form" onSubmit={handleSubmit} noValidate>
      <div className="form-heading"><div><span className="eyebrow">QUICK ENTRY</span><h2>Add an expense</h2></div><span className="form-icon" aria-hidden="true">＋</span></div>
      <label className="field-label" htmlFor="expense-title">What was it for?</label>
      <input id="expense-title" data-cy="title" value={title} onChange={(event) => setTitle(event.target.value)} placeholder="e.g. Coffee with Maya" autoComplete="off" />
      <div className="field-row">
        <div className="field-group"><label className="field-label" htmlFor="expense-amount">Amount</label><div className="amount-input"><span aria-label="Indian rupees">₹</span><input id="expense-amount" data-cy="amount" type="number" min="0.01" max="100000" step="0.01" value={amount} onChange={(event) => setAmount(event.target.value)} placeholder="0.00" /></div></div>
        <div className="field-group"><label className="field-label" htmlFor="expense-category">Category</label><select id="expense-category" data-cy="category" value={category} onChange={(event) => setCategory(event.target.value)}>{CATEGORIES.map((item) => <option key={item}>{item}</option>)}</select></div>
      </div>
      {error && <p className="form-error" role="alert">{error}</p>}
      <button className="primary-button" data-cy="add-expense" type="submit"><span aria-hidden="true">＋</span> Add expense</button>
      <p className="form-note">Keep every dollar accounted for.</p>
    </form>
  )
}
