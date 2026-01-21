import React from 'react'
import Button from './components/button';
import Children from './components/Children';

const App = () => {
  const [count , setCount] = React.useState(0);
  console.log("Render...")
  return (
    <>
      <h2>Hello</h2>
      <h2>Count : {count}</h2>
      <Button onclick={() => setCount(count + 1)}>Increment</Button>
      <Button onclick={() => setCount(count - 1)}>Decrement</Button>
      <hr />
      <Children name={"Drashti"} age={19}/>
    </>
  )
}

export default App
