import '../Assets/css/ResetScreen.css'
import reset from "../Assets/images/reset.png"
import 'animate.css';
import { Link } from "react-router-dom";

function ForgetPasswordResetPasswordScreen() {
  return (
    <div className="resetContainer">
      <img src={reset} alt="Reset Password" className="resetImage animate__animated animate__bounceIn" />
      <div className="resetRow animate__animated animate__slideInRight">
        <div className="col-sm-12">
          <div className="horizontal-container">

            <div className="horizontal-form-box">
              <div className="horizontal-info-container text-center">
                {/* <img src="https://static.stayjapan.com/assets/top/icon/values-7dd5c8966d7a6bf57dc4bcd11b2156e82a4fd0da94a26aecb560b6949efad2be.svg" /> */}
                <p className="horizontal-heading">Reset your password</p>
                <p className="horizontal-subtitle">
                  Your password needs to be at least 8 characters.
                </p>
              </div>
              <form className="horizontal-form" method='post' action=''>
                <div className="o3-form-group">
                  <label htmlFor="new_password" className='inputTitle'>New password</label>
                  <input
                    type="password"
                    className="o3-form-control o3-input-lg textfield"
                    id="new_password"
                name='password'
                  />
                </div>
                <div className="o3-form-group">
                  <label htmlFor="confirm_password" className='inputTitle'>Confirm new password</label>
                  <input
                    type="password"
                    className="o3-form-control o3-input-lg textfield"
                    id="confirm_password"
                name='password2'
                  />
                </div>
                <button className="o3-btn o3-btn-primary o3-btn-block setPass btnr btn-color btn-l-r">
                  Set new password
                </button>
              </form>
              <Link to="/" className="forgetPass">Sign In</Link>

            </div>
          </div>
        </div>
      </div>
    </div>

    )
}

export default ForgetPasswordResetPasswordScreen;