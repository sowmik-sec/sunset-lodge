import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/cottage.jpg";
import { AuthContext } from "../../context/UserContext";
import "./Header.css";

function Header() {
  const { user, logout } = useContext(AuthContext);
  const handleSignOut = () => {
    logout()
      .then(() => {
        console.log("user logged out");
      })
      .catch((error) => console.error(error));
  };
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
            {user?.uid ? (
              <li className="nav-item">
                <Link to="/" onClick={handleSignOut} className="nav-link">
                  Sign Out
                </Link>
              </li>
            ) : (
              <>
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
              </>
            )}
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
