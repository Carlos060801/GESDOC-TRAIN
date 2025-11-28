import React from "react";

const DocumentsTable = ({ documents }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>ID Name</th>
          <th>Category</th>
          <th>Status</th>
          <th style={{ textAlign: "right" }}>Action</th>
        </tr>
      </thead>
      <tbody>
        {documents.map((doc) => (
          <tr key={doc.id}>
            <td>{doc.name}</td>
            <td>{doc.category}</td>
            <td>
              {doc.status === "Complete" ? (
                <span className="status-dot status-complete">●</span>
              ) : (
                <span className="status-dot status-pending">●</span>
              )}
              <span className="status-text">{doc.status}</span>
            </td>
            <td style={{ textAlign: "right" }}>
              <button className="icon-button">⋮</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DocumentsTable;
