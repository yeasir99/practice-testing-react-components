import { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)
  return (
    <div>
      <button onClick={() => setCount(count => count + 1)}>+</button>
      <div>{count}</div>
      <button onClick={() => setCount(count => count - 1)}>-</button>
    </div>
  )
}

export default Counter
