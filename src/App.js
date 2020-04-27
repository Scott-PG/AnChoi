import React, { Component } from "react";
import Header from "./components/shared/header";
import Food from "./components/Food";
import { Route } from "react-router-dom";
import "./App.css";


class App extends Component {
  render() {
    return (
      <div className="App">
        
        <Header />
        <Food />
        
        
      </div>
    );
  }
}

export default App;
