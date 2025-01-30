import React from "react";
import NewsCard from "../NewsCard/NewsCard";
import NewsContext from "../../context/NewsContext";
import { useContext } from "react";
import About from "../About/About";
import "./Main.css";
import { useOutletContext } from "react-router-dom";

const Main = () => {
  const { newsArticles } = useContext(NewsContext);
  const { visibleArticles } = useOutletContext();

  return (
    <main className="main">
      <h3 className="main__header">Search results</h3>
      <ul className="main__card-wrap">
        {/* {newsArticles.slice(0, visibleArticles).forEach((article) => {
          return <NewsCard article={article} />;
        })} */}
        {/* <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard /> */}
      </ul>
      <button className="main__button">Show more</button>
      <About />
    </main>
  );
};

export default Main;
