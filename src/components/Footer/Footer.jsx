import githubIcon from "../../assets/github.svg";
import facebookIcon from "../../assets/facebook.svg";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__copy">© 2023 Supersite, Powered by News API</p>
      <div className="footer__icons-links">
        <div className="footer__links">
          <Link to="/" className="footer__link">
            Home
          </Link>
          <a
            href="https://www.tripleten.us/"
            className="footer__link"
            target="_blank"
            // rel="noopener noreferrer"
          >
            Tripleten
          </a>
        </div>
        <div className="footer__icons">
          <a
            className="footer__icons-link"
            href="https://github.com/MarcoFernstaedt"
            target="_blank"
            // rel="noopener noreferrer"
          >
            <img src={githubIcon} alt="github link"></img>
          </a>

          <a
            className="footer__icons-link"
            href="https://www.facebook.com/"
            target="_blank"
            // rel="noopener noreferrer"
          >
            <img src={facebookIcon} alt="facebook page" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
