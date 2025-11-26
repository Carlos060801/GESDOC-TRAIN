// src/components/Tabs.jsx

const Tabs = ({ active, setActive }) => {
  return (
    <div className="tabs-container">
      <button
        className={`tab-btn ${active === "info" ? "active" : ""}`}
        onClick={() => setActive("info")}
      >
        Información
      </button>

      <button
        className={`tab-btn ${active === "docs" ? "active" : ""}`}
        onClick={() => setActive("docs")}
      >
        Documentos Requeridos
      </button>

      <button
        className={`tab-btn ${active === "attendance" ? "active" : ""}`}
        onClick={() => setActive("attendance")}
      >
        Lista de Asistencia
      </button>
    </div>
  );
};

export default Tabs;
