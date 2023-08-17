import React from 'react'
import { Link } from "react-router-dom";

const HomeScreen = () => {
  return (
    <>
      <h1 style={{ color: "white" }}>Welcome to home screen</h1>
      <Link to="/login" className="forgetPass"> Sign In</Link>
    </>
  )
}

export default HomeScreen
