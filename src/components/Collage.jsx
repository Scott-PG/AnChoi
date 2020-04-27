import React from "react";
import "./Collage.css";

function Collage() {
  return (
    <div className="collage">
      <div className="collage-button-border-one">
        <button className="collage-button call-to-reserve">
          Call to Reserve
        </button>
        <button className="collage-button take-out">Take Out</button>
        <button className="collage-button delivery">Delivery</button>
        <div className="circle-container">
          <div className="circle1"></div>
          <div className="circle2"></div>
        </div>
      </div>
      <div className="collage-button-border-two">
        <h4 className="hours">Hours</h4>

        <h3 className="kitchen">Kitchen</h3>
        <p className="text-style">
          <span>
            <strong>Mon </strong>6p-11p
            <br className="responsive-br" /> <strong>Tue & Thu </strong> 12p-11p
            <br className="responsive-br" />
            <strong> Fri & Sat </strong> 12p-11:30p
            <br className="responsive-br" /> <strong>Sun </strong>
            12p-10:30p
          </span>
        </p>

        <h3 className="bar">Bar</h3>
        <p className="text-style">
          <span>
            <strong> Mon-Sat </strong> 6p-12a
            <br className="responsive-br" /> <strong>Sun </strong> 6p-11:30p
          </span>
        </p>
      </div>
    </div>
  );
}

export default Collage;
