import React, { Component } from "react";
import Header from "./components/shared/header";
import Collage from "./components/Collage";
import About from "./components/About";
import Food from "./components/Food";
import Info from "./components/Info";
import Footer from "./components/shared/Footer";
import "./App.css";
import Divider from "./components/shared/Divider";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Collage />
        <About />
        <Divider />
        <Food />
        <Divider />
        <Info />
        <Footer />
      </div>
    );
  }
}

export default App;
