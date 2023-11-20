import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Virtualized_List from "./Virtualized_List";
import BarChart from "./Components/BarChartCountry/BarChart";
import PieChart_1 from "./Components/CarModelandMaker/PieChart_1";
import Pagination from "./Components/Pagination/Pagination";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BarChart />}></Route>
          <Route path="/BarChart" element={<BarChart />}></Route>
          <Route path="/PieChart_1" element={<PieChart_1 />}></Route>
          <Route
            path="/Virtualized_List"
            element={<Virtualized_List />}
          ></Route>
          <Route path="/Pagination" element={<Pagination />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
