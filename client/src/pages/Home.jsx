import React from "react";
import Analytics from "../Components/Analytics";

const Home = () => {
  return (
    <div>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              <p>Welcome to E-commerce Site</p>
              <h1>We are the most powerful company</h1>
              <p>
                E-commerce or "electronic commerce" is the trading of goods and
                services online. The internet allows individuals and businesses
                to buy and sell an increasing amount of physical goods, digital
                goods, and services electronically.
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
                src="/images/home.png"
                alt="this is home image"
                width="500"
                height="500"
              />
            </div>
          </div>
        </section>
        <Analytics />
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-image">
              <img
                src="/images/design.png"
                alt="this is footer image"
                width="500"
                height="500"
              />
            </div>
            <div className="hero-content">
              <p>We are here to help you</p>
              <h1>Get started Today</h1>
              <p>
                “The beginning is always today.” “You're off to great places!
                Today is your day! Your mountain is waiting, So get on your
                way!”
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
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
