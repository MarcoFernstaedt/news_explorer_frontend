import Header from "../Header/Header";
import Main from "../Main/Main";
import About from "../About/About";
import Footer from "../Footer/Footer";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import "./App.css";
import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import getNews from "../../utils/newsApi.jsx";

const App = () => {
  const [activeModal, setActiveModal] = useState("open");
  const [newsArticles, setNewsArticles] = useState([]);

  const handleOpenModal = () => {
    setActiveModal("open");
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  return (
    <div className="app">
      <div className="page">
        {/* <Switch> */}
          {/* <Route exact path="/"> */}
            <Header />
            {/* {newsArticles.length > 0 && <Main />} */}
            <Main />
            <About />
          {/* </Route> */}
        {/* </Switch> */}
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
    </div>
  );
};

export default App;
