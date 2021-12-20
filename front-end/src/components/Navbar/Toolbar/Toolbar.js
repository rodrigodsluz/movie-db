import React from "react";
import { Link } from "react-router-dom";
import ToggleButton from "../SideDrawer/ToggleButton";

import "./Toolbar.scss";

const Toolbar = ({ isOpen, drawerClickHandler }) => (
  <header className="toolbar">
    <div className="toolbar-wrapper">
      <nav className="toolbar__navigation">
        <div className="toolbar_navigation-items">
          <ul>
            <li>
              <Link to="/">Trabalho prático - Banco de dados II - Filmes</Link>
            </li>
          </ul>
        </div>
        <div className="spacer" />

        <ToggleButton isOpen={isOpen} click={drawerClickHandler} />
      </nav>
    </div>
  </header>
);

export default Toolbar;
