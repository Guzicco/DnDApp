import React from "react";
import DDLogo from "../Static/img/DDLogo.jpg";

const NavigationBar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <a className="navbar-brand" href="!">
        <img
          src={DDLogo}
          alt="dnd icon"
          width="30px"
          height="30px"
          className="d-line-inblock"
        />
      </a>
      <div>{"Dungeons & Dragons - WebBook"}</div>
    </nav>
  );
};

export default NavigationBar;
