import { Outlet, Link } from "react-router-dom";
import "../assets/styles/components/Layout.css";
import logo from "../assets/images/MADDMkt_Logo-min.webp";

const Layout = () => {
  return (
    <div>
      <header
        style={{ backgroundColor: "#355c7e", overflow: "hidden" }}
        className="sticky-top"
      >
        <nav className="navbar navbar-expand-md navbar-dark">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
              style={{ justifyContent: "end", border: "2px solid white" }}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <a
              href="https://www.maddmarketingsolutions.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="MaddMarketing Solutions"
            >
              <img
                style={{
                  position: "absolute",
                  top: "-22px",
                  left: "5px",
                  width: "100px",
                  margin: "0 auto",
                }}
                className="logo"
                src={logo}
                alt=""
              ></img>
            </a>
            <div
              style={{ justifyContent: "space-evenly" }}
              className="collapse navbar-collapse "
              id="navbarNav"
            >
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
