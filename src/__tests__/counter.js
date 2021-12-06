import React from 'react'
import ReactDOM from 'react-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import Counter from '../components/Counter'

// without using @testing-library/react
// old version

test('test Counter', () => {
  const div = document.createElement('div')
  document.body.appendChild(div)
  ReactDOM.render(<Counter />, div)

  const [increment, decrement] = div.querySelectorAll('button')
  const message = div.firstChild.querySelector('div')

  expect(message.textContent).toBe('Current count 0')

  increment.click()
  expect(message.textContent).toBe('Current count 1')

  decrement.click()
  expect(message.textContent).toBe('Current count 0')

  div.remove()
})

// Using @testing-library/react
// new version

test('Counter increments and decrements when the buttons are clicked', () => {
  render(<Counter />)

  const message = screen.getByText(/current count/i)
  expect(message).toHaveTextContent('0')

  fireEvent.click(screen.getByRole('button', { name: /increment/i }))
  expect(message).toHaveTextContent('1')

  fireEvent.click(screen.getByRole('button', { name: /decrement/i }))
  expect(message).toHaveTextContent('0')
})
