import Link from "next/link";

function Header(props) {
  return (
    <header className="header-bar bg-primary mb-3">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" href="/">
            POC
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link active" aria-current="page" href="/">
                Home
              </Link>
              <Link className="nav-link" href="/about">
                About
              </Link>
              <Link className="nav-link" href="/contact">
                Contact
              </Link>
              <Link className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">
                Coming Soon
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
