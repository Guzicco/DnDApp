import React from "react";

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
            <li key={category} className="nav-item">
              <a
                className="nav-link active"
                href={"/" + category}
                onClick={handleClick}
              >
                {category}
              </a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default AsideNavBar;
