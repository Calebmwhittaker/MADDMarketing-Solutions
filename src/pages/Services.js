import Cards from '../components/Cards';
import Form from '../components/Form';
import Footer from '../components/Footer';


const Services = () => {
    return (
        <>
        <main className="services-page">
          <h2>Our Philosophy</h2>
          <p>We are offering innovative marketing solutions to businesses so they can compete with giants one click at a time.</p>
          <img className="services-first-image" src="services-first-stock-photo.jpg" alt=""></img>
          <br></br>
          <br></br>
          <h2>Grow your business</h2>
          <br></br>
          <p>Having a presence online today is crucial. When your business is online, it makes it much easier for customers to find you. Most people turn to the internet when searching for a product or service. We help you grow your audience by being accessible online through websites and social media.</p>
          <br></br>
          <img className="services-second-image" src="services-second-stock-photo.jpg" alt=""></img>
          <br></br>
          <br></br>
          <h2>Keep customers involved</h2>
          <br></br>
          <p>It’s essential for businesses to share information with current and future customers. They want to know your story, view new products, and keep in touch for a more personalized experience. </p>
          <br></br>
          <h2 className="services-rates">Our rates</h2>
          <Cards />
          <Form />
      </main>
      <Footer ></Footer>
        </>
        );
}

export default Services;