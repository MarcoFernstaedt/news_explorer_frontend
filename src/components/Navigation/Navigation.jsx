import "./Navigation.css";

const Navigation = ({
  handleOpenLoginModal,
  openRegisterModal,
  isLoggedIn,
}) => {
  return (
    <nav className="nav">
      <div className="nav__logo">NewsExplorer</div>
      <div className="nav__links">
        <a className="nav__link" href="#">
          Home
        </a>
        <button
          type="button"
          onClick={handleOpenLoginModal}
          className="nav__link-pill-btn"
        >
          Sign in
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
