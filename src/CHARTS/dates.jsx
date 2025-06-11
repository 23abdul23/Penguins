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


import penguins from '../data/penguins.json';


const species = [... new Set(Object.values(penguins["Species"]))];
const island = [... new Set(Object.values(penguins["Island"]))];
const sex = [... new Set(Object.values(penguins["Sex"]))];
const N = 345;

const dates = {
    'Adelie': [0.0, 7.0, 31.5, 68.0, 76.0],
    'Gentoo': [9.0, 24.0, 31.0, 73.0, 420.0],
    'Chinstrap': [10.0, 19.0, 46.0, 74.0, 360.0]
}
  
const ChartWrapper = ({type, data, options}) => {
  return <div style={{margin: "0", height: "400px", width: "500px"}}>
    <Chart type={type} data={data} options = {options}/>
  </div>
}


  

const Dates_specie = () => {
  const data = {
    labels: species, // Categories
    datasets: [
      {
        label: "Dates",
        data: [
            dates["Adelie"],
            dates["Chinstrap"],
            dates["Gentoo"]
        ],
        backgroundColor: 'rgba(255, 103, 0, 0.2)', // #FF6700
        borderColor: 'rgba(255, 103, 0, 1)',
        borderWidth: 1,
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
        min: -1,  // Set the minimum value of the y-axis
        max: 100,  // Set the maximum value of the y-axis
        ticks: {
          stepSize: 5,  // Controls the tick interval on the y-axis
        }
    }
  };

  return <ChartWrapper type="boxplot" data={data} options={options} />;
};


const Egg_count = () => {

    const eggs = [0,0,0];
    const specie_count = [0,0,0];

    Object.values(penguins["Species"]).forEach((specie, index) => {
        
        const specie_index = species.indexOf(specie);

        eggs[specie_index] += penguins["Dates"][index];
        specie_count[specie_index] += 1;
            
    });

   

    for (let i = 0; i< 3 ;i++){
        eggs[i] = eggs[i] / specie_count[i]
    }
    


    const data = {
        labels: species, // Categories
        datasets: [
          {
            label: "Dates",
            data: eggs,
            backgroundColor: 'rgba(58, 12, 163, 0.2)', // #3A0CA3
            borderColor: 'rgba(58, 12, 163, 1)',
            borderWidth: 1,
          },
          
        ],
      };
    
      const options = {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: "Bar Chart of Delta N v/s Specie",
          },
        },
        y: {
            min: 0,  // Set the minimum value of the y-axis
            max: 80,  // Set the maximum value of the y-axis
            ticks: {
              stepSize: 5,  // Controls the tick interval on the y-axis
            }
        }
      };
    
      return <ChartWrapper type="bar" data={data} options={options} />;
};

export {Dates_specie, Egg_count};
