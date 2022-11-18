import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <>
      <h1>Contact Us.</h1>
      <p>maddmarketingsolutions@gmail.com</p>
      <p>(989) 385-1188</p>
      <div>
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
    </>
  );
};

export default Contact;
