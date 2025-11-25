// src/components/AttendanceTable.jsx
import React from "react";

const AttendanceTable = ({ attendance }) => {
  return (
    <div className="card">
      <h3>Attendance List</h3>
      <table className="data-table">
        <thead>
          <tr>
            <th>Employee</th>
            <th>Department</th>
            <th>Status</th>
            <th>Observation</th>
          </tr>
        </thead>
        <tbody>
          {attendance.map((row) => (
            <tr key={row.id}>
              <td>{row.employeeName}</td>
              <td>{row.department}</td>
              <td>
                <span className="badge badge-warning">{row.status}</span>
              </td>
              <td>{row.observation || "-"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AttendanceTable;
