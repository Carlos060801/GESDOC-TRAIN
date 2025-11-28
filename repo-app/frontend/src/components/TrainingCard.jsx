import React from "react";
import "../styles/trainingcard.css";

const TrainingCard = ({ training }) => {
  return (
    <div className="training-card">
      <div className="training-title-row">
        <h2 className="training-title">{training.title}</h2>
        <span className="badge green">{training.status}</span>
      </div>

      <div className="training-details">
        <div>
          <p className="label">Fecha & Hora</p>
          <p className="value">{training.dateTime}</p>
        </div>
        <div>
          <p className="label">Modalidad</p>
          <p className="value">{training.modality}</p>
        </div>
        <div>
          <p className="label">Duración</p>
          <p className="value">{training.durationMinutes} minutos</p>
        </div>
      </div>
    </div>
  );
};

export default TrainingCard;
