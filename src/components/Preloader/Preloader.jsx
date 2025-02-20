import React from "react";
import { useOutletContext } from "react-router-dom";
import './preloader.css';

const Preloader = () => {
  const { isLoading } = useOutletContext();
  
  return (
    <div className="preloader">
      <div className={isLoading ? 'circle-preloader' : 'circle-preloader circle-preloader_stop-animation'}></div>
      <h2 className="preloader__text" >{isLoading ? 'Searching for news...' : 'Sorry but nothing matched your search terms'}</h2>
    </div>
  )
};

export default Preloader;
