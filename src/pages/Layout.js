import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
    <header class="sticky-top">
      <nav>
      <a
          href="https://www.maddmarketingsolutions.com/"
          target="_blank"
          rel="noreferrer"
        >
          <img className="logo" src="MADDMkt_Logo.png" alt=""></img>
        </a>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      </header>

      <Outlet />
    </>
  );
};

export default Layout;
