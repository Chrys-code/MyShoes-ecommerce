import React, { Component } from "react";

export class Slide extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: this.props.images,
    };
  }

  render() {
    return (
      <div style={this.props.style} className="slide">
        {this.state.images.map((image, index) => {
          return <img key={index} src={image.src} />;
        })}
      </div>
    );
  }
}

export default Slide;
