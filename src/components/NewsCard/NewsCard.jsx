import React, { useContext, useState } from "react";
import cardImage from "../../assets/card-image.jpeg";
import { useLocation } from "react-router-dom";
import "./NewsCard.css";
import UserContext from "../../context/UserContext";

const NewsCard = ({
  _id,
  isSaved,
  title,
  urlToImage,
  keyword,
  content,
  publishedAt,
  author,
}) => {
  const { isLoggedIn } = useContext(UserContext);
  const [marked, setIsMarked] = useState(false);
  const location = useLocation().pathname;

  const handleCardClassElem = `card__btn ${marked ? "card__save-btn_marked" : "card__save-btn"}`;

  const handleSaveArticles = () => {
    if (!isLoggedIn) return;

    const updatedSavedState = !isSaved; // Toggle isSaved

    // saveArticle({ _id, isSaved: updatedSavedState, article: { _id, title, urlToImage, keyword, content, publishedAt, author } });
  };

  return (
    <li className="card">
      <img src={urlToImage} alt="Card image" className="card__image" />
      {location === "/saved-news" && <div className="card__tag">{keyword}</div>}
      <button
        type="button"
        onClick={handleSaveArticles}
        className={
          location === "/saved-news"
            ? "card__btn card__delete-btn"
            : handleCardClassElem
        }
      ></button>
      {!isLoggedIn && location === "/" ? (
        <div className="card__alert-popup">Signin to save article</div>
      ) : location === "/saed-news" ? (
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
