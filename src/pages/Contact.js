import Form from "../components/Form";
import Footer from "../parts/footer/Footer";

const Contact = () => {
  return (
    <div
      style={{ margin: "10px 0px", textAlign: "center" }}
      className="contact-page"
    >
      <h1>Contact Us.</h1>
      <p>maddmarketingsolutions@gmail.com</p>
      <p>(989) 385-1188</p>
      <Form />
      <Footer />
    </div>
  );
};

export default Contact;
