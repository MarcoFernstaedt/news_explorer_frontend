import React from "react";
import NewsCard from "../NewsCard/NewsCard";
import NewsContext from "../../context/NewsContext";
import { useContext } from "react";
import About from "../About/About";
import "./Main.css";
import { useOutletContext } from "react-router-dom";

const Main = () => {
  const { newsArticles } = useContext(NewsContext);
  const { visibleArticles, handleCardRender } = useOutletContext();

  return (
    <main className="main">
      <h3 className={visibleArticles > 0 ? "main__header" : "main__header_hidden"}>Search results</h3>
      <ul className={visibleArticles > 0 ? 'main__card-wrap' : 'main__card-wrap_hidden'}>
        {newsArticles.length > 0 &&
          newsArticles
            .slice(0, visibleArticles)
            .map((article, index) => (
              <NewsCard key={index} article={article} />
            ))}
        {/* <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard /> */}
      </ul>
      <button type="button" onClick={handleCardRender} className="main__button">
        Show more
      </button>
      <About />
    </main>
  );
};

export default Main;
