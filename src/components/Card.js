import React from "react";

export default function Card({
  title,
  imageSrc,
  imageAltText,
  cardId,
  children,
}) {
  return (
    <div className="services-cards card col-sm-6 col-lg-3 px-0" id={cardId}>
      <img src={imageSrc} className="card-img-top" alt={imageAltText}></img>
      <div className="card-body">
        <p className="card-title">{title}</p>
        <div className="card-text">{children}</div>
      </div>
    </div>
  );
}
