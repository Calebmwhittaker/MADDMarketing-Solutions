import React from "react";
import firstMission from "../assets/images/services-first-stock-photo-min.webp";
import secondMission from "../assets/images/services-second-stock-photo-min.webp";

export default function MissionCards() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col col-12">
            <img
              className="services-first-image"
              src={firstMission}
              alt=""
              style={{
                marginTop: "30px",
                borderRadius: "10px",
                width: "300px",
              }}
            ></img>
            <h2>Grow your business</h2>
            <p>
              Having a presence online today is crucial. When your business is
              online, it makes it much easier for customers to find you. Most
              people turn to the internet when searching for a product or
              service. We help you grow your audience by being accessible online
              through websites and social media.
            </p>
          </div>
          <div className="col col-12">
            <img
              className="services-second-image"
              src={secondMission}
              alt=""
              style={{
                marginTop: "30px",
                borderRadius: "10px",
                width: "300px",
              }}
            ></img>
            <h2>Keep customers involved</h2>
            <p>
              It’s essential for businesses to share information with current
              and future customers. They want to know your story, view new
              products, and keep in touch for a more personalized experience.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
