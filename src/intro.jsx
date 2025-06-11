import React from "react";

import './intro.css'

function Intro(){

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };
      
    return  (
        <div className="outermost">
            <div className="start">
                <div>
                <h1>Penguins</h1>
                <hr className="line" />
                <p>
                    Penguins are flightless, aquatic birds found mainly in the Southern Hemisphere.
                    They are excellent swimmers, using their flipper-like wings to glide through the water.
                    With around 18 species, they range from the tiny Little Blue Penguin to the large Emperor Penguin.
                    Adapted to cold climates, penguins have thick blubber and waterproof feathers for insulation.
                    They feed on fish, squid, and krill, hunting in the ocean.
                    Known for their social behavior, they huddle for warmth and share parenting duties.
                    However, climate change and habitat loss threaten many species, making conservation efforts essential for their survival.
                </p>
                </div>
                </div>

                <div className='spec_island'>
                    <h2><b>Check Out</b></h2>
                    <div id='inner'>
                        <button onClick={(e) => {e.preventDefault(); scrollToSection("Species")}}>Species</button>
                    </div>
                </div>

                {/* Diagonal Split Section */}
                <div id="landing-area">
                <div id="box-left">
                    
                </div>
                <div id="box-right">
                    Box 2!
                </div>
            </div>
        </div>
    )
}

export default Intro