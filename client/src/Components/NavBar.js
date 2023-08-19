import "../Assets/css/NavBar.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg px-5 ">
      <a className="nav-item nav-link move" href="#" title="Profile"><i class="fa-solid fa-circle-user fa-2x"></i></a>

      <a className="navbar-brand mx-3" href="#">SiteAuthenticator</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav ms-auto ">
          <a className="nav-item nav-link move" href="#">Home <span className="sr-only">(current)</span></a>
          <a className="nav-item nav-link move" href="#">Manual</a>
          <a className="nav-item nav-link move" href="#">About</a>
          <a className="nav-item nav-link move" href="#">Contact Us</a>
          <a className="nav-item nav-link move" href="#" title="Logout"><i class="fa-solid fa-right-from-bracket"></i></a>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;