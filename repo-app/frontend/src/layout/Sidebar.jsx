// src/layout/Sidebar.jsx
import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <span className="logo-title">GESDOC &amp; TRAIN</span>
      </div>

      <nav className="sidebar-nav">
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive ? "nav-item active" : "nav-item"
          }
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/employees"
          className={({ isActive }) =>
            isActive ? "nav-item active" : "nav-item"
          }
        >
          Employees
        </NavLink>

        <NavLink
          to="/trainings"
          className={({ isActive }) =>
            isActive ? "nav-item active" : "nav-item"
          }
        >
          Trainings
        </NavLink>

        <NavLink
          to="/documents"
          className={({ isActive }) =>
            isActive ? "nav-item active" : "nav-item"
          }
        >
          Documents
        </NavLink>

        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive ? "nav-item active" : "nav-item"
          }
        >
          My Profile
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
