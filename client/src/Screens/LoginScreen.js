import React, { useEffect, useState } from "react";
import '../Assets/css/style.css';

import Background from "../Components/Background"
import { Link } from "react-router-dom";
import axios from "axios";




function LoginScreen() {
  const [user, setUser] = useState("")

  useEffect(()=>{
    const login=()=>{

      axios.get("http://localhost:8000/users/login",{
       withCredentials:true
      }).then((res)=>{
       if(res.data === "home")
       {
        setUser("home")
       }
       else{
        setUser("login")
       }
      })
    }
    login();
  },[])

  if(user === "home"){
    window.location.href="/users/home"
  }
 


 
 
  /*const login = ()=>{
    axios.post("http://localhost:8000/users/create-session",{
        email:email,
        password:password
  },{
    withCredentials:true
  }).then((res)=>{
     if(res.data === "success"){
      window.location.href = "/users/home"
     }
  });
  }*/

  const [isSignUpMode, setIsSignUpMode] = useState(false);

  const handleSignUpClick = () => {
    setIsSignUpMode(true);
  }

  const handleSignInClick = () => {
    setIsSignUpMode(false);
  }


  return (
    <>

      <Background entered={false} />

      <div className={`container ${isSignUpMode ? 'sign-up-mode' : ''}`}>
        <div className="forms-container">
          <div className="signin-signup">
            <form  className="sign-in-form" method="post" action="/users/create-session">
              <h2 className="title">Sign in</h2>
              <div className="input-field">
                <i className="fas fa-envelope" />
                <input type="email" placeholder="Email" name="email" />
              </div>
              <div className="input-field">
                <i className="fas fa-lock" />
                <input type="password" placeholder="Password" name="password" />
              </div>
              <input type="submit" defaultValue="Login" className="btn1 solid" />
              <Link to="/users/forgetmail" className="forgetPass">Forgot password?</Link>
              <p className="social-text">Or Sign in with social platforms</p>
              <div className="social-media">


                <a href="http://localhost:8000/users/auth/google" className="social-icon">
                  <i className="fab fa-google" />
                </a>
                <a href="http://localhost:8000/users/auth/github" className="social-icon">
                  <i className="fab fa-github" />
                </a>
              </div>
            </form>
            <form action="/users/create" className="sign-up-form" method="POST">
              <h2 className="title">Sign up</h2>
              <div className="input-field">
                <i className="fas fa-user" />
                <input type="text" placeholder="Username" name="name" />
              </div>
              <div className="input-field">
                <i className="fas fa-envelope" />
                <input type="email" placeholder="Email" name="email" />
              </div>
              <div className="input-field">
                <i className="fas fa-lock" />
                <input type="password" placeholder="Password" name="password" />
              </div>
              <input type="submit" className="btn1" defaultValue="Sign up" />
              <p className="social-text">Or Sign up with social platforms</p>
              <div className="social-media">


                <a href="/users/auth/google" className="social-icon">
                  <i className="fab fa-google" />
                </a>
                <a href="/users/auth/github" className="social-icon">
                  <i className="fab fa-github" />
                </a>
              </div>
            </form>
          </div>
        </div>
        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h3>New here ?</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
                ex ratione. Aliquid!
              </p>
              <button className="btn1 transparent" id="sign-up-btn" onClick={handleSignUpClick} >
                Sign up
              </button>
            </div>
            <img src="images/log.svg" className="image" alt="" />
          </div>
          <div className="panel right-panel">
            <div className="content">
              <h3>One of us ?</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                laboriosam ad deleniti.
              </p>
              <button className="btn1 transparent" id="sign-in-btn" onClick={handleSignInClick}>
                Sign in
              </button>
            </div>
            <img src="images/register.svg" className="image" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}


export default LoginScreen;