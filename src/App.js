import React, { useState } from "react";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { InView } from "react-intersection-observer";

import "./App.scss";

const settings = {
  delay: "3s",
  ease: "cubic-bezier(0.16, 1, 0.3, 1)",
  divider: 3,
};

const THRESHOLD = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1];

function App() {
  const [style, setStyle] = useState();
  const [elementStyle20, setElementStyle20] = useState();
  const [elementStyle40, setElementStyle40] = useState();

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
    // const translateY = (base, entry) => {
    //   if(!entry) {
    //     return base;
    //   }

    //   if(entry.intersectionRatio <= 0.5) {
    //     return base
    //   }
    //   if(entry.intersectionRatio > 0.5) {
    //     return
    //   }
    // }

    const style20 = {
      transform: `translate3d(0, ${
        entry ? 40 - entry.intersectionRatio * 40 : 40
      }px, 0)`,
      transition: `transform ${settings.delay} ${settings.ease}`,
    };
    const style40 = {
      transform: `translate3d(0, ${
        entry ? 80 - entry.intersectionRatio * 80 : 80
      }px, 0)`,
      transition: `transform ${settings.delay} ${settings.ease}`,
    };

    setElementStyle20(style20);
    setElementStyle40(style40);
    console.log(entry.intersectionRatio);
  };

  return (
    <div className="App">
      <div className="container" style={style}>
        <div className="article">
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
            <div className="element__text">
              <p>Lorem ipsum dolor sit amet</p>
              <p>consectetur adipiscing elit</p>
            </div>
            <div className="element__tags">
              <p>ipsum, dolor, sit</p>
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
          <hr />
        </div>
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
            <div className="element__text">
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
          <hr />
        </InView>
        <div className="article">
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
            <div className="element__text">
              <p>Lorem ipsum dolor sit amet</p>
              <p>consectetur adipiscing elit</p>
            </div>
            <div className="element__tags">
              <p>ipsum, dolor, sit</p>
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
          <hr />
        </div>
      </div>
    </div>
  );
}

export default App;
