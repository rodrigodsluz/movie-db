import React from "react";

import "./SideDrawer.scss";

const SideDrawer = (props) => {
  let drawerClasses = "side-drawer";
  if (props.show) {
    drawerClasses = "side-drawer open";
  }

  return (
    <nav className={drawerClasses}>
      <ul>
        <li>
          <a className="btn" href="/movies">
            Filmes
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default SideDrawer;
