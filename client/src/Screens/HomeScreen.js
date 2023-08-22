import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import Footer from '../Components/Footer';
import NavBar from '../Components/NavBar';

import "../Assets/css/HomeScreen.css"
import axios from 'axios';




const HomeScreen = () => {
  const[userData,setUserData]=useState();
 /* useEffect(()=>{
    axios.get("http://localhost:8000/users/home",{
      withCredentials:true
    }).then((res)=>{
      console.log(res.data);
    })
},[])*/

  return (
    <>
    <div className="home">
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
        <Link to="http://localhost:8000/users/login" className="forgetPass links anim"> Sign In</Link>
        <div className="links anim">
        <div className="homecontent">
          <button><span></span>Free Images</button>
          <button><span></span>Image API</button>
          </div>
        </div>
      </div>
      <Footer />

</div>
    </>
  )
}

export default HomeScreen
