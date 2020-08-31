import React, { Component } from "react";
import Slide from "./Slide";

export class SlideCont extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeIndex: this.props.activeIndex,
      images: this.props.images,
    };
  }

  //Transition end, setTransition='none', index=0; , setTransition="intialState"

  componentDidMount() {
    setInterval(() => {
      this.autoplay();
    }, 6000);
  }

  autoplay() {
    let index = this.state.activeIndex;
    let length = this.state.images.length - 1;
    if (index >= length) {
      index = 0;
      this.setState({ activeIndex: index });
    } else {
      index++;
      this.setState({ activeIndex: index });
    }
    console.log(index);
  }

  render() {
    const style = {
      transition: "2s ease-in-out",
      transform: `translateX(${-100 * this.state.activeIndex}%)`,
    };

    return (
      <div className="slide_cont">
        <Slide style={style} images={this.state.images} />
      </div>
    );
  }
}

export default SlideCont;
