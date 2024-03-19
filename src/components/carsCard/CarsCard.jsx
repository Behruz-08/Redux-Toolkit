import React from "react";
import style from "./CarsCard.module.css"

const CarCard = ({ car }) => {
  

  return (
    <div className={style.car_card}>
    <div>

      <img src={car.image} alt={car.model} />
      <h3>{car.brand}</h3>
      <p>{car.model}</p>
      <p>{car.price}</p>
      <p>Year: {car.year}</p>
    </div>
    </div>
  );

};

export default CarCard;
