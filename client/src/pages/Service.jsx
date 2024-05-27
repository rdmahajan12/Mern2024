import React from "react";
import { useAuth } from "../store/auth";

const Service = () => {
  const { service } = useAuth();
  console.log({ service });

  return (
    <div>
      <section className="section-services">
        <div className="container">
          <h1 className="main-heading">Services</h1>
        </div>
        <div className="container grid grid-three-cols">
          {service.map((curElm, i) => {
            const { provider, price, service, description } = curElm;
            return (
              <div className="card" key={i}>
                <div className="card-img">
                  <img src="/images/design.png" alt="design data" />
                </div>
                <div className="card-details">
                  <div className="grid grid-two-cols">
                    <p>{provider}</p>
                    <p>{price}</p>
                  </div>
                  <h2>{service}</h2>
                  <p>{description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Service;
