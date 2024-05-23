import React from "react";
import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <section id="error-page">
        <div className="content">
          <h2 className="header">404</h2>
          <h4>Sorry! Page Not Found</h4>
          <p>
            The 404 status code error is an HTTP response signaling the webpage
            cannot be found on the web server. It tells the browser that the
            requested webpage is “not found.”
          </p>
          <div className="btns">
            <NavLink to="/">Return to home Page</NavLink>
            <NavLink to="/contact">Report Problem</NavLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Error;
