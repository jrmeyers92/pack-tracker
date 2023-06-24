// src/components/PieChart.js
import React from "react";
import { Pie } from "react-chartjs-2";

function PieChart({ chartData, chartType }) {
  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>Pack Tracker</h2>
      <Pie
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: `% ${chartType} for each catagory table`,
            },
          },
        }}
      />
    </div>
  );
}
export default PieChart;
