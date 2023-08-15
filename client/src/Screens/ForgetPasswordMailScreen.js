import axios from 'axios';
import '../Assets/css/MailScreen.css';
import { useState } from 'react';


function ForgetPasswordMailScreen(){

  const [link,setLink]=useState('');
  const [email,setEmail]=useState();
  async function submit(e){
    e.preventDefault();
    try{
      console.log(email)
      await axios.post("http://localhost:8000/users/link/",{
        email:email
      }).then(res=>{
       
      })
      .catch(error=>{
        if (error.response) {
          console.log(error.response)
      }
    }
      )
    }
    catch(e){
      console.log("nice");
    }
    
  }
    return (
        <div className="row">
        <h1>Forgot Password</h1>
        <h6 className="information-text">Enter your registered email to reset your password.</h6>
        <div className="form-group">
          <form action='/users/link' method='post' >
          <input type="email" name="email" id="user_email" onChange={(e) => {setEmail(e.target.value)}} />
          <p><label htmlFor="username">Email</label></p>
          <button >reset password</button>
          </form>
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