import React, { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

import "./App.scss";

const settings = {
  delay: "3s",
  ease: "cubic-bezier(0.16, 1, 0.3, 1)",
  threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
  translate: 30,
};

function App() {
  const elementRef = useRef();
  const [observeRef, inView, entry] = useInView({
    threshold: settings.threshold,
  });

  console.log(observeRef);

  useEffect(() => {
    if (!entry) {
      return;
    }

    const translateY = (base, entry) => {
      return base - entry.intersectionRatio * base;
    };

    console.log(entry.intersectionRatio);

    const styleConfig = (translateSize = 20) => {
      return [
        `transform: translate3d(0, ${translateY(translateSize, entry)}px, 0)`,
        `transition: transform ${settings.delay} ${settings.ease}`,
      ].join(";");
    };

    const elementChildrenAmount = elementRef.current.childElementCount - 1;

    for (let i = 0; i <= elementChildrenAmount; i++) {
      if (i !== 0 && elementChildrenAmount) {
        elementRef.current.children[i].style.cssText = styleConfig(
          settings.translate
        );
      }
      if (i === elementChildrenAmount) {
        elementRef.current.children[i].style.cssText = styleConfig(
          settings.translate * 2
        );
      }
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
