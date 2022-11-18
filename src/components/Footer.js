import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div>
      <footer>
        <br></br>
        <p>Stay in touch!</p>
        <br></br>
        <br></br>
        <div className="icon-links">
          <a
            href="https://www.facebook.com/maddmkt"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
          >
            <FontAwesomeIcon className="facebook-icon" icon={faFacebook} />
          </a>
          <a
            href="https://www.instagram.com/maddmkt/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <FontAwesomeIcon className="instagram-icon" icon={faInstagram} />
          </a>
          <a
            href="https://www.youtube.com/channel/UC8EQY_bSQY7Gqvu6ayQ3ajA?app=desktop"
            target="_blank"
            rel="noreferrer"
            aria-label="Youtube"
          >
            <FontAwesomeIcon className="youtube-icon" icon={faYoutube} />
          </a>
        </div>
        <div className="footer-links">
          <a href="/contact" target="_blank" rel="noreferrer">
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
          <small>
            &copy; 2022 MaddMarketing Solutions, LLC. All Rights Reserved.
          </small>
        </p>
      </footer>
    </div>
  );
}
