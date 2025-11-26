import React from "react";
import TrainingCard from "../components/TrainingCard";
import Tabs from "../components/Tabs";
import DocumentsTable from "../components/DocumentsTable";
import AttendanceTable from "../components/AttendanceTable";

const DashboardPage = () => {
  return (
    <div className="dashboard-container">

      <h2 className="page-title">Trainings Management</h2>

      {/* Tarjeta principal */}
      <TrainingCard />

      {/* Tabs */}
      <Tabs
        tabs={[
          { id: 1, title: "Información", content: <p>Información general del entrenamiento aquí</p> },
          { id: 2, title: "Documentos Requeridos", content: <DocumentsTable /> },
          { id: 3, title: "Lista de Asistencia", content: <AttendanceTable /> },
        ]}
      />
    </div>
  );
};

export default DashboardPage;
