import { Outlet, Link } from "react-router-dom";



const Layout = () => {
  return (
    <>
    <header class="sticky-top">
    <nav class="navbar navbar-expand-sm navbar-dark col-md-9 col-lg-9">
  <div class="container-fluid">
  <a
          href="https://www.maddmarketingsolutions.com/"
          target="_blank"
          rel="noreferrer"
        >
          <img className="logo" src="MADDMkt_Logo.png" alt=""></img>
        </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse " id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link to="/" class="nav-link active" aria-current="page" href="#">Home</Link>
        </li>
        <li class="nav-item">
        <Link to="/about" class="nav-link" href="#">About</Link> 
        </li>
        <li class="nav-item">
        <Link to="/blog" class="nav-link" href="#">Blog</Link>
        </li>
        <li class="nav-item">
        <Link to="/contact" class="nav-link" href="#">Contact</Link>
        </li>
      </ul>
    </div>
  </div>
    </nav>
      </header>
      
      <Outlet />
    </>
  );
};

export default Layout;
