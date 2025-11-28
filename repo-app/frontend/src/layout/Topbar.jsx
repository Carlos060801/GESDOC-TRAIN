import React from "react";
import { MdNotificationsNone, MdPersonOutline } from "react-icons/md";
import "../styles/topbar.css";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbar-right">
        <MdNotificationsNone className="topbar-icon" />
        <MdPersonOutline className="topbar-icon" />
      </div>
    </div>
  );
};

export default Topbar;
