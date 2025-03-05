import Header from "../Header/Header";
import NewsContext from "../../context/NewsContext.jsx";
import UserContext from "../../context/UserContext.jsx";
import Footer from "../Footer/Footer";
import Drawer from "../Drawer/Drawer.jsx";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import getNews from "../../utils/newsApi.jsx";
import "./App.css";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { signUp, signIn, checkToken } from "../../utils/auth.jsx";
import {getArticles, saveArticles} from "../../utils/api.jsx";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [activeModal, setActiveModal] = useState("");
  const [newsArticles, setNewsArticles] = useState({});
  const [savedArticles, setSavedArticles] = useState({});
  const [visibleArticles, setVisableArticles] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSignUp = async (email, password) => {
    await signUp(email, password);
  };

  const handleSignIn = async (email, password) => {
    try {
      const response = await signIn(email, password);
      localStorage.setItem("token", response.token);
      setIsLoggedIn(true);
    } catch (err) {
      console.error(err);
    }
  };

  const handleCheckToken = async () => {
    const token = localStorage.getItem("token");
    const response = await checkToken(token);
    setIsLoggedIn(response.loggedIn);
  };

  const fetchArticles = async () => {
    const articles = await getArticles();
    localStorage.setItem("savedArticles", JSON.stringify(articles));
    console.log('fetch')
    console.log(articles)
    setSavedArticles(articles);
  };

  const handleSaveArticle = async ({ _id, isSaved, article }) => {
    try {
      const updatedArticles = await saveArticles({ _id, isSaved, article });
      setSavedArticles(updatedArticles); // Update state with new saved articles
    } catch (err) {
      console.error("Error saving article:", err);
    }
  };

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

      const articleObj = articleData.map((article) => ({
        _id: crypto.randomUUID(),
        isSaved: false,
        ...article,
        keyword,
      }));

      if (!hasSearched) {
        setHasSearched(true);
      }

      setNewsArticles(articleObj);
      setVisableArticles(0);
      handleCardRender();
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDrawerOpen = () => {
    setActiveModal("drawer");
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

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      checkToken(token).then((reponse) => {
        if (reponse.isLoggedIn) {
          setIsLoggedIn();
          fetchArticles();
        }
      });
    }
  }, []);

  useEffect(() => {
    const storedArticles = localStorage.getItem("savedsArticles");
    if (storedArticles) setSavedArticles(JSON.parse(storedArticles));
  }, []);

  useEffect(() => {
    console.log(savedArticles)
  }, [savedArticles])

  return (
    <div className="app">
      <UserContext.Provider value={{ currentUser, isLoggedIn }}>
        <NewsContext.Provider value={{ newsArticles, handleSearch }}>
          <div className="page">
            <Header
              handleOpenLoginModal={handleOpenLoginModal}
              handleOpenRegisterModal={handleOpenRegisterModal}
              handleSearch={handleSearch}
              handleDrawerOpen={handleDrawerOpen}
            />
            <Outlet
              context={{
                visibleArticles,
                handleCardRender,
                isLoading,
                hasSearched,
                handleSaveArticle,
              }}
            />
            <Footer />
          </div>
          {activeModal === "drawer" && (
            <Drawer
              handleCloseModal={handleCloseModal}
              handleOpenLoginModal={handleOpenLoginModal}
              isLoggedIn={isLoggedIn}
            />
          )}
          {activeModal === "login" && (
            <LoginModal
              title="Sign in"
              buttonText="Sign In"
              secondaryBtnText="Sign up"
              onSecondaryBtnClick={handleOpenRegisterModal}
              onClose={handleCloseModal}
              onSubmit={handleSignIn}
            />
          )}
          {activeModal === "register" && (
            <RegisterModal
              title="Sign in"
              buttonText="Sign up"
              secondaryBtnText="Login in"
              onSubmit={handleSignUp}
              onClose={handleCloseModal}
            />
          )}
        </NewsContext.Provider>
      </UserContext.Provider>
    </div>
  );
};

export default App;
