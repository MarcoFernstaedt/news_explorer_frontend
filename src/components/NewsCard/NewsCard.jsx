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
      <img src={cardImage} alt="Card image" className="card__image" />
      {/* <div className="card__tag">keyWord</div> */}
      <button type="button" className="card__save-btn"></button>
      <div className="card__content">
        <p className="card__pub-date">October 24, 2024</p>
        <h3 className="card__header">
          Grand Teton Renews Historic Crest Trail
        </h3>
        <p className="card__paragraph">
          “The linking together of the Cascade and Death Canyon trails, at their
          heads, took place on October 1, 1933, and marked the first step in the
          realization of a plan whereby the hiker will be...
        </p>
        <p className="card__author">Author</p>
      </div>
    </li>
  );
};

export default NewsCard;
