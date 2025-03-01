import React, { useState } from "react";
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
  const [isSaved, setIsSaved] = useState(false);
  const location = useLocation().pathname;
  // const savedNewsPage = location.pathname === "/saved-news";

  return (
    <li className="card">
      <img src={urlToImage} alt="Card image" className="card__image" />
      {location === '/saved-news' && <div className="card__tag">{keyword}</div>}
      <button
        type="button"
        className={
          location === '/saved-news'
            ? "card__btn card__delete-btn"
            : "card__btn card__save-btn"
        }
      ></button>
      {!isLoggedIn && location === '/' ? (
        <div className="card__alert-popup">Signin to save article</div>
      ) : location === '/saed-news' ? (
        <div className="card__alert-popup">Remove from saved</div>
      ) : null}
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
