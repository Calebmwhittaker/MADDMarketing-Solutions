import React from "react";

export default function Videos({ videoSrc, title }) {
  return (
    <div>
      <div className="ratio ratio-16x9 w-50 m-auto my-4">
        <iframe src={videoSrc} title={title} allowFullScreen></iframe>
      </div>
    </div>
  );
}
