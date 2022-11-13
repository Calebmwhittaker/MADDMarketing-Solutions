import React from 'react'
import Carousel from '../components/Carousel';
import Footer from '../components/Footer';
import Grid from '../components/Grid';
import Testimonials from '../components/Testimonials';

const Home = () => {
  return (
    <>
      <script src=""></script>
      <div className="main-title">
        <h1>MaddMarketing Solutions</h1>
      </div>
      <Carousel />
      <main>
        <div className="home-approach">
        <h2>Our approach</h2>
        <p>
          We are offering innovative marketing solutions to businesses so they
          can compete with giants one click at a time.
        </p>
        </div>
        <div className="services-container">
        <h2 className='pt-4'>Our services</h2>
        <Grid />
        <div className="learnMore">
        <button className="btn">
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
        <Testimonials />
        <div className="contact-container">
          <h2>Get started with MaddMarketing today!</h2>
          <button className='btn'><a href="https://www.maddmarketingsolutions.com/contact" target="_blank" rel="noreferrer">Contact Us</a></button>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
