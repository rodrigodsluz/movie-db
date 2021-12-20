import React from "react";
import Navbar from "../Navbar/Navbar";

import "./Layout.scss";

const Layout = ({ children }) => {
  return (
    <div className="app">
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
