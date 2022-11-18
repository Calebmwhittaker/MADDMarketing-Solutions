import React from "react";

export default function Carousel() {
  return (
    <div className="bg-dark w-50 m-auto p-5">
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
          ></li>
          <li
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
          ></li>
          <li
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
          ></li>
          <li
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
          ></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="consultation-stock-photo-min.webp"
              className="d-block w-100"
              alt="1"
            ></img>
          </div>
          <div className="carousel-item">
            <img
              src="web-design-stock-photo-min.webp"
              className="d-block w-100"
              alt="2"
            ></img>
          </div>
          <div className="carousel-item">
            <img
              src="social-media-stock-photo-min.webp"
              className="d-block w-100"
              alt="3"
            ></img>
          </div>
          <div className="carousel-item">
            <img
              src="coaching-stock-photo-min.webp"
              className="d-block w-100"
              alt="3"
            ></img>
          </div>
        </div>
        <a
          className="carousel-control-prev mx-3"
          href="#carouselExampleIndicators"
          role="button"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </a>
        <a
          className="carousel-control-next mx-3"
          href="#carouselExampleIndicators"
          role="button"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </a>
      </div>
    </div>
  );
}
