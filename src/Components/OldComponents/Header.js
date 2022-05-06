import React from "react";
import "./Background.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="Header">
      <NavLink to="/home" style={({ isActive }) => {return {color: isActive ? "yellow" : "white",textDecoration: "none"}}}> Home Page </NavLink>
    </div>
  );
};

export default Header;
