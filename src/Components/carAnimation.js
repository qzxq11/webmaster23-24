import React, { useEffect, useRef } from 'react';
import '../css/carAnimation.css';

export default function CarAnimation(props) {
    const tickContainer = useRef(null);
    const speedPointer = useRef(null);

    useEffect(() => {
        const centerX = 5;
        const centerY = 5;

        const tickCircumference = 240;
        const tickCount = 61;
        const majorTickInterval = 5; // Number of ticks from one large tick to another

        const tickAngleBetween = tickCircumference / (tickCount - 1);
        const majorTickStartDist = 2.8;
        const minorTickStartDist = 3.5;
        const tickEndDist = 4;

        let tickI = 0;
        for (let angleDeg = 90 + tickCircumference / 2; angleDeg >= 90 - tickCircumference / 2; angleDeg -= tickAngleBetween) {
            let angle = angleDeg * Math.PI / 180;
            
            let newLine = document.createElementNS('http://www.w3.org/2000/svg','line');

            let startDist = tickI % majorTickInterval === 0 ? majorTickStartDist : minorTickStartDist;
            let startPos = [centerX + startDist * Math.cos(angle), centerY - startDist * Math.sin(angle)];
            let endPos = [centerX + tickEndDist * Math.cos(angle), centerY - tickEndDist * Math.sin(angle)];
            
            newLine.setAttribute('x1', startPos[0]);
            newLine.setAttribute('y1', startPos[1]);
            newLine.setAttribute('x2', endPos[0]);
            newLine.setAttribute('y2', endPos[1]);
            newLine.setAttribute('stroke', 'black');
            newLine.setAttribute('stroke-width', '0.05');
            tickContainer.current.appendChild(newLine);

            tickI ++;
        }

        const pointerLength = 3.5;
        setInterval(() => {
            if (!speedPointer.current) { // Don't run on other pages
                return;
            }

            let pointerAngle = getComputedStyle(speedPointer.current).getPropertyValue('--speed-pointer-angle') * Math.PI / 180;
            speedPointer.current.setAttribute('x1', centerX);
            speedPointer.current.setAttribute('y1', centerY);
            speedPointer.current.setAttribute('x2', centerX + pointerLength * Math.cos(pointerAngle));
            speedPointer.current.setAttribute('y2', centerY - pointerLength * Math.sin(pointerAngle));
        }, 10);
    }, []);

    return (<>
        <svg className="car-animation" viewBox="0 0 10 10" style={props.style}>
            <circle className="speedometer-edge" cx="5" cy="5" r="4" stroke="black" strokeWidth="0.1"></circle>
            <g className="ticks" ref={tickContainer}></g>
            <line className="speed-pointer" ref={speedPointer} stroke="red" strokeWidth="0.15"></line>
        </svg>
    </>)
}