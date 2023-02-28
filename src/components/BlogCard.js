import React from "react";

export default function BlogCard({ link, imageSrc, altText, children }) {
  return (
    <div style={{ textAlign: "center" }} className="col-12 col-md-6 col-xl-4">
      <a href={link} target="_blank" rel="noreferrer">
        <img
          className="my-4"
          src={imageSrc}
          alt={altText}
          style={{ width: "300px", borderRadius: "10px" }}
        ></img>
      </a>
      <div>{children}</div>
    </div>
  );
}
