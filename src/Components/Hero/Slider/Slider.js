import React, { Component } from "react";
import "./SliderStyle.scss";
import SlideCont from "./SlideCont";

export class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeIndex: 0,
      images: [
        { src: require("../../../Assets/Images/road-1.jpg"), id: 1 },
        {
          src: require("../../../Assets/Images/road-2.jpg"),
          id: 2,
        },
        {
          src: require("../../../Assets/Images/road-3.jpg"),
          id: 3,
        },
        {
          src: require("../../../Assets/Images/road-1.jpg"),
          id: 4,
        },
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
