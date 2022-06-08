import { Typography } from "@mui/material";
import React from "react";
import "./style/navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <Typography>Logo</Typography>
      <div className="nav-menu">
        <ul className="menu-list">
          <li className="menu">menu</li>
          <li className="menu">menu</li>
          <li className="menu">menu</li>
          <li className="menu">menu</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
