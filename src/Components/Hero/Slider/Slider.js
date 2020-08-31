import React, { Component } from "react";
import "./SliderStyle.scss";
import SlideCont from "./SlideCont";

export class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeIndex: 0,
      images: [
        require("../../../Assets/Images/road-3.jpg"),

        require("../../../Assets/Images/road-1.jpg"),

        require("../../../Assets/Images/road-2.jpg"),

        require("../../../Assets/Images/road-3.jpg"),
        require("../../../Assets/Images/road-1.jpg"),
      ],
      //images: imageList,
    };
  }

  render() {
    return (
      <div className="slider">
        <SlideCont
          activeIndex={this.state.activeIndex}
          images={this.state.images}
        />
      </div>
    );
  }
}

export default Slider;
