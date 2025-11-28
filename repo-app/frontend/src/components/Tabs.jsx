import React from "react";

const Tabs = ({ active, setActive, tabs }) => {
  return (
    <div className="tabs-container">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`tab-item ${active === tab.id ? "active" : ""}`}
          onClick={() => setActive(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
