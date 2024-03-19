import React from "react";
import { Provider } from "react-redux";
import CarGallery from "./components/carGallery/CarGallery";
// import './App.css';

import store from "../src/store/Store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <h1>Car Gallery </h1> */}
        <CarGallery />
      </div>
    </Provider>
  );
}

export default App;
