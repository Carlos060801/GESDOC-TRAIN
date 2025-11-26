import React, { useState } from "react";
import TrainingCard from "../components/TrainingCard";

const TrainingsPage = () => {
  const [trainings] = useState([
    {
      id: 1,
      title: "Capacitación SG-SST",
      status: "Activo",
      dateTime: "2025-02-20 08:00 AM",
      modality: "Presencial",
      durationMinutes: 90,
    },
    {
      id: 2,
      title: "Inducción General ICBF",
      status: "Finalizado",
      dateTime: "2025-01-15 02:00 PM",
      modality: "Virtual",
      durationMinutes: 120,
    },
  ]);

  return (
    <div className="dashboard-content">
      <h1 className="page-title">Capacitaciones</h1>

      {/* LISTA DE CAPACITACIONES */}
      {trainings.map((t) => (
        <TrainingCard key={t.id} training={t} />
      ))}
    </div>
  );
};

export default TrainingsPage;
