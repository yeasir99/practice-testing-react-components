import { render, act } from '@testing-library/react'
import { renderHook, act as hookAct } from '@testing-library/react-hooks'
import useCounter from '../components/use-counter'

// old version to test hook

const setup = ({ initialProps } = {}) => {
  const result = {}
  const Testcomponent = props => {
    result.current = useCounter(props)
    return null
  }
  render(<Testcomponent {...initialProps} />)
  return result
}

test('increment and decrement functions', () => {
  const result = setup()
  expect(result.current.state).toBe(0)
  act(() => result.current.increment())
  expect(result.current.state).toBe(1)
  act(() => result.current.decrement())
  expect(result.current.state).toBe(0)
})

test('allow customization initial count', () => {
  const result = setup({ initialProps: { initialCount: 3 } })
  expect(result.current.state).toBe(3)
  act(() => result.current.increment())
  expect(result.current.state).toBe(4)
  act(() => result.current.decrement())
  expect(result.current.state).toBe(3)
})

test('allow customization step', () => {
  const result = setup({ initialProps: { step: 2 } })
  expect(result.current.state).toBe(0)
  act(() => result.current.increment())
  expect(result.current.state).toBe(2)
  act(() => result.current.decrement())
  expect(result.current.state).toBe(0)
})

// new version to test hooks

test('initial value', () => {
  const { result } = renderHook(useCounter)
  expect(result.current.state).toBe(0)
})

test('test increment and decrement Fn', () => {
  const { result } = renderHook(useCounter)
  expect(result.current.state).toBe(0)
  hookAct(() => result.current.increment())
  expect(result.current.state).toBe(1)
  hookAct(() => result.current.decrement())
  expect(result.current.state).toBe(0)
})

test('test initial count customization', () => {
  const { result } = renderHook(useCounter, {
    initialProps: { initialCount: 3 },
  })
  expect(result.current.state).toBe(3)
  hookAct(() => result.current.increment())
  expect(result.current.state).toBe(4)
  hookAct(() => result.current.decrement())
  expect(result.current.state).toBe(3)
})

test('test customization step', () => {
  const { result } = renderHook(useCounter, { initialProps: { step: 2 } })
  expect(result.current.state).toBe(0)
  hookAct(() => result.current.increment())
  expect(result.current.state).toBe(2)
  hookAct(() => result.current.decrement())
  expect(result.current.state).toBe(0)
})
