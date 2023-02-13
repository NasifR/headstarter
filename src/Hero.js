import React, { useState } from "react";
import './App.css';
import { Button } from "@material-ui/core";
import VideoCall from "./VideoCall";
import Call from "./Call";
import { Link } from 'react-router-dom';



const Hero = ({ handleLogout }) => {
  return (
    <div className="App">
      <section className="hero">
        <nav>
          <h2>Dashboard</h2>
          <button onClick={handleLogout}>Logout</button>
        </nav>
        <div className="App" style={{ height: "100%" }}>
          <section className="App" style={{ height: "100%" }}>
          <Call/>
          </section>
 
        </div>
        
      </section>
    </div>
  );
};

export default Hero;