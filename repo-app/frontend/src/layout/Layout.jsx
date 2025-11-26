// src/layout/Layout.jsx
import React from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      {/* Sidebar fijo */}
      <Sidebar />

      {/* Contenido */}
      <div className="layout-content">
        <Topbar />
        <main className="layout-page">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
