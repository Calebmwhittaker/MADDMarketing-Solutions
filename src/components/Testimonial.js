import React from "react";

export default function Testimonial({
  imageSrc,
  imageWidth,
  altText,
  className,
  children,
}) {
  return (
    <div>
      <div className=" testimonial-rows row text-center">
        <div className="col-md-4 col-lg-3 col-xl-2">
          <img
            className={className}
            src={imageSrc}
            width={imageWidth}
            alt={altText}
          ></img>
        </div>
        <div className="col-md-8 col-lg-9 col-xl-10">{children}</div>
      </div>
    </div>
  );
}
