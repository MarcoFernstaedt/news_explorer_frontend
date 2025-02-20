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
  const [isLoading, setIsLoading] = useState(false);
  const [haveResults, setHaveResults] = useState(null);
  const [isSearched, setIsSearched] = useState(false);

  const handleCardRender = () => {
    if (visibleArticles > newsArticles.length) {
      setVisableArticles(newsArticles.length);
    }
    setVisableArticles((prevCount) => prevCount + 3);
  };

  const handleSearch = async (keyword) => {
    setIsLoading(true);

    try {
      const articleData = await getNews(keyword);

      setHaveResults(articleData.length > 0);

      const articleObj = articleData.map((article) => ({
        ...article,
        keyword,
      }));

      setNewsArticles(articleObj);
      setVisableArticles(0);
      handleCardRender();
      setIsLoading(false);
      setIsSearched(true)
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
              isLoading,
              haveResults,
              isSearched,
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
