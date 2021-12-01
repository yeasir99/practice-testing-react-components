import { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)
  return (
    <div>
      <button onClick={() => setCount(count => count + 1)}>Increment</button>
      <div>Current count {count}</div>
      <button onClick={() => setCount(count => count - 1)}>Decrement</button>
    </div>
  )
}

export default Counter
