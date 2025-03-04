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
import getArticles from "../../utils/api.jsx";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
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
    setSavedArticles(articles);
  };

  const handleSaveArticle = ({ _id, isSaved, article }) => {
    if (isSaved) {
      // Add article if not already saved
      setSavedArticles(prev => [...prev, article]); 
    } else {
      // Remove article if isSaved is false
      setSavedArticles(prev => prev.filter(a => a._id !== _id));
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
    const storedArticles = localStorage.getItem("newsArticles");
    if (storedArticles) setSavedArticles(JSON.parse(storedArticles));
  }, []);

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
      </UserContext.Provider>
    </div>
  );
};

export default App;
