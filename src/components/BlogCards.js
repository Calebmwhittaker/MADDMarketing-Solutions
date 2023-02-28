import React from "react";
import BlogCard from "./BlogCard";
import websiteDesign from "../assets/images/blog-photo-1-min.webp";
import socialMedia from "../assets/images/blog-photo-2-min.webp";
import onlineTools from "../assets/images/blog-photo-3-min.webp";

export default function BlogCards() {
  return (
    <div className="blog">
      <div className="row m-0">
        <BlogCard
          link="https://www.maddmarketingsolutions.com/blog/why-you-need-a-digital-marketer"
          imageSrc={websiteDesign}
          altText="Website Design"
        >
          <p>Digital Marketing 8/11/22</p>
          <h1>Why you need a digital marketer on your team</h1>
        </BlogCard>
        <BlogCard
          link="https://www.maddmarketingsolutions.com/blog/become-a-storyteller"
          imageSrc={socialMedia}
          altText="Social Media"
        >
          <p>Digital Marketing 7/27/22</p>
          <h1>Become a storyteller! Use video to grow your audience.</h1>
        </BlogCard>
        <BlogCard
          link="https://www.maddmarketingsolutions.com/blog/what-is-digital-marketing-how-to-use-online-tools-for-customer-growth"
          imageSrc={onlineTools}
          altText="Online Tools"
        >
          <p>Digital Marketing 7/15/22</p>
          <h1>
            What is Digital Marketing? How to use online tools for customer
            growth.
          </h1>
        </BlogCard>
      </div>
    </div>
  );
}
