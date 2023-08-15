import '../Assets/css/MailScreen.css';
import forget from "../Assets/images/forget.webp";
import 'animate.css';


function ForgetPasswordMailScreen() {
  return (
    <>
      <div className="forgetContainer">
        <img src={forget} alt="vf" className="forgotImg animate__animated animate__slideInLeft" />
        <div className="row animate__animated animate__slideInRight">
          <h1>Forgot Password</h1>
          <h6 className="information-text">Enter your registered email to reset your password.</h6>
          <div className="form-group">
            <input type="email" name="user_email" id="user_email" placeholder="Enter your registered Email ID" />
            <p><label htmlFor="username">Email</label></p>
            <button onclick="showSpinner()">Reset Password</button>
          </div>
          <div className="footer">
            <h5>New here?  <a href="#"> Sign Up.</a></h5>
            <h5>Already have an account?  <a href="#"> Sign In.</a></h5>
          </div>
        </div>
      </div>
    </>
  )
}

export default ForgetPasswordMailScreen;
