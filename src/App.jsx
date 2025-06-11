import { useState, useEffect } from 'react';
import './App.css';
import AllChart from './CHARTS/Charts.jsx';
import Intro from './intro.jsx';
import Hero from './hero.jsx';
import Slider from './slider.jsx';



function App() {
  return (
    <div className='App'>
      <div >
        <Hero />
      </div>

      <div id="Intro">
        <Intro />
      </div>

      <div id="Species" style={{width: "1536px", height : "736px"}}>
        <Slider />
      </div>

      <div className='charts'>
        <div id='EDA'>
          <AllChart />
        </div>
      </div>
    </div>
  );
}

export default App;
