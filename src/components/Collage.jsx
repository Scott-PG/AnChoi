import React from "react";
import "./Collage.css";
import chains from "../images/chainss.png";
function Collage() {
  return (
    <div className="collage">
      <div className="collage-secondary-container">
        <div className="collage-button-border-one">
          <a className="collage-button-links" href="tel:212–226–3700">
            <button className="collage-button call-to-reserve">
              Call to Reserve
            </button>
          </a>
          <a
            className="collage-button-links"
            href="https://direct.chownow.com/order/16531/locations"
          >
            <button className="collage-button take-out">Take Out</button>
          </a>
          <a
            className="collage-button-links"
            href="https://direct.chownow.com/order/16531/locations"
          >
            <button className="collage-button delivery">Delivery</button>
          </a>
          <div className="circle-container">
            <div className="circle1"></div>
            <div className="circle2"></div>
          </div>
        </div>
        <div className="collage-button-border-two">
          <h4 className="hours">Hours</h4>

          <h3 className="kitchen">Kitchen</h3>
          <p className="collage-text-style">
            <span>
              <strong>Mon </strong>6p-11p
              <br className="responsive-br" /> <strong>Tue & Thu </strong>{" "}
              12p-11p
              <br className="responsive-br" />
              <strong> Fri & Sat </strong> 12p-11:30p
              <br className="responsive-br" /> <strong>Sun </strong>
              12p-10:30p
            </span>
          </p>

          <h3 className="bar">Bar</h3>
          <p className="collage-text-style">
            <span>
              <strong> Mon-Sat </strong> 6p-12a
              <br className="responsive-br" /> <strong>Sun </strong> 6p-11:30p
            </span>
          </p>
        </div>
        <img className="chain chain1" src={chains} />
        <img className="chain chain2" src={chains} />
      </div>
    </div>
  );
}

export default Collage;
