// src/components/Tabs.jsx
import React from "react";

const Tabs = ({ activeTab, onChange }) => {
  return (
    <div className="tabs">
      <button
        className={activeTab === "information" ? "tab active" : "tab"}
        onClick={() => onChange("information")}
      >
        Información
      </button>

      <button
        className={activeTab === "documents" ? "tab active" : "tab"}
        onClick={() => onChange("documents")}
      >
        Documentos Requeridos
      </button>

      <button
        className={activeTab === "attendance" ? "tab active" : "tab"}
        onClick={() => onChange("attendance")}
      >
        Lista de Asistencia
      </button>
    </div>
  );
};

export default Tabs;
