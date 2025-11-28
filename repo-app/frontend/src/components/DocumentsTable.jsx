import React from "react";
import "../styles/table.css";

const DocumentsTable = ({ documents }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>ID Name</th>
          <th>Category</th>
          <th>Status</th>
          <th className="text-right">Action</th>
        </tr>
      </thead>
      <tbody>
        {documents.map((doc) => (
          <tr key={doc.id}>
            <td>{doc.name}</td>
            <td>{doc.category}</td>
            <td>
              <span
                className={`status-dot ${
                  doc.status === "Complete" ? "green" : "yellow"
                }`}
              ></span>
              {doc.status}
            </td>
            <td className="text-right">
              <button className="dots-btn">•••</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DocumentsTable;
