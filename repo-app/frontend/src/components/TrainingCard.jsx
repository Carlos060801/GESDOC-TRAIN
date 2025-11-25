// src/components/TrainingCard.jsx
import React from "react";

const TrainingCard = ({ training }) => {
  return (
    <section className="training-card">
      <div className="training-card-header">
        <h2>{training.title}</h2>
        <span className="badge badge-green">{training.status}</span>
      </div>

      <div className="training-card-body">
        <div className="training-info-item">
          <span className="label">Date &amp; Time</span>
          <span className="value">{training.dateTime}</span>
        </div>
        <div className="training-info-item">
          <span className="label">Modality</span>
          <span className="value">{training.modality}</span>
        </div>
        <div className="training-info-item">
          <span className="label">Duration</span>
          <span className="value">
            {training.durationMinutes} minutes
          </span>
        </div>
      </div>
    </section>
  );
};

export default TrainingCard;
