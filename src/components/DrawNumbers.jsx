import React from "react";
import "../css/DrawNumber.css";

function DrawNumbers() {
  return (
    <div className="draw_number_wrapper">
      <div className="info">
        <div>
          <span className="price">Price</span>
          <span className="price">195600</span>
        </div>
        <div>
          <span>
            <button className="first_button">20</button>
            <button className="mid_button">20</button>
            <button className="third_button">20</button>
          </span>
          <button id="hot_cold">Hot/Cold</button>
          <button id="lack">Lack</button>
        </div>
      </div>
      <div className="black_border"></div>
    </div>
  );
}

export default DrawNumbers;
