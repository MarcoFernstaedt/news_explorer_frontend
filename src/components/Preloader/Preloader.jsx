import React from "react";
import { useOutletContext } from "react-router-dom";
import "./preloader.css";

const Preloader = () => {
  const { isLoading } = useOutletContext();

  return (
    <div className="preloader">
      <div
        className={
          isLoading
            ? "circle-preloader"
            : "circle-preloader circle-preloader_stop-animation"
        }
      ></div>
      {!isLoading && <div className="preloader__alert-message">Nothing Found</div>}
      <h2
        className={
          isLoading
            ? "preloader__text"
            : "preloader__text preloader__text-alert-popup"
        }
      >
        {isLoading ? (
          "Searching for news..."
        ) : (
          <>
            Sorry but nothing matched
            <span className="preloader__text-second-line">
              your search terms
            </span>
          </>
        )}
      </h2>
    </div>
  );
};

export default Preloader;
