import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filterBrand: "",
  page: 1,
  newCar: { brand: "", model: "", year: "", price: "" },
  allCars: [],
  carsPerPage: 27,
};

const carGallerySlice = createSlice({
  name: "carGallery",
  initialState,
  reducers: {
    setFilterBrand(state, action) {
      state.filterBrand = action.payload;
      state.page = 1;
      state.carsPerPage = action.payload === "" ? 27 : 9; // Устанавливаем количество автомобилей на странице
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

export const { setFilterBrand, setPage, setNewCar, addCar } =
  carGallerySlice.actions;

export default carGallerySlice.reducer;
