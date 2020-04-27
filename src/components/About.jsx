import React, { Component } from "react";
import "./About.css";
import owners from "../images/owner_stroke_white.png";
import storefront from "../images/storefront.jpg";

class About extends Component {
  render() {
    return (
      <div className="about-holder">
        <h2 className="about-title">Our Story</h2>
        <img
          className="about-storefront-image"
          src={storefront}
          alt="View from the street at night"
        />
        <div className="about-blurb-div">
          <h2 className="about-blurb">“Ăn” to Eat</h2>
          <h2 className="about-blurb">“ChƠi” to Play</h2>
          <p className="about-text">
            Being a neighborhood spot, we wanted to have a sense of camaraderie
            and comfort. The regulars who come here time and time again want a
            noodle soup or a pho that has the senses and smells they grew up
            eating in their families. It’s just a feel good type of food.
          </p>
          <p className="about-text">
            ‘An choi’ is when Vietnamese people go out to drink. 'An' means ‘to
            eat’ and ‘choi’ means ‘to play’. My mom always wanted her food in a
            restaurant. In 2009, when she came in on opening night and saw all
            her food and recipes on the table it was a beautiful thing.
          </p>
        </div>
        <div className="about-image-div">
          <img className="about-owners-image" src={owners} alt="owners" />
          <h3 className="about-owners-title">Chef Dennis Ngô and Tuay Bùi</h3>
        </div>
      </div>
    );
  }
}

export default About;
