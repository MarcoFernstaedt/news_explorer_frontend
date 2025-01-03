import Header from "../Header/Header";
import Main from "../Main/Main";
import About from "../About/About";
import Footer from "../Footer/Footer";
import LoginModal from "../LoginModal/LoginModal";
import "./App.css";
import { useState } from "react";

const App = () => {
  const [activeModal, setActiveModal] = useState("open");

  const openModal = () => {
    setActiveModal("open");
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  return (
    <div className="app">
      <div className="page">
        <Header />
        <Main />
        <About />
        <Footer />
      </div>
      {activeModal === "open" && (
        <LoginModal
          title="Sign in"
          buttonText="Sign In"
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default App;
