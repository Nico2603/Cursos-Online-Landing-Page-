import React from "react";
import SideBar from "./SideBar";
import "../styles/Dashboard.css";

const Dashboard =()=> {
  return (
    <div className="dashboard-container">
      <SideBar />
      <div className="dashboard-content">
        <h1>Welcome to the Dashboard</h1>
      </div>
    </div>
  );
}

export default Dashboard;
