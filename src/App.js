import React, { useState, useEffect } from "react";
import EngineForm from "./components/EngineForm";
import ConditionResult from "./components/ConditionResult";
import TimeSeriesChart from "./components/TimeSeriesChart";
import "./App.css";

function App() {
  const [condition, setCondition] = useState(null);
  const [warnings, setWarnings] = useState([]);
  const [timeSeriesData, setTimeSeriesData] = useState([]);

  // Simulate real-time data (updates every 3 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      const newData = {
        time: new Date().toLocaleTimeString(),
        rpm: Math.random() * (3000 - 500) + 500,
        lubOilPressure: Math.random() * (80 - 20) + 20,
        fuelPressure: Math.random() * (100 - 30) + 30,
        coolantPressure: Math.random() * (50 - 10) + 10,
        lubOilTemp: Math.random() * (120 - 60) + 60,
        coolantTemp: Math.random() * (120 - 70) + 70,
      };
      setTimeSeriesData((prev) => [...prev.slice(-10), newData]); // Keep last 10 data points
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleCheckCondition = (inputs) => {
    const thresholds = {
      rpm: [500, 3000],
      lubOilPressure: [20, 80],
      fuelPressure: [30, 100],
      coolantPressure: [10, 50],
      lubOilTemp: [60, 120],
      coolantTemp: [70, 120],
    };

    const warningMessages = [];
    let overallCondition = "Good";

    if (inputs.rpm < thresholds.rpm[0] || inputs.rpm > thresholds.rpm[1]) {
      warningMessages.push("Engine RPM is out of range!");
    }
    if (
      inputs.lubOilPressure < thresholds.lubOilPressure[0] ||
      inputs.lubOilPressure > thresholds.lubOilPressure[1]
    ) {
      warningMessages.push("Lubricant Oil Pressure is out of range!");
    }
    if (
      inputs.fuelPressure < thresholds.fuelPressure[0] ||
      inputs.fuelPressure > thresholds.fuelPressure[1]
    ) {
      warningMessages.push("Fuel Pressure is out of range!");
    }
    if (
      inputs.coolantPressure < thresholds.coolantPressure[0] ||
      inputs.coolantPressure > thresholds.coolantPressure[1]
    ) {
      warningMessages.push("Coolant Pressure is out of range!");
    }
    if (
      inputs.lubOilTemp < thresholds.lubOilTemp[0] ||
      inputs.lubOilTemp > thresholds.lubOilTemp[1]
    ) {
      warningMessages.push("Lubricant Oil Temperature is out of range!");
    }
    if (
      inputs.coolantTemp < thresholds.coolantTemp[0] ||
      inputs.coolantTemp > thresholds.coolantTemp[1]
    ) {
      warningMessages.push("Coolant Temperature is out of range!");
    }

    if (warningMessages.length > 2) {
      overallCondition = "Critical";
    } else if (warningMessages.length > 0) {
      overallCondition = "Warning";
    }

    setCondition(overallCondition);
    setWarnings(warningMessages);
  };

  return (
    <div className="App">
      {/* Header Section */}
      <header
        style={{
          background: "rgba(0, 0, 0, 0.7)",
          padding: "20px",
          borderRadius: "10px",
          marginBottom: "20px",
          color: "white",
          boxShadow: "0px 4px 6px rgba(0,0,0,0.3)",
        }}
      >
        <h1>Interactive Engine Condition Board</h1>
      </header>

      {/* Main Content */}
      <EngineForm onCheckCondition={handleCheckCondition} />
      {condition && <ConditionResult condition={condition} warnings={warnings} />}
      <TimeSeriesChart data={timeSeriesData} />

      {/* Footer Section */}
      <footer
        style={{
          background: "rgba(0, 0, 0, 0.7)",
          padding: "10px",
          borderRadius: "10px",
          marginTop: "40px",
          color: "white",
          boxShadow: "0px -4px 6px rgba(0,0,0,0.3)",
        }}
      >
        Engine Condition Board © 2024
      </footer>
    </div>
  );
}

export default App;
