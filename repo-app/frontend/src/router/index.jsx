import { Routes, Route } from "react-router-dom";

import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import DashboardPage from "../pages/DashboardPage";
import EmployeesPage from "../pages/EmployeesPage";
import TrainingsPage from "../pages/TrainingsPage";
import DocumentsPage from "../pages/DocumentsPage";

export const AppRouter = () => {
  return (
    <Routes>
      {/* 🔵 Rutas de autenticación */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      {/* 🔵 Dashboard principal */}
      <Route path="/dashboard" element={<DashboardPage />} />

      {/* 🔵 Módulos del Sistema */}
      <Route path="/employees" element={<EmployeesPage />} />
      <Route path="/trainings" element={<TrainingsPage />} />
      <Route path="/documents" element={<DocumentsPage />} />

      {/* 🔵 Ruta por defecto */}
      <Route path="*" element={<LoginPage />} />
    </Routes>
  );
};
