// src/router/index.jsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import DashboardPage from "../pages/DashboardPage";
import TrainingsPage from "../pages/TrainingsPage";
import DocumentsPage from "../pages/DocumentsPage";
import EmployeesPage from "../pages/EmployeesPage";
import ProfilePage from "../pages/ProfilePage";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/trainings" element={<TrainingsPage />} />
      <Route path="/documents" element={<DocumentsPage />} />
      <Route path="/employees" element={<EmployeesPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      {/* Ruta por defecto */}
      <Route path="*" element={<h2 style={{ padding: "2rem" }}>404 - Not Found</h2>} />
    </Routes>
  );
};
