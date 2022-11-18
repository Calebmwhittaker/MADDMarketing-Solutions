import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <main className="about-page">
        <section className="about-section">
          <h1 className="about-title">MaddMarketing Solutions</h1>
          <p className="col-12 col-md-8">
            {" "}
            We're MaddMarketing Solutions, a digital marketing agency that
            provides innovative marketing solutions to small businesses.
          </p>
          <img
            className="headshot mb-4 rounded-circle"
            src="/headshot.webp"
            alt="Owner of MaddMarketing Solutions"
          ></img>
          <p className="col-12 col-md-8">
            We were founded by Maddison Godi, who was raised by entrepreneurs.
            She knows how hard it is to build a business and grow your
            community, which is why she's committed to helping you do just that.
          </p>
          <p className="col-12 col-md-8">
            We offer website design, social media, strategy, and more—all with
            one goal in mind: helping you build an incredible brand that can
            thrive in today's webosphere.
          </p>
        </section>
        <hr className="about-bottom-border"></hr>
      </main>
      <Footer />
    </>
  );
};

export default About;
