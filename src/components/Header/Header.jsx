import React from "react";
import './Header.css'

const Header = () => {
  return (
    <div className="header">
      <h1 className="header__title">What's going on in the world?</h1>
      <p className="header__sub-title">
        Find the latest news on any topic and save them in your personal
        account.
      </p>
    </div>
  );
};

export default Header;
