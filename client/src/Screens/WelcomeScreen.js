import React from 'react'
import "../Assets/css/WelcomeScreen.css"

import background3 from "../Assets/images/main-bg-0-0.png";
import background1 from "../Assets/images/main-bg-0_1.webp";
import background2 from "../Assets/images/main-bg-1_1.webp";
import background4 from "../Assets/images/main-bg-2_1.webp";
import background5 from "../Assets/images/main-bg-3.png";

import { Link } from "react-router-dom";


const WelcomeScreen = () => {
  return (
    <>
    <div className="welcome">
      <div className="background1">
      <img src={background1} alt="" className="back" />  
      </div>
      <div className="background2">
      <img src={background2} alt="" className="back" />  
      </div>
      <div className="background3">
      <img src={background3} alt="" className="back" />  
      </div>
      <div className="background4">
      <img src={background4} alt="" className="mountain" />  
      </div>
      <div className="background5">
      <img src={background5} alt="" className="horse" />  
      </div>
      <div className='welcomebox'>
        <h1 className='content'>hello</h1>
        <Link to="/login" className='forgetPass'>Sign In / Sign Up</Link>
        
      </div>
      </div>
    </>
  )
}

export default WelcomeScreen
