import React from "react";
import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";
import { useLocation } from "react-router-dom";

const Header = ({ handleOpenLoginModal, handleOpenRegisterModal }) => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className={isHome ? "header header_home" : "header_saved-news"}>
      <Navigation
        handleOpenLoginModal={handleOpenLoginModal}
        handleOpenRegisterModal={handleOpenRegisterModal}
      />
      <div className={isHome ? "header__hero" : "header__hero header__hero_saved-news"}>
        <h1
          className={
            isHome
              ? "header__title header__title_home"
              : "header__title header__title_saved-news"
          }
        >
          {isHome ? "What's going on in" : "Marco you have 5 Saved"}
          <span
            className={
              isHome
                ? "header__title-second-line"
                : "header__title-second-line_saved-news"
            }
          >
            {isHome ? "the world?" : "Articles"}
          </span>
        </h1>
        <p className="header__sub-title">
          Find the latest news on any topic and save them in your personal
          account.
        </p>
      </div>
      {isHome && <SearchForm />}
    </div>
  );
};

export default Header;
