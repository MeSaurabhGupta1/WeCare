import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Link, useNavigate } from "react-router-dom";
export default function Navbar() {
  const navigate = useNavigate();
  const coach = JSON.parse(sessionStorage.getItem("coach"));

  console.log(coach);
  const home = () => {
    sessionStorage.clear();
    navigate("/");
  };
  const logout = () => {
    sessionStorage.clear();
    navigate("/coachLogin");
  };
  return (
    <div style={{ position: "sticky", top: 0 }}>
      <nav className="navbar navbar-dark bg-dark">
          <h3 style={{ color: "white", marginLeft: "30px", cursor: 'pointer'}} onClick={home}>
            We Care
          </h3>
      
        {coach ? (
          <h6
            style={{ color: "white", align: "right", marginRight: "30px" , cursor: 'pointer' }}
            onClick={logout}
          >
            <span
              style={{ fontSize: "20px"}}
            ></span>
            Logout
          </h6>
        ) : (
          <h6 style={{ color: "white", align: "right", marginRight: "30px" }}>
            <span
              className="bi bi-telephone"
              style={{ fontSize: "20px" }}
            ></span>
            Call us: 8576025830
          </h6>
        )}
      </nav>
    </div>
  );
}
