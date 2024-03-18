import React, { useState } from "react";
import CarCard from "../carsCard/CarsCard";
import Filters from "../filters/CarsFilters";
import Pagination from "../paginations/Paginations";
import carsData from "../carsData/CarsData";

const CarGallery = () => {
  const [filterBrand, setFilterBrand] = useState("");
  const [page, setPage] = useState(1);
  const [newCar, setNewCar] = useState({ brand: "", model: "", year: "" });
  const carsPerPage = 4;

  const [allCars, setAllCars] = useState(carsData);

  const handleAddCar = () => {
    const newCarWithId = { ...newCar, id: Date.now() };
    setAllCars([...allCars, newCarWithId]);
  };

  const filteredCars = allCars.filter(
    (car) => filterBrand === "" || car.brand === filterBrand
  );
  const paginatedCars = filteredCars.slice(
    (page - 1) * carsPerPage,
    page * carsPerPage
  );

  const handleFilterChange = (brand) => {
    setFilterBrand(brand);
    setPage(1);
  };

  const handlePageChange = (pageNumber) => {
    setPage(pageNumber);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCar({ ...newCar, [name]: value });
  };

  return (
    <div className="car-gallery">
      <Filters
        selectedBrand={filterBrand}
        onFilterChange={handleFilterChange}
        allCars={allCars} // Передаем список всех автомобилей
      />
      <div className="car-cards">
        {paginatedCars.map((car) => (
          <CarCard key={car.id} car={car} price={car.price} />
        ))}
      </div>
      <Pagination
        currentPage={page}
        totalPages={Math.ceil(filteredCars.length / carsPerPage)}
        onPageChange={handlePageChange}
      />
      <div className="add-car-form">
        <h2>Add a New Car</h2>
        <input
          type="text"
          name="brand"
          placeholder="Brand"
          value={newCar.brand}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="model"
          placeholder="Model"
          value={newCar.model}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="year"
          placeholder="Year"
          value={newCar.year}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="price"
          placeholder="price"
          value={newCar.price}
          onChange={handleInputChange}
        />
        <button onClick={handleAddCar}>Add Car</button>
      </div>
    </div>
  );
};

export default CarGallery;
