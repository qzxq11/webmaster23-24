import React from 'react';
import { Link } from "react-router-dom";
import TextWrap from '../Components/textWrap.js';
import SolutionHeading from '../Components/solutionHeading.js';
import Cost from '../Components/cost.js';

import LED from '../Images/LED.jpg'


export default function CleanSolutionsHome() {
  return (<>
    <h1>LED Lightbulbs</h1>
    <div className="content">
      <div>
        <div className="solution">
          <TextWrap wrappedSide="left" wrappedElt={<>
            <img src={LED}></img>
          </>} textElt={<>
            <p><b>LED</b> lightbulbs waste less energy on producing UV rays and heat alongside light, which make them produce light up to 90% more efficiently than incandescent light bulbs.
            In addition to being more efficient, they last way longer and they don't suddenly fail in the way incandescent and CFL's do. 
            Rather they experience "Lumen Deprecation" which means that they gradually become dimmer.
            The heat LEDs produce is absorbed into a heat sink which improves their performance and longevity.</p>
          
            <Cost value="$4.75 per lightbulb per year plus costs on replacing lightbulbs"></Cost>
          </>}/>
        </div>

      </div>
    </div>

  </>);
}