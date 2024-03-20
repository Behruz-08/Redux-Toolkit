

import React from "react";
import style from "./CarsFilters.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  setFilterBrand,
  setFilterModel,
  setFilterPrice,
} from "../../features/carsGallery/CarsGallerySlices";

const CarsFilters = () => {
  const filterBrand = useSelector((state) => state.carGallery.filterBrand);
  const filterModel = useSelector((state) => state.carGallery.filterModel);
  const filterPrice = useSelector((state) => state.carGallery.filterPrice);
  const allCars = useSelector((state) => state.carGallery.allCars);
  const dispatch = useDispatch();

  const handleBrandChange = (e) => {
    dispatch(setFilterBrand(e.target.value));
  };

  const handleModelChange = (e) => {
    dispatch(setFilterModel(e.target.value));
  };

  const handlePriceChange = (e) => {
    dispatch(setFilterPrice(e.target.value));
  };

  const getUniqueBrands = (cars) => {
    if (!cars) return [];
    const uniqueBrands = {};
    cars.forEach((car) => {
      uniqueBrands[car.brand] = true;
    });
    return ["", ...Object.keys(uniqueBrands)]; 
  };

  return (
    <div className={style.filters}>
      <h4>Фильтр по бренду:</h4>
      <select value={filterBrand} onChange={handleBrandChange}>
        {getUniqueBrands(allCars).map((brand,index) => (
          <option key={index} value={brand}>
            {brand || "All"} 
          </option>
        ))}
      </select>
      <h4>Фильтр по модели:</h4>
      <input
        type="text"
        value={filterModel}
        onChange={handleModelChange}
        placeholder="Введите модель"
      />
      <h4>Фильтр по цене:</h4>
      <input
        type="text"
        value={filterPrice}
        onChange={handlePriceChange}
        placeholder="Введите цену"
      />
    </div>
  );
};

export default CarsFilters;
