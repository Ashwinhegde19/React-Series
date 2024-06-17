import { useState } from 'react'



function App() {
  const [count, setCount] = useState(8)


const addValue = () => {
 setCount(count + 1)
}

const removeValue = () => {
  setCount(count - 1)
 }

  return (
    <>
    <div>
      <h1>Counter App</h1>
      <p>Count: {count}</p>
      <button onClick={addValue}>Increment {count}</button>
      <button onClick={removeValue}>Decrement {count}</button>
    </div>
    </>
  )
}

export default App
