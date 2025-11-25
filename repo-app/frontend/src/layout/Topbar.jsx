// src/layout/Topbar.jsx
import React from "react";

const Topbar = () => {
  return (
    <header className="topbar">
      <div className="topbar-title">Trainings Management</div>

      <div className="topbar-actions">
        <input
          className="search-input"
          type="text"
          placeholder="Search"
        />
        <select className="filter-select">
          <option>Filter by Status</option>
          <option>Scheduled</option>
          <option>Completed</option>
          <option>Cancelled</option>
        </select>
        <button className="primary-btn">Create New Training</button>
      </div>
    </header>
  );
};

export default Topbar;
