import React from "react";
import NewsCard from "../NewsCard/NewsCard";
import NewsContext from "../../context/NewsContext";
import { useContext } from "react";
import cardImage from "../../assets/card-image.jpeg";
import "./SavedNews.css";

const SavedNews = () => {
  // const { newsArticles } = useContext(NewsContext);

  const newsArticles = [
      {
          title: "Breaking News: Tech Innovation in 2024",
          urlToImage: cardImage, // Using the variable
          keyword: "Technology",
          content: "The latest advancements in AI and robotics are reshaping the industry...",
          pubDate: "2024-02-10",
          author: "John Doe",
      },
      {
          title: "Breaking News: Tech Innovation in 2024",
          urlToImage: cardImage, // Using the variable
          keyword: "Technology",
          content: "The latest advancements in AI and robotics are reshaping the industry...",
          pubDate: "2024-02-10",
          author: "John Doe",
      },
      {
          title: "Breaking News: Tech Innovation in 2024",
          urlToImage: cardImage, // Using the variable
          keyword: "Technology",
          content: "The latest advancements in AI and robotics are reshaping the industry...",
          pubDate: "2024-02-10",
          author: "John Doe",
      },
      {
          title: "Breaking News: Tech Innovation in 2024",
          urlToImage: cardImage, // Using the variable
          keyword: "Technology",
          content: "The latest advancements in AI and robotics are reshaping the industry...",
          pubDate: "2024-02-10",
          author: "John Doe",
      }
  ];
  

  console.log(newsArticles);
  return (
    <div className="saved-news">
      {newsArticles.map((article, index) => (
        <NewsCard key={index} {...article} />
      ))}
    </div>
  );
};

export default SavedNews;
