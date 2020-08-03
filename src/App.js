import React, { useState } from "react";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { InView } from "react-intersection-observer";

import "./App.scss";

const settings = {
  delay: "3s",
  ease: "cubic-bezier(0.16, 1, 0.3, 1)",
  divider: 4,
};

const THRESHOLD = [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1];

function App() {
  const [style, setStyle] = useState();
  const [elementStyle40, setElementStyle40] = useState();
  const [elementStyle80, setElementStyle80] = useState();

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const style = {
        transform: `translate3d(0, ${currPos.y / settings.divider}px, 0)`,
        transition: `transform ${settings.delay} ${settings.ease}`,
      };
      setStyle(style);
    }
    // null,
    // null,
    // false,
    // 300
  );

  const handleInView = (inView, entry) => {
    const translateY = (base, entry) => {
      return base - entry.intersectionRatio * base;
    };

    const style40 = {
      transform: `translate3d(0, ${translateY(40, entry)}px, 0)`,
      transition: `transform ${settings.delay} ${settings.ease}`,
    };
    const style80 = {
      transform: `translate3d(0, ${translateY(80, entry)}px, 0)`,
      transition: `transform ${settings.delay} ${settings.ease}`,
    };

    setElementStyle40(style40);
    setElementStyle80(style80);
  };

  return (
    <div className="App">
      <div className="container" style={style}>
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
        <InView
          as="div"
          className="article"
          threshold={THRESHOLD}
          onChange={handleInView}
        >
          <div className="element">
            <div className="element__header">
              <p>malesuada pellentesque</p>
            </div>
            <div className="element__text">
              <p style={elementStyle40}>Lorem ipsum dolor sit amet</p>
              <p style={elementStyle40}>consectetur adipiscing elit</p>
            </div>
            <div className="element__tags">
              <p style={elementStyle80}>ipsum, dolor, sit</p>
            </div>
          </div>
        </InView>
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
