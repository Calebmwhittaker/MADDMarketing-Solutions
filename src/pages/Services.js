import Cards from '../components/Cards';
import Form from '../components/Form';
import Footer from '../components/Footer';
import ServiceCards from '../components/ServiceCards';


const Services = () => {
    return (
        <>
        <main className="services-page">
          <div className="first-services-imgs">
          <h2>Our Philosophy</h2>
          <p>We are offering innovative marketing solutions to businesses so they can compete with giants one click at a time.</p>
          <ServiceCards />
          </div>
          <h2 className="services-rates">Our rates</h2>
          <Cards />
          <Form />
      </main>
      <Footer ></Footer>
        </>
        );
}

export default Services;