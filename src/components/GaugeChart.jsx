import React from "react";

export default function GaugeChart({ score }) {
  const deg = (score / 1000) * 180;

  return (
    <div className="gauge">
      <div className="needle" style={{ transform: `rotate(${deg}deg)` }} />
      <div className="gauge-center" />
    </div>
  );
}
