

import { createSlice } from "@reduxjs/toolkit";
import carsData from "../../components/carsData/CarsData";

const initialState = {
  filterBrand: "",
  filterModel: "", 
  filterPrice: "", 
  page: 1,
  newCar: { brand: "", model: "", year: "", price: "" },
  allCars: carsData,
  carsPerPage: 27,
};

const carGallerySlice = createSlice({
  name: "carGallery",
  initialState,
  reducers: {
    setFilterBrand(state, action) {
      state.filterBrand = action.payload;
      state.page = 1;
      state.carsPerPage = action.payload === "" ? 27 : 9;
    },
    setFilterModel(state, action) { 
      state.filterModel = action.payload;
      state.page = 1;
    },
    setFilterPrice(state, action) { 
      state.filterPrice = action.payload;
      state.page = 1;
    },
    setPage(state, action) {
      state.page = action.payload;
    },
    setNewCar(state, action) {
      state.newCar = action.payload;
    },
    addCar(state, action) {
      const newCarWithId = { ...action.payload, id: Date.now() };
      state.allCars.push(newCarWithId);
    },
  },
});

export const {
  setFilterBrand,
  setFilterModel, 
  setFilterPrice, 
  setNewCar,
  addCar,
  setPage
} = carGallerySlice.actions;

export default carGallerySlice.reducer;