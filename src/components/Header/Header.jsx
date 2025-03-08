import React, { useContext } from "react";
import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";
import { useLocation } from "react-router-dom";
import UserContext from "../../context/UserContext.jsx";

const Header = ({
  handleOpenLoginModal,
  handleOpenRegisterModal,
  handleSearch,
  handleDrawerOpen,
  handleOnLoggout,
  savedArticles,
}) => {
  const { currentUser } = useContext(UserContext);
  const location = useLocation();
  const isHome = location.pathname === "/";
  const articles = Object.values(savedArticles);

  const uniqueKeywords = [
    ...new Set(articles.map((article) => article.keyword)),
  ];

  const displayKeywords = uniqueKeywords.slice(0, 2);

  const remainingCount = uniqueKeywords.length - displayKeywords.length;

  return (
    <div className={isHome ? "header header_home" : "header_saved-news"}>
      <Navigation
        handleOpenLoginModal={handleOpenLoginModal}
        handleOpenRegisterModal={handleOpenRegisterModal}
        handleDrawerOpen={handleDrawerOpen}
        handleOnLoggout={handleOnLoggout}
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
          {isHome
            ? "What's going on in"
            : `${currentUser.name}, you have ${articles.length} Saved`}
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
            <div className="header__keywords">
              `By keywords: ${displayKeywords.join(", ")} 
            ${
              remainingCount > 0
                ? `and ${remainingCount} other${remainingCount > 1 ? "s" : ""}`
                : ""
            }`
            </div>
          )}
        </p>
      </div>
      {isHome && <SearchForm handleSearch={handleSearch} />}
    </div>
  );
};

export default Header;
