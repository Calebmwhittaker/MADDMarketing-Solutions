import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  return (
    <div>
        <footer>
        <br></br>
        <p>Stay in touch!</p>
        <br></br>
        <br></br>
          <div className='icon-links'>
        <a href="https://www.facebook.com/maddmkt" target="_blank" rel="noreferrer"><FontAwesomeIcon className="facebook-icon" icon={faFacebook} /></a>
        <a href="https://www.instagram.com/maddmkt/" target="_blank" rel="noreferrer"><FontAwesomeIcon className="instagram-icon" icon={faInstagram} /></a>
        <a href="https://twitter.com/?lang=en" target="_blank" rel="noreferrer"><FontAwesomeIcon className="twitter-icon" icon={faTwitter} /></a>
        <a href="https://www.youtube.com/channel/UC8EQY_bSQY7Gqvu6ayQ3ajA?app=desktop" target="_blank" rel="noreferrer"><FontAwesomeIcon className="youtube-icon" icon={faYoutube} /></a>
          </div>
        <div className="footer-links">
        <a
          href="https://www.maddmarketingsolutions.com/contact"
          target="_blank"
          rel="noreferrer"
        >
          Contact us
        </a>
        <br></br>
        <a
          href="https://www.maddmarketingsolutions.com/services"
          target="_blank"
          rel="noreferrer"
        >
          Services
        </a>
        <br></br>
        <a
          href="https://www.maddmarketingsolutions.com/blog"
          target="_blank"
          rel="noreferrer"
        >
          Blog
        </a>
      </div>
      </footer>
    </div>
  )
}
