import React from "react";
import NewsCard from "../NewsCard/NewsCard";
import "./Main.css";

const Main = () => {
  return (
    <main className="main">
      <h3 className="main__header">Search results</h3>
      <ul className="main__card-wrap">
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </ul>
      <button className="main__button">Show more</button>
    </main>
  );
};

export default Main;
