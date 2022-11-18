import React from "react";

export default function Videos() {
  return (
    <div>
      <div className="ratio ratio-16x9 w-50 m-auto my-4">
        <iframe
          src="https://www.youtube.com/embed/rrq0Zd4Clgk"
          title="YouTube video"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
