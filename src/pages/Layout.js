import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <header className="sticky-top">
        <nav className="navbar navbar-expand-sm navbar-dark">
          <div className="container-fluid">
            <a
              href="https://www.maddmarketingsolutions.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="MaddMarketing Solutions"
            >
              <img className="logo" src="MADDMkt_Logo-min.webp" alt=""></img>
            </a>
            <button
              className="navbar-toggler justify-content-end"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link
                    to="/"
                    className="nav-link active"
                    aria-current="page"
                    href="#"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/about" className="nav-link" href="#">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/services" className="nav-link" href="#">
                    Services
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/blog" className="nav-link" href="#">
                    Blog
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact" className="nav-link" href="#">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <Outlet />
    </div>
  );
};

export default Layout;
