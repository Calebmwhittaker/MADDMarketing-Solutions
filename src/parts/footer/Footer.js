import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import "../../assets/styles/parts/footer/Footer.css";

export default function Footer() {
  return (
    <div>
      <footer>
        <p>Stay in touch!</p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            margin: "-40px auto 20px auto",
            width: "300px",
          }}
          className="icon-links"
        >
          <a
            href="https://www.facebook.com/maddmkt"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
          >
            <FontAwesomeIcon
              style={{ color: "#355c7e", height: "25px" }}
              className="facebook-icon"
              icon={faFacebook}
            />
          </a>
          <a
            href="https://www.instagram.com/maddmkt/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <FontAwesomeIcon
              style={{
                backgroundColor: "#355c7e",
                borderRadius: "8px",
                color: "#ffffff",
                width: "25px",
                height: "25px",
              }}
              className="instagram-icon"
              icon={faInstagram}
            />
          </a>
          <a
            href="https://www.youtube.com/channel/UC8EQY_bSQY7Gqvu6ayQ3ajA?app=desktop"
            target="_blank"
            rel="noreferrer"
            aria-label="Youtube"
          >
            <FontAwesomeIcon
              style={{ color: "#355c7e", height: "25px" }}
              className="youtube-icon"
              icon={faYoutube}
            />
          </a>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
          className="footer-links"
        >
          <a
            style={{ width: "fit-content" }}
            href="/contact"
            target="_blank"
            rel="noreferrer"
          >
            Contact us
          </a>
          <a href="/services">Services</a>
          <a
            href="https://www.maddmarketingsolutions.com/blog"
            target="_blank"
            rel="noreferrer"
          >
            Blog
          </a>
        </div>
        <p>
          <small style={{ fontSize: "12px" }}>
            &copy; 2022 MaddMarketing Solutions, LLC. All Rights Reserved.
          </small>
        </p>
      </footer>
    </div>
  );
}
