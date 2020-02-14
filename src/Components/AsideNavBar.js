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
            <Link to={"/" + { category }} key={category}>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  href={"/" + category}
                  onClick={handleClick}
                >
                  {category}
                </a>
              </li>
            </Link>
          );
        })}
      </ul>
    </aside>
  );
};

export default AsideNavBar;
