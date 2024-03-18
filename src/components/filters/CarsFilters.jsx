import React from "react";

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
    <div className="filters">
      <label>
        Filter by Brand:
        <select
          value={selectedBrand}
          onChange={(e) => onFilterChange(e.target.value)}
        >
          {getUniqueBrands(allCars).map((brand) => (
            <option key={brand} value={brand}>
              {brand || "All"} {/* Если brand пустая строка, пишем "All" */}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default CarsFilters;
