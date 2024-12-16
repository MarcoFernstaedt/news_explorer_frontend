import React from "react";
import "./SearchForm.css";

const SearchForm = () => {
  return (
    <form className="search-form">
      <input
        className="search-form__input"
        type="text"
        placeholder="Enter topic"
        aria-label="Search topic"
        minLength="2"
        maxLength="30"
        required
      />
      <button className="search-form__btn" type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchForm;
