import React from "react";
import NewsCard from "../NewsCard/NewsCard";
import About from "../About/About";
import "./Main.css";

const Main = ({ newsCardData }) => {
  return (
    <main className="main">
      <h3 className="main__header">Search results</h3>
      <ul className="main__card-wrap">
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </ul>
      <button className="main__button">Show more</button>
      <About />
    </main>
  );
};

export default Main;
