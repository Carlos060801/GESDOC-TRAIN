import React from "react";
import "../styles/table.css";

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
              <span
                className={`status-dot ${
                  row.status === "Present" ? "green" : "yellow"
                }`}
              ></span>
              {row.status}
            </td>
            <td>{row.observation}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AttendanceTable;
