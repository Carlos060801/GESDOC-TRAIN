import React, { useState } from "react";
import Layout from "../layout/Layout";
import "../styles/employees.css";

const EmployeesPage = () => {
  const [form, setForm] = useState({
    documento: "",
    nombre: "",
    apellido: "",
    cargo: "",
    departamento: "",
  });

  const empleados = [
    {
      id: 1,
      documento: "1002456789",
      nombre: "Juan",
      apellido: "Pérez",
      cargo: "Analista",
      departamento: "Sales",
    },
    {
      id: 2,
      documento: "1023445588",
      nombre: "Laura",
      apellido: "Gómez",
      cargo: "Asistente",
      departamento: "Marketing",
    },
  ];

  return (
    <Layout>
      <div className="employees-header">
        <h1 className="page-title">Employees</h1>
        <p className="page-subtitle">
          Gestión de empleados registrados en el sistema.
        </p>
      </div>

      {/* === FORM CARD === */}
      <div className="card">
        <h2 className="card-title">Registrar Nuevo Empleado</h2>

        <div className="form-grid">
          <div className="form-control">
            <label>Documento</label>
            <input
              type="text"
              placeholder="Documento de identidad"
              value={form.documento}
              onChange={(e) =>
                setForm({ ...form, documento: e.target.value })
              }
            />
          </div>

          <div className="form-control">
            <label>Nombre</label>
            <input
              type="text"
              placeholder="Nombre"
              value={form.nombre}
              onChange={(e) => setForm({ ...form, nombre: e.target.value })}
            />
          </div>

          <div className="form-control">
            <label>Apellido</label>
            <input
              type="text"
              placeholder="Apellido"
              value={form.apellido}
              onChange={(e) => setForm({ ...form, apellido: e.target.value })}
            />
          </div>

          <div className="form-control">
            <label>Cargo</label>
            <input
              type="text"
              placeholder="Cargo"
              value={form.cargo}
              onChange={(e) => setForm({ ...form, cargo: e.target.value })}
            />
          </div>

          <div className="form-control full">
            <label>Departamento</label>
            <input
              type="text"
              placeholder="Departamento"
              value={form.departamento}
              onChange={(e) =>
                setForm({ ...form, departamento: e.target.value })
              }
            />
          </div>
        </div>

        <button className="btn-primary full-btn">Registrar</button>
      </div>

      {/* === TABLE CARD === */}
      <div className="card">
        <h2 className="card-title">Lista de Empleados</h2>

        <table className="table">
          <thead>
            <tr>
              <th>Documento</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Cargo</th>
              <th>Departamento</th>
              <th className="text-right">Acción</th>
            </tr>
          </thead>

          <tbody>
            {empleados.map((emp) => (
              <tr key={emp.id}>
                <td>{emp.documento}</td>
                <td>{emp.nombre}</td>
                <td>{emp.apellido}</td>
                <td>{emp.cargo}</td>
                <td>{emp.departamento}</td>
                <td className="text-right">
                  <button className="dots-btn">•••</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default EmployeesPage;
