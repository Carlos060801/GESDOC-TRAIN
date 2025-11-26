// src/pages/DashboardPage.jsx
import React, { useState } from "react";
import Layout from "../layout/Layout";
import TrainingCard from "../components/TrainingCard";
import Tabs from "../components/Tabs";
import DocumentsTable from "../components/DocumentsTable";
import AttendanceTable from "../components/AttendanceTable";

const DashboardPage = () => {
  const [activeTab, setActiveTab] = useState("info");

  const training = {
    title: "Induction in Cybersecurity",
    status: "SCHEDULED",
    dateTime: "20/03/2026, 10:00 AM",
    modality: "Virtual",
    durationMinutes: 120,
  };

  const documents = [
    { name: "Legal", category: "Mandatory", status: "Complete" },
    { name: "Data Usage Policy", category: "Marketing", status: "Pending" },
  ];

  const attendance = [
    {
      employee: "Juan Pérez",
      date: "20/03/2026",
      status: "Present",
      observation: "",
    },
    {
      employee: "Laura Gómez",
      date: "20/03/2026",
      status: "Late",
      observation: "Llegó 10 minutos tarde",
    },
  ];

  return (
    <Layout>
      <h1 className="page-title">Trainings Management</h1>

      <TrainingCard training={training} />

      <Tabs active={activeTab} setActive={setActiveTab} />

      {activeTab === "info" && (
        <p style={{ marginTop: "15px" }}>
          Aquí puedes añadir la información general de la capacitación: descripción,
          objetivos, alcance, requisitos, etc.
        </p>
      )}

      {activeTab === "docs" && <DocumentsTable documents={documents} />}

      {activeTab === "attendance" && <AttendanceTable list={attendance} />}
    </Layout>
  );
};

export default DashboardPage;
