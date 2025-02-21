import { Link } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import "./Navigation.css";

const Navigation = ({ handleOpenLoginModal, handleOpenRegisterModal, isLoggedIn }) => {
  return (
    <nav className="nav">
      <div className="nav__logo">NewsExplorer</div>
      <div className="nav__links">
        <Link className="nav__link" to="/">
          Home
        </Link>
        {isLoggedIn ? (
          <>
            <Link to="/saved-news" className="nav__link">
              Saved articles
            </Link>
            <button className="nav__link-pill-btn">Elise</button>
          </>
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
