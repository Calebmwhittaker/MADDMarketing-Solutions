import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'

const Services = () => {
    return (
        <>
        <main className="services-page">
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
          <h2>Our rates</h2>
          <div className="row">
            <div class="card col-sm-6 col-lg-3">
              <img src="consultation-stock-photo.jpg" class="card-img-top" alt="consultation"></img>
              <div class="card-body">
                <h5 class="card-title">Consultation</h5>
                <p class="card-text">Online or in-person, this is designated for you to share your goals for your business and give us the chance to learn more about you. </p>
                <p class="card-text">*Needed for all new clients</p>
                <p class="card-text">60 mins |  $100  </p>
              </div>
            </div>
            <div class="card col-sm-6 col-lg-3">
              <img src="web-design-stock-photo.jpg" class="card-img-top" alt="web design"></img>
              <div class="card-body">
                <h5 class="card-title">Web Design</h5>
                <p class="card-text">We can start from scratch or improve your current website design. After your consultation, we will design the website that is right for your business. Once it is completed you have the option to learn how to edit your website. </p>
                <p class="card-text">*Monthly maintenance subscription is available upon request </p>
                <p class="card-text">20 hours of work |  $700+ </p>
              </div>
            </div>
            <div class="card col-sm-6 col-lg-3">
              <img src="social-media-stock-photo.jpg" class="card-img-top" alt="web design"></img>
              <div class="card-body">
                <h5 class="card-title">Social Media</h5>
                <p class="card-text">Stay consistent and grow your audience on social platforms. We offer monthly packages to help your business stand out in the webosphere. </p>
                <p class="card-text">*Monthly maintenance subscription is available upon request </p>
                <p class="card-text">Monthly |  Starting at $350+</p>
              </div>
            </div>
            <div class="card col-sm-6 col-lg-3">
              <img src="coaching-stock-photo.jpg" class="card-img-top" alt="web design"></img>
              <div class="card-body">
                <h5 class="card-title">Coaching</h5>
                <p class="card-text">Has your online presence begun to plateau? We are here to help! Schedule a day with us to meet your team and strategize your future online.</p>
                <p class="card-text">One Day Coaching Seminar |  $1,000  </p>
              </div>
            </div>
          </div>
          <br></br>
          <p>*The consultation fee is a one-time fee billed within the first month. Additional meetings will be assessed and billed accordingly. </p>
          <br></br>
          <p>*Please reach out with any questions or concerns. </p>
                    <hr class="w-50 m-auto"></hr>
                    <br></br>
          <form>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputName">First Name</label>
      <input type="email" class="form-control" id="inputName" placeholder="First Name"></input>
    </div>
    <div class="form-group col-md-6">
      <label for="inputName">Last Name</label>
      <input type="email" class="form-control" id="inputName" placeholder="First Name"></input>
    </div>
  </div>
  <div class="form-group">
    <label for="inputEmail">Email</label>
    <input type="text" class="form-control" id="inputEmail" placeholder="christopherrobin@gmail.com"></input>
  </div>
  <div class="form-row">
    <div class="form-group col-md-2">
      <label for="inputPhone">Phone Number</label>
      <input type="tel" class="form-control" id="inputPhone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="123-456-7890"></input>
    </div>
  </div>
  <br></br>
  <button type="submit" class="btn btn-primary">Send</button>
</form>
      </main>
      <footer>
        <br></br>
        <p>Stay in touch!
        <br></br>
        <br></br>
          <div className='icon-links'>
        <a href="https://www.facebook.com/maddmkt" target="_blank" rel="noreferrer"><FontAwesomeIcon className="facebook-icon" icon={faFacebook} /></a>
        <a href="https://www.instagram.com/maddmkt/" target="_blank" rel="noreferrer"><FontAwesomeIcon className="instagram-icon" icon={faInstagram} /></a>
        <a href="https://twitter.com/?lang=en" target="_blank" rel="noreferrer"><FontAwesomeIcon className="twitter-icon" icon={faTwitter} /></a>
        <a href="https://www.youtube.com/channel/UC8EQY_bSQY7Gqvu6ayQ3ajA?app=desktop" target="_blank" rel="noreferrer"><FontAwesomeIcon className="youtube-icon" icon={faYoutube} /></a>
          </div>
        </p>
        <div className="footer-links">
        <a
          href="https://www.maddmarketingsolutions.com/contact"
          target="_blank"
          rel="noreferrer"
        >
          Contact us
        </a>
        <br></br>
        <a
          href="https://www.maddmarketingsolutions.com/services"
          target="_blank"
          rel="noreferrer"
        >
          Services
        </a>
        <br></br>
        <a
          href="https://www.maddmarketingsolutions.com/blog"
          target="_blank"
          rel="noreferrer"
        >
          Blog
        </a>
      </div>
      </footer>
        </>
        );
}

export default Services;