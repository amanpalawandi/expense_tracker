import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from './App'

function addExpense(title, amount, category) {
  fireEvent.change(screen.getByLabelText(/what was it for/i), { target: { value: title } })
  fireEvent.change(screen.getByLabelText('Amount'), { target: { value: amount } })
  fireEvent.change(screen.getByLabelText('Category'), { target: { value: category } })
  fireEvent.click(screen.getByRole('button', { name: /add expense/i }))
}

describe('Expense tracker', () => {
  it('filters by category and updates the visible count and total', () => {
    render(<App />)
    addExpense('Lunch', '250', 'Food')
    addExpense('Cab', '400', 'Travel')
    expect(screen.getByTestId('total')).toHaveTextContent('₹650.00')
    fireEvent.change(screen.getByLabelText(/filter expenses/i), { target: { value: 'Food' } })
    expect(screen.getAllByTestId('expense-item')).toHaveLength(1)
    expect(screen.getByTestId('count')).toHaveTextContent('01')
    expect(screen.getByTestId('total')).toHaveTextContent('₹250.00')
  })

  it('deletes an expense and updates total and count', () => {
    render(<App />)
    addExpense('Lunch', '250', 'Food')
    fireEvent.click(screen.getByRole('button', { name: 'Delete Lunch' }))
    expect(screen.queryByText('Lunch')).not.toBeInTheDocument()
    expect(screen.getByTestId('count')).toHaveTextContent('00')
    expect(screen.getByTestId('total')).toHaveTextContent('₹0.00')
  })

  it('rejects blank titles and negative amounts without adding rows', () => {
    render(<App />)
    addExpense('', '250', 'Food')
    expect(screen.queryAllByTestId('expense-item')).toHaveLength(0)
    addExpense('Invalid', '-4', 'Food')
    expect(screen.queryAllByTestId('expense-item')).toHaveLength(0)
  })
})
