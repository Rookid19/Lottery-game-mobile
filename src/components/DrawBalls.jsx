import React from "react";
import { MdArrowDropDown } from "react-icons/md";
import "../css/DrawBalls.css";

function DrawBalls() {
  const balls = [1, 2, 3, 4];
  return (
    <div className="draw_balls_wrapper">
      <span>001179</span>
      {balls.map((number) => (
        <div className="balls" key={number}>{number}</div>
      ))}
      <MdArrowDropDown size={20} />
    </div>
  );
}

export default DrawBalls;
