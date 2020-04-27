import React from "react";
import "./Collage.css";
// import collage from "../images/collage.png";

function Collage() {
  return (
    <div className="collage">
      <div className="collage-button-border-one">
        <button className="collage-button">Call to Reserve</button>
        <button className="collage-button">Take Out</button>
        <button className="collage-button">Delivery</button>
      </div>
      <div className="collage-button-border-two">
        <h4 className="hours">Hours</h4>

        <div className="kitchen-containter">
          <h3 className="kitchen">Kitchen</h3>
          <p className="text-style">
            <span>
              <strong>Mon </strong>6p-11p <strong>Tue & Thu </strong> 12p-11p
              <strong> Fri & Sat </strong> 12p-11:30p <strong>Sun </strong>
              12p-10:30p
            </span>
          </p>
        </div>
        <div className="bar-container">
          <h3 className="bar">Bar</h3>
          <p className="text-style">
            <span>
              <strong> Mon-Sat </strong> 6p-12a <strong>Sun </strong> 6p-11:30p
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Collage;
