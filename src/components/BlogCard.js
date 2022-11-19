import React from "react";

export default function BlogCard({
  link,
  imageSrc,
  imageWidth,
  altText,
  children,
}) {
  return (
    <div className="col-12 col-md-6 col-xl-4 text-center">
      <a href={link} target="_blank" rel="noreferrer">
        <img
          className="my-4"
          src={imageSrc}
          width={imageWidth}
          alt={altText}
        ></img>
      </a>
      <div>{children}</div>
    </div>
  );
}
