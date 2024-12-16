import React from "react";
import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <Navigation />
      <div className="header__hero">
        <h1 className="header__title">
          What&apos;s going on in
          <span className="header__title-second-line">the world?</span>
        </h1>
        <p className="header__sub-title">
          Find the latest news on any topic and save them in your personal
          account.
        </p>
      </div>
      <SearchForm />
    </div>
  );
};

export default Header;
