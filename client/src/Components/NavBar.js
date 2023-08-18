

function NavBar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark mx-5 px-5">
  <a class="navbar-brand" href="#">SiteAuthenticator</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav ms-auto ">
      <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
      <a class="nav-item nav-link" href="#">Manual</a>
      <a class="nav-item nav-link" href="#">About</a>
      <a class="nav-item nav-link" href="#">Contact</a>
    </div>
  </div>
</nav>
  );
}

export default NavBar;