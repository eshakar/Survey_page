import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PieChart({ allocation }) {
  return (
    <Pie
      data={{
        labels: Object.keys(allocation),
        datasets: [
          {
            data: Object.values(allocation),
            backgroundColor: ["#2563eb", "#10b981", "#f59e0b", "#ef4444"],
          },
        ],
      }}
    />
  );
}
