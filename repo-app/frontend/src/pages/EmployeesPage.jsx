import React, { useState, useEffect } from "react";
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

  const [empleados, setEmpleados] = useState([]);

  // ============================
  // 🔵 Cargar empleados del backend
  // ============================
  const cargarEmpleados = async () => {
    try {
      const res = await fetch("http://localhost:9000/employees");
      const data = await res.json();
      setEmpleados(data);
    } catch (error) {
      console.log("Error cargando empleados:", error);
    }
  };

  useEffect(() => {
    cargarEmpleados();
  }, []);

  // ============================
  // 🔵 Registrar empleado
  // ============================
  const registrarEmpleado = async () => {
    if (
      !form.documento ||
      !form.nombre ||
      !form.apellido ||
      !form.cargo ||
      !form.departamento
    ) {
      alert("Todos los campos son obligatorios");
      return;
    }

    try {
      const res = await fetch("http://localhost:9000/employees", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        alert("Empleado registrado correctamente");
        setForm({
          documento: "",
          nombre: "",
          apellido: "",
          cargo: "",
          departamento: "",
        });
        cargarEmpleados(); // 🔄 refrescar tabla
      } else {
        alert("Error al registrar empleado");
      }
    } catch (error) {
      console.log("Error registrando empleado:", error);
    }
  };

  return (
    <Layout>
      <h1 className="page-title">Employees</h1>

      {/* FORMULARIO */}
      <div className="employee-card">
        <h2 className="employee-card-title">Registrar Empleado</h2>

        <div className="employee-grid">
          <div className="employee-control">
            <label>Documento</label>
            <input
              type="text"
              placeholder="Documento de identidad"
              value={form.documento}
              onChange={(e) => setForm({ ...form, documento: e.target.value })}
            />
          </div>

          <div className="employee-control">
            <label>Nombre</label>
            <input
              type="text"
              placeholder="Nombre"
              value={form.nombre}
              onChange={(e) => setForm({ ...form, nombre: e.target.value })}
            />
          </div>

          <div className="employee-control">
            <label>Apellido</label>
            <input
              type="text"
              placeholder="Apellido"
              value={form.apellido}
              onChange={(e) => setForm({ ...form, apellido: e.target.value })}
            />
          </div>

          <div className="employee-control">
            <label>Cargo</label>
            <input
              type="text"
              placeholder="Cargo"
              value={form.cargo}
              onChange={(e) => setForm({ ...form, cargo: e.target.value })}
            />
          </div>

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

        <button className="employee-btn" onClick={registrarEmpleado}>
          Registrar
        </button>
      </div>

      {/* TABLA */}
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
            {empleados.length > 0 ? (
              empleados.map((emp) => (
                <tr key={emp.id}>
                  <td>{emp.documento}</td>
                  <td>{emp.nombre}</td>
                  <td>{emp.apellido}</td>
                  <td>{emp.cargo}</td>
                  <td>{emp.departamento}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" style={{ textAlign: "center", padding: "20px" }}>
                  No hay empleados registrados
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default EmployeesPage;
