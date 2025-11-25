// src/components/DocumentsTable.jsx
import React from "react";

const DocumentsTable = ({ documents }) => {
  return (
    <div className="card">
      <h3>Documents for this Training</h3>
      <table className="data-table">
        <thead>
          <tr>
            <th>ID Name</th>
            <th>Category</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {documents.map((doc) => (
            <tr key={doc.id}>
              <td>{doc.name}</td>
              <td>{doc.category}</td>
              <td>
                {doc.mandatory ? (
                  <span className="badge badge-green">Mandatory</span>
                ) : (
                  <span className="badge">Optional</span>
                )}
              </td>
              <td>
                <button className="table-btn">View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DocumentsTable;
