import React, { useEffect, useState } from "react";
import Layout from "../layout/Layout";
import "../styles/documents.css";
import { MdVisibility, MdDownload } from "react-icons/md";

const API_URL = "http://localhost:9000/api/documents"; 
// ⚠️ Cambia localhost por el host real si usas Docker

const DocumentsPage = () => {
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);

  // ===========================
  // FETCH DOCUMENTS FROM BACKEND
  // ===========================
  const fetchDocuments = async () => {
    try {
      const response = await fetch(`${API_URL}`);
      const data = await response.json();
      setDocuments(data);
    } catch (error) {
      console.error("Error loading documents", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDocuments();
  }, []);

  const viewDocument = (id) => {
    window.open(`${API_URL}/${id}/view`, "_blank");
  };

  const downloadDocument = (id) => {
    window.open(`${API_URL}/${id}/download`, "_blank");
  };

  return (
    <Layout>
      <div className="documents-header">
        <h1 className="page-title">Documents</h1>
        <p className="page-subtitle">
          Revisa los documentos subidos, estados y descárgalos fácilmente.
        </p>
      </div>

      <div className="card">
        <h2 className="card-title">Lista de Documentos</h2>

        {loading ? (
          <p>Cargando documentos...</p>
        ) : (
          <table className="table">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Categoría</th>
                <th>Fecha de Subida</th>
                <th>Estado</th>
                <th className="text-right">Acción</th>
              </tr>
            </thead>

            <tbody>
              {documents.map((doc) => (
                <tr key={doc.id}>
                  <td>{doc.name}</td>
                  <td>{doc.category}</td>
                  <td>{doc.uploaded_at}</td>
                  <td>
                    <span
                      className={`status-dot ${
                        doc.status === "Complete" ? "green" : "yellow"
                      }`}
                    ></span>
                    {doc.status}
                  </td>

                  <td className="text-right">
                    <button
                      className="action-btn"
                      onClick={() => viewDocument(doc.id)}
                    >
                      <MdVisibility />
                    </button>

                    <button
                      className="action-btn"
                      onClick={() => downloadDocument(doc.id)}
                    >
                      <MdDownload />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </Layout>
  );
};

export default DocumentsPage;
``
