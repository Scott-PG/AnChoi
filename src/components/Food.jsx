import React, { Component } from "react";
import { Link } from "react-router-dom";
import Illustration from "../images/illustration_banhmi.png";
import Illustration2 from "../images/illustration_pho.png";
import Illustration3 from "../images/illustration_rolls.png";
import Illustration4 from "../images/illustration_drinks.png";
import "./Food.css";
import menu from "../menu-pdf/anchoimenu.pdf";

class Food extends Component {
  render() {
    return (
      <div className="menuHighlights" id="food">
        <div className="foodHeader">
          <p className="foodHeading">OUR FOOD</p>
          <a className="menu-link-pdf" href={menu}>
            <p className="menuLink">FULL MENU</p>
          </a>
        </div>

        <div className="specialtySection">
          <div className="foodStripes">
            <img className="foodIllustration" src={Illustration} />
            <div className="specialtyText">
              <p className="foodName">Bánh mì</p>
              <div className="foodText">
                <p className="bold">Bánh mì thịt nguội The Original Banh Mi </p>
                <p className="foodDescription">
                  Char-siu pork belly, chicken liver pate, pork bologna and
                  headcheese. Comes with aioli/garlic mayonnaise, butter,
                  pickled carrots and daikon, cucumber, jalapeno, and cilantro
                  on a toasted baguette.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="specialtySection2">
          <div className="foodStripes2">
            <div className="specialtyText2">
              <p className="foodName2">phở</p>
              <div className="foodText2">
                <p className="bold2">Phở bò Beef Noodle Soup</p>
                <p className="foodDescription2">
                  The National Dish of Vietnam: Beef broth simmered for 24 hours
                  and served with thin, flat rice noodles, beef brisket, rare
                  flank, saw tooth herb. Comes with bean sprouts, cilantro, Thai
                  Basil, lime, and long hot pepper.
                </p>
              </div>
            </div>
            <img className="foodIllustration2" src={Illustration2} />
          </div>
        </div>

        <div className="specialtySection">
          <div className="foodStripes">
            <img className="foodIllustration3" src={Illustration3} />
            <div className="specialtyText">
              <p className="foodName">SMALL PLATES</p>
              <div className="foodText">
                <p className="bold">Gỏi cuốn Spring Rolls </p>
                <p className="foodDescription">
                  Made to order and hand rolled with rice paper, vermicelli,
                  noodle, mint, chive, and leaf lettuce. Served with fish sauce,
                  or peanut hoisin sauce.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="specialtySection2">
          <div className="foodStripes2">
            <div className="specialtyText2">
              <p className="foodName2">drinks</p>
              <div className="foodText2">
                <p className="bold2">Bia Hà Nội</p>
                <p className="foodDescription2">
                  Beer with sriracha, maggi, lime, jalapeño, served in a
                  salt-rimmed plastic tumbler.
                </p>
              </div>
            </div>
            <img className="foodIllustration4" src={Illustration4} />
          </div>
        </div>
      </div>
    );
  }
}

export default Food;
