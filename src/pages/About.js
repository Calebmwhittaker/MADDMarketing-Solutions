import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'

const About = () => {
    return (
    <>
    <main className='about-page'>
        <h1 className='about-title'>MaddMarketing Solutions</h1>
        <br></br>
        <p> We're MaddMarketing Solutions, a digital marketing agency that provides innovative marketing solutions to small businesses.</p>
        <br></br>
        <img className='headshot' src="/headshot.png" alt="Owner of MaddMarketing Solutions"></img>
        <br></br>
        <br></br>
        <p>We were founded by Maddison Godi, who was raised by entrepreneurs. She knows how hard it is to build a business and grow your community, which is why she's committed to helping you do just that.</p>
        <br></br>
        <p>We offer website design, social media, strategy, and more—all with one goal in mind: helping you build an incredible brand that can thrive in today's webosphere.</p>
        <hr className='about-bottom-border'></hr>
        </main>
        <footer>
        <br></br>
        <p>Stay in touch!
        <br></br>
          <div className='icon-links'>
        <a href="https://www.facebook.com/maddmkt" target="_blank" rel="noreferrer"><FontAwesomeIcon className="facebook-icon" icon={faFacebook} /></a>
        <a href="https://www.instagram.com/maddmkt/" target="_blank" rel="noreferrer"><FontAwesomeIcon className="instagram-icon" icon={faInstagram} /></a>
        <a href="https://twitter.com/?lang=en" target="_blank" rel="noreferrer"><FontAwesomeIcon className="twitter-icon" icon={faTwitter} /></a>
        <a href="https://www.youtube.com/channel/UC8EQY_bSQY7Gqvu6ayQ3ajA?app=desktop" target="_blank" rel="noreferrer"><FontAwesomeIcon className="youtube-icon" icon={faYoutube} /></a>
          </div>
        </p>
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

    </>
    );
};

export default About;