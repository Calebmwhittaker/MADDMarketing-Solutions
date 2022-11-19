import ServiceCards from "../components/ServiceCards";
import Form from "../components/Form";
import Footer from "../components/Footer";
import MissionCards from "../components/MissionCards";

const Services = () => {
  return (
    <>
      <main className="services-page">
        <section className="first-services-imgs">
          <h2>Our Approach</h2>
          <p className="col-12 col-md-7 m-auto">
            We are offering innovative marketing solutions to businesses so they
            can compete with giants one click at a time.
          </p>
          <MissionCards />
        </section>
        <section>
          <h2 className="services-rates">Our rates</h2>
          <ServiceCards />
        </section>
        <section>
          <Form />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Services;
