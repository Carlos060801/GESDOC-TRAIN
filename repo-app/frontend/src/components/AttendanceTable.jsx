// src/components/AttendanceTable.jsx

const AttendanceTable = ({ list }) => {
  return (
    <div className="table-container">
      <h3 className="table-title">Lista de Asistencia</h3>

      <table>
        <thead>
          <tr>
            <th>Empleado</th>
            <th>Fecha</th>
            <th>Estado</th>
            <th>Observación</th>
          </tr>
        </thead>

        <tbody>
          {list.map((p, index) => (
            <tr key={index}>
              <td>{p.employee}</td>
              <td>{p.date}</td>
              <td>
                <span
                  className={`status-dot ${
                    p.status === "Present"
                      ? "status-green"
                      : p.status === "Late"
                      ? "status-orange"
                      : "status-red"
                  }`}
                ></span>{" "}
                {p.status}
              </td>
              <td>{p.observation}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AttendanceTable;
