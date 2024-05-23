import React from "react";
import Analytics from "../Components/Analytics";

const About = () => {
  return (
    <div>
      <section className="section-hero">
        <div className="container grid grid-two-cols">
          <div className="hero-content">
            <p>Welcome to Ritesh</p>
            <h1>Why Choose Us?</h1>
            <p>
              There are several reasons why a customer might choose your company
              but we mostly felt it boiled down to three key options: customer
              service, competitive pricing, or the product / service itself. We
              asked 50 percent of the entrepreneurs if their customers chose
              their company because of their customer service.
            </p>
            <div className="btn btn-group">
              <a href="/contact">
                <button className="btn">Connect Now</button>
              </a>
              <a href="/service">
                <button className="btn secondary-btn">Learn More</button>
              </a>
            </div>
          </div>
          <div className="hero-image">
            <img
              src="/images/about.png"
              alt="this is home image"
              width="500"
              height="500"
            />
          </div>
        </div>
      </section>
      <Analytics />
    </div>
  );
};

export default About;
