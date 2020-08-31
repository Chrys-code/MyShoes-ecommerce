import React, { Component } from "react";
import Slide from "./Slide";

export class SlideCont extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeIndex: this.props.activeIndex,
      images: this.props.images,
      style: {
        transition: "2s ease-in-out",
      },
    };
  }

  //Transition end, setTransition='none', index=0; , setTransition="intialState"

  componentDidMount() {
    setInterval(() => {
      this.autoplay();
    }, 6000);

    window.addEventListener("transitionend", () => {
      let index = this.state.activeIndex;
      let images = this.state.images;

      if (images[index].id === 4) {
        this.setState({ activeIndex: 0, style: { transition: "none" } });
        setTimeout(() => {
          this.setState({ style: { transition: "2s ease-in-out" } });
        }, 10);
      }
    });
  }

  componentWillUnmount() {
    clearInterval();
    clearTimeout();
    window.removeEventListener("transitionend");
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
  }

  render() {
    const style = {
      transition: this.state.style.transition,
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
