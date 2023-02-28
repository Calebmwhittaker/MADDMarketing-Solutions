import React from "react";
import { Link, Outlet } from "react-router-dom";
import "../assets/styles/components/Grid.css";
import websiteDesign from "../assets/images/1.webp";
import socialMedia from "../assets/images/3.webp";
import strategy from "../assets/images/2.webp";
import coaching from "../assets/images/4.webp";

export default function Grid() {
  return (
    <div className="services">
      <div className="row m-0">
        <div className="col col-lg-6 col-xl-3">
          <img
            className="services-images"
            src={websiteDesign}
            alt="Website Design"
          ></img>
          <p>Website Design</p>
        </div>
        <div className="col col-lg-6 col-xl-3">
          <img
            className="services-image"
            src={socialMedia}
            alt="Social Media"
          ></img>
          <p>Social Media</p>
        </div>
        <div className="col col-lg-6 col-xl-3">
          <img className="services-image" src={strategy} alt="Strategy"></img>
          <p>Strategy</p>
        </div>
        <div className="col col-lg-6 col-xl-3">
          <img className="services-image" src={coaching} alt="Coaching"></img>
          <p>Coaching</p>
        </div>
        <div className="learn-more col-12" style={{ padding: "20px 0px" }}>
          <Link
            to="/services"
            className="services-button nav-link btn"
            style={{
              display: "inline-block",
            }}
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
