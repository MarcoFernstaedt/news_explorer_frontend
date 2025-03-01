import React from "react";
import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";
import { useLocation } from "react-router-dom";

const Header = ({
  handleOpenLoginModal,
  handleOpenRegisterModal,
  isLoggedIn,
  handleDrawerOpen,
}) => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className={isHome ? "header header_home" : "header_saved-news"}>
      <Navigation
        handleOpenLoginModal={handleOpenLoginModal}
        handleOpenRegisterModal={handleOpenRegisterModal}
        isLoggedIn={isLoggedIn}
        handleDrawerOpen={handleDrawerOpen}
      />
      <div className={isHome ? "header__hero" : "header__hero_saved-news"}>
        {/* <p className="header__heading">Saved articles</p> */}
        <h1
          className={
            isHome
              ? "header__title header__title_home"
              : "header__title header__title_saved-news"
          }
        >
          {isHome ? "What's going on in" : "Marco, you have 5 Saved"}
          <span className="header__title-second-line">
            {isHome ? "the world?" : "articles"}
          </span>
        </h1>
        <p
          className={
            isHome
              ? "header__sub-title header__sub-title_home"
              : "header__sub-title_saved-news"
          }
        >
          {isHome ? (
            <>
              Find the latest news on any topic and save them in your{" "}
              <span className="header__sub-title_tablet">
                personal 
                <span className="header__sub-title_mobile">account.</span>
              </span>
            </>
          ) : (
            "By keywords: "
          )}
        </p>
      </div>
      {isHome && <SearchForm />}
    </div>
  );
};

export default Header;
