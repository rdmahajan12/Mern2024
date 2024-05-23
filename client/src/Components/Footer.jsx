import React from "react";
import "./Navbar.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div>
      <footer>
        <p className="footer-p">@RiteshMahajan{year}</p>
      </footer>
    </div>
  );
};

export default Footer;
