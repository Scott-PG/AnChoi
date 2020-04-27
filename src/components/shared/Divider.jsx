import React from "react";
import Vector from "../../images/Vector.png";
import "./Divider.css"
function Divider() {
  return (
    <div className="vector-container">
      <div>
        <img className="vector" src={Vector} />
      </div>
    </div>
  );
}

export default Divider;
