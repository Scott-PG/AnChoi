import React, { Component } from "react";
import "./Info.css";
import map from "../images/map.png";
import facebook from "../images/icon_fb.png";
import instagram from "../images/icon_instagram.png";
import twitter from "../images/icon_twitter.png";

class Info extends Component {
  render() {
    return (
      <div className="info-holder">
        <h2 className="info-title">Info</h2>
        <div className="info-text">
          <div className="info-address info-text-groups">
            <h2 className="info-text-header">Address</h2>
            <p className="info-text-p">
              85 ORCHARD STREET
              <br />
              NEW YORK, NY 10002
            </p>
          </div>
          <div className="info-contact">
            <h2 className="info-text-header">Contact Us</h2>
            <p className="info-text-p">212–226–3700</p>
            <p className="info-text-p">hello@anchoinyc.com</p>
          </div>
          <div className="info-hours">
            <h2 className="info-text-header">Hours</h2>
            <p>
              <strong>Kitchen</strong>
            </p>
            <div className="info-kitchen-hours">
              <p>
                Mon
                <br />
                6p-11p
              </p>
              <p>
                Tue&Thu
                <br />
                12p-11p
              </p>
              <p>
                Fri&Sat
                <br />
                12p-11:30p
              </p>
              <p>
                Sun
                <br />
                12p-10:30p
              </p>
            </div>
            <p>
              <strong>Bar</strong>
            </p>
            <div className="info-bar-hours">
              <p>
                Mon-Sat
                <br />
                6p-12a
              </p>
              <p>
                Sun
                <br />
                6p-11:30p
              </p>
            </div>
          </div>
          <div className="info-social-sidebar">
            <h2 className="info-text-header">Follow Us</h2>
            <div className="info-social-icon-div">
              <a href="https://www.facebook.com/AnChoi/">
                <img src={facebook} alt="facebook-icon social-icon" />
              </a>
              <a href="https://www.instagram.com/anchoinyc/">
                <img src={instagram} alt="instagram-icon social-icon" />
              </a>
              <a href="https://twitter.com/anchoinyc">
                <img src={twitter} alt="twitter-icon social-icon" />
              </a>
            </div>
          </div>
        </div>
        <img className="info-map" src={map} alt="map with marker" />
        <div className="info-social-inline">
          <h2 className="info-text-header">Follow Us</h2>
          <div className="info-social-icon-div">
            <a href="https://www.facebook.com/AnChoi/">
              <img src={facebook} alt="facebook-icon social-icon" />
            </a>
            <a href="https://www.instagram.com/anchoinyc/">
              <img src={instagram} alt="instagram-icon social-icon" />
            </a>
            <a href="https://twitter.com/anchoinyc">
              <img src={twitter} alt="twitter-icon social-icon" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Info;
