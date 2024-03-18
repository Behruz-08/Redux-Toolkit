// // import React from "react";

// // const CarsFilters = ({ selectedBrand, onFilterChange }) => {
// //   return (
// //     <div className="filters">
// //       <label>
// //         Filter by Brand:
// //         <select
// //           value={selectedBrand}
// //           onChange={(e) => onFilterChange(e.target.value)}
// //         >
// //           <option value="">All</option>
// //           <option value="Mercedes">Mercedes</option>
// //           <option value="BMW">BMW</option>
// //           <option value="Audi">Audi</option>
// //         </select>
// //       </label>
// //     </div>
// //   );
// // };

// // export default CarsFilters;

// import React from "react";

// const CarsFilters = ({ selectedBrand, onFilterChange, allCars }) => {
//   // Функция для получения списка уникальных марок автомобилей
//   // const getUniqueBrands = () => {
//   //   const uniqueBrands = new Set();
//   //   allCars.forEach((car) => uniqueBrands.add(car.brand));
//   //   return Array.from(uniqueBrands);
//   // };

//   const getUniqueBrands = (cars) => {
//     const uniqueBrands = cars ? getUniqueBrands(cars) : [];
//     cars.forEach((car) => {
//       if (!uniqueBrands[car.brand]) {
//         uniqueBrands[car.brand] = true;
//       }
//     });
//     return Object.keys(uniqueBrands);
//   };

//   return (
//     <div className="filters">
//       <label>
//         Filter by Brand:
//         <select
//           value={selectedBrand}
//           onChange={(e) => onFilterChange(e.target.value)}
//         >
//           <option value="">All</option>
//           {getUniqueBrands().map((brand) => (
//             <option key={brand} value={brand}>
//               {brand}
//             </option>
//           ))}
//         </select>
//       </label>
//     </div>
//   );
// };

// export default CarsFilters;

import React from "react";

const CarsFilters = ({ selectedBrand, onFilterChange, allCars }) => {
  // Функция для получения списка уникальных марок автомобилей
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
