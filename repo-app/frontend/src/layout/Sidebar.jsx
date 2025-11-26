import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h2 className="sidebar-title">GESDOC & TRAIN</h2>

      <Link to="/dashboard" className="sidebar-link">
        Dashboard
      </Link>

      <Link to="/employees" className="sidebar-link">
        Employees
      </Link>

      <a className="sidebar-link">Trainings</a>
      <a className="sidebar-link">Documents</a>
      <a className="sidebar-link">My Profile</a>
    </aside>
  );
};

export default Sidebar;
