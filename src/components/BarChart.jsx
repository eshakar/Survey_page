import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale);

export default function BarChart({ sip }) {
  return (
    <Bar
      data={{
        labels: Object.keys(sip),
        datasets: [
          {
            label: "SIP Amount (₹)",
            data: Object.values(sip),
            backgroundColor: "#2563eb",
          },
        ],
      }}
      options={{ indexAxis: "y" }}
    />
  );
}
