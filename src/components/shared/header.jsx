import React, { Component } from "react";
import { Link } from "react-router-dom";

import Logo from "../../images/logo.png";
import Fan from "../../images/favicon.png";

import "./header.css";

class Header extends Component {
  render() {
    return (
      <div className="header-div">
        <div className="addressBar">
          <img className="fanImage" src={Fan} />
          <p className="location">85 ORCHARD STREET, NEW YORK, NY 10002</p>
          <p className="phone">212-226-3700</p>
        </div>
        <div className="headerBar">
          <div className="logo">
            <img className="logoImage" src={Logo} />
          </div>
          <div className="addressBar2">
            <p className="location">85 ORCHARD STREET</p>
            <p className="location2">NEW YORK, NY 10002</p>
            <p className="phone">212-226-3700</p>
          </div>
          <nav className="navLinks">
            <a className="link1" href="#about">
              Our Story
            </a>
            <a className="link1" href="#food">
              Menu
            </a>
            <a className="link1" href="#info">
              Info
            </a>
          </nav>
        </div>
      </div>
    );
  }
}

export default Header;
