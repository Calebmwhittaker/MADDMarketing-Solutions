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
      className="services-cards card col-sm-12 col-md-5 px-0 mx-auto my-3"
      id={cardId}
    >
      <img src={imageSrc} className="card-img-top" alt={imageAltText}></img>
      <div className="card-body">
        <p className="card-title">{title}</p>
        <div className="card-text">{children}</div>
      </div>
    </div>
  );
}
