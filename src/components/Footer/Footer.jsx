import React from "react";
import githubIcon from "../../assets/gitHub.svg";
import facebookIcon from "../../assets/facebook.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__copy">&copy; 2024 Supersite, Powered by News API</p>
      <nav className="footer__links">
        <li>
          <a className="footer__link" href="#">
            Home
          </a>
        </li>
        <li className="footer__link">
          <a className="footer__link" href="#">
            TripleTen
          </a>
        </li>
      </nav>
      <div className="footer__social-icons">
        <a
          href="https://github.com/MarcoFernstaedt"
          className="footer__social-icon"
        >
          <img src={githubIcon} atl="Github Site Logo" />>
        </a>
        <a href="https://facebook.com" className="footer__social-icon">
          <img src={facebookIcon} alt="Facebook Logo" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
