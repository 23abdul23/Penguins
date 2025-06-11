import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Tooltip,
  Title,
} from "chart.js";
import {
  BoxPlotController,
  BoxAndWiskers,
  BoxPlotChart,
} from "@sgratzl/chartjs-chart-boxplot";
import { Chart } from "react-chartjs-2";

// Register the required controllers and elements
ChartJS.register(
  CategoryScale,
  LinearScale,
  Tooltip,
  Title,
  BoxPlotController,
  BoxAndWiskers
);


import penguins from '../../../penguins.json'


const species = [... new Set(Object.values(penguins["Species"]))];
const island = [... new Set(Object.values(penguins["Island"]))];
const sex = [... new Set(Object.values(penguins["Sex"]))];
const N = 345;

const penguinBoxplotData = {
    "adelie": {
      "male": {
        "delta15N": [8.18658, 8.663835, 8.86853, 9.12489, 9.72764],
        "delta13C": [-26.60023, -26.22627, -25.83352, -25.394545, -24.10255]
      },
      "female": {
        "delta15N": [7.69778, 8.47257, 8.79787, 9.07878, 9.79532],
        "delta13C": [-26.78958, -26.19444, -25.89741, -25.32426, -23.90309]
      }
    },
    "chinstrap": {
      "male": {
        "delta15N": [8.63701, 9.2567225, 9.448045, 9.752375, 10.02544],
        "delta13C": [-24.97134, -24.6866575, -24.555925, -24.3683925, -23.78767]
      },
      "female": {
        "delta15N": [8.47173, 9.049075, 9.35277, 9.4603525, 9.80589],
        "delta13C": [-25.1455, -24.6624125, -24.587305, -24.453265, -23.89017]
      }
    },
    "gentoo": {
      "male": {
        "delta15N": [7.76843, 8.149385, 8.28098, 8.4702375, 8.83352],
        "delta13C": [-26.86127, -26.7037875, -26.218415, -25.6862915, -25.00169]
      },
      "female": {
        "delta15N": [7.6322, 7.993575, 8.2087, 8.40688, 8.65015],
        "delta13C": [-27.01854, -26.67573, -26.210945, -25.559805, -25.32176]
      }
    }
  }
  
const ChartWrapper = ({ data, options }) => (
    <div style={{ width: "600px", height: "300px", margin: "auto" }}>
        <Chart type="boxplot" data={data} options={options} />
    </div>
);

  

const DeltaN_specie = () => {
  const data = {
    labels: species, // Categories
    datasets: [
      {
        label: "Male",
        data: [
            penguinBoxplotData["adelie"]["male"]["delta15N"],
            penguinBoxplotData["chinstrap"]["male"]["delta15N"],
            penguinBoxplotData["gentoo"]["male"]["delta15N"]
        ],
        backgroundColor: 'rgba(58, 12, 163, 0.2)', // #3A0CA3
        borderColor: 'rgba(58, 12, 163, 1)',
        borderWidth: 1,
      },
      {
        label: "Female",
        data: [
            penguinBoxplotData["adelie"]["female"]["delta15N"],
            penguinBoxplotData["chinstrap"]["female"]["delta15N"],
            penguinBoxplotData["gentoo"]["female"]["delta15N"]
        ],
        backgroundColor: 'rgba(255, 103, 0, 0.2)', // #FF6700
        borderColor: 'rgba(255, 103, 0, 1)',
        borderWidth: 1,
          // Outlier color
        outlierRadius: 7,
      },
    ],
  };

  
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Boxplot of Delta N v/s Specie",
      },
    },
    y: {
        min: 7.5,  // Set the minimum value of the y-axis
        max: 10.2,  // Set the maximum value of the y-axis
        ticks: {
          stepSize: 0.5,  // Controls the tick interval on the y-axis
        }
    }
  };

  return <ChartWrapper type="boxplot" data={data} options={options} />;
};


const DeltaC_specie = () => {
    const data = {
      labels: species, // Categories
      datasets: [
        {
          label: "Male",
          data: [
              penguinBoxplotData["adelie"]["male"]["delta13C"],
              penguinBoxplotData["chinstrap"]["male"]["delta13C"],
              penguinBoxplotData["gentoo"]["male"]["delta13C"]
          ],
          backgroundColor: 'rgba(58, 12, 163, 0.2)', // #3A0CA3
          borderColor: 'rgba(58, 12, 163, 1)',
          borderWidth: 1,
        },
        {
          label: "Female",
          data: [
              penguinBoxplotData["adelie"]["female"]["delta13C"],
              penguinBoxplotData["chinstrap"]["female"]["delta13C"],
              penguinBoxplotData["gentoo"]["female"]["delta13C"]
          ],
          backgroundColor: 'rgba(255, 103, 0, 0.2)', // #FF6700
          borderColor: 'rgba(255, 103, 0, 1)',
          borderWidth: 1,
            // Outlier color
          outlierRadius: 7,
        },
      ],
    };
  
    const options = {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: "Boxplot of Delta C v/s Specie",
        },
      },
      y: {
          min: -27.5,  // Set the minimum value of the y-axis
          max: -23.5,  // Set the maximum value of the y-axis
          ticks: {
            stepSize: 0.5,  // Controls the tick interval on the y-axis
          }
      }
    };
  
    return <ChartWrapper type="boxplot" data={data} options={options} />;
  };
  export { DeltaN_specie, DeltaC_specie };
