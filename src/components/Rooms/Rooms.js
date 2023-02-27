import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import roomImage1 from "../../assets/images/cottage.jpg";
import roomImage2 from "../../assets/images/cottage.jpg";
import roomImage3 from "../../assets/images/cottage.jpg";
import roomImage4 from "../../assets/images/cottage.jpg";
import Book from "../Book/Book";
import "./Rooms.css";

const Rooms = () => {
  const navigate = useNavigate();
  const handleBookClick = (bookingClass, price) => {
    // <Book bookingClass={bookingClass} price={price} />;
    return <Navigate to="/book" state={{ bookingClass, price }} />;
  };

  return (
    <div className="rooms home">
      <h2 className="title">Our Rooms</h2>
      <div className="room-cards">
        <div className="card">
          <div className="card-image">
            <img src={roomImage1} alt="Room 1" />
          </div>
          <div className="card-content">
            <h3 className="title is-5">Deluxe Room</h3>
            <p className="price">$200/night</p>
            <Link to="/book">
              <button
                onClick={() => handleBookClick("Delux Room", 200)}
                className="button is-primary"
              >
                Book Now
              </button>
            </Link>
          </div>
        </div>
        <div className="card">
          <div className="card-image">
            <img src={roomImage2} alt="Room 2" />
          </div>
          <div className="card-content">
            <h3 className="title is-5">Executive Suite</h3>
            <p className="price">$300/night</p>
            <button
              onClick={() => handleBookClick("Executive Suite", 300)}
              className="button is-primary"
            >
              Book Now
            </button>
          </div>
        </div>
        <div className="card">
          <div className="card-image">
            <img src={roomImage3} alt="Room 3" />
          </div>
          <div className="card-content">
            <h3 className="title is-5">Presidential Suite</h3>
            <p className="price">$500/night</p>
            <button
              onClick={() => handleBookClick("Presidential Suite", 500)}
              className="button is-primary"
            >
              Book Now
            </button>
          </div>
        </div>
        <div className="card">
          <div className="card-image">
            <img src={roomImage4} alt="Room 4" />
          </div>
          <div className="card-content">
            <h3 className="title is-5">Royal Suite</h3>
            <p className="price">$800/night</p>
            <button
              onClick={() => handleBookClick("Royal Suite", 800)}
              className="button is-primary"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rooms;
