import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Title, Tooltip, Legend);

function TimeSeriesChart({ data }) {
  if (data.length === 0) return <div>Loading time-series data...</div>;

  const chartData = {
    labels: data.map((point) => point.time),
    datasets: [
      {
        label: "Engine RPM",
        data: data.map((point) => point.rpm),
        borderColor: "blue",
        fill: false,
      },
      {
        label: "Lub Oil Pressure",
        data: data.map((point) => point.lubOilPressure),
        borderColor: "green",
        fill: false,
      },
      {
        label: "Fuel Pressure",
        data: data.map((point) => point.fuelPressure),
        borderColor: "red",
        fill: false,
      },
      {
        label: "Coolant Pressure",
        data: data.map((point) => point.coolantPressure),
        borderColor: "purple",
        fill: false,
      },
      {
        label: "Lub Oil Temperature",
        data: data.map((point) => point.lubOilTemp),
        borderColor: "orange",
        fill: false,
      },
      {
        label: "Coolant Temperature",
        data: data.map((point) => point.coolantTemp),
        borderColor: "pink",
        fill: false,
      },
    ],
  };

  return (
    <div>
      <h2>Real-Time Engine Parameters</h2>
      <Line data={chartData} />
    </div>
  );
}

export default TimeSeriesChart;
