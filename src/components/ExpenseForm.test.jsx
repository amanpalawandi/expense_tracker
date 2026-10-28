import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import ExpenseForm from './ExpenseForm'

describe('ExpenseForm', () => {
  it('adds a valid expense and clears the form', () => {
    const onAdd = vi.fn()
    render(<ExpenseForm onAdd={onAdd} />)
    fireEvent.change(screen.getByLabelText(/what was it for/i), { target: { value: ' Lunch ' } })
    fireEvent.change(screen.getByLabelText('Amount'), { target: { value: '250' } })
    fireEvent.change(screen.getByLabelText('Category'), { target: { value: 'Food' } })
    fireEvent.click(screen.getByRole('button', { name: /add expense/i }))
    expect(onAdd).toHaveBeenCalledWith(expect.objectContaining({ title: 'Lunch', amount: 250, category: 'Food' }))
    expect(screen.getByLabelText(/what was it for/i)).toHaveValue('')
  })

  it('rejects an empty title without adding an expense', () => {
    const onAdd = vi.fn()
    render(<ExpenseForm onAdd={onAdd} />)
    fireEvent.change(screen.getByLabelText('Amount'), { target: { value: '250' } })
    fireEvent.click(screen.getByRole('button', { name: /add expense/i }))
    expect(onAdd).not.toHaveBeenCalled()
    expect(screen.getByRole('alert')).toHaveTextContent(/title/i)
  })

  it.each(['0', '-1', '100000.01', 'abc'])('rejects invalid amount %s', (amount) => {
    const onAdd = vi.fn()
    render(<ExpenseForm onAdd={onAdd} />)
    fireEvent.change(screen.getByLabelText(/what was it for/i), { target: { value: 'Lunch' } })
    fireEvent.change(screen.getByLabelText('Amount'), { target: { value: amount } })
    fireEvent.click(screen.getByRole('button', { name: /add expense/i }))
    expect(onAdd).not.toHaveBeenCalled()
    expect(screen.getByRole('alert')).toBeInTheDocument()
  })
})
