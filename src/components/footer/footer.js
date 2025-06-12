import React from "react";
import "../footer/footer.css";
import star from "../../assets/Star.png"; // Replace with your actual star icon path

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-marquee">
        <span>WEBFLOW</span>
        <img src={star} alt="star" />
        <span>FIGMA</span>
        <img src={star} alt="star" />
        <span>DESIGNER</span>
        <img src={star} alt="star" />
        <span>DEVELOPER</span>
      </div>

      <div className="footer-cta">
        <h2>LET’S TALK!</h2>
        <a
          href="mailto:rehanurraihan@gmail.com"
          className="footer-email"
        >
          rehanurraihan@gmail.com ↗
        </a>
      </div>

      <div className="footer-bottom">
        <span>© Rehan Raihan - 2023</span>
        <div className="footer-links">
          <a href="#">Dribbble</a>
          <a href="#">Behance</a>
          <a href="#">Twitter</a>
          <a href="#">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
