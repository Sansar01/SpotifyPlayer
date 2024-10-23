import React from "react";
import "../assets/css/sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="sidebar-header">
        <button className="sidebar-button active">For You</button>
        <button className="sidebar-button">Top Tracks</button>
      </div>
      <div className="sidebar-content">
        {/* You can add your sidebar items here (e.g., track list) */}
      </div>
    </div>
  );
};

export default Sidebar;
