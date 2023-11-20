import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import { faker } from "@faker-js/faker";
import { Bar } from "react-chartjs-2";
// import { Chart as ChartJS } from "chart.js/auto";
import s from "./BarChart.module.css";

const BarChart = () => {
  const [countryData, setCountryData] = useState({ country: [], count: [] });

  const [data, setData] = useState({
    labels: [],
    datasets: [
      {
        label: "Users From",
        data: [],
      },
    ],
  });

  useEffect(() => {
    const count = {};
    for (let i = 0; i < 100000; i++) {
      const randomCountry = faker.location.country();

      count[randomCountry] = (count[randomCountry] || 0) + 1;
    }
    const countryKeys = Object.keys(count);
    const countryValues = Object.values(count);
    const topKeys = countryKeys.slice(1, 11);
    const topValues = countryValues.slice(1, 11);

    setCountryData({ country: topKeys, count: topValues });
  }, []);

  useEffect(() => {
    setData({
      labels: countryData.country,
      datasets: [
        {
          label: "Users From",
          data: countryData.count,
        },
      ],
    });
  }, [countryData]);

  return (
    <div>
      <Navbar />
      <div className={s.parent}>
        <p>Bar chart according to which country users belong.</p>
        <p>Top 10 country</p>
        <div className={s.barChart}>
          <Bar data={data} />
        </div>
      </div>
    </div>
  );
};

export default BarChart;
