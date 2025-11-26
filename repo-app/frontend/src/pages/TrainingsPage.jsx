import React from "react";

const TrainingCard = () => {
  return (
    <div className="training-card">

      <div className="training-header">
        <h3>Induction in Cybersecurity</h3>
        <span className="status-badge">SCHEDULED</span>
      </div>

      <div className="training-info">
        <div>
          <h4>Fecha & Hora</h4>
          <p>20/03/2026, 10:00 AM</p>
        </div>

        <div>
          <h4>Modalidad</h4>
          <p>Virtual</p>
        </div>

        <div>
          <h4>Duración</h4>
          <p>120 minutos</p>
        </div>

      </div>
    </div>
  );
};

export default TrainingCard;
