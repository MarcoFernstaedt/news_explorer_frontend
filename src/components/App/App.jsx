import Header from "../Header/Header";
import NewsContext from "../../context/NewsContext.jsx";
import Footer from "../Footer/Footer";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import getNews from "../../utils/newsApi.jsx";
import "./App.css";
import { useState } from "react";
import { Outlet } from "react-router-dom";

const App = () => {
  const [activeModal, setActiveModal] = useState("open");
  const [newsArticles, setNewsArticles] = useState([]);

  const handleSearch = (keyword) => {
    const articleArray = getNews(keyword);
    setNewsArticles(articleArray);
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
          <Outlet />
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
