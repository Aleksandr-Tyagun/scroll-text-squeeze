import React, { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

import "./App.scss";

function buildThresholdList() {
  let thresholds = [];
  let numSteps = 20;

  for (let i=1.0; i<=numSteps; i++) {
    let ratio = i/numSteps;
    thresholds.push(ratio);
  }

  thresholds.push(0);
  return thresholds;
}

const settings = {
  delay: 3000,
  ease: "cubic-bezier(0.16, 1, 0.3, 1)",
  threshold: buildThresholdList(),
  translate: 40,
  squeezeOut: false,
  resetOnOutOfView: true,
  rates: [1, 1, 2],
};

function App() {
  const elementRef = useRef(null);
  const intersectionRatio = useRef(0);

  const [observeRef, inView, entry] = useInView({
    threshold: settings.threshold,
  });

  const styleConfig = (translateSize = 20, intersectionRatio) => {
    const translate = translateSize - intersectionRatio * translateSize;

    return [
      `transform: translate3d(0, ${translate}px, 0)`,
      `transition: transform ${settings.delay}ms ${settings.ease}`,
    ].join(";");
  };

  useEffect(() => {
    if (!inView && settings.resetOnOutOfView) {
      intersectionRatio.current = 0;
    }
    if (!entry) {
      return;
    }
    console.clear();
    console.log(entry);

    const elementChildrenAmount = elementRef.current.childElementCount - 1;

    elementRef.current.style.cssText = styleConfig(
      settings.translate * settings.rates[0],
      intersectionRatio.current 
    );

    for (let i = 0; i <= elementChildrenAmount; i++) {
      if (i !== 0 && elementChildrenAmount) {
        elementRef.current.children[i].style.cssText = styleConfig(
          settings.translate * settings.rates[1],
          intersectionRatio.current 
        );
      }
      if (i === elementChildrenAmount) {
        elementRef.current.children[i].style.cssText = styleConfig(
          settings.translate * settings.rates[2],
          intersectionRatio.current
        );
      }
    }

    if (
      entry.intersectionRatio > intersectionRatio.current ||
      settings.squeezeOut
    ) {
      intersectionRatio.current = entry.intersectionRatio;
    }
  }, [inView, entry]);

  return (
    <div className="App">
      <div className="container">
        <div className="article">
          <div className="element">
            <div className="element__header">
              <p>malesuada pellentesque</p>
            </div>
            <div className="element__text">
              <p>
                Indiegogo superstar smart
                <br /> clock which ease your life
              </p>
            </div>
            <div className="element__tags">
              <p>ipsum, dolor, sit</p>
            </div>
          </div>
        </div>
        <div className="article" ref={observeRef}>
          <div className="element" ref={elementRef}>
            <div className="element__header">
              <p>malesuada pellentesque</p>
            </div>
            <div className="element__text">
              <p>
                Indiegogo superstar smart
                <br /> clock which ease your life
              </p>
            </div>
            <div className="element__tags">
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
              <p>
                Indiegogo superstar smart
                <br /> clock which ease your life
              </p>
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
