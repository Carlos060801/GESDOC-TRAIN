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
    durationMinutes: 120,
    state: "Active",
  };

  const documents = [
    { id: 1, name: "Legal", category: "Movement", status: "Complete" },
    {
      id: 2,
      name: "Data Usage Policy",
      category: "Mandatory",
      status: "Pending",
    },
  ];

  const attendance = [
    {
      id: 1,
      employee: "Juan Pérez (ID: 129)",
      department: "Sales",
      date: "29/01/2026",
      status: "Pending",
      observation: "",
    },
  ];

  return (
    <Layout>
      <div className="dashboard-container">
        {/* HEADER */}
        <div className="dashboard-topbar">
          <div>
            <h1 className="dashboard-title">Trainings Management</h1>
            <p className="dashboard-subtitle">
              Administra las capacitaciones, documentos requeridos y listas de
              asistencia.
            </p>
          </div>

          <div className="dashboard-actions">
            <div className="search-wrapper">
              <input
                type="text"
                className="search-input"
                placeholder="Search"
              />
            </div>

            <select className="filter-select">
              <option>Filter by Status</option>
              <option>Scheduled</option>
              <option>Completed</option>
              <option>Cancelled</option>
            </select>

            <button className="btn-primary">Create New Training</button>
          </div>
        </div>

        {/* TRAINING CARD */}
        <TrainingCard training={training} />

        {/* TABS */}
        <Tabs
          active={activeTab}
          setActive={setActiveTab}
          tabs={[
            { id: "info", label: "Information" },
            { id: "docs", label: "Required Documents" },
            { id: "attendance", label: "Attendance List" },
          ]}
        />

        {/* Contenido de las tabs */}
        <div className="tabs-section">
          {activeTab === "info" && (
            <>
              <div className="section-card">
                <div className="section-header">
                  <h3>Documents for this Training</h3>
                </div>
                <DocumentsTable documents={documents} />
              </div>

              <div className="section-card">
                <div className="section-header">
                  <h3>Attendance List</h3>
                </div>
                <AttendanceTable list={attendance} />
              </div>
            </>
          )}

          {activeTab === "docs" && (
            <div className="section-card">
              <div className="section-header">
                <h3>Required Documents</h3>
                <p className="section-subtitle">
                  Gestiona los documentos obligatorios y opcionales de la
                  capacitación.
                </p>
              </div>
              <DocumentsTable documents={documents} />
            </div>
          )}

          {activeTab === "attendance" && (
            <div className="section-card">
              <div className="section-header">
                <h3>Attendance List</h3>
                <p className="section-subtitle">
                  Revisa el estado de asistencia de los participantes.
                </p>
              </div>
              <AttendanceTable list={attendance} />
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default DashboardPage;
