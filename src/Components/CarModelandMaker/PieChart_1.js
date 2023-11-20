import React, { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
import Navbar from "../Navbar";
import { Pie } from "react-chartjs-2";
import "chart.js/auto";
import s from "./PieChart.module.css";

const PieChart_1 = () => {
  const [datas, setDatas] = useState([]);
  const [pieData, setPieData] = useState({});
  const [currentKey, setCurrentKey] = useState("");

  useEffect(() => {
    const loopData = [];
    for (let i = 0; i < 20000; i++) {
      const randomModel = faker.vehicle.model();
      const randomManufacturer = faker.vehicle.manufacturer();

      let data = {
        model: randomModel,
        manufacturer: randomManufacturer,
      };
      loopData.push(data);
    }

    const brandModel = {};
    loopData.forEach((data) => {
      const { manufacturer, model } = data;
      if (!brandModel[manufacturer]) {
        brandModel[manufacturer] = [];
      }
      brandModel[manufacturer].push(model);
    });

    const manufacturerKeys = Object.keys(brandModel);

    const manufacturerModel = {};
    manufacturerKeys.map((key) => {
      const modelCounts = {};
      brandModel[key].map((model) => {
        modelCounts[model] = (modelCounts[model] || 0) + 1;
        manufacturerModel[key] = modelCounts;
      });
    });
    setDatas(manufacturerModel);
  }, []);

  const initial = {
    labels: [],
    datasets: [
      {
        label: "Users",
        data: [],
        backgroundColor: [],
      },
    ],
  };

  useEffect(() => {
    const mapedData = {};
    Object.keys(datas || {}).map((key) => {
      mapedData[key] = {
        labels: (Object.keys(datas[key]) || {}).slice(5, 10),
        datasets: [
          {
            label: "Users",
            data: (Object.values(datas[key]) || {}).slice(5, 10),
            backgroundColor: [
              "#CDFAD5",
              "#FFBF96",
              "#FFCF96",
              "#C7DDA7",
              "#C3BAA2",
            ],
          },
        ],
      };
    });
    setPieData(mapedData);
  }, [datas]);

  return (
    <div>
      <Navbar />
      <div className={s.grandParent}>
        <div className={s.parent1}>
          <h3 className={s.title}>CAR MAKERS</h3>
          <div className={s.listView}>
            {Object.keys(datas).map((key) => (
              <p
                onClick={() => {
                  setCurrentKey(key);
                }}
              >
                {key}
              </p>
            ))}
          </div>
        </div>
        <div className={s.parent2}>
          <div className={s.child}>
            <h1>{currentKey}</h1>
            <Pie data={pieData[currentKey] || initial} className={s.pieChart} />
            <h3 className={s.feedBack}>
              Pie chart for their car models<br></br> on the basis of their Car
              Maker.<br></br>Click any list to see details
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PieChart_1;
