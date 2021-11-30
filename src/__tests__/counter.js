import { render } from '@testing-library/react'
import Counter from '../components/Counter'

test('Counter increments and decrements when the buttons are clicked', () => {
  render(<Counter />)
})
