import axios, { Axios } from "axios";
import "../Assets/css/NavBar.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Link } from "react-router-dom";

function NavBar() {

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
    <nav className="navbar navbar-expand-lg px-5 ">
      <a className="nav-item nav-link move" href="#" title="Profile"><i class="fa-solid fa-circle-user fa-2x"></i></a>

      <a className="navbar-brand mx-3" href="#"  style={{ color: "white" }}>SiteAuthenticator</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav ms-auto ">
          <a className="nav-item nav-link move" href="#" style={{color:"white"}}>Home <span className="sr-only">(current)</span></a>
          <a className="nav-item nav-link move" href="#" style={{color:"white"}}>Manual</a>
          <a className="nav-item nav-link move" href="#"style={{color:"white"}}>About</a>
          <a className="nav-item nav-link move" href="#" style={{color:"white"}}>Contact Us</a>
          <Link onClick={logout}>LogOut</Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;