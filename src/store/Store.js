import { configureStore } from "@reduxjs/toolkit";
import carGalleryReducer from "../../src/features/carsGallery/CarsGallerySlices";

export default configureStore({
  reducer: {
    carGallery: carGalleryReducer,
  },
});
