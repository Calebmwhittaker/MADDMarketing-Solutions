import React from "react";
import ServiceCard from "./ServiceCard";
import consultation from "../assets/images/consultation-stock-photo-min.webp";
import webDesign from "../assets/images/web-design-stock-photo-min.webp";
import socialMedia from "../assets/images/social-media-stock-photo-min.webp";
import coaching from "../assets/images/coaching-stock-photo-min.webp";

export default function ServiceCards() {
  return (
    <div className="services-page-cards">
      <div className="cards row col-12 m-0">
        <ServiceCard
          title="Consultation"
          imageAltText="Consultation"
          imageSrc={consultation}
          cardId="consultation-card"
        >
          <p>
            Online or in-person, this is designated for you to share your goals
            for your business and give us the chance to learn more about you.{" "}
          </p>
          <p>*Needed for all new clients</p>
          <p>60 mins | $100 </p>
        </ServiceCard>
        <ServiceCard
          title="Web Design"
          imageAltText="Web Design"
          imageSrc={webDesign}
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
        </ServiceCard>
        <ServiceCard
          title="Social Media"
          imageAltText="Social Media"
          imageSrc={socialMedia}
          cardId="social-media-card"
        >
          <p>
            Stay consistent and grow your audience on social platforms. We offer
            monthly packages to help your business stand out in the webosphere.{" "}
          </p>
          <p>*Monthly maintenance subscription is available upon request </p>
          <p>Monthly | Starting at $350+</p>
        </ServiceCard>
        <ServiceCard
          title="Coaching"
          imageAltText="Coaching"
          imageSrc={coaching}
          cardId="coaching-card"
        >
          <p>
            Has your online presence begun to plateau? We are here to help!
            Schedule a day with us to meet your team and strategize your future
            online.
          </p>
          <p> One Day Coaching Seminar | $1,000 </p>
        </ServiceCard>
      </div>
      <p>
        *The consultation fee is a one-time fee billed within the first month.
        Additional meetings will be assessed and billed accordingly.{" "}
      </p>
      <p>*Please reach out with any questions or concerns. </p>
      <hr
        style={{
          width: "75%",
          border: "1px solid black",
          margin: "30px auto",
        }}
      ></hr>
    </div>
  );
}
