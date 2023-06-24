// src/components/PieChart.js
import React from "react";
import { Doughnut } from "react-chartjs-2";

function PieChart({ chartData, chartType }) {
  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>Pack Tracker</h2>
      <Doughnut
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: `% ${chartType} for each catagory table`,
            },
            // legend: {
            //   display: true,
            //   position: "right",
            // },
          },
        }}
      />
    </div>
  );
}
export default PieChart;
