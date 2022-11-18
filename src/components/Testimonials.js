import React from "react";
import Testimonial from "./Testimonial";

export default function Testimonials() {
  return (
    <div>
      <div className="container">
        <Testimonial
          imageSrc="DIGCafe-min.webp"
          imageWidth="180px"
          altText="DIGCafe"
        >
          <p>
            Kennedy: Owner of{" "}
            <a
              href="https://www.dig-cafe.com/"
              target="_blank"
              rel="noreferrer"
            >
              The Dig Cafe
            </a>
          </p>
          <p>
            “Working with Maddison from MaddMarketing Solutions has been such a
            great experience for my business. Maddison created a website on our
            preferred platform very quickly and it looks great! She has been
            easy to work with and if there is anything that I need help with or
            if the website needs any modifications, she is willing to help and
            fix it in a timely manner. I would recommend MaddMarketing Solutions
            to any business looking for a great website, marketing tips, and
            someone willing to go the extra step to make sure that your specific
            needs are met!
          </p>
        </Testimonial>
        <Testimonial
          imageSrc="TLD-min.webp"
          imageWidth="160px"
          altText="TLD Holdings"
          className="my-1"
        >
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
          <p>
            “Maddison from MaddMarketing Solutions LLC is wonderful to work
            with! She created our website and manages our social media platforms
            which has saved me time from worrying about social media.
            MaddMarketing is fast, efficient, and very organized. Maddison will
            find a way to represent your brand the best possible way for you!!!”
          </p>
        </Testimonial>
        <Testimonial
          imageSrc="THLogo-min.webp"
          imageWidth="160px"
          altText="Total Health Logo"
          className="rounded-circle my-1"
        >
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
          <p>
            “Opening a small business has been super overwhelming and marketing
            has been so hard for me to keep up. Working with Maddison has been
            like taking a huge weight off my shoulders. She keeps my social
            media going even when I can't and always provides quality content
            that keeps my business going.”
          </p>
        </Testimonial>
      </div>
    </div>
  );
}
