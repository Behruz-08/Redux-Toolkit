

import React from "react";
import style from "./CarGallery.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  setFilterBrand,
  setFilterModel,
  setFilterPrice,
  setPage,
  setNewCar,
  addCar,
} from "../../../src/features/carsGallery/CarsGallerySlices";
import CarCard from "../carsCard/CarsCard";
import Filters from "../filters/CarsFilters";
import Pagination from "../paginations/Paginations";


const CarGallery = () => {
  const filterBrand = useSelector((state) => state.carGallery.filterBrand);
  const filterModel = useSelector((state) => state.carGallery.filterModel);
  const filterPrice = useSelector((state) => state.carGallery.filterPrice);
  const page = useSelector((state) => state.carGallery.page);
  
  const newCar = useSelector((state) => state.carGallery.newCar);
  const allCars = useSelector((state) => state.carGallery.allCars);
  const carsPerPage = useSelector((state) => state.carGallery.carsPerPage);
  const dispatch = useDispatch();


  const handleFilterBrandChange = (brand) => {
    dispatch(setFilterBrand(brand));
  };
  
  const handleFilterModelChange = (model) => {
    dispatch(setFilterModel(model));
  };
  
  const handleFilterPriceChange = (price) => {
    dispatch(setFilterPrice(price));
  };
  
  
  const handlePageChange = (pageNumber) => {
    dispatch(setPage(pageNumber));
  };

  
  const filterCars = (cars) => {
    return cars.filter((car) => {
      // Фильтрация по бренду
      const brandMatch = filterBrand === "" || car.brand === filterBrand;
      // Фильтрация по модели
      const modelMatch =
        filterModel === "" || car.model.toLowerCase().includes(filterModel.toLowerCase());
      // Фильтрация по цене
      const priceMatch = filterPrice === "" || car.price <= parseFloat(filterPrice);

      return brandMatch && modelMatch && priceMatch;
    });
  };

  
  const paginatedCars = filterCars(allCars)
    .slice((page - 1) * carsPerPage, page * carsPerPage);

  return (
    <div className={style.wrapper}>
  
      <Filters
  filterBrand={filterBrand}
  filterModel={filterModel}
  filterPrice={filterPrice}
  onFilterBrandChange={handleFilterBrandChange}
  onFilterModelChange={handleFilterModelChange}
  onFilterPriceChange={handleFilterPriceChange}
/>


      <div className={style.car_cards}>
        {paginatedCars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
      <Pagination
       currentPage={page}
  totalPages={Math.ceil(filterCars(allCars).length / carsPerPage)}
  onPageChange={handlePageChange}
       />
    </div>
  );
};

export default CarGallery;
