import React, { useState } from "react";

const DocumentsPage = () => {
  const [documents] = useState([
    {
      id: 1,
      name: "Política de Calidad",
      category: "Calidad",
      type: "POLICY",
      version: "1.2",
      status: "Activo",
    },
    {
      id: 2,
      name: "Procedimiento de Riesgos",
      category: "Riesgos",
      type: "PROCEDURE",
      version: "1.0",
      status: "Inactivo",
    },
  ]);

  return (
    <div className="dashboard-content">
      <h1 className="page-title">Documentos</h1>

      <div className="table-container">
        <h2 className="table-title">Listado de Documentos</h2>

        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Categoría</th>
              <th>Tipo</th>
              <th>Versión</th>
              <th>Estado</th>
            </tr>
          </thead>

          <tbody>
            {documents.map((doc) => (
              <tr key={doc.id}>
                <td>{doc.name}</td>
                <td>{doc.category}</td>
                <td>{doc.type}</td>
                <td>{doc.version}</td>
                <td>
                  <span
                    className={`status-dot ${
                      doc.status === "Activo"
                        ? "status-green"
                        : "status-red"
                    }`}
                  ></span>
                  {" "}{doc.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </div>
  );
};

export default DocumentsPage;
