import { Link, useLocation } from "react-router-dom";
import "./Navigation.css";

const Navigation = ({ isLoggedIn, handleOpenLoginModal }) => {
  const location = useLocation();
  
  return (
    <nav className="nav">
      <div className="nav__logo">NewsExplorer</div>
      <div className="nav__links">
        <Link
          to="/"
          className={`nav__link ${location.pathname === "/" ? "active home-active" : ""}`}
        >
          Home
        </Link>
        {isLoggedIn && (
          <Link
            to="/saved-news"
            className={`nav__link ${location.pathname === "/saved-news" ? "active saved-news-active" : ""}`}
          >
            Saved articles
          </Link>
        )}
        {isLoggedIn ? (
          <button className="nav__link-pill-btn">Elise</button>
        ) : (
          <button
            type="button"
            onClick={handleOpenLoginModal}
            className="nav__link-pill-btn"
          >
            Sign in
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
