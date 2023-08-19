import React from 'react'
import { Link } from "react-router-dom";
import Footer from '../Components/Footer';
import NavBar from '../Components/NavBar';

import "../Assets/css/HomeScreen.css"

const HomeScreen = () => {
  return (
    <>
      <NavBar />
      <div className='HomeScreenContent'
      >
        {/* <div className="homemain">
        <div className="homecontent">
          <h1 className="anim">Stock Photos</h1>
          <p className="anim">Beautiful, free images and photos that you can download and use for any project. <br /> than any royalty free or stock photos.</p>
          <div className="links anim">
            <button><span></span>Free Images</button>
            <button><span></span>Image API</button>
          </div>
        </div>
      </div> */}
        <h1 className="anim" style={{ color: "white" }}>Welcome to home screen</h1>
        <Link to="/login" className="forgetPass links anim"> Sign In</Link>
        <div className="links anim">
        <div className="homecontent">
          <button><span></span>Free Images</button>
          <button><span></span>Image API</button>
          </div>
        </div>
      </div>
      <Footer />


    </>
  )
}

export default HomeScreen
