// src/components/DocumentsTable.jsx
import React from "react";

const DocumentsTable = ({ documents }) => {
  return (
    <div className="card">
      <h3>Documentos Requeridos para esta Capacitación</h3>

      <table className="data-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Documento</th>
            <th>Categoría</th>
            <th>Obligatorio</th>
            <th>Acción</th>
          </tr>
        </thead>

        <tbody>
          {documents.map((doc) => (
            <tr key={doc.id}>
              <td>{doc.id}</td>
              <td>{doc.name}</td>
              <td>{doc.category}</td>
              <td>
                {doc.mandatory ? (
                  <span className="badge badge-green">Sí</span>
                ) : (
                  <span className="badge">No</span>
                )}
              </td>
              <td>
                <button className="table-btn">Ver</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DocumentsTable;
