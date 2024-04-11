import React from 'react';
import { Link } from "react-router-dom";
import TextWrap from '../Components/textWrap.js';
import SolutionHeading from '../Components/solutionHeading.js';
import Cost from '../Components/cost.js';

import geotherm from '../Images/geothermal.jpg'


export default function CleanSolutionsGeothermal() {
  return (<>
    <h1>Geothermal Power</h1>
    <div className="content">
      <div>
        <div className="solution">
          <SolutionHeading solutionName="Geothermal Power" cost={<Cost value="17,000 to 32,000"></Cost>} />
          <TextWrap wrappedSide="left" wrappedElt={<>
            <img src={geotherm} height="auto" width="100"></img>
          </>} textElt={<>
            <p><b>Geothermal power</b> is created by using the heat from the Earth to generate energy. 
            This energy comes from the radioactive decay of natural isotopes of elements. 
            The heat used to generate this this energy comes from natural phenomena such as geysers, hot springs and lava flows. 
            This energy has also been used since ancient times by many cultures for cooking, bathing, and warmth.</p>
            <p>Loop systems are pipes buried underground to absorb heat from it. These pipes usually have water or antifreeze to effectively absorb heat. There 4 types of ground loop systems.
              One type is an open loop system. The other three are closed loop systems.</p>
            <p>
              <b>Horizontal Loop</b> systems are generally the most cost-effective system, especially when there is lots of available land nearby. 
              </p>
              <p>
              <b>Vertical Loop</b> systems are more expensive but are better for places with little land. They are also used when there isn't enough soil to dig trenches for horizontal loops.
              </p>
              <p>
              If there is a suitable Pond/Lake nearby, you can use a <b>Pond/Lake Loop</b> system. These loop pipes in the water are the cheapest option if available.
              </p>
              <p>
              Finally, <b>Open Loop</b> systems don't cycle fluids through loops but rather dip the ends of the pipe into a deep source of groundwater. 
              The warm water goes to the top and into the pipe and then discharges the cold water back to the source.
            </p>
            <p>The energy generated by a geothermal plant is negligible compared to the total energy stored in the Earth. Like most other sources of renewable energy,
              greenhouse gas emissions are only created from this source during the construction of geothermal plants. No more greenhouse gases are emitted after installation.
            </p>
            <p>Switching to Geothermal power is a more complicated decision to make compared to other sources of green energy. Your location matters a lot because the
              rock content and geological activity can affect the efficiency. In addition, groundwater location placement and quality are important because this water can be used
              for a possible open loop system.
              Lastly, land availability is important as it decides which type of geothermal energy loop to use.
            </p>
            <p>Some states have incentives for adopting geothermal, so <Link to="/tax-incentives"><b>check out the map</b></Link> for more cost information.</p>
          
          </>}/>
        </div>

      </div>
    </div>

  </>);
}