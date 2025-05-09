import React from "react";
import './css/Navbar.css'
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/">Home</Link>
        </div>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/shubham" className="nav-links">
              Shubham
            </Link>
          </li>
          <li className="nav-item">
            <a href="/jobs" className="nav-links">
              Find Jobs
            </a>
          </li>
          <li className="nav-item">
            <Link to="/compnies" className="nav-links">
              Compies
            </Link>
          </li>
          <li className="nav-item">
            <a href="/post-job" className="nav-links">
              Post a Job
            </a>
          </li>
          <li className="nav-item">
            <Link to="/signup" className="nav-links">
              SignUp
            </Link>
          </li>
          <li className="nav-item">
            <a href="/register" className="nav-links">
              Register
            </a>
          </li>
        </ul>
        <div className="hamburger">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
