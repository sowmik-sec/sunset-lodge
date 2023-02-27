import React from "react";
import roomImage1 from "../../assets/images/cottage.jpg";
import roomImage2 from "../../assets/images/cottage.jpg";
import roomImage3 from "../../assets/images/cottage.jpg";
import roomImage4 from "../../assets/images/cottage.jpg";
import "./Rooms.css";

const Rooms = () => {
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
            <button className="button is-primary">Book Now</button>
          </div>
        </div>
        <div className="card">
          <div className="card-image">
            <img src={roomImage2} alt="Room 2" />
          </div>
          <div className="card-content">
            <h3 className="title is-5">Executive Suite</h3>
            <p className="price">$300/night</p>
            <button className="button is-primary">Book Now</button>
          </div>
        </div>
        <div className="card">
          <div className="card-image">
            <img src={roomImage3} alt="Room 3" />
          </div>
          <div className="card-content">
            <h3 className="title is-5">Presidential Suite</h3>
            <p className="price">$500/night</p>
            <button className="button is-primary">Book Now</button>
          </div>
        </div>
        <div className="card">
          <div className="card-image">
            <img src={roomImage4} alt="Room 4" />
          </div>
          <div className="card-content">
            <h3 className="title is-5">Royal Suite</h3>
            <p className="price">$800/night</p>
            <button className="button is-primary">Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rooms;
