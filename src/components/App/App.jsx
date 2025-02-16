import Header from "../Header/Header";
import NewsContext from "../../context/NewsContext.jsx";
import Footer from "../Footer/Footer";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import getNews from "../../utils/newsApi.jsx";
import "./App.css";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeModal, setActiveModal] = useState("open");
  const [newsArticles, setNewsArticles] = useState({});
  const [savedArticles, setSavedArticles] = useState({});
  const [visibleArticles, setVisableArticles] = useState(0);

  const handleCardRender = () => {
    if (visibleArticles + 3 > 100) {
      setVisableArticles(100);
    }
    setVisableArticles((prevCount) => prevCount + 3);
  };

  const handleSearch = async (keyword) => {
    try {
      const articleData = await getNews(keyword);

      const articleObj = articleData.map((article) => ({
        ...article,
        keyword,
      }));

      setNewsArticles(articleObj);
      setVisableArticles(0);
      handleCardRender();
    } catch (err) {
      console.log(err);
    }
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

  // useEffect(() => {
  //   console.log(newsArticles)
  // }, [newsArticles])

  return (
    <div className="app">
      <NewsContext.Provider value={{ newsArticles, handleSearch }}>
        <div className="page">
          <Header
            handleOpenLoginModal={handleOpenLoginModal}
            handleOpenRegisterModal={handleOpenRegisterModal}
            isLoggedIn={isLoggedIn}
          />
          <Outlet
            context={{
              visibleArticles,
              handleCardRender,
              handleOpenLoginModal,
              handleOpenRegisterModal,
            }}
          />
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
