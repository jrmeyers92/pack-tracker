"use client";

import { useSelector } from "react-redux";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import PieChart from "./PieChart";
import { gramToOz, lbToOz, kgToOz } from "../utils/weightConversion";
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
        if (item.price != null || item.price != "") {
          cost += parseInt(item.price);
        } else {
          cost = cost;
        }

        if (isNaN(cost)) {
          cost = 0;
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
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  };

  return (
    <section className="flex items-center">
      <div className="mr-6">
        <div className="flex items-center">
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
        <div className="flex items-center">
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
      <PieChart chartData={chartData} />
    </section>
  );
};

export default ChartData;
