import ServiceCards from "../components/ServiceCards";
import Form from "../components/Form";
import Footer from "../parts/footer/Footer";
import MissionCards from "../components/MissionCards";
import "../assets/styles/pages/services.css";

const Services = () => {
  return (
    <div className="services-page-container">
      <main className="services-page" style={{ textAlign: "center" }}>
        <section className="first-services-imgs">
          <h2 style={{ marginTop: "30px" }}>Our Approach</h2>
          <p className="col-12 col-md-7">
            We are offering innovative marketing solutions to businesses so they
            can compete with giants one click at a time.
          </p>
          <MissionCards />
        </section>
        <section>
          <h2 className="services-rates" style={{ marginBottom: "20px" }}>
            Our rates
          </h2>
          <ServiceCards />
        </section>
        <section>
          <Form />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
