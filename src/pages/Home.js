import React from "react";
import Footer from "../parts/footer/Footer";
import Grid from "../components/Grid";
import Testimonials from "../components/Testimonials";
import { Outlet, Link } from "react-router-dom";
import "../assets/styles/pages/home.css";

const Home = () => {
  return (
    <div className="home-page-container">
      <main className="home-page">
        <section className="main-title-section">
          <article
            className="main-title-article"
            style={{
              backgroundColor: "#355c7e",
              height: "400px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "linear-gradient(#355c7e, #000000)",
            }}
          >
            <h1
              className="main-title"
              style={{
                textAlign: "center",
                color: "#ffffff",
                fontSize: "50px",
              }}
            >
              MaddMarketing Solutions
            </h1>
          </article>
        </section>
        <section>
          <article className="home-approach" style={{ margin: "90px 0px" }}>
            <h2>Our approach</h2>
            <p>
              We are offering innovative marketing solutions to businesses so
              they can compete with giants one click at a time.
            </p>
          </article>
        </section>
        <section
          className="services-container"
          style={{
            backgroundColor: "#355c7e",
            textAlign: "center",
            width: "100%",
          }}
        >
          <h2
            className="services-title"
            style={{ paddingTop: "25px", color: "white" }}
          >
            Our services
          </h2>
          <Grid />
        </section>
        <section>
          <Testimonials />
          <article
            className="contact-container"
            style={{
              backgroundColor: "#355c7e",
              color: "#ffffff",
              textAlign: "center",
            }}
          >
            <h2
              style={{ paddingTop: "30px", width: "75%", margin: "40px auto" }}
            >
              Get started with MaddMarketing today!
            </h2>
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
    </div>
  );
};

export default Home;
