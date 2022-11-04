const Home = () => {
  return (
    <>
      <script src=""></script>
      <div className="main-title">
        <h1>MADDMarketing Solutions</h1>
      </div>
      <main>
        <h2>Our approach</h2>
        <p>
          We are offering innovative marketing solutions to businesses so they
          can compete with giants one click at a time.
        </p>
        <h2>Our services</h2>
        <div className="services">
          <div className="webDesign">
            <img src="computer_image.png" alt="Website Design"></img>
            <span>Website Design</span>
          </div>
          <div className="socialMedia">
            <img src="social_media_image.png" alt="Social Media"></img>
            <span>Social Media</span>
          </div>
          <div className="strategy">
            <img src="lightbulb_image.png" alt="Strategy"></img>
            <span>Strategy</span>
          </div>
          <div className="coaching">
            <img src="coaching_image.png" alt="Coaching"></img>
            <span>Coaching</span>
          </div>
          <button>
            <a
              href="https://www.maddmarketingsolutions.com/services"
              target="_blank"
              rel="noreferrer"
            >
              Learn More
            </a>
          </button>
        </div>
        <div className="testimonials">
          <img src="DIGCafe.png" alt="Dig Cafe Logo"></img>
          <p>
            Kennedy: Owner of
            <a
              href="https://www.dig-cafe.com/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              The Dig Cafe
            </a>
          </p>
          <img src="TLD.png" alt="TLD Holdings Logo"></img>
          <p>
            Andrea: President of{" "}
            <a
              href="https://www.tldholdings.co/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              TLD Holdings
            </a>
          </p>
          <img src="THLogo.png" alt="Total Health Logo"></img>
          <p>
            Jenna: Owner of{" "}
            <a
              href="https://www.instagram.com/thcertifiedcoaching/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Total Health Certified Coaching
            </a>
          </p>
        </div>
        <div>
          <h2>Get started with MADDMarketing today!</h2>
          <button>Contact Us</button>
        </div>
      </main>
      <footer>
        <p>Stay in touch.</p>
        <a
          href="https://www.maddmarketingsolutions.com/contact"
          target="_blank"
          rel="noreferrer"
        >
          Contact us
        </a>
        <a
          href="https://www.maddmarketingsolutions.com/services"
          target="_blank"
          rel="noreferrer"
        >
          Services
        </a>
        <a
          href="https://www.maddmarketingsolutions.com/blog"
          target="_blank"
          rel="noreferrer"
        >
          Blog
        </a>
        <i class="fa-brands fa-facebook-f"></i>
      </footer>
    </>
  );
};

export default Home;
