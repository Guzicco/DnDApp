import React from "react";
import DDLogo from "../Static/img/DDLogo.jpg";
import { NavLink } from "react-router-dom";

const NavigationBar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <a className="navbar-brand" href="/">
        <img
          src={DDLogo}
          alt="dnd icon"
          width="30px"
          height="30px"
          className="d-line-inblock"
        />
      </a>
      <ul className="list-group">
        <NavLink exact to="/home" replace>
          <li>{"Dungeons & Dragons - WebBook"}</li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default NavigationBar;
