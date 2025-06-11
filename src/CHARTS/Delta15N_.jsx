import React from 'react'
import {Bubble, Scatter} from 'react-chartjs-2'
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

const ChartWrapper = ({data, options}) => {
  return <div style={{margin: "0", height: "400px", width: "500px"}}>
    <Scatter data={data} options = {options}/>
  </div>
}


const Delta15CDChart = () =>{
    
      const speciesColors = {
        Adelie: "rgba(76, 201, 240, 1)",   // Soft Sky Blue
        Chinstrap: "rgba(128, 185, 24, 1)", // Lush Green
        Gentoo: "rgba(251, 86, 7, 1)",      // Fiery Rust Orange
    };

    
    
    const datasets = species.map((specie) => {
        const specieData = Object.values(penguins["Culmen Depth (mm)"]).map((culmenLength, index) => ({
            x: culmenLength,
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
    
      const options = {
        scales: {
          x: {
            type: "linear",
            position: "bottom",
            title: {
              display: true,
              text: "Culmen Depth (mm)",
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
      };

    return <ChartWrapper data={data} options={options} />
};

const Delta15CLChart = () =>{
    
  const speciesColors = {
    Adelie: "rgba(76, 201, 240, 1)",   // Soft Sky Blue
    Chinstrap: "rgba(128, 185, 24, 1)", // Lush Green
    Gentoo: "rgba(251, 86, 7, 1)",      // Fiery Rust Orange
};

  
  
  const datasets = species.map((specie) => {
      const specieData = Object.values(penguins["Culmen Length (mm)"]).map((culmenLength, index) => ({
          x: culmenLength,
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
  
    const options = {
      scales: {
        x: {
          type: "linear",
          position: "bottom",
          title: {
            display: true,
            text: "Culmen Length (mm)",
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
    };

  return <ChartWrapper data={data} options={options} />
};

const Delta15FLChart = () =>{
    
  const speciesColors = {
    Adelie: "rgba(76, 201, 240, 1)",   // Soft Sky Blue
    Chinstrap: "rgba(128, 185, 24, 1)", // Lush Green
    Gentoo: "rgba(251, 86, 7, 1)",      // Fiery Rust Orange
};

  
  
  const datasets = species.map((specie) => {
      const specieData = Object.values(penguins["Flipper Length (mm)"]).map((culmenLength, index) => ({
          x: culmenLength,
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
  
    const options = {
      scales: {
        x: {
          type: "linear",
          position: "bottom",
          title: {
            display: true,
            text: "Flipper Length (mm)",
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
    };

  return <ChartWrapper data={data} options={options} />
};


export  {Delta15CDChart, Delta15CLChart, Delta15FLChart};