import { render, screen, fireEvent } from '@testing-library/react'
import Counter from '../components/Counter'

test('Counter increments and decrements when the buttons are clicked', () => {
  render(<Counter />)

  const message = screen.getByText(/current count/i)
  expect(message).toHaveTextContent('0')

  fireEvent.click(screen.getByRole('button', { name: /increment/i }))
  expect(message).toHaveTextContent('1')

  fireEvent.click(screen.getByRole('button', { name: /decrement/i }))
  expect(message).toHaveTextContent('0')
})
