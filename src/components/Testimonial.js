import React from "react";

export default function Testimonial({
  imageSrc,
  altText,
  className,
  children,
  imageWidth,
}) {
  return (
    <div>
      <div className="testimonial-rows row">
        <div
          style={{
            margin: "20px 0px 25px 0px",
            textAlign: "center",
          }}
          className="col-md-4 col-lg-3 col-xl-2"
        >
          <img
            className={className}
            src={imageSrc}
            alt={altText}
            style={{ width: imageWidth }}
          ></img>
        </div>
        <div className="col-md-8 col-lg-9 col-xl-10">{children}</div>
      </div>
    </div>
  );
}
