import React from "react";
// import logo from './logo.svg';
import "./App.css";
import Header from "./components/header";
import About from "./components/about";
import Quick from "./components/quick";
import Portfolio from "./components/portfolio";

const App = () => {
  return (
    <div>
      <Header />
      <About />
      <Quick />
      <Portfolio />
    </div>
  );
};

export default App;
