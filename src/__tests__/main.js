import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'

import { Main, LocationDisplay } from '../components/Main'

test('full app rendering/navigating', () => {
  const history = createMemoryHistory()
  const { debug } = render(
    <Router history={history}>
      <Main />
    </Router>,
  )
  expect(screen.getByText(/you are home/i)).toBeInTheDocument()
  debug()

  // -------------->>> there is problem    <<<---------------
  // -------------->>> COME BACK AND FIX IT <<< -------------

  const leftClick = { button: 0 }
  userEvent.click(screen.getByText(/about/i), leftClick)

  debug()
  expect(screen.getByText(/no match/i)).toBeInTheDocument()
})

test('landing on a bad page', () => {
  const history = createMemoryHistory()
  history.push('/some/bad/route')
  render(
    <Router history={history}>
      <Main />
    </Router>,
  )

  expect(screen.getByText(/no match/i)).toBeInTheDocument()
})

test('landing on about page', () => {
  const history = createMemoryHistory()
  history.push('/about')
  render(
    <Router history={history}>
      <Main />
    </Router>,
  )

  expect(screen.getByText(/You are on the about page/i)).toBeInTheDocument()
})

test('rendering a component that uses useLocation', () => {
  const history = createMemoryHistory()
  const route = '/some-route'
  history.push(route)
  render(
    <Router history={history}>
      <LocationDisplay />
    </Router>,
  )

  expect(screen.getByTestId('location-display')).toHaveTextContent(route)
})
