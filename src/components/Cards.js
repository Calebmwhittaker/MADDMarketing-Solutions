import React from "react";
import Card from "./Card";

export default function Cards() {
  return (
    <div className="services-page-cards">
      <div className="cards row col-12">
        <Card
          title="Consultation"
          imageAltText="Consultation"
          imageSrc="/consultation-stock-photo-min.webp"
          cardId="consultation-card"
        >
          <p>
            Online or in-person, this is designated for you to share your goals
            for your business and give us the chance to learn more about you.{" "}
          </p>
          <p>*Needed for all new clients</p>
          <p>60 mins | $100 </p>
        </Card>
        <Card
          title="Web Design"
          imageAltText="Web Design"
          imageSrc="/web-design-stock-photo-min.webp"
          cardId="web-design-card"
        >
          <p>
            We can start from scratch or improve your current website design.
            After your consultation, we will design the website that is right
            for your business. Once it is completed you have the option to learn
            how to edit your website.{" "}
          </p>
          <p>*Monthly maintenance subscription is available upon request </p>
          <p> 20 hours of work | $700+ </p>
        </Card>
        <Card
          title="Social Media"
          imageAltText="Social Media"
          imageSrc="/social-media-stock-photo-min.webp"
          cardId="social-media-card"
        >
          <p>
            Stay consistent and grow your audience on social platforms. We offer
            monthly packages to help your business stand out in the webosphere.{" "}
          </p>
          <p>*Monthly maintenance subscription is available upon request </p>
          <p>Monthly | Starting at $350+</p>
        </Card>
        <Card
          title="Coaching"
          imageAltText="Coaching"
          imageSrc="/coaching-stock-photo-min.webp"
          cardId="coaching-card"
        >
          <p>
            Has your online presence begun to plateau? We are here to help!
            Schedule a day with us to meet your team and strategize your future
            online.
          </p>
          <p> One Day Coaching Seminar | $1,000 </p>
        </Card>
      </div>
      <p>
        *The consultation fee is a one-time fee billed within the first month.
        Additional meetings will be assessed and billed accordingly.{" "}
      </p>
      <p>*Please reach out with any questions or concerns. </p>
      <hr className="w-75 m-auto"></hr>
    </div>
  );
}
