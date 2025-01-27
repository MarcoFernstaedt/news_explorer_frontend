import React from "react";
import NewsContext from "../../context/NewsContext.jsx";
import { useForm } from "../../hooks/useForm";
import { useContext } from "react";
import "./SearchForm.css";

const SearchForm = () => {
  const { handleSearch } = useContext(NewsContext);
  const { values, handleChange } = useForm({});

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log(values)
    // handleSearch(values);
  };

  return (
    <form className="search-form">
      <input
        className="search-form__input"
        type="text"
        placeholder="Enter topic"
        name="search"
        id="search"
        value={values.search || ""}
        onChange={handleChange}
        aria-label="Search topic"
        minLength="2"
        maxLength="30"
        required
      />
      <button
        onSubmit={handleSearchSubmit}
        className="search-form__btn"
        type="submit"
      >
        Search
      </button>
    </form>
  );
};

export default SearchForm;
