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
      <div>{formatTime(400)}</div>
      {/* <h6>
        00:04:31HRSMINSECNO:20221108-246 <br /> For sale
      </h6> */}
      <FiMenu />
    </div>
  );
}

export default Header;

// HiBars3
