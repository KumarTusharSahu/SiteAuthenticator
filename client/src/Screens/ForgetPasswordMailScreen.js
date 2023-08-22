import axios from 'axios';
import '../Assets/css/MailScreen.css';
import forget from "../Assets/images/forget.webp";
import { Link } from "react-router-dom";

import 'animate.css';

function ForgetPasswordMailScreen() {
  return (
    <>
      <div className="backgroundContainer">
        <div className="forgetContainer">
          <img src={forget} alt="vf" className="forgotImg animate__animated animate__slideInLeft" />
          <div className="row animate__animated animate__slideInRight">
            <h1>Forgot Password</h1>
            <h6 className="information-text">Enter your registered email to reset your password.</h6>
            <div className="form-group">
              <form action='/users/link' method='post' >
                <input type="email" name="email" id="user_email" placeholder="Enter your registered Email ID" />
                <p><label htmlFor="username">Email</label></p>
                <button onclick="showSpinner()">Reset Password</button>
              </form>
            </div>
            <div className="footer">
              <h5>New here?  <Link to="/login" className="forgetPass">  Sign Up</Link></h5>
              <h5>Already have an account? <Link to="/login" className="forgetPass"> Sign In</Link></h5>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ForgetPasswordMailScreen;
