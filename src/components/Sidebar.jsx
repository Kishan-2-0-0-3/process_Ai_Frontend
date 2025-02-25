import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaUser, FaSignInAlt, FaUserPlus } from "react-icons/fa";
import "./Sidebar.css"; // Import Sidebar CSS

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Dashboard</h2>
      <nav>
        <ul>
          <li>
            <FaHome className="icon" />
            <Link to="/">Home</Link>
          </li>
          <li>
            <FaUser className="icon" />
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <FaSignInAlt className="icon" />
            <Link to="/login">Login</Link>
          </li>
          <li>
            <FaUserPlus className="icon" />
            <Link to="/register">Register</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
