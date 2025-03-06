import { Link, UNSAFE_getPatchRoutesOnNavigationFunction, useLocation } from "react-router-dom";
import "./Navigation.css";
import { useContext } from "react";
import UserContext from "../../context/UserContext";

const Navigation = ({ handleOpenLoginModal, handleDrawerOpen, handleOnLoggout }) => {
  const { isLoggedIn} = useContext(UserContext)
  const location = useLocation();
  
  return (
    <nav className="nav">
      <div className="nav__logo">NewsExplorer</div>
      <div className="nav__links">
        <Link
          to="/"
          className={`nav__link ${location.pathname === "/" ? "active nav__link_home" : ""}`}
        >
          Home
        </Link>
        {isLoggedIn && (
          <Link
            to="/saved-news"
            className={`nav__link ${location.pathname === "/saved-news" ? "active nav__link_saved-news" : ""}`}
          >
            Saved articles
          </Link>
        )}
        {isLoggedIn ? (
          <button type='button' onClick={handleOnLoggout} className="nav__link-pill-btn">Elise</button>
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
      <button onClick={handleDrawerOpen} type='button' className='nav__menu-btn'></button>
    </nav>
  );
};

export default Navigation;
