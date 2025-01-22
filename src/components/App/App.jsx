import Header from "../Header/Header";
import Main from "../Main/Main";
import About from "../About/About";
import NewsContext from "../../context/newsContext.jsx";
import Footer from "../Footer/Footer";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import "./App.css";
import { useState } from "react";
// import { Route, Switch } from "react-router-dom";
import getNews from "../../utils/newsApi.jsx";

const App = () => {
  const [activeModal, setActiveModal] = useState("open");
  const [newsArticles, setNewsArticles] = useState([]);

  const handleSearch = (keyword) => {
    // search send api request.
    setNewsArticles([keyword]);
  };

  const handleOpenLoginModal = () => {
    setActiveModal("login");
  };

  const handleOpenRegisterModal = () => {
    setActiveModal("register");
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  return (
    <div className="app">
      <NewsContext.Provider value={{ newsArticles, handleSearch }}>
        <div className="page">
          <Header />
          <Main />
          <About />
          <Footer />
        </div>
        {activeModal === "login" && (
          <LoginModal
            title="Sign in"
            buttonText="Sign In"
            secondaryBtnText="Sign up"
            onClose={handleCloseModal}
          />
        )}
        {activeModal === "register" && (
          <RegisterModal
            title="Sign in"
            buttonText="Sign up"
            secondaryBtnText="Login in"
            onClose={handleCloseModal}
          />
        )}
      </NewsContext.Provider>
    </div>
  );
};

export default App;
