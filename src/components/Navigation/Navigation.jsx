import React from "react";
import "./Navigation.css";

const Navigation = () => {
  return (
    <nav className="nav">
      <div className="nav__logo">NewsExplorer</div>
      <div className="nav__links">
        <button className="nav__link">Home</button>
        <button className="nav__link-pill-btn">Sign in</button>
      </div>
    </nav>
  );
};

export default Navigation;
