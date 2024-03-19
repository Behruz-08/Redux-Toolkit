import React from "react";
import style from "./CarsFilters.module.css"

const CarsFilters = ({ selectedBrand, onFilterChange, allCars }) => {
  const getUniqueBrands = (cars) => {
    if (!cars) return [];

    const uniqueBrands = {};
    cars.forEach((car) => {
      uniqueBrands[car.brand] = true;
    });
    return ["", ...Object.keys(uniqueBrands)]; // Добавляем пустую строку в качестве пункта "All"
  };

  return (
    <div className={style.filters}>
      <h4>

        Filter Brands:
      </h4>
      <label>
        <select
          value={selectedBrand}
          onChange={(e) => onFilterChange(e.target.value)}
        >
          {getUniqueBrands(allCars).map((brand) => (
            <option key={brand} value={brand}>
              {brand || "All"} 
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default CarsFilters;
