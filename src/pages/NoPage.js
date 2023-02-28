// import Carousel from "../components/Carousel";
import { Outlet, Link } from "react-router-dom";
import Footer from "../parts/footer/Footer";
import ferret from "../assets/images/Ferret.png";

const NoPage = () => {
  return (
    <div
      style={{ margin: "10px auto", textAlign: "center" }}
      className="noPage-page"
    >
      <h1>404 Error</h1>
      <img
        style={{ marginLeft: "-15%", width: "50%" }}
        src={ferret}
        alt="Ferret"
        className="ferret"
      ></img>
      <h2>Oops! This page does not exist.</h2>
      <Link
        to="/"
        aria-current="page"
        href="#"
        className="btn btn-dark text-light mt-4"
      >
        Go Home
      </Link>
      <hr style={{ margin: "30px auto auto auto", width: "80%" }}></hr>
      <Footer />
      <Outlet />
    </div>
  );
};

export default NoPage;
