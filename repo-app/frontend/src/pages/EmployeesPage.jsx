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
    }
  ];

  return (
    <Layout>
      <h1 className="page-title">Employees</h1>

      {/* CARD DEL FORMULARIO */}
      <div className="employee-card">
        <h2 className="employee-card-title">Registrar Empleado</h2>

        <div className="employee-grid">
          {/* Documento */}
          <div className="employee-control">
            <label>Documento</label>
            <input
              type="text"
              placeholder="Documento de identidad"
              value={form.documento}
              onChange={(e) => setForm({ ...form, documento: e.target.value })}
            />
          </div>

          {/* Nombre */}
          <div className="employee-control">
            <label>Nombre</label>
            <input
              type="text"
              placeholder="Nombre"
              value={form.nombre}
              onChange={(e) => setForm({ ...form, nombre: e.target.value })}
            />
          </div>

          {/* Apellido */}
          <div className="employee-control">
            <label>Apellido</label>
            <input
              type="text"
              placeholder="Apellido"
              value={form.apellido}
              onChange={(e) => setForm({ ...form, apellido: e.target.value })}
            />
          </div>

          {/* Cargo */}
          <div className="employee-control">
            <label>Cargo</label>
            <input
              type="text"
              placeholder="Cargo"
              value={form.cargo}
              onChange={(e) => setForm({ ...form, cargo: e.target.value })}
            />
          </div>

          {/* Departamento */}
          <div className="employee-control full">
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

        <button className="employee-btn">Registrar</button>
      </div>

      {/* LISTADO */}
      <div className="employee-card">
        <h2 className="employee-card-title">Listado de Empleados</h2>

        <table className="employee-table">
          <thead>
            <tr>
              <th>Documento</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Cargo</th>
              <th>Departamento</th>
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default EmployeesPage;
