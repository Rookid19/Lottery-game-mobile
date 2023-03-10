import React from "react";
import { MdArrowDropDown } from "react-icons/md";
import "../css/Bets.css";

function Bets() {
  const numbers = ["1", "2", "4", "8", "16", "32", "64", "All in"];
  const options = ["Recent", "Add to cart", "Add number", "Bet now", "Track"];

  return (
    <div className="bets_container">
      <div className="bets_wrapper">
        {numbers.map((num) => (
          <button className="bets_button1">{num}</button>
        ))}
      </div>
      <div className="border"></div>
      <div className="control_button">
        <button className="amount_dropdown">
          <span style={{ color: "#707070" }}>0.2</span>
          <MdArrowDropDown size={20} />
        </button>
        <button className="increase_button">
          <span>-</span>
          <span>1</span>
          <span>+</span>
        </button>
        <div className="distribute">
          <span style={{ color: "#707070" }}>Distribute evenly</span>
          <MdArrowDropDown size={20} />
        </div>
      </div>
      <div className="options">
        {options.map((option) => (
          <button className="options_button">{option}</button>
        ))}
      </div>
    </div>
  );
}

export default Bets;
