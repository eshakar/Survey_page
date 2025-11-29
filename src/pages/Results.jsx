import React from "react";
import "../styles/results.scss";
import {
  calculateHealthScore,
  getAssetAllocation,
  sipAmounts,
} from "../utils/calculations";
import GaugeChart from "../components/GaugeChart";
import PieChart from "../components/PieChart";
import BarChart from "../components/BarChart";
import SummaryCard from "../components/SummaryCard";
import { useNavigate } from "react-router-dom";
import LineChart from "../components/LineChart";

export default function Results() {
  const navigate = useNavigate();
  const data = JSON.parse(localStorage.getItem("survey-data"));

  const score = calculateHealthScore(data);
  const allocation = getAssetAllocation(data.risk);
  const sip = sipAmounts(allocation, data.income);

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const projectGrowth = [
    5000, 10200, 15000, 21000, 27000, 33000, 39000, 45000, 52000, 59000, 66000,
    73000,
  ];

  return (
    <div className="results-container">
      <h2>Your Financial Insights</h2>

      <div className="gauge-section">
        <GaugeChart score={score} />
        <h3>Financial Health Score: {score}</h3>
      </div>

      <h3>Recommended Asset Allocation</h3>
      <PieChart allocation={allocation} />

      <h3>Recommended Monthly SIP (₹)</h3>
      <BarChart sip={sip} />

      <h3>Projected Investment Growth</h3>

      <LineChart
        labels={["Year 1", "Year 2", "Year 3", "Year 4", "Year 5"]}
        dataPoints={[100000, 150000, 225000, 330000, 475000]}
        title="Projected Corpus (₹)"
      />

      <div className="cards-row">
        <SummaryCard
          title="Emergency Fund"
          value={`₹ ${(data.expenses * 6).toLocaleString()}`}
          description="Maintain 6 months of expenses"
        />
        <SummaryCard
          title="Insurance Cover"
          value={`₹ ${(data.income * 120).toLocaleString()}`}
          description="10–12x annual income"
        />
        <SummaryCard
          title="Projected Corpus (15 yrs)"
          value="₹ 1,23,40,000"
          description="Assuming moderate SIP growth"
        />
      </div>

      <button className="recalc" onClick={() => navigate("/")}>
        Recalculate
      </button>
    </div>
  );
}
