import React, { Component } from "react";
import { Link } from "react-router-dom";

import Logo from "../../images/logo.png";
import Fan from "../../images/favicon.png";

import "./header.css";

class Header extends Component {
  render() {
    return (
      <>
        <div className="addressBar">
          <img className="fanImage" src={Fan} />
          <p className="location">85 ORCHARD STREET, NEW YORK, NY 10002</p>
          <p className="phone">212-226-3700</p>
        </div>
        <div className="headerBar">
          <div className="logo">
            <img className="logoImage" src={Logo} />
          </div>
          <nav className="navLinks">
            <Link className="link1" to="/">Our Story</Link>
            <Link className="link1" to="/">Menu</Link>
            <Link className="link1" to="/">Info</Link>
          </nav>
        </div>
      </>
    );
  }
}

export default Header;
