// src/components/TrainingCard.jsx
import React from "react";

const TrainingCard = ({ training }) => {
  return (
    <section className="training-card shadow-card">
      {/* Encabezado */}
      <div className="training-card-header">
        <h2 className="training-title">{training.title}</h2>
        <span className={`badge ${training.status === "SCHEDULED" ? "badge-green" : "badge-gray"}`}>
          {training.status}
        </span>
      </div>

      {/* Información */}
      <div className="training-card-body">
        <div className="training-info-item">
          <span className="label">Fecha & Hora</span>
          <span className="value">{training.dateTime}</span>
        </div>

        <div className="training-info-item">
          <span className="label">Modalidad</span>
          <span className="value">{training.modality}</span>
        </div>

        <div className="training-info-item">
          <span className="label">Duración</span>
          <span className="value">{training.durationMinutes} minutos</span>
        </div>
      </div>
    </section>
  );
};

export default TrainingCard;
