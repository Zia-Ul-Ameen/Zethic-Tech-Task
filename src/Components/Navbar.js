import React, { useState } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const history = useNavigate();

  const currentPathName =
    window.location.pathname.split("/")[1] === ""
      ? "BarChart"
      : window.location.pathname.split("/")[1];

  const handleSelect = (task) => {
    history(`/${task}`);
  };

  const tasks = [
    "BarChart",
    "PieChart_1",
    // "Pie_Chart_2",
    // "Filter",
    "Virtualized_List",
    "Pagination",
  ];
  return (
    <div className="Navbar">
      <ul>
        {tasks.map((task) => (
          <li
            className={`${currentPathName === task ? "NavbarliSelected" : ""}`}
            onClick={() => {
              handleSelect(task);
            }}
          >
            {task}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
