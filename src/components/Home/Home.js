import React from "react";
import "./Home.css";
import heroImage from "../../assets/images/cottage.jpg";
import { Link } from "react-router-dom";
import Rooms from "../Rooms/Rooms";

function HomePage() {
  return (
    <div className="home">
      <div className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="hero-content">
          <h1 className="title">Welcome to Sunset Lodge</h1>
          <p className="subtitle">
            Experience luxury accommodation like never before
          </p>
          <Link to="/rooms">
            <button className="button is-primary">Book Now</button>
          </Link>
        </div>
      </div>
      <Rooms />
    </div>
  );
}

export default HomePage;
