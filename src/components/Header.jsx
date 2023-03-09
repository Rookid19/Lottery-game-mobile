import React from "react";
import { FiMenu } from "react-icons/fi";
import { MdArrowDropDown } from "react-icons/md";

function Header() {
  const formatTime = (time) => {
    const hours = Math.floor(time / 3600)
      .toString()
      .padStart(2, "0");
    const minutes = Math.floor((time % 3600) / 60)
      .toString()
      .padStart(2, "0");
    const seconds = (time % 60).toString().padStart(2, "0");
    return (
      <div className="timer_wrapper">
        <div className="timer_row">
          <div className="timer_unit">HRS</div>
          <span className="timer">{hours}:</span>
        </div>
        <div className="timer_row">
          <div className="timer_unit">MIN</div>
          <span className="timer">{minutes}:</span>
        </div>
        <div className="timer_row">
          <div className="timer_unit">SEC</div>
          <span className="timer">{seconds}</span>
        </div>
      </div>
    );
  };

  return (
    <div className="header">
      <div className="title_wrapper">
        <span id="game_title">OB Royal 5</span>
        <MdArrowDropDown size={20} />
      </div>
      <div>
        <span id="ticker_id">NO:20221108-246</span> <br />
        <span id="ticker_id">For sale</span>
      </div>
      <div>{formatTime(400)}</div>
      <FiMenu size={30} />
    </div>
  );
}

export default Header;

// HiBars3
