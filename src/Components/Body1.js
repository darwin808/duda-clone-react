import React, { useState, useEffect } from "react";
import "./Body1.scss";
import bg1 from "../Assets/bg1.jpg";
import bg2 from "../Assets/bg2.jpg";
import bg3 from "../Assets/bg3.jpg";
import bg4 from "../Assets/bg4.jpg";

const Body1 = () => {
  const [slider, setslider] = useState(0);
  const src = [bg1, bg2, bg3, bg4];
  const increment = () => {
    console.log(slider);
    slider > 2 ? setslider(0) : setslider(slider + 1);
  };

  const decrement = () => {
    slider < 1 ? setslider(3) : setslider(slider - 1);
  };

  useEffect(() => {
    setTimeout(() => {
      increment();
    }, 3000);
  }, [slider]);

  return (
    <div className="body1">
      <img className="imgBody1" src={src[slider]} alt="asda" />
      <i
        onClick={increment}
        id="rightArrow"
        class="fas fa-chevron-right fa-3x"></i>
      <i
        onClick={decrement}
        id="leftArrow"
        class="fas fa-chevron-left fa-3x"></i>

      {slider === 0 ? (
        <div className="bg1Desc">
          <h1 className="bg1DescHeader">Agriculture</h1>
          <h2 className="bg1DescSubheader">
            From our roots as a family, growing healthy food products since 1926
          </h2>
        </div>
      ) : null}

      {slider === 1 ? (
        <div className="bg1Desc">
          <h1 className="bg1DescHeader">Community</h1>
          <h2 className="bg1DescSubheader">
            To planning and building vibrant communities with balanced growth...
          </h2>
        </div>
      ) : null}

      {slider === 2 ? (
        <div className="bg1Desc">
          <h1 className="bg1DescHeader">Stewardship</h1>
          <h2 className="bg1DescSubheader">
            Our respect for the land and its resources spans generations...
          </h2>
        </div>
      ) : null}

      {slider === 3 ? (
        <div className="bg1Desc">
          <h1 className="bg1DescHeader">People</h1>
          <h2 className="bg1DescSubheader">
            And our success is firmly rooted in our faith and our people.
          </h2>
        </div>
      ) : null}
    </div>
  );
};

export default Body1;
