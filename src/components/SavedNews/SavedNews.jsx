import React from "react";
import NewsCard from "../NewsCard/NewsCard";
import "./SavedNews.css";

const SavedNews = () => {
  return (
    <div className="saved-news">
        <NewsCard />
        <NewsCard />
        <NewsCard />
    </div>
  );
};

export default SavedNews;
