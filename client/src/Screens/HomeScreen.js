import React from 'react'
import { Link } from "react-router-dom";
import Footer from '../Components/Footer';
import NavBar from '../Components/NavBar';

import "../Assets/css/HomeScreen.css"

import blocklist from "../Assets/images/grid/blockedlist.svg"
import focusmode from "../Assets/images/grid/focusmode.svg"
import passwordprotection from "../Assets/images/grid/passwordprotection.svg"
import schedule from "../Assets/images/grid/schedule.svg"

const HomeScreen = () => {
  return (
    <>
    <NavBar />
      <div className="home">
        
        <div className='HomeScreenContent'>
          <h1 className="anim" style={{ color: "white" }}>Welcome to home screen</h1>
          <Link to="/login" className="forgetPass links anim"> Sign In</Link>
          <div className="links anim">
            <div className="homecontent">
              <button><span></span>Free Images</button>
              <button><span></span>Image API</button>
            </div>
          </div>
          
        </div>
        <div className='gridHeading'>
        <h1>Your Productivity Tools</h1>
        <p>Check the features SiteAuthenticator offers to help improve your productivity, stay focused, and avoid distractions</p>
        </div>
        <div className="gridContainer">
            <div>
              <img src={blocklist} alt="" />
              <h1>Block List</h1>
              <p>No limit to the sites and apps you can block</p>
            </div>
            <div>
              <img src={focusmode} alt="" />
              <h1>Focus Mode</h1>
              <p>Prevent all distractions within a set amount of time</p>
            </div>
            <div>
              <img src={schedule} alt="" />
              <h1>Schedule</h1>
              <p>Block all your distractions during the hours you choose</p>
            </div>
            <div>
              <img src={passwordprotection} alt="" />
              <h1>Password Protection</h1>
              <p>When you’re tempted to change your settings, you’ll have to enter your password</p>
            </div>
          </div>
        <Footer />

      </div>
      
    </>
  )
}

export default HomeScreen


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
