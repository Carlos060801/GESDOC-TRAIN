import React from "react";

const AttendanceTable = ({ list }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Document</th>
          <th>Department</th>
          <th>Status</th>
          <th>Observation</th>
        </tr>
      </thead>
      <tbody>
        {list.map((row) => (
          <tr key={row.id}>
            <td>{row.employee}</td>
            <td>{row.department}</td>
            <td>
              {row.status === "Present" ? (
                <span className="status-dot status-complete">●</span>
              ) : (
                <span className="status-dot status-pending">●</span>
              )}
              <span className="status-text">{row.status}</span>
            </td>
            <td>{row.observation || "-"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AttendanceTable;
