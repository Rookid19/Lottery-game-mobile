import React from "react";
import { MdArrowDropDown } from "react-icons/md";
import "../css/DrawBalls.css";
import ball from "../images/reel.png";
function DrawBalls() {
  const balls = [1, 2, 3, 4];
  return (
    <div className="draw_balls_wrapper">
      <span>001179</span>
      {balls.map((number) => (
        <img key={number} src={ball} id="image_ball" alt="" />
      ))}
      <MdArrowDropDown size={20} />
    </div>
  );
}

export default DrawBalls;
