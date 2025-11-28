import React, { useState } from "react";
import Layout from "../layout/Layout";
import TrainingCard from "../components/TrainingCard";
import Tabs from "../components/Tabs";
import DocumentsTable from "../components/DocumentsTable";
import AttendanceTable from "../components/AttendanceTable";
import "../styles/dashboard.css";

const DashboardPage = () => {
  const [activeTab, setActiveTab] = useState("info");

  const training = {
    title: "Induction in Cybersecurity",
    status: "SCHEDULED",
    dateTime: "29/01/2026, 10:00 AM",
    modality: "Virtual",
    durationMinutes: 120
  };

  const documents = [
    { id: 1, name: "Legal", category: "Movement", status: "Complete" },
    { id: 2, name: "Data Usage Policy", category: "Mandatory", status: "Pending" }
  ];

  const attendance = [
    {
      id: 1,
      employee: "Juan Pérez (ID: 129)",
      department: "Sales",
      status: "Pending",
      observation: "-"
    }
  ];

  return (
    <Layout>
      <div className="dashboard-header">
        <div>
          <h1 className="page-title">Trainings Management</h1>
          <p className="page-subtitle">
            Administra las capacitaciones, documentos requeridos y listas de asistencia.
          </p>
        </div>

        <div className="top-actions">
          <input type="text" placeholder="Search" className="search-input" />
          <select className="filter-select">
            <option>Filter by Status</option>
            <option>Scheduled</option>
            <option>Completed</option>
          </select>
          <button className="btn-primary">Create New Training</button>
        </div>
      </div>

      <TrainingCard training={training} />
      <Tabs active={activeTab} setActive={setActiveTab} />

      <div className="tabs-content">
        {activeTab === "info" && (
          <>
            <div className="card-section">
              <h3>Documents for this Training</h3>
              <DocumentsTable documents={documents} />
            </div>

            <div className="card-section">
              <h3>Attendance List</h3>
              <AttendanceTable list={attendance} />
            </div>
          </>
        )}

        {activeTab === "docs" && (
          <div className="card-section">
            <h3>Required Documents</h3>
            <DocumentsTable documents={documents} />
          </div>
        )}

        {activeTab === "attendance" && (
          <div className="card-section">
            <h3>Attendance List</h3>
            <AttendanceTable list={attendance} />
          </div>
        )}
      </div>
    </Layout>
  );
};

export default DashboardPage;
