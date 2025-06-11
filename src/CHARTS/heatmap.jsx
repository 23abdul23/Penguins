import React from "react";
import {
  Chart as ChartJS,
  Tooltip,
  Legend,
  LinearScale,
  CategoryScale,
  PointElement,
  Title,
  BubbleController,
} from "chart.js";
import { Chart } from "react-chartjs-2";

// Register required components
ChartJS.register(
  BubbleController,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
  Title
);

// Heatmap data
const heatmapData = [
  { x: 1, y: 1, count: 44 },  // Biscoe - Adelie
  { x: 2, y: 1, count: 56 },  // Dream - Adelie
  { x: 3, y: 1, count: 52 },  // Torgersen - Adelie
  { x: 1, y: 2, count: 0 },   // Biscoe - Chinstrap
  { x: 2, y: 2, count: 68 },  // Dream - Chinstrap
  { x: 2, y: 1, count: 0 },   // Torgersen - Chinstrap
  { x: 1, y: 3, count: 124 }, // Biscoe - Gentoo
  { x: 1, y: 2, count: 0 },   // Dream - Gentoo
  { x: 2, y: 2, count: 0 },   // Torgersen - Gentoo
];



// Chart data
const data = {
  datasets: [
    {
      label: "Penguin Species Count per Island",
      backgroundColor: 'rgba(255, 103, 0, 0.2)', // #FF6700
      borderColor: 'rgba(255, 103, 0, 1)',
      data: heatmapData.map((item) => ({
        x: item.x,
        y: item.y,
        r: Math.sqrt(item.count) * 2, // Bubble size scaling
        
      })),
    },
  ],
};

// Chart options
const options = {
  responsive: true,
  maintainAspectRatio: false, // Allow custom sizing
  plugins: {
    title: {
      display: true,
      text: "Penguin Count Heatmap",
    },
    tooltip: {
      callbacks: {
        title: (tooltipItems) => `Island: ${["Biscoe", "Dream", "Torgersen"][tooltipItems[0].raw.x]}`,
        label: (tooltipItem) =>
          `Species: ${["Adelie", "Chinstrap", "Gentoo"][tooltipItem.raw.y]}, Count: ${heatmapData[tooltipItem.dataIndex].count}`,
      },
    },
  },
  scales: {
    x: {
      min: 0,
      max: 4,
      type: "linear",
      position: "bottom",
      ticks: {
        callback: (val) => ["Biscoe", "Dream", "Torgersen"][val-1], // Labeling islands
      },
    },
    y: {
      min: 0,
      max: 4,
      type: "linear",
      ticks: {
        callback: (val) => ["Adelie", "Chinstrap", "Gentoo"][val-1], // Labeling species
      },
      reverse: true, // Flip y-axis for better visualization
    },
  },
};

// Heatmap component with fixed size
const Heatmap = () => {
  return (
    <div style={{width: "700px", height: "500px" }}> {/* Fixed Size */}
      <Chart type="bubble" data={data} options={options} />
    </div>
  );
};

export default Heatmap;
