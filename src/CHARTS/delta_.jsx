import React from 'react'
import {Scatter} from 'react-chartjs-2'
import { useState } from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";

ChartJS.register(
CategoryScale,
LinearScale,
BarElement,
Title,
Tooltip,
Legend
);

import _ from 'lodash'
import penguins from '../../../penguins.json'


const species = [... new Set(Object.values(penguins["Species"]))];
const island = [... new Set(Object.values(penguins["Island"]))];
const sex = [... new Set(Object.values(penguins["Sex"]))];
const N = 345;

const chartOptions = (xLabel) => ({
    scales: {
        x: {
            type: "linear",
            position: "bottom",
            title: {
                display: true,
                text: xLabel,
            },
        },
        y: {
            title: {
                display: true,
                text: "Mass",
            },
        },
    },
    plugins: {
        legend: {
            position: "top",
        },
    },
    maintainAspectRatio: false, // Allows setting custom height
});

// Component to wrap each chart
const ChartWrapper = ({ data, options }) => (
    <div style={{ width: "550px", height: "400px", margin: "auto" }}>
        <Scatter data={data} options={options} />
    </div>
);

const DeltaCChart = () =>{
    
    const speciesColors = {
    Adelie: "rgba(76, 201, 240, 1)",   // Soft Sky Blue
    Chinstrap: "rgba(128, 185, 24, 1)", // Lush Green
    Gentoo: "rgba(251, 86, 7, 1)",      // Fiery Rust Orange
};

    
    
    const datasets = species.map((specie) => {
        const specieData = Object.values(penguins["Body Mass (g)"]).map((mass, index) => ({
            x: mass,
            y: penguins["Delta 13 C (o/oo)"][index],
          }))
          .filter((_, index) => penguins["Species"][index] == specie)

        return {
            label: specie,
            data: specieData,
            backgroundColor: speciesColors[specie],
        }
    })

      const data = {
        datasets,
      };
    
      
    return <ChartWrapper data={data} options={chartOptions("Body Mass (g)")} />
};

const DeltaNChart = () =>{
    
  const speciesColors = {
    Adelie: "rgba(76, 201, 240, 1)",   // Soft Sky Blue
    Chinstrap: "rgba(128, 185, 24, 1)", // Lush Green
    Gentoo: "rgba(251, 86, 7, 1)",      // Fiery Rust Orange
};

  
  
  const datasets = species.map((specie) => {
      const specieData = Object.values(penguins["Body Mass (g)"]).map((mass, index) => ({
          x: mass,
          y: penguins["Delta 15 N (o/oo)"][index],
        }))
        .filter((_, index) => penguins["Species"][index] == specie)

      return {
          label: specie,
          data: specieData,
          backgroundColor: speciesColors[specie],
      }
  })

    const data = {
      datasets,
    };
  
    

  return <ChartWrapper data={data} options={chartOptions("Body Mass (g)")} />
};

export {DeltaCChart, DeltaNChart};