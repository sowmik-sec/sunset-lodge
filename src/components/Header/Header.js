import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/cottage.jpg";
import "./Header.css";

function Header() {
  return (
    <header>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            <img src={logo} alt="hotel logo" className="logo" />
          </Link>
          <ul className="nav-menu">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/rooms" className="nav-link">
                Rooms
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/signup" className="nav-link">
                Sign Up
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/signout" className="nav-link">
                Sign Out
              </Link>
            </li>
          </ul>
          <div className="nav-icon">
            <i className="fas fa-bars"></i>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
