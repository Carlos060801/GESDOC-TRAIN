import React from "react";

const TrainingCard = ({ training }) => {
  return (
    <div className="training-card">
      <div className="training-card-header">
        <div>
          <p className="training-label">Current Training</p>
          <h2 className="training-title">{training.title}</h2>
        </div>

        <div className="training-status-group">
          <span className="badge badge-green">{training.status}</span>
          <span className="badge badge-light-green">{training.state}</span>
        </div>
      </div>

      <div className="training-card-body">
        <div className="training-info-item">
          <p className="info-label">Date &amp; Time</p>
          <p className="info-value">{training.dateTime}</p>
        </div>
        <div className="training-info-item">
          <p className="info-label">Modality</p>
          <p className="info-value">{training.modality}</p>
        </div>
        <div className="training-info-item">
          <p className="info-label">Duration</p>
          <p className="info-value">{training.durationMinutes} minutes</p>
        </div>
      </div>
    </div>
  );
};

export default TrainingCard;
