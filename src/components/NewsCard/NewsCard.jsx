import React from "react";
import cardImage from "../../assets/card-image.jpeg";
import "./NewsCard.css";

const NewsCard = ({
  // isLoggedIn,
  title,
  urlToImage,
  keyword,
  content,
  pubDate,
  author,
}) => {
  console.log(keyword);

  return (
    <li className="card">
      {/* <img src={urlToImage} alt="Card image" className="card__image" />
      {/* <div className="card__tag">{keyword}</div> */}
      <button type="button" className="card__save-btn"></button>
      <div className="card__content">
        <p className="card__pub-date">publishedAt</p>
        <h3 className="card__header">{title}</h3>
        <p className="card__paragraph">{content}</p>
        <p className="card__author">{author}</p>
      </div>{" "}
      */}
    </li>
  );
};

export default NewsCard;
