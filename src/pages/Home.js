import React from 'react'
import Footer from '../components/Footer';
import Grid from '../components/Grid';

const Home = () => {
  return (
    <>
      <script src=""></script>
      <div className="main-title">
        <h1>MaddMarketing Solutions</h1>
      </div>
      <main>
        <div className="home-approach">
        <h2>Our approach</h2>
        <p>
          We are offering innovative marketing solutions to businesses so they
          can compete with giants one click at a time.
        </p>
        </div>
        <div className="services-container">
        <h2>Our services</h2>
        <Grid />
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
          <img src="THLogo.png" alt="Total Health Logo" className="rounded-circle"></img>
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
      <Footer />
    </>
  );
};

export default Home;
