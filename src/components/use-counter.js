import React from 'react'

const useCounter = ({ initialCount = 0, step = 1 } = {}) => {
  const [state, setState] = React.useState(initialCount)
  const increment = () => setState(count => count + step)
  const decrement = () => setState(count => count - step)
  return {
    state,
    increment,
    decrement,
  }
}

export default useCounter
