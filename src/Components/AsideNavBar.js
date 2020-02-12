import React from "react";

const AsideNavBar = ({ categories }) => {
  return (
    <aside id="sidebar" className="col-2">
      <ul className="nav flex-column">
        {categories.map(category => {
          return (
            <li key={category} className="nav-item">
              <a className="nav-link active" href={"/" + category}>
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
