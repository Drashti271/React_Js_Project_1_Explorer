import React, { useEffect } from 'react'

const Login = ({handleLogin}) => {

  useEffect(() => {
    console.log("Login Component Mount.");
    return () => {
        console.log("Login Component Unmount.");
    }
  })

  return (
    <>
      <h2>Please Login</h2>
      <button onClick={handleLogin}>Login</button>
    </>
  )
}

export default Login
