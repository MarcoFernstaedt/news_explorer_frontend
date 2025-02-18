import React from "react";
import NewsCard from "../NewsCard/NewsCard";
import NewsContext from "../../context/NewsContext";
import { useContext } from "react";
import About from "../About/About";
import Preloader from "../Preloader/Preloader";
import "./Main.css";
import { useOutletContext } from "react-router-dom";

const Main = () => {
  const { newsArticles } = useContext(NewsContext);
  const {
    visibleArticles,
    isLoading,
    isSearched,
    haveResults,
    handleCardRender,
  } = useOutletContext();

  return (
    <main className="main">
      {isLoading ? (
        <Preloader />
      ) : haveResults ? (
        <>
          <h3
            className={
              visibleArticles > 0 ? "main__header" : "main__header_hidden"
            }
          >
            Search results
          </h3>
          <ul
            className={
              visibleArticles > 0 ? "main__card-wrap" : "main__card-wrap_hidden"
            }
          >
            {newsArticles.slice(0, visibleArticles).map((article, index) => (
              <NewsCard key={index} {...article} />
            ))}
          </ul>
          <button
            type="button"
            onClick={handleCardRender}
            className="main__button"
          >
            Show more
          </button>
        </>
      ) : isSearched ? (
        <p className="main__error-message">
          No results found. Please try another search.
        </p>
      ) : null}
      <About />
    </main>
  );
};

export default Main;
