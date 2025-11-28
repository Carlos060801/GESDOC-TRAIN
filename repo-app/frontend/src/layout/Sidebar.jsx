import React from "react";
import { NavLink } from "react-router-dom";
import {
  MdDashboard,
  MdPeople,
  MdLibraryBooks,
  MdDescription,
  MdPerson
} from "react-icons/md";

import "../styles/sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">

      <h2 className="sidebar-logo">GESDOC & TRAIN</h2>

      <nav className="sidebar-menu">

        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive ? "sidebar-item active" : "sidebar-item"
          }
        >
          <MdDashboard className="sidebar-icon" />
          Dashboard
        </NavLink>

        <NavLink
          to="/employees"
          className={({ isActive }) =>
            isActive ? "sidebar-item active" : "sidebar-item"
          }
        >
          <MdPeople className="sidebar-icon" />
          Employees
        </NavLink>

        <NavLink
          to="/trainings"
          className={({ isActive }) =>
            isActive ? "sidebar-item active" : "sidebar-item"
          }
        >
          <MdLibraryBooks className="sidebar-icon" />
          Trainings
        </NavLink>

        <NavLink
          to="/documents"
          className={({ isActive }) =>
            isActive ? "sidebar-item active" : "sidebar-item"
          }
        >
          <MdDescription className="sidebar-icon" />
          Documents
        </NavLink>

        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive ? "sidebar-item active" : "sidebar-item"
          }
        >
          <MdPerson className="sidebar-icon" />
          My Profile
        </NavLink>

      </nav>
    </div>
  );
};

export default Sidebar;
