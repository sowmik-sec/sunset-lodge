import React from "react";

const Book = (props) => {
  const { bookingClass, price } = props;
  console.log(props);
  return (
    <div>
      <h1>Thank you for staying with us</h1>
      <h3>You have booked {bookingClass} class</h3>
      <p>Room price: {price}</p>
    </div>
  );
};

export default Book;
