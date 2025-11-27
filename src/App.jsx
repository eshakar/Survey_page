import React from "react";
import SimpleForm from "./components/SimpleForm";
import ChartCard from "./components/ChartCard";

export default function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Simple Form & Chart Example</h2>

      <SimpleForm />

      <ChartCard />
    </div>
  );
}
