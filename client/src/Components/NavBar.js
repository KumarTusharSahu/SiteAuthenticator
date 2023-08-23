import axios, { Axios } from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Link } from "react-router-dom";
import "../Assets/css/NavBar.css"

function NavBar({user}) {
 console.log(user);
  const logout=()=>{
    axios.get("http://localhost:8000/users/sign-out",{
      withCredentials:true,
    }).then((res)=>{
      if(res.data === "success"){
        window.location.href="/users/login"
      }
    })
  }
  return (
    <nav className="navbar navbar-expand-lg px-5 fixed-top">
      <a className="nav-item nav-link move" href="#" title="Profile">{user.avatar ?  <img src={user.avatar} alt="@@" className="userimg" height={44} style={{borderRadius:24}}/> : <i className="fa-solid fa-circle-user fa-2x"></i>}</a>

      <a className="navbar-brand mx-3" href="#" style={{ color: "white" }}>SiteAuthenticator</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav ms-auto ">
          <a className="nav-item nav-link move" href="#">Home <span className="sr-only">(current)</span></a>
          <a className="nav-item nav-link move" href="#">Manual</a>
          <a className="nav-item nav-link move" href="#">About</a>
          <a className="nav-item nav-link move" href="#">Contact Us</a>
          {user.userid?
          <a className="nav-item nav-link move" href="#" onClick={logout} title="Logout"><i className="fa-solid fa-arrow-right-from-bracket"></i></a>:
          <a className="nav-item nav-link move" href="http://localhost:3000/users/login"  title="Sign in">Sign in</a>
          }
        </div>
      </div>
    </nav>
  );
}

export default NavBar;


