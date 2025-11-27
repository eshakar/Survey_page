import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import "../styles/chart.scss";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function ChartCard() {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr"],
    datasets: [
      {
        label: "Users",
        data: [12, 19, 8, 15],
        backgroundColor: "#2563eb",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="chart-card">
      <h3>Users Overview</h3>
      <div className="chart-wrapper">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}
