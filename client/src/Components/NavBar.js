import "../Assets/css/NavBar.css"

function NavBar() {
  return (
    <nav class="navbar navbar-expand-lg my-3 ">
      <a class="navbar-brand" href="#">SiteAuthenticator</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav ms-auto ">
          <a class="nav-item nav-link move" href="#">Home <span class="sr-only">(current)</span></a>
          <a class="nav-item nav-link move" href="#">Manual</a>
          <a class="nav-item nav-link move" href="#">About</a>
          <a class="nav-item nav-link move" href="#">Contact Us</a>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;