import React, { useState } from "react";
import Layout from "../layout/Layout";

const EmployeesPage = () => {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      documentNumber: "123456789",
      firstName: "Juan",
      lastName: "Pérez",
      position: "Analista",
      department: "Sistemas",
    },
    {
      id: 2,
      documentNumber: "987654321",
      firstName: "Laura",
      lastName: "Gómez",
      position: "Coordinadora",
      department: "Talento Humano",
    },
  ]);

  const [form, setForm] = useState({
    id: null,
    documentNumber: "",
    firstName: "",
    lastName: "",
    position: "",
    department: "",
  });

  const [editingId, setEditingId] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Modo edición
    if (editingId) {
      setEmployees((prev) =>
        prev.map((emp) =>
          emp.id === editingId
            ? {
                ...emp,
                documentNumber: form.documentNumber,
                firstName: form.firstName,
                lastName: form.lastName,
                position: form.position,
                department: form.department,
              }
            : emp
        )
      );
    } else {
      // Modo creación
      const newEmployee = {
        id: Date.now(),
        documentNumber: form.documentNumber,
        firstName: form.firstName,
        lastName: form.lastName,
        position: form.position,
        department: form.department,
      };
      setEmployees((prev) => [...prev, newEmployee]);
    }

    // Limpiar formulario
    setForm({
      id: null,
      documentNumber: "",
      firstName: "",
      lastName: "",
      position: "",
      department: "",
    });
    setEditingId(null);
  };

  const handleEdit = (emp) => {
    setForm({
      id: emp.id,
      documentNumber: emp.documentNumber,
      firstName: emp.firstName,
      lastName: emp.lastName,
      position: emp.position,
      department: emp.department,
    });
    setEditingId(emp.id);
  };

  const handleDelete = (id) => {
    if (window.confirm("¿Seguro deseas eliminar este empleado?")) {
      setEmployees((prev) => prev.filter((emp) => emp.id !== id));
      if (editingId === id) {
        setEditingId(null);
        setForm({
          id: null,
          documentNumber: "",
          firstName: "",
          lastName: "",
          position: "",
          department: "",
        });
      }
    }
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setForm({
      id: null,
      documentNumber: "",
      firstName: "",
      lastName: "",
      position: "",
      department: "",
    });
  };

  return (
    <Layout>
      <h1 className="page-title">Employees</h1>

      {/* FORMULARIO */}
      <section className="employee-form-card">
        <h2 className="form-title">
          {editingId ? "Editar Empleado" : "Registrar Empleado"}
        </h2>

        <form onSubmit={handleSubmit} className="employee-form-grid">
          <div>
            <label className="auth-label">Documento</label>
            <input
              type="text"
              name="documentNumber"
              className="auth-input"
              placeholder="Documento de identidad"
              value={form.documentNumber}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="auth-label">Nombre</label>
            <input
              type="text"
              name="firstName"
              className="auth-input"
              placeholder="Nombre"
              value={form.firstName}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="auth-label">Apellido</label>
            <input
              type="text"
              name="lastName"
              className="auth-input"
              placeholder="Apellido"
              value={form.lastName}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="auth-label">Cargo</label>
            <input
              type="text"
              name="position"
              className="auth-input"
              placeholder="Cargo"
              value={form.position}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="auth-label">Departamento</label>
            <input
              type="text"
              name="department"
              className="auth-input"
              placeholder="Departamento"
              value={form.department}
              onChange={handleChange}
              required
            />
          </div>

          <div className="employee-form-actions">
            <button type="submit" className="auth-btn-primary">
              {editingId ? "Guardar Cambios" : "Registrar"}
            </button>

            {editingId && (
              <button
                type="button"
                className="btn-secondary"
                onClick={handleCancelEdit}
              >
                Cancelar
              </button>
            )}
          </div>
        </form>
      </section>

      {/* TABLA DE EMPLEADOS */}
      <section className="table-container" style={{ marginTop: "25px" }}>
        <h2 className="table-title">Listado de Empleados</h2>

        <table>
          <thead>
            <tr>
              <th>Documento</th>
              <th>Nombre Completo</th>
              <th>Cargo</th>
              <th>Departamento</th>
              <th style={{ textAlign: "right" }}>Acciones</th>
            </tr>
          </thead>

          <tbody>
            {employees.map((emp) => (
              <tr key={emp.id}>
                <td>{emp.documentNumber}</td>
                <td>
                  {emp.firstName} {emp.lastName}
                </td>
                <td>{emp.position}</td>
                <td>{emp.department}</td>
                <td style={{ textAlign: "right" }}>
                  <button
                    className="btn-table"
                    onClick={() => handleEdit(emp)}
                  >
                    Editar
                  </button>
                  <button
                    className="btn-table btn-danger"
                    onClick={() => handleDelete(emp.id)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}

            {employees.length === 0 && (
              <tr>
                <td colSpan="5">No hay empleados registrados.</td>
              </tr>
            )}
          </tbody>
        </table>
      </section>
    </Layout>
  );
};

export default EmployeesPage;
