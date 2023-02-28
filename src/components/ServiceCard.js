import React from "react";

export default function ServiceCard({
  title,
  imageSrc,
  imageAltText,
  cardId,
  children,
}) {
  return (
    <div
      className="services-cards card col-sm-12 col-md-5"
      style={{ width: "300px", padding: "0px", margin: "20px auto" }}
      id={cardId}
    >
      <img
        src={imageSrc}
        className="card-img-top"
        style={{ display: "inline-block" }}
        alt={imageAltText}
      ></img>
      <div className="card-body">
        <p className="card-title" style={{ fontSize: "20px" }}>
          {title}
        </p>
        <div className="card-text" style={{ fontSize: "1.1rem" }}>
          {children}
        </div>
      </div>
    </div>
  );
}
