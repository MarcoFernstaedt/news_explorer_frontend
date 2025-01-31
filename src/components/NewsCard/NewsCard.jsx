import React from "react";
import cardImage from "../../assets/card-image.jpeg";
import "./NewsCard.css";

const NewsCard = ({
  // isLoggedIn,
  article,
}) => {
  console.log(article);

  return (
    <li className="card">
      <img src={article.urlToImage} alt="Card image" className="card__image" />
      {/* <div className="card__tag">{article.}</div> */}
      <button type="button" className="card__save-btn"></button>
      <div className="card__content">
        <p className="card__pub-date">October 24, 2024</p>
        <h3 className="card__header">{article.title}</h3>
        <p className="card__paragraph">{article.content}</p>
        <p className="card__author">{article.author}</p>
      </div>
    </li>
  );
};

export default NewsCard;
