import '../Assets/css/MailScreen.css';


function ForgetPasswordMailScreen(){
    return (
        <div className="row">
        <h1>Forgot Password</h1>
        <h6 className="information-text">Enter your registered email to reset your password.</h6>
        <div className="form-group">
          <input type="email" name="user_email" id="user_email" />
          <p><label htmlFor="username">Email</label></p>
          <button onclick="showSpinner()">Reset Password</button>
        </div>
        <div className="footer">
          <h5>New here? <a href="#">Sign Up.</a></h5>
          <h5>Already have an account? <a href="#">Sign In.</a></h5>
          <p className="information-text"><span className="symbols" title="Lots of love from me to YOU!">♥ </span><a href="https://www.facebook.com/adedokunyinka.enoch" target="_blank" title="Connect with me on Facebook">Yinka Enoch Adedokun</a></p>
        </div>
      </div>
    )
}

export default ForgetPasswordMailScreen;