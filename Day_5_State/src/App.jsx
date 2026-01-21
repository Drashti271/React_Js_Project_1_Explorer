import React from 'react'

const App = () => {
  const [count,setCount] = React.useState(0);
  const handleCount = () => {
    setCount(count + 1)
  }
  console.log(count);
  console.log("Render...");
  return (
    <>
      <h2>Hello React Developer...</h2>
      <h2>Count : {count}</h2>
      <button onClick={handleCount}>Increment</button>
    </>
  )
}

export default App
