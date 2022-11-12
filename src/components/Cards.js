import React from 'react'

export default function Cards() {
  return (
    <div>
        <div className="row">
            <div className="card col-sm-6 col-lg-3">
              <img src="consultation-stock-photo.jpg" className="card-img-top" alt="consultation"></img>
              <div class="card-body">
                <h5 className="card-title">Consultation</h5>
                <p className="card-text">Online or in-person, this is designated for you to share your goals for your business and give us the chance to learn more about you. </p>
                <p className="card-text">*Needed for all new clients</p>
                <p className="card-text">60 mins |  $100  </p>
              </div>
            </div>
            <div className="card col-sm-6 col-lg-3">
              <img src="web-design-stock-photo.jpg" class="card-img-top" alt="web design"></img>
              <div className="card-body">
                <h5 className="card-title">Web Design</h5>
                <p className="card-text">We can start from scratch or improve your current website design. After your consultation, we will design the website that is right for your business. Once it is completed you have the option to learn how to edit your website. </p>
                <p className="card-text">*Monthly maintenance subscription is available upon request </p>
                <p className="card-text">20 hours of work |  $700+ </p>
              </div>
            </div>
            <div className="card col-sm-6 col-lg-3">
              <img src="social-media-stock-photo.jpg" class="card-img-top" alt="web design"></img>
              <div className="card-body">
                <h5 className="card-title">Social Media</h5>
                <p className="card-text">Stay consistent and grow your audience on social platforms. We offer monthly packages to help your business stand out in the webosphere. </p>
                <p className="card-text">*Monthly maintenance subscription is available upon request </p>
                <p className="card-text">Monthly |  Starting at $350+</p>
              </div>
            </div>
            <div className="card col-sm-6 col-lg-3">
              <img src="coaching-stock-photo.jpg" class="card-img-top" alt="web design"></img>
              <div className="card-body">
                <h5 className="card-title">Coaching</h5>
                <p className="card-text">Has your online presence begun to plateau? We are here to help! Schedule a day with us to meet your team and strategize your future online.</p>
                <p className="card-text">One Day Coaching Seminar |  $1,000  </p>
              </div>
            </div>
          </div>
          <p>*The consultation fee is a one-time fee billed within the first month. Additional meetings will be assessed and billed accordingly. </p>
          <p>*Please reach out with any questions or concerns. </p>
                    <hr className="w-75 m-auto"></hr>
    </div>
  );
};