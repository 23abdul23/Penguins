import React from 'react'
import {Line} from 'react-chartjs-2'
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
import penguins from './penguins.json'


const species = [... new Set(Object.values(penguins["Species"]))];
const island = [... new Set(Object.values(penguins["Island"]))];
const sex = [... new Set(Object.values(penguins["Sex"]))];
const N = 345;



const MassChart = () =>{
    
    let male = new Array(species.length).fill(0);
    let male_w = new Array(species.length).fill(0);;
    let female_w = new Array(species.length).fill(0);;
    let female = new Array(species.length).fill(0);
    Object.values(penguins["Species"]).forEach((specie, index) =>{
        
        const specieIndex = species.indexOf(specie);
        
        if (penguins["Sex"][index] == "MALE"){
            male[specieIndex] += 1;
            male_w[specieIndex] += penguins["Body Mass (g)"][index]
        }
        else{
            female[specieIndex] += 1;
            female_w[specieIndex] += penguins["Body Mass (g)"][index]
            }
    })

    for (let i = 0; i < male.length; i++){
        male_w[i] = male_w[i] / male[i];
        female_w[i] = female_w[i] / female[i];
    }

    const data = {
        labels: species,
        datasets: [
            {
                label: "Male",
                data: male_w,
                backgroundColor: 'rgba(58, 12, 163, 0.2)', // #3A0CA3
                borderColor: 'rgba(58, 12, 163, 1)',
                borderWidth: 2,
            },
            
            {
                label: "Female",
                data: female_w,
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
              text: "Mass of Penguins",
              
            },
        },
    };

    return <Line data={data} options={Options} />
};


export default MassChart;