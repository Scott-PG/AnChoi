import React, { Component } from "react";
import Header from "./components/shared/header";
import Collage from "./components/Collage";
import { Route } from "react-router-dom";
import "./App.css";


class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <Header />
        </header>
      <Collage />
      </div>
    );
  }
}

export default App;
