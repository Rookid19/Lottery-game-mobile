import React from "react";
import { MdArrowDropDown } from "react-icons/md";
import "../css/Tabs.css";

function Tabs() {
  const tabs_buttons = ["2 Sides", "B", "C", "D"];
  return (
    <div className="tab_wrapper">
      <div className="tab_container">
        {tabs_buttons.map((letter) => (
          <button className="tab_button">{letter}</button>
        ))}
        <MdArrowDropDown size={20} />
      </div>
    </div>
  );
}

export default Tabs;
