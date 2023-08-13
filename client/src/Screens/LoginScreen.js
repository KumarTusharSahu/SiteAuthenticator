import React, { useState } from "react";
import '../Assets/css/style.css';
import axios from "axios";

import Background from "../Components/Background"

function LoginScreen() {

    const [isSignUpMode, setIsSignUpMode] = useState(false);

    const handleSignUpClick = () => {
        setIsSignUpMode(true);
    }

    const handleSignInClick = () => {
        setIsSignUpMode(false);
    }
    const handleSigiIn = async () =>{
     const response=await axios.get('http://localhost:8000/'); 
     console(response.data)
    }
    
  return (
    <>
    
      <Background/>
  
    <div className={`container ${isSignUpMode ? 'sign-up-mode' : ''}`}>
      <div className="forms-container">
        <div className="signin-signup">
          <form action="/create-session" className="sign-in-form" method="post">
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <i className="fas fa-user" />
              <input type="email" placeholder="Username" name="email"/>
            </div>
            <div className="input-field">
              <i className="fas fa-lock" />
              <input type="password" placeholder="Password" name="password"/>
            </div>
            <input type="submit" defaultValue="Login" className="btn solid" />
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
          <form action="/create" className="sign-up-form" method="POST">
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <i className="fas fa-user" />
              <input type="text" placeholder="Username" name="name"/>
            </div>
            <div className="input-field">
              <i className="fas fa-envelope" />
              <input type="email" placeholder="Email" name="email"/>
            </div>
            <div className="input-field">
              <i className="fas fa-lock" />
              <input type="password" placeholder="Password" name="password" />
            </div>
            <input type="submit" className="btn" defaultValue="Sign up" />
            <p className="social-text">Or Sign up with social platforms</p>
            <div className="social-media">
            
             
              <a href="http://localhost:8000/users/auth/google" className="social-icon">
                <i className="fab fa-google" />
              </a>
              <a href="http://localhost:8000/users/auth/github" className="social-icon">
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
            <button className="btn transparent" id="sign-up-btn" onClick={handleSignUpClick} >
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
            <button className="btn transparent" id="sign-in-btn" onClick={handleSignInClick}>
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