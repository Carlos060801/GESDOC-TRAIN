// src/components/DocumentsTable.jsx

const DocumentsTable = ({ documents }) => {
  return (
    <div className="table-container">
      <h3 className="table-title">Documentos para esta Capacitación</h3>

      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Categoría</th>
            <th>Estado</th>
          </tr>
        </thead>

        <tbody>
          {documents.map((doc, index) => (
            <tr key={index}>
              <td>{doc.name}</td>
              <td>{doc.category}</td>
              <td>
                <span
                  className={`status-dot ${
                    doc.status === "Complete"
                      ? "status-green"
                      : "status-orange"
                  }`}
                ></span>{" "}
                {doc.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DocumentsTable;
