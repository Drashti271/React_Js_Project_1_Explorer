import React, { useEffect, useState } from 'react'
import Login from './components/Login'
const App = () => {
  const [name, setName] = useState("Drashti");
  const [click, setClick] = useState(0);

  useEffect(()=>{
    console.log("Component Mount.")
  },[])

  useEffect(()=>{
    console.log("Component Update..")
  },[name])

  const handleLogin = () => {
    setName("Admin");
  }

  console.log("Render...");

  return (
    <>
      <h2>Welcome React Developer...</h2>
      {name == "Admin" ? <h2>Welcome {name}</h2> : <Login handleLogin={handleLogin}/>}
      <hr />
      <h2>Click : {click}</h2>
      <button type='button' onClick={() => setClick(click + 1)}>Click</button>
    </>
  )
}

export default App
