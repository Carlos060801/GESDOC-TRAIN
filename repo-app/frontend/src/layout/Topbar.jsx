import React from "react";
import { MdNotificationsNone, MdPersonOutline } from "react-icons/md";
import "../styles/topbar.css";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbar-inner">
        <div></div> {/* Espacio a la izquierda si luego quieres buscador */}
        
        <div className="topbar-actions">
          <MdNotificationsNone className="topbar-icon" />
          <MdPersonOutline className="topbar-icon" />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
