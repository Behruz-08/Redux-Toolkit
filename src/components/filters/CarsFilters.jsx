import React from "react";

const CarsFilters = ({ selectedBrand, onFilterChange, allCars }) => {
  const getUniqueBrands = (cars) => {
    if (!cars) return [];

    const uniqueBrands = {};
    cars.forEach((car) => {
      uniqueBrands[car.brand] = true;
    });
    return Object.keys(uniqueBrands);
  };

  return (
    <div className="filters">
      <label>
        Filter by Brand:
        <select
          value={selectedBrand}
          onChange={(e) => onFilterChange(e.target.value)}
        >
          <option value="">All</option>
          {getUniqueBrands(allCars).map((brand) => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default CarsFilters;
