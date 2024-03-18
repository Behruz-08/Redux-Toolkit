import React from "react";

const CarCard = ({ car }) => {
  return (
    <div className="car-card">
      <img src={car.image} alt={car.model} />
      <h3>{car.brand}</h3>
      <p>{car.model}</p>
      <p>{car.price}</p>
      <p>Year: {car.year}</p>
    </div>
  );
};

export default CarCard;
