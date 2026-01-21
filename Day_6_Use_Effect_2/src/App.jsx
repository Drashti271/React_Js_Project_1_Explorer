import React, { useEffect, useState } from 'react'
import Login from './components/Login'

const App = () => {
  const [count , setCount] = useState(0);
  const [isLogin , setIsLogin] = useState(false);

  useEffect(() => {
    console.log("App Component Mount.");
  },[])

  useEffect(() => {
    console.log("App Component Update");
  }, [count, isLogin]);

  const handleLogin = () => {
    setIsLogin(true);
  }

  console.log("Render...");

  return (
    <>
      <h2>Welcome Developer...</h2>
      <h2>Count : {count}</h2>
      <button type='button' onClick={() => setCount(count + 1)}>Count++</button>
      {!isLogin ? <Login handleLogin={handleLogin}/>  : <h2>Welcome User...</h2>}
    </>
  )
}

export default App
