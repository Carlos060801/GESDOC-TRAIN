import React from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import "../styles/layout.css";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      {/* Sidebar izquierdo */}
      <Sidebar />

      {/* Área derecha */}
      <div className="layout-main">
        <Topbar />

        {/* Contenido */}
        <div className="layout-content">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
