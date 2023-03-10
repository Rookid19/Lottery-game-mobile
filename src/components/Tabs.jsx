import React from "react";
import { MdArrowDropDown } from "react-icons/md";
import "../css/Tabs.css";

function Tabs() {
  const tabs_buttons = ["2 Sides", "B", "C", "D"];
  const rows = [
    "First 3 Straight (Joint)",
    "First 3 Straight (Manual)",
    "All 5 Straight(Combo)",
  ];

  return (
    <div className="tab">
      <div className="tab_wrapper">
        <div className="tab_container">
          {tabs_buttons.map((letter,i) => (
            <button className="tab_button" key={i}>{letter}</button>
          ))}
          <MdArrowDropDown size={20} />
        </div>
      </div>
      <div className="tab2_container">
        {rows.map((letter,i) => (
          <button className="tab_button2" key={i}>{letter}</button>
        ))}
        <MdArrowDropDown size={20} />
      </div>
    </div>
  );
}

export default Tabs;
