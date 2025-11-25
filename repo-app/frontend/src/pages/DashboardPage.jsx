// src/pages/DashboardPage.jsx
import React, { useState } from "react";
import TrainingCard from "../components/TrainingCard";
import Tabs from "../components/Tabs";
import DocumentsTable from "../components/DocumentsTable";
import AttendanceTable from "../components/AttendanceTable";

const DashboardPage = () => {
  const [activeTab, setActiveTab] = useState("information");

  // Datos de ejemplo (luego los sacamos de tu API)
  const training = {
    title: "Induction in Cybersecurity",
    status: "SCHEDULED",
    modality: "Virtual",
    dateTime: "20/03/2026, 10:00 AM",
    durationMinutes: 120,
  };

  const documents = [
    { id: 1, name: "Legal Policy", category: "Legal", mandatory: true },
    { id: 2, name: "Data Usage Policy", category: "Data", mandatory: true },
  ];

  const attendance = [
    {
      id: 1,
      employeeName: "Juan Pérez",
      department: "Sales",
      status: "Pending",
      observation: "",
    },
  ];

  return (
    <div className="page-content">
      <h2 style={{ marginBottom: "1rem", fontWeight: 600 }}>
        Trainings Management
      </h2>

      {/* Tarjeta principal */}
      <TrainingCard training={training} />

      {/* Tabs */}
      <Tabs activeTab={activeTab} onChange={setActiveTab} />

      {/* Contenido dinámico */}
      {activeTab === "information" && (
        <div className="tab-content">
          <p>
            Aquí puedes añadir la información general de la capacitación:
            descripción, objetivos, alcance, requisitos, etc.
          </p>
        </div>
      )}

      {activeTab === "documents" && (
        <div className="tab-content">
          <DocumentsTable documents={documents} />
        </div>
      )}

      {activeTab === "attendance" && (
        <div className="tab-content">
          <AttendanceTable attendance={attendance} />
        </div>
      )}
    </div>
  );
};

export default DashboardPage;
