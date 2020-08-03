import React, { useState } from "react";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { InView } from "react-intersection-observer";

import "./App.scss";

const settings = {
  delay: "3s",
  ease: "cubic-bezier(0.16, 1, 0.3, 1)",
  divider: 3,
};

const THRESHOLD = [0.25, 0.5, 0.75];

function App() {
  const [style, setStyle] = useState();
  const [scrollY, setScrollY] = useState();
  const [elementStyle20, setElementStyle20] = useState();
  const [elementStyle40, setElementStyle40] = useState();

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const style = {
        transform: `translate3d(0, ${currPos.y / settings.divider}px, 0)`,
        transition: `transform ${settings.delay} ${settings.ease}`,
      };
      setStyle(style);
      setScrollY(currPos.y);
    },
    // null,
    // null,
    // false,
    // 300
  );

  const handleInView = (inView, entry) => {
    const style20 = {
      transform: `translate3d(0, ${entry ? entry.intersectionRatio * 20 : 20}px, 0)`,
      transition: `transform ${settings.delay} ${settings.ease}`,
    }
    const style40 = {
      transform: `translate3d(0, ${entry ? entry.intersectionRatio * 40 : 40}px, 0)`,
      transition: `transform ${settings.delay} ${settings.ease}`,
    }

    setElementStyle20(style20);
    setElementStyle40(style40);
  };

  return (
    <div className="App">
      <div className="container" style={style}>
        <InView
          as="div"
          className="article"
          threshold={THRESHOLD}
          onChange={handleInView}
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. In
            cursus turpis massa tincidunt dui ut ornare lectus. Nec ultrices dui
            sapien eget. Vulputate sapien nec sagittis aliquam malesuada
            bibendum. Sodales ut etiam sit amet. Proin sagittis nisl rhoncus
            mattis rhoncus urna neque viverra justo. Massa tincidunt nunc
            pulvinar sapien et. Pellentesque diam volutpat commodo sed egestas
            egestas fringilla phasellus. Dui sapien eget mi proin sed libero
            enim sed. Vitae purus faucibus ornare suspendisse sed nisi. Est
            ultricies integer quis auctor elit sed. Blandit cursus risus at
            ultrices mi tempus. Et malesuada fames ac turpis egestas maecenas
            pharetra convallis posuere. Pharetra massa massa ultricies mi quis
            hendrerit dolor magna. Tristique sollicitudin nibh sit amet commodo
            nulla facilisi nullam vehicula. Nulla malesuada pellentesque elit
            eget gravida cum sociis natoque penatibus. Volutpat est velit
            egestas dui id ornare arcu. Maecenas ultricies mi eget mauris
            pharetra et ultrices neque. Porta lorem mollis aliquam ut porttitor.
            Tortor consequat id porta nibh
          </p>
          <div className="element">
            <div className="element__header">
              <p>malesuada pellentesque</p>
            </div>
            <div 
              className="element__text"
            >
              <p style={elementStyle20}>Lorem ipsum dolor sit amet</p>
              <p style={elementStyle20}>consectetur adipiscing elit</p>
            </div>
            <div className="element__tags">
              <p style={elementStyle40}>ipsum, dolor, sit</p>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. In
            cursus turpis massa tincidunt dui ut ornare lectus. Nec ultrices dui
            sapien eget. Vulputate sapien nec sagittis aliquam malesuada
            bibendum. Sodales ut etiam sit amet. Proin sagittis nisl rhoncus
            mattis rhoncus urna neque viverra justo. Massa tincidunt nunc
            pulvinar sapien et. Pellentesque diam volutpat commodo sed egestas
            egestas fringilla phasellus. Dui sapien eget mi proin sed libero
            enim sed. Vitae purus faucibus ornare suspendisse sed nisi. Est
            ultricies integer quis auctor elit sed. Blandit cursus risus at
            ultrices mi tempus. Et malesuada fames ac turpis egestas maecenas
            pharetra convallis posuere. Pharetra massa massa ultricies mi quis
            hendrerit dolor magna. Tristique sollicitudin nibh sit amet commodo
            nulla facilisi nullam vehicula. Nulla malesuada pellentesque elit
            eget gravida cum sociis natoque penatibus. Volutpat est velit
            egestas dui id ornare arcu. Maecenas ultricies mi eget mauris
            pharetra et ultrices neque. Porta lorem mollis aliquam ut porttitor.
            Tortor consequat id porta nibh
          </p>
          <hr/>
        </InView>
        <InView
          as="div"
          className="article"
          threshold={THRESHOLD}
          onChange={handleInView}
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. In
            cursus turpis massa tincidunt dui ut ornare lectus. Nec ultrices dui
            sapien eget. Vulputate sapien nec sagittis aliquam malesuada
            bibendum. Sodales ut etiam sit amet. Proin sagittis nisl rhoncus
            mattis rhoncus urna neque viverra justo. Massa tincidunt nunc
            pulvinar sapien et. Pellentesque diam volutpat commodo sed egestas
            egestas fringilla phasellus. Dui sapien eget mi proin sed libero
            enim sed. Vitae purus faucibus ornare suspendisse sed nisi. Est
            ultricies integer quis auctor elit sed. Blandit cursus risus at
            ultrices mi tempus. Et malesuada fames ac turpis egestas maecenas
            pharetra convallis posuere. Pharetra massa massa ultricies mi quis
            hendrerit dolor magna. Tristique sollicitudin nibh sit amet commodo
            nulla facilisi nullam vehicula. Nulla malesuada pellentesque elit
            eget gravida cum sociis natoque penatibus. Volutpat est velit
            egestas dui id ornare arcu. Maecenas ultricies mi eget mauris
            pharetra et ultrices neque. Porta lorem mollis aliquam ut porttitor.
            Tortor consequat id porta nibh
          </p>
          <div className="element">
            <div className="element__header">
              <p>malesuada pellentesque</p>
            </div>
            <div 
              className="element__text"
            >
              <p style={elementStyle20}>Lorem ipsum dolor sit amet</p>
              <p style={elementStyle20}>consectetur adipiscing elit</p>
            </div>
            <div className="element__tags">
              <p style={elementStyle40}>ipsum, dolor, sit</p>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. In
            cursus turpis massa tincidunt dui ut ornare lectus. Nec ultrices dui
            sapien eget. Vulputate sapien nec sagittis aliquam malesuada
            bibendum. Sodales ut etiam sit amet. Proin sagittis nisl rhoncus
            mattis rhoncus urna neque viverra justo. Massa tincidunt nunc
            pulvinar sapien et. Pellentesque diam volutpat commodo sed egestas
            egestas fringilla phasellus. Dui sapien eget mi proin sed libero
            enim sed. Vitae purus faucibus ornare suspendisse sed nisi. Est
            ultricies integer quis auctor elit sed. Blandit cursus risus at
            ultrices mi tempus. Et malesuada fames ac turpis egestas maecenas
            pharetra convallis posuere. Pharetra massa massa ultricies mi quis
            hendrerit dolor magna. Tristique sollicitudin nibh sit amet commodo
            nulla facilisi nullam vehicula. Nulla malesuada pellentesque elit
            eget gravida cum sociis natoque penatibus. Volutpat est velit
            egestas dui id ornare arcu. Maecenas ultricies mi eget mauris
            pharetra et ultrices neque. Porta lorem mollis aliquam ut porttitor.
            Tortor consequat id porta nibh
          </p>
          <hr/>
        </InView>
        <InView
          as="div"
          className="article"
          threshold={THRESHOLD}
          onChange={handleInView}
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. In
            cursus turpis massa tincidunt dui ut ornare lectus. Nec ultrices dui
            sapien eget. Vulputate sapien nec sagittis aliquam malesuada
            bibendum. Sodales ut etiam sit amet. Proin sagittis nisl rhoncus
            mattis rhoncus urna neque viverra justo. Massa tincidunt nunc
            pulvinar sapien et. Pellentesque diam volutpat commodo sed egestas
            egestas fringilla phasellus. Dui sapien eget mi proin sed libero
            enim sed. Vitae purus faucibus ornare suspendisse sed nisi. Est
            ultricies integer quis auctor elit sed. Blandit cursus risus at
            ultrices mi tempus. Et malesuada fames ac turpis egestas maecenas
            pharetra convallis posuere. Pharetra massa massa ultricies mi quis
            hendrerit dolor magna. Tristique sollicitudin nibh sit amet commodo
            nulla facilisi nullam vehicula. Nulla malesuada pellentesque elit
            eget gravida cum sociis natoque penatibus. Volutpat est velit
            egestas dui id ornare arcu. Maecenas ultricies mi eget mauris
            pharetra et ultrices neque. Porta lorem mollis aliquam ut porttitor.
            Tortor consequat id porta nibh
          </p>
          <div className="element">
            <div className="element__header">
              <p>malesuada pellentesque</p>
            </div>
            <div 
              className="element__text"
            >
              <p style={elementStyle20}>Lorem ipsum dolor sit amet</p>
              <p style={elementStyle20}>consectetur adipiscing elit</p>
            </div>
            <div className="element__tags">
              <p style={elementStyle40}>ipsum, dolor, sit</p>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. In
            cursus turpis massa tincidunt dui ut ornare lectus. Nec ultrices dui
            sapien eget. Vulputate sapien nec sagittis aliquam malesuada
            bibendum. Sodales ut etiam sit amet. Proin sagittis nisl rhoncus
            mattis rhoncus urna neque viverra justo. Massa tincidunt nunc
            pulvinar sapien et. Pellentesque diam volutpat commodo sed egestas
            egestas fringilla phasellus. Dui sapien eget mi proin sed libero
            enim sed. Vitae purus faucibus ornare suspendisse sed nisi. Est
            ultricies integer quis auctor elit sed. Blandit cursus risus at
            ultrices mi tempus. Et malesuada fames ac turpis egestas maecenas
            pharetra convallis posuere. Pharetra massa massa ultricies mi quis
            hendrerit dolor magna. Tristique sollicitudin nibh sit amet commodo
            nulla facilisi nullam vehicula. Nulla malesuada pellentesque elit
            eget gravida cum sociis natoque penatibus. Volutpat est velit
            egestas dui id ornare arcu. Maecenas ultricies mi eget mauris
            pharetra et ultrices neque. Porta lorem mollis aliquam ut porttitor.
            Tortor consequat id porta nibh
          </p>
          <hr/>
        </InView>
      </div>
    </div>
  );
}

export default App;
