"use client";

import { useSelector } from "react-redux";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import PieChart from "./PieChart";
import { gramToOz, lbToOz, kgToOz } from "../utils/calculations";
import { useEffect, useState } from "react";

Chart.register(CategoryScale);

const ChartData = () => {
  const [priceArr, setPriceArr] = useState([]);
  const [weightArr, setWeightArr] = useState([]);
  const [chartType, setChartType] = useState("weight");
  const gear = useSelector((state) => {
    return state.gear.gear;
  });

  const onChartTypeChange = (e) => {
    setChartType(e.target.value);
  };

  useEffect(() => {
    setPriceArr([]);
    setWeightArr([]);
    gear.forEach((catagory) => {
      let cost = 0;
      let weight = 0;

      catagory.items.forEach((item) => {
        if (!isNaN(parseInt(item.price))) {
          cost += parseInt(item.price);
        } else {
          cost = cost;
        }

        if (item.weight) {
          if (item.unitOfMeasure == "g") {
            weight += gramToOz(parseInt(item.weight));
          } else if (item.unitOfMeasure == "kg") {
            weight += kgToOz(parseInt(item.weight));
          } else if (item.unitOfMeasure == "lb") {
            weight += lbToOz(parseInt(item.weight));
          } else {
            weight += parseInt(item.weight);
          }
        }
      });
      setPriceArr((priceArr) => [...priceArr, cost]);
      setWeightArr((weightArr) => [...weightArr, weight]);
    });
  }, [gear, chartType]);

  const chartData = {
    labels: gear.map((data) => data.name),
    datasets: [
      {
        label: chartType == "price" ? "Total price" : "Total Weight",
        data: chartType == "price" ? priceArr : weightArr,
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
          "#fc033d",
          "#f8fc03",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  };

  return (
    <section className="flex flex-col items-center mb-12">
      <PieChart chartData={chartData} chartType={chartType} />
      <div className="mr-6 flex flex-col mt-6">
        <div className="flex items-center justify-between">
          <label htmlFor="price" className="mr-2">
            Price
          </label>
          <input
            type="radio"
            name="chartCatagroy"
            id="price"
            value="price"
            checked={chartType == "price"}
            onChange={onChartTypeChange}
          />
        </div>
        <div className="flex items-center justify-between">
          <label htmlFor="weight" className="mr-2">
            Weight
          </label>
          <input
            type="radio"
            name="chartCatagroy"
            id="weight"
            value="weight"
            checked={chartType == "weight"}
            onChange={onChartTypeChange}
          />
        </div>
      </div>
    </section>
  );
};

export default ChartData;
