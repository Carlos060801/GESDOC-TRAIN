import React from "react";
import "../styles/tabs.css";

const Tabs = ({ active, setActive }) => {
  return (
    <div className="tabs">
      <button
        className={`tab ${active === "info" ? "active" : ""}`}
        onClick={() => setActive("info")}
      >
        Information
      </button>

      <button
        className={`tab ${active === "docs" ? "active" : ""}`}
        onClick={() => setActive("docs")}
      >
        Required Documents
      </button>

      <button
        className={`tab ${active === "attendance" ? "active" : ""}`}
        onClick={() => setActive("attendance")}
      >
        Attendance List
      </button>
    </div>
  );
};

export default Tabs;
