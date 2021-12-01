import FavouriteNumber from '../components/FavouriteNumber'
import { render, screen } from '@testing-library/react'
import user from '@testing-library/user-event'

test('renders a number input with a label "Favourite Number"', () => {
  render(<FavouriteNumber />)
  const label = screen.getByText(/favourite number/i)
  expect(label).toHaveTextContent(/favourite number/i)

  const input = screen.getByLabelText(/favourite number/i)
  expect(input).toHaveAttribute('type', 'number')
})

test('invalid value show error message', () => {
  const { rerender } = render(<FavouriteNumber />)
  const input = screen.getByLabelText(/favourite number/i)
  //   fireEvent.change(input, {
  //     target: { value: '10' },
  //   })
  user.type(input, '10')

  expect(screen.getByRole('alert')).toHaveTextContent(/The number is invalid/i)

  rerender(<FavouriteNumber max={10} />)

  expect(screen.queryByRole('alert')).toBeNull()
})
