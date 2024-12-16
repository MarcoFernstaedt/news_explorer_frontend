// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Header from "../Header/Header";
import Main from "../Main/Main";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <div className="page">
        <Header />
        <Main />
      </div>
    </div>
  );
};

export default App;
