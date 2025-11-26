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

      <Link to="/trainings" className="sidebar-link">
        Trainings
      </Link>

      <Link to="/documents" className="sidebar-link">
        Documents
      </Link>

      <Link to="/profile" className="sidebar-link">
        My Profile
      </Link>
    </aside>
  );
};

export default Sidebar;
