import React from 'react'
import { useNavigate } from 'react-router-dom'

const ErrorScreen = () => {
    const navigate = useNavigate();

    const home = () => {
        navigate("/home")
    }
  return (
    <>
      <h1>Oops!</h1>
      <h3>404 - Page not found</h3>
      <button onClick={home}>Back to home</button>
    </>
  )
}

export default ErrorScreen
