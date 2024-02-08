import { Link, useLocation } from "react-router-dom";
import navlogo from "./navlogo.png";
import "./nav.css";
import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "./context/userContext";

function Navbar() {
  const { user } = useContext(UserContext);
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={navlogo} width="160" height="40" alt="ZeroXP" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto nav-links">
            {location.pathname !== "/about" && (
              <li
                className={`nav-item ${
                  location.pathname === "/about" ? "active" : ""
                }`}
              >
                <div className="clear-box">
                  <Link className="nav-link-about" to="/about">
                    About
                  </Link>
                </div>
              </li>
            )}
            {location.pathname !== "/post-job" && (
              <li
                className={`nav-item ${
                  location.pathname === "/post-job" ? "active" : ""
                }`}
              >
                <div className="clear-box1">
                  <Link className="nav-link-post-job" to="/post-job">
                    Post a Job
                  </Link>
                </div>
              </li>
            )}
            {user && (
              <li className="nav-item">
                <span className="nav-link">Hi, {user.firstName}</span>
              </li>
            )}

            {!user && (
              <>
                {location.pathname !== "/login" && (
                  <li className="nav-item">
                    <div className="white-box">
                      <Link className="nav-link-login" to="/login">
                        Login
                      </Link>
                    </div>
                  </li>
                )}
                {location.pathname !== "/signup" && (
                  <li className="nav-item">
                    <div className="white-box">
                      <Link className="nav-link-signup" to="/signup">
                        Sign Up
                      </Link>
                    </div>
                  </li>
                )}
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
