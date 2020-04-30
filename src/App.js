import React, { Component } from "react";
import Collage from "./components/Collage";
import About from "./components/About";
import Food from "./components/Food";
import Info from "./components/Info";
import Layout from "./components/shared/Layout";
import "./App.css";
import Divider from "./components/shared/Divider";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Collage />
          <About />
          <Divider />
          <Food />
          <Divider />
          <Info />
        </Layout>
      </div>
    );
  }
}

export default App;
