import React from 'react';
import { Scatter } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    Title,
    Tooltip,
    Legend
);

import penguins from '../data/penguins.json';;

const species = [...new Set(Object.values(penguins["Species"]))];

const speciesColors = {
    Adelie: "rgba(76, 201, 240, 1)",   // Soft Sky Blue
    Chinstrap: "rgba(128, 185, 24, 1)", // Lush Green
    Gentoo: "rgba(251, 86, 7, 1)",      // Fiery Rust Orange
};

// Common options for all charts
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

// Mass V/s Culmen Depth Chart
const MassCDChart = () => {
    const datasets = species.map((specie) => {
        const specieData = Object.values(penguins["Culmen Depth (mm)"])
            .map((culmenDepth, index) => ({
                x: culmenDepth,
                y: penguins["Body Mass (g)"][index],
            }))
            .filter((_, index) => penguins["Species"][index] === specie);

        return {
            label: specie,
            data: specieData,
            backgroundColor: speciesColors[specie],
        };
    });

    const data = { datasets };

    return <ChartWrapper data={data} options={chartOptions("Culmen Depth (mm)")} />;
};

// Mass V/s Culmen Length Chart
const MassCLChart = () => {
    const datasets = species.map((specie) => {
        const specieData = Object.values(penguins["Culmen Length (mm)"])
            .map((culmenLength, index) => ({
                x: culmenLength,
                y: penguins["Body Mass (g)"][index],
            }))
            .filter((_, index) => penguins["Species"][index] === specie);

        return {
            label: specie,
            data: specieData,
            backgroundColor: speciesColors[specie],
        };
    });

    const data = { datasets };

    return <ChartWrapper data={data} options={chartOptions("Culmen Length (mm)")} />;
};

// Mass V/s Flipper Length Chart
const MassFLChart = () => {
    const datasets = species.map((specie) => {
        const specieData = Object.values(penguins["Flipper Length (mm)"])
            .map((flipperLength, index) => ({
                x: flipperLength,
                y: penguins["Body Mass (g)"][index],
            }))
            .filter((_, index) => penguins["Species"][index] === specie);

        return {
            label: specie,
            data: specieData,
            backgroundColor: speciesColors[specie],
        };
    });

    const data = { datasets };

    return <ChartWrapper data={data} options={chartOptions("Flipper Length (mm)")} />;
};

export { MassCDChart, MassCLChart, MassFLChart };
