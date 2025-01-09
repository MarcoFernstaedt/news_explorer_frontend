import "./Navigation.css";

const Navigation = ({ openLoginModal, openRegisterModal, isLoggedIn }) => {
  return (
    <nav className="nav">
      <div className="nav__logo">NewsExplorer</div>
      <div className="nav__links">
        <a className="nav__link" href="#">
          Home
        </a>
        <button className="nav__link-pill-btn">Sign in</button>
      </div>
    </nav>
  );
};

export default Navigation;
