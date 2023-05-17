import React from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <ul>
          <li>
            <Link to="/" className="listing">
              Home
            </Link>
          </li>

          <li>
            <Link to="/encounters" className="listing">
              Encounters
            </Link>
          </li>
          <li>
            <Link to="/patients" className="listing">
              Patients
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
