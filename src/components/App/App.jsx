import Header from "../Header/Header";
import Main from "../Main/Main";
import About from "../About/About";
import Footer from '../Footer/Footer'
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <div className="page">
        <Header />
        <Main />
        <About />
        <Footer />
      </div>
    </div>
  );
};

export default App;
