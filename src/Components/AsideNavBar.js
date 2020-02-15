import React from "react";
import { Link } from "react-router-dom";

const AsideNavBar = props => {
  function handleClick(event) {
    event.preventDefault();
    props.callback(event.target.innerHTML);
  }

  return (
    <aside id="sidebar" className="col-2">
      <ul className="nav flex-column">
        {props.categories.map(category => {
          return (
            <Link
              key={category}
              to={{ pathname: `/category/${category}` }}
              replace
              onClick={handleClick}
            >
              <li className="nav-item">{category}</li>
            </Link>
          );
        })}
      </ul>
    </aside>
  );
};

export default AsideNavBar;
