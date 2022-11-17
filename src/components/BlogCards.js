import React from "react";

export default function BlogCards() {
  return (
    <div className="blog">
      <div className="row">
        <div className="col-12 col-sm-6 col-xl-4 text-center">
          <a
            href="https://www.maddmarketingsolutions.com/blog/why-you-need-a-digital-marketer"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="my-4 w-100"
              src="blog-photo-1-min.webp"
              alt="Website Design"
            ></img>
          </a>
          <p>Digital Marketing 8/11/22</p>
          <h1>Why you need a digital marketer on your team</h1>
        </div>
        <div className="col-12 col-sm-6 col-xl-4 text-center">
          <a
            href="https://www.maddmarketingsolutions.com/blog/become-a-storyteller"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="my-4 w-100"
              src="blog-photo-2-min.webp"
              width="400px"
              alt="Social Media"
            ></img>
          </a>
          <p>Digital Marketing 7/27/22</p>
          <h1>Become a storyteller! Use video to grow your audience.</h1>
        </div>
        <div className="col-12 col-sm-6 col-xl-4 text-center">
          <a
            href="https://www.maddmarketingsolutions.com/blog/what-is-digital-marketing-how-to-use-online-tools-for-customer-growth"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="my-4 w-100"
              src="blog-photo-3-min.webp"
              width="400px"
              alt="Social Media"
            ></img>
          </a>
          <p>Digital Marketing 7/15/22</p>
          <h1>
            What is Digital Marketing? How to use online tools for customer
            growth.
          </h1>
        </div>
      </div>
    </div>
  );
}
