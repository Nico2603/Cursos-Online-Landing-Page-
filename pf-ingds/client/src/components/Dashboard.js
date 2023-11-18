import React from "react";
import SideBar from "./SideBar";
import "../styles/Dashboard.css";
import NavBar from "./NavBar";
import Imagen1 from "../images/Imagen1.jpg";

const Dashboard =()=> {
  return (
    <div>
      <NavBar />
      <br/>
        <h1>Welcome to the Dashboard</h1>
      <img
        src={Imagen1} alt="página principal"
        style={{ width: '300px', height: '300px', borderRadius: '10px' }}
      />
    </div>
  );
}

export default Dashboard;
