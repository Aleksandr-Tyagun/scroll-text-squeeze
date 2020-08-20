import React, { useRef } from "react";
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import { useInView } from 'react-intersection-observer'

import "./App.scss";

const settings = {
  delay: "3s",
  ease: "cubic-bezier(0.16, 1, 0.3, 1)",
};

function thresholdList() {
  let thresholds = [];
  let numSteps = 20;

  for (let i=1.0; i<=numSteps; i++) {
    let ratio = i/numSteps;
    thresholds.push(ratio);
  }

  thresholds.push(0);
  return thresholds;
}

function App() {
  const scrollY = useRef(0);
  const distanceToTop = useRef(0);
  const elRef = useRef(null);

  const visibleFlag = useRef(false);
  const startPosition = useRef(0);

  const [blockRef, inView, entry] = useInView({
    threshold: thresholdList(),
  })

  const getCoef = (distToTop, startPos) => {
    const result = distToTop / startPos;

    if(!startPos || result < 0) {
      return 0
    }

    if(result > 1) {
      return 1
    }
    
    return result;
  }

  useScrollPosition(({ prevPos, currPos }) => {
    if(inView) {
      scrollY.current = currPos.y
      distanceToTop.current = elRef.current.getBoundingClientRect().top;
      // console.log('\n');
      // console.log("Distance to top: ", distanceToTop.current);
      // console.log("scroll Y: ", scrollY.current);
      // console.log("start position", startPosition.current);

      console.log(getCoef(distanceToTop.current, startPosition.current))
    }

    if(visibleFlag.current === false && inView) {
      visibleFlag.current = true;
      startPosition.current = distanceToTop.current;
    }
  })

  return (
    <div className="App">
      <div className="container">
        <div className="article">
          <div className="element">
            <div className="element__header">
              <p>malesuada pellentesque</p>
            </div>
            <div className="element__text">
              <p>Lorem ipsum dolor sit amet</p>
              <p>consectetur adipiscing elit</p>
            </div>
            <div className="element__tags">
              <p>ipsum, dolor, sit</p>
            </div>
          </div>
        </div>
        <div ref={blockRef} className="article">
          <div ref={elRef} className="element">
            <div className="element__header">
              <p>malesuada pellentesque</p>
            </div>
            <div className="element__text">
              {/* <p style={elementStyle40}>Lorem ipsum dolor sit amet</p>
              <p style={elementStyle40}>consectetur adipiscing elit</p> */}
              <p>Lorem ipsum dolor sit amet</p>
              <p>consectetur adipiscing elit</p>
            </div>
            <div className="element__tags">
              {/* <p style={elementStyle80}>ipsum, dolor, sit</p> */}
              <p>ipsum, dolor, sit</p>
            </div>
          </div>
        </div>
        <div className="article">
          <div className="element">
            <div className="element__header">
              <p>malesuada pellentesque</p>
            </div>
            <div className="element__text">
              <p>Lorem ipsum dolor sit amet</p>
              <p>consectetur adipiscing elit</p>
            </div>
            <div className="element__tags">
              <p>ipsum, dolor, sit</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
