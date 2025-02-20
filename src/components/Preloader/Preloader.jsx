import React from "react";
import './preloader.css';

const Preloader = () => {
  return (
    <div className="preloader">
      <div className="circle-preloader"></div>
      <h1 className="preloader__text" >Searching for news...</h1>
    </div>
  )
};

export default Preloader;
