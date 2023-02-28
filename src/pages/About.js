import Footer from "../parts/footer/Footer";
import "../assets/styles/pages/about.css";
import headshot from "../assets/images/headshot.webp";

const About = () => {
  return (
    <div className="about-page-container">
      <main className="about-page" style={{ textAlign: "center" }}>
        <section className="about-section">
          <h1
            className="about-title"
            style={{
              fontSize: "45px",
              width: "fit-content",
              margin: "0 auto",
              paddingTop: "20px",
            }}
          >
            MaddMarketing Solutions
          </h1>
          <p className="col-12 col-md-8">
            {" "}
            We're MaddMarketing Solutions, a digital marketing agency that
            provides innovative marketing solutions to small businesses.
          </p>
          <img
            className="headshot"
            src={headshot}
            alt="Owner of MaddMarketing Solutions"
            style={{
              width: "300px",
              marginBottom: "5px",
              borderRadius: "200px",
            }}
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
        <hr
          className="about-bottom-border"
          style={{
            borderBottom: "2px, solid #000000",
            width: "75%",
            margin: "0 auto",
          }}
        ></hr>
      </main>
      <Footer />
    </div>
  );
};

export default About;
