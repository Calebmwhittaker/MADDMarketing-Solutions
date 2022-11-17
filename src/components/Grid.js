import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Grid() {
  return (
    <div className="services">
      <div className="row">
        <div className="col col-lg-6 col-xl-3">
          <img
            className="my-4"
            width="300px"
            src="1.webp"
            alt="Website Design"
          ></img>
          <p>Website Design</p>
        </div>
        <div className="col col-lg-6 col-xl-3">
          <img
            className="my-4"
            width="300px"
            src="3.webp"
            alt="Social Media"
          ></img>
          <p>Social Media</p>
        </div>
        <div className="col col-lg-6 col-xl-3">
          <img className="my-4" width="300px" src="2.webp" alt="Strategy"></img>
          <p>Strategy</p>
        </div>
        <div className="col col-lg-6 col-xl-3">
          <img className="my-4" width="300px" src="4.webp" alt="Coaching"></img>
          <p>Coaching</p>
        </div>
        <div className="learnMore col-12 py-3">
          <Link
            to="/services"
            className="services-button nav-link btn d-inline-block"
            href="#"
          >
            Our Services
          </Link>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
