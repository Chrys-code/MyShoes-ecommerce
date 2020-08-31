import React from "react";
import "./HeroStyle.scss";
import Slider from "./Slider/Slider";

function Hero() {
  return (
    <div className="card_hero container_static">
      <div className="slideshow">
        <Slider />
      </div>
    </div>
  );
}

export default Hero;
