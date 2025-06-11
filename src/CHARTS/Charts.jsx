import React from "react";


import Chart from 'chart.js/auto'
import SexChart from './sex_chart_bar.jsx'
import MassChart from './mass_chart_bar.jsx'
import {MassCDChart, MassCLChart, MassFLChart} from './mass_.jsx'
import {DeltaCChart, DeltaNChart} from './delta_.jsx'
import { DeltaN_specie, DeltaC_specie } from './delta_specie.jsx';
import { Delta13CDChart, Delta13CLChart, Delta13FLChart } from './Delta13C_.jsx'
import { Delta15CDChart, Delta15CLChart, Delta15FLChart } from './Delta15N_.jsx'
import  {Dates_specie, Egg_count } from './dates.jsx'
import Heatmap from './heatmap.jsx'

import './charts.css';

function AllChart(){
    return (
            <div>
                <br />
                <div className="chart_container" style={{ display: "flex", background: "transparent",flexDirection: "column", gap: "20px", marginTop: "20px", width: "1600px" }}>
                    {/* First Row: Two Charts with Paragraphs Beneath */}
                    <div className="charts_row" style={{ display: "flex", justifyContent: "space-evenly", gap: "20px", width: "1500px" }}>
                        <div className="chart" style={{ flex: 1, display: "flex",height: "511px",  flexDirection: "column", alignItems: "center" }}>
                            <h2>Sex Ratio Of Penguins</h2>
                            <SexChart />
                            <div className="para" style={{ marginTop: "10px", textAlign: "center", bottom: "0" }}>
                                <p>
                                    We can see that Male are more or equal to Female in number. <br />
                                    Chinstrap being the lowest in the total population.
                                </p>
                            </div>
                        </div>
                        <div className="chart" style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", height: "511px" }}>
                            <h2>Mass Of Penguins</h2>
                            <MassChart />
                            <div className="para" style={{ marginTop: "10px", textAlign: "center" , bottom: "0" }}>
                                <p>
                                    Generally Males are Heavier than the Females, But in the Gentoo species penguins,
                                    their females are even heavier than the Males of other species.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>


            <div style={{backgroundColor : "#0F0529"}}>
            <div className="chart_container Mass_vs" style={{ display: "flex", flexDirection: "column", gap: "20px" , width: "1400px" }}>
                {/* First Row: Two Charts */}
                <div className="charts_row" style={{ display: "flex", justifyContent: "space-evenly", gap: "20px" }}>
                    <div className="chart" style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <h2>Mass V/s Culmen Length</h2>
                        <MassCLChart />
                    </div>

                    <div className="chart" style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <h2>Mass V/s Culmen Depth</h2>
                        <MassCDChart />
                    </div>
                </div>

                                <div className="charts_row" style={{ display: "flex", justifyContent: "space-evenly", gap: "20px" }}>
                                    <div className="chart" style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center" }}>
                                        <h2>Mass V/s Flipper Length</h2>
                                        <MassFLChart />
                                    </div>

                                    <div  className="chart" style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" , alignItems: "center"}}>
                                        <div className="text_container" style={{ padding: "10px", textAlign: "justify" }}>
                                            <p className="chart_text">
                                                <strong style = {{fontWeight: "bold"}}>Culmen</strong> - It is the beak part area of the penguin.  
                                                <br /><br />
                                                In the above three graphs, we can see that:  
                                                - <strong style = {{fontWeight: "bold"}}>Gentoo Penguins</strong> are the heaviest among the three species.  <br />
                                                - <strong style = {{fontWeight: "bold"}}>Culmen Length vs Body Mass</strong> - It is clustered according to the three species.  <br />
                                                - <strong style = {{fontWeight: "bold"}}>Culmen Depth vs Body Mass</strong> - It is inversely correlated.  <br />
                                                - <strong style = {{fontWeight: "bold"}}>Flipper Length vs Body Mass</strong> - Directly correlated.  <br />
                                                <br />
                                                In both the above two graphs, Gentoo species are <strong style = {{fontWeight: "bold"}}>clustered separately</strong> from the other two, while the other two species are mixed.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>


                            
                            <br></br>
                            <br></br>

                            <div className="chart_container" style={{ display: "flex", flexDirection: "column", gap: "20px", width: "1200px" }}>
                                {/* First Row: Two Charts */}
                <div className="charts_row" style={{ display: "flex", justifyContent: "space-evenly", gap: "20px" }}>
                    <div className="chart" style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <h2>Mass V/s Delta N</h2>
                        <DeltaNChart />
                    </div>
                    <div className="chart" style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <h2>Mass V/s Delta C</h2>
                        <DeltaCChart />
                    </div>
                </div>

                {/* Second Row: Text Content */}
                <div className="text_row para" style={{ display: "flex", justifyContent: "center", padding: "10px", textAlign: "center"}}>
                    <p>
                        <strong style = {{fontWeight: "bold"}}>δ15N (Nitrogen-15) – "What Penguins Eat"</strong><br />
                       The higher the δ15N value, the higher up the food chain the penguin is eating.<br />
                       Example: A penguin that eats fish and squid will have a higher δ15N than one that eats mostly krill.<br /><br />

                        <strong style = {{fontWeight: "bold"}}>δ13C (Carbon-13) – "Where Penguins Eat"</strong><br />
                       The δ13C value tells us where the penguin is getting its food:<br />
                       Higher values → Near the coast or in areas with more sea ice.<br />
                       Lower values → Farther out in the open ocean. (Negative Values)<br /><br />

                      In simple terms, the penguins with a -27 value are likely eating mostly krill, fish, zooplankton, while those with a -23.5 value may be mixing fish and possibly seabirds or squid, potentially including both marine and land-based sources.*
                    </p>
                </div>
            </div>
            


            

            <div className="chart_container" style={{ display: "flex", flexDirection: "column", gap: "20px", width: "1400px" }}>
                {/* First Row: Two Charts */}
                <div className="charts_row" style={{ display: "flex", justifyContent: "space-evenly", gap: "20px" }}>
                    <div className="chart" style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <h2>Delta N V/s Species</h2>
                        <DeltaN_specie />
                    </div>
                    <div className="chart" style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <h2>Delta C V/s Species</h2>
                        <DeltaC_specie />
                    </div>
                </div>

                {/* Second Row: Text Content */}
                <div className="text_row para" style={{ display: "flex", justifyContent: "center", padding: "10px", textAlign: "justify" }}>
                    <p className='right_part_text'>
                    Delta 15 N
                    
                   Adelie species has the most widespread range, data is not concentrated around the median.
                    
                   The other two species have concentrated spread around the median as compared to Adelie species, even among them the Gentoo Species are not on top of the Food chain compared to the other two.
                    
                    </p>
                </div>
            </div>

            

            
            <div className="chart_container" style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: "1600px" }}>
                {/* First Row: Two Charts */}
                <div className="charts_row" style={{ display: "flex", justifyContent: "space-evenly", gap: "20px" }}>
                    <div className="chart" style={{ flex: 1, height : "300px", display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <h2>Delta 13C V/s Culmen Depth</h2>
                        <Delta13CDChart />
                    </div>
                    <div className="chart" style={{ flex: 1,height : "300px", display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <h2>Delta 13C V/s Culmen Length</h2>
                        <Delta13CLChart />
                    </div>
                    <div className="chart" style={{ flex: 1,height : "300px", display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <h2>Delta 13C V/s Flipper Length</h2>
                        <Delta13FLChart />
                    </div>
                </div>

                {/* Second Row: Text Content */}
                <div className="text_row para" style={{ display: "flex", justifyContent: "center", padding: "10px", textAlign: "justify" }}>
                    <p>
                    Since Delta 13 C mainly deals with how far are Penguins going for their Food and what they are eating.
        <br /><br />
        The Chinstrap having a good diet require much greater feature to help them get their food, Hence they have Longer Culmen Length, Culmen Depth and which supports them.
        <br /><br />
        Krill (which are rich in Lipids or fat deposits) are fed by Gentoo species and Krills are mostly present in Ocean, which supports why Gentoo Species have high Body Mass and Largest Flipper Length (they have to be great swimmers).
                    </p>
                </div>
            </div>

           
            

            <div className="chart_container" style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: "1600px" }}>
                {/* First Row: Two Charts */}
                <div className="charts_row" style={{ display: "flex", justifyContent: "space-evenly", gap: "20px" }}>
                    <div className="chart" style={{ flex: 1, height : "300px", display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <h2>Delta 15N V/s Culmen Depth</h2>
                        <Delta15CDChart />
                    </div>
                    <div className="chart" style={{ flex: 1,height : "300px", display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <h2>Delta 15N  V/s Culmen Length</h2>
                        <Delta15CLChart />
                    </div>
                    <div className="chart" style={{ flex: 1,height : "300px", display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <h2>Delta 15N  V/s Flipper Length</h2>
                        <Delta15FLChart />
                    </div>
                </div>

                {/* Second Row: Text Content */}
                <div className="text_row para" style={{ display: "flex", justifyContent: "center", padding: "10px", textAlign: "justify" }}>
                    <p>
                    The data simply shows that the Adelie and Chinstrap Species are above in Food Chain (they are more aggresive in their food habbits) while the Gentoo Species are not that agressive. 
                    <br /><br />
                    Their Culemen Lenght and Depth and Flipper Length supports the observation.
                    </p>
                </div>
            </div>

            

            
            <div className="chart_container"  style={{ display: "flex", flexDirection: "column", gap: "20px", width: "1200px"}}>
                <div className="charts_row" style={{ display: "flex", justifyContent: "space-evenly", gap: "20px" }}>
                    <div className="chart" style={{ flex: 1, height : "300px", display: "flex", flexDirection: "column", alignItems: "center" }}>
                        
                        <h2>Egg Laying Period</h2>
                        <Dates_specie />
                    </div>
                    
                    <div className="chart" style={{ flex: 1, height : "300px", display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <h2>Number of Eggs Layed</h2>
                        <Egg_count />
                    </div>
            </div>

            <div className="para">
                <p>
                The above graph shows that all three species give birth to eggs within 100 days and altogether. Except for 2-3 outliers.<br></br>
                Gentoo Species have laid the most eggs among all three species.
                </p>
            </div>
            </div>
        
            <div className="chart_container" style={{ width: "800px"}}>
                <div className="chart">
                <h2>Species V/s Island Distribution</h2>
                <Heatmap />
                </div>

            <div className="para">
           Adielie Speciec are evenly spread across all the islands.<br></br>
           Chinstrap is endemic to Dream island, while the Gentoo Species are endemic to Biscoe island
            </div>

            
            </div>
        </div>
    )
}

export default AllChart