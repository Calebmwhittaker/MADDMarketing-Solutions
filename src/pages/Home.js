import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'

const Home = () => {
  return (
    <>
      <script src=""></script>
      <div className="main-title">
        <h1>MaddMarketing Solutions</h1>
      </div>
      <main>
        <h2>Our approach</h2>
        <p>
          We are offering innovative marketing solutions to businesses so they
          can compete with giants one click at a time.
        </p>
        <div className="services-container">
        <h2>Our services</h2>
        <div className="services">
          <div className="webDesign">
            <img src="computer_image.png" alt="Website Design"></img>
            <p>Website Design</p>
          </div>
          <div className="socialMedia">
            <img src="social_media_image.png" alt="Social Media"></img>
            <p>Social Media</p>
          </div>
          <div className="strategy">
            <img src="lightbulb_image.png" alt="Strategy"></img>
            <p>Strategy</p>
          </div>
          <div className="coaching">
            <img src="coaching_image.png" alt="Coaching"></img>
            <p>Coaching</p>
          </div>
        </div>
        <div className="learnMore">
        <button>
            <a
              href="https://www.maddmarketingsolutions.com/services"
              target="_blank"
              rel="noreferrer"
            >
              Our Services
            </a>
          </button>
          </div>
        </div>
        <div className="testimonials-container">
        <br></br>
          <br></br>
          <br></br>
          <img src="DIGCafe.png" alt="Dig Cafe Logo"></img>
          <p>
            Kennedy: Owner of {" "}
            <a
              href="https://www.dig-cafe.com/"
              target="_blank"
              rel="noreferrer"
            >
              The Dig Cafe
            </a>
          </p>
          <p>“Working with Maddison from MADDMarketing Solutions has been such a great experience for my business. Maddison created a website on our preferred platform very quickly and it looks great! She has been easy to work with and if there is anything that I need help with or if the website needs any modifications, she is willing to help and fix it in a timely manner. I would recommend MADDMarketing Solutions to any business looking for a great website, marketing tips, and someone willing to go the extra step to make sure that your specific needs are met!</p>
          <br></br>
          <br></br>
          <br></br>
          <img src="TLD.png" alt="TLD Holdings Logo"></img>
          <br></br>
          <br></br>
          <p>
            Andrea: President of{" "}
            <a
              href="https://www.tldholdings.co/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              TLD Holdings
            </a>
          </p>
          <p>“Maddison from MADDMarketing Solutions LLC is wonderful to work with! She created our website and manages our social media platforms which has saved me time from worrying about social media. MADDMarketing is fast, efficient, and very organized. Maddison will find a way to represent your brand the best possible way for you!!!”</p>
          <br></br>
          <br></br>
          <br></br>
          <img src="THLogo.png" alt="Total Health Logo" class="rounded-circle"></img>
          <br></br>
          <br></br>
          <p>
            Jenna: Owner of{" "}
            <a
              href="https://www.instagram.com/thcertifiedcoaching/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Total Health Certified Coaching
            </a>
          </p>
          <p>“Opening a small business has been super overwhelming and marketing has been so hard for me to keep up. Working with Maddison has been like taking a huge weight off my shoulders. She keeps my social media going even when I can't and always provides quality content that keeps my business going.”</p>
          <br></br>
          <br></br>
          <br></br>
        </div>
        <div className="contact-container">
          <h2>Get started with MaddMarketing today!</h2>
          <button><a href="https://www.maddmarketingsolutions.com/contact" target="_blank" rel="noreferrer">Contact Us</a></button>
        </div>
      </main>
      <footer>
        <br></br>
        <p>Stay in touch!
        <br></br>
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

export default Home;
