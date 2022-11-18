// import Carousel from "../components/Carousel";
import { Outlet, Link } from "react-router-dom";
import Footer from "../components/Footer";

const NoPage = () => {
  return (
    <div className="noPage-page">
      <h1>404 Error</h1>
      <img src="ferret.png" alt="Ferret" className="w-50"></img>
      <h2>Oops! This page does not exist.</h2>
      <Link
        to="/"
        aria-current="page"
        href="#"
        className="btn btn-dark text-light"
      >
        Go Home
      </Link>
      <hr className="m-auto mt-5"></hr>
      {/* <Carousel /> */}
      <Footer />
      <Outlet />
    </div>
  );
};

export default NoPage;
