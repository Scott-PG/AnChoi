import React from "react";
import "./Layout.css";
import Footer from "./Footer";
import Header from "./header";

const Layout = (props) => (
  <div className="layout">
    <Header />
    <div className="layout-children">{props.children}</div>
    <Footer />
  </div>
);

export default Layout;
