import React from "react";
import cardImage from "../../assets/card-image.jpeg";
import { useLocation } from "react-router-dom";
import "./NewsCard.css";

const NewsCard = ({
  isLoggedIn,
  title,
  urlToImage,
  keyword,
  content,
  publishedAt,
  author,
}) => {
  const location = useLocation();
  const savedNewsPage = location.pathname === "/saved-news";

  return (
    <li className="card">
      <img src={urlToImage} alt="Card image" className="card__image" />
      {savedNewsPage && <div className="card__tag">{keyword}</div>}
      <button type="button" className={savedNewsPage ? 'card__btn card__delete-btn' : "card__btn card__save-btn"}>
        {/* <div className="nard__alert-popup">You must be logged in to save</div> */}
      </button>
      <div className="card__content">
        <p className="card__pub-date">{publishedAt}</p>
        <h3 className="card__header">{title}</h3>
        <p className="card__paragraph">{content}</p>
        <p className="card__author">{author}</p>
      </div>
    </li>
  );
};

export default NewsCard;
