import React from 'react';
import { Link } from "react-router-dom";
import WindAnimation from '../Components/windAnimation.js';
import SunAnimation from '../Components/sunAnimation.js';
import CarAnimation from '../Components/carAnimation.js';
import TextWrap from '../Components/textWrap.js';
import SolutionHeading from '../Components/solutionHeading.js';
import Cost from '../Components/cost.js';

import windTurbine from '../Images/windFarm.jpg'
import solarPanels from '../Images/solarPanels.webp'
import electricVehicle from '../Images/electric-vehicle.jpg'

export default function CleanSolutionsHome() {
  return (<>
    <h1>Geothermal Power</h1>
    <div className="content">
      <div>
        <div className="solution">
          <TextWrap wrappedSide="left" wrappedElt={<>
            <img src={windTurbine}></img>
          </>} textElt={<>
            <p><b>Geothermal power</b> is created by using the heat from the Earth to generate power. The energy comes from the radioactive decay of natural isotopes. 
            The heat from this powers natural phenomena such as geysers, hotsprings, and lava flows. 
            It also was used since ancient times by many cultures for cooking, bathing, and warmth.</p>
            <p> The energy drawn from this by a geothermal plant is negligible compared to the total energy stored in the Earth. Like most other sources of renewable energy,
              Greenhouse gas emissions are only created from this source during construction.
            </p>
          
          </>}/>
        </div>

      </div>
    </div>

  </>);
}