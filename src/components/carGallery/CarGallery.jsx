import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setFilterBrand,
  setPage,
  setNewCar,
  addCar,
} from "../../../src/features/carsGallery/CarsGallerySlices";
import CarCard from "../carsCard/CarsCard";
import Filters from "../filters/CarsFilters";
import Pagination from "../paginations/Paginations";

const CarGallery = () => {
  const filterBrand = useSelector((state) => state.carGallery.filterBrand);
  const page = useSelector((state) => state.carGallery.page);
  const newCar = useSelector((state) => state.carGallery.newCar);
  const allCars = useSelector((state) => state.carGallery.allCars);
  const carsPerPage = useSelector((state) => state.carGallery.carsPerPage);
  const dispatch = useDispatch();

  const handleFilterChange = (brand) => {
    dispatch(setFilterBrand(brand));
  };

  const handlePageChange = (pageNumber) => {
    dispatch(setPage(pageNumber));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch(setNewCar({ ...newCar, [name]: value }));
  };

  const handleAddCar = () => {
    dispatch(addCar(newCar));
  };

  // Вычисляем пагинированные автомобили на основе текущей страницы и количества автомобилей на странице
  const paginatedCars = allCars
    .filter((car) => filterBrand === "" || car.brand === filterBrand)
    .slice((page - 1) * carsPerPage, page * carsPerPage);

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
        totalPages={Math.ceil(
          allCars.filter(
            (car) => filterBrand === "" || car.brand === filterBrand
          ).length / carsPerPage
        )}
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
