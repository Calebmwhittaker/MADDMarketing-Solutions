import React from "react";
import Footer from "../components/Footer";
import Grid from "../components/Grid";
import Testimonials from "../components/Testimonials";
import { Outlet, Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <main>
        <section>
          <article className="main-title">
            <h1>MaddMarketing Solutions</h1>
          </article>
        </section>
        <section>
          <article className="home-approach">
            <h2>Our approach</h2>
            <p>
              We are offering innovative marketing solutions to businesses so
              they can compete with giants one click at a time.
            </p>
          </article>
        </section>
        <section className="services-container">
          <h2 className="pt-4 text-light">Our services</h2>
          <Grid />
        </section>
        <section>
          <Testimonials />
          <article className="contact-container">
            <h2>Get started with MaddMarketing today!</h2>
            <Link
              to="/contact"
              className="contact-us-button nav-link btn d-inline-block mb-3"
              href="#"
            >
              Contact Us
            </Link>
          </article>
        </section>
      </main>
      <Footer />
      <Outlet />
    </>
  );
};

export default Home;
