import { Routes, Route } from "react-router-dom";

import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import DashboardPage from "../pages/DashboardPage";
import EmployeesPage from "../pages/EmployeesPage";

export const AppRouter = () => {
  return (
    <Routes>
      {/* 🔵 Rutas de autenticación */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      {/* 🔵 Dashboard principal */}
      <Route path="/dashboard" element={<DashboardPage />} />

      {/* 🔵 Employees (GESTIÓN DE EMPLEADOS) */}
      <Route path="/employees" element={<EmployeesPage />} />

      {/* 🔵 Ruta por defecto */}
      <Route path="*" element={<LoginPage />} />
    </Routes>
  );
};
