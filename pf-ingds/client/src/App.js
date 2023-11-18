import React from "react";
import {Outlet} from "react-router-dom";
import "./styles/App.css";

const App = () => {
  return(
    <div className="container">
      <div className="component-container">
        <Outlet />
      </div>
    </div>
  );
};

export default App;
