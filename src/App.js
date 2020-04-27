import React, { Component } from "react";
import Header from "./components/shared/header";
import { Route } from "react-router-dom";
import "./App.css";


class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <Header />
        </header>
      </div>
    );
  }
}

export default App;
