import React from "react";
import "../css/DrawNumber.css";
import { compositeButtons, numbers } from "../utils/Data";

function DrawNumbers() {
  const infoData = [1, 2];
  return (
    <div className="draw_number_wrapper">
      <div className="info">
        <div>
          <span className="price">Price </span>
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
      {infoData.map((num) => (
        <div>
          <div className="numbers_container">
            {numbers.map(({ number, label }) => (
              <div className="button_wrapper" key={label}>
                <button className="round_button">{number}</button>
                <div className="label">{label}</div>
              </div>
            ))}
          </div>
          <div className="composite">
            <div id="info-title">INFO {num}</div>
            <div>
              {compositeButtons.map(({ label, id }) => (
                <button className="button_filter" key={id}>
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      ))}

      <div className="black_border"></div>
    </div>
  );
}

export default DrawNumbers;
