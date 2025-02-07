import React from "react";
import NewsCard from "../NewsCard/NewsCard";
import NewsContext from "../../context/NewsContext";
import { useContext } from "react";
import "./SavedNews.css";

const SavedNews = () => {
  // const { newsArticles } = useContext(NewsContext);
  const newsArticles = [
    {
      title: "Breaking News: Tech Innovation in 2024",
      urlToImage: "https://via.placeholder.com/300", // Placeholder image URL
      keyword: "Technology",
      content:
        "The latest advancements in AI and robotics are reshaping the industry...",
      pubDate: "2024-02-10",
      author: "John Doe",
    },
    {
      title: "Sports Update: Champions League Final",
      urlToImage: "https://via.placeholder.com/300",
      keyword: "Sports",
      content:
        "The Champions League final ended in a thrilling penalty shootout...",
      pubDate: "2024-02-09",
      author: "Jane Smith",
    },
    {
      title: "Finance: Stock Market Hits Record Highs",
      urlToImage: "https://via.placeholder.com/300",
      keyword: "Finance",
      content:
        "The stock market soared to new heights as investors gained confidence...",
      pubDate: "2024-02-08",
      author: "Michael Johnson",
    },
    {
      title: "World News: Climate Summit 2024",
      urlToImage: "https://via.placeholder.com/300",
      keyword: "Climate",
      content:
        "World leaders gathered for a climate summit to discuss carbon emissions...",
      pubDate: "2024-02-07",
      author: "Emily White",
    },
    {
      title: "Health: The Benefits of a Mediterranean Diet",
      urlToImage: "https://via.placeholder.com/300",
      keyword: "Health",
      content:
        "Doctors recommend the Mediterranean diet for a longer and healthier life...",
      pubDate: "2024-02-06",
      author: "David Lee",
    },
  ];
console.log(newsArticles)
  return (
    <div className="saved-news">
      {newsArticles.map((article, index) => {
        <NewsCard key={index} {...article} />;
      })}
    </div>
  );
};

export default SavedNews;
