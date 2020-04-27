import React, { Component } from "react";
import Header from "./components/shared/header";
import Collage from "./components/Collage";
import About from "./components/About";
import { Route } from "react-router-dom";
import Footer from "./components/shared/Footer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <Header />
        </header>
        <Collage />
        <About />
        <Footer />
      </div>
    );
  }
}

export default App;
