import React from 'react'
import { Bar} from 'react-chartjs-2'
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

import penguins from './penguins.json'

const species = [... new Set(Object.values(penguins["Species"]))];
const island = [... new Set(Object.values(penguins["Island"]))];
const sex = [... new Set(Object.values(penguins["Sex"]))];



const SexChart = () =>{
    
    let male = new Array(species.length).fill(0);
    let female = new Array(species.length).fill(0);
    Object.values(penguins["Species"]).forEach((specie, index) =>{
        
        const specieIndex = species.indexOf(specie);
        
        if (penguins["Sex"][index] == "MALE")
            male[specieIndex] += 1;
        else
            female[specieIndex] += 1;
    })

    const data = {
        labels: species,
        datasets: [
            {
                label: "Male",
                data: male,
                backgroundColor: 'rgba(58, 12, 163, 0.2)', // #3A0CA3
                borderColor: 'rgba(58, 12, 163, 1)',
                borderWidth: 2,
            },
            
            {
                label: "Female",
                data: female,
                backgroundColor: 'rgba(255, 103, 0, 0.2)', // #FF6700
                borderColor: 'rgba(255, 103, 0, 1)',
                borderWidth: 2,
            }
            
        ]
    };

    const Options = {
        responsive: true,
        plugins: {
            legend: {
              position: "top",
            },
            title: {
              display: true,
              text: "Sex Ratio of Penguins",
            },
        },
    };

    return (
        <div style={{ width: "720px", height: "360px", margin: "auto" }}>
            <Bar data={data} options={Options} />
        </div>

    )
};


export default SexChart;