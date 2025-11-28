import React from "react";
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

        <a href="/dashboard" className="sidebar-item active">
          <MdDashboard className="sidebar-icon" />
          Dashboard
        </a>

        <a href="/employees" className="sidebar-item">
          <MdPeople className="sidebar-icon" />
          Employees
        </a>

        <a href="/trainings" className="sidebar-item">
          <MdLibraryBooks className="sidebar-icon" />
          Trainings
        </a>

        <a href="/documents" className="sidebar-item">
          <MdDescription className="sidebar-icon" />
          Documents
        </a>

        <a href="/profile" className="sidebar-item">
          <MdPerson className="sidebar-icon" />
          My Profile
        </a>

      </nav>
    </div>
  );
};

export default Sidebar;
